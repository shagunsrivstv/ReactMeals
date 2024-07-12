import React, { useState } from 'react'
import './ExploreMenu.css'
import { assets, menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
   
  return (

    <div className='ExploreMenu'>
      <h2>Explore Our Menu</h2>
      <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and satisfy your cravings<br/> and elevate your dining experience, one delicious meal at a time.</p>
      <div className="menu-list">
        {menu_list.map((items,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===items.menu_name?'All':items.menu_name)}
                 key={index} className="list-item">
                    <img className={category===items.menu_name ?'active':''} src={items.menu_image} alt=''/>
                    <p className={category===items.menu_name ?'active-text':''}>{items.menu_name}</p>
                </div>
                
            )
        }

        )}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
