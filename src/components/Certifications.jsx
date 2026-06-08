import { motion } from "framer-motion";
import { FaBuilding, FaBrain, FaGlobe } from "react-icons/fa";

function Certifications() {
  return (
    <motion.section
      className="certifications"
      id="certifications"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 1.2,
        type: "spring",
        bounce: 0.25
      }}
    >
      <h2>Certifications</h2>

      <div className="cert-grid">

        {/* Deloitte */}
        <div className="cert-card">
          <div className="cert-icon">
  <FaBrain />
</div>

          <h3>Deloitte Australia Data Analytics Simulation</h3>
          <p>Forage • July 2025</p>

          <a href="/deloitte.pdf" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>

        {/* Tata */}
        <div className="cert-card">
          <div className="cert-icon">
  <FaBuilding />
</div>

          <h3>Tata Group Data Analytics Simulation</h3>
          <p>Forage • July 2025</p>

          <a href="/tata.pdf" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>

        {/* UNICEF */}
        <div className="cert-card">
         <div className="cert-icon">
  <FaGlobe />
</div>

          <h3>Digital Productivity with AI</h3>
          <p>UNICEF & YuWaah • Score: 95%</p>

          <a href="/unicef.pdf" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>

      </div>
    </motion.section>
  );
}

export default Certifications;