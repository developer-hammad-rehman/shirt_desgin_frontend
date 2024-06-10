"use client"
import Image from 'next/image'
import React from 'react'
import logo from "../../../public/logo.png"
import { Facebook, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const path = usePathname()
  if (path.startsWith("/demos/men-tshirt/3d") || path.startsWith("/demos/women-tshirt/3d")) {
    return null;
  } 
  return (
    <footer className='w-full  flex flex-col gap-10  mt-24 py-10 bg-white border  px-4'>
        <div className='flex flex-wrap lg:flex-nowrap gap-4 justify-center lg:justify-between items-center w-full'>
        <div className='flex flex-col justify-center gap-6 items-center'>
            <Image src={logo} alt='logo' className='w-52 sm:w-60'/>
            <p className='w-40'>Distrusts delighted Excuse few the remain highly feebly add people manner say. It high at my mind by roof.</p>
            <div className='flex gap-4'>
            <Facebook className='cursor-pointer'/>
            <Twitter className='cursor-pointer'/>
            <Youtube className='cursor-pointer'/>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
            <h4 className='text-3xl font-bold'>Get In Touch</h4>
            <p>hello@teecheap.com</p>
            <p className='font-bold'>+02 036 038 6686</p>
            <p>25 Lipsum Place, Suite 0960 Las Vegas</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
            <h4 className='text-3xl font-bold'>Information</h4>
            <Link href={'/shop'} className='hover:text-teal-200'>Shop Now</Link>
            <Link href={'/shop'} className='hover:text-teal-200'>Shop Now</Link>
            <Link href={'/shop'} className='hover:text-teal-200'>Shop Now</Link>
        </div>
        </div>
        <div className='border-t border-gray-800 py-5'>
        © 2024 TeeCheap. All rights reserved.
        </div>
    </footer>
  )
}
