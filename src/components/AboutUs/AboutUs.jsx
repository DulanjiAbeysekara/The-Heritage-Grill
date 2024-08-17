import React from 'react'
import './AboutUs.css'
import { assets } from '../../assets/assets'

const AboutUs = () => {
  return (
    <div className='about-content'>
      <h1>About Us</h1>
      <p className='about-details'>The Heritage Grill is more than just a place to eat—it's a community hub where friends and neighbors gather to enjoy great food and good company. Located in the heart of [City/Neighborhood], we pride ourselves on being a welcoming and inclusive space where everyone feels at home.
      Our menu is inspired by the diverse flavors of our community, featuring dishes that celebrate the rich culinary traditions of Matara. Whether you're here for a hearty breakfast, a leisurely lunch, or a cozy dinner, you'll find something to love at The Heritage Grill
      We are committed to providing exceptional service, delicious food, and a warm, inviting atmosphere. Come in, relax, and make yourself at home at The Heritage Grill.</p>
      <img src={assets.chef} alt="" />
    </div>
  )
}

export default AboutUs
