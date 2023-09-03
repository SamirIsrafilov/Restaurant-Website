import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { HiChevronDown } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'
import logo from '../img/yonk.logo.svg';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    let [open, setOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('#')

    return (
        <div className=' w-full fixed top-0 left-0 z-50'>
            <nav className='md:flex items-center justify-between py-4 mt-3 md:px-10 px-7'>
                <div className='cursor-pointer'>
                    <img className={`max-w-[200px] hover:scale-95 ease-in-out duration-300 ${open ? 'hidden' : "block"} md:block `} src={logo} alt="" />
                </div>
                <div onClick={() => setOpen(!open)} className='text-2xl absolute z-20 right-8 top-6 mt-3 cursor-pointer md:hidden border-2 rounded border-black'>
                    {open ?
                        <div className='bg-[#e48c71] p-3 rounded'><GrClose /> </div>
                        :
                        <div className='p-3 bg-[#f6efea]'>
                            <FiMenu />
                        </div>
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0  absolute md:static
                 bg-white md:z-auto z-[-1] left-0 w-full  md:w-auto md:pl-5  transition-all 
                 duration-500 ease-in ${open ? 'opacity-100 top-0 h-screen md:h-auto' : 'left-[600px]'} md:opacity-100 opacity-0 border-2 border-black rounded`}>

                    <li className='page_title'>
                        <a href="#" onClick={() => setActiveNav('#')} className={`title ${activeNav === '#' ? 'active' : ''} ${({ isActive }) => (isActive ? "text-[#e48c71]" : 'none')}`}>HOME</a>
                    </li>

                    <li className='page_title'>
                        <a href="#about" onClick={() => setActiveNav('#about')} className={`title ${activeNav === '#about' ? 'active' : ''}`} >ABOUT</a>
                    </li>
                    <li className='page_title'>
                        <a href="#menu" onClick={() => setActiveNav('#menu')} className={`title ${activeNav === '#menu' ? 'active' : ''}`} >MENU</a>
                    </li>
                    <li className='page_title'>
                        <a href="#jobs" onClick={() => setActiveNav('#jobs')} className={`title ${activeNav === '#jobs' ? 'active' : ''}`} >JOBS</a>
                    </li>
                    {/* <li className='page_title'>
                        <a href="#" className='title flex '>TEMPLATE <HiChevronDown className='text-[20px] ms-2 ' /></a>
                    </li> */}
                    <li>
                        <button className='w-full md:w-auto md:ml-5 lg:px-[40px] px-[20px] py-[20px] 
                                bg-[#f1d4ca] text-left border-b-2 md:border-b-0 md:border-l-2 md:rounded-e border-black font-semibold
                                 hover:bg-black hover:text-white'>BOOK A TABLE</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav