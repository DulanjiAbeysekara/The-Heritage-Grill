import React from 'react'
import './components/navbar/Navbar'
import Navbar from './components/navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Homepage'
import Cart from './pages/Cart/Cart'
import PlaceOrder from  './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <>
     <div className='app'>
      <Navbar/>

        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='/order' element={<PlaceOrder/>}></Route>
        </Routes>

    </div>
    <Footer/>
    </>
   
  )
}

export default App
