import React, { useState } from "react";
import UserLayout from "./UserLayout";
import { MdAddIcCall } from "react-icons/md";
import { FaMailBulk } from "react-icons/fa";
import { GrLocationPin } from "react-icons/gr";
import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = { name, email, phone, description };

    const storedMessages =
      JSON.parse(localStorage.getItem("contactMessages")) || [];

    const updatedMessages = [...storedMessages, newMessage];

    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));

    setName("");
    setEmail("");
    setPhone("");
    setDescription("");

    toast.success(`Pesan berhasil dikirim.`);
  };

  return (
    <UserLayout>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="min-h-screen flex items-center justify-center my-10 md:my-0">
        <div className="container mx-auto px-4 md:px-10">
          <h1 className="text-3xl font-bold text-center mb-4">Contact Us!</h1>
          <p className="text-center text-gray-600 mb-10">
            The promise to "get back to you as soon as possible" assures prompt
            attention to inquiries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form
              className="bg-white shadow-md rounded-lg p-6"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded-md"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded-md"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded-md"
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded-md"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#3a3758] text-white py-2 rounded-md focus:outline-none focus:ring-2  focus:ring-opacity-50"
              >
                Send
              </button>
            </form>

            <div>
              <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <div className="flex items-center mb-4">
                  <span className="text-red-500 mr-3">
                    <MdAddIcCall />
                  </span>
                  <p>470-601-1911</p>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-orange-500 mr-3">
                    <FaMailBulk />
                  </span>
                  <p>parfumeGue@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 mr-3">
                    <GrLocationPin />
                  </span>
                  <p>Condet, Jakarta Timur, 13640</p>
                </div>
              </div>
              <div className="h-[315px] w-full bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.015707758431!2d106.8547861935791!3d-6.262694699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f25621ebe857%3A0x6b06a9eae6a827e3!2sEVi%20Perfume%20Store!5e0!3m2!1sen!2sid!4v1749646166883!5m2!1sen!2sid"
                  className="w-full h-full"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default ContactUs;
