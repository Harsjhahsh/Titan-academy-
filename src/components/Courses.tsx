import { motion } from 'motion/react';
import { BookOpen, CheckCircle2 } from 'lucide-react';

const COURSES = [
  {
    grade: '8th SSC',
    title: 'Foundation Batch',
    features: ['Concept Building', 'Homework Support', 'Weekly Practice', 'Maths & Science Focus'],
    accent: 'from-blue-600/20 to-blue-900/20',
    border: 'group-hover:border-blue-500/50'
  },
  {
    grade: '9th SSC',
    title: 'Preparation Batch',
    features: ['Strong Foundation', 'Smart Notes', 'Chapter Revision', 'Practice Sessions'],
    accent: 'from-gold/20 to-yellow-900/20',
    border: 'group-hover:border-gold/50'
  },
  {
    grade: '10th SSC',
    title: 'Board Excellence',
    features: ['SSC Board Preparation', 'PYQ Practice', 'Test Series', 'Full Revision Support', 'Exam Strategy Guidance'],
    accent: 'from-royal/20 to-indigo-900/20',
    border: 'group-hover:border-royal/50'
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-navy-light/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium tracking-widest uppercase text-sm mb-3"
          >
            Academic Programs
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Premium Course Offerings
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Structured specifically for the Maharashtra Board curriculum.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {COURSES.map((course, idx) => (
            <motion.div
              key={course.grade}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group glass-card rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 border-white/5 ${course.border}`}
            >
              {/* Premium Gradient Overlay */}
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${course.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6" />
                </div>
                
                <h4 className="text-3xl font-display font-bold text-white mb-1 group-hover:text-glow transition-all">{course.grade}</h4>
                <p className="text-gray-400 mb-8 border-b border-white/10 pb-6">{course.title}</p>
                
                <ul className="space-y-4 mb-10">
                  {course.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#admission" 
                  className="block w-full py-3 text-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors"
                >
                  Join {course.grade}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
