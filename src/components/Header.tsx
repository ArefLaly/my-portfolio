import { Bars3Icon } from "@heroicons/react/20/solid";
import { useState, useContext, useEffect } from "react";
import { LayoutContext } from "../context/layout/Layout.context";
Header.propTypes = {};

function Header() {
  const [showMenu, setShowMenu] = useState(true);
  const { mobileSize } = useContext(LayoutContext);
  useEffect(() => {
    setShowMenu(false);
  }, [mobileSize]);
  return (
    <header>
      <nav className=" md:flex relative container mx-auto py-3 md:py-12 px-4 justify-center text-xl  items-center gap-5">
        <h1 className="w-fit min-w-fit text-brand-color text-4xl relative z-[85]">
          Arif <span className="text-black">Laly</span>
        </h1>
        <button
          className="block md:hidden absolute right-2  top-4  z-[85]"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <Bars3Icon className="w-8 h-8" />
        </button>
        <ul
          style={{ transition: "all 0.6s ease-out" }}
          className={`flex md:justify-center h-screen md:h-auto  gap-10 flex-col top-16 md:top-0 origin-top bg-white overflow-hidden md:flex-row md:relative   absolute px-4 z-[60] w-full  ${
            mobileSize ? (showMenu ? "right-0" : "-right-[130%]") : ""
          }`}
        >
          <a>Home</a>
          <a href="#about">About</a>
          <a>Services</a>
          <a>Projects</a>
          <a>Contact</a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
