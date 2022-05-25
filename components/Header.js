import Image from 'next/image'
import React from 'react'
import Carousel from 'react-elastic-carousel'
import Item from './Item'

const Header = () => {
  return (
    <div className='mb-4 -z-50'>
      <Carousel enableAutoPlay autoPlaySpeed={1500}>
        <Item>
          <img src="https://nptel.ac.in/assets/shared/carousel/Coordinator.jpg" alt="" />
        </Item>
        <Item>
        <img src="https://nptel.ac.in/assets/shared/carousel/NPTEL%20Merchandise.jpg" alt="" />
        </Item>
        <Item>
          <img src="https://nptel.ac.in/assets/shared/carousel/NPTEL%20Stars.jpg" alt="" />
        </Item>
        <Item>
          <img src="https://nptel.ac.in/assets/shared/carousel/Course%20offering%20faculty.jpg" alt="" />
        </Item>
        <Item>
          <img src="https://nptel.ac.in/assets/shared/carousel/Special%20Live%20Series.jpg" alt="" />
        </Item>
        <Item>
          <img src="https://nptel.ac.in/assets/shared/carousel/Coordinator.jpg" alt="" />
        </Item>
      </Carousel>
    </div>
  )
}

export default Header