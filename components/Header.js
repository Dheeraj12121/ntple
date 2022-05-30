import Image from 'next/image'
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
const Header = () => {
  
  return (
    <div className="-z-50 mb-4">
      <Carousel showStatus="" infiniteLoop autoPlay showThumbs="" stopOnHover>
        <div>
          <img
            src={'https://nptel.ac.in/assets/shared/carousel/Office.jpg'}
            alt=""
          />
        </div>
        <div>
          <img src="https://nptel.ac.in/assets/shared/carousel/NPTEL%20Merchandise.jpg" alt="" />
        </div>
        <div>
          <img src="https://nptel.ac.in/assets/shared/carousel/NPTEL%20Stars.jpg" alt="" />
        </div>
        <div>
          <img src="https://nptel.ac.in/assets/shared/carousel/Course%20offering%20faculty.jpg" alt="" />
        </div>
        <div>
          <img src="https://nptel.ac.in/assets/shared/carousel/Special%20Live%20Series.jpg" alt="" />
        </div>
        <div>
          <img src="https://nptel.ac.in/assets/shared/carousel/Workshop.jpg" alt="" />
        </div>
        <div>
          <img src="https://nptel.ac.in/assets/shared/carousel/Coordinator.jpg" alt="" />
        </div>

      </Carousel>
    </div>
  )
}

export default Header
