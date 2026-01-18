import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animation";
import { useState, useEffect } from "react";
import axios from "axios";

const PracticeSection = () => {
  const [practices, setPractices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/practices").then((res) => {
      setPractices(res.data);
    });
  }, []);

  return (
    <motion.section
      className="practices"
      id="practices"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
    >
      <motion.h2 variants={fadeUp}>
        Creator of Transformational Practices
      </motion.h2>

      <div className="practice-grid">
        {practices.length > 0
          ? practices.map((practice, index) => (
              <motion.div
                key={practice._id || index}
                className="practice-card"
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <img
                  src={
                    practice.image?.startsWith("http") ||
                    practice.image?.startsWith("src")
                      ? practice.image
                      : `http://localhost:5000/${practice.image}`
                  }
                  alt={practice.title}
                  className="practice-image"
                />
                <h3>{practice.title}</h3>
                <p>{practice.description}</p>
              </motion.div>
            ))
          : [
              {
                title: "Forest Flow Therapy™",
                description:
                  "Nature-based, immersive healing experiences that reconnect participants with the rhythms of the Earth.",
                image: "src/pictures/practice1.jpg",
              },
              {
                title: "Radiant Flow Method™",
                description:
                  "A transformational method for integrating awareness, abundance, and embodiment into daily life.",
                image: "src/pictures/practice2.jpg",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="practice-card"
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <img src={p.image} alt={p.title} className="practice-image" />
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </motion.div>
            ))}
      </div>

      <motion.p className="practice-footer" variants={fadeUp}>
        These programs blend ancient energy practices, breathwork, NLP, and
        meditation to create transformations that are lasting, profound, and
        aligned with your deepest self.
      </motion.p>
    </motion.section>
  );
};
export default PracticeSection;