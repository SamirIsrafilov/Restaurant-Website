import React from 'react';
import Img1 from '../img/restauran_img.jpeg';
import { MdGrass,MdCalendarMonth,MdMasks } from 'react-icons/md';
import About from './About';
import Menu from './Menu';
import Jobs from './Jobs';

const Home = () => {
  return (
    <div >
      <div className='container-fluid px-6 md:p-32 md:pt-60 pt-32' id='home'>
        <div className=' grid gap-6 grid-cols-1 md:grid-cols-2'>
          <div>
            <h2 className='text-[32px] text-[#e48c71] font-extrabold mb-3'>YONK BAR & RESTAURANT </h2>
            <h1 className='md:text-[64px] font-extrabold md:leading-[70px] mb-3'>WE SPEAK THE GOOD FOOD LANGUAGE</h1>
            <p className='font-semibold md:pr-6 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            <button className=' border-2 border-black py-[17.5px] px-[40px] bg-[#f1d4ca] uppercase text-[14px] font-bold rounded-md 
          hover:underline underline-offset-2 hover:translate-y-[-5px] ease-in-out duration-300'>Discover Our Menu</button>
          </div>
          <div className='mb-4' >
            <img className='md:rotate-[-5deg] border-2 rounded-md border-black' src={Img1} alt="" />
          </div>
        </div>
      </div>



      <div className='bg-[#e48c71] w-full px-6 xl:px-32 border-t-2 border-b-2 border-black mb-32'>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3  py-32 '>
          <div className='p-3 md:p-10 border-2 border-black rounded bg-[#f6efea] relative'>
            <span className='bg-[#f1d4ca] p-2 inline-block rounded border-2 border-black absolute top-[-17px] left-[40px]'>
              <MdGrass /></span>
            <h3 className=' text-[24px] md:text-[32px] font-extrabold mt-2 mb-3'>WHOLE FOODS</h3>
            <p className='text-[16px] font-semibold leading-7'>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla.</p>
          </div>

          <div className='p-3 md:p-10 border-2 border-black rounded bg-[#f6efea] relative'>
            <span className='bg-[#f1d4ca] p-2 inline-block rounded border-2 border-black absolute top-[-17px] left-[40px]'>
              <MdCalendarMonth /></span>
            <h3 className=' text-[24px] md:text-[32px] font-extrabold mt-2 mb-3'>OPEN HOURS</h3>
            <p className='text-[16px] font-semibold leading-7'>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Suspendisse:<br/><br/>

              Tuesday - Friday - 16:00pm - 1am
              Weekend - 12:00pm - 2am</p>
          </div>

          <div className='p-3 md:p-10 border-2 border-black rounded bg-[#f6efea] relative'>
            <span className='bg-[#f1d4ca] p-2 inline-block rounded border-2 border-black absolute top-[-17px] left-[40px]'>
              <MdMasks /></span>
            <h3 className=' text-[24px] md:text-[32px] font-extrabold mt-2 mb-3'>COVID-19</h3>
            <p className='text-[16px] font-semibold leading-7'>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla.</p>
          </div>

        </div>
      </div>

      <About/>
      <Menu/>
      <Jobs/>
    </div>
  )
}

export default Home