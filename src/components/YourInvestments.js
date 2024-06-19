import React from "react";

const MyInvestments = (props) => {
  return (
    <div style={{width : "400px",marginLeft : "20px",}} >
      <div class="flex text-white justify-between items-center mt-6" >
        <div class="text-xl font-bold"  >Your Investments</div>
        <a href="/dashboard">
        <div class="text-green-500" style={{fontSize : "20px"}}>Dashboard</div>
        </a>
        </div>
    <div class=" flex justify-between items-center text-white rounded-md p-4 border-white font-semibold black-border" style={{backgroundColor : "rgb(20, 19, 19)",borderRadius : "10px"}}>
      <div class="text-center">
        <div style={{fontSize : "25px"}}>₹0</div>
        <div style={{fontSize : "14px"}}>Total returns

        </div>
        </div>
        <div class="text-center">
          <div style={{fontSize : "25px"}}>₹0</div>
          <div style={{fontSize : "14px"}}>Current value</div>
          </div>
          </div>
          </div>
  );
};

export default MyInvestments;