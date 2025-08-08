import React from "react";

const VinylCollections = () => {
  return (
    <div className="lg:px-32 space-y-16 sm:py-5">
      <div className="sm:flex justify-between ">
        <div className="flex justify-between items-center w-1/2">
          <img src="music_images/gramphone.png" alt="" className="w-24 h-24 lg:w-36 lg:h-36" />
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#FF7438] max-w-md">
            MY VINYL COLLECTIONS!
          </h1>
        </div>
        <div className="grid grid-cols-2 -mb-10 sm:-mb-0 mt-5 sm:mt-0 sm:w-4/9 px-2 sm:px-0">
          <img src="music_images/the-beatles.png" alt="" />
          <img src="music_images/pink-floyd1.png" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2 space-y-5 sm:grid-cols-4 justify-between px-2 sm:px-0">
        <img src="music_images/pink-floyd2.png" alt="" />
        <img src="music_images/iron-maiden.png" alt="" />
        <img src="music_images/scorpions.png" alt="" />
        <img src="music_images/nirvana.png" alt="" />
      </div>
    </div>
  );
};

export default VinylCollections;
