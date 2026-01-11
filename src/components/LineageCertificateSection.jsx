import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animation";

const LineageCertificateSection = () => {
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
            Rupendra’s work is rooted in authentic lineages and internationally
            recognized certifications, blending ancient wisdom with modern
            transformational sciences.
          </p>
        </motion.div>

        <div className="certificate-columns">
          {/* COLUMN 1 */}
          <motion.div className="certificate-column" variants={fadeUp}>
            <motion.div className="certificate-card" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 150 }}>
              <img src="/src/pictures/certificate.jpg" alt="NLP Certification" />
              <h4>NLP Master Practitioner & Trainer</h4>
              <p>
                Advanced training in consciousness transformation, mental mastery, and subconscious re-patterning.
              </p>
            </motion.div>
          </motion.div>

          <motion.div className="certificate-column" variants={fadeUp}>
            <motion.div className="certificate-card" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 150 }}>
              <img src="/src/pictures/certificate.jpg" alt="Reiki Certification" />
              <h4>Reiki Grandmaster & Teacher</h4>
              <p>
                Includes Sekhem-Seichim Egyptian lineage, Acupressure Reiki, and Reflexology Reiki traditions.
              </p>
            </motion.div>
          </motion.div>

          <motion.div className="certificate-column" variants={fadeUp}>
            <motion.div className="certificate-card" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 150 }}>
              <img src="src/pictures/certificate.jpg" alt="Akasha Healing" />
              <h4>Akasha Healing Trainer</h4>
              <p>
                Working with subtle dimensions of awareness to release karmic and energetic imprints.
              </p>
            </motion.div>
          </motion.div>

          <motion.div className="certificate-column" variants={fadeUp}>
            <motion.div className="certificate-card" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 150 }}>
              <img src="/src/pictures/certificate.jpg" alt="Pranic Healing" />
              <h4>Pranic Healing & Energy Therapies</h4>
              <p>
                Techniques for restoring balance and harmony within the subtle energy body.
              </p>
            </motion.div>
          </motion.div>

          <motion.div className="certificate-column" variants={fadeUp}>
            <motion.div className="certificate-card" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 150 }}>
              <img src="/src/pictures/certificate.jpg" alt="Forest Therapy" />
              <h4>Forest Therapy Guide & Trainer</h4>
              <p>
                Integrating nature immersion with neuroscience-backed healing and nervous system regulation.
              </p>
            </motion.div>
          </motion.div>

          <motion.div className="certificate-column" variants={fadeUp}>
            <motion.div className="certificate-card" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 150 }}>
              <img src="/src/pictures/certificate.jpg" alt="Hypnotherapy" />
              <h4>Verbal & Non-Verbal Hypnotherapist</h4>
              <p>
                Facilitating deep subconscious transformation through guided awareness and suggestion.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    );
}
export default LineageCertificateSection;