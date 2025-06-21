import React from "react";
import LayoutAdmin from "./LayoutAdmin";
import Breadcrumb from "../components/Breadcrumb";
import { FaWhatsapp } from "react-icons/fa";

const UserMessages = () => {
  const message = JSON.parse(localStorage.getItem("contactMessages")) || [];
  return (
    <LayoutAdmin>
      <div>
        <Breadcrumb title={"All Messages"} />
        <div className="relative overflow-x-auto md:mx-10">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Messages
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {message.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No messages found.
                  </td>
                </tr>
              </tbody>
            ) : (
              message.map((data, index) => {
                return (
                  <tbody key={index}>
                    <tr className="bg-white border-b  border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {data.name}
                      </th>
                      <td className="px-6 py-4">{data.email}</td>
                      <td className="px-6 py-4">{data.phone}</td>
                      <td className="px-6 py-4 truncate">{data.description}</td>
                      <td className="px-6 py-4">
                        <a
                          href={`https://wa.me/+62${data.phone.substring(
                            1
                          )}?text=Hallo, ${
                            data.name
                          }. Saya ingin menanggapi pesan Anda: "${data.description}"`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=""
                        >
                          <FaWhatsapp className="text-green-500" size={25} />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                );
              })
            )}
          </table>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default UserMessages;
