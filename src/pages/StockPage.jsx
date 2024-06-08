/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Stocks from "./Stocks";
import MyInvestments from "@/components/MyInvestments";
import Accordion from "@/components/AccordWatchList";
import "./greenline.css";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";

const StockPage = () => {
  const path = useLocation().pathname;
  return (
    <div>
      <Navbar />
      <div className="">
        {/* <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <IndexCard />
        </div>
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <StockCard />
        </div>
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <ProductToolCard />
        </div>
        <div>
        <Buttons />
      </div> */}
        {/* <AccordWatchList /> */}
        {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <StockInfo />
    </div> */}

        <div className="flex justify-start items-center mt-4 ">
          <Link to="/">
            <h2
              className={`text-xl mb-1 pr-4 pt-2 ${
                path === "/user" ? "text-green-400" : "text-white"
              }`}
            >
              Stocks
            </h2>
          </Link>
          <Link to="/quant">
            <h2
              className={`text-xl mb-1 pr-4 pt-2 ${
                path === "/quant" ? "text-green-500" : "text-white"
              }`}
            >
              Quant
            </h2>
          </Link>
        </div>
        <div className="underline-green w-14"></div>
        <hr className="border-gray-500 mt-[2px]" />
        <div className="flex mt-3">
          <div className="w-[65%]">
            <Stocks />
          </div>
          <div className="ml-10 w-[31%] border-white ">
            <div className="flex text-white justify-between items-center mt-6">
              <div className="text-xl font-bold">Your Investments</div>
              <Link to="/dashboard">
                <div className="text-green-500">Dashboard</div>
              </Link>
            </div>
            <div className="mt-2 mb-10">
              <MyInvestments />
            </div>
            <div className="flex text-white justify-between items-center mt-6">
              <div className="text-xl font-bold">All Watchlists</div>
              <Link to="/watchlist">
                <div className="text-green-500">View all</div>
              </Link>
            </div>
            <div className="mt-2 mb-10">
              <Accordion />
            </div>
          </div>
        </div>
        {/* <LoginPage /> */}
        {/* <InfoChart /> */}
        {/* <ButSell /> */}
      </div>
    </div>
  );
};

export default StockPage;
