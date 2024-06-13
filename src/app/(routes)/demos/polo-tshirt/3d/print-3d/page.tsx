"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import {  poloShirtPrint } from '@/data/models'

export default function Print_3d() {
    const [print , setPrint] = useState("gray_white")
  return (
    <div className='w-full flex flex-wrap lg:flex-nowrap   bg-[#2D2E32] h-full lg:h-screen'>
       <div className='w-full lg:w-1/2 text-white gap-5 py-5 text-center flex flex-col justify-center items-center h-full'>
       <h1 className="text-4xl font-bold">Teacheap Custom store</h1>
       <h4 className="text-2xl font-bold">Select Your Pattern</h4>
         <div className='w-52 flex justify-center gap-6 flex-wrap items-center bg-black/25 py-5 px-3'>
         <button className='bg-gradient-to-t from-gray-500 to-white   p-6' onClick={() => setPrint("gray_white")}/>
         <button className='bg-gradient-to-tr from-teal-600 to-blue-500 p-6' onClick={() => setPrint("actual")}/>
         <button className='bg-gradient-to-b from-gray-950 to-white  p-6' onClick={() => setPrint("black_white")}/>
         <button className='bg-gradient-to-r from-blue-300 to-teal-300  p-6' onClick={() => setPrint("blue_shade")}/>
         </div>
         <Link href={'/demos/polo-tshirt/3d/logo-3d'} className='text-xl font-bold p-5 bg-black rounded-xl'>Next</Link>
       </div>
       <div className='w-full lg:w-1/2 py-8'>
        {/* @ts-ignore */}
         <Spline scene={poloShirtPrint[print]}/>
       </div>
    </div>
  )
}
