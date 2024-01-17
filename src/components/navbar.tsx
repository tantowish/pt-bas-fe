"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isRouting, setisRouting] = useState(false)
  const path = usePathname()
  const [prevPath, setPrevPath] = useState("/")

  useEffect(()=>{
      if(prevPath !== path){
          setisRouting(true)
      }
  }, [path, prevPath])

  useEffect(()=>{
      if(isRouting){
          setPrevPath(path)
          const timeout = setTimeout(()=>{
              setisRouting(false)
          }, 1200)

          return()=>clearTimeout(timeout)
      }
  }, [isRouting])

  const NavLinks = [
      {
        link: "/",
        name:"Home"
      },
      {
        link: "/portfolio",
        name:"Portfolio",
      },
      {
        link: "/projects",
        name:"Projects"
      },
      {
        link: "/contact",
        name:"Contact"
      },

  ]
  return (
    <nav className='fixed top-0 w-full z-[10]'>
        <div className='flex flex-wrap justify-between max-w-7xl mx-auto px-8 lg:px-24 py-5'>
          <div>
            <h1 className='text-xl font-semibold'>PT BAS</h1>
          </div>
          <div className='hidden md:flex flex-wrap gap-8 '>
            {isRouting}
            {NavLinks.map((nav)=>(
              <Link
               className={`hover:underline ${path === nav.link ? "underline" : "" }`}
               href={nav.link}>{nav.name}</Link>
            ))}
          </div>
          <div className='flex items-center px-4 md:hidden'>
            <button id='hamburger' name='hamburger' type='button' className='block absolute right-4'>
              <span className='w-[30px] h-[2px] my-2 block bg-[#0F1957] transition duration-500 ease-out origin-top-left'></span>
              <span className='w-[30px] h-[2px] my-2 block bg-[#0F1957] transition duration-500 ease-out'></span>
              <span className='w-[30px] h-[2px] my-2 block bg-[#0F1957] transition duration-500 ease-out origin-bottom-left'></span>
            </button>
            <div id='nav-menu' className='bg-[#FCFCFC] backdrop-filter backdrop-blur-xl hidden absolute z-[10] py-5 shadow-lg rounded-lg w-full right-0 top-full'>
              <div className='flex flex-col gap-4 px-8'>
              {isRouting}
              {NavLinks.map((nav)=>(
                <Link
                className={`hover:underline ${path === nav.link ? "underline" : "" }`}
                href={nav.link}>{nav.name}</Link>
              ))}
              </div>
            </div>
          </div>
        </div>
        <script async  src='/script.js'></script>
    </nav>

  )
}

export default Navbar