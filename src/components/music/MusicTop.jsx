
const MusicTop = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center md:px-12 lg:px-32 justify-between mt-7 ">
      <div className=" lg:space-y-10">
        <img src="music.png" alt="" className="w-96" />
        <img src="music_band.png" alt="" className=" block lg:hidden" />
        <div className="lg:hidden flex justify-between ">
          <img src="icon1.png" alt="" className="w-36" />
          <img src="90s.png" alt="" className="w-36" />
        </div>
        <div className="mt-10 px-4 sm:px-0 sm:ml-5 max-w-[530px] space-y-4 ">
          <h1 className=" text-3xl md:text-5xl lg:text-6xl text-[#FF7438] font-bold ">
            WELCOME TO MY MUSIC COLLECTION!
          </h1>
          <p className="text-xl font-semibold font-imprima">
            I've always been someone who derives my grit and inspiration from
            music, especially Metal music and Rock music from the 70’s, 80s and
            90s. With my ventures right now, I am trying to pass on the same to
            everyone between the ages of 5 to 55 through stories and
            illustrations.
          </p>
        </div>
        <div className="hidden lg:flex justify-between ">
          <img src="icon1.png" alt="" className="w-36" />
          <img src="90s.png" alt="" className="w-36" />
        </div>
      </div>
      <img src="icon2.png" alt="" className="w-36 -mt-10 hidden lg:block" />
      <img src="music_band.png" alt="" className="w-[500px] hidden lg:block" />
    </div>
  );
};

export default MusicTop;
