function Card(props){
    return(
        <div className = "card" style={{width : props.width,height : props.height,backgroundColor : "pink"}}>
            <p>{props.bankName}</p>
            <p>{props.value} {props.inc}</p>
            
        </div>


    );

}
export default Card;