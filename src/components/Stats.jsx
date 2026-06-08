import { motion } from "framer-motion";

function Stats() {
  const stats = [
    {
      number: "3+",
      title: "Projects Completed"
    },
    {
      number: "38K+",
      title: "Records Analyzed"
    },
    {
      number: "30+",
      title: "SQL Queries"
    },
    {
      number: "3",
      title: "Certifications"
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item, index) => (
          <motion.div
            className="stat-card"
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2,
              duration: 0.8
            }}
          >
            <h3>{item.number}</h3>
            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;