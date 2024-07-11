import React from "react";

const Footer = ({ openDrawer, handleDrawer }) => {
  return (
    <div className=" flex justify-end mt-auto mb-5 gap-2">
      <button
        className=" border border-blue-300 px-3 py-2 text-xs font-medium rounded-lg shadow-lg active:bg-blue-500"
        onClick={handleDrawer}
      >
        Manage Product
      </button>
      <button className=" border border-blue-300 px-3 py-2 text-xs font-medium rounded-lg shadow-lg bg-blue-500 active:bg-blue-300">
        Print
      </button>
    </div>
  );
};

export default Footer;
