/* eslint-disable no-unused-vars */
import React from "react";

const IndexCard = () => {
  const indexName = "NIFTY 50";
  const indexValue = "22,323.35";
  const changeValue = "438.85 (2.01%)";
  const isPositive = true;

  return (
    <div className="bg-gray-800 bodyBaseHeavy rounded-lg p-4 text-white shadow-lg hover-zoom">
      <div className="">{indexName}</div>
      <div className="flex justify-between">
        <div className=" mt-2 mr-2">{indexValue}</div>
        <div
          className={`mt-2 mr-6 ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {changeValue}
        </div>
      </div>
    </div>
  );
};

export default IndexCard;
