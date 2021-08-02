import '../style.css'
import FoodCard from './FoodCard';


function Card(){
    return(
        <div className="main">
        <div className="cardContainer">
           <FoodCard food="Burger" cal="200"/>
            <FoodCard food="pizza" cal="400"/>
            <FoodCard food="noodles" cal="400"/>
            <FoodCard food="ice cream" cal="400"/>
            <FoodCard food="shake" cal="400"/>
  
            
        </div>
           

    
        </div>)
}
export default Card;