import { useEffect, useState } from "react";

const HomeTop = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["mentor1.png", "mentor2.png"];
  const bulb = ["bulb1.png", "bulb2.png"];
  const music1 = ["music11.png", "music12.png"];
  const music2 = ["music21.png", "music22.png"];
  const music1Rotate = ["music1rotate2.png", "music1rotate1.png"];
  const music2Rotate = ["music2rotate2.png", "music2rotate1.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" ">
      <video
        className=" w-full lg:h-screen object-cover "
        src="YOUTUBE_INTRO.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="flex items-center justify-center overflow-hidden">
        <div className=" h-[450px] flex flex-col justify-between lg:mt-72 ">
          <div className="relative w-32 h-32 lg:w-40 lg:h-40">
            {music1.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`music1 ${index + 1}`}
                className={`absolute left-32 lg:left-0 w-full h-full 
        ${index === currentImage ? "z-10 opacity-100" : "opacity-0 z-0"}
      `}
              />
            ))}
          </div>
          <div className="relative w-20 h-20">
            {music2Rotate.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`music2 ${index + 1}`}
                className={`absolute w-full bottom-10 lg:bottom-0 h-full left-32 top-32 lg:top-0 lg:left-44 
        ${index === currentImage ? "z-10 opacity-100" : "opacity-0 z-0"}
      `}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center -space-y-5 sm:-space-y-8 ">
          <div className="relative w-40 h-40">
            {bulb.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`bulb ${index + 1}`}
                className={`absolute left-0 w-full h-full 
        ${index === currentImage ? "z-10 opacity-100" : "opacity-0 z-0"}
        ${index === 0 ? "mt-2" : "mt-0"}
      `}
              />
            ))}
          </div>

          <div className="mt-5 z-20">
            <img src="image.png" alt="" className="" />
          </div>
          <div className="relative w-[400px] h-[150px] sm:w-[600px] sm:h-[250px] ">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`mentor ${index + 1}`}
                className={`absolute left-0 w-full h-full   ${
                  index === currentImage ? " z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="h-[450px] flex flex-col justify-between mt-52">
          <div className="relative w-20 h-20">
            {music1Rotate.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`music1 ${index + 1}`}
                className={`absolute w-full h-full right-24
        ${index === currentImage ? "z-10 opacity-100" : "opacity-0 z-0"}
      `}
              />
            ))}
          </div>
          <div className="relative w-28 h-28 sm:w-40 sm:h-40">
            {music2.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`music2 ${index + 1}`}
                className={`absolute right-28 bottom-36 md:-left-10 lg:left-0 w-full h-full 
        ${index === currentImage ? "z-10 opacity-100" : "opacity-0 z-0"}
      `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
