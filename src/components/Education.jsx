import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

function Education() {
  return (
    <motion.section
      className="education"
      id="education"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.5
      }}
    >
      <h2>Education</h2>

      <div className="education-container">

        {/* DEGREE */}
        <div className="timeline-card">

          <div className="card-icon">
            <FaGraduationCap />
          </div>

          <h3>B.Tech in Artificial Intelligence & Machine Learning</h3>

          <h4>Panipat Institute of Engineering & Technology</h4>

          <p className="timeline-date">2022 – 2026</p>

        </div>

        {/* SCHOOL */}
        {/* SCHOOL */}
<div className="timeline-card">
  <div className="card-icon">
    <FaSchool />
  </div>

  <h3>Senior Secondary Education </h3>

  <h4>Shiksha Bharti Vidyalaya</h4>

  <p className="timeline-date">2020–2022 | CBSE Board</p>

</div>

      </div>
    </motion.section>
  );
}

export default Education;