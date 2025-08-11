import { BRANDS } from "../../constant/BrandsCreated";

const Brands = () => {
  return (
    <div className="flex flex-col space-y-10 lg:space-y-20 mt-10 md:mt-20 items-center justify-center lg:px-24">
      {BRANDS.map((ele, ind) => (
        <div
          key={ind}
          className={`flex md:h-[450px] lg:h-96 justify-center items-center px-5 gap-10 md:gap-0 lg:px-14 rounded-xl py-2 ${
            ind % 2 === 0
              ? "flex-col  sm:flex-row"
              : "flex-col sm:flex-row-reverse "
          }`}
          style={{ backgroundColor: ele.bg }}
        >
          <div className="md:w-2/5  flex items-center justify-center">
            <img src={ele.image} alt="" className="w-96 " />
          </div>
          <div className="md:w-3/5 flex flex-col justify-around gap-6 md:gap-0 h-full lg:px-10">
            <p className="text-lg sm:text-2xl font-semibold font-imprima ">
              {ele.description}
            </p>
            <a href={ele.url} target="_blank" rel="noopener noreferrer ">
              <button className="bg-black text-xl text-white p-3 font-semibold rounded-lg w-40 hover:bg-gray-900 hover:shadow-lg">
                Visit The Site
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brands;
