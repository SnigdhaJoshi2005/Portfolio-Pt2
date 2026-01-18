import { motion } from "framer-motion";
import { fadeLeft, fadeRight, stagger } from "../animation";
import { useState, useEffect } from "react";
import axios from "axios";

const ServeSection = () => {
  const [serve, setServe] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/serve").then((res) => {
      setServe(res.data);
    });
  }, []);

  const img1 = serve?.image1
    ? serve.image1.startsWith("http") || serve.image1.startsWith("src")
      ? serve.image1
      : `http://localhost:5000/${serve.image1}`
    : "src/pictures/serve1.jpg";

  const img2 = serve?.image2
    ? serve.image2.startsWith("http") || serve.image2.startsWith("src")
      ? serve.image2
      : `http://localhost:5000/${serve.image2}`
    : "src/pictures/serve2.jpg";

  return (
    <motion.section
      className="serve"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <motion.div className="serve-left" variants={fadeLeft}>
        <img src={img1} alt="Serve1" className="serve-image" />

        <h2>{serve?.title1 || "WHO HE SERVES"}</h2>

        <ul>
          {serve?.list && serve.list.length > 0
            ? serve.list.map((item, i) => <li key={i}>{item}</li>)
            : [
                "Trauma survivors and emotional seekers",
                "Entrepreneurs, leaders, and professionals seeking clarity and flow",
                "Healers, coaches, and spiritual teachers deepening their practice",
                "Anyone ready to reconnect with their natural intelligence of being",
              ].map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <p className="serve-note">
          {serve?.description1 ||
            "Whether in a quiet forest, a guided meditation, or a multi-day retreat, Rupendra’s work helps individuals step into the space where awareness meets transformation."}
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
        <h3>{serve?.title2 || "A GLOBAL VISION"}</h3>
        <br />
        <p>
          {serve?.description2 ||
            "From the Himalayas to Europe, South America, North America, and beyond, Rupendra Kayastha is building a global community of conscious leaders, healers, and seekers."}
        </p>
        <br />

        <blockquote>
          {serve?.quote ||
            "To awaken the world to the intelligence of healing that already lives within each of us."}
        </blockquote>
        <br />

        <img
          src={img2}
          alt="Serve2"
          className="serve-image"
          style={{ marginTop: "50px" }}
        />
      </motion.div>
    </motion.section>
  );
};
export default ServeSection;