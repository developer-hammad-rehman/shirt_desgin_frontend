"use client";
import React, { useContext } from 'react'
import image from "../../../../../public/2demo.png"
import Image from 'next/image'
import { Star } from 'lucide-react'
import Link from 'next/link'
import { UserInfo } from '@/context/UserContext';
import {useCookies} from "next-client-cookies"
import { useRouter } from 'next/navigation';

export default function Men_Shirt() {
  // const {id} = useContext(UserInfo)
  const cookies = useCookies()
  const token = cookies.get("refresh_token")
  const {push} = useRouter()
  const handleClick = async () => {
    const id  = parseInt(localStorage.getItem("id") as string)
    const response = await (await fetch("/api/place-order", {
      method:"POST",
      headers:{
        'Authorization': `Bearer ${token}`,
        "Content-Type":"application/json"
      },
      body:JSON.stringify({item:"women-tshirt" , price: "200$" , user_id:id})
    })).json()
    console.log(response)
    push('/card')
  }
  return (
    <div className='flex flex-wrap lg:flex-nowrap gap-5 justify-center items-center lg:items-start bg-white my-6  w-full h-full py-6 sm:px-4'>
        <Image src={image} alt='demoImage' className='w-1/2'/>
        <div className='w-1/2 flex flex-col gap-5'>
            <h4 className='text-xl sm:text-4xl font-bold'>$27.00-$29.00</h4>
            <h3 className='text-xl sm:text-5xl font-bold'>Women TShirt</h3>
            <div className='flex gap-4'>
            <Star className='text-yellow-400'/>
            <span>4.9 Rating</span>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, nulla? Molestias optio officiis, facere tenetur mollitia, cum minima enim id officia eum delectus corrupti porro animi repudiandae exercitationem, cumque quisquam.</p>
            <span className='text-xl font-bold underline'>Color</span>
            <div className='flex gap-4 items-center'>
            <div className='bg-black rounded-full p-4 w-fit hover:border-4 hover:border-gray-500 cursor-pointer'/>
            <div className='bg-red-500 rounded-full p-4 w-fit hover:border-4 hover:border-gray-500 cursor-pointer'/>
            <div className='bg-pink-600 rounded-full p-4 w-fit hover:border-4 hover:border-gray-500 cursor-pointer'/>
            <div className='bg-orange-600 rounded-full p-4 w-fit hover:border-4 hover:border-gray-500 cursor-pointer'/>
            <div className='bg-purple-600 rounded-full p-4 w-fit hover:border-4 hover:border-gray-500 cursor-pointer'/>
            </div>
           <div className='flex gap-2'>
           <button  className='bg-gray-900 rounded-xl font-bold text-white p-6' onClick={handleClick}>Add to Card</button>
           <Link href={'/demos/women-tshirt/3d'} className='bg-gray-100 rounded-xl font-bold text-black p-6'>Customize In 3d</Link>
           </div>
        </div>
    </div>
  )
}
 