import { motion } from 'motion/react';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://files.catbox.moe/tv98s5.mp4" type="video/mp4" />
        </video>
        {/* Gradients to blend video with background and text */}
        <div className="absolute inset-0 bg-navy/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm text-gold-light text-sm font-medium tracking-wide uppercase"
          >
            Building Maharashtra Board Excellence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight tracking-tight mb-4"
          >
            TITAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600 block">ACADEMY</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-3xl font-light text-gray-200 mb-8"
          >
            8th • 9th • 10th SSC Board Coaching
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            Premium coaching experience designed for SSC students with concept-focused learning, smart guidance, and structured preparation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 border"
          >
            <a
              href="#admission"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </a>

            <a
              href="#courses"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-medium rounded-full transition-all hover:border-white/30"
            >
              <BookOpen className="w-5 h-5 text-gray-300 group-hover:text-gold transition-colors" />
              Explore Courses
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
