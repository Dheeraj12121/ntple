import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
// import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Navbarr = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
    <div className="flex md:items-center md:justify-around md:px-24 py-4 border-b-2 shadow-md">
            <div className="z-50 flex sm:pl-6">
            <Image height={40} width={80}  src={"https://nptel.ac.in/assets/shared/logo-m.jpg"}/>
            </div>
            <div onClick={() =>setOpen(!open)} className="z-50 text-3xl flex flex-grow  justify-end pr-5  md:hidden  ">
            <div  className="">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
</svg>

            </div>
            </div>
            {/* <div className=' sm:h-4 md:h-7 sm:w-20 md:w-32 h-4 w-20 cursor-pointer z-50  sm:pl-6 sm:ml-4 ml-4 sm:flex sm:justify-around  '> */}

            {/* </div> */}
            <ul className='md:flex hidden items-start text-sm md:text-xl  space-x-8 mr-auto pl-24 '>
                <li><Link href=""><a>Initiatives</a></Link> </li>
                <li><Link href=""><a>Programs</a></Link> </li>
                <li><Link href=""><a>NPTEL STARS</a></Link> </li>
                <li><Link href=""><a>More</a></Link> </li>
            </ul>

            <div className=" sm:hidden md:block flex">
                <div className="flex text-gray-400">
                <button>Login
                </button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg> 
                </div>   
            </div>
            {/* Mobile */}
            
            <ul className={`md:hidden  text-xl leading-10 z-10 bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                <li className='bg-slate-100 p-2 mb-1'><Link href=""><a>Initiatives</a></Link> </li>
                <li className='bg-slate-100 p-2 mb-1'><Link href=""><a>Programs</a></Link> </li>
                <li className='bg-slate-100 p-2'><Link href=""><a>More</a></Link> </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbarr