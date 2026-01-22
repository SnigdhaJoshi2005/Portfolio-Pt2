import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Carousel = ({ images }) => {
  const defaultImages = [
    "src/pictures/main1.jpg",
    "src/pictures/main2.jpg",
    "src/pictures/main3.jpg",
    "src/pictures/main4.jpg",
  ];

  const displayImages = images && images.length > 0 ? images : defaultImages;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (displayImages.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % displayImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [displayImages]);

  return (
    <div className="hero-images">
      <AnimatePresence mode="wait">
        <motion.img
        className="hero-img"
          key={index}
          src={
            displayImages[index].startsWith("http") || displayImages[index].startsWith("src")
              ? displayImages[index]
              : `http://localhost:5000/${displayImages[index]}`
          }
          alt="Hero"
          initial={{
            opacity: 0.8,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            // scale: 1,
          }}
          exit={{
            opacity: 0.8,
            scale: 1.05,
          }}
          transition={{
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1], // smooth material-like easing
          }}
        />
      </AnimatePresence>
    </div>
  );
}

export default Carousel;