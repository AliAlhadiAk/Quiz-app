import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import styled from 'styled-components'
import {MdMenu,MdShoppingCart} from 'react-icons/md'
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
   <Navbarwrapper className='bg-white flex'>
     <div className='container w-100'>
        <div className='brand-and-toggler flex felx-between w-100'>
            <Link to='/' className='navbar-brand text-uppercase ls-1 fw-8'>
                <span>c</span>oursen
            </Link>
            <div className='navbar-btns flex'>
                <Link to='/cart' className='cart-btn'><MdShoppingCart/>
                <span className='item-coutn-badge'>0</span></Link>
                <button type='button' className='sidebar-open-btn'><MdMenu/></button>
            </div>
        </div>
     </div>
   </Navbarwrapper>
  )
}
const Navbarwrapper=styled.nav`
height:80px;
box-shadow:rgba(50,50,93,0.15) 0px 16px 12px -2px rgba(0,0,0,0.2) 0px 3px 7px -3px;
.nav-brand{
    font-size:23px;
    span{
        color:vbar
    }
}m
`
;

export default Navbar