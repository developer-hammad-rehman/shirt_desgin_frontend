import Image from 'next/image'
import React from 'react'
import image from "../../../public/enjoy.png"
import Link from 'next/link'

export default function Enjoy() {
  return (
    <div className='bg-white'>
        <div className='bg-gradient-to-t from-orange-100 to-yellow-50 px-6 tracking-wider flex flex-wrap lg:flex-nowrap justify-center items-center gap-6'>
            <div className='flex flex-col gap-5'>
            <h5 className='text-5xl font-bold text-gray-900'>Enjoy up your vacations in the best T-shirts</h5>
            <p className='text-lg font-light text-gray-900'>T-shirts that keep you moving.</p>
           <div className='flex gap-4'>
           <Link href={'/shop'} className='bg-gray-950 font-bold text-white w-fit p-4 rounded-lg'>Shop Now</Link>
            <Link href={'/contact'} className='bg-white font-bold text-gray-950 w-fit p-4 border-2 border-gray-950 rounded-lg'>Contact Us</Link>
           </div>
            </div>
            <Image src={image} alt='enjoy section image' className='h-80 w-80'/>
        </div>
    </div>
  )
}
