import React from 'react'
import image1 from "../../../../public/1demo.png"
import image2 from "../../../../public/2demo.png"
import image3 from "../../../../public/polo.png"
import Image from 'next/image'
import Link from 'next/link'

export default function Demo() {
  return (
    <div className='w-full flex gap-5 justify-center h-screen flex-wrap lg:flex-nowrap px-5 items-center'>
        <Link href={'/demos/men-tshirt'} className='bg-white p-6 hover:bg-slate-400 flex flex-col justify-center items-center'>
            <Image src={image1} alt='demoimage1'/>
            <p className='text-xl font-bold'>Men Tshirt</p>
            <Link href={'/demos/men-tshirt/3d'} className='text-white font-bold bg-black rounded p-4'>Customize In 3d</Link>
        </Link>
        <Link href={'/demos/women-tshirt'} className='bg-white p-6 hover:bg-slate-400 flex flex-col justify-center items-center'>
            <Image src={image2} alt='demoimage2'/>
            <p className='text-xl font-bold'>Women Tshirt</p>
            <Link href={'/demos/women-tshirt/3d'} className='text-white font-bold bg-black rounded p-4'>Customize In 3d</Link>
        </Link>
        <Link href={'/demos/polo-tshirt'} className='bg-white p-6 hover:bg-slate-400 flex flex-col justify-center items-center'>
            <Image src={image3} alt='demoimage3' className='w-60'/>
            <p className='text-xl font-bold'>Polo TShirt</p>
            <Link href={'/demos/polo-tshirt/3d'} className='text-white font-bold bg-black rounded p-4'>Customize In 3d</Link>
        </Link>
    </div>
  )
}
