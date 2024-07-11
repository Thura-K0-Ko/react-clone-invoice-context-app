import React from "react";

const Product = ({product:{id,name,price}}) => {
    
  return (
    <div className=" flex mb-2 justify-between items-center border border-slate-300 px-4 py-3 rounded-lg ">
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default Product;
