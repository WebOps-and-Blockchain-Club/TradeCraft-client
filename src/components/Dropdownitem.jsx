import React from "react";
function dropDownItem(props){
    return(
        <a href="/user" className="block px-4 py-2 text-sm text-gray-700 hover-eerie-black" style={{ color: "white",borderRadius : "10px",width:"98%",marginLeft : "3px" }}>{props.text}</a>
    );

}
export default dropDownItem;