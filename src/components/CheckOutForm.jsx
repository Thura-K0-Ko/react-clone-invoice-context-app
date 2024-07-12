import React, { useContext, useRef } from "react";
import { GeneralContext } from "../contexts/GeneralContextProvider";

const CheckOutForm = () => {
  const { products, handleRecord } = useContext(GeneralContext);

  const idRef = useRef("");
  const quantityRef = useRef("");

  const handleBuyBtn = () => {
    const currentProduct = products.find(
      (product) => product.id === parseInt(idRef.current.value)
    );
    const cost = currentProduct.price * quantityRef.current.valueAsNumber;

    const newRecord = {
      id: Date.now(),
      productId:currentProduct.id,
      name: currentProduct.name,
      price: currentProduct.price,
      quantity: quantityRef.current.valueAsNumber,
      cost,
    };
    handleRecord(newRecord);
    idRef.current.value=1;
    quantityRef.current.value = "";
   
  };
  return (
    <section className=" mt-5">
      <div className="  ">
        <div className=" grid grid-cols-5  gap-2">
          <div className="  col-span-2 ">
            <label
              htmlFor=""
              className=" text-sm font-medium text-slate-500 select-none"
            >
              Select Your Product
            </label>
            <select
              ref={idRef}
              name=""
              id=""
              className=" w-full px-2 py-2 mt-2 bg-slate-100 border border-slate-400 rounded outline-none cursor-pointer"
            >
              {products.map(({ id, name, price }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="  col-span-2">
            <label
              htmlFor=""
              className=" text-sm font-medium text-slate-500 select-none"
            >
              Quantity
            </label>
            <input
              ref={quantityRef}
              type="number"
              className="w-full px-2 py-1.5 bg-slate-100 border border-slate-400 rounded outline-none cursor-pointer mt-2"
              name=""
              id=""
              min={1}
            />
          </div>
          <div className="  col-span-1">
            <button
              onClick={handleBuyBtn}
              className=" w-full h-full bg-blue-700 border border-blue-700 hover:bg-blue-600 rounded text-slate-50"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOutForm;
