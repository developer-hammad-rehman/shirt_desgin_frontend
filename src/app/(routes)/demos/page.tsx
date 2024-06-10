import React from 'react'
import image1 from "../../../../public/1demo.png"
import image2 from "../../../../public/2demo.png"
import Image from 'next/image'
import Link from 'next/link'

export default function Demo() {
  return (
    <div className='w-full flex gap-5  px-5 items-center'>
        <Link href={'/demos/men-tshirt'} className='bg-white p-6 hover:bg-slate-400 flex flex-col justify-center items-center'>
            <Image src={image1} alt='demoimage1'/>
            <p className='text-xl font-bold'>Men Tshirt</p>
        </Link>
        <Link href={'/demos/women-tshirt'} className='bg-white p-6 hover:bg-slate-400 flex flex-col justify-center items-center'>
            <Image src={image2} alt='demoimage2'/>
            <p className='text-xl font-bold'>Women Tshirt</p>
        </Link>
    </div>
  )
}
