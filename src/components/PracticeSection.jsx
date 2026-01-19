import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animation";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <motion.h2 variants={fadeUp}>Creator of Transformational Practices</motion.h2>

      <div className="practice-grid">
        {practices.map((practice) => (
          <Link key={practice._id} to={`/practice/${practice._id}`}>
            <motion.div
              className="practice-card"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <img
                src={
                  practice.image?.startsWith("http") ? practice.image : `http://localhost:5000/${practice.image}`
                }
                alt={practice.title}
                className="practice-image"
              />
              <h3>{practice.title}</h3>
              <p>{practice.description}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
};

export default PracticeSection;
