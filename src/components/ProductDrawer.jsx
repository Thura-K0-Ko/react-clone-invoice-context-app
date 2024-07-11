import React from "react";
import ProductGroup from "./ProductGroup";
import ProductCreateForm from "./ProductCreateForm";

const ProductDrawer = ({ openDrawer,handleDrawer,products,createProduct }) => {
  return (
    <div
      className={`h-screen fixed bg-white right-0 w-96  shadow-lg p-5 ${
        !openDrawer && "translate-x-full"
      }`}
    >
      <div className=" flex items-center content-center justify-between mb-5">
        <div className="">
          <h1 className=" text-3xl font-bold text-slate-700">Your Product</h1>
          <h3 className=" text-lg font-medium text-slate-500">
            Manage Product
          </h3>
        </div>
        <button onClick={handleDrawer} className=" bg-sky-200 p-3 rounded active:scale-90 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ProductGroup products={products} />
      <ProductCreateForm createProduct={createProduct} />
    </div>
  );
};

export default ProductDrawer;
