import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animation";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PracticeSection = () => {
  const [practices, setPractices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/practices").then((res) => {
      console.log(res.data);
      setPractices(res.data);
    });
  }, []);

  return (
    <motion.section
      className="practices"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
    >
      <motion.h2 variants={fadeUp}>
        Creator of Transformational Practices
      </motion.h2>

      <div className="practice-grid">
        {practices.map((practice) => (
          <Link key={practice._id} to={`/practice/${practice._id}`}>
            <motion.div
              className="practice-card"
              variants={fadeUp}
              whileHover={{ y: -6 }}
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
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
};

export default PracticeSection;
