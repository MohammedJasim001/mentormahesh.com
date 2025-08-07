import { useEffect, useRef } from "react";
import gsap from "gsap";

const FadeInBox = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "skyblue",
        margin: "50px auto",
      }}
    >
      Hello GSAP
    </div>
  );
};

export default FadeInBox;
