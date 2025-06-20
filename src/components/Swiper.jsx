import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router";
import Img1 from "../assets/parfumes/chanel5.png";
import Img2 from "../assets/parfumes/ysl.webp";
import Img3 from "../assets/parfumes/gucci.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Swiper = () => {
  const HeroSlider = [
    {
      id: 1,
      img: Img1,
      title: "New Product",
      title2: "Chanel No. 5",
      description:
        "Explore a selection of new and best perfumes that exude elegance and allure. Discover good fragrances crafted to enchant and captivate, perfect for any occasion",
      link: "/detail/1",
    },
    {
      id: 2,
      img: Img2,
      title: "New Product",
      title2: "Yves Saint Laurent Libre",
      description:
        "Indulge in new and best attars that offer a rich and lasting aroma. Experience good fragrances that evoke tradition and sophistication, ideal for those seeking a unique olfactory journey.",
      link: "/detail/6",
    },
    {
      id: 3,
      img: Img3,
      title: "New Product",
      title2: "Gucci Bloom",
      description:
        "Discover the allure of new and best oud perfumes, known for their deep, woody scents. Experience good fragrances that embody luxury and timelessness, perfect for those who appreciate the finer things in life.",
      link: "/detail/5",
    },
  ];
  return (
    <>
      <SwiperComponent
        style={{ "--swiper-theme-color": "#1F2937" }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {HeroSlider.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-10">
              <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-5 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                <h1 className="text-lg md:text-4xl font-light overflow-hidden">
                  {data.title}
                </h1>
                <h1 className="uppercase text-2xl md:text-[80px] font-bold bg-gradient-to-r from-gray-600 via-80%  to-black inline-block text-transparent bg-clip-text">
                  {data.title2}
                </h1>
                <p className="text-sm md:text-lg font-light">
                  {data.description}
                </p>
                <div className="mx-auto md:mx-0 ">
                  <Link to={data.link} className="">
                    <button className="text-gray-900  bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer flex gap-2 items-center ">
                      <span>
                        <HiOutlineShoppingBag size={20} />
                      </span>
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
              <div className="order-1 sm:order-2 flex md:justify-end justify-center">
                <div className="">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-[200px] sm:w-[450px] h-[200px] sm:h-[450px] transform transition-transform duration-300 hover:scale-105 sm:hover:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </>
  );
};

export default Swiper;
