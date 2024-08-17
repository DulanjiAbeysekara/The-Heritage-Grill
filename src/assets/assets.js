import logo from './logo.png';
import cart from './shopping-cart.png';
import search from './search (4).png';
import homepage from './home2.png';
import spoon from './spoon3.png'

import menu1 from './menu_1.jpeg';
import menu2 from './menu_2.jpeg';
import menu3 from './menu_3.jpeg';
import menu4 from './menu_4.jpeg';
import menu5 from './menu_5.jpeg';
import menu6 from './menu_6.jpeg';
// import menu7 from './menu_7.jpeg';

import food1 from './veggieburger.jpeg';
import food2 from './hamburger.jpeg'
import food3 from './beefburger.jpeg'
import food4 from './bbq burger.jpeg'
import food5 from './cheeseburger.jpeg'

export const assets = {
    logo,
    cart,
    search,
    homepage,
    spoon
};

export const menu_list = [
    {
        menu_name: "Burger",
        menu_image: menu1
    },
    {
        menu_name: "Pizza",
        menu_image: menu2
    },
    {
        menu_name: "Sandwich",
        menu_image: menu6
    },
    {
        menu_name: "Noddle",
        menu_image: menu3
    },
    {
        menu_name: "Deserts",
        menu_image: menu4
    },
    {
        menu_name: "Drinks",
        menu_image: menu5
    }
  
    // {
    //     menu_name: "Salad",
    //     menu_image: menu7
    // }
];


export const food_list=[
    {
    id: "1",
    name:" Veggie burger",
    image:food1,
    price:700,
    description:"Food provides essential nutrients for overall health and well-being",
    category:"Burger"
    },
    {
        id: "2",
        name:" Cheese Burger",
        image:food5,
        price:650,
        description:"Food provides essential nutrients for overall health and well-being",
        category:"Burger"
     },
     {
        id: "3",
        name:" BBQ Burger",
        image:food4,
        price:900,
        description:"Food provides essential nutrients for overall health and well-being",
        category:"Burger"
     },
     {
        id: "4",
        name:"Beef patty",
        image:food3,
        price:1000,
        description:"Food provides essential nutrients for overall health and well-being",
        category:"Burger"
     },
     {
        id: "5",
        name:"Hamburger",
        image:food2,
        price:950,
        description:"Food provides essential nutrients for overall health and well-being",
        category:"Burger"
     },
     
]; 