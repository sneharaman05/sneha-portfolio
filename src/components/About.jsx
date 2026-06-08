import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="about-container">

        {/* LEFT IMAGE */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-glass">
            <img src={profileImg} alt="Sneha Raman" />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <p className="about-intro">
  <span className="wave">👋</span> Hello, I'm
</p>

          <h2>
            <span className="glow-name">Sneha Raman</span>
          </h2>

          <p className="about-tagline">
            Data Analyst • BI Developer • AI Enthusiast
          </p>

          <div className="story-block">
            <h3>🎓 Education</h3>
            <p>
              I am a <b>CSE (AI/ML)</b> student focused on building real-world data-driven systems.
            </p>
          </div>

          <div className="story-block">
            <h3>💡 What I Do</h3>
            <p>
              I turn raw data into interactive dashboards using <b>Power BI, SQL, Python</b>{" "}
              and create meaningful business insights.
            </p>
          </div>

          <div className="story-block">
            <h3>🚀 Passion</h3>
            <p>
            
              I enjoy simplifying complex problems into elegant solutions that help
              people make better decisions.
            </p>
          </div>

          <div className="story-block">
            <h3>🎯 Hobbies</h3>
            <p>
              I enjoy travelling and exploring new places and cultures.  
  I’m someone who loves to talk, share ideas, and explore thoughts deeply.  
  It helps me learn, reflect, and grow while keeping me curious, inspired, and thinking beyond boundaries.
            </p>
          </div>

          <p className="about-closing">
            ✨ Always curious to learn, grow, and build impactful solutions.
          </p>

        </motion.div>
      </div>

    </motion.section>
  );
}

export default About;