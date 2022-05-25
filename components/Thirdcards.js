import Image from 'next/image'
import React from 'react'


const Thirdcards = () => {
const api =[
  {
    img: 'https://archive.nptel.ac.in/content/noc/NOC18/SEM1/Candidate_photos/STAPR1810026146_photo.jpeg',
    title:
      'For working professionals, the lectures are a boon. The courses are so well structured that attendees can select parts of any lecture that are specifically useful for them. The USP of the NPTEL courses is its flexibility.',
    name: 'Sammer Srivastava',
    work: 'Deputy Director at UIDAI',
  },
  {
    img: 'https://archive.nptel.ac.in/content/noc/NOC20/SEM2/Candidate_photos/anjumkhanrs@gmail.com_photo.jpeg',
    title: 'The delivery of this course is very good. The courseware is not just lectures, but also interviews. The course in-charge interviews people from various parts of the world, related to disability. It is very useful and engaging.',
    name: 'Dr. M. Anjum Khan',
    work: 'Faculty',
  },
  {
    img: 'https://archive.nptel.ac.in/content/noc/NOC17/SEM1/Candidate_photos/STMAR171002310_photo.jpg',
    title: 'The NPTEL courses are very structured and of very high quality. He attributed this being nominated as a speaker at the 4th Global Conference and Expo on Vaccines Research & Development, which was held at Lisbon in February 2020.',
    name: 'Dr Vinay Kumar Bhai',
    work: 'Medical Officer with WHO',
  },
  {
    img: 'https://nptel.ac.in/assets/home/yogesh.jpeg',
    title: "The comfort of taking up the NPTEL online courses at one's own time, expediency and place has encouraged him to take up six courses in year's time and be successful in passing it with flying adminstrator of  colours.",
    name: 'Mr Yogesh Chauchan',
    work: 'Faculty',
  },
]
  return (
    <>
      <div className="bg-teal-50  ">
          <h1 className='mx-10  py-10 pt-5 pl-5 md:text-2xl'>Feedback from Learners</h1>
        
       <div className="flex overflow-scroll scrollbar-hide">
       

        
          <div className=" flex">
          {api.map(({ img, title,name ,work }) => {
              return (
                <div className="bg-white w-[22rem] m-6">
          <div className="p-6">
          <div className="flex">
        <svg  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
</svg>
        <b><hr className='flex mt-3 w-64  items-center '/></b>
          </div>
          <p>{title}</p>
          <div className="flex">
        <b><hr className='flex mt-3 w-64  items-center '/></b>
        <svg  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
</svg>
          </div>
          </div>
         
        
          <div className="bg-cyan-200 flex h-44 justify-center items-center">
            <div className="relative w-[116px] h-28 ">
              <Image className='rounded-[50%] ' src={img} layout={'fill'}/>
            </div>
            <div className='pl-4'>
              <h1>{name}</h1>
              <p>{work}</p>
            </div>
          </div>
        </div>
              )
            })}
          </div>
       

        
       </div>


      </div>

    </>
  )
}

export default Thirdcards
