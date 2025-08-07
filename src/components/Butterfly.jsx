import { useRef, useEffect } from "react";
import gsap from "gsap";

const Butterfly = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      x: 400,
      y: -100,
      rotation: 70,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <img
      ref={imgRef}
      src="butterfly.png"
      alt="Butterfly"
      style={{ position: "absolute", top: 100, left: 0, width: 100 }}
    />
  );
};

export default Butterfly;
