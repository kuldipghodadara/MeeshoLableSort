import { useState } from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import * as PDFLib from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import DropZone from './DropZone';

const MM_TO_PT = 6;
const LABEL_PT = 100 * MM_TO_PT;

export default function MeeshoCropper({ onBack }) {
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const addFiles = (newFiles) => {
    const validFiles = Array.from(newFiles).filter(file =>
      file.type === "application/pdf" && !files.some(f => f.name === file.name)
    );
    setFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const processMeesho = async () => {
    if (files.length === 0) return alert("Please select files first");

    setIsProcessing(true);

    try {
      const finalDoc = await PDFLib.PDFDocument.create();
      let total = 0;

      for (const file of files) {
        const buffer = await file.arrayBuffer();
        const pdfjsDoc = await pdfjsLib.getDocument({ data: buffer }).promise;
        const srcDoc = await PDFLib.PDFDocument.load(buffer);

        for (let i = 0; i < pdfjsDoc.numPages; i++) {
          const page = await pdfjsDoc.getPage(i + 1);
          const textContent = await page.getTextContent();
          const textStr = textContent.items.map(item => item.str).join(' ').toLowerCase();

          if (!textStr.includes("order") && !textStr.includes("id")) continue;

          const [copiedPage] = await finalDoc.copyPages(srcDoc, [i]);
          const { width, height } = copiedPage.getSize();
          copiedPage.setCropBox(0, height - LABEL_PT, width, LABEL_PT);
          finalDoc.addPage(copiedPage);
          total++;
        }
      }

      if (total === 0) {
        alert("No valid labels found.");
        return;
      }

      const finalBytes = await finalDoc.save();
      const blob = new Blob([finalBytes], { type: 'application/pdf' });

      // Pass result to parent (App)
      window.finalProcessedBlob = blob;
      window.finalTotalLabels = total;
      window.finalProcessName = "Meesho";
      window.location.href = '/results';

    } catch (err) {
      alert("Processing failed: " + err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-indigo-600 font-medium mb-6 hover:text-indigo-700">
        <ArrowLeft size={20} /> Back to Home
      </button>

      <div className="bg-white rounded-3xl p-10 shadow-sm">
        <h2 className="text-3xl font-bold mb-2">Meesho Label Cropper</h2>
        <p className="text-slate-600 mb-8">Process your Meesho label PDF safely in your browser.</p>

        <DropZone files={files} onFilesAdded={addFiles} onFileRemove={removeFile} />

        <button
          onClick={processMeesho}
          disabled={isProcessing || files.length === 0}
          className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-semibold py-4 rounded-2xl text-lg transition flex items-center justify-center gap-3"
        >
          {isProcessing ? (
            <>
              <Loader2 className="animate-spin" /> Processing Labels...
            </>
          ) : (
            'Crop & Clean PDF'
          )}
        </button>
      </div>
    </div>
  );
}