import React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router";

const NavDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div>
      <div className="flex justify-between items-center px-3 md:px-10 bg-gray-100 border-b py-2 border-gray-200">
        <div>
          <Link className="text-2xl font-bold text-gray-900" to="/dashboard">
            <h1>Dashboard</h1>
          </Link>
        </div>
        <div>
          <button
            onClick={handleLogout}
            type="button"
            className="py-2.5 px-5 me-2 mb-2 mt-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 flex items-center gap-1.5"
          >
            <span>
              <HiOutlineLogout />
            </span>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavDashboard;
