import Image from 'next/image'
import React from 'react'
import img1 from "../../../public/stand1.png"
import img2 from "../../../public/stand2.png"
import img3 from "../../../public/stand3.png"

export default function StandOut() {
  return (
    <div className='flex flex-wrap lg:flex-nowrap justify-center bg-white w-full my-10 py-32 items-center px-6'>
        <h1 className='text-2xl md:text-4xl w-full lg:w-1/2 font-bold text-gray-900 font-serif '>Stand Out From The Crowd With Custom T-shirts</h1>
        <div className='flex flex-col justify-center items-center gap-5'>
            <Image src={img1} alt='stand1'/>
            <h6 className='text-lg font-bold'>Top Quality</h6>
            <p>Printed on 100% quality cotton for a vibrant finish and all-day comfort.</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
            <Image src={img2} alt='stand1'/>
            <h6 className='text-lg font-bold'>Mix And Match</h6>
            <p>Printed on 100% quality cotton for a vibrant finish and all-day comfort.</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
            <Image src={img3} alt='stand1'/>
            <h6 className='text-lg font-bold'>Shipping Worldwide</h6>
            <p>Printed on 100% quality cotton for a vibrant finish and all-day comfort.</p>
        </div>
    </div>
  )
}
