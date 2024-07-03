import React from 'react';
import Button from './Button';




const Form = ({reqType,setReqType}) => {
 return(
   <div>
    <Button 
    buttonText='users'
    setReqType={setReqType}
    reqType={reqType}/>

   <Button 
    buttonText='posts'
    setReqType={setReqType}
    reqType={reqType}/>
   <Button 
    buttonText='comments'
    setReqType={setReqType}
    reqType={reqType}/>
   </div>
  )
}

export default Form

