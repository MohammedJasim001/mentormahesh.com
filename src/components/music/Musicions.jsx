import { MUSIC } from "../../constant/Music";

const Musicions = () => {
  return (
    <div className="py-10 ">
      {MUSIC.map((data, ind) => (
        <div
          key={ind}
          className={`flex sm:h-[350px] ${
            ind % 2 === 0 ? "flex-col lg:space-y-20 sm:flex-row" : "flex-col sm:flex-row-reverse "
          }`}
          style={{ backgroundColor: data.bg }}
        >
          <img src={data.image} alt="" className=" object-cover h-full" />
          <div className="flex flex-col justify-center lg:px-32 w-full py-4 lg:py-0 ml-5 lg:ml-0">
            <div className="text-3xl lg:text-6xl font-bold sm:mb-4 ">{data.text1}</div>
            {data.text2 ? (
              <div className="text-2xl lg:text-4xl font-bold ">{data.text2}</div>
            ) : (
              <div className="text-3xl lg:text-6xl font-bold">
                <span className="font-semibold text-2xl lg:text-4xl">and</span> ROGER GLOVER
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Musicions;
