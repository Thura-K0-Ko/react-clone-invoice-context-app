import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const [products, setProduct] = useState([
    { id: 1, name: "Apple 1", price: 10.99 },
    { id: 2, name: "Mango 2", price: 19.99 },
    { id: 3, name: "Orange 3", price: 5.49 },
  ]);

  const createProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };
  const [records, setRecord] = useState([]);
  const handleRecord = (newRecord) => {
    // const existedRecord = records.find(
    //   (el) => el.productId === newRecord.productId
    // );

    // if (existedRecord) {
    //   return updateRecord(existedRecord.id,newRecord.quantity);
    // }
    return setRecord([...records, newRecord]);
  };

  const removeRecord = (id) => {
    setRecord(records.filter((record) => record.id != id));
  };

  const updateRecord = (id, quantity) => {
    setRecord(
      records.map((el) => {
        if (el.id === id) {
          const newQuantity = el.quantity + quantity;
          const newCost = newQuantity * el.price;
          return { ...el, quantity: newQuantity, cost: newCost };
        }
        return el;
      })
    );
  };
  return (
    <GeneralContext.Provider
      value={{
        toggleDrawer,
        openDrawer,
        products,
        createProduct,
        records,
        handleRecord,
        removeRecord,
        updateRecord,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
