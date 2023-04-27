import React, { useRef, useEffect, useState } from "react";
import Particle from "./Particle";

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
        <Particle
          key={i}
          imgUrl={imgUrl}
          url={url}
          position={{ x, y }}
        />
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
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {particles}
    </div>
  );
};

export default AtmosParticles;
