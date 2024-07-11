import "./App.css";

import React, { useState } from "react";
import Heading from "./components/Heading";
import CheckOutForm from "./components/CheckOutForm";
import RecordTable from "./components/RecordTable";
import TestTable from "./components/TestTable";
import ProductDrawer from "./components/ProductDrawer";
import Footer from "./components/Footer";

const App = () => {
  const [products, setProduct] = useState([
    { id: 1, name: "Apple 1", price: 10.99 },
    { id: 2, name: "Mango 2", price: 19.99 },
    { id: 3, name: "Orange 3", price: 5.49 },
  ]);

  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const createProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };

  const [records, setRecord] = useState([]);
  const handleRecord = (newRecord) => {
    setRecord([...records, newRecord]);
  };

  const removeRecord = (id) => {
    setRecord(records.filter((record) => record.id != id));
  };
  return (
    <div className=" max-w-[700px] px-5 lg:p-0   mx-auto bg-slate-100  min-h-screen flex flex-col ">
      <Heading />
      <CheckOutForm products={products} handleRecord={handleRecord} />
      <RecordTable records={records} removeRecord={removeRecord} />
      <ProductDrawer
        openDrawer={openDrawer}
        handleDrawer={handleDrawer}
        products={products}
        createProduct={createProduct}
      />

    
      <Footer handleDrawer={handleDrawer} />
      {/* <TestTable /> */}
    </div>
  );
};

export default App;
