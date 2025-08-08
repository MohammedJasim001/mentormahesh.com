import BackButton from "../components/BackButton";
import { BRANDS } from "../constant/BrandsCreated";

const Work = () => {
  return (
    <div className="sm:p-8 p-2 sm:pl-32 mt-8 sm:mt-5 lg:mt-0">
      <BackButton />
      <img src="work.png" alt="" className="w-2/3" />
      <div className="lg:flex items-start lg:-space-x-28">
        <p className="sm:w-xl text-xl sm:text-3xl font-imprima sm:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <img
          src="workimage.png"
          alt="work"
          className="lg:w-[800px] h-auto object-contain lg:mt-40"
        />
      </div>

      <p className="text-xl sm:text-3xl font-imprima sm:w-xl sm:text-center lg:-mt-96">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="flex flex-col">
        {BRANDS.map((ele, ind) => (
          <div
            key={ind}
            className={`flex  ${
              ind % 2 === 0 ? "justify-end" : "justify-start"
            }`}
          >
            <div className=" space-y-5 max-w-xl ">
              <a href={ele.url} target="_blank" rel="noopener noreferrer">
                <img src={ele.image} alt="" className=" w-xl h-40" />
              </a>
              <p className="text-xl sm:text-3xl sm:text-center font-imprima">
                {ele.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
