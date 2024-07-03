import { useState,useEffect } from "react";
import Form from "./Form";
import List from "./List";
import ListItems from "./ListItems";

function App() {
  const API_URL='https://jsonplaceholder.typicode.com/';
  const [reqType,setReqType]=useState('users');
  const [items,setItems]=useState([]);
  useEffect(()=>{
   const FetchItems=async ()=>{
    const response=await fetch(`${API_URL}${reqType}`);
    const data=await response.json();
    console.log(data)
    setItems(data)
   }
   FetchItems();
  },[reqType])
return(
  <div className="App">
    <Form reqType={reqType}
    setReqType={setReqType}/>
    <List items={items}/>
  </div>
)
}
export default App