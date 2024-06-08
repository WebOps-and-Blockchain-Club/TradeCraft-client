/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from "react-router-dom";

const StockCard = () => {
  const [added, setAdded] = useState(false);

  const toggleAdded = (e) => {
    e.stopPropagation(); // Prevent card's click event
    setAdded(!added);
  };

  const stockName = "NHPC";
  const stockPrice = "₹98.15";
  const changeValue = "0.75 (0.77%)";
  const isPositive = true;

  return (
    <div className="bg-gray-800 rounded-lg p-6  text-white shadow-lg flex flex-col hover-zoom">
      <div className="flex justify-between items-center mb-4">
        <Link to="/stockid" className="no-underline">
          <img
            src={
              "https://assets-netstorage.groww.in/stock-assets/logos/GSTK543257.png"
            }
            alt={`logo`}
            className="w-12 h-10 bg-white rounded-sm mr-[65px]"
          />
        </Link>
        <div>
          <button
            onClick={toggleAdded}
            className={`p-[1px] rounded-full 
              ${added ? "text-green-500" : "hover:bg-gray-500"}`}
          >
            {added ? <CheckCircleIcon /> : <AddCircleOutlineIcon />}
          </button>
        </div>
      </div>
      <Link to="/stockid" className="no-underline">
        <div className="text-lg font-semibold">{stockName}</div>
        <div className="text-xl mt-2">{stockPrice}</div>
        <div
          className={`mt-1 ${isPositive ? "text-green-500" : "text-red-500"}`}
        >
          {changeValue}
        </div>
      </Link>
    </div>
  );
};

export default StockCard;
