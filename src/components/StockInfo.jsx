/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import ButSell from "./BuySell";
import Buttons from "./Buttons";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import PerformanceCard from "./PerformanceCard";

const StockInfo = () => {
  const path = useLocation().pathname;
  const [addedBookmark, setAddedBookmark] = useState(false);
  const [addedNotificatoin, setAddedNotificatoin] = useState(false);

  const toggleAddedNotification = (e) => {
    e.stopPropagation(); // Prevent card's click event
    setAddedNotificatoin(!addedNotificatoin);
  };
  const toggleAddedBookmark = (e) => {
    e.stopPropagation(); // Prevent card's click event
    setAddedBookmark(!addedBookmark);
  };
  return (
    <div className="ml-[150px] mr-[150px]">
      <Navbar />
      <hr className="border-gray-500 mt-3 mb-3" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="text-white hover:text-green-500"
              href="/user"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              className="text-white hover:text-green-500"
              href="/viewall"
            >
              Stocks
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-white hover:text-green-500">
              Nifty
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex justify-between mt-5 ">
        <div className="bg-gray-900 text-white  rounded-lg w-[65%]">
          <div className="flex justify-between items-center">
            <div className="flex items-center mb-4">
              <img
                src="https://assets-netstorage.groww.in/stock-assets/logos/GSTK543257.png"
                alt="Indian Railway Finance Corporation"
                className="w-12 h-12 mr-4 bg-white"
              />
              <div>
                <h2 className="text-xl font-bold">
                  Indian Railway Finance Corp
                </h2>
              </div>
            </div>
            <div className="flex justify-center items-center mt-4">
              <button
                onClick={toggleAddedNotification}
                className="text-sm bg-gray-800 hover:bg-gray-700 text-white py-2 px-3 rounded mr-2"
              >
                {/* <NotificationAddIcon className="p-[3px] mr-[1px]" /> */}
                {addedNotificatoin ? (
                  <NotificationsActiveIcon className="p-[3px] mr-[1px]" />
                ) : (
                  <NotificationAddIcon className="p-[3px] mr-[1px]" />
                )}
                Create Alert
              </button>
              <button
                onClick={toggleAddedBookmark}
                className="text-sm bg-gray-800 hover:bg-gray-700 text-white py-2 px-3 rounded"
              >
                {/* <BookmarkBorderIcon className="p-[3px] " /> */}
                {addedBookmark ? (
                  <BookmarkIcon className="p-[3px] " />
                ) : (
                  <BookmarkBorderIcon className="p-[3px] " />
                )}
                Watchlist
              </button>
            </div>
          </div>
          <div className="text-3xl font-bold mb-2">₹167.25</div>
          <span className="text-green-500 text-lg font-semibold">
            +2.30 (1.39%){"   "}
          </span>
          <span className="text-white text-lg">1D</span>
          <Link to="/oi" className="ml-[526px]">
          <button
            className="text-sm bg-gray-800 hover:bg-gray-700 text-white py-2 px-3 rounded mr-2"
          >
            <div>
              <InsertLinkIcon className="text-white" />
              <span>Option Chain</span>
            </div>
          </button></Link>
          <div>
            <img src="/lineschart.png" alt="linechart" className="mt-3" />
          </div>
          <div className="flex justify-between items-center ml-10 mr-10 mt-3">
            <Buttons text={"1D"} />
            <Buttons text={"1W"} />
            <Buttons text={"1M"} />
            <Buttons text={"1Y"} />
            <Buttons text={"3Y"} />
            <Buttons text={"5Y"} />
            <Buttons text={"All"} />
            <Buttons text={"Candle"} />
          </div>
          <div>
            <div className="flex justify-start items-center mt-4 ">
              <Link to="/indexid">
                <h2
                  className={`text-xl mb-1 pr-4 pt-2 ${
                    path === "/indexid" ? "text-green-500" : "text-white"
                  }`}
                >
                  Overview
                </h2>
              </Link>
              <Link to="/news">
                <h2
                  className={`text-xl mb-1 pr-4 pt-2 ${
                    path === "/news" ? "text-green-500" : "text-white"
                  }`}
                >
                  News
                </h2>
              </Link>
            </div>
            <div className="underline-green w-20"></div>
            <hr className="border-gray-500 mt-[2px]" />
            <PerformanceCard />
          </div>
        </div>
        <div>
          <ButSell />
        </div>
      </div>
    </div>
  );
};

export default StockInfo;
