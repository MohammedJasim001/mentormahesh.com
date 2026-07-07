
const MusicTop = () => {
  return (
    <div className="flex items-center px-32 justify-between">
      <div className="space-y-10">
        <img src="music.png" alt="" className="w-96" />
        <div className="mt-10 ml-5 max-w-[530px] space-y-4 ">
          <h1 className="  text-6xl text-[#FF7438] font-bold ">
            WELCOME TO MY MUSIC COLLECTION!
          </h1>
          <p className="text-xl font-semibold">
            I've always been someone who derives my grit and inspiration from
            music, especially Metal music and Rock music from the 70’s, 80s and
            90s. With my ventures right now, I am trying to pass on the same to
            everyone between the ages of 5 to 55 through stories and
            illustrations.
          </p>
        </div>
        <div className="flex justify-between">
          <img src="icon1.png" alt="" className="w-36" />
          <img src="90s.png" alt="" className="w-36" />
        </div>
      </div>
      <img src="icon2.png" alt="" className="w-36 -mt-10" />
      <img src="music_band.png" alt="" className="w-[500px]" />
    </div>
  );
};

export default MusicTop;
