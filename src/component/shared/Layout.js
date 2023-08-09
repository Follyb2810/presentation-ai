import React from 'react'
import NavBar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
     <NavBar/>
     <Outlet/>
     {children}
     <Footer/>
    </>
  )
}

export default Layout