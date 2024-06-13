"use client";

import { poloShirtColor } from '@/data/models';
import Spline from '@splinetool/react-spline'
import Link from 'next/link';
import React, { useState } from 'react'

export default function Customize_3d_Color() {
    const [color , setColor] = useState<string>("white")
  return (
    <div className='w-full flex flex-wrap lg:flex-nowrap   bg-[#2D2E32] h-full lg:h-screen'>
       <div className='w-full lg:w-1/2 text-white gap-5 py-5 text-center flex flex-col justify-center items-center h-full'>
       <h1 className="text-4xl font-bold">Teacheap Custom store</h1>
       <h4 className="text-2xl font-bold">Select Your Pattern</h4>
         <div className='w-52 flex justify-center gap-6 flex-wrap items-center bg-black/25 py-5 px-3'>
         <button className='bg-white rounded-full p-3' onClick={() => setColor("white")}/>
         <button className='bg-red-500 rounded-full p-3' onClick={() => setColor("red")}/>
         <button className='bg-[#41DC67] rounded-full p-3' onClick={() => setColor("41DC67")}/>
         <button className='bg-[#17286A] rounded-full p-3' onClick={() => setColor("17286A")}/>
         <button className='bg-[#EA3481] rounded-full p-3' onClick={() => setColor("EA3481")}/>
         <button className='bg-[#09A992] rounded-full p-3' onClick={() => setColor("09A992")}/>
         </div>
         <Link href={'/demos/polo-tshirt/3d/print-3d'} className='text-xl font-bold p-5 bg-black rounded-xl'>Next</Link>
       </div>
       <div className='w-full lg:w-1/2 py-8'>
        {/* @ts-ignore */}
         <Spline scene={poloShirtColor[color]}/>
       </div>
    </div>
  )
}
