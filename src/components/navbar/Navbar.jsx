import React, { useState } from 'react';
import './Navbar.css';  
import { assets } from '../../assets/assets'; 


const Navbar = () => {

    const [menu,setMenu]=useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className="logo" />

      <h1 className='title'>The Heritage Grill</h1>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li >About Us</li>
        <li >Contact</li>
      </ul>

      <div className="navbar-right">
        <img className='search'src={assets.search} alt="Search" />

       <div className="barket">
            <img className='cart' src={assets.cart}/>
            <div className="dot"></div>
       </div>
       <button >Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;



