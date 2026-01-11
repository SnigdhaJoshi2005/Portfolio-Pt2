import {motion} from "framer-motion";
import { fadeUp, stagger } from "../animation";

const PracticeSection = () => {
    return (
        <motion.section
        className="practices"
        id="practices"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger} // staggered reveal of children
      >
        <motion.h2 variants={fadeUp}>Creator of Transformational Practices</motion.h2>

        <div className="practice-grid">
          <motion.div className="practice-card" variants={fadeUp} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 120 }}>
            <img
              src="src/pictures/practice1.jpg"
              alt="Practice1"
              className="practice-image"
            />
            <h3>Forest Flow Therapy™</h3>
            <p>
              Nature-based, immersive healing experiences that reconnect
              participants with the rhythms of the Earth. This practice supports
              the release of stress, trauma, and mental clutter through deep
              presence in natural environments.
            </p>
          </motion.div>

          <motion.div className="practice-card" variants={fadeUp} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 120 }}>
            <img
              src="src/pictures/practice2.jpg"
              alt="Practice2"
              className="practice-image"
            />
            <h3>Radiant Flow Method™</h3>
            <p>
              A transformational method for integrating awareness, abundance,
              and embodiment into daily life. Designed for spiritual seekers,
              healers, and high-performing professionals seeking alignment and
              clarity.
            </p>
          </motion.div>
        </div>

        <motion.p className="practice-footer" variants={fadeUp}>
          These programs blend ancient energy practices, breathwork, NLP, and
          meditation to create transformations that are lasting, profound, and
          aligned with your deepest self.
        </motion.p>
      </motion.section>
    )
}
export default PracticeSection;