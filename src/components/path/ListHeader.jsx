import { ThreeBarsBig, ThreeBarSmall, WireframeBox } from "./ThreeBars";

export const ListHeader = ({bg}) => {
  return (
    <div className={`h-10 w-hull bg-[${bg}] border-2 border-b-0 flex justify-around gap-2`}>
      <ThreeBarSmall />
      <WireframeBox />
      <ThreeBarsBig />
    </div>
  );
};
