import Spline from '@splinetool/react-spline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Neck() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-5 py-10  bg-[#2D2E32] h-full px-5'>
    <h1 className="text-4xl  text-center font-bold text-white">Teacheap Custom store</h1>
    <h4 className="text-2xl text-center  font-bold text-white">Select Your Collar</h4>
      <div className='w-96 bg-black/25 p-7 flex flex-wrap justify-center items-center gap-4'>
      <Image src={"/collar1.png"} className='cursor-pointer rounded-2xl' alt='collar' width={120} height={120}/>
      <Image src={'/collar2.png'} className='cursor-pointer rounded-2xl' alt='collar' width={120} height={120}/>
      <Image src={'/collar3.png'} className='cursor-pointer rounded-2xl' alt='collar' width={120} height={120}/>
      <Image src={'/collar4.png'} className='cursor-pointer rounded-2xl' alt='collar' width={120} height={120}/>
      <Image src={'/collar5.png'} className='cursor-pointer rounded-2xl' alt='collar' width={120} height={120}/>
      </div>
      <Link href={'/demos/men-tshirt/3d/logo-3d'} className="text-white bg-black font-bold px-7 py-3 rounded-xl">Next</Link>
    {/* <div className='w-1/2 h-screen'>
    <Spline  scene="https://prod.spline.design/dwBBpWRd7WUZovva/scene.splinecode"/>
    </div> */}
    </div>
  )
}
