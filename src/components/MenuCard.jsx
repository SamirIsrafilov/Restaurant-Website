import React from 'react'

const MenuCard = ({name,desc,price}) => {
    return (
        <div className='sm:flex items-center border-[#000] border-b-2 pb-3 mt-3'>
            <div>
                <h5 className='font-extrabold md:text-xl mb-2'>{name}</h5>
                <p>{desc}</p>
            </div>
            <span className='inline-flex content-center items-center h-[50px] bg-[#f1d4ca] font-semibold rounded p-2 sm:ms-4 border-2 border-[#000]'>
                ${price}
            </span>
        </div>
    )
}

export default MenuCard