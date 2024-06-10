import Image from 'next/image'
import React from 'react'
import computerImage from "../../../public/computer.png"
import { Check } from 'lucide-react'

export default function Features() {
  return (
    <div className='w-full flex flex-wrap gap-1 md:flex-nowrap justify-center items-center bg-white py-8'>
        <Image className='w-1/2' src={computerImage} alt='computerImage'/>
        <div className='w-1/2 flex flex-col justify-center items-center gap-6'>
          <h5 className='text-4xl font-bold text-gray-700'>You’ve Got The Ideas, We’ve Got The Tools</h5>
          <p className='text-lg font-light text-gray-700'>T-shirt Printing for Everyone. Get a headstart with free design templates you can customize in a few clicks.</p>
          <ul className='flex flex-col gap-5'>
            <li className='flex gap-4'><span><Check size={35} className='text-white bg-teal-500 rounded-full py-2'/></span>Top quality prints using the latest technology</li>
            <li className='flex gap-4'><span><Check size={35} className='text-white bg-teal-500 rounded-full py-2'/></span>Top quality prints using the latest technology</li>
            <li className='flex gap-4'><span><Check size={35} className='text-white bg-teal-500 rounded-full py-2'/></span>Top quality prints using the latest technology</li>
          </ul>
        </div>
    </div>
  )
}
