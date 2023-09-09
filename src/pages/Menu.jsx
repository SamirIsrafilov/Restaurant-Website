import React, { useState } from 'react'
import MenuCard from '../components/MenuCard';
import menu from '../data/menu'

const Menu = () => {
const [active,setActive]=useState(true);
    const [ToggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const getActiveClass = (index, className) =>
        ToggleState === index ? className : "";
    return (
        <div id='menu'>
            <div className='bg-[#e48c71] py-[30px]  md:py-[100px] border-y-2 border-[#000]' >
                <div data-aos="zoom-in" className='mx-[30px] md:mx-[100px] bg-[#fff] border-2 border-[#000] rounded-md p-[20px] md:p-[80px]'>
                    <nav>
                        <ul className='flex flex-wrap'>
                            <li className={`mx-2 ${getActiveClass(1)} ${  ToggleState === 1 ? "bg-[#f1d4ca]" : ""}  `}
                                onClick={() => toggleTab(1)}>
                                <button className='px-6 py-2 border-2 border-[#000] rounded font-semibold 
                                 hover:underline underline-offset-2 ease-in-out duration-300' >Startes</button>
                            </li>
                            <li className={`mx-2 ${getActiveClass(2)} ${  ToggleState === 2 ? "bg-[#f1d4ca]" : ""}`}
                                onClick={() => toggleTab(2)}>
                                <button className='px-6 py-2 border-2 border-[#000] rounded font-semibold 
                                 hover:underline underline-offset-2 ease-in-out duration-300' >Mains</button>
                            </li>
                            <li className={`mx-2 ${getActiveClass(3)} ${  ToggleState === 3 ? "bg-[#f1d4ca]" : ""}`}
                                onClick={() => toggleTab(3)}>
                                <button className='px-6 py-2 border-2 border-[#000] rounded font-semibold 
                                 hover:underline underline-offset-2 ease-in-out duration-300' >Desserts</button>
                            </li>
                            <li className={`mx-2 ${getActiveClass(4)} ${  ToggleState === 4 ? "bg-[#f1d4ca]" : ""}`}
                                onClick={() => toggleTab(4)}>
                                <button className='px-6 py-2 border-2 border-[#000] rounded font-semibold 
                                 hover:underline underline-offset-2 ease-in-out duration-300' >Drinks</button>
                            </li>
                        </ul>
                    </nav>

                    <div className='p-5' >
                        <div className={`content ${getActiveClass(1, "active-content")}`}>

                            <div className='grid md:grid-cols-2 gap-3 content-between'>
                                <div className='flex flex-col'>
                                    {menu[0].map((fd, i) => (
                                        <MenuCard name={fd.name} desc={fd.desc}  price={fd.price} key={i} />
                                    ))}
                                </div>
                                <div className='flex flex-col ms-4'>
                                    {menu[1].map((fd, i) => (
                                        <MenuCard name={fd.name} desc={fd.desc}  price={fd.price} key={i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={`content ${getActiveClass(2, "active-content")}`}>
                        <div className='grid md:grid-cols-2 gap-3 content-between'>
                                <div className='flex flex-col'>
                                    {menu[0].map((fd, i) => (
                                        <MenuCard name={fd.name} desc={fd.desc}  price={fd.price} key={i} />
                                    ))}
                                </div>
                                <div className='flex flex-col ms-4'>
                                    {menu[1].map((fd, i) => (
                                        <MenuCard name={fd.name} desc={fd.desc}  price={fd.price} key={i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={`content ${getActiveClass(3, "active-content")}`}>
                        <div className='grid md:grid-cols-2 gap-3 content-between'>
                                <div className='flex flex-col'>
                                    {menu[0].map((fd, i) => (
                                        <MenuCard name={fd.name} desc={fd.desc}  price={fd.price} key={i} />
                                    ))}
                                </div>
                                <div className='flex flex-col ms-4'>
                                    {menu[1].map((fd, i) => (
                                        <MenuCard name={fd.name} desc={fd.desc}  price={fd.price} key={i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={`content ${getActiveClass(4, "active-content")}`}>
                        <div className='grid md:grid-cols-2 gap-3 content-between'>
                                <div className='flex flex-col'>
                                    {menu[0].map((fd, i) => (
                                        <MenuCard name={fd.name} desc={fd.desc}  price={fd.price} key={i} />
                                    ))}
                                </div>
                                <div className='flex flex-col ms-4'>
                                    {menu[1].map((fd, i) => (
                                        <MenuCard name={fd.name} desc={fd.desc}  price={fd.price} key={i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <Tab /> */}
        </div>
    )
}

export default Menu