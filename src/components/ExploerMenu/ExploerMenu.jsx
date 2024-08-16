import React from 'react'
import './ExploerMenu.css'
import { menu_list } from '../../assets/assets'

const ExploerMenu = () => {
  return (
    <div className='exploerMenu' id='exploerMenu'>
        <h1>Exploer Our Menu</h1>
        <p>Discover a culinary journey with our diverse menu, crafted to satisfy every palate. From mouth-watering burgers to crispy pizzas and delectable noodles, our menu offers a variety of dishes that cater to all taste preferences. Whether you're in the mood for a classic favorite or looking to try something new, our carefully curated selection has something for everyone. Each dish is prepared with the freshest ingredients and a touch of love, ensuring that every bite is a delightful experience. Browse through our menu and indulge in flavors that will tantalize your taste buds.</p>
      <div className="exploer_menu_list">
        {menu_list.map((item,index)=>{
                return(
                    <div key={index} className='exploer_menu_list_item'>
                        <img className='imgeList' src={item.menu_image}/>
                        <p>{item.menu_name}</p>
                    </div>     
                )
        })}
      </div>

    </div>
  )
}

export default ExploerMenu
