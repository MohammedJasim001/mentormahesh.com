import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const NavItems = [{image:"life.png",url:"life"}, {image:"work.png",url:"work"}, {image:"music.png",url:"music"}];
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate()
  const handleClick = (url,ind) => {
     setActiveIndex(ind)
     navigate(url)
  }

  return (
    <div className="relative">
      {/* Butterfly image positioned above active nav item */}
      <div className="absolute -top-16 left-0 w-full flex justify-around px-40 pointer-events-none">
        {NavItems.map((_, i) => (
          <div key={i} className="w-80 flex justify-center" >
            {i === activeIndex && (
              <img src="butterfly.png" alt="Butterfly" className="w-36 h-36" />
            )}
          </div>
        ))}
      </div>

      {/* Nav items */}
      <div className="flex justify-around px-40 h-36 items-center">
        {NavItems.map((ele, ind) => (
          <div
            key={ind}
            className="w-80 cursor-pointer"
            onClick={()=>handleClick(ele.url,ind)}
          >
            <img src={ele.image} alt={`nav-${ind}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
