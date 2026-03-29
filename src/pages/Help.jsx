export default function Help() {
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white rounded-3xl p-12 shadow-sm text-center">
        <h1 className="text-4xl font-bold mb-4">Need Help?</h1>
        <p className="text-slate-600 mb-10 text-lg">We're here to assist you</p>

        <div className="space-y-8 text-left">
          <div className="border-l-4 border-indigo-600 pl-6">
            <p className="font-semibold text-slate-700 text-lg">Email Support</p>
            <a href="mailto:kgghodadara@gmail.com" className="text-indigo-600 hover:underline text-xl">
              kgghodadara@gmail.com
            </a>
          </div>

          <div className="border-l-4 border-indigo-600 pl-6">
            <p className="font-semibold text-slate-700 text-lg">Phone / WhatsApp</p>
            <a href="tel:+917623922532" className="text-indigo-600 hover:underline text-xl">
              +91 76239 22532
            </a>
          </div>
        </div>

        <a
          href="https://wa.me/917623922532"
          target="_blank"
          className="mt-12 inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold text-lg px-10 py-4 rounded-2xl transition w-full"
        >
          💬 Chat on WhatsApp
        </a>

        <p className="text-xs text-slate-500 mt-10">
          Response time: Usually within 1-2 hours during business hours
        </p>
      </div>
    </div>
  );
}