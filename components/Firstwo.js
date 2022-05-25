import Image from 'next/image'
import React from 'react'

const Firstwo = ({ id, img, title }) => {
  return (
    <div className="">
      <div className="grid justify-center">
        <Image src={img} width={50} height={50} />
      </div>
      <h1 className='pb-5'>{title}</h1>
    </div>
  )
}

export default Firstwo
