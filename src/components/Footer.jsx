import React from 'react'
import logo from '../img/yonk.logo.svg';
import { TbPointFilled } from "react-icons/tb";
import Img1 from '../img/instagram.1.jpg';
import Img2 from '../img/instagram.2.jpg';
import Img3 from '../img/instagram.3.jpg';
import Img4 from '../img/instagram.4.jpg';
import Img5 from '../img/instagram.5.jpg';
import Img6 from '../img/instagram.6.jpg';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#fff] border-t-2 border-[#000]'>
                <div className=' grid grid-cols-1 md:grid-cols-2'>
                    <div className='py-[80px] flex flex-col items-center justify-center md:border-r-2  border-[#000] '>
                        <h1 className='text-[32px] font-bold text-center'>YONK BAR & RESTAURANT</h1>
                        <div className='text-center mt-4'>
                            <h2 className='uppercase font-bold'>Contact Us</h2>
                            <a className='underline underline-offset-2 font-bold hover:text-[#e48c71]' href="#">team@yonk.com</a>
                        </div>

                        <div className='text-center mt-4'>
                            <h2 className='uppercase font-bold'>Call Us</h2>
                            <a className='underline underline-offset-2 font-bold hover:text-[#e48c71]' href="#">0021 - 3344 - 8899</a>
                        </div>

                        <div className='text-center mt-4'>
                            <h2 className='uppercase font-bold'>Find Us</h2>
                            <a className='underline underline-offset-2 font-bold hover:text-[#e48c71]' href="#">422 Franklin St, Michigan City, IN 46360-3385</a>
                        </div>


                        <div className='text-center mt-4'>
                            <h2 className='uppercase font-bold'>Follow Us</h2>
                            <a className='underline underline-offset-2 font-bold hover:text-[#e48c71]' href="#">Facebook</a>
                        </div>

                    </div>
                   

                  

                    <div >
                    <marquee behavior="scroll" direction="right" width="100%"  className="text-[20px] p-3 font-bold border-t-2 md:border-t-0 border-b-2 border-[#000]">
                        <div className='flex justify-between'>
                            <div className='flex items-center me-5'>
                                <TbPointFilled className='text-[#e48c71]' /> FOLLOW US ON INSTAGRAM
                            </div>
                            <div className='flex items-center me-5'>
                                <TbPointFilled className='text-[#e48c71]' /> FOLLOW US ON INSTAGRAM
                            </div>
                            <div className='flex items-center me-5'>
                                <TbPointFilled className='text-[#e48c71]' /> FOLLOW US ON INSTAGRAM
                            </div>
                            <div className='flex items-center me-5'>
                                <TbPointFilled className='text-[#e48c71]' /> FOLLOW US ON INSTAGRAM
                            </div>
                        </div>
                    </marquee>

                    <div className='grid grid-cols-2 md:grid-cols-3 gap-2 p-2'>
                        <img className='border-2 border-[#000]' src={Img1} alt="" />
                        <img className='border-2 border-[#000]' src={Img2} alt="" />
                        <img className='border-2 border-[#000]' src={Img3} alt="" />
                        <img className='border-2 border-[#000]' src={Img4} alt="" />
                        <img className='border-2 border-[#000]' src={Img5} alt="" />
                        <img className='border-2 border-[#000]' src={Img6} alt="" />

                    </div>
                    </div>
                </div>


            </div>
            <div className='px-[40px] py-[24px] bg-[#e48c71] border-t-2 border-[#000] border-b-2'>
                <div className='flex justify-between items-center flex-col sm:flex-row'>
                    <div className='mb-5 sm:mb-0'>
                        <p className='text-center font-semibold'>© 2023 Yonk - <a href='#'>Powered by Webflow</a></p>
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
        </div>
    )
}

export default Footer