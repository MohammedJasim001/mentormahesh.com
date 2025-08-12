import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      if (newState) setShowNav(true);
      return newState;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return;
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, lastScrollY]);

  return (
    <nav
      className={`top-0 sticky w-full bg-[#FFFDE7] shadow-md z-50 transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div></div>

          <div className="hidden md:flex space-x-8 text-lg font-semibold">
            <a href="/" className="hover:text-orange-500 transition">
              Home
            </a>
            <a href="#work" className="hover:text-orange-500 transition">
              Work
            </a>
            <a href="#life" className="hover:text-orange-500 transition">
              Life
            </a>
            <a href="#music" className="hover:text-orange-500 transition">
              Music
            </a>
            <a href="#contact" className="hover:text-orange-500 transition">
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#FFFDE7] border-t border-gray-200">
          {["home", "work", "life", "music", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
