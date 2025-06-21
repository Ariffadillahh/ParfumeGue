import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { perfumes as data, reviews } from "../utils/data";
import UserLayout from "./UserLayout";
import toast, { Toaster } from "react-hot-toast";
import { FaCheck, FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { HiShoppingCart } from "react-icons/hi";
import Ratings from "../components/Ratings";
import { BiPlus } from "react-icons/bi";
import { PiMinusBold } from "react-icons/pi";

const DetailParfume = () => {
  const { id } = useParams();
  const [keranjang, setKeranjang] = useState([]);
  const [qty, setQty] = useState(1);

  const review = reviews.find(
    (review) => review.productId === parseInt(id) || review.productId === id
  );

  const parfume = data.find((parfumes) => parfumes.id === parseInt(id));

  const incrementQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decrementQty = () => {
    setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
  };

  const addKeranjang = (id) => {
    const updatedKeranjang = [...keranjang];
    const existingItem = updatedKeranjang.find((item) => item.id === id);

    if (existingItem) {
      existingItem.qty += qty;
      toast.success(
        `Produk ${parfume.name} berhasil ditambahkan ke keranjang.`
      );
    } else {
      const newItem = {
        id: parseInt(id),
        qty,
      };
      updatedKeranjang.push(newItem);
      toast.success(
        `Produk ${parfume.name} berhasil ditambahkan ke keranjang.`
      );
    }
    setQty(1);
    setKeranjang(updatedKeranjang);
    localStorage.setItem("keranjang", JSON.stringify(updatedKeranjang));
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
          <div className="md:w-1/2  mx-auto flex justify-center">
            <img
              src={parfume.image}
              alt={parfume.name}
              className="w-3/4 md:w-full"
            />
          </div>
          <div className="flex flex-col justify-center  px-5">
            <h1 className="text-3xl font-bold">{parfume.name}</h1>
            <p className="text-xl font-light my-3">{parfume.brand}</p>
            <p className="text-2xl font-semibold mb-3">${parfume.price}</p>
            <p className="text-base mb-4">{parfume.description}</p>
            <div className="flex items-center space-x-1">
              {Array.from({ length: parfume.fragranceLevel }, (_, i) => (
                <FaStar key={i} className="text-yellow-500 text-lg" />
              ))}
            </div>

            <div className="flex items-center space-x-2 my-4">
              <button
                className="bg-gray-800 text-white px-10 py-3 rounded-lg cursor-pointer"
                onClick={decrementQty}
                disabled={qty <= 1}
              >
                <PiMinusBold />
              </button>
              <input
                type="number"
                value={qty}
                readOnly
                className="text-center py-2 border-gray-800 border rounded-lg w-full"
              />
              <button
                onClick={incrementQty}
                className="bg-gray-800 text-white px-10 py-3 rounded-lg text-xl cursor-pointer"
              >
                <BiPlus />
              </button>
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
                  onClick={() => addKeranjang(parfume.id)}
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
        <div className="my-10 mx-5">
          <Ratings review={review} />
        </div>
      </div>
    </UserLayout>
  );
};

export default DetailParfume;
