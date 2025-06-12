import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router";
import NavDashboard from "../components/NavDashboard";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  const [Orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("Orders")) || []
  );

  if (!token || token !== import.meta.env.VITE_TOKEN) {
    window.location.href = "/login";
  }

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("Orders"));
    if (savedOrders) {
      setOrders(savedOrders);
    }
  }, []);

  useEffect(() => {
    if (!token || token !== import.meta.env.VITE_TOKEN) {
      window.location.href = "/login";
    }
  }, [token]);

  return (
    <div>
      <NavDashboard />
      <div>
        {Orders.length === 0 ? (
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-2xl font-bold">No Orders</h1>
          </div>
        ) : (
          <div className="p-4">
            <div className="relative overflow-x-auto md:mx-10">
              <h1 className="text-2xl font-bold my-4">Orders</h1>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name Order
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Jumlah Order
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Orders?.length > 0 ? (
                    Orders.map((order, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b border-gray-200"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                        >
                          {order.name}
                        </th>
                        <td className="px-6 py-4">{order.product.length}</td>
                        <td className="px-6 py-4">${order.totalPrice}</td>
                        <td className="px-6 py-4">
                          <Link to={`/dashboard/Order-detail/${order.id}`}>
                            <IoIosEye className="text-lg text-green-500" />
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-6 py-4 text-center">
                        No orders available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
