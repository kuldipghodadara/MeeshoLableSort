import { Download } from 'lucide-react';

export default function ResultsPage({ onBack }) {
  const totalLabels = window.finalTotalLabels || 0;
  const processName = window.finalProcessName || "Labels";
  const blob = window.finalProcessedBlob;

  const downloadFinal = () => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Processed_${processName}_Labels.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <div className="bg-white rounded-3xl p-12 shadow-sm">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl">
          ✓
        </div>

        <h3 className="text-2xl font-semibold mb-8">Processing Complete!</h3>

        <div className="bg-slate-50 rounded-2xl p-8 mb-10">
          <p className="text-slate-600">Labels Processed</p>
          <p className="text-5xl font-bold text-indigo-600 mt-2">{totalLabels}</p>
        </div>

        <button
          onClick={downloadFinal}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-2xl text-lg flex items-center justify-center gap-3"
        >
          <Download size={22} />
          Download Cropped PDF
        </button>

        <button
          onClick={onBack}
          className="mt-6 text-slate-500 hover:text-slate-700 font-medium"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}