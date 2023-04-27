import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

const AtmosParticles = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const textureLoader = new THREE.TextureLoader();
    const starTexture = textureLoader.load("textures/sparkle.png");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 10000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 50;
      colors[i] = Math.random();
    }

    
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.4,//设置星星size
      map: starTexture,
      transparent: true,
      vertexColors: true,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 5;

    let time = 0;
    const animate = () => {
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;

      time += 0.01;
      camera.position.z = 5 + Math.sin(time) * 2;

      renderer.render(scene, camera);
      renderer.setClearColor(0x000000, 1); // Add this line here
      requestAnimationFrame(animate);
    };

    animate();

    // 设置定时器，在 5 秒后跳转到另一个页面
    // setTimeout(() => {
    //   window.location.href = "/other-page";
    // }, 5000);

    const handleMouseEnter = () => {
      // 代码在鼠标悬停时执行
    };
  
    const handleMouseLeave = () => {
      // 代码在鼠标离开时执行
    };
  
    const fadeIn = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  
    const scaleUp = {
      hidden: { scale: 0.8 },
      visible: { scale: 1 },
    };

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

    const handleClick = () => {
      window.location.href = "/other-page";
    };
        return (
          <>
            <div
              ref={containerRef}
              onClick={handleClick}
              style={{
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                position: "absolute",
              }}
            ></div>

      {/* <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        style={{ position: "absolute", top: "50%", left: "25%" }}
      >
        <img
          src="textures/test.jpeg"
          alt="示例图片 1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width: "300px", height: "200px" }}
        />
      </motion.section>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={scaleUp}
        transition={{ duration: 0.5 }}
        style={{ position: "absolute", top: "50%", left: "50%" }}
      >
        <img
          src="textures/star.png"
          alt="示例图片 2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ width: "300px", height: "200px" }}
        />
      </motion.section> */}
            
            <motion.div
              className="image-container"
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5 }}
              variants={fadeIn}
            >
              <img src="textures/test.jpeg" alt="Example image" />
            </motion.div>

            <motion.div
              className="hover-container"
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              variants={fadeIn}
            >
              <p>Hover over me!</p>
            </motion.div>

            <div
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
              }}
            >
              {/* Add your logo here */}
              <img src="/logo.png" alt="Logo" style={{ height: "50px", width: "auto" }} />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                cursor: "pointer",
              }}
            >
              登录
            </button>
          </>
        );
            }
  
 export default AtmosParticles;
