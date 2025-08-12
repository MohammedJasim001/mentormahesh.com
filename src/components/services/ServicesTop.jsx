const ServicesTop = () => {
  return (
    <div id="contact" className="md:flex px-0 md:px-5 lg:px-20 lg:mt-10">
      <div className="lg:w-1/2 space-y-10 px-4 lg:px-10 pr-3 pt-5 ">
        <h1 className="text-3xl lg:text-6xl text-[#FF7438] font-bold">
          MY LIFE — LESSONS BEYOND THE WORK
        </h1>
        <div className="space-y-5 lg:pr-32">
          <p className="font-imprima text-xl font-semibold">
            This page isn’t about achievements. <br />
            It’s about the quiet work that happens behind the scenes — in
            conversations, choices, and late-night reflections.
          </p>
          <p className="font-imprima text-xl font-semibold">
            It’s where I share the real parts of my journey — what I’ve learned,
            what I’m still figuring out, and what I deeply care about.
          </p>
        </div>
      </div>
      <div className="hidden w-1/2 md:flex items-center justify-center">
        <img src="hand.png" alt="" className="w-80"/>
      </div>
    </div>
  );
};

export default ServicesTop;
