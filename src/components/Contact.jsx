import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 1.5,
        type: "spring",
        bounce: 0.2
      }}
    >
      <h2>Let's Connect</h2>

      <p>
        I'm actively seeking opportunities in
        Data Analytics and Business Intelligence.
        Feel free to reach out.
      </p>

      <br />

      <p>
        📧 Email: sneharaman8016@gmail.com
      </p>

      <p>
        📱 Phone: +91 9306630549
      </p>

      <p>
        📍 Haryana, India
      </p>

      <div className="contact-links">

        <a
          href="mailto:sneharaman8016@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/sneha-raman-b1509b1a7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/sneharaman05"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

      </div>
    </motion.section>
  );
}

export default Contact;