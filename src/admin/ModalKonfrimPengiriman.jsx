import React, { useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import toast from "react-hot-toast";


const ModalKonfrimPengiriman = ({
  detailOrder,
  isModalOpen,
  setModal,
  setOrders,
  Orders,
}) => {
  if (!isModalOpen) return null;
  const handleClose = () => {
    setModal(false);
  };

  const handleFinished = (id) => {
    const updatedOrders = Orders.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: "terkirim",
        };
      }
      return item;
    });

    localStorage.setItem("Orders", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
    handleClose();
    toast.success(`Orders  ${detailOrder.name} berhasil di kirim`);
  };
  return (
    <div>
      <div
        className={
          !isModalOpen
            ? "hidden"
            : "fixed  top-0 left-0 right-0 z-50 bg-black/70 overflow-hidden h-full flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        }
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-1">
                Orderan Dikirim <CiDeliveryTruck size={30} />
              </h3>
              <button
                type="button"
                onClick={handleClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              >
                <IoMdClose className="text-3xl" />
              </button>
            </div>
            <div className="mx-5 text-justify my-5">
              <p>
                Pesanan atas nama <strong>{detailOrder.name}</strong> dengan
                alamat <strong>{detailOrder.address}</strong> akan segera
                diproses untuk pengiriman. Mohon pastikan data berikut sudah
                sesuai sebelum melanjutkan. Klik logo WhatsApp untuk
                mengonfirmasi atau memberi tahu pengiriman.
              </p>
            </div>
            <div className="flex items-center justify-between gap-4 p-4 md:p-5 border-t border-gray-200 rounded-b ">
              <button
                onClick={() => handleFinished(detailOrder.id)}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Konfirmasi Penfiriman
              </button>
              <a
                href={`https://wa.me/+62${detailOrder.phone.substring(
                  1
                )}?text=Halo, ${
                  detailOrder.name
                }. Pesanan Anda akan kami kirim ke alamat ${
                  detailOrder.address
                }. Terima kasih telah berbelanja di toko kami.`}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline border border-green-500 py-1.5 px-3 rounded"
              >
                <FaWhatsapp className="text-green-500 text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalKonfrimPengiriman;
