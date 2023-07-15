import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

export const AppRouter = () => {
  return (
   <BrowserRouter>
   <Home/>
   <Routes>
    <Route path='/' element={Home} >
        
    </Route>
   </Routes>
   </BrowserRouter>
  )
}
