import React, { useState } from 'react'
import './Homepage.css'
import Header from '../../components/Header/Header'
import ExploerMenu from '../../components/ExploerMenu/ExploerMenu'

const Homepage = () => {

const [category,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <div className='line'></div>
      <ExploerMenu category={category} setCategory={setCategory}/>

      
    </div>
    
  
  )
}

export default Homepage
