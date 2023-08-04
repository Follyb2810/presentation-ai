import React from 'react'
import NavBar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <>
     <NavBar/>
     <Outlet/>
     {children}
    </>
  )
}

export default Layout