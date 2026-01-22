import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animation";
import { useState, useEffect } from "react";
import axios from "axios";

const LineageCertificateSection = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/certificates")
      .then(res => setCertificates(res.data));
  }, []);

  return (
    <motion.section
      className="lineage"
      id="certifications"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
    >
      <motion.div className="lineage-header" variants={fadeUp}>
        <h2>Lineage & Certifications</h2>
        <p>
          Rupendra’s work is rooted in authentic lineages and internationally recognized certifications.
        </p>
      </motion.div>

      <div className="certificate-columns">
        {certificates.map((cert) => (
          <motion.div className="certificate-column" key={cert._id} variants={fadeUp}>
            <motion.div
              className="certificate-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <img
                src={
                  cert.image
                    ? cert.image.startsWith("http")
                      ? cert.image
                      : `http://localhost:5000/${cert.image}`
                    : ""
                }
                alt={cert.title}
              />
              <h4>{cert.title}</h4>
              <p>{cert.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default LineageCertificateSection;