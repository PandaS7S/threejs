import React from "react";
import { motion } from "framer-motion";

const images = [
  // 添加您的图片源
  "/textures/test.jpeg",
  "/textures/test.jpeg",
  "/textures/test.jpeg",
  "/textures/test.jpeg",
];

const initialPositions = [
  // 初始位置
  { x: -200, y: -200 },
  { x: 200, y: -200 },
  { x: -200, y: 200 },
  { x: 200, y: 200 },
];

const transition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};

const ImageGallery = () => {
  return (
    <div>
      {images.map((image, index) => (
        <motion.img
          key={image}
          src={image}
          alt={`Image ${index}`}
          initial={initialPositions[index]}
          animate={{ x: 0, y: 0 }}
          transition={transition}
          whileHover={{ scale: 2.5 }}
          style={{ position: "relative" }}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
