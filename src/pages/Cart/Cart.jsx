import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  const calculateSubTotal = () => {
    return Object.keys(cartItems).reduce((acc, itemId) => {
      const item = food_list.find(item => item.id === itemId);
      return acc + item.price * cartItems[itemId];
    }, 0);
  };

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-item-title">
      
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/> 
        
        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={index}>
                <div className='cart-items-item'>
                  <img src={item.image} alt={item.name}/>
                  <p>{item.name}</p>
                  <p>{item.price}/=</p>
                  <p>{cartItems[item.id]}</p>
                  <p>{item.price * cartItems[item.id]}/=</p>
                  <p onClick={() => removeFromCart(item.id)} className='cross'>X</p>
                </div>
                <hr/>
              </div>
            );
          }
          return null;
        })}

      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>

          <div className="cart-total-details">
            <p>SubTotal</p>
            <p>{calculateSubTotal()}/=</p>
            <hr/>
          </div>

          <div className="cart-total-details">
            <b>Total</b>
            <b>{calculateSubTotal()}/=</b>
            <hr/>
          </div>

          <div className="cart-total-details">
            <button>PROCEED TO CHECKOUT</button>
          </div>

          <div className="cart-promcode">
            <div>
              <p>If you have a promo code,Enter it here</p>
              <div className="cart-promocode-input">
                <input type='text' placeholder='promo-code'/>
                <button>submit</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cart;
