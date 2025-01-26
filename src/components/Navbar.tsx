import Image from "next/image";
import logo from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";
export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4 ">
        <div className="py-4 flex items-center justify-between ">
          <div className="relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FF)] blur-md"></div>
            <Image src={logo} className="h-12 w-12 relative " alt="logo" />
          </div>

          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden ">
            <MenuIcon className="text-white" />
          </div>
          <nav className=" gap-6 items-center hidden sm:flex ">
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition "
            >
              Who are we
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition "
            >
              Services
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition "
            >
              Updates
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Help
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition "
            >
              Customers
            </a>
            <button className="bg-white py-2 px-4 rounded-lg">
              Contact me
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
