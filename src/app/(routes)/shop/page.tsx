import Link from 'next/link'
import React from 'react'
import { IShopData } from '@/utlis'
import Card from './components/Card'


const data : IShopData[] = [
    { 
        id : 1,
        image:"/1.jpg",
        title:"Adult Quantity Tee",
        price:26.00
    },
    { 
        id : 2,
        image:"/2.jpg",
        title:"All Over Print",
        price:29.00
    },
    { 
        id : 3,
        image:"/3.jpg",
        title:"AOP Bomber Jacket",
        price:30.00
    },
    { 
        id : 4,
        image:'/4.jpg',
        title:"AOP Cut And Sew Tee",
        price:40.00
    },
]

export default function Shop() {
  return (
    <div className='w-full h-full'>
    <h1 className='text-4xl font-bold text-gray-950 text-center py-10'>Shop</h1>
    <div className='flex w-full justify-center items-center text-xl font-bold py-8'>
    <Link href={'/'} className='text-gray-500 hover:text-teal-300'>Home-</Link>
    <span>Shop</span>
    </div>
    <div className='bg-white p-4 flex flex-col gap-8 py-10'>
        <h6 className='font-semibold'>Showing 1–12 of 35 results</h6>
        <div className='flex flex-wrap justify-center items-center w-full gap-8'>
        {
            data.map((val , i) =>(
                <Link href={`/shop/${val.id}?title=${val.title}&price=${val.price}&image=${val.image}`} key={val.id}>
                    <Card image={val.image} price={val.price} title={val.title}/>
                </Link>
            ))
        }
        </div> 
    </div>
    </div>
  )
}
 