"use client";

import Spline from '@splinetool/react-spline'
import Image from 'next/image';
import React, { useState } from 'react'
import logo1 from "../../../../../../../public/1.png"
import logo2 from "../../../../../../../public/2.png"
import logo3 from "../../../../../../../public/3.png"
import Link from 'next/link';


const logoData = {
    car : <Spline scene='https://prod.spline.design/UuayYzqlA2WMZkxX/scene.splinecode'/>,
    additas : <Spline scene='https://prod.spline.design/qihdFsNX2TdEIE5V/scene.splinecode'/>,
    fashion_logo:<Spline scene='https://prod.spline.design/y0S1Wxr5H1X8cT0X/scene.splinecode'/>
}

export default function Logo_3d() {
  const [logo , setLogo] = useState("car")
  return (
    <div className='w-full flex flex-wrap lg:flex-nowrap justify-center items-center gap-3 h-full py-6 lg:h-screen  bg-[#2D2E32]'>
        <div className=' w-full lg:w-1/2 flex flex-col gap-2 justify-center items-center h-full'>
        <h1 className="text-4xl  text-center font-bold text-white">Teacheap Custom store</h1>
    <h4 className="text-2xl text-center  font-bold text-white">Select Your Sticker</h4>
        <div className='bg-black/25  w-80 p-5 flex  flex-wrap justify-center items-center gap-3'>
           <button onClick={() => setLogo("fashion_logo")}><Image className='rounded-full w-24' src={logo1} alt='logoImage'/></button>
           <button onClick={() => setLogo("additas")}><Image className='rounded-full w-24' src={logo2} alt='logoImage'/></button>
           <button onClick={() => setLogo("car")}><Image className='rounded-full w-24' src={logo3} alt='logoImage'/></button>
        </div>
           <div className="flex gap-3">
           <Link href={'/demos/men-tshirt/3d/logo-3d'} className="text-white bg-black font-bold px-7 py-3 rounded-xl">Next</Link>
           <Link href={'/demos/men-tshirt/3d/logo-3d/upload'} className="text-white bg-black font-bold px-7 py-3 rounded-xl">Add Your Own</Link>
           </div>
        </div>
        <div className='w-full lg:w-1/2 h-full bg-[#2D2E32]'>
        {
          // @ts-ignore
          logoData[logo]
        }
        </div>
    </div>
  )
}
