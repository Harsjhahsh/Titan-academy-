export default function Footer() {
  return (
    <footer className="bg-[#050B14] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-royal/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center font-display font-bold text-navy text-xl shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                T
              </div>
              <span className="font-display font-bold text-2xl tracking-wider text-white">
                TITAN<span className="text-gold"> ACADEMY</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Building Maharashtra Board excellence through concept-focused learning, smart guidance, and structured preparation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-gold transition-colors text-sm">About Us</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-gold transition-colors text-sm">Academic Programs</a></li>
              <li><a href="#faculty" className="text-gray-400 hover:text-gold transition-colors text-sm">Expert Faculty</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gold transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Titan Academy. All rights reserved.
          </p>
          <div className="text-gray-500 text-xs flex gap-4">
            <span>Premium SSC Coaching</span>
            <span className="text-white/20">|</span>
            <span>Maharashtra Board</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
