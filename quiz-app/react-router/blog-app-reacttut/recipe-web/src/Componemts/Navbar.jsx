import React from 'react'

const Navbar = () => {
    // nav items
    const navItems = [
        {path:'/', link:"Home"},
        {path:'/services', link:"Services"},
        {path:'/about', link:"About"},
        {path:'/blogs', link:"Blogs"},
        {path:'/contact', link:"Contact"}
    ]
  return (
      <header className='bg-black'>
        <a href='/'>Design <span className='text-xl font-bold text-white'>DK</span></a>
        </header>
  )
}

export default Navbar
