import { green } from "@mui/material/colors";
import React from "react";

function Button(props) {
  function handleClick() {
    props.onClick(props.buttonId);
  }

  return (
    <button
      onClick={handleClick}
      className="py-2 px-4 rounded-full text-sm text-white  hover-zoom"
      style={{
        fontSize : "13px",
        textAlign : "center",
        backgroundColor : props.isActive?  "#10362Dff" :"rgb(20, 19, 19)",
        borderRadius : "30px",
        height : "40px",
      
        width : "80px",
        color : props.isActive ? "#45F6CCff" : "white",
        border: "2px grey solid",
        marginRight: "10px" // Adjust styling as per your design
      }}
    >
      {props.text}
    </button>
  );
}

export default Button;
