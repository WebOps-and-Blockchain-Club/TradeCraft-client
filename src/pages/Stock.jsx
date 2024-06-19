import Button from "../components/Button";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PerformanceCard from "../components/Performance";
import { Link, useLocation } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import Footer from "../components/Footer";
import TradingCard from "../components/TradingCard";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

function Stock() {
  const path = useLocation().pathname;
  const [addedBookmark, setAddedBookmark] = useState(false);
  const [addedNotification, setAddedNotification] = useState(false);

  const toggleAddedNotification = (e) => {
    e.stopPropagation(); // Prevent card's click event
    setAddedNotification(!addedNotification);
  };

  const toggleAddedBookmark = (e) => {
    e.stopPropagation(); // Prevent card's click event
    setAddedBookmark(!addedBookmark);
  };

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  const [activeButton, setActiveButton] = useState(null);

  function handleButtonClick(id) {
    setActiveButton(id);
  }


  return (
    <div>
      <Navbar />
      <div style={{ marginLeft: "100px" }} className="flex justify-between mt-5">
        <div className="text-white rounded-lg w-[65%]">
          <div className="flex justify-between items-center">
            <div className="flex items-center mb-4">
              <img
                src="https://assets-netstorage.groww.in/stock-assets/logos/GSTK533122.png"
                alt="Indian Railway Finance Corporation"
                className="w-12 h-12 mr-4 bg-white"
              />
              <div>
                <h2 className="text-xl font-bold">RattanIndia Power</h2>
              </div>
            </div>
            <div className="flex justify-center items-center mt-4">
              <button
                onClick={toggleAddedNotification}
                style={{borderRadius : "10px"}}
              
                className="text-sm hover-eerie-black grey-border text-white py-2 px-3 rounded mr-2"
              >
                <AccessAlarmIcon
                  className={`p-[3px] mr-[1px] ${addedNotification ? "pulse-animation" : ""}`}
                />
                {addedNotification ? "Alert Added" : "Create Alert"}
              </button>
              <button
                onClick={toggleAddedBookmark}
                className="text-sm hover-eerie-black grey-border text-white py-2 px-3 rounded"
              >
                 {addedBookmark ? (
                  <BookmarkIcon className="p-[3px] text-green-500"  style={{borderRadius : "10px"}} />
                ) : (
                  <BookmarkBorderIcon className="p-[3px]" />
                )}
                Watchlist
              </button>
            </div>
          </div>
          <div style={{ margin: "10px" }} className="text-3xl font-bold mb-2">
            ₹18.79
          </div>
          <span className="text-green-500 text-lg font-semibold">
            +0.89 (4.97%){"   "}
          </span>
          <span className="text-white text-lg">1D</span>
          <Link to="/oi" className="ml-[526px]">
            <button
              style={{ marginLeft: "260px",borderRadius : "10px"
    
               }}
              
              className="text-sm hover-eerie-black grey-border text-white py-2 px-3 rounded mr-2"
            >
              <div>
                <InsertLinkIcon className="text-white" />
                <span>Option Chain</span>
              </div>
            </button>
          </Link>
          <div>
            <img src="\linechart.png" alt="linechart" className="mt-3" />
          </div>
          <div className="flex justify-between items-center ml-10 mr-10 mt-3">
            <Button
              text="1D"
              isActive={activeButton === "1"}
              onClick={handleButtonClick}
              buttonId="1"
            />
            <Button
              text="1W"
              isActive={activeButton === "2"}
              onClick={handleButtonClick}
              buttonId="2"
            />
            <Button
              text="1M"
              isActive={activeButton === "3"}
              onClick={handleButtonClick}
              buttonId="3"
            />
            <Button
              text="1Y"
              isActive={activeButton === "4"}
              onClick={handleButtonClick}
              buttonId="4"
            />
            <Button
              text="3Y"
              isActive={activeButton === "5"}
              onClick={handleButtonClick}
              buttonId="5"
            />
            <Button
              text="5Y"
              isActive={activeButton === "6"}
              onClick={handleButtonClick}
              buttonId="6"
            />
            <Button
              text="ALL"
              isActive={activeButton === "7"}
              onClick={handleButtonClick}
              buttonId="7"
            />
            <Button
              text="Candle"
              isActive={activeButton === "8"}
              onClick={handleButtonClick}
              buttonId="8"
            />
          </div>
          <div>
            <div className="flex justify-start items-center mt-4">
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
        <TradingCard />
     
      </div>
      <Footer />
    </div>
  );
}

export default Stock;
