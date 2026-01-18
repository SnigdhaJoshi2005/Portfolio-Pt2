import { motion } from "framer-motion";
import { fadeIn } from "../animation";
import Carousel from "./Carousel";
import { useState, useEffect } from "react";
import axios from "axios";

const HeroSection = () => {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/hero")
      .then((res) => {
        setHero(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch hero data", err);
      });
  }, []);

  return (
    <motion.section
      className="hero"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <Carousel images={hero?.images} />

      <div className="hero-text">
        <h1>{hero?.title || "PORTFOLIO"}</h1>
        <div>
          <h3>{hero?.name || "Rupendra Kayastha"}</h3>
          <p>{hero?.subtitle || "Mystic Yogi · Healer · Trainer"}</p>
        </div>
      </div>
    </motion.section>
  );
};
export default HeroSection;