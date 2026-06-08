import { motion } from "framer-motion";
import { FaBriefcase, FaBuilding } from "react-icons/fa";

function Experience() {
  return (
    <motion.section
      className="experience"
      id="experience"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.2
      }}
    >
      <h2>Experience</h2>

      <div className="experience-container">

        <div className="timeline-card">

          {/* ICON */}
          <div className="card-icon">
            <FaBriefcase />
          </div>

          <h3>Data Analyst Intern</h3>

          <h4>
            <FaBuilding style={{ marginRight: "8px" }} />
            Square Yards Consulting Pvt. Ltd.
          </h4>

          <p className="timeline-date">June 2025 – August 2025</p>

          <ul>
            <li>
              Developed SQL queries involving joins, aggregations, filtering,
              and grouping to extract actionable business insights.
            </li>

            <li>
              Cleaned, validated, and transformed large datasets using Excel
              and SQL for reporting and analysis.
            </li>

            <li>
              Created interactive Power BI dashboards to monitor KPIs,
              business performance, and customer trends.
            </li>
          </ul>

        </div>
      </div>
    </motion.section>
  );
}

export default Experience;