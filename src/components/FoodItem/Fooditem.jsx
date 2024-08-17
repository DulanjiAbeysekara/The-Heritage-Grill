import React, { useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';

const Fooditem = ({ id, name, description, price, image }) => { 
  
  const [itemCount,setItemCount]=useState(0);
  
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image" /> 

          {!itemCount}

      </div>
      <div className="food-item-info"> 
        <div className="food-item-rating">
          <p className='name'>{name}</p>
          <img className='ratingStarts'  src={assets.ratingStarts} alt="Rating stars" />  
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="x">{price}/=</p>
      </div>
    </div>
  );
};

export default Fooditem;
