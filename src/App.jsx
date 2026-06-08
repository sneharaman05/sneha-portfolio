
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import "./index.css";
import Stats from "./components/Stats";





function App() {
  return (
    <div id="top" style={{ position: "relative" }}>
    
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;