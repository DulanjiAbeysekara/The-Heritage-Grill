import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'; 

const Header = () => {
  return (
    <div className='header'>
        <div className='header-content'>
          <h2>EVERYDAY FRESH FOOD</h2>
          <p>Your restaurant's unique qualities are what will attract customers. Whether it's your commitment to local ingredients, a distinctive dining experience, or special cuisine, make sure to showcase what makes you stand out.</p>
          <button>View Menu</button>
        </div>
        <img className='homePic' src={assets.homepage}/>

    </div>
  )
}

export default Header
