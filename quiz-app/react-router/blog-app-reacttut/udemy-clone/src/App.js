import React from 'react';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SingleCoursePAge from './Pages/SingleCoursePAge';
import CartPage from './Pages/CartPage';
import Courses from './Components/Courses';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';


const App = () => {
  return (
    <BrowserRouter>
     <Navbar/>
     
    </BrowserRouter>
  )
}

export default App