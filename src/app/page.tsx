import React from 'react'
import Hero from './components/Hero'
import Info from './components/Info'
import StandOut from './components/StandOut'
import Features from './components/Features'
import Steps from './components/Steps'
import Enjoy from './components/Enjoy'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Info/>
      <StandOut/>
      <Features/>
      <Steps/>
      <Enjoy/>
    </main>
  )
}
