export const ThreeBarsBig = () => {
  return (
    <div className=" h-10 w-full space-y-1.5 py-2 mr-4">
      <div className="h-1 bg-black "></div>
      <div className="h-1 bg-black "></div>
      <div className="h-1 bg-black "></div>
    </div>
  );
};

export const ThreeBarSmall = () => {
  return (
    <div className="ml-4 h-10 w-1/25 space-y-1.5 py-2 ">
      <div className="h-1 bg-black "></div>
      <div className="h-1 bg-black "></div>
      <div className="h-1 bg-black "></div>
    </div>
  );
};

export const WireframeBox = () => {
  return (
    <svg width="35" height="35" viewBox="0 0 100 100" className="mt-0.5">
      <rect
        x="6"
        y="6"
        width="88"
        height="88"
        stroke="black"
        strokeWidth="12"
        fill="none"
      />
      <line x1="6" y1="6" x2="94" y2="94" stroke="black" strokeWidth="12" />
      <line x1="6" y1="94" x2="94" y2="6" stroke="black" strokeWidth="12" />
    </svg>
  );
};

