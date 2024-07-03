import React, { useContext } from 'react'
import AuthContext from './Components/Context'
import { Navigate, Outlet, useLocation } from 'react-router'

const Requireauth = () => {
    const {auth} = useContext(AuthContext)
    const location = useLocation()
  return (
    auth?.user 
    ?<Outlet/>
    :<Navigate to={'/login'} state={{from:location}} replace/>
  )
}

export default Requireauth