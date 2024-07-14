import React, { useContext } from "react";
import Record from "./Record";
import { GeneralContext } from "../contexts/GeneralContextProvider";

const RecordGroup = () => {
  const {records}= useContext(GeneralContext)
  return (
    <>
      {records.map((record,index) => (
        <Record  key={record.id} index={index} record={record}/>
      ))}
    </>
  );
};

export default RecordGroup;
