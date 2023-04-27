import images from "./imageList";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";


// const generatePosition = () => {
//     if (typeof window !== "undefined") {
//       const x = Math.random() * window.innerWidth;
//       const y = Math.random() * window.innerHeight;
//       return [x, y];
//     }
//     return [0, 0];
//   };
const generatePosition = () => {
    if (typeof window !== "undefined") {
      const side = Math.floor(Math.random() * 4);
      const x = side % 2 === 0 ? Math.random() * window.innerWidth : (side - 1) * window.innerWidth;
      const y = side % 2 === 1 ? Math.random() * window.innerHeight : (side - 2) * window.innerHeight;
      return { x, y };
    }
    return { x: 0, y: 0 };
  };
  
  
  const imageVariants = {
    hidden: (custom) => ({ //hidden：设置每个图片的初始位置
      x: custom.initialPosition.x,
      y: custom.initialPosition.y,
      opacity: 0,
    }),
    visible: { //   visible 将图片的位置重置为原点（x: 0, y: 0），使其在页面中居中排列
      x: 0,
      y: 0,
      opacity: 1,
    },
  };

const ImageGallery = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {//当滚动距离大于 50 时，将 isScrolled 设置为 true，这将触发图片从隐藏状态到可见状态的动画。当滚动距离小于 50 时，图片会回到隐藏状态
          if (typeof window !== "undefined" && window.scrollY > 5) {
            setIsScrolled(true);
        //   } else {
        //     setIsScrolled(false);
          }
        };
      
        if (typeof window !== "undefined") {
          window.addEventListener("scroll", handleScroll);
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }
      }, []);
      

    

    const initialPosition = [
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


    return (
        <div
        style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}>
        {images.map((image, index) => (
            <motion.img
            key={index}
            src={image}
            alt="gallery item"
            custom={{
              initialPosition: generatePosition(),
            }}
            variants={imageVariants}
            initial="hidden"
            animate={isScrolled ? "visible" : "hidden"}
            transition={{ duration: 1 , delay: index * 0.01 }} //动画显示速度调整
            //  transition={{ duration: 1, delay: index * 0.1 }} // index是动画延迟 将使每个图片的动画延迟在前一个图片动画的基础上增加 0.1 秒
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              margin: "50px",
            }}
          />
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
            // <motion.img
            //     key={index}
            //     src={img}
            //     alt={`Gallery Image ${index + 1}`}
            //     style={{
            //         ...imageStyle,
            //         ...generatePosition(index),
            //     }}
            //     whileHover={{ scale: 1.2 }}
            //     initial={isScrolled ? "visible" : "hidden"}
            //     animate={isScrolled ? "visible" : "hidden"}
            //     exit="hidden"
            //     variants={imageVariants}
            //     transition={{ duration: 1 }}
            //     />

        ))}
        
        </div>
    );
    };
     
export default ImageGallery;
