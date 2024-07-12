import React, { useContext } from "react";
import "./Cart.css";
import { assets, food_list } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const Cart = ({ setCartCheckout }) => {
  const { addToCart, removeFromCart, cartItems,totalValue } = useContext(StoreContext);
  return (
    <div className="Cart">
      <div className="cart-items">
        <div className="top-cart">
        <h2>Your Order</h2>
        <img src='https://simpleicon.com/wp-content/uploads/cross.svg'
              onClick={()=>setCartCheckout(false)}
              />
        </div>
        
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-final">
                <p className="cart-item-name"> {item.name}</p>
                <div className="order-details">
                  <div className="order-price">
                    <p>&#x20B9; {item.price}</p>
                  </div>
                 
                  <div className="operator-cart">
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="removing"
                    >
                      <img src={assets.remove_icon_red} alt="" />
                    </p>
                    <div className="order-quantity">
                    <p>{cartItems[item._id]}</p>
                  </div>
                    <p onClick={() => addToCart(item._id)} className="adding">
                      <img src={assets.add_icon_green} alt="" />
                    </p>
                  </div>
                </div>
                <br />
                <hr />
              </div>
            );
          }
        })}
        <div className="checkout">
        <div className="total">
            <h2>Cart Total</h2>
            <p >&#x20B9; {totalValue()}</p>
        </div>
        <div className="order-button">
          <button type="submit" className="order-button">Order</button>
         
        </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
