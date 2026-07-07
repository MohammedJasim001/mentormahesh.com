import React from "react";

const VinylCollections = () => {
  return (
    <div className="px-32 space-y-16 py-5">
      <div className="flex justify-between ">
        <div className="flex justify-between items-center w-1/2">
          <img src="music_images/gramphone.png" alt="" className="w-36 h-36" />
          <h1 className="text-6xl font-bold text-[#FF7438] max-w-md">
            MY VINYL COLLECTIONS!
          </h1>
        </div>
        <div className="flex w-4/9 justify-between">
          <img src="music_images/the-beatles.png" alt="" />
          <img src="music_images/pink-floyd1.png" alt="" />
        </div>
      </div>
      <div className="flex justify-between">
        <img src="music_images/pink-floyd2.png" alt="" />
        <img src="music_images/iron-maiden.png" alt="" />
        <img src="music_images/scorpions.png" alt="" />
        <img src="music_images/nirvana.png" alt="" />
      </div>
    </div>
  );
};

export default VinylCollections;
