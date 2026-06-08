import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../assets/profile.png";
import {
  FaChartBar,
  FaDatabase,
  FaChartPie,
  FaRocket
} from "react-icons/fa";
import avatar from "../assets/avatar.png";

function Hero() {
  return (
    <section className="hero">

      {/* Background Effects */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
      <div className="shape shape3"></div>

      {/* LEFT CONTENT */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="tag">👋 Available for Opportunities</p>

        <div className="typewriter-wrapper">
  

  <span className="typewriter-text">
    <Typewriter
      words={[
        "Data Analyst",
        "SQL Developer",
        "Power BI Specialist",
        "AI & ML Enthusiast"
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1200}
    />
  </span>
</div>

        <h1>
          Transforming Data
          <br />
          <span>Into Business Intelligence</span>
        </h1>

        <p className="hero-text">
          B.Tech graduate in Computer Science Engineering
          (Artificial Intelligence & Machine Learning)
          with hands-on experience in SQL, Python,
          Power BI, Excel, ETL and Data Visualization.
          Passionate about turning data into actionable insights
          that drive smarter business decisions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Explore Projects 
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            View Resume
          </a>
        </div>

        <div className="hero-skills">
          <span>SQL</span>
          <span>Python</span>
          <span>Power BI</span>
          <span>Excel</span>
        </div>
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
  className="hero-image-section"
  initial={{ opacity: 0, x: 200 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>

  <div className="photo-glow"></div>

  <div className="avatar-wrapper">
     <div className="rotate-ring"></div>
    <img
      src={avatar}
      alt="Avatar"
      className="profile-image avatar"
    />
  </div>

  {/* Floating Cards */}
  <div className="floating-card card1">
    <FaChartBar className="card-icon" />
    <h3>3+</h3>
    <p>Projects</p>
  </div>

  <div className="floating-card card2">
    <FaDatabase className="card-icon" />
    <h3>38K+</h3>
    <p>Records</p>
  </div>

  <div className="floating-card card3">
    <FaChartPie className="card-icon" />
    <h3>30+</h3>
    <p>SQL Queries</p>
  </div>

  <div className="floating-card card4">
    <FaRocket className="card-icon" />
    <h3>Growth</h3>
    <p>Continuous Learning</p>
  </div>

        {/* Decorative Elements */}
        <div className="curve curve1"></div>
        <div className="curve curve2"></div>

        
      </motion.div>

    </section>
  );
}

export default Hero;