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
import * as THREE from "three";
import airplaneImage from "/podcastGame.jpg"; // Replace with your airplane image

const AtmosParticles = () => {
  const containerRef = useRef();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (redirect) {
      // Replace with the URL of the next page you want to navigate to
      window.location.href = "/next-page";
      return;
    }

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 5000;
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
      size: 0.1,
      vertexColors: true,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 5;

    const animate = () => {
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;

      camera.position.z -= 0.01;
      if (camera.position.z <= 0.1) {
        camera.position.z = 5;
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const onEnter = () => {
      container.style.cursor = `url(${airplaneImage}), auto`;
      setTimeout(() => setRedirect(true), 5000);
    };
    container.addEventListener("mouseenter", onEnter);

    return () => {
      container.removeChild(renderer.domElement);
      container.removeEventListener("mouseenter", onEnter);
    };
  }, [redirect]);

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