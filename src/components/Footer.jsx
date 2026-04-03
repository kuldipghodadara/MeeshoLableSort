export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left - Brand */}
         <div className="flex items-center gap-3">
  <div className="w-9 h-9 flex items-center justify-center">
    <img
      src="/favicon.svg"
      alt="TechKey Logo"
      className="w-full h-full object-contain"
    />
  </div>
  <div>
    <h3 className="font-bold text-xl text-slate-900">
      TechKey Seller Desk
    </h3>
    <p className="text-sm text-slate-500">
      Label Solutions for Indian Sellers
    </p>
  </div>
</div>

          {/* Center - Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-600">
            <a href="/" className="hover:text-indigo-600 transition">Home</a>
            <a href="/meesho" className="hover:text-indigo-600 transition">Meesho Crop</a>
            <a href="/flipkart" className="hover:text-indigo-600 transition">Flipkart Crop</a>
            <a href="/about" className="hover:text-indigo-600 transition">About</a>
            <a href="/help" className="hover:text-indigo-600 transition">Help</a>
          </div>

          {/* Right - Contact & Copyright */}
          <div className="text-center md:text-right">
            <div className="flex flex-col gap-1 text-sm text-slate-600">
              <a href="mailto:kgghodadara@gmail.com" className="hover:text-indigo-600">
                kgghodadara@gmail.com
              </a>
              <a href="tel:+917623922532" className="hover:text-indigo-600">
                +91 76239 22532
              </a>
            </div>
            
            <p className="text-xs text-slate-500 mt-6">
              © {new Date().getFullYear()} TechKey Seller Desk. All rights reserved.<br />
              Built for Indian e-commerce sellers with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}