import "../style.css";
function FoodCard(props) {
    return(
    
        <div className="foodcard">
            <div className="CardTitle">
                 {props.food}
             </div>
            <div className="FoodInfo">
                {props.cal}
            </div>
        </div>
    
    )
}
export default FoodCard;