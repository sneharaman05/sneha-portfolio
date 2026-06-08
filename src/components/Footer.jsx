import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Sneha Raman | Data Analyst Portfolio</p>

      <p>Built with React & ❤️</p>

      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/sneha-raman-b1509b1a7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/sneharaman05"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a href="mailto:sneharaman8016@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}

export default Footer;