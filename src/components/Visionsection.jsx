import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animation";

const Visionsection = () => {
    return (
        <motion.section
        className="vision"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        id="vision"
      >

        <motion.div className="vision-content" variants={fadeUp}>
          <h3>A Life Guided by Presence</h3>
          <p>
            From the quiet forests of Nepal to international retreats and
            wellness expos, Rupendra has spent decades exploring the subtle
            currents of mind, body, and spirit. He discovered early that healing
            is not something to be “done” but something to be remembered,
            allowed, and embodied.
            <br />
            He believes that every human being carries within them a
            self-regulating intelligence, and the role of a healer or trainer is
            to create the conditions for that intelligence to awaken. Through
            his teachings, Rupendra transforms spaces into environments where
            awareness, stillness, and presence become the primary tools for
            change.
          </p>
        </motion.div>

        <motion.div className="vision-image" variants={fadeUp}>
          <img src="src/pictures/vision.jpg" alt="Vision" />
        </motion.div>
      </motion.section>
    );
}
export default Visionsection;