import React, { useState, useEffect } from "react";
import CardProduct from "./CardProduct";
import { GiTireIronCross } from "react-icons/gi";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const PaginationPerfumes = ({ perfumes, itemsPerPage, initialPage }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(perfumes.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage, perfumes]);

  const currentItems = perfumes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mt-6">
      {!perfumes.length ? (
        <div className="flex items-center justify-center h-[70vh]">
          <p className="font-semibold text-xl text-gray-800 italic">
            <GiTireIronCross size={50} className="mx-auto mb-3 animate-spin" />{" "}
            No Perfumes Found
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentItems.map((perfume, index) => (
              <CardProduct key={index} parfume={perfume} />
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg ${
                currentPage === 1
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-100 hover:text-gray-700"
              }`}
              disabled={currentPage === 1}
            >
              <MdKeyboardDoubleArrowLeft
                size={20}
                className={`transition-transform ${
                  currentPage !== 1
                    ? "animate-pulse text-gray-700"
                    : "text-gray-300"
                }`}
              />
            </button>

            {Array.from({ length: totalPages }, (_, idx) => (
              <button
                key={idx}
                onClick={() => handlePageChange(idx + 1)}
                className={`flex items-center justify-center px-3 h-8 leading-tight border 
                ${
                  currentPage === idx + 1
                    ? "text-white bg-gray-800 border-gray-800"
                    : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                {idx + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-s-0  border-gray-300 rounded-e-lg ${
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              <MdKeyboardDoubleArrowRight
                size={20}
                className={`transition-transform ${
                  currentPage !== totalPages
                    ? "animate-pulse text-gray-700"
                    : "text-gray-300"
                }`}
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PaginationPerfumes;
