import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

function ListCart({ parfume, setCartItems, cartItems, qty }) {
  const deleteCart = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );
    localStorage.setItem("keranjang", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const totalPrice = parfume.price * qty;

  return (
    <>
      {parfume ? (
        <div className="rounded-lg md:w-full ">
          <div className="justify-between  mb-6 rounded-lg bg-white p-6 shadow-md md:flex md:justify-start">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gYOl79qIkcS_Fv8JZy6S0eWCIp-JUUjlOw&s"
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                  {parfume.name}
                </h2>
                <p className="mt-1 text-xs text-gray-700">{parfume.brand}</p>
                <p className="mt-1 text-xs text-gray-700">${parfume.price}</p>
                <p className="mt-1 text-xs text-gray-700">{qty}x</p>
              </div>
              <div className="mt-4 flex ">
                <div className="flex items-center">
                  <p className="text-sm">${totalPrice} </p>
                  <button
                    onClick={() => deleteCart(parfume.id)}
                    className="text-2xl text-red-600 cursor-pointer"
                  >
                    <MdOutlineDeleteOutline />
                  </button>
                </div>
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
