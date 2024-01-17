import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full z-[10]'>
        <div className='flex flex-wrap justify-between max-w-7xl mx-auto px-8 lg:px-24 py-5'>
          <div>
            <h1 className='text-xl font-semibold'>PT BAS</h1>
          </div>
          <div className='hidden md:flex flex-wrap gap-8 '>
            <Link className='hover:underline' href="/">Home</Link>
            <Link className='hover:underline' href="/portfolio">Portfolio</Link>
            <Link className='hover:underline' href="/projects">Projects</Link>
            <Link className='hover:underline' href="/contact">Contact</Link>
          </div>
          <div className='flex items-center px-4 md:hidden'>
            <button id='hamburger' name='hamburger' type='button' className='block absolute right-4'>
              <span className='w-[30px] h-[2px] my-2 block bg-[#0F1957] transition duration-500 ease-out origin-top-left'></span>
              <span className='w-[30px] h-[2px] my-2 block bg-[#0F1957] transition duration-500 ease-out'></span>
              <span className='w-[30px] h-[2px] my-2 block bg-[#0F1957] transition duration-500 ease-out origin-bottom-left'></span>
            </button>
            <div id='nav-menu' className='bg-[#FCFCFC] backdrop-filter backdrop-blur-xl hidden absolute z-[10] py-5 shadow-lg rounded-lg w-full right-0 top-full'>
              <div className='flex flex-col gap-4 px-8'>
                <Link className='hover:underline' href="/">Home</Link>
                <Link className='hover:underline' href="/portfolio">Portfolio</Link>
                <Link className='hover:underline' href="/projects">Projects</Link>
                <Link className='hover:underline' href="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
        <script src='/script.js'></script>
    </nav>

  )
}

export default Navbar