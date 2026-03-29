import { ShoppingBag, Truck } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">E-commerce Label Solutions</h1>
        <p className="text-2xl text-slate-600">Fast • Secure • Professional</p>
      </div>

      {/* Desktop App Banner */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-12 text-center">
        <div className="text-4xl mb-4">🚀</div>
        <h3 className="text-3xl font-semibold mb-3">Get the Desktop Version</h3>
        <p className="text-slate-300 mb-8 max-w-md mx-auto">
          Offline processing, advanced sorting & highlighting features
        </p>
        <a 
          href="https://www.dropbox.com/scl/fi/gb7pgkhh0wjxxx5rbdyt4/TechKey-Seller-Desk-1.0.0.exe?rlkey=8i8zxhs1ptu8ki2n3kdxr14gd&st=kkozys7v&dl=0"
          target="_blank"
          className="inline-block bg-white text-slate-900 font-bold px-10 py-4 rounded-2xl hover:bg-slate-100 transition text-lg"
        >
          Download for Windows
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <a href="/meesho" className="group">
          <div className="bg-white rounded-3xl p-12 hover:shadow-2xl transition-all border-2 border-transparent hover:border-indigo-200">
            <ShoppingBag className="w-16 h-16 text-indigo-600 mb-8 group-hover:scale-110 transition" />
            <h3 className="text-3xl font-semibold mb-3">Meesho Crop</h3>
            <p className="text-slate-600 text-lg">Crop 4x4 labels & Auto-clean PDF</p>
          </div>
        </a>

        <a href="/flipkart" className="group">
          <div className="bg-white rounded-3xl p-12 hover:shadow-2xl transition-all border-2 border-transparent hover:border-indigo-200">
            <Truck className="w-16 h-16 text-indigo-600 mb-8 group-hover:scale-110 transition" />
            <h3 className="text-3xl font-semibold mb-3">Flipkart Crop</h3>
            <p className="text-slate-600 text-lg">Convert to 4x4 thermal labels</p>
          </div>
        </a>
      </div>
    </div>
  );
}