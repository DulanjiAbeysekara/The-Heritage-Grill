import React, { useState } from 'react'
import './Homepage.css'
import Header from '../../components/Header/Header'
import ExploerMenu from '../../components/ExploerMenu/ExploerMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Homepage = () => {

const [category,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <div className='line'></div>
      <ExploerMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      
    </div>
    
  
  )
}

export default Homepage
