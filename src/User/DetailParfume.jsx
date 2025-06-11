import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { perfumes as data, reviews } from "../utils/data";
import UserLayout from "./UserLayout";
import toast, { Toaster } from "react-hot-toast";
import { FaCheck, FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { HiShoppingCart } from "react-icons/hi";
import Ratings from "../components/Ratings";

const DetailParfume = () => {
  const { id } = useParams();
  const [keranjang, setKeranjang] = useState([]);
  
  const review = reviews.find(
    (review) => review.productId === parseInt(id) || review.productId === id
  );
  console.log("🚀 ~ DetailParfume ~ Ratings:", review)

  const parfume = data.find((parfumes) => parfumes.id === parseInt(id));

  const addKeranjang = (id) => {
    const updatedKeranjang = [...keranjang];
    if (!updatedKeranjang.includes(id)) {
      updatedKeranjang.push(id);
      setKeranjang(updatedKeranjang);
      localStorage.setItem("keranjang", JSON.stringify(updatedKeranjang));
      toast.success(
        `Produk ${parfume.name} berhasil ditambahkan ke keranjang.`
      );
    } else {
      toast.error(`Produk ${parfume.name} sudah ada di keranjang.`);
    }
  };

  useEffect(() => {
    const storedKeranjang = JSON.parse(
      localStorage.getItem("keranjang") || "[]"
    );
    if (Array.isArray(storedKeranjang)) {
      setKeranjang(storedKeranjang);
    }
  }, []);

  return (
    <UserLayout>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container mx-auto mt-10">
        <div className="md:grid md:grid-cols-2">
          <div className="md:w-1/2 w-full  mx-auto p-4 ">
            <img
              src="https://m.media-amazon.com/images/I/61bG3pY7k-L.jpg"
              alt={parfume.name}
            />
          </div>
          <div className="flex flex-col justify-center  px-5">
            <h1 className="text-3xl font-bold">{parfume.name}</h1>
            <div className="flex justify-between items-center my-3">
              <p className="text-xl font-light">{parfume.brand}</p>
              <p>
                {parfume.inStock ? (
                  <FaCheck className="text-green-500" />
                ) : (
                  <RxCross2 className="text-red-500" />
                )}
              </p>
            </div>
            <p className="text-2xl font-semibold mb-3">${parfume.price}</p>
            <p className="text-base mb-4">{parfume.description}</p>
            <div className="flex items-center space-x-1">
              {Array.from({ length: parfume.fragranceLevel }, (_, i) => (
                <FaStar key={i} className="text-yellow-500 text-lg" />
              ))}
            </div>

            {!parfume.inStock ? (
              <>
                <button
                  disabled={!parfume.inStock}
                  className="text-gray-900 bg-white border cursor-pointer border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 my-6"
                >
                  <h1 className="flex items-center justify-center text-lg font-light">
                    <RxCross2 className="text-red-500 mr-2" />
                    Out Of Stock
                  </h1>
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => addKeranjang(id)}
                  disabled={!parfume.inStock}
                  className="text-gray-900 bg-white border cursor-pointer border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 my-6"
                >
                  <h1 className="flex items-center justify-center text-lg font-light">
                    <HiShoppingCart className="mr-2" />
                    Add Cart
                  </h1>
                </button>
              </>
            )}
          </div>
        </div>
        <div className="my-5 mx-5">
          <Ratings review={review} />
        </div>
      </div>
    </UserLayout>
  );
};

export default DetailParfume;
