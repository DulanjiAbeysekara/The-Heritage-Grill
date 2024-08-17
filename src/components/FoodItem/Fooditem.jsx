import React from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'

const Fooditem = (id,name,description,price,image) => {
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} alt="" className="food-item-image" />
        </div>
      <div className="food-item info">
        <div className="food-item-rating">
            <p>{name}</p>
            <img src={assets.rati}/>
        </div>
      </div>
    </div>
  )
}

export default Fooditem
