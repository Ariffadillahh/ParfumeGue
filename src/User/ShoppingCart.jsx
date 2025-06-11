import React, { useState, useEffect } from "react";
import { perfumes as data } from "../utils/data";
import UserLayout from "./UserLayout";
import ListCart from "../components/ListCart";
import FormCheckOut from "../components/FormCheckOut";
import { IoIosCart } from "react-icons/io";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("keranjang")) || []
  );

  const totalPrice = cartItems.reduce((total, id) => {
    const parfumes = data.find((parfume) => parfume.id === parseInt(id));
    return parfumes ? total + parfumes.price : total;
  }, 0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("keranjang"));
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);

  return (
    <UserLayout>
      <div className="container mx-auto mt-10">
        {cartItems.length > 0 ? (
          <>
            <h1 className="mb-4 text-2xl font-bold lg:mx-5">Shopping Cart</h1>
            <div className="w-full justify-center md:flex lg:px-5 gap-5">
              <div className="lg:w-full grid grid-cols-2 gap-4 md:block">
                {cartItems.map((id, index) => {
                  const parfumes = data.find(
                    (parfume) => parfume.id === parseInt(id)
                  );
                  return (
                    <ListCart
                      key={index}
                      parfume={parfumes}
                      setCartItems={setCartItems}
                      cartItems={cartItems}
                    />
                  );
                })}
              </div>
              <FormCheckOut
                setCartItems={setCartItems}
                cartItems={cartItems}
                totalPrice={totalPrice}
                product={cartItems}
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center h-[70vh]">
              <p className="font-semibold text-xl text-gray-800 italic">
                <span><IoIosCart size={50} className="mx-auto animate-bounce" /></span>
                Chart Kosong
              </p>
            </div>
          </>
        )}
      </div>
    </UserLayout>
  );
};

export default ShoppingCart;
