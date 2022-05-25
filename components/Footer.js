import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="grid bg-slate-100 sm:grid-cols-1 md:grid-cols-4 p-5 py-10 md:pl-16 ">
       {/* Right */}
        <div className="sm:hidden md:block m-7 ">
          <div className="md:border-r-2">
         <div className="">
         <Image  height={26} width={130} src={'https://nptel.ac.in/assets/shared/logo-d.jpg'}/>
         </div>
          <div className="mt-4 grid text-gray-400 leading-9 font-normal">
            <a href="#">Documents</a>
            <a href="#">Careers</a>
            <a href="#">Help Videos</a>
            <a href="#">Live Sessions</a>
            <a href="#">Code of Conduct</a>
            <a href="#">NPTEL Hard-disk</a>
            <a href="#">Information on NPTEL semesters</a>
          </div>
          </div>
        </div>

        {/* Left */}
        <div className="">
          <div className="mt-7">
            <h1 className="md:hidden">NPTEL Sitemap</h1>
            <small>Distributed under</small> <br />
            <small className='font-semibold'>Creative Commons Attribution-ShareAlike</small>
            <p>CC BY- NC - SA</p>
            <Image
              width={150}
              height={100}
              
              src="https://nptel.ac.in/assets/footer/by-nc-sa.svg"
            />
            <h1>AMAeSI</h1>
          </div>
          
          {/* social media */}

        </div>

        <div className=""></div>
      </div>

      {/* Social media  and copiright */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 bg-slate-100 md:gap-4 p-5 ">
        <div className=" text-gray-500 sm:pb-4 md:ml-16">© - 2022 All rights reserved</div>

        <div className=""></div>

        <div className=" space-x-6  ">
          <a href=""><Image width={40} height={40} src={'https://nptel.ac.in/assets/footer/Facebook.svg'}/></a>
          <a href=""><Image width={40} height={40} src={'https://nptel.ac.in/assets/footer/Twitter.svg'}/></a>
          <a href=""><Image width={40} height={40} src={'https://nptel.ac.in/assets/footer/Instagram.svg'}/></a>
          <a href=""><Image width={40} height={40} src={'https://nptel.ac.in/assets/footer/LinkedIn.svg'}/></a>
          <a href=""><Image width={40} height={40} src={'https://nptel.ac.in/assets/footer/Youtube.svg'}/></a>
        </div>
      </div>


    </>
  )
}

export default Footer
