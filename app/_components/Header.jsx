import React from 'react'
import Navigation from './Navigation'
import Logo from './Logo'

export default function Header() {
  return (
    <header>
        <div className='flex  items-center justify-around bg-[#d2d8e8] h-[90px] text-blue-600 '>
        <Logo/>
      <Navigation/>

        </div>

    </header>
  )
}
