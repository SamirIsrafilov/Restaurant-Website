import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Footer from '../components/Footer'

export const AppRouter = () => {
  return (
   <BrowserRouter>
   {/* <Home/> */}
   <Routes>
    <Route path='/' element={Home} >
        
    </Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}
