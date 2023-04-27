import images from "./imageList";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";


// function ImageGallery(){
const ImageGallery = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(true);
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    

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
            // <motion.img
            // key={image}
            // src={image}
            // alt={`Image ${index}`}
            // initial={initialPositions[index]}
            // animate={{ x: 0, y: 0 }}
            // transition={transition}
            // whileHover={{ scale: 2.5 }}//设置悬停时候图片放大的比例，可调
            // style={{ position: "relative" }}
            // />
            //line49 飞来效果，需要把下面注释掉 并且删掉function 和上面的内容
            //line 60-74四面八方滚动效果
            <motion.img
                key={index}
                src={img}
                alt={`Gallery Image ${index + 1}`}
                style={{
                    ...imageStyle,
                    ...generatePosition(index),
                }}
                whileHover={{ scale: 1.2 }}
                initial={isScrolled ? "visible" : "hidden"}
                animate={isScrolled ? "visible" : "hidden"}
                exit="hidden"
                variants={imageVariants}
                transition={{ duration: 1 }}
                />

        ))}
        </div>
    );
    };
     }
export default ImageGallery;
