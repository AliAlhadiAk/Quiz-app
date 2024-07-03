import React, { useRef, useState } from 'react';
import'./circle.png'
import './cross.png' 
import './TIcTac.css'
let data=["","","","","","","","",""]

const TicTacToe = () => {
    let[count,setCount]=useState(0)
    let[lock,setLock]=useState(false);
    let title=useRef(null)
    const toggle=(e,num)=>{
    if(lock){
        return 0;
    }
    if(count%2===0){
        e.target.innerHtml='X'
        data[num]="x";
        setCount(++count)
    }
    else{
      e.target.innerHtml=`O`
      data[num]="o"
      setCount(++count);
      checkWIn()
 
    }
   
    }
    const checkWIn=()=>{
      if(data[0]===data[1] && data[1] === data[2] && data[2] !== ''){
        Win(data)
      }
      else if(data[3]===data[4] && data[4] === data[5] && data[5] !== ''){
        Win(data)
      }
      else if(data[3]===data[4] && data[4] === data[5] && data[5] !== ''){
        Win(data)
      }
      else if(data[6]===data[7] && data[7] === data[8] && data[8] !== ''){
        Win(data)
      }
      else if(data[0]===data[3] && data[3] === data[6] && data[6] !== ''){
        Win(data)
      }
      else if(data[1]===data[4] && data[4] === data[7] && data[7] !== ''){
        Win(data)
      }
      else if(data[2]===data[5] && data[5] === data[8] && data[8] !== ''){
        Win(data)
      }
      else if(data[0]===data[4] && data[4] === data[8] && data[8] !== ''){
        Win(data)
      }
      else if(data[0]===data[1] && data[1] === data[2] && data[2] !== ''){
        Win(data)
      }
      else if(data[2]===data[4] && data[4] === data[6] && data[6] !== ''){
        Win(data)
      }
    }
    const Win=(winner)=>{
      setLock(true);
      
      if(winner==='x'){
        title.current.value=`Congraulation :X`
      }
      if(winner==='0'){
        title.current.value=`Congraulation :)`
      }
    }
    
  return (
    <div className='container'>
      <h1 className='title' ref={title}>Tic Tac Toe Game in <span>React</span></h1>
      <div className="board">
        <div className="row1">
            <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>  
            <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className="row2">
            <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>  
            <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className="row3">
            <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>  
            <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
        </div>
      </div>
      <button className="reset">Reset</button>
    </div>
  )
}

export default TicTacToe
