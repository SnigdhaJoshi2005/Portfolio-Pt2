import { motion } from "framer-motion";
import { fadeUp, stagger, fadeLeft, fadeRight } from "../animation";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
const AboutSection = () => {
    return (
        <motion.section
        className="about"
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <motion.img
          src="src/pictures/aboutme.jpg"
          alt="Aboutme"
          variants={fadeLeft}
        />

        <motion.div className="about-content" variants={fadeRight}>
          <h2>ABOUT ME</h2>
          <p>
            Rupendra Kayastha is a Himalayan mystic, healer, and
            transformational trainer devoted to guiding individuals back to
            their natural state of awareness, balance, and inner flow. He stands
            at the intersection of ancient wisdom and modern consciousness
            science, helping seekers, healers, and professionals awaken their
            own intelligence of healing. He is the founder of Bodhi
            Transformation.
            <br />
            Rooted in the Himalayan yogic, tantra and Vajrayana Buddhist
            traditions, Rupendra’s journey goes beyond ritual and theory. He
            integrates forest therapy, energy healing, Tantra, Reiki, Akasha
            Healing, trauma release, NLP, and hypnotherapy techniques into a
            seamless approach where healing emerges naturally, effortlessly, and
            powerfully.
          </p>
        </motion.div>

        {/* SOCIAL ICONS */}
        <motion.div className="about-socials" variants={fadeUp}>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/your-facebook" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
        </motion.div>
      </motion.section>
    )
}
export default AboutSection;