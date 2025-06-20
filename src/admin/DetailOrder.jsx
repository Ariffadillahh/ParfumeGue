import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { perfumes } from "../utils/data";
import ModalKonfrimPengiriman from "./ModalKonfrimPengiriman";
import { BsBox2 } from "react-icons/bs";
import { Toaster } from "react-hot-toast";
import LayoutAdmin from "./LayoutAdmin";
import Breadcrumb from "../components/Breadcrumb";

const DetailOrder = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("Orders")) || []
  );
  const detailOrder = Orders.find((order) => order.id === id);

  if (!detailOrder) {
    return (
      <div>
        <NavDashboard />
        <div className="text-center mt-10">
          <h1 className="text-2xl font-bold text-red-500">
            Order tidak ditemukan.
          </h1>
        </div>
      </div>
    );
  }

  const totalPrice = detailOrder.product.reduce((total, item) => {
    const parfume = perfumes.find((p) => p.id === parseInt(item.id));
    return parfume ? total + parfume.price * item.qty : total;
  }, 0);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <LayoutAdmin>
      <div>
        <Breadcrumb title={detailOrder.name}/>
        <Toaster position="top-right" reverseOrder={false} />
        <div className="md:mx-10 mx-3 my-10">
          <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Detail Order</h1>
            <div className="w-full justify-center md:flex gap-5">
              <div className="lg:w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {detailOrder.product.map((item, index) => {
                  const parfume = perfumes.find(
                    (p) => p.id === parseInt(item.id)
                  );
                  if (!parfume) return null;

                  return (
                    <div className="rounded-lg" key={index}>
                      <div className="flex mb-6 rounded-lg bg-white p-6 shadow-md">
                        <img
                          src={parfume.image}
                          alt={parfume.name}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="ml-4 flex flex-col justify-between">
                          <h2 className="text-lg font-bold text-gray-900 truncate">
                            {parfume.name}
                          </h2>
                          <p className="text-sm text-gray-700">
                            {parfume.brand}
                          </p>
                          <p className="text-gray-700">Qty: {item.qty}</p>
                          <p className="text-gray-900 font-semibold">
                            ${parfume.price * item.qty}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-full md:w-1/2 md:sticky top-10 h-full">
                <div className="bg-white w-full p-6 shadow-md rounded-lg">
                  <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
                  <p className="mb-2">
                    <span className="font-semibold">Name:</span>{" "}
                    {detailOrder.name}
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Phone:</span>{" "}
                    {detailOrder.phone}
                  </p>
                  <p className="mb-4">
                    <span className="font-semibold">Address:</span>{" "}
                    {detailOrder.address}
                  </p>
                  <h2 className="text-xl font-bold mb-4">
                    Total Price: ${totalPrice}
                  </h2>
                  <div className="flex flex-row gap-4">
                    {detailOrder.status !== "terkirim" ? (
                      <>
                        <button
                          onClick={() => setIsModalOpen(!isModalOpen)}
                          className="bg-blue-500 px-3 py-2 text-white cursor-pointer rounded"
                        >
                          Kirim Pesanan
                        </button>
                        <a
                          href={`https://wa.me/+62${detailOrder.phone.substring(
                            1
                          )}?text=Hallo, ${
                            detailOrder.name
                          }. Izin mengingatkan untuk selesaikan pembayaran sebesar $${totalPrice.toFixed(
                            2
                          )}. Terima kasih telah berbelanja di toko kami`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                          Ingatkan Pembayaran
                        </a>
                      </>
                    ) : (
                      <>
                        <button
                          disabled
                          className="bg-blue-500 px-3 py-2 text-white w-full rounded flex gap-2 items-center justify-center capitalize"
                        >
                          Pesanan telah dikirim
                          <span>
                            <BsBox2 className="animate-bounce" />
                          </span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ModalKonfrimPengiriman
            detailOrder={detailOrder}
            isModalOpen={isModalOpen}
            setModal={setIsModalOpen}
            setOrders={setOrders}
            Orders={Orders}
          />
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default DetailOrder;
