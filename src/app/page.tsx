// import React from 'react'
// import Hero from './components/Hero'
// import Info from './components/Info'
// import StandOut from './components/StandOut'
// import Features from './components/Features'
// import Steps from './components/Steps'
// import Enjoy from './components/Enjoy'

// export default function Home() {
//   return (
//     <main>
//       <Hero/>
//       <Info/>
//       <StandOut/>
//       <Features/>
//       <Steps/>
//       <Enjoy/>
//     </main>
//   )
// }

import Spline from '@splinetool/react-spline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col w-full h-full px-4 bg-orange-50'>
      <header className='flex w-full py-8 justify-between items-center'>
        <Image className='w-40' src={"/logo.png"} alt='logo' width={100} height={100}/>
        <Link className='bg-black p-4 font-bold text-white rounded' href={'/auth'}>Login</Link>
      </header>
  <div className='flex w-full h-screen'>
  <div className='flex flex-col h-full justify-center items-center gap-5 flex-1'>
        <h1 className='text-black font-bold text-7xl'>Let's Do It.</h1>
        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, hic? Nemo ipsa ipsum eligendi facere quos dolor animi magni, blanditiis, cum ullam, odio voluptatem rem doloremque et vitae quibusdam facilis.</p>
        <Link href={"/demos"} className='bg-black p-3 font-bold text-white'>Shop Now</Link>
      </div>
      <Spline className='hidden lg:flex lg:flex-1' scene='https://prod.spline.design/N5SnlGH6mheqsN16/scene.splinecode'/>
  </div>
    </div>
  )
}
