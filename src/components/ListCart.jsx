import React from "react";
import {
  BiHeartCircle,
  BiMinusCircle,
  BiSolidPlusCircle,
  BiTrash,
} from "react-icons/bi";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

function ListCart({ parfume, setCartItems, cartItems, qty }) {
  const deleteCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("keranjang", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const decrementQty = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: Math.max(item.qty - 1, 1),
        };
      }
      return item;
    });

    localStorage.setItem("keranjang", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const incrementQty = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: Math.max(item.qty + 1),
        };
      }
      return item;
    });

    localStorage.setItem("keranjang", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const totalPrice = parfume.price * qty;

  return (
    <>
      {parfume ? (
        <div className="md:flex md:items-center gap-4 p-4 border-b w-full">
          <img
            src={parfume.image}
            alt={parfume.name}
            className="w-32 h-32 object-cover rounded-md mx-auto"
          />
          <div className="w-full">
            <div className="md:flex-1 text-center md:text-left">
              <h2 className="text-lg font-bold text-gray-900">
                {parfume.name}
              </h2>
              <p className="text-sm text-gray-600">Brand: {parfume.brand}</p>
            </div>
            <div className="my-4 flex justify-center md:block">
              <button
                onClick={() => deleteCart(parfume.id)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <BiTrash className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="md:flex md:justify-end ">
            <div>
              <div className="md:text-right ">
                <p className="text-xl font-bold text-gray-900 tracking-wide text-center">
                  ${totalPrice}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2 justify-center">
                <button
                  onClick={() => decrementQty(parfume.id)}
                  className="p-1 cursor-pointer"
                >
                  <FiMinusCircle className="w-4" />
                </button>
                <p className="text-lg font-medium text-gray-900">{qty}</p>
                <button
                  onClick={() => incrementQty(parfume.id)}
                  className="p-1 cursor-pointer"
                >
                  <FiPlusCircle className="w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Product with ID {id} not found.</p>
      )}
    </>
  );
}

export default ListCart;
