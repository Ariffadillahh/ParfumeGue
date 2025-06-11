import React from "react";
import { useParams } from "react-router";
import NavDashboard from "../components/NavDashboard";
import { perfumes } from "../utils/data";
import { MdOutlineDeleteOutline } from "react-icons/md";

const DetailOrder = () => {
  const { id } = useParams();
  const order = JSON.parse(localStorage.getItem("Orders")) || {};
  const detailOrder = order.find((orders) => orders.id === id);
  return (
    <div>
      <NavDashboard />
      <div className="md:mx-10 mx-3 my-10 md:my-0">
        <div className="container mx-auto mt-10">
          <h1 className="text-2xl font-bold mb-4">Detail Order</h1>
          <div className="w-full justify-center md:flex gap-5">
            <div className="lg:w-full grid grid-cols-2 gap-4 md:block">
              {detailOrder?.product.map((item, index) => {
                const parfume = perfumes.find((parfume) => {
                  return parfume.id === parseInt(item);
                });
                return (
                  <div className="rounded-lg md:w-full" key={index}>
                    <div className="justify-between  mb-6 rounded-lg bg-white p-6 shadow-md md:flex md:justify-start">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gYOl79qIkcS_Fv8JZy6S0eWCIp-JUUjlOw&s"
                        alt="product-image"
                        className="w-full rounded-lg sm:w-40"
                      />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2 className="text-lg font-bold text-gray-900 truncate">
                            {parfume.name}
                          </h2>
                          <p className="mt-1 text-xs text-gray-700">
                            {parfume.brand}
                          </p>
                          <p className="mt-3 text-gray-700">
                            ${parfume.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-full md:w-1/2 md:sticky top-10 h-full md:mt-0">
              <div className="mt-6 h-full  bg-white md:mt-0 w-full p-4 shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
                <div>
                  <h2 className="mb-2">
                    Name: {detailOrder.name}
                  </h2>
                  <h2 className="mb-2">
                    Phone: {detailOrder.phone}
                  </h2>
                  <h2 className=" mb-2">
                    Address: {detailOrder.address}
                  </h2>

                  <h2 className="text-xl font-semibold mb-4">
                    Total Price: ${detailOrder.totalPrice}
                  </h2>
                  <div className="flex flex-row gap-4">
                    <a
                      href={`https://wa.me/+62${detailOrder.phone.substring(
                        1
                      )}?text=Hallo, ${
                        detailOrder.name
                      }. Pesanan anda akan segera kami kirim ke alamat ${
                        detailOrder.address
                      }. Terima kasih telah berbelanja di toko kami`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Hubungi via whatsApp
                    </a>

                    <a
                      href={`https://wa.me/+62${detailOrder.phone.substring(
                        1
                      )}?text=Hallo, ${
                        detailOrder.name
                      }. Izin mengingatkan untuk selesaikan pembayaran sebesar $${
                        detailOrder.totalPrice
                      }. Terima kasih telah berbelanja di toko kami`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Remainder Pembayaran
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailOrder;
