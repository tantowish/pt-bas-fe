'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react'  
import { CarouselComp } from '@/components/carousel';

import PreLoader from '@/components/preLoader'

interface OngoingItem {
  id: number;
  img: string;
}

export default function Home() {

  const [onGoingData, setOngoingData] = useState<OngoingItem[]>([])

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await fetch('/data/ongoing.json')
        const data: OngoingItem[] = await response.json();
        setOngoingData(data)

      } catch(error){
        console.error('Error fetching data: ', error)
      }
    }
    fetchData()
  }, [])
  return (
    <main>
        <PreLoader/>
        <section className='pt-10 lg:pt-4'>
          <div className="max-w-7xl px-8 lg:px-24 lg:py-24 md:px-16 md:py-16 mx-auto">
              <div className="flex flex-wrap h-full items-center justify-center">
                  <div className="md:w-1/2 w-full md:pr-4 pr-0 py-16">
                      <h4 className="text-slate-600 mb-2 lg:text-2xl text-xl">PT Bintang Andalas Selatan</h4>
                      <h1 className="text-slate-900 text-3xl lg:text-5xl mb-5 lg:mb-8 font-semibold">Siap Membangun Impian Anda</h1>
                      <p className="text-slate-600 leading-relaxed md:mb-12 mb-8 text-sm lg:text-base">Kami menyediakan berbagai layanan <span className='font-bold text-[#0F1957]'>konstruksi</span>, mulai dari pembangunan rumah tinggal, gedung, hingga infrastruktur. Dengan tim yang berpengalaman dan berdedikasi, kami siap mewujudkan <span className='font-bold text-[#0F1957]'>impian Anda</span> untuk memiliki hunian atau bangunan yang nyaman dan berkualitas.
                      </p>
                      <div className="flex flex-wrap gap-4">
                          <Link
                          href='#about'>
                            <button type="button" className="lg:text-base text-sm py-2 px-5  text-white  bg-[#0F1957] hover:bg-[#29357E] transition ease-in-out duration-500 rounded-full">
                                EXPLORE MORE +
                            </button>
                          </Link>
                          <Link
                          href='/contact'>
                            <button type="button" className="lg:text-base text-sm py-2 px-5 text-white bg-[#FF8047] hover:bg-[#FF905E] transition ease-in-out duration-500 rounded-full">
                                CONTACT US  !
                            </button>
                          </Link>
                      </div>
                  </div>
                  
                  <div className="md:w-1/2 max-w-xl lg:pl-4 pr-0 group relative py-8 flex justify-center">
                      <div>
                          <Image 
                          src="/home/hero.png" 
                          alt="hero image"
                          width={600}
                          height={600}
                          className='drop-shadow-2xl'
                          />
                      </div>
                      <div className="absolute lg:left-16 lg:top-20 top-16 left-8">
                          <div className="border p-3 border-black rounded-full">
                              <svg 
                              className="group-hover:rotate-90 transition ease-in-out duration-700" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024"><path fill="currentColor" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"/><path fill="currentColor" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"/></svg>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section id='about'>
          <div className="max-w-5xl px-8 py-16 lg:px-24 md:px-16 lg:pt-24 md:py-16 lg:pb-32 md:pb-24 mx-auto text-center">
              <h4 className="text-slate-600 mb-2">01 - Tentang Kami</h4>
              <h1 className="text-slate-900 text-3xl lg:text-5xl mb-5 lg:mb-8 font-semibold">About Us</h1>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base max-w-2xl mx-auto">PT. BAS adalah perusahaan kontraktor konstruksi properti yang berpengalaman dan terpercaya dan profesional proyek konstruksi properti, mulai dari perumahan, perkantoran, hingga industri.
              Kami memiliki tim profesional yang berpengalaman dan kompeten di bidangnya. Kami juga didukung oleh peralatan dan teknologi yang modern.
              Kami berkomitmen untuk mengutamakan kepuasan pelanggan dengan memberikan hasil kerja yang berkualitas dan sesuai dengan standar yang berlaku.
              </p>
          </div>
          <hr className="max-w-xs mx-auto p-1 bg-[#FF8047]"/>
      </section>

      <section>
        <div className="max-w-6xl px-8 py-16 lg:px-24 md:px-16 lg:pb-24 md:pb-16 lg:pt-32 md:py-24 mx-auto">
            <div className="text-center">
                <h4 className="text-slate-600 mb-2">02 - Proyek Berlangsung</h4>
                <h1 className="text-slate-900 text-3xl lg:text-5xl mb-12 font-semibold">Ongoing Project</h1>
            </div>
            <div className='w-full lg:pt-8 flex justify-center max-w-2xl mx-auto'>
              <iframe className='aspect-video w-full' src="https://www.youtube.com/embed/AV6Pw4rkoR0?si=e3CaInjhsn5dWF9Z" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <hr className="mx-auto border-[1.5px] my-8 lg:my-16 bg-slate-800" />
            <div className="max-w-5xl mx-auto">
              <CarouselComp onGoingData={onGoingData}/>
            </div>
            <div className='text-center my-8'>
              <h2 className='font-semibold text-lg mb-2'>Griya Cendana Asri 2</h2>
              <p className='text-slate-600 text-sm md:text-base max-w-xl mx-auto'>Rumah ini memiliki luas tanah sebesar 96 m² dengan satu kavling berukuran 8m x 12m. Tiap kavling berbahan batu bata plester, dengan cat luar dan dalam.</p>
            </div>
            <div className='flex flex-wrap justify-center'>
              <Link
              className="lg:text-base text-sm py-2 px-5  text-white  bg-[#0F1957] hover:bg-[#29357E] transition ease-in-out duration-500 rounded-full"
              key="projects"
              href="/portfolio"
              >See all project</Link>
            </div>
        </div>
      </section>

      <section>
        <div className="text-center lg:mt-16">
            <h4 className="text-slate-600 mb-2">03 - Lokasi Kami</h4>
            <h1 className="text-slate-900 text-3xl lg:text-5xl mb-12 font-semibold">Our Location</h1>
        </div>
        <hr className="mx-8 lg:mx-32"/>
        <iframe 
        style={{ border:"0" }}
        className="w-full h-44 lg:h-[350px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3835885535013!2d104.74973657472968!3d-2.9908830969851574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75fdffef3991%3A0x8eb938d31f7279f7!2sPT.%20BAS!5e0!3m2!1sen!2sid!4v1704285179558!5m2!1sen!2sid" width="600" height="450" loading='lazy'></iframe>
      </section>
    </main>
  )
}
