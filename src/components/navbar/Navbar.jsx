import React, { useState } from 'react';
import './Navbar.css';  
import { assets } from '../../assets/assets'; 
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [menu,setMenu]=useState("menu");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className="logo" />

      <h1 className='title'>The Heritage Grill</h1>
      <ul className="navbar-menu">
        <li><Link to='/' onClick={()=>(setMenu("home"))} className={menu==='home'?'active':''}>Home</Link></li>
        <li><a href='#exploerMenu' onClick={()=>(setMenu("menu"))} className={menu==='menu'?'active':''}>Menu</a></li>
        <li><a href='#about-content' onClick={()=>(setMenu)("about us")} className={menu==='about us'?'active':''}>About Us</a></li>
        <li><a href='#footer' onClick={()=>(setMenu)('contact us')} className={menu==='contact us'?'active':''}>Contact</a></li>
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



