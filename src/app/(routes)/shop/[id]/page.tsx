"use client";
import { IParamsShop } from '@/utlis';
import { Star } from 'lucide-react';
import { useCookies } from 'next-client-cookies';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

export default function View_Page({params:{id}}:{params:IParamsShop}) {
    const searchParams = useSearchParams()
    const title = searchParams.get("title")
    const price = searchParams.get("price")
    const image = searchParams.get("image") as string
    const {push} = useRouter()
    const cookies = useCookies()
    const token = cookies.get("refresh_token")
    const handleClick = async () => {
      const id  = parseInt(localStorage.getItem("id") as string)
      const response = await (await fetch("/api/place-order", {
        method:"POST",
        headers:{
          'Authorization': `Bearer ${token}`,
          "Content-Type":"application/json"
        },
        body:JSON.stringify({item:title , price: price , user_id:id})
      })).json()
      console.log(response)
      push("/card")
    }
  return (
    <div className='flex flex-wrap lg:flex-nowrap gap-5 justify-center items-center lg:items-start bg-white my-6  w-full h-full py-6 sm:px-4'>
    <Image src={image} alt='demoImage' className='w-1/2' width={100} height={100}/>
    <div className='w-1/2 flex flex-col gap-5'>
        <h4 className='text-xl sm:text-4xl font-bold'>${price}</h4>
        <h3 className='text-xl sm:text-5xl font-bold'>{title}</h3>
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
        <h4 className='text-xl font-bold'>Size</h4>
        <div className='flex gap-2'>
            <button className='text-sm bg-gray-200 rounded-lg p-2 font-bold'>2XL</button>
            <button className='text-sm bg-gray-200 rounded-lg p-2 font-bold'>3XL</button>
            <button className='text-sm bg-gray-200 rounded-lg p-2 font-bold'>XL</button>
            <button className='text-sm bg-gray-200 rounded-lg p-2 font-bold'>L</button>
        </div>
       <div className='flex gap-2'>
       <button  className='bg-gray-900 rounded-xl font-bold text-white p-6' onClick={handleClick}>Add to Card</button>
       <Link href={'/demos/men-tshirt/3d'} className='bg-gray-100 rounded-xl font-bold text-black p-6'>View In 3d</Link>
       </div>
    </div>
</div>
  )
}