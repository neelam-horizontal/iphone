import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center fixed z-50 bg-[#010204c4] shadow-2xl shadow-[#ccc3b26e]">
      {/* 
position: fixed;
    z-index: 1000;
    background-color: #010204c4;
    box-shadow: 0 -5px 30px #ccc3b2; */}
      <nav className="flex w-full screen-max-width">
        <a href="#Hero">
          <img src={appleImg} alt="Apple" width={14} height={18} />
        </a>

        <div className="flex flex-1 cursor-pointer justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              <a href={`#${nav}`}>{nav}</a>
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 cursor-pointer max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
