import React from "react";
import LayoutAdmin from "./LayoutAdmin";
import Breadcrumb from "../components/Breadcrumb";
import { perfumes } from "../utils/data";
import CardProduct from "../components/CardProduct";

const AllProducts = () => {
  const parfume = perfumes;
  console.log("🚀 ~ AllProducts ~ parfumes:", parfume);
  return (
    <LayoutAdmin>
      <Breadcrumb title={"All Products"} />
      <div className="md:ml-5">
        <h1 className="font-semibold text-xl">All Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
          {parfume.map((data, index) => {
            return <CardProduct key={index} parfume={data} />;
          })}
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default AllProducts;
