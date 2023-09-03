import React from 'react';
import Img1 from '../img/jobs_img1.jpeg';
import Img2 from '../img/jobs_img2.jpeg';


const Jobs = () => {
  return (
    <div id='jobs' className='y-12'>
      <div className='mx-[10px] md:mx-[100px] md:p-5'>
        <div className=' grid gap-6 grid-cols-1 md:grid-cols-2 '>
          <div className=' border-2 border-[#000]'>
            <div className='p-3 md:p-6 bg-[#E48C71] relative'>
              <img src={Img1} className='border-2 w-[100%] border-[#000]' alt="" />
              <div className='bg-[#fff] inline-flex items-center p-2 border-2 border-[#000] rounded absolute bottom-[40px] left-[20px] md:left-[40px]'>
                <h1 className='uppercase font-bold text-[14px] md:text-[22px] me-2 '>Waiter/Waiters</h1>
                <span className='bg-[#F1D4CA] border-2 border-[#000] rounded my-auto text-[14px]'>24/32h week</span>
              </div>
            </div>
            <div className='bg-[#fff] p-4'>
              <p className='text-[#000] font-semibold border-b-2 pb-5 border-[#000]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
                varius enim in eros elementum tristique. Duis cursus, mi quis viverra 
                ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
              <h1 className='text[#000] font-bold mt-4 mb-2'>
              WHAT WE EXPECT FROM YOU:
              </h1>
              <ul className='font-semibold mb-3'>
                <li className='flex items-center'><span className=' block bg-[#E48C71] w-[7px] h-[7px] rounded-full me-2'></span>Welcomes customers when they arrive</li>
                <li className='flex items-center'><span className=' block bg-[#E48C71] w-[7px] h-[7px] rounded-full me-2'></span>Prepares cheques and delivers them to customers</li>
                <li className='flex items-center'><span className=' block bg-[#E48C71] w-[7px] h-[7px] rounded-full me-2'></span>Prepares drinks and serves them to customers</li>
                <li className='flex items-center'><span className=' block bg-[#E48C71] w-[7px] h-[7px] rounded-full me-2'></span>Removes used dishes, glasses, and flatware from tables</li>
              </ul>

              
            </div>
            <div className='bg-[#f1d4ca] p-4 border-t-2 border-[#000] hover:bg-[#DF896E] cursor-pointer' >
                <a href="#" className='font-semibold hover:underline'> Interested? Give us a call - 0012 - 3494 - 3391</a>

              </div>
          </div>


          <div className=' border-2 border-[#000]'>
            <div className='p-3 md:p-6 bg-[#E48C71] relative'>
              <img src={Img2} className='border-2 border-[#000] w-[100%]' alt="" />
              <div className='bg-[#fff] inline-flex items-center p-2 border-2 border-[#000] rounded absolute bottom-[40px] left-[20px] md:left-[40px]'>
                <h1 className='uppercase font-bold text-[14px] md:text-[22px] me-2 '>DISHWASHER</h1>
                <span className='bg-[#F1D4CA] border-2 border-[#000] rounded my-auto text-[14px]'>24/32h week</span>
              </div>
            </div>
            <div className='bg-[#fff] p-4'>
              <p className='text-[#000] font-semibold border-b-2 pb-5 border-[#000]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
                varius enim in eros elementum tristique. Duis cursus, mi quis viverra 
                ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
              <h1 className='text[#000] font-bold mt-4 mb-2'>
              WHAT WE EXPECT FROM YOU:
              </h1>
              <ul className='font-semibold mb-3'>
                <li className='flex items-center'><span className=' block bg-[#E48C71] w-[7px] h-[7px] rounded-full me-2'></span>
                Scrape, rinse, and load dishes and utensils into dish machine</li>
                <li className='flex items-center'><span className=' block bg-[#E48C71] w-[7px] h-[7px] rounded-full me-2'></span>
                Wash and sanitize all pans, utensils, and dishes</li>
                <li className='flex items-center'><span className=' block bg-[#E48C71] w-[7px] h-[7px] rounded-full me-2'></span>
                Clean, sanitize, and maintain dish machine</li>
                <li className='flex items-center'><span className=' block bg-[#E48C71] w-[7px] h-[7px] rounded-full me-2'></span>
                Empty trash containers regularly</li>
              </ul>

              
            </div>
            <div className='bg-[#f1d4ca] p-4 border-t-2 border-[#000] hover:bg-[#DF896E] cursor-pointer' >
                <a href="#" className='font-semibold hover:underline'> Interested? Give us a call - 0012 - 3494 - 3391</a>

              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs