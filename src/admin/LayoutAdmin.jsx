import React from "react";
import Sidebar from "../components/Sidebars";

const LayoutAdmin = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div className="md:ml-[250px] mx-5">{children}</div>
    </div>
  );
};

export default LayoutAdmin;
