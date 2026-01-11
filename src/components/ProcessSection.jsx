import { motion } from "framer-motion";
import { fadeUp } from "../animation";

const Process = () => {
    return (
        <motion.section
            className="process"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
        >
            <h2>The Philosophy Behind His Work</h2>
            <p>
                “Healing is not something you do. It is something you allow—when the
                mind becomes quiet enough to listen.”
                <br />
                Every method, every retreat, and every session Rupendra offers are
                rooted in this principle. Healing is not forced, and transformation is
                not rushed. Through awareness, embodiment, and connection to nature,
                participants remember their own innate wisdom and reconnect with a
                life of clarity, balance, and purpose.
            </p>
        </motion.section>
    );
}
export default Process;