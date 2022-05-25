import React, { useState } from 'react'
import ReactPlayer from 'react-player';

const Secondcards = () => {
  const [toogle, setToogle] = useState(1)

  const toogletab = (index) => {
    console.log(index);
  }
  return (
    <>
      <div className="grid p-5 sm:grid-cols-1 md:grid-cols-2 px-16 ">
        {/* Left */}
        <div className="">
          <h3 className='md:text-2xl'>News & Annoucements</h3>
          <div className="flex  space-x-8 cursor-default text-lg p-6 ">
            <div className={toogle === 1 ? "text-blue-500" : "bg-white"} onClick={() => setToogle(1)}>Jan-Apr 2022 semester</div>
            <div className={toogle === 2 ? "text-green-500" : "bg-white"} onClick={() => setToogle(2)}>General</div>
            <div className={toogle === 3 ? "text-gray-500" : "bg-white"} onClick={() => setToogle(3)}>Events</div>
          </div>

          <div className="">
          {/* <hr /> */}
            <div className={toogle === 1 ? "block  " :"hidden"} >
              <div className="grid md:grid-cols-2">
              <a className='rounded border-solid border-l-4 border-blue-500 bg-gray-200 inline-block text-lg mr-6 mb-6 p-2 ' href="#">Results for March 2022 Exams</a>
              <a className='rounded border-solid border-l-4 border-blue-500 bg-gray-200 inline-block text-lg  mr-6 mb-6 p-3 ' href="#">List of Courses</a>
              <a className='rounded border-solid border-l-4 border-blue-500 bg-gray-200 inline-block text-lg  mr-6 mb-6 p-3 ' href="#">Results for Apr 2022 Exams</a>
              <a className='rounded border-solid border-l-4 border-blue-500 bg-gray-200 inline-block text-lg  mr-6 mb-6 p-3 ' href="#">Timelines and Guidelines</a>
              </div>
              <a className='rounded border-solid border-l-4 border-blue-500 bg-gray-200 inline-block text-lg  mr-6 mb-6 p-3 ' href="#">Course Booklet</a>
            </div>

            <div className={toogle === 2 ? "block" :"hidden"}>
              <div className="">
              <a className='rounded border-solid border-l-4 border-green-500 bg-gray-200 inline-block text-lg  mr-6 mb-6 p-3 ' href="#">Timelines and Guidelines</a>
              <a className='rounded border-solid border-l-4 border-green-500 bg-gray-200 inline-block text-lg  mr-6 mb-6 p-3 ' href="#">Timelines and Guidelines</a>
              <a className='rounded border-solid border-l-4 border-green-500 bg-gray-200 inline-block text-lg  mr-6 mb-6 p-3 ' href="#">Timelines and Guidelines</a>
              
              </div>
            </div>

            <div className={toogle === 3 ? "block" :"hidden"}>
              <div className="">
              <a className='rounded border-solid border-l-4 border-slate-500 bg-gray-200 inline-block text-lg  mr-6 mb-6 p-3 ' href="#">Timelines and Guidelines</a>
              <a className='rounded border-solid border-l-4 border-slate-500 bg-gray-200 inline-block text-lg  mr-6 mb-6 p-3 ' href="#">Timelines and Guidelines</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
       
  <div className=" ">
  <ReactPlayer width={'100%'}   url={'https://www.youtube.com/watch?v=Hr6MJcSR9dQ&feature=emb_title'}/>
  </div>
        
      
        </div>
    </>
  )
}

export default Secondcards
