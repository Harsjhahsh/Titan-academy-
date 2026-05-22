import { motion } from 'motion/react';
import { Target, Users, Lightbulb, GraduationCap } from 'lucide-react';

const ABOUT_FEATURES = [
  {
    icon: Target,
    title: 'Student-Focused Approach',
    desc: 'Every student receives individual attention to strengthen core concepts.',
  },
  {
    icon: Lightbulb,
    title: 'Smart Learning Philosophy',
    desc: 'Moving beyond rote memorization to true academic understanding.',
  },
  {
    icon: Users,
    title: 'Personal Attention System',
    desc: 'Small batch sizes ensure personalized tracking of every student\'s growth.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-navy relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-gold font-medium tracking-widest uppercase text-sm mb-3">Our Vision</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">
              Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-light to-royal">Standard Education</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              At TITAN ACADEMY, we believe in building a solid foundation. Our modern teaching environment blends traditional discipline with contemporary learning techniques, ensuring students are perfectly prepared for the Maharashtra Board exams.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We provide a premium, structured environment where academic excellence is nurtured without the pressure of overcrowded classrooms.
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="w-12 h-12 rounded-full bg-royal/20 flex items-center justify-center text-royal-light">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-medium">Premium Learning</h4>
                <p className="text-sm text-gray-500">Modern infrastructure & focus</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {ABOUT_FEATURES.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card glass-card-hover p-6 rounded-2xl flex gap-6 items-start group"
              >
                <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-navy-light to-navy border border-white/5 flex items-center justify-center shadow-inner group-hover:border-gold/30 transition-colors">
                  <feat.icon className="w-6 h-6 text-gold-light" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-semibold text-white mb-2">{feat.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
