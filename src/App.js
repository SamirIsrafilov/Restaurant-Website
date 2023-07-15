import React from 'react';
import Nav from './components/Nav'
import Home from './pages/Home';
import { AppRouter } from './router/AppRouter';

const App = () => {
  return (
    <div >
      <Nav />
      <div className='bg-[#f6efea] w-full '>
        {/* <AppRouter/> */}
        <Home/>
      </div>
    </div>
  )
}

export default App