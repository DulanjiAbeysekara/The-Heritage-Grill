import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='footerlogo' src={assets.logo} alt="Logo" />
          <p>
            At The Heritage Grill, we are dedicated to delivering an unforgettable dining experience with every visit. Located in the heart of [City/Area], our restaurant is a place where friends and family gather to enjoy delicious food in a warm, inviting atmosphere. Whether you're joining us for a special occasion or a casual meal, our team is committed to providing exceptional service and the finest culinary delights. Thank you for choosing The Heritage Grill, where every meal is crafted with love and passion. We look forward to welcoming you back soon!
          </p>
          <div className='footer-social-icon'>
            <img src={assets.facebook} alt="Facebook" />
            <img src={assets.twitter} alt="Twitter" />
            <img src={assets.linkdine} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>0412234567</li>
            <li>theheritagegrill@.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ HeritageGrill.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
