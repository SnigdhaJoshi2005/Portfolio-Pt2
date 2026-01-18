import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animation";
import { useState, useEffect } from "react";
import axios from "axios";

const LineageCertificateSection = () => {
  const [data, setData] = useState({ header: {}, certificates: [] });

  useEffect(() => {
    axios.get("http://localhost:5000/api/certificates").then((res) => {
      setData(res.data);
    });
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
        <h2>{data.header?.title || "Lineage & Certifications"}</h2>
        <p>
          {data.header?.description ||
            "Rupendra’s work is rooted in authentic lineages and internationally recognized certifications, blending ancient wisdom with modern transformational sciences."}
        </p>
      </motion.div>

      <div className="certificate-columns">
        {data.certificates && data.certificates.length > 0
          ? data.certificates.map((cert, index) => (
              <motion.div
                key={cert._id || index}
                className="certificate-column"
                variants={fadeUp}
              >
                <motion.div
                  className="certificate-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <img
                    src={
                      cert.image?.startsWith("http") ||
                      cert.image?.startsWith("src")
                        ? cert.image
                        : `http://localhost:5000/${cert.image}`
                    }
                    alt={cert.title}
                  />
                  <h4>{cert.title}</h4>
                  <p>{cert.description}</p>
                </motion.div>
              </motion.div>
            ))
          : [
              {
                title: "NLP Master Practitioner & Trainer",
                description:
                  "Advanced training in consciousness transformation, mental mastery, and subconscious re-patterning.",
                image: "/src/pictures/certificate.jpg",
              },
              {
                title: "Reiki Grandmaster & Teacher",
                description:
                  "Includes Sekhem-Seichim Egyptian lineage, Acupressure Reiki, and Reflexology Reiki traditions.",
                image: "/src/pictures/certificate.jpg",
              },
            ].map((cert, index) => (
              <motion.div key={index} className="certificate-column" variants={fadeUp}>
                <motion.div
                  className="certificate-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <img src={cert.image} alt={cert.title} />
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