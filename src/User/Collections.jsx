import React, { useState } from "react";
import UserLayout from "./UserLayout";
import { perfumes as data } from "../utils/data";
import { HiOutlineSearch } from "react-icons/hi";
import PaginationPerfumes from "../components/PaginationPerfumes";

const Collections = () => {
  const [parfumes, setParfumes] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const searchParfumes = (e) => {
    const query = e.target.value.toLowerCase();
    const filteredParfumes = data.filter((parfume) =>
      parfume.name.toLowerCase().includes(query)
    );
    setParfumes(filteredParfumes);
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "all") {
      setParfumes(data);
    } else {
      const filteredParfumes = data.filter(
        (parfume) => parfume.gender === selectedValue
      );
      setParfumes(filteredParfumes);
    }
    setCurrentPage(1); 
  };

  return (
    <UserLayout>
      <div className="box pt-6">
        <div className="box-wrapper">
          <div className="bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
            <HiOutlineSearch className="w-5 text-gray-600 h-5 cursor-pointer" />
            <input
              type="search"
              onChange={searchParfumes}
              placeholder="Search for Perfumes..."
              className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
            />
            <select
              onChange={handleSelectChange}
              defaultValue="all"
              className="text-sm outline-none focus:outline-none bg-transparent ml-4"
            >
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <PaginationPerfumes perfumes={parfumes} itemsPerPage={8} initialPage={currentPage} />
      </div>
    </UserLayout>
  );
};

export default Collections;
