import Image from 'next/image'
import React from 'react'
import Firstwo from './Firstwo';
import Api from './Api'

const Fistcards = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-3  ">
        {/* left */}
        <div className=" grid justify-center  text-lg  ">
          <div className="sm:pr-18 rounded-xl bg-gray-100 p-6  md:px-20">
            <p>
              <b> 1.3 Billion+ </b>views,
            </p>
            <p>
              <b> 37 lakhs+</b> YouTube subscribers, <br />
            </p>
            <p>
              <b> 2300+</b> unique courses available <br /> for self study
            </p>
            <br />
            <br />
            <div>
              <a className="rounded-2xl border-[1px] border-black p-4" href="#">
                <b>Explore now</b>
              </a>
            </div>
            <br />
          </div>
        </div>

        {/*Middle  */}
        <div className=" pt-5 pb-3">
          <div className="text-center">
            <p className="md:text-2xl ">Online Learning Initaiatives by IITs and IISc</p>
            <p className='text-gray-400 pb-4'>funded by MoE, Govt. of India</p>
          </div>
          <div className=" grid grid-cols-3 md:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 justify-items-center ">
  
          {Api?.map(({ img, title }) => {
              return (
                <Firstwo
                  // key={id}
                  img={img}
                  title={title}
                />
              );
            })}
          </div>

        </div>
        {/* Right */}
        <div className=" grid justify-center  text-lg  ">
          <div className="sm:pr-18 rounded-xl bg-gray-100 p-6  md:px-20">
            <p>
              <b> 1.6 crore+ </b>enrollments
            </p>
            <p>
              <b> 15 lakhs+</b> exam registrations <br />
            </p>
            <p>
              <b> 4500+</b> LC colleges
            </p>
            <p>
              <b> 3500+</b> MOOCs completed
            </p>
            <p>
              <b> 60+</b> Industry associates
            </p>
            <br />
            <br />
            <div>
              <a className="rounded-2xl border-[1px] border-black p-4" href="#">
                <b>Explore now</b>
              </a>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}

export default Fistcards
