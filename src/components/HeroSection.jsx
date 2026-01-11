import { motion } from "framer-motion";
import { fadeIn } from "../animation";
import Carousel from "./Carousel";
const HeroSection = () => {
    return (
        <motion.section
        className="hero"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Carousel />

        <div className="hero-text">
          <h1>PORTFOLIO</h1>
          <div>
            <h3>Rupendra Kayastha</h3>
            <p>Mystic Yogi · Healer · Trainer</p>
          </div>
        </div>
      </motion.section>
    );
}
export default HeroSection;