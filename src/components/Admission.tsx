import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Admission() {
  return (
    <section id="admission" className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal/20 to-navy z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-50 z-0"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-[3rem] p-10 md:p-20 border border-white/10 shadow-[0_0_50px_rgba(29,78,216,0.3)] relative overflow-hidden"
        >
          {/* Internal Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-royal/30 blur-[100px] rounded-full pointer-events-none"></div>

          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight relative z-10 text-glow">
            Admissions Open <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">for 2026–27</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light relative z-10">
            Secure your seat for the upcoming academic year. Experience premium coaching designed for Maharashtra Board excellence.
          </p>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <button className="group px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-all hover:scale-105 flex items-center gap-2">
              Join 8th SSC <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 rounded-full bg-gold hover:bg-yellow-500 text-navy font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center gap-2">
              Join 9th SSC <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-all hover:scale-105 flex items-center gap-2">
              Join 10th SSC <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
