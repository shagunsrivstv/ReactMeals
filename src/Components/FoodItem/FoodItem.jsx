import React, { useContext} from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, image, price, description }) => {

  const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);
  return (
    <div className="food-items">
      <div className="img-container">
        <img className="image-img" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            onClick={() => addToCart(id)}
            className="add"
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="counter">
            <img
              src={assets.remove_icon_red}
              className="operator"
              onClick={() => removeFromCart(id)}
              alt=""
            />
            {cartItems[id]}
            <img
              src={assets.add_icon_green}
              className="operator"
              onClick={() => addToCart(id)}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="about">
        <p className="item-name-list">{name}</p>
        <hr />
        <p className="description">{description}</p>
        <p className="price">&#x20B9;{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
