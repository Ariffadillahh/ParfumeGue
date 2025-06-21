import React, { useEffect, useState } from "react";
import { BiHomeAlt2, BiLogInCircle } from "react-icons/bi";
import { IoBagRemoveOutline, IoCartOutline } from "react-icons/io5";
import { MdOutlineContacts } from "react-icons/md";
import { RiMenu3Line, RiShoppingBag2Line } from "react-icons/ri";
import { Link } from "react-router";

const Navbar = () => {
  const [mobailNav, setMobailNav] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const cartCount = JSON.parse(
    localStorage.getItem("keranjang") || "[]"
  ).length;

  const handleScroll = () => {
    setSticky(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileNav = () => setMobailNav(!mobailNav);

  return (
    <nav
      className={`md:justify-around justify-between bg-white text-black px-3 md:px-10 py-6 md:py-0 flex w-full items-center mx-auto z-10 transition-all duration-300 ease-in-out ${
        isSticky
          ? "fixed bg-white top-0 drop-shadow"
          : "relative"
      }`}
    >
      <div>
        <Link
          to="/"
          className="text-xl font-bold font-heading flex items-center gap-3"
        >
          <IoBagRemoveOutline /> ParfumeGue
        </Link>
      </div>

      <ul className="hidden md:flex p-5 mx-auto font-heading space-x-12 font-light">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/collections" className="hover:underline">
            Collections
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
        </li>
      </ul>

      <div className="hidden md:flex items-center space-x-5">
        <Link to="/cart" className="relative flex items-center">
          <IoCartOutline className="h-6 w-6 hover:text-black" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs text-white">
              {cartCount}
            </span>
          )}
        </Link>
        {/* <Link to="/login" className="flex items-center hover:text-black">
          <BiLogInCircle className="h-6 w-6" />
        </Link> */}
      </div>

      <div className="flex md:hidden items-center">
        <Link to="/cart" className="relative flex items-center mr-6">
          <IoCartOutline className="h-6 w-6 hover:text-black" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs text-white">
              {cartCount}
            </span>
          )}
        </Link>
        <button onClick={toggleMobileNav} className="cursor-pointer">
          <RiMenu3Line className="h-6 w-6 hover:text-black" />
        </button>
      </div>

      <div
        className={` md:hidden duration-300 ease-in-out bg-white rounded-lg shadow z-10 fixed top-24 ${
          mobailNav ? `right-5 ` : `-right-[100%] `
        }`}
      >
        <ul className="p-4">
          <li className="p-3">
            <Link
              to="/"
              className="flex gap-2 items-center hover:underline transition-transform duration-200 ease-in-out hover:-translate-y-1"
              onClick={toggleMobileNav}
            >
              <BiHomeAlt2 /> Home
            </Link>
          </li>
          <li className="p-3">
            <Link
              to="/collections"
              className="flex gap-2 items-center hover:underline transition-transform duration-200 ease-in-out hover:-translate-y-1"
              onClick={toggleMobileNav}
            >
              <RiShoppingBag2Line /> Collections
            </Link>
          </li>
          <li className="p-3">
            <Link
              to="/contact"
              className="flex gap-2 items-center hover:underline transition-transform duration-200 ease-in-out hover:-translate-y-1"
              onClick={toggleMobileNav}
            >
              <MdOutlineContacts /> Contact Us
            </Link>
          </li>
          {/* <li className="p-3">
            <Link
              to="/login"
              className="flex gap-2 items-center hover:underline transition-transform duration-200 ease-in-out hover:-translate-y-1"
              onClick={toggleMobileNav}
            >
              <BiLogInCircle /> Login
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
