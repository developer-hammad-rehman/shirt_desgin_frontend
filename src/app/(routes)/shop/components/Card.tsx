import { ICardProps } from '@/utlis'
import Image from 'next/image'
import React from 'react'

export default function Card({image , price , title}:ICardProps) {
  return (
    <div className='w-60 text-center flex flex-col justify-center items-center gap-4 cursor-pointer hover:scale-110 hover:bg-white hover:shadow-2xl rounded-2xl transition-all duration-1000 px-4 py-5'>
        <Image className='rounded-xl w-full' src={image} alt='cardImage' width={100} height={100}/>
        <h4 className='text-xl font-bold'>{title}</h4>
        <span className='font-bold'>${price}</span>
    </div>
  )
}
