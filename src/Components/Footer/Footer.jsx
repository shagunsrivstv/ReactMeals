import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <>
    <div className='Footer'>
        <div className="left">
        <h1>React Meals</h1>
        <br/>
        <p>Whether you're craving a quick snack or a gourmet dinner, we've got you covered.<br/> Join us in exploring a world of flavors without leaving the comfort of your home.<br/>with React Meals</p>
        <div className="logoImg">
        <img src='https://i.pinimg.com/564x/57/78/28/5778284ca04ad3ff19b6f1087b5b5d9f.jpg'/>
        <img src='https://i.pinimg.com/564x/04/a1/0c/04a10c978da58703fb47c3d4f81fa334.jpg'/>
        <img src='https://i.pinimg.com/564x/85/dd/57/85dd5799c2a4dc0251ce220c28c94e77.jpg' />
        </div>
        </div>
        <div className="centre">
           
            <ul>
                <li> <h2>COMPANY</h2></li>
                <br/>
                <li>Home</li>
                <li>About Us</li>
                <li>Career</li>
                <li>Delivery</li>
            </ul>

        </div>
        <div className="right">
          
            <ul>
            <li><h2>GET IN TOUCH</h2></li>
            <br/>
                <li>+91 84769XXXXX</li>
                <li>shagunsrivstv@gmail.com</li>
            </ul>

        </div>
      
    </div>
    <div className="copyright">
    <hr/>
     <p> &copy; React Meals- All Rights Reserved </p>
     
      
    </div>
    </>
  )
}

export default Footer
