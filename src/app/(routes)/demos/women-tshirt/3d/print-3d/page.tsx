"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { womenTshirtPrint } from '@/data/models'

export default function Print_3d() {
    const [print , setPrint] = useState("gradient")
  return (
    <div className='w-full flex flex-wrap lg:flex-nowrap   bg-[#2D2E32] h-full lg:h-screen'>
       <div className='w-full lg:w-1/2 text-white gap-5 py-5 text-center flex flex-col justify-center items-center h-full'>
       <h1 className="text-4xl font-bold">Teacheap Custom store</h1>
       <h4 className="text-2xl font-bold">Select Your Pattern</h4>
         <div className='w-52 flex justify-center gap-6 flex-wrap items-center bg-black/25 py-5 px-3'>
         <button className='bg-gradient-to-t from-purple-500 to-green-200   p-6' onClick={() => setPrint("gradient")}/>
         <button className='bg-gradient-to-tr from-white to-gray-600 p-6' onClick={() => setPrint("block")}/>
         <button className='bg-gradient-to-tr from-orange-950 to-orange-500  p-6' onClick={() => setPrint("wood")}/>
         <button className='bg-gradient-to-r from-black to-white  p-6' onClick={() => setPrint("black_white")}/>
         <button className='bg-gradient-to-r from-red-600 to-yellow-200 p-6' onClick={() => setPrint("red_print")}/>
         </div>
         <Link href={'/demos/women-tshirt/3d/logo-3d'} className='text-xl font-bold p-5 bg-black rounded-xl'>Next</Link>
       </div>
       <div className='w-full lg:w-1/2 py-8'>
        {/* @ts-ignore */}
         <Spline scene={womenTshirtPrint[print]}/>
       </div>
    </div>
  )
}
