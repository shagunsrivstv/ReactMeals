import React, { useContext } from "react";
import "./FoodDisplay.css";
import { food_list } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const {food_list} = useContext(StoreContext);
  return (
    <div className="FoodDisplay">
      <h2>Top Dishes Near You</h2>
      <div className="display-list">
        {food_list.map((item, index) => {
          if(category==='All' || category===item.category){
            return  <FoodItem
              key={index}
              image={item.image}
              description={item.description}
              price={item.price}
              id={item._id}
              name={item.name}
            />
          

          }
          
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
