import React from 'react'
import image1 from "../../../public/step1.png"
import image2 from "../../../public/step2.png"
import image3 from "../../../public/steps3.png"
import Image from 'next/image'

export default function Steps() {
  return (
    <div className='w-full flex  px-4  flex-col justify-center items-center bg-white py-32 gap-5'>
      <h1 className='text-center text-4xl font-bold text-gray-800'>T-shirt Printing Made Easy</h1>
      <p className='text-sm font-bold text-gray-500'>Suspendisse et laoreet lorem, ut condimentum diam finibus neque id erat vulputate in tristique dui mattis.</p>
      <div className='w-full flex justify-center items-center py-32 px-3 gap-4 flex-wrap'>
        <div className='flex flex-col justify-center items-center'>
            <Image src={image1} alt='stepsimage1'/>
            <h5 className='text-white font-bold bg-gray-950 p-2 rounded-full'>01</h5>
            <h4 className='text-3xl font-bold'>Pick A Product</h4>
            <p className='text-sm font-light text-gray-900'>Printed on 100% quality cotton for a vibrant finish and all-day comfort.</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image src={image2} alt='stepsimage1'/>
            <h5 className='text-white font-bold bg-teal-500 p-2 rounded-full'>02</h5>
            <h4 className='text-3xl font-bold'>Custom Artwork</h4>
            <p className='text-sm font-light text-gray-900'>Printed on 100% quality cotton for a vibrant finish and all-day comfort.</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image src={image3} alt='stepsimage1'/>
            <h5 className='text-white font-bold bg-teal-500 p-2 rounded-full'>03</h5>
            <h4 className='text-3xl font-bold'>Ship It For You</h4>
            <p className='text-sm font-light text-gray-900'>Printed on 100% quality cotton for a vibrant finish and all-day comfort.</p>
        </div>
      </div>
    </div>
  )
}