import React, { useRef } from "react";

const Particle = ({ imgUrl, url, position }) => {
  const particleRef = useRef();

  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div
      ref={particleRef}
      onClick={handleClick}
      style={{
        position: "absolute",
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: "pointer",
      }}
    ></div>
  );
};

export default Particle;




  
