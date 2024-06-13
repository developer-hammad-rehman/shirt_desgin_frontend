"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import Image from "next/image"
import { poloShirtSticker } from '@/data/models';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

export default function Logo_3d() {
    const [logo , setLogo] = useState("dog")
    const {push} = useRouter()
    const handleClick = () => {
      toast({
        title:"Order Has Placed",
        description:"Your Order Has Placed"
      })
      push("/")
    }
  return (
    <div className='w-full flex flex-wrap lg:flex-nowrap   bg-[#2D2E32] h-full lg:h-screen'>
       <div className='w-full lg:w-1/2 text-white gap-5 py-5 text-center flex flex-col justify-center items-center h-full'>
       <h1 className="text-4xl font-bold">Teacheap Custom store</h1>
       <h4 className="text-2xl font-bold">Select Your Pattern</h4>
         <div className='w-80 flex justify-center gap-6 flex-wrap items-center bg-black/25 py-5 px-3'>
         <button  onClick={() => setLogo("dog")}><Image className='w-20 h-20' src={'/womenlogo1.png'} alt='logoImage' width={100} height={100}/></button>
         <button  onClick={() => setLogo("girl")}><Image className='w-20 h-20' src={'/womenlogo2.png'} alt='logoImage' width={100} height={100}/></button>
         <button  onClick={() => setLogo("panada")}><Image className='w-20 h-20' src={'/womenlogo3.png'} alt='logoImage' width={100} height={100}/></button>
         </div>
          <div className='flex gap-4'>
          <button  className='text-sm lg:text-xl font-bold p-3 bg-black rounded-xl'>Next</button>
          <Link href={'/demos/women-tshirt/3d/upload'} className='text-sm lg:text-xl font-bold p-3 bg-black rounded-xl'>Add You Custom Sticker</Link>
          </div>
       </div>
       <div className='w-full lg:w-1/2 py-8'>
        {/* @ts-ignore */}
         <Spline scene={poloShirtSticker[logo]}/>
       </div>
    </div>
  )
}
