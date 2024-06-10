"use client";
import { UserInfo } from '@/context/UserContext';
import { IOrdersData } from '@/utlis';
import { useCookies } from 'next-client-cookies';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'


export default function Cart() {
    const [orders , setOrders] = useState<IOrdersData[] | null>(null)
    // const {id} = useContext(UserInfo)
    const cookies = useCookies()
    const token = cookies.get("refresh_token")
    useEffect(() =>{
        if (typeof window != undefined) {
            const id  = parseInt(localStorage.getItem("id") as string)
            fetch(`/api/get-order/${id}`,{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            }).then((val) => val.json().then((val) => {
                console.log(val);
                setOrders(val)
            }))
        }
    })
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-10'>
        <h5 className='text-4xl font-bold bg-gray-100 text-black text-center p-7 w-full'>Shopping Cart</h5>
        <div className='flex bg-gray-400 justify-evenly items-center w-full px-4 py-5'>
            <h3 className='text-xl text-white font-bold'>Item</h3>
            <h3 className='text-xl text-white font-bold'>Price</h3>
        </div>
        <div className='flex flex-col w-full justify-center items-center gap-6'>
            {
                orders?.map((val) =>(
                    <div key={val.id} className='w-full flex justify-evenly items-center bg-white p-5 '>
                        <h1 className='text-xl font-bold'>{val.item}</h1>
                        <h1 className='text-xl font-bold'>{val.price}</h1>
                    </div>
                ))
            }
        </div>
        <Link href={'/shop'} className='bg-black text-white font-bold p-5 rounded-full'>Continoue Shopping</Link>
    </div>
  )
}
