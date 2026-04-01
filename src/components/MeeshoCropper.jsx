import { useState } from 'react';
import { ArrowLeft, Loader2, Upload } from 'lucide-react';
import * as PDFLib from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import DropZone from './DropZone';

// Reliable worker setup
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

const MM_TO_PT = 6;
const LABEL_PT = 100 * MM_TO_PT;

export default function MeeshoCropper({ onBack }) {
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const addFiles = (newFiles) => {
    const validFiles = Array.from(newFiles).filter(file =>
      file.type === "application/pdf" && 
      !files.some(f => f.name === file.name)
    );
    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
    }
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const processMeesho = async () => {
    if (files.length === 0) {
      return alert("Please select at least one PDF file");
    }

    setIsProcessing(true);

    try {
      const finalDoc = await PDFLib.PDFDocument.create();
      let total = 0;

      for (const file of files) {
        // ✅ IMPORTANT: Clone the buffer for each library
        const originalBuffer = await file.arrayBuffer();
        const bufferForPdfjs = originalBuffer.slice(0);   // Clone for pdf.js
        const bufferForPdflib = originalBuffer.slice(0);  // Clone for pdf-lib

        // Load with pdf.js to check text content
        const pdfjsDoc = await pdfjsLib.getDocument({ data: bufferForPdfjs }).promise;

        // Load fresh copy with pdf-lib
        const srcDoc = await PDFLib.PDFDocument.load(bufferForPdflib);

        for (let i = 0; i < pdfjsDoc.numPages; i++) {
          const page = await pdfjsDoc.getPage(i + 1);
          const textContent = await page.getTextContent();
          const textStr = textContent.items.map(item => item.str).join(' ').toLowerCase();

          // Filter: Keep only pages that look like shipping labels
          if (!textStr.includes("order") && !textStr.includes("id")) continue;

          const [copiedPage] = await finalDoc.copyPages(srcDoc, [i]);
          const { width, height } = copiedPage.getSize();

          copiedPage.setCropBox(0, height - LABEL_PT, width, LABEL_PT);
          finalDoc.addPage(copiedPage);
          total++;
        }
      }

      if (total === 0) {
        alert("No valid Meesho labels found in the uploaded PDFs.");
        return;
      }

      const finalBytes = await finalDoc.save();
      const blob = new Blob([finalBytes], { type: 'application/pdf' });

      window.finalProcessedBlob = blob;
      window.finalTotalLabels = total;
      window.finalProcessName = "Meesho";

      window.location.href = '/results';

    } catch (err) {
      console.error("Meesho Processing Error:", err);
      alert("Processing failed: " + (err.message || "Unknown error"));
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <button 
        onClick={onBack} 
        className="flex items-center gap-2 text-indigo-600 font-medium mb-8 hover:text-indigo-700"
      >
        <ArrowLeft size={20} /> Back to Home
      </button>

      <div className="bg-white rounded-3xl p-10 shadow-sm">
        <h2 className="text-3xl font-bold mb-2">Meesho Label Cropper</h2>
        <p className="text-slate-600 mb-8">
          Upload your Meesho shipping label PDFs. Only valid label pages will be kept and cropped to 4x4.
        </p>
<div
  className="relative"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    alert("🚧 Upload feature coming soon!");
  }}
>
  <div className="pointer-events-none opacity-60">
    <DropZone 
      files={files} 
      onFilesAdded={addFiles} 
      onFileRemove={removeFile} 
    />
  </div>
</div>
      
        <button
          onClick={processMeesho}
          disabled={isProcessing || files.length === 0}
          className="w-full mt-10 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white font-semibold py-4 rounded-2xl text-lg flex items-center justify-center gap-3 transition"
        >
          {isProcessing ? (
            <>
              <Loader2 className="animate-spin" size={24} />
              Processing Labels...
            </>
          ) : (
            <>
              <Upload size={24} />
              Crop & Clean PDF
            </>
          )}
        </button>
      </div>
    </div>
  );
}