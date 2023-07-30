import React from 'react'
import logo from '../img/yonk.logo.svg';
const Footer = () => {
    return (
        <div className='px-[40px] py-[24px] bg-[#e48c71]'>
           <div className='flex justify-between items-center flex-col sm:flex-row'>
           <div className='mb-5 sm:mb-0'>
                <p className='text-center'>© 2023 Yonk - <a href='#'>Powered by Webflow</a></p>
            </div>
            <div className='mb-5 sm:mb-0' >
                <a className='flex items-center justify-center w-[45px] h-[45px] font-bold border-2 bg-[#fff] border-[#000] rounded-full' href="#">TOP</a>
            </div>
            <div >
                <a href="#">
                    <img src={logo} className='max-w-[170px]' alt="" />
                </a>
            </div>
           </div>
        </div>
    )
}

export default Footer