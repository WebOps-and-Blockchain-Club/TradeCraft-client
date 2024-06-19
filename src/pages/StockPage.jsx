import React from "react";

import "../App.css"
import IndexCard from "../components/IndexCards.jsx";
import MyInvestments from "../components/YourInvestments.js";
import CardsList from "../components/CardsList.jsx"
import WatchList from "../components/WatchList.jsx";
import ProductCard from "../components/ProductandTools.jsx";
import TopGainersList from "../components/Gainers.jsx";
import TopLosersList from "../components/Loosers.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import DashboardTabs from "../components/Dashboard.jsx";
import StockCard from "../components/StockCrad.jsx";
import ProductCardList from "../components/ProductandTools.jsx";


function StockPage() {
  return (
    <div>
      <div >
      <Navbar />
     
      </div>
      <div style={{paddingLeft : "50px"}}>
      <DashboardTabs />
      </div>
      
    <div className="App-header">
      

      <div className="Container">
        <div className="left-container">
          <div className="index-container">
            <h2 style={{ fontWeight : "bold" ,fontSize : "20px",color : "white"}}>Index</h2>
            <div className="index-card-container">
              <IndexCard
                indexName="NIFTY 50"
                indexValue="23398.90"
                changeValue="+75.96(0.33%)"
                isPositive="true"
              />
              <IndexCard
                indexName="BANKNIFTY"
                indexValue="23398.90"
                changeValue="+75.96(0.33%)"
                isPositive="true"
              />
              <IndexCard
                indexName="SENSEX"
                indexValue="23398.90"
                changeValue="+75.96(0.33%)"
                isPositive="true"
              />
            </div>
          </div>

          <div className="most-bought">
          <h2 style={{ fontWeight: "bold" }}>MOST BOUGHT</h2>
            <CardsList />
          </div>

          <div className="products">
            <h2 style={{fontWeight : "bold"}}>Products & Tools</h2>
            <div className="product-card-container">
             <ProductCardList />
            </div>
          </div>

          <div className="top-gainers">
         <TopGainersList />
          </div>

          <div className="top-losers">
          <TopLosersList />
          </div>
        </div>

        <div className="right-container">
          <div className="card">
            <MyInvestments />
          </div>
          <div className="card">
            <WatchList />
          </div>
        </div>
      
      </div>
      
   
    </div>
    <Footer />
    </div>
  );
}

export default StockPage;
