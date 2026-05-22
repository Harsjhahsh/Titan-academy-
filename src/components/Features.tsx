import { motion } from 'motion/react';
import { UserCheck, Laptop, FileSignature, MessageSquare, ClipboardList, TrendingUp, CalendarDays } from 'lucide-react';

const FEATURES = [
  { icon: UserCheck, title: 'Personal Attention', desc: 'Limited batch size to monitor every student.' },
  { icon: Laptop, title: 'Smart Learning System', desc: 'Modern tools and visual aids for concept clarity.' },
  { icon: FileSignature, title: 'Weekly Tests', desc: 'Consistent evaluation to track academic progress.' },
  { icon: MessageSquare, title: 'Doubt Solving', desc: 'Dedicated sessions to address individual questions.' },
  { icon: ClipboardList, title: 'Structured Preparation', desc: 'Step-by-step curriculum planning.' },
  { icon: UserCheck, title: 'Parent Communication', desc: 'Regular feedback and performance tracking.' },
  { icon: CalendarDays, title: 'Revision Planning', desc: 'Systematic recall techniques before exams.' },
  { icon: TrendingUp, title: 'Exam Guidance', desc: 'Board-specific paper presentation strategies.' },
];

export default function Features() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium tracking-widest uppercase text-sm mb-3"
          >
            The Titan Advantage
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Why Choose Us
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card glass-card-hover p-6 rounded-2xl group flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-navy border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-gold/30 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
                <feat.icon className="w-6 h-6 text-gray-300 group-hover:text-gold transition-colors" />
              </div>
              <h4 className="text-lg font-display font-medium text-white mb-2">{feat.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
