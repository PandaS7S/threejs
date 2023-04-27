import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AtmosParticles = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const particles = [];
    for (let i = 0; i < 1000; i++) {
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50);
      scene.add(particle);
      particles.push(particle);
    }

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);

      particles.forEach((particle) => {
        particle.rotation.x += Math.random() * 0.01;
        particle.rotation.y += Math.random() * 0.01;
        particle.rotation.z += Math.random() * 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default AtmosParticles;
