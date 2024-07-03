import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';
import SearchItem from './Components/SearchITem';
import Register from './Components/Register';

import Cart from './Components/Cart';
import { useEffect, useState } from 'react';
import { items } from './data';
import Requireauth from './Requireauth';
import Layout from 'react-dom'

function App() {
  const [data,setData] = useState([...items])
  const [cart,setCart] = useState([])
  const[search,setSearch] = useState('')

 
  return (
    <>
    <Router>
  
    <Navbar cart={cart} setCart={setCart} setData={setData}/>
    <Routes>
      
      
      <Route exact path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      
      <Route element={<Requireauth/>}>
    
    <Route path='/product' element={<Product cart={cart} setCart={setCart} items={data}/>}/>
   <Route path='/product/:id' element={<ProductDetail cart={cart} setCart={setCart}/>}/>
   <Route path='/search/:id' element={<SearchItem/>}/>
   <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
   </Route>
    </Routes>

    </Router>
    </>
  );
}

export default App;
