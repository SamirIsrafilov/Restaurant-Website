import React from 'react'
import Img1 from '../img/about_1.jpeg';
import Img2 from '../img/about_2.jpeg';


const About = () => {
    return (
        <div id='about'>
            <div className='container-fluid px-6 md:p-32 '>
                <div className=' grid gap-6 grid-cols-1 md:grid-cols-2'>
                    <div className='md:mt-6'>
                        <h2 className='text-[36px] md:text-[48px] text-[#000] font-extrabold mb-3'>THE DEN OF FLAVOURS </h2>
                        <p className='font-semibold md:pr-6 mb-10 leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.<br /><br />

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                            Nunc ut sem vitae risus tristique posuere.</p>
                        <button className=' border-2 border-black py-[17.5px] px-[40px] bg-[#f1d4ca] uppercase text-[14px] font-bold rounded-md 
          hover:underline underline-offset-2 hover:translate-y-[-5px] ease-in-out duration-300'>Discover Our Menu</button>
                    </div>
                    <div >
                        <img className='md:rotate-[-5deg] border-2 rounded-md border-black object-cover md:h-[600px] w-full ' src={Img1} alt="" />
                    </div>
                </div>
            </div>


            <div className='container-fluid px-6 md:p-32 '>
                <div className=' grid gap-6 grid-cols-1 md:grid-cols-2 '>
                    <div className='mt-4 md:mt-0' >
                        <img className='md:rotate-[5deg] border-2 rounded-md border-black object-cover md:h-[600px] w-full ' src={Img2} alt="" />
                    </div>
                    <div className='md:ms-6 md:mt-6'>
                        <h2 className='text-[36px] md:text-[48px] text-[#000] font-extrabold mb-3'>A PLACE THAT FEELS LIKE HOME </h2>
                        <p className='font-semibold md:pr-6 mb-10 leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.<br /><br />

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                            Nunc ut sem vitae risus tristique posuere.</p>
                        <button className=' border-2 border-black py-[17.5px] px-[40px] bg-[#f1d4ca] uppercase text-[14px] font-bold rounded-md 
          hover:underline underline-offset-2 hover:translate-y-[-5px] ease-in-out duration-300'>Discover Our Menu</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About