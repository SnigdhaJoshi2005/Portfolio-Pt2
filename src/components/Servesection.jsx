import { motion } from "framer-motion";
import { fadeLeft, fadeRight, stagger } from "../animation";

const ServeSection = () => {
    return (
       <motion.section
        className="serve"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div className="serve-left" variants={fadeLeft}>
          <img
            src="src/pictures/serve1.jpg"
            alt="Serve1"
            className="serve-image"
          />

          <h2>WHO HE SERVES</h2>

          <ul>
            <li>Trauma survivors and emotional seekers</li>
            <li>
              Entrepreneurs, leaders, and professionals seeking clarity and flow
            </li>
            <li>
              Healers, coaches, and spiritual teachers deepening their practice
            </li>
            <li>
              Anyone ready to reconnect with their natural intelligence of being
            </li>
          </ul>

          <p className="serve-note">
            Whether in a quiet forest, a guided meditation, or a multi-day
            retreat, Rupendra’s work helps individuals step into the space where
            awareness meets transformation.
          </p>
        </motion.div>

        <motion.div
          className="serve-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeRight}
        >
          <br />
          <h3>A GLOBAL VISION</h3>
          <br />
          <p>
            From the Himalayas to Europe, South America, North America, and
            beyond, Rupendra Kayastha is building a global community of
            conscious leaders, healers, and seekers.
          </p>
          <br />

          <blockquote>
            To awaken the world to the intelligence of healing that already
            lives within each of us.
          </blockquote>
          <br />

          <img
            src="src/pictures/serve2.jpg"
            alt="Serve2"
            className="serve-image"
            style={{ marginTop: "50px" }}
          />
        </motion.div>
      </motion.section>
 
    );
}
export default ServeSection;