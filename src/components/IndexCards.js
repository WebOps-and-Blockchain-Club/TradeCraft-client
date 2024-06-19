

function IndexCard(props){
    return(
        <div className="index-card">
            <p style={{padding:'5px' }} >{props.text}</p>
            <p style={{padding:'5px' }}>{props.price} <span style={{color : "green"}}>{props.inc}({props.incper})</span></p>
        </div>
    );
}
export default IndexCard;