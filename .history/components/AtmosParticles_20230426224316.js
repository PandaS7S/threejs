// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";

// const AtmosParticles = () => {
//   const containerRef = useRef();

//   useEffect(() => {
//     const container = containerRef.current;
//     const width = container.clientWidth;
//     const height = container.clientHeight;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

//     renderer.setSize(width, height);
//     container.appendChild(renderer.domElement);

//     const particlesGeometry = new THREE.BufferGeometry();
//     const particleCount = 5000;
//     const positions = new Float32Array(particleCount * 3);
//     const colors = new Float32Array(particleCount * 3);

//     for (let i = 0; i < particleCount * 3; i++) {
//       positions[i] = (Math.random() - 0.5) * 50;
//       colors[i] = Math.random();
//     }

//     particlesGeometry.setAttribute(
//       "position",
//       new THREE.BufferAttribute(positions, 3)
//     );
//     particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.1,
//       vertexColors: true,
//     });

//     const particles = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particles);

//     camera.position.z = 5;

//     const animate = () => {
//       particles.rotation.x += 0.001;
//       particles.rotation.y += 0.001;

//       camera.position.z -= 0.01;
//       if (camera.position.z <= 0.1) {
//         camera.position.z = 5;
//       }

//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       container.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         width: "100vw",
//         height: "100vh",
//         overflow: "hidden",
//         position: "absolute",
//       }}
//     ></div>
//   );
// };

// export default AtmosParticles;
import React, { useRef, useEffect, useState } from "react";
import { create } from "tailwind-rn";
import styles from "../../styles.json";

const { tailwind } = create(styles);

const AtmosParticles = () => {
  const containerRef = useRef();
  const [particles, setParticles] = useState([]);

  const createParticles = (count) => {
    const newParticles = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const imgUrl = `https://picsum.photos/seed/${i}/30/30`; // Replace with your desired images
      const url = `https://example.com/user/${i}`; // Replace with your desired URLs
      newParticles.push(
        <div
          key={i}
          onClick={() => window.open(url, "_blank")}
          className="absolute w-5 h-5 bg-cover rounded-full cursor-pointer"
          style={{
            backgroundImage: `url(${imgUrl})`,
            transform: `translate(${x}px, ${y}px)`,
          }}
        ></div>
      );
    }
    setParticles(newParticles);
  };

  useEffect(() => {
    createParticles(100); // Set the number of particles
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen overflow-hidden relative"
    >
      {particles}
    </div>
  );
};

export default AtmosParticles;
