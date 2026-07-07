import { MUSIC } from "../../constants/music";

const Musicions = () => {
  return (
    <div className="py-10">
      {MUSIC.map((data, ind) => (
        <div
          key={ind}
          className={`flex h-[350px] ${
            ind % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
          style={{ backgroundColor: data.bg }}
        >
          <img src={data.image} alt="" className=" object-cover" />
          <div className="flex flex-col justify-center px-32 w-full">
            <div className="text-6xl font-bold mb-4 ">{data.text1}</div>
            {data.text2 ? (
              <div className="text-4xl font-bold">{data.text2}</div>
            ) : (
              <div className="text-6xl font-bold">
                <span className="font-semibold text-4xl">and</span> ROGER GLOVER
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Musicions;
