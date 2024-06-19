import React, { useState } from "react";
import Button from "./Button";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardsList from "./CardsList";
function TopGainers() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  return (
    <div className="eerie-black rounded-lg p-6 text-white shadow-lg flex flex-col hover-zoom  black-border"  >
      <div className="flex justify-between items-center mb-4">
        <a className="no-underline" href="stockinfo">
          <img
            src="https://assets-netstorage.groww.in/stock-assets/logos/GSTK533122.png"
            alt="logo"
            className="w-12 h-10 bg-white rounded-sm mr-[65px]"
          />
        </a>
       

        <div>
        <button
            onClick={handleClick}
            className={`p-[1px] rounded-full 
              ${clicked ? "text-green-500" : "hover:bg-gray-500"}`}
          >
            {clicked ? <CheckCircleIcon /> : <AddCircleOutlineIcon />}
          </button>
        </div>
      </div>
      <a className="no-underline" href="/stockinfo">
        <div className="text-lg font-semibold">RattanIndia Power</div>
        <div className="text-xl mt-2" style={{color :"#45F6CCff"}}>₹18.79</div>
        <div className="mt-1 text-green-500" style={{ fontSize: "15px",color :"#45F6CCff" }}>
          0.89(4.97%)
        </div>
      </a>
    </div>
  );
}

function TopGainersList() {
    const [activeButton, setActiveButton] = useState(null);

    
    function handleButtonClick(id){
        setActiveButton(id);
    }
  return (
    <div>
      <h2 style={{fontWeight : "bold"}}>TOP GAINERS</h2>
      <div className="buttons-list">
      <Button
          text="Large"
          isActive={activeButton === "1"}
          onClick={handleButtonClick}
          buttonId="1"
        />
        <Button
          text="Medium"
          isActive={activeButton === "2"}
          onClick={handleButtonClick}
          buttonId="2"
        />
        <Button
          text="Small"
          isActive={activeButton === "3"}
          onClick={handleButtonClick}
          buttonId="3"
        />
      </div>
      <div className="most-brought-container">
        <CardsList />
        
     
    </div>
    </div>
  );
}

export default TopGainersList;
