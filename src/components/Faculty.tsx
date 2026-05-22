import { motion } from 'motion/react';
import { Briefcase, BookOpen } from 'lucide-react';

const FACULTY = [
  {
    name: 'Prof. Sharma',
    subject: 'Mathematics',
    exp: 'Expert Educator',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Mrs. Desai',
    subject: 'Science',
    exp: 'Senior Academician',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Mr. Patil',
    subject: 'English & Languages',
    exp: 'Subject Specialist',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Ms. Joshi',
    subject: 'Social Studies',
    exp: 'Academic Guide',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400'
  }
];

export default function Faculty() {
  return (
    <section id="faculty" className="py-24 bg-navy-light/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-medium tracking-widest uppercase text-sm mb-3"
          >
            Academic Leadership
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Expert Faculty
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Guided by dedicated professionals committed to student success.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FACULTY.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-4 overflow-hidden mb-4 relative aspect-[4/5] border-white/5 group-hover:border-white/20 transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover rounded-xl grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
              </div>
              
              <div className="text-center px-2">
                <h4 className="text-xl font-display font-semibold text-white mb-1">{member.name}</h4>
                <div className="flex items-center justify-center gap-2 text-gold text-sm mb-2 font-medium">
                  <BookOpen className="w-4 h-4" />
                  {member.subject}
                </div>
                <div className="flex items-center justify-center gap-1.5 text-gray-500 text-xs uppercase tracking-wider">
                  <Briefcase className="w-3 h-3" />
                  {member.exp}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
