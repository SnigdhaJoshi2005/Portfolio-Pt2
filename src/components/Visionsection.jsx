import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animation";
import { useState, useEffect } from "react";
import axios from "axios";

const Visionsection = () => {
  const [vision, setVision] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/vision").then((res) => {
      setVision(res.data);
    });
  }, []);

  const imageUrl = vision?.image
    ? `http://localhost:5000/${vision.image}`
    : "src/pictures/vision.jpg";


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
        <h3>{vision?.title || "A Life Guided by Presence"}</h3>
        <p>
          {vision?.description || `From the quiet forests of Nepal to international retreats and
            wellness expos, Rupendra has spent decades exploring the subtle
            currents of mind, body, and spirit. He discovered early that healing
            is not something to be “done” but something to be remembered,
            allowed, and embodied.
            
            He believes that every human being carries within them a
            self-regulating intelligence, and the role of a healer or trainer is
            to create the conditions for that intelligence to awaken. Through
            his teachings, Rupendra transforms spaces into environments where
            awareness, stillness, and presence become the primary tools for
            change.`}
        </p>
      </motion.div>

      <motion.div className="vision-image" variants={fadeUp}>
        <img src={imageUrl} alt="Vision" />
      </motion.div>
    </motion.section>
  );
};
export default Visionsection;