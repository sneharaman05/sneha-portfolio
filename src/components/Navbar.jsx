import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      
      <div className="logo">
        Sneha <span>Raman</span>
      </div>

      {/* Desktop Menu */}
      <ul className="nav-links">
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#skills" className="nav-link">Skills</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#experience" className="nav-link">Experience</a></li>
        <li><a href="#education" className="nav-link">Education</a></li>
        <li><a href="#certifications" className="nav-link">Certifications</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>

      {/* Hamburger Icon */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
        <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-resume-btn"
        >
          Resume
        </a>
      </div>

      {/* Desktop Resume Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        Resume
      </a>

    </nav>
  );
}

export default Navbar;