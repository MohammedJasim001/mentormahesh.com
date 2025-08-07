import { BRANDS } from "../constant/BrandsCreated";

const Work = () => {
  return (
    <div className="p-8 pl-32">
      <div className="flex items-start -space-x-28">
        <p className="w-xl text-3xl font-imprima text-center">
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
          className="w-[800px] h-auto object-contain mt-40"
        />
      </div>

      <p className=" text-3xl font-imprima w-xl text-center -mt-96">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <img src="work.png" alt="" className="w-2/3" />
      <div className="flex flex-col gap-">
        {BRANDS.map((ele, ind) => (
          <div
            key={ind}
            className={`flex ${
              ind % 2 === 0 ? "justify-end" : "justify-start"
            }`}
          >
            <div className=" space-y-5 max-w-xl ">
              <a href={ele.url} target="_blank" rel="noopener noreferrer">
                <img src={ele.image} alt="" className=" w-xl h-40" />
              </a>
              <p className="text-3xl text-center font-imprima">{ele.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
