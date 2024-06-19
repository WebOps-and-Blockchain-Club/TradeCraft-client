import React, { useState } from "react";
import Button from "./Button";
import "./TradingCard.css";

function TradingCard() {
  const [activeBuySellButton, setActiveBuySellButton] = useState(null);
  const [activeTypeButton, setActiveTypeButton] = useState(null);

  function handleBuySellButtonClick(id) {
    setActiveBuySellButton(id);
  }

  function handleTypeButtonClick(id) {
    setActiveTypeButton(id);
  }

  const isSellActive = activeBuySellButton === "SELL";

  return (
    <div style={{ paddingTop: "200px", paddingRight: "30px" }}>
      <div className="trading-card">
        <div style={{ padding: "10px" }}>
          <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>
            RattanIndia Power
          </h1>
          <p style={{ color: "grey" }}>₹18.79(+2.71%)</p>
        </div>
        <hr style={{ opacity: "0.3" }} />
        <div className="buy-sell">
          <Button
            className="buy-sell-button"
            text="BUY"
            isActive={activeBuySellButton === "BUY"}
            onClick={() => handleBuySellButtonClick("BUY")}
          />
          <Button
            text="SELL"
            isActive={isSellActive}
            onClick={() => handleBuySellButtonClick("SELL")}
          />
        </div>
        <hr style={{ opacity: "0.3" }} />
        <div className="lower-container">
          <div className="buttons-container ">
            <Button
              text="Delivery"
              isActive={activeTypeButton === "Delivery"}
              onClick={() => handleTypeButtonClick("Delivery")}
            />
            <Button
              text="IntraDay"
              isActive={activeTypeButton === "IntraDay"}
              onClick={() => handleTypeButtonClick("IntraDay")}
            />
            <Button
              text="MTF"
              isActive={activeTypeButton === "MTF"}
              onClick={() => handleTypeButtonClick("MTF")}
            />
          </div>
          <div className="input-fields-container">
            <div className="quantity">
              <label
                style={{ fontSize: "20px", margin: "20px", color: "white" }}
                htmlFor="quantity"
              >
                Quantity:
              </label>
              <input
                style={{
                  paddingLeft: "10px",
                  color: "#45F6CCff",
                  fontSize: "25px",
                  height: "40px",
                  width: "100px",
                  margin: "20px",
                  borderRadius: "5px",
                  backgroundColor: "#10362Dff",
                }}
                className="input-box"
                id="quantity"
              />
            </div>
            <div className="priceLimit">
              <label
                style={{ fontSize: "20px", margin: "20px", color: "white" }}
                htmlFor="price-limit"
              >
                Price Limit:
              </label>
              <input
                style={{
                  paddingLeft: "10px",
                  color: "#45F6CCff",
                  fontSize: "25px",
                  height: "40px",
                  width: "100px",
                  margin: "20px",
                  borderRadius: "5px",
                  backgroundColor: "#10362Dff",
                }}
                className="input-box"
                id="price-limit"
              />
            </div>
          </div>
          <div style={{ width: "90%", paddingLeft: "40px" }}>
            <hr style={{ opacity: "0.3" }} />
            <div
              className="balance"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p
                style={{ color: "grey", fontSize: "13px", marginRight: "auto" }}
              >
                Balance ₹0.00
              </p>
              <p
                style={{ color: "grey", fontSize: "13px", marginLeft: "auto" }}
              >
                Required ₹0.00
              </p>
            </div>
          </div>

          <div className="button-container" style={{ marginTop: "20px" }}>
            <button className="purchase-button hover-zoom">
              {isSellActive ? "SELL" : "BUY"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradingCard;
