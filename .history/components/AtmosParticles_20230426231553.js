import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";


const AtmosParticles = () => {
  const containerRef = useRef();
  const [mouseEntered, setMouseEntered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // ... (existing code)

    const animate = () => {
      if (!mouseEntered) {
        particles.rotation.x += 0.001;
        particles.rotation.y += 0.001;
      } else {
        // Add your alternative effect here
        particles.rotation.x += 0.005;
        particles.rotation.y += 0.005;
      }

      camera.position.z -= 0.01;
      if (camera.position.z <= 0.1) {
        camera.position.z = 5;
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, [mouseEntered]);

  const handleMouseEnter = () => {
    setMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setMouseEntered(false);
  };
        return (
          <>
            <div
              ref={containerRef}
              style={{
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                position: "absolute",
              }}
            ></div>
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
