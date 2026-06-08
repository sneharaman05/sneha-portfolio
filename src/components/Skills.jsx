import { motion } from "framer-motion";
import {
  FaDatabase,
  FaPython,
  FaChartBar,
  FaChartLine
} from "react-icons/fa";

import {
  SiMysql,
  SiPostgresql,
  SiPandas,
  SiNumpy
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Power BI", icon: <FaChartBar /> },
    { name: "Excel", icon: <FaChartBar /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Power Query", icon: <FaChartLine /> },
    { name: "Data Analysis", icon: <FaChartBar /> },
    { name: "EDA", icon: <FaChartLine /> },
    { name: "Data Viz", icon: <FaChartBar /> },
    { name: "ETL", icon: <FaDatabase /> },
    { name: "ML Basics", icon: <FaPython /> }
  ];

  return (
    <motion.section
      className="skills"
      id="skills"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;