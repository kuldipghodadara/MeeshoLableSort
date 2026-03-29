export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl p-12 shadow-sm">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">About TechKey Seller Desk</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 leading-relaxed">
            TechKey Seller Desk is a powerful, local-first web utility designed specifically for Indian e-commerce sellers.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed mt-4">
            It helps Meesho and Flipkart sellers quickly convert standard A4 shipping labels into 
            <strong> 4x4 thermal printer-ready labels</strong> in seconds.
          </p>

          <div className="my-10 bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h3 className="font-semibold text-xl mb-4">Key Features</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✔</span>
                100% Client-side Processing (Your files never leave your browser)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✔</span>
                Automatic removal of unwanted sorting pages
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✔</span>
                Fast cropping for thermal printers (4x4 inch)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✔</span>
                Works completely offline
              </li>
            </ul>
          </div>

          <p className="text-slate-600">
            Built with privacy in mind — all PDF processing happens directly in your browser using 
            modern web technologies (PDF.js + pdf-lib).
          </p>
        </div>
      </div>
    </div>
  );
}