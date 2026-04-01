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

  <div className="flex flex-col md:flex-row gap-4 justify-center">
    
    {/* Windows 10/11 64-bit */}
    <a 
      href="https://your-link-win10-64.exe"
      target="_blank"
      className="bg-white text-slate-900 font-bold px-8 py-4 rounded-2xl hover:bg-slate-100 transition text-lg"
    >
      Download Windows 10/11 (64-bit)
    </a>

    {/* Windows 7 32-bit */}
    <a 
      href="https://your-link-win7-32.exe"
      target="_blank"
      className="bg-slate-700 text-white font-bold px-8 py-4 rounded-2xl hover:bg-slate-600 transition text-lg"
    >
      Download Windows 7 (32-bit)
    </a>

  </div>
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