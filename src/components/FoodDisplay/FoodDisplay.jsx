import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../FoodItem/Fooditem'

const FoodDisplay = ({category}) => {

  const {food_list}=useContext(StoreContext)

  return (
    <div className='food_display' id='food_display'>
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
          return <Fooditem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
