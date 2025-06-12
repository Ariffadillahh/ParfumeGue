import React from "react";
import { Link } from "react-router";

const CardProduct = ({ parfume }) => {
  return (
    <Link
      to={`/detail/${parfume.id}`}
      className="block p-4 hover:shadow-lg transition-shadow duration-300 border border-gray-500/30 rounded-lg "
    >
      <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-6 lg:space-x-8 relative ">
        {!parfume.inStock && (
          <div className="absolute top-0 left-0 bg-gray-800 px-2 py-2 text-white z-10 rounded text-sm">
            OUT OF STOCK
          </div>
        )}
        <div className="flex flex-col items-center text-center justify-center w-full">
          <div className="relative group">
            <div className=" w-full overflow-hidden  rounded-md ">
              <img
                src={parfume.image}
                alt={parfume.name}
                loading="lazy"
                className=" md:w-1/2 md:min-h-64 object-cover flex mx-auto object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">{parfume.brand}</p>
              <h3 className="mt-2 font-semibold text-gray-900">
                <span className="absolute inset-0"></span>
                {parfume.name}
              </h3>
              <p className="mt-1 text-gray-900 font-medium">${parfume.price}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
