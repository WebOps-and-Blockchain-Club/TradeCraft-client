import React from "react";

const IndexCard = (props) => {
  return (
    <a href="/stockinfo">
    <div
      className="eerie-black bodyBaseHeavy rounded-lg p-4 text-white shadow-lg hover-zoom black-border"

    >
      <div className=""style={{fontSize : "20px",fontWeight : "bold"}} >{props.indexName}</div>
      <div className="flex justify-between ">
        <div className=" mt-2 mr-2" style={{fontSize : "20px",}}>
          <p >{props.indexValue}</p></div>
        <div
          style={{
            paddingTop : "5px",
            fontSize: "15px",
            color: props.isPositive ? "#45F6CC" : "red",
          }}
          className="mt-2 mr-6"
        >
          {props.changeValue}
        </div>
      </div>
    </div>
    </a>
  );
};

export default IndexCard;
