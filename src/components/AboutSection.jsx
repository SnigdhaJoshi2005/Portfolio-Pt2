import { motion } from "framer-motion";
import { fadeUp, stagger, fadeLeft, fadeRight } from "../animation";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

const AboutSection = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/about");
      console.log(response.data);
      setAbout(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  const imageUrl = about?.image
    ? about.image.startsWith("http")
      ? about.image
      : `http://localhost:5000/${about.image}`
    : "src/pictures/aboutme.jpg";

  return (
    <motion.section
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
    >
      <motion.img src={imageUrl} alt="About me" variants={fadeLeft} />

      <motion.div className="about-content" variants={fadeRight}>
        <h2>{about?.title || "ABOUT ME"}</h2>

        {about?.sections?.map((sec, i) => (
          <p key={i}>
            <strong>{sec.heading}</strong><br />
            {sec.text}
          </p>
        ))}
      </motion.div>

      {/* SOCIAL ICONS */}
      <motion.div className="about-socials" variants={fadeUp}>
        {about?.socials?.linkedin && (
          <a href={about.socials.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        )}
        {about?.socials?.instagram && (
          <a href={about.socials.instagram} target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        )}
        {about?.socials?.facebook && (
          <a href={about.socials.facebook} target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
        )}
      </motion.div>
    </motion.section>
  );
};
export default AboutSection;