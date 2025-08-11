import Brands from "./Brands";

const BrandsCreated = () => {
  return (
    <div className="mt-10">
      <div className="lg:flex justify-around ">
        <div className="mt-10 lg:ml-5 max-w-[530px] space-y-4 ">
          <h1 className=" text-2xl md:text-5xl lg:text-6xl text-[#FF7438] font-bold ">
            BRANDS I HAVE CREATED!
          </h1>
          <p className="text-lg md:text-2xl font-semibold font-imprima">
            Having had the privilege of pitching to top CEO’s, interviewing
            multiple “C - Level “ executives, I noticed a gap… A big gap. The
            paucity of time.
          </p>
        </div>
        <div className="hidden  relative lg:w-[600px] lg:flex items-center justify-center">
          <img src="laptop.png" alt="" className="w-[450px]" />
          <img
            src="cube.png"
            alt=""
            className="w-24 absolute bottom-0 left-0"
          />
          <img
            src="brandbulb.png"
            alt=""
            className="w-16 absolute top-10 right-14"
          />
        </div>
      </div>
      <Brands />
    </div>
  );
};

export default BrandsCreated;
