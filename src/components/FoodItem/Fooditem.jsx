import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, description, price, image }) => { 
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image" /> 

        {/* Conditional rendering based on whether the item is in the cart */}
        {!cartItems[id] ? (
          <img src={assets.plus} onClick={() => addToCart(id)} className="add" alt="Add to cart" />
        ) : (
          <div className='food-item-counter'>
            <img onClick={() => removeFromCart(id)} src={assets.minus} alt="Remove from cart" />
            <p className='count'>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.plus2} alt="Increase quantity" />
          </div>
        )}
      </div>
      <div className="food-item-info"> 
        <div className="food-item-rating">
          <p className='name'>{name}</p>
          <img className='ratingStars' src={assets.ratingStarts} alt="Rating stars" />  
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="price">{price}/=</p>
      </div>
      
    </div>
  );
};

export default FoodItem;
