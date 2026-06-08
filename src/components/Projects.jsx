import { motion } from "framer-motion";
import amazonImg from "../assets/amazon.png";
import businessImg from "../assets/business.png";
import churnImg from "../assets/churn.png";

function Projects() {
  const projects = [
    {
      title: "Amazon Global Sales Analytics Dashboard",
      image: amazonImg,
      github: "https://github.com/sneharaman05/amazon-sales-analytics-powerbi",
      tech: ["Power BI", "DAX", "Power Query"],
      description:
        "Built an interactive Power BI dashboard analyzing 38K+ sales records across global markets. Developed KPI metrics, sales projections, return analysis and customer profitability insights."
    },

    {
      title: "Customer & Business Performance Dashboard",
      image: businessImg,
      github: "https://github.com/sneharaman05/customer-business-analytics-dashboard",
      tech: [ "SQL", "Power BI", "KPI Dashboard"],
      description:
        "Designed relational databases across E-commerce, Employee and Financial domains. Developed 30+ SQL queries and created KPI dashboards for business insights."
    },

    {
      title: "Customer Churn Analysis Dashboard",
      image: churnImg,
      github: "https://github.com/sneharaman05/customer-churn-analysis-dashboard",
      tech: ["Python", "SQL", "Power BI", "EDA"],
      description:
        "Performed data cleaning, EDA and churn analysis using Python and SQL. Built dashboards to identify retention patterns and customer attrition factors."
    }
  ];

  return (
    <motion.section
      className="projects"
      id="projects"
      initial={{ opacity: 0, x: 250 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 2,
        type: "spring",
        bounce: 0.2
      }}
    >
      <h2>Projects</h2>
      <p className="project-subtitle">
  Real-world analytics projects focused on business intelligence,
  customer insights and data-driven decision making.
</p>

      <div className="projects-grid">
  {projects.map((project, index) => (
    <motion.div
      className="project-card"
      key={project.title}
      initial={{ opacity: 0, y: 180 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        delay: index * 0.3,
        duration: 1.2
      }}
    >
      
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="project-badges">
        {project.tech.map((badge) => (
          <span key={badge}>{badge}</span>
        ))}
      </div>

      <div className="project-buttons">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          GitHub
        </a>
      </div>

    </motion.div>
  ))}
</div>
    </motion.section>
  );
}

export default Projects;