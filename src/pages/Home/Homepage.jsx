import React, { useState } from 'react'
import './Homepage.css'
import Header from '../../components/Header/Header'
import ExploerMenu from '../../components/ExploerMenu/ExploerMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AboutUs from '../../components/AboutUs/AboutUs'
const Homepage = () => {

const [category,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <div className='line'></div>
      <ExploerMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AboutUs/>
      
    </div>
    
  
  )
}

export default Homepage
