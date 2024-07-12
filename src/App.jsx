import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import AppDownload from "./Components/AppDownload/AppDownload";
import Footer from "./Components/Footer/Footer";
import Signin from "./Components/Signin/Signin";
import ExploreMenu from "./Components/ExploreMenu/ExploreMenu";
import FoodDisplay from "./Components/FoodDisplay/FoodDisplay";
import Cart from "./Components/Cart/Cart";
import './App.css'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [cartCheckout,setCartCheckout]=useState(false);
  const [category,setCategory]=useState('All')
  return (
    <>
      {cartCheckout ? <Cart setCartCheckout={setCartCheckout} /> : <></>}
      {showLogin ? <Signin setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} setCartCheckout={setCartCheckout} />
        <Header />
        <ExploreMenu setCategory={setCategory} category={category}/>
        <FoodDisplay setCategory={setCategory} category={category}/>
        <AppDownload/>
        <Footer/>
      </div>
    </>
  );
};

export default App;
