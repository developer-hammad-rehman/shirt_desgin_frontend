"use client"
import Spline from '@splinetool/react-spline'
import Image from 'next/image'
import React from 'react'
import baner from "../../../public/banner-1-1.png"
import safiy from "../../../public/banner-1-percent.jpg"
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
  <main className='h-screen'>
    <Spline scene="https://prod.spline.design/sNThe9pugjElq8Q9/scene.splinecode" className='absolute -z-50'/>
    <div className='relative -z-50 w-full flex  justify-center items-center h-full'>
      <div className='flex flex-col justify-center w-full md:w-1/2 px-3 items-center gap-3'>
      <h1 className='text-3xl lg:text-6xl font-bold text-gray-800'>T-Shirt <span className='text-teal-300 text-3xl  lg:text-6xl font-bold'>Printing</span></h1>
      <h1 className='text-3xl lg:text-6xl font-bold text-gray-800'><Typewriter words={["Make Simple" , "Make Easy"]} loop={true}/></h1>
      <h1 className='text-3xl lg:text-6xl font-bold text-gray-800'>For Everyone</h1>
      <p className=' font-bold text-lg text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellat debitis obcaecati impedit ea nihil ratione veritatis quasi doloribus, sit omnis placeat. Ipsam praesentium nisi rem aperiam earum, corporis qui. Sit aperiam laudantium ad quaerat odit hic magni reiciendis cumque.</p>
      <button className='bg-teal-200  p-4 rounded-md font-bold text-white'>Get Started</button>
      </div>
      <div className='w-1/2 hidden lg:flex flex-col  justify-center items-end gap-5'>
        <div className='bg-orange-200 text-orange-200 p-72 blur-xl rounded-full absolute -z-50'>diji</div>
        <Image src={baner} alt='logo' className='h-full w-96 absolute -z-40'/>
      <div className='relative z-50 w-40 bg-white rounded-lg flex flex-col gap-5 font-bold text-xl justify-center items-center'>
      <Image src={safiy} alt='banner'/> 
       <h3 className='text-center'>Customer Satisfaction</h3>
      </div>
      </div>
    </div>
  </main>
  )
}
