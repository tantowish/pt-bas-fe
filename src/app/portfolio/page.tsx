'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';

interface portfolio {
  name: string,
  description: string,
  image: string,
  link: string
}

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState<portfolio[]>([])

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const response = await fetch('/data/portfolio.json')
        const data: portfolio[] = await response.json()
        setPortfolio(data)
      }catch(error){
        console.error('Error fetching data: ', error)
      }
    }
    fetchData()
  }, [])
  return (
    <div className='pt-16 lg:pt-8'>
        <div className="max-w-7xl p-8 lg:px-24 lg:py-24 md:px-16 md:py-16 mx-auto">
            <div className="text-start">
                <h4 className="text-slate-600 mb-2">PT BAS - Portfolio</h4>
                <h1 className="text-slate-900 text-3xl lg:text-5xl font-semibold">Portfolio</h1>
            </div>
            <div className='flex flex-wrap md:justify-between justify-center py-8 lg:py-16 gap-8 lg:gap-16'>
              {portfolio.map((item)=>(
                <div key={item.name} className='max-w-[330px] lg:max-w-[500px] bg-[#FCFCFC] shadow-lg hover:-translate-y-1 hover:shadow-2xl transition duration-500 ease-in-out'>
                  <Link href={item.link}>
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      width={825}
                      height={450}
                    />
                  </Link>
                  <div className='p-4 lg:px-8 w-full'>
                    <Link href={item.link} className='w-fit font-semibold text-lg text-slate-900'>
                      {item.name}
                    </Link>
                    <div className='flex flex-wrap items-end mt-2'>
                      <div className='w-5/6'>
                        <p className='text-sm lg:text-base text-slate-600'>{item.description}</p>
                      </div>
                      <div className='w-1/6 justify-end flex'>
                        <Link
                        href={item.link}>
                          <GoArrowRight
                            className='md:w-6 md:h-6 h-5 w-5'
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio
