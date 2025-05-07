import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        < >
            <div className='flex w-full h-20 justify-between items-center shadow-sm p-10'>
                <h1 className='text-2xl' >Where in the world?</h1>
               <Link to='/'> <h1 className='border px-10 py-3 rounded text-[20px] hover:bg-black hover:text-white duration-300 ease-in-out'>Home</h1></Link>
               <Link to='country'> <h1 className='border px-10 py-3 rounded text-[20px] hover:bg-black hover:text-white duration-300 ease-in-out' >Countries</h1></Link>
            </div>
        </>
    )
}

export default Header