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
    <div className=" " id="/">
      <div className=" lg:flex items-center justify-center -mt-10 sm:-mt-0 space-x-5 space-y-5">
        <div className=" flex items-center justify-center overflow-hidden ">
          <div className=" h-[450px] flex flex-col justify-between lg:pt-20 ">
            <div className="relative w-32 h-32 ">
              {music1.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`music1 ${index + 1}`}
                  className={`absolute top-32 lg:top-0 left-32 lg:left-10 w-full h-full 
        ${index === currentImage ? "z-10 opacity-100" : "opacity-0 z-0"}
      `}
                />
              ))}
            </div>
            <div className="relative w-16 h-16">
              {music2Rotate.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`music2 ${index + 1}`}
                  className={`absolute w-full top-16 lg:top-24 h-full left-32 
        ${index === currentImage ? "z-10 opacity-100" : "opacity-0 z-0"}
      `}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center -space-y-5 sm:-space-y-6 ">
            <div className="relative w-32 h-32">
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
              <img src="image.png" alt="" className="w-56 md:w-full" />
            </div>
            <div className="relative w-[350px] h-[130px] sm:w-[450px] sm:h-[180px] ">
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
          <div className="h-[450px] flex flex-col justify-between mt-52 ">
            <div className="relative w-16 h-16">
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
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 ">
              {music2.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`music2 ${index + 1}`}
                  className={`absolute right-20 bottom-36 md:-left-10 lg:left-0 w-full h-full 
        ${index === currentImage ? "z-10 opacity-100" : "opacity-0 z-0"}
      `}
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center -mt-10 lg:-mt-0 space-y-5 px-4">
          <div className="text-[#FF7438]">
            <h3 className="text-2xl lg:text-4xl font-semibold">Hello, I'm</h3>
            <h1 className="text-5xl lg:text-8xl font-bold ">Mahesh</h1>
          </div>
          <p className="text-xl lg:text-2xl font-imprima font-bold w-xs md:w-md">
            I have always been fascinated with people, the human psyche and
            interpersonal dynamics & my early influences to music..
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
