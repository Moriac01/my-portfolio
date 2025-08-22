'use client'

import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { Button } from './ui/button'

const headers = () => {
  return (
    <header className='py-6 fixed left-0 sm:bg-black bg-accent-foreground right-0 z-50 hover:scroll- sm:py-8   dark:bg-gray-900  dark:text-white'>
      <div className='container flex justify-between items-center'>
        <Link href="/">
          <h1 className=' font-extrabold font-serif text-2xl sm:text-3xl'>Mor<span className=' text-cyan-500 font-extrabold'>iac</span> </h1>
        </Link>

        
        <div className='hidden lg:flex gap-45 items-center'>
          <Nav/>

          <Link href="/contact">
            <Button className='bg-cyan-500'>contact me</Button>
          </Link>
        </div>

        <div className="lg:hidden ">
          <MobileNav/>
        </div>

      </div>
    </header>
  )
}

export default headers