import "./App.css";

import React, { useContext, useState } from "react";
import Heading from "./components/Heading";
import CheckOutForm from "./components/CheckOutForm";
import RecordTable from "./components/RecordTable";
import TestTable from "./components/TestTable";
import ProductDrawer from "./components/ProductDrawer";
import Footer from "./components/Footer";
import EmptyState from "./components/EmptyState";

const App = () => {
  return (
    <div className=" max-w-[700px] px-5 lg:p-0   mx-auto bg-slate-100  min-h-screen flex flex-col ">
      <Heading />
      <CheckOutForm />
      <RecordTable />
      <ProductDrawer />
    
      <Footer />
      {/* <TestTable /> */}
    </div>
  );
};

export default App;
