import React from 'react'

const Input = ({color,setColor,getColor}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <label>Type your favorite color</label>
        <input 
        required
        value={color}
        onChange={(e)=>setColor(e.target.value)}/>
    </form>
  )
}

export default Input
