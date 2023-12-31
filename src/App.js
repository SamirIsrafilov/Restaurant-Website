import React from 'react';
import Nav from './components/Nav'
import Home from './pages/Home';
import { AppRouter } from './router/AppRouter';
import Footer from './components/Footer';

const App = () => {
  return (
    <div >
      <Nav />
      <div className='bg-[#f6efea] w-full '>
        {/* <AppRouter/> */}
        <Home/>
      </div>
      <Footer/>
    </div>
  )
}

export default App