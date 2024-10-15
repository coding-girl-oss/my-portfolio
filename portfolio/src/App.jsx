import { useRef } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';

const App = () => {
 
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      
      <div className="h-30  flex flex-col sm:flex-row sm:h-20 bg-green-100">
        <span className="px-6 text-3xl sm:py-5 font-bold text-green-600">WebDev</span>
       
        <div className="flex gap-4 px-10 py-5 sm:py-7 text-xl">
        <button onClick={() => scrollToSection(homeRef)} className="hover:text-green-300">
              Home
            </button>
            <button onClick={() => scrollToSection(aboutRef)} className="hover:text-green-300">
              About
            </button>
            <button onClick={() => scrollToSection(contactRef)} className="hover:text-green-300">
              Contact
            </button>
            <button onClick={() => scrollToSection(projectRef)} className="hover:text-green-300">
              Project
            </button>
        </div>
    </div>

     
      <section ref={homeRef}>
        <Home />
      </section>

      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={contactRef}>
        <Contact />
      </section>

      <section ref={projectRef}>
        <Project />
      </section>
    </>
  );
};

export default App;

