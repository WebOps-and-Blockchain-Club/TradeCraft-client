import { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function MostBrought() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  return (
    <a href="/stockinfo">
    <div className="stock-card eerie-black rounded-lg p-6 text-white shadow-lg flex flex-col hover-zoom" style={{ border: "1px solid rgb(57, 57, 57)", width: "200px", margin: "10px" }}>
      <div className="flex justify-between items-center mb-4">
        <a className="no-underline" href="/stockinfo">
          <img
            style={{ height: "50px" }}
            src="https://assets-netstorage.groww.in/stock-assets/logos/GSTK533122.png"
            alt="logo"
            className="w-12 h-10 bg-white rounded-sm mr-4"
          />
        </a>
        <div>
          <button
            onClick={handleClick}
            className={`p-[1px] rounded-full ${clicked ? "text-green-500" : "hover:bg-gray-500"}`}
          >
            {clicked ? <CheckCircleIcon /> : <AddCircleOutlineIcon />}
          </button>
        </div>
      </div>
      <a className="no-underline" href="/stockinfo">
        <div className="text-lg font-semibold">RattanIndia Power</div>
        <div className="text-xl mt-2" style={{ color: "#45F6CC" }}>₹18.79</div>
        <div className="mt-1 text-green-500" style={{ fontSize: "15px", color: "#45F6CC" }}>+0.89 (4.97%)</div>
      </a>
    </div>
    </a>
  );
}

function CardsList() {
  return (
    <div>
     
      <div className="flex flex-wrap">
        <MostBrought />
        <MostBrought />
        <MostBrought />
        <MostBrought />
      </div>
    </div>
  );
}

export default CardsList;
