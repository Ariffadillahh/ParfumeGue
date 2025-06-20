import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router";

const Breadcrumb = ({ title }) => {
  return (
    <nav className="flex my-10 md:my-10 md:ml-10">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center ">
          <Link
            to={"/dashboard"}
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 gap-2"
          >
            <MdDashboard size={20} />
            Dashboard
          </Link>
        </li>
        {title && (
          <li>
            <div className="flex items-center">
              <AiOutlineRight />
              <p>{title}</p>
            </div>
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
