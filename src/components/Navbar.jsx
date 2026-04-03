import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
  <div className="w-9 h-9 flex items-center justify-center">
    <img 
      src="/favicon.svg" 
      alt="TechKey Logo" 
      className="w-full h-full object-contain"
    />
  </div>
  <h1 className="text-2xl font-bold text-indigo-700 tracking-tight">
    TechKey Seller Desk
  </h1>
</div>

        <div className="flex gap-8 text-sm font-semibold text-slate-600">
          <a href="/" className={`hover:text-indigo-600 transition-colors ${location.pathname === '/' ? 'text-indigo-600' : ''}`}>Home</a>
          <a href="/about" className={`hover:text-indigo-600 transition-colors ${location.pathname === '/about' ? 'text-indigo-600' : ''}`}>About</a>
          <a href="/help" className={`hover:text-indigo-600 transition-colors ${location.pathname === '/help' ? 'text-indigo-600' : ''}`}>Help</a>
        </div>
      </div>
    </nav>
  );
}