import { useState,useEffect } from "react";
import AddItem from './Components/Quiz/AddItem'
import LineItem from './Components/Quiz/LineItem'
import Header from './Components/Quiz/Header'
import SearchItem  from "./Components/Quiz/SearchItem";
import Content from "./Components/Quiz/Content";
import ItemList from "./Components/Quiz/ListItems";
import './index.css';
import apiRequest from "./Components/Quiz/apiRequest";

import Footer from "./Components/Quiz/Footer"

function App() {
  

    //States
 
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('');
  const[fetchError,setFetchError]=useState(null);
  const [loading,setLoading]=useState(true);
  const API_URL=`http://localhost:3500/items`


  //fetch Api

   
  useEffect(()=>{
   console.log('updating item stat');
   const fetchItems=async()=>
   {
    try
    {
      const response=await fetch(API_URL);
      if(!response.ok)throw Error('Did not recieve expected data please try again later')
      const listItem=await response.json();
      setItems(listItem)
      setFetchError(null)
    }
    catch(err)
    {
    console.log(err.message)
    setFetchError(err.message)
    }
   }
   async function ali(){
    await fetchItems()
   }
   ali()
   
  },[])



  //functions
  const setAndSaveItems = (newItems) => {
      setItems(newItems);
      localStorage.setItem('shoppingList',items)

  }

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
    const postOptions={
      method:'POST',
      headers:{ 
        'Content-Type':'application/json'
      },
      body:JSON.stringify(myNewItem)
    }
    const result=await apiRequest(API_URL,postOptions);
    //if(result) setFetchError(result);


  }

  const handleCheck = async (id) => {
      const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
      setAndSaveItems(listItems);
      const myItem=listItems.filter((item)=>item.id == id);
      const updateOptions={
        method:'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({checked:myItem[0].checked})
      }
      const reqUrl=`${API_URL}/${id}`
      const result=await apiRequest(reqUrl,updateOptions);
      if (result) setFetchError(result)
      
  }

  const handleDelete = async (id) => {
    const ListItem=items.filter((item)=>item.id!==id)
    setAndSaveItems(ListItem)
    const Delete={
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify()

    }
    const reqUrl=`${API_URL}/${id}`
    const result=await apiRequest(reqUrl,Delete);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      if (!newItem) return;
      addItem(newItem);
      setNewItem('');
  }


  //virtual dom
  return (
      <div className="App">
          <Header title="Grocery List" />
          <AddItem
              newItem={newItem}
              setNewItem={setNewItem}
              handleSubmit={handleSubmit}
          />
          <SearchItem
              search={search}
              setSearch={setSearch}
          />
          <main>
          {!fetchError && <p style={{color:'red'}}>{`Error: ${fetchError}`}</p>}

          {fetchError && <Content
              items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
          />}
          </main>
          <Footer length={items.length} />
      </div>
  );
}


export default App;