import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Features from './components/Features';
import Faculty from './components/Faculty';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Admission from './components/Admission';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Features />
      <Faculty />
      <Testimonials />
      <Gallery />
      <Admission />
      <Contact />
      <Footer />
    </div>
  );
}
