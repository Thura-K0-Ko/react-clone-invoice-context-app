import React, { useContext } from "react";
import { GeneralContext } from "../main";

const Heading = () => {
  const {name}= useContext(GeneralContext)
  return (
    <div className=" mt-10">
      <h1 className=" text-3xl font-bold text-slate-600 ">MMS Solutions {name}</h1>
      <h3 className=" text-lg text-slate-400 font-semibold">Invoice App</h3>
    </div>
  );
};

export default Heading;
