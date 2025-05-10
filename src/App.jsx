import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Login from './pages/login'
import Cart from './pages/cart'
import Product from './pages/product'
import Contact from './pages/contact'
import About from './pages/about'
import Collection from './pages/collection'
import PlaceOrder from './pages/PlaceOrder'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
const App = () => {
  return (
    
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/collection' element={<Collection/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/product/:productId' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/placeorder' element={<PlaceOrder/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        
      </Routes>
      <Footer/>
    </div>

  )
}

export default App