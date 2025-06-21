import React, { useState } from "react";
import LayoutAdmin from "./LayoutAdmin";
import Breadcrumb from "../components/Breadcrumb";
import { perfumes } from "../utils/data";
import CardProduct from "../components/CardProduct";
import { IoIosSearch } from "react-icons/io";
import { GiTireIronCross } from "react-icons/gi";

const AllProducts = () => {
  const [search, setSearch] = useState("");
  const parfume = perfumes;

  const filteredParfumes = parfume.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <LayoutAdmin>
      <Breadcrumb title={"All Products"} />
      <div className="md:ml-10">
        <div className="flex items-center justify-between my-5">
          <h1 className="font-semibold text-xl">All Products</h1>
          <div className="relative ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IoIosSearch size={20} />
            </div>
            <input
              type="text"
              id="simple-search"
              onChange={(e) => setSearch(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
          {filteredParfumes.map((data, index) => {
            return <CardProduct key={index} parfume={data} />;
          })}
        </div>
        {filteredParfumes.length === 0 && (
          <div className="flex items-center justify-center h-[50vh]">
            <p className="font-semibold text-xl text-gray-800 italic">
              <GiTireIronCross
                size={50}
                className="mx-auto mb-3 animate-spin"
              />
              No Perfumes Found
            </p>
          </div>
        )}
      </div>
    </LayoutAdmin>
  );
};

export default AllProducts;
