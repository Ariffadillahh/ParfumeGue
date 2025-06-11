import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UserLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="mx-3 md:mx-10 min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default UserLayout;
