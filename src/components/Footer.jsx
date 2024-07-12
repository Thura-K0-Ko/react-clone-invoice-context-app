import React, { useContext } from "react";
import { GeneralContext } from "../contexts/GeneralContextProvider";

const Footer = () => {
  const { toggleDrawer }= useContext(GeneralContext)
  return (
    <div className=" flex justify-end mt-auto mb-5 gap-2">
      <button
        className=" border border-blue-300 px-3 py-2 text-xs font-medium rounded-lg shadow-lg active:bg-blue-500"
        onClick={toggleDrawer}
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
