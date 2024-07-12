import React from 'react'
import './Signin.css'

const Signin = ({setShowLogin}) => {
  
    return (
        <div className="LoginPopup">
          <form className="login-pop">
            <div className="popup-title">
              <h2>SIGNUP</h2>
              <img src='https://simpleicon.com/wp-content/uploads/cross.svg'
              onClick={()=>setShowLogin(false)}
              />
            </div>
            <div className="login-input">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your email" required />
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="createAcc">
              Create account
            </button>
            <div className="login-cond">
              <input type="checkbox" required />
              <p>By continuing, i agree to all the terms and conditions </p>
            </div>
          </form>
        </div>
      );
  
}

export default Signin
