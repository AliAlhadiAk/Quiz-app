import React, { useState } from 'react'
import TicTacToe from './TicTacToe';
import Input from './Input';
import './index.css'


const App = () => {
  const[color,setColor]=useState(null);
  const[background,setBackground]=useState(null)
  const getColor=(color)=>{
    color=background
  }
  return (
   
    <div className='App'>
      <Input
      color={color}
      setColor={setColor}
      getColor={getColor}/>
      <div style={{background:color}} className='App1'>

      </div>
      
    </div>
  )
}

export default App
