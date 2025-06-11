import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { PiAddressBookTabsFill } from "react-icons/pi";
import ModalPembayaran from "./ModalPembayaran";
import { v4 as uuidv4 } from "uuid";

const FormCheckOut = ({ totalPrice, product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckout = () => {
    const orderDetails = {
      id: uuidv4(),
      name: formik.values.name,
      phone: formik.values.phone,
      address: formik.values.address,
      totalPrice,
      product,
    };

    const existingOrders = JSON.parse(localStorage.getItem("Orders")) || [];
    existingOrders.push(orderDetails);
    localStorage.setItem("Orders", JSON.stringify(existingOrders));
    toast.success(`Successfully Checkout By ${formik.values.name}`);
    localStorage.removeItem("keranjang");
    setIsModalOpen(true);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      address: "",
    },
    onSubmit: handleCheckout,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(/^[0-9]+$/, "Phone number must be numeric")
        .max(12, "Phone number must be at most 12 digits"),
      address: Yup.string().required("Address is required"),
    }),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
  };

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
    <div className="w-full md:w-1/2 md:sticky top-10 h-full md:mt-0">
      <div className="mt-6 h-full  bg-white md:mt-0 w-full">
        <form onSubmit={formik.handleSubmit} className="my-3 shadow-md rounded-lg p-4"> 
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Username
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                <FaUserCircle className="w-5 h-5 text-gray-500" />
              </span>
              <input
                type="text"
                id="username"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                placeholder="elonmusk"
                name="name"
                onChange={handleChange}
                value={formik.values.name}
              />
            </div>
            {formik.errors.name && (
              <div className="text-red-500 text-sm mt-1 italic">
                {formik.errors.name}
              </div>
            )}
          </div>
          <div className="my-4">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                <FaPhone className="w-4 h-4 text-gray-500" />
              </span>
              <input
                type="text"
                id="phone"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                placeholder="0823243234"
                autoComplete="off"
                name="phone"
                onChange={handleChange}
                value={formik.values.phone}
              />
            </div>
            {formik.errors.phone && (
              <div className="text-red-500 text-sm mt-1 italic">
                {formik.errors.phone}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Address
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                <PiAddressBookTabsFill className="w-5 h-5 text-gray-500" />
              </span>
              <input
                type="text"
                id="address"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                placeholder="Address"
                name="address"
                autoComplete="off"
                onChange={handleChange}
                value={formik.values.address}
              />
            </div>
            {formik.errors.address && (
              <div className="text-red-500 text-sm mt-1 italic">
                {formik.errors.address}
              </div>
            )}
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${totalPrice}</p>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-[#101828] py-1.5 font-medium text-blue-50 hover:bg-[#3a3758] duration-200 transition-all ease-in-out "
          >
            Check out
          </button>
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
      <ModalPembayaran
        totalPrice={totalPrice}
        openModal={isModalOpen}
        setOpenModal={setIsModalOpen}
      />
    </div>
  );
};

export default FormCheckOut;
