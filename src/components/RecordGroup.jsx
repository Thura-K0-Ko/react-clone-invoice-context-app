import React from "react";
import Record from "./Record";

const RecordGroup = ({ records,removeRecord }) => {
  return (
    <>
      {records.map((record,index) => (
        <Record  key={record.id} index={index} {...record} removeRecord={removeRecord}/>
      ))}
    </>
  );
};

export default RecordGroup;
