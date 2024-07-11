import React from "react";
import RecordGroup from "./RecordGroup";

const RecordTable = ({ records ,removeRecord}) => {
  return (
    <table className=" bg-slate-300 w-full mt-5">
      <thead className=" ">
        <tr className=" bg-blue-200">
          <th className=" py-3 px-5 text-sm text-center" scope="col">
            #
          </th>
          <th className=" py-3 px-5 text-sm text-start " scope="col">
            PRODUCT NAME
          </th>
          <th className=" py-3 px-5 text-sm text-end" scope="col">
            PRICE
          </th>
          <th className=" py-3 px-5 text-sm text-end" scope="col">
            QUANTITY
          </th>
          <th className=" py-3 px-5 text-sm text-end" scope="col">
            COST
          </th>
        </tr>
      </thead>
      <tbody>
        <RecordGroup records={records}  removeRecord={removeRecord}/>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={4} className=" text-center">
            Total
          </td>
          <td className=" text-end py-3 px-5 text-sm">
            {records.reduce((pv, cv) => pv + cv.cost, 0).toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default RecordTable;
