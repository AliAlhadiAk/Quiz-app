import { useState } from 'react';
import Navbar from './Componemts/Navbar';

import './App.css'
import './index.css'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
