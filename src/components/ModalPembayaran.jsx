import React from "react";
import qriss from "../assets/barcode.png";
import { BiCheck } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const ModalPembayaran = ({ totalPrice, openModal, setOpenModal }) => {
  if (!openModal) return null;
  const handleClose = () => {
    setOpenModal(false);
    window.location.reload();
  };

  return (
    <div>
      <div
        className={
          !openModal
            ? "hidden"
            : "fixed  top-0 left-0 right-0 z-50 bg-black/70 overflow-hidden h-full flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        }
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-1">
                Checkout Success <BiCheck className="text-green-600 text-3xl" />
              </h3>
              <button
                type="button"
                onClick={handleClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              >
                <IoMdClose className="text-3xl" />
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <div className="flex justify-center items-center h-full">
                <img
                  src={qriss}
                  alt="Qriss"
                  className="max-w-full max-h-full"
                />
              </div>
              <p className="text-base leading-relaxed text-gray-500 text-center">
                Silakan lakukan pembayaran sejumlah
                <span className="font-bold text-black mx-1">${totalPrice}</span>
                dengan memindai barcode di atas. Setelah itu, unggah bukti
                pembayaran Anda. Jika mengalami kendala dalam proses pembayaran,
                <a
                  href="https://wa.me/+6281293772795"
                  className="underline text-blue-700 mx-1"
                  target="_blank"
                >
                  klik di sini
                </a>
                untuk menghubungi kami melalui WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPembayaran;
