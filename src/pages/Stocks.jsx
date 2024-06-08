/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import IndexCard from "../components/IndexCard";
import StockCard from "../components/StockCard";
import ProductToolCard from "../components/ProductToolCard";
import Buttons from "@/components/Buttons";
import { Link } from "react-router-dom";

const Stocks = () => {
  return (
    <div>
      {/* <div>
        <h2 className="font-semibold text-2xl text-white mb-2">Stocks</h2>
        <h2 className="font-semibold text-2xl text-white mb-2">Quant</h2>
      </div> */}
      {/* <hr className="border-gray-500" /> */}
      <div className="text-white flex justify-between items-center">
        <h1 className="font-semibold text-xl text-white mb-5 mt-1">Index</h1>
        <Link to="/viewall">
          <h3 className="text-green-500">View all</h3>
        </Link>
      </div>
      <div className="flex justify-between items-center ">
        <Link to="/indexid">
          <IndexCard />
        </Link>
        <Link to="/indexid">
          <IndexCard />
        </Link>
        <Link to="/indexid">
          <IndexCard />
        </Link>
      </div>
      <h1 className="font-semibold text-xl text-white mb-5 mt-3">
        Most famous Stocks
      </h1>
      <div className="flex justify-between items-center ">
        {/* <Link to="/stockid"> */}
          <StockCard />
        {/* </Link> */}
        {/* <Link to="/stockid"> */}
          <StockCard />
        {/* </Link> */}
        {/* <Link to="/stockid"> */}
          <StockCard />
        {/* </Link> */}
        {/* <Link to="/stockid"> */}
          <StockCard />
        {/* </Link> */}
      </div>
      <h1 className="font-semibold text-xl text-white mb-5 mt-3">
        Products & tools
      </h1>
      <div className="flex justify-between items-center ">
        <Link to="/tools">
          <ProductToolCard />
        </Link>
        <Link to="/tools">
          <ProductToolCard />
        </Link>
        <Link to="/tools">
          <ProductToolCard />
        </Link>
        <Link to="/tools">
          <ProductToolCard />
        </Link>
        <Link to="/tools">
          <ProductToolCard />
        </Link>
      </div>
      <h1 className="font-semibold text-xl text-white mb-5 mt-3">
        Top Gainers
      </h1>
      <div className="text-white flex justify-between items-center">
        <div className="flex justify-between items-center w-[30%]">
        <Buttons text="Large" />
          <Buttons text="Mid" />
          <Buttons text="Small" />
        </div>
        <Link to="/viewall">
          <h3 className="text-green-500">View all</h3>
        </Link>
      </div>
      <div className="flex justify-between items-center mt-5">
        {/* <Link to="/stockid"> */}
          <StockCard />
        {/* </Link> */}
        {/* <Link to="/stockid"> */}
          <StockCard />
        {/* </Link> */}
        {/* <Link to="/stockid"> */}
          <StockCard />
        {/* </Link> */}
        {/* <Link to="/stockid"> */}
          <StockCard />
        {/* </Link> */}
      </div>
      <h1 className="font-semibold text-xl text-white mb-5 mt-3">Top Losers</h1>
      <div className="text-white flex justify-between items-center">
        <div className="flex justify-between items-center w-[30%]">
          <Buttons text="Large" />
          <Buttons text="Mid" />
          <Buttons text="Small" />
        </div>
        <Link to="/viewall">
          <h3 className="text-green-500">View all</h3>
        </Link>
      </div>
      <div className="flex justify-between items-center mt-5">
        {/* <Link to="/stockid"> */}
          <StockCard />
        {/* </Link> */}
        {/* <Link to="/stockid"> */}
          <StockCard />
        {/* </Link> */}
        {/* <Link to="/stockid"> */}
          <StockCard />
        {/* </Link> */}
        {/* <Link to="/stockid"> */}
          <StockCard />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Stocks;
