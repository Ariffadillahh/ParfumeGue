import React, { useState } from "react";
import { BsClipboardData } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { IoBagHandleSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router";

const Sidebar = () => {
  const [menu, setMenu] = useState(false);
  
  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <>
      <button
        className=" md:hidden block fixed z-10 right-5 cursor-pointer"
        onClick={handleMenu}
      >
        <FaBarsStaggered size={25} />
      </button>

      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform md:translate-x-0 ${menu ? `translate-x-0` : `-translate-x-full`} `}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to={"/dashboard"}
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <MdDashboard size={25} />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/FinishedOrders"}
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <IoBagHandleSharp size={25} />
                <span className="ms-3">Finished Orders</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/allproducts"}
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <BsClipboardData size={25} />
                <span className="ms-3">All Products</span>
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center p-2 w-full text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <IoMdLogOut size={25} />
                <span className="ms-3">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
