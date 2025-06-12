import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to={"/"}
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              ParfumeGue
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
            <li>
              <Link to={"/"} className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/collections"}
                className="hover:underline me-4 md:me-6"
              >
                Collections
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">
          © 2025
          <a href="https://www.instagram.com/fdlharip/" target="_blank" className="hover:underline ml-1">
            Arif Fadillah
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
