import React from "react";
import ImageNotFound from "../assets/404.svg";
import { Link } from "react-router";
import { HiArrowLongLeft } from "react-icons/hi2";

const NotFoundPage = () => {
  return (
    <section className="bg-white ">
      <div className="md:mx-10 min-h-screen px-6 py-12 lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-red-500 ">
            404 error
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 ">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 ">
            Sorry, the page you are looking for doesn't exist.Here are some
            helpful links:
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <Link
              to={"/"}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto "
            >
              <HiArrowLongLeft size={20} className="animate-pulse" />
              <span>Go back</span>
            </Link>
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <img
            className="w-full max-w-lg lg:mx-auto"
            src={ImageNotFound}
            alt="404 error"
          />
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
