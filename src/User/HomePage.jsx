import React, { useState } from "react";
import UserLayout from "./UserLayout";
import { perfumes as data } from "../utils/data";
import CardProduct from "../components/CardProduct";
import Swiper from "../components/Swiper";
import bgImage from "../assets/parfumeBG.jpg";
import { Link } from "react-router";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const HomePage = () => {
  const parfumes = data;

  const displayedParfumes = parfumes.slice(0, 4);

  return (
    <UserLayout>
      <Swiper />
      <div>
        <div className="h-full w-full md:grid md:grid-cols-2 gap-5 relative">
          <div
            className="min-h-[70vh] my-10 w-full hidden md:block"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderBottomRightRadius: "130px",
              borderTopLeftRadius: "130px",
            }}
          >
            <h1 className="bg-white absolute top-[100px] md:left-1/2 transform -translate-x-1/2 p-2 text-5xl font-bold italic tracking-wide text-gray-800">
              30 YEARS OF EXPERIENCE
            </h1>
          </div>
          <div className="flex items-center">
            <div className="mt-10">
              <div className="h-[4px] w-[100px] bg-gray-500 rounded mt-5 mb-2 mx-auto md:mx-0"></div>
              <h1 className="text-2xl font-semibold text-center md:text-left">
                Learn More About Us
              </h1>
              <p className="text-gray-500 mt-2 mb-5 text-justify">
                Parfumes Gue adalah pilihan terbaik untuk mendapatkan parfum
                berkualitas tinggi. Kami menyediakan koleksi parfum eksklusif
                dengan aroma yang elegan, tahan lama, dan cocok untuk segala
                kesempatan. Dengan bahan-bahan pilihan dan desain botol yang
                mewah, parfum kami dirancang untuk memberikan kesan yang tak
                terlupakan. Jelajahi koleksi kami dan temukan aroma yang paling
                mencerminkan kepribadian Anda. Bergabunglah sekarang dan jadikan
                setiap momen Anda lebih istimewa bersama Parfumes Gue!
              </p>
              <Link to="/about">
                <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer flex gap-1 items-center">
                  Read More
                  <MdKeyboardDoubleArrowRight
                    size={20}
                    className="animate-pulse"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[4px] w-[100px] bg-gray-500 rounded mt-5 mb-2 mx-auto "></div>
        <h1 className="text-2xl font-bold mb-4 text-center">New Arrivals</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
          {displayedParfumes.map((parfume, index) => (
            <CardProduct key={index} parfume={parfume} />
          ))}
        </div>
      </div>
    </UserLayout>
  );
};

export default HomePage;
