import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { items } from '../data';
import { ToastContainer } from 'react-toastify';

const Navbar = ({setData,cart,setCart}) => {
  const navigate = useNavigate();
  const filterByCategory =(category)=>{
    const item = items.filter((product) =>product.mawdoo3 ==category);
    setData(item);
  }
    const [search,setSearch] =useState('');

    const handleSubmit = (e)=>{
     e.preventDefault();
     navigate(`/search/${search}`)
     setSearch('');
    }

  return (
    <>

     <header className='sticky-top'>
     
        <div className="nav-bar">
            <div className="brand">E-Cart</div>
          
              <form className='search-bar' onSubmit={handleSubmit}>
            
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Search For Books"
    value={search}
    onChange={(e)=>setSearch(e.target.value)}/></form>
           
                <Link to={"/cart"} className="cart"><button type="button" className="btn btn-primary position-relative">
  Cart
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button></Link>
            
        </div>
        <div className="nav-bar-wrapper">
            <div className="items" onClick={()=>filterByCategory('Programming')}>Programming </div>
            <div className="items" onClick={()=>filterByCategory('CS')} >Computer Science</div>
            <div className="items" onClick={()=>filterByCategory('Sports')}>Sports</div>
            <div className="items">Science</div>
            <div className="items">Al5aaal</div>
            <div className="items">About Us</div>


        </div>
      
     </header>
   
    </>
  )
}

export default Navbar
