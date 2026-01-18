import { motion } from "framer-motion";
import { fadeUp } from "../animation";
import { useEffect, useState } from "react";
import axios from "axios";

const ProcessSection = () => {
  const [process, setProcess] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/process")
      .then((res) => setProcess(res.data))
      .catch(console.error);
  }, []);

  return (
    <motion.section
      className="process"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <h2>{process?.heading || "The Philosophy Behind His Work"}</h2>

      <p>
        <em>
          {process?.quote ||
            "Healing is not something you do. It is something you allow—when the mind becomes quiet enough to listen."}
        </em>
        <br />
        <br />
        {process?.description ||
          "Every method, every retreat, and every session Rupendra offers are rooted in this principle..."}
      </p>
    </motion.section>
  );
};

export default ProcessSection;
