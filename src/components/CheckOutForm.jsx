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
      productId: currentProduct.id,
      name: currentProduct.name,
      price: currentProduct.price,
      quantity: quantityRef.current.valueAsNumber,
      cost: parseInt(cost),
    };
    handleRecord(newRecord);
    console.log(currentProduct.price,quantityRef.current.valueAsNumber);
    console.log(typeof(quantityRef.current.valueAsNumber))
    idRef.current.value = 1;
    quantityRef.current.value = "";
  };
  return (
    // <section className="mb-10 block print:hidden">
    //   <div id="recordForm">
    //     <div className="grid grid-cols-5 gap-3">
    //       <div className="col-span-2">
    //         <label
    //           htmlFor="productSelect"
    //           className="block mb-2 text-sm font-medium text-yellow-900 dark:text-white"
    //         >
    //           Select Your Product
    //         </label>
    //         <select
    //           required
    //           ref={idRef}
    //           id="productSelect"
    //           className="bg-gray-50 border border-gray-300 text-yellow-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         >
    //           <option value=""></option>
    //           {products.map(({ id, name }) => (
    //             <option key={id} value={id}>
    //               {name}
    //             </option>
    //           ))}
    //         </select>
    //       </div>
    //       <div className="col-span-2">
    //         <label
    //           htmlFor="quantityInput"
    //           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //         >
    //           Quantity
    //         </label>
    //         <input
    //           required
    //           ref={quantityRef}
    //           type="number"
    //           id="quantityInput"
    //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           min={1}
    //         />
    //       </div>
    //       <div className="col-span-1">
    //         <button
    //           onClick={handleBuyBtn}
    //           type="button"
    //           className="font-heading w-full h-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    //         >
    //           Buy
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className=" mt-5  print:hidden">
      <div>
        <div className=" grid grid-cols-5  gap-2">
          <div className="  col-span-2 ">
            <label
              htmlFor="idRef"
              className=" text-sm font-medium text-slate-500 select-none"
            >
              Select Your Product
            </label>
            <select
              required
              ref={idRef}
              id="productSelect"
              className="bg-gray-50 border border-gray-300 text-yellow-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              // ref={idRef}
              // name=""
              // id="idRef"
              // required
              // className=" w-full px-2 py-2 mt-2 bg-slate-100 border border-slate-400 rounded outline-none cursor-pointer"
            >
              {products.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="  col-span-2">
            <label
              htmlFor="quantityRef"
              className=" text-sm font-medium text-slate-500 select-none"
            >
              Quantity
            </label>
            <input
              // ref={quantityRef}
              // type="number"
              // id="quantityRef"
              // className="w-full px-2 py-1.5 bg-slate-100 border border-slate-400 rounded outline-none cursor-pointer mt-2"
              // required
              type="number"
              required
              ref={quantityRef}
              id="quantityInput"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              min={1}
            />
          </div>
          <div className="  col-span-1">
            <button
              type="submit"
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
