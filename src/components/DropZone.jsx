import { Upload } from 'lucide-react';

export default function DropZone({ files, onFilesAdded, onFileRemove }) {
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        onFilesAdded(e.dataTransfer.files);
      }}
      onClick={() => document.getElementById('fileInput').click()}
      className="border-2 border-dashed border-slate-300 hover:border-indigo-500 rounded-3xl p-16 text-center cursor-pointer transition-all hover:bg-slate-50"
    >
      <Upload className="w-20 h-20 mx-auto text-slate-400 mb-6" />
      <p className="text-xl font-semibold mb-2">Drag & Drop PDF Files</p>
      <p className="text-slate-500 mb-8">or click to select files</p>

      <input
        id="fileInput"
        type="file"
        multiple
        accept=".pdf"
        className="hidden"
        onChange={(e) => onFilesAdded(e.target.files)}
      />

      {files.length > 0 && (
        <div className="mt-10 text-left max-h-64 overflow-y-auto pr-2">
          <p className="font-medium text-slate-700 mb-4">{files.length} file(s) selected</p>
          {files.map((file, idx) => (
            <div key={idx} className="flex justify-between items-center bg-slate-100 px-5 py-3 rounded-2xl mb-2 text-sm">
              <span className="truncate pr-4">{file.name}</span>
              <button
                onClick={(e) => { e.stopPropagation(); onFileRemove(idx); }}
                className="text-red-500 hover:text-red-600 font-medium text-xs px-3 py-1 hover:bg-red-50 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}