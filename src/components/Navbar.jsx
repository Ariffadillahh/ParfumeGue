import React from "react";
import { BiLogInCircle } from "react-icons/bi";
import { IoBagRemoveOutline, IoCartOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router";

const Navbar = () => {
  const cartCount = localStorage.getItem("keranjang")
    ? JSON.parse(localStorage.getItem("keranjang")).length
    : 0;
  return (
    <section className="relative mx-auto w-full overflow-hidden">
      <nav className="md:justify-around justify-between bg-white text-gray-800 px-3 md:px-10 py-6 flex w-full items-center">
        <div className="">
          <Link
            to={"/"}
            className="text-xl font-bold font-heading flex items-center gap-3"
          >
            <span>
              <IoBagRemoveOutline />
            </span>{" "}
            ParfumeGue
          </Link>
        </div>

        <ul className="hidden md:flex px-4 mx-auto  font-heading space-x-12 font-light ">
          <li>
            <Link to={"/"} className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/collections"} className="hover:underline">
              Collections
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-5 ">
          <Link to={"/cart"} className="flex items-center ">
            <IoCartOutline className="h-6 w-6 hover:text-black " />
            {cartCount > 0 && (
              <span className="flex absolute -mt-5 ml-3">
                <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500">
                  <h1 className="flex justify-center items-center ml-[5px] text-xs text-white">
                    {cartCount}
                  </h1>
                </span>
              </span>
            )}
          </Link>
          <Link to={"/login"} className="flex items-center hover:text-black">
            <BiLogInCircle className="h-6 w-6 hover:text-black" />
          </Link>
        </div>

        <div className="flex md:hidden items-center">
          <Link to={"/cart"} className="md:hidden flex mr-6 items-center">
            <IoCartOutline className="h-6 w-6 hover:text-black" />
            {cartCount > 0 && (
              <span className="flex absolute -mt-5 ml-3">
                <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500">
                  <h1 className="flex justify-center items-center ml-[5px] text-xs text-white">
                    {cartCount}
                  </h1>
                </span>
              </span>
            )}
          </Link>
          <button className="">
            <RiMenu3Line className="h-6 w-6 hover:text-black" />
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
