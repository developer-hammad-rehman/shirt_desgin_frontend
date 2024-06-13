"use client"
import { ToastAction } from '@/components/ui/toast'
import { toast } from '@/components/ui/use-toast'
import { Cloud } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'

export default function Upload() {
    const ref = useRef()
    const {push} = useRouter()
    const handleSumbit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // @ts-ignore
        const fileList = ref.current.files
        console.log(fileList[0]);
        toast({
            title:"Your Order has Sucessfully Placed",
            description:"Your Order has placed with custom sticker",
        })
        push('/')
    }
  return (
    <div className="h-screen flex w-full bg-[#2D2E32] justify-center items-center">
        <form onSubmit={handleSumbit} className='bg-black/30 p-10 flex flex-col gap-7 justify-center items-center'>
            <label htmlFor="file_input" className='border-2 border-dashed p-10 sm:p-32'><Cloud size={100} className='text-white'/></label>
             {/* @ts-ignore */}
            <input ref={ref} type="file" className='hidden' id='file_input' multiple={false} accept='.png'/>
            <button className='bg-gray-900 text-white font-bold p-5'>Upload File</button>
        </form>
    </div>
  )
}

