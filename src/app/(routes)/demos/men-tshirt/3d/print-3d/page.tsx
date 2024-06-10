"use client";
import Spline from '@splinetool/react-spline'
import Link from 'next/link';
import React, { useState } from 'react'

const data = {
    gradient:<Spline scene='https://prod.spline.design/gjaJ1FRkWaCFbjwD/scene.splinecode '/>,
    desgin:<Spline scene='https://prod.spline.design/RVS02NNwfMaBY-cv/scene.splinecode'/>,
    tiger:<Spline scene='https://prod.spline.design/dvEtv72rCaYLW2D7/scene.splinecode'/>,
    shadow:<Spline scene='https://prod.spline.design/6hJgvrthCH3JZ3Oj/scene.splinecode'/>,
    black_desgin:<Spline scene='https://prod.spline.design/KgxsvartgDiO6-Mx/scene.splinecode'/>
}

export default function Print_3d() {
    const [pattern  , setPattern] = useState("gradient")
  return (
    <div className='w-full flex bg-[#2D2E32] h-screen'>
        <div className='w-1/2 h-full gap-7 text-white flex flex-col justify-center items-center'>
        <h1 className="text-4xl font-bold">Teacheap Custom store</h1>
        <h4 className="text-2xl font-bold">Select Your Pattern</h4>
         <div className='w-60 bg-black/25 p-4 flex justify-center items-center flex-wrap gap-5'>
         <button className='bg-gradient-to-t from-purple-200 to-blue-300 p-6' onClick={() => setPattern("gradient")}/>
         <button className='bg-gradient-to-t from-black to-gray-100 p-6' onClick={() => setPattern("desgin")}/>
         <button className='bg-gradient-to-t from-white to-gray-500 p-6' onClick={() => setPattern("tiger")}/>
         <button className='bg-gradient-to-t from-black to-purple-500 p-6' onClick={() => setPattern("shadow")}/>
         <button className='bg-gradient-to-t from-black to-gray-500 p-6' onClick={() => setPattern("black_desgin")}/>
         <Link href={'/demos/men-tshirt/3d/neck'} className="text-white bg-black font-bold px-7 py-3 rounded-xl">Next</Link>
         </div>
        </div>
        <div className='w-1/2'>
        {
            // @ts-ignore
        data[pattern]
        }
        </div>
    </div>
  )
}
