import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    text: "The concept-focused approach completely changed how my child studies for exams. The personal attention here is unmatched.",
    author: "Mr. Rakesh Singh",
    role: "Parent of 10th SSC Student"
  },
  {
    text: "Moving to Titan Academy in 9th standard gave me the strong foundation I needed. The revision planning is incredibly structured.",
    author: "Priya P.",
    role: "Student, 10th SSC"
  },
  {
    text: "Professional environment with highly dedicated teachers. We noticed a marked improvement in weekly test performance.",
    author: "Mrs. Kulkarni",
    role: "Parent of 9th SSC Student"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="py-24 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium tracking-widest uppercase text-sm mb-3"
          >
            Community Feedback
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Testimonials
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <button onClick={handleNext} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-12 h-[300px] flex flex-col justify-center relative overflow-hidden">
            <Quote className="absolute top-8 left-8 w-24 h-24 text-white/5 rotate-180 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center relative z-10"
              >
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8 italic">
                  "{TESTIMONIALS[currentIndex].text}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-1 bg-gold/50 rounded-full mb-4"></div>
                  <h4 className="text-white font-display font-medium text-lg">{TESTIMONIALS[currentIndex].author}</h4>
                  <p className="text-gray-500 text-sm">{TESTIMONIALS[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-gold' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
