'use client'

import PreLoader from '@/components/preLoader';
import Image from 'next/image'
import Link from 'next/link'

const mutiara = () => {
    return (
        <>
            <PreLoader />

            <div className='pt-16 pb-4 lg:pb-0 lg:pt-8'>
                <div className="max-w-7xl p-8 lg:px-24 lg:py-24 md:px-16 md:py-16 mx-auto">
                    <div className="text-start">
                        <h4 className="text-slate-700 mb-2">PT BAS - Project</h4>
                        <h1 className="text-slate-900 text-3xl lg:text-5xl mb-12 font-semibold">Mutiara Residence</h1>
                    </div>
                    <div className='mb-8 md:mb-12'>
                        <Image
                            src="/portfolio/mutiara-residence/main.jpg"
                            alt='main'
                            width={1200}
                            height={500}
                            className='w-full transition duration-200 ease-in-out blur'
                            onLoadingComplete={(image) => image.classList.remove('blur')}
                        />
                        <h2 className='text-lg font-semibold mt-4'>Mutiara Residence</h2>
                        <p className='text-sm md:text-base text-slate-700'>Jl. Sulaiman Amin - Perumda, Palembang, Sumatera Selatan</p>
                    </div>
                    <div className='text-slate-700'>
                        <p className='text-sm md:text-base text-justify leading-6'>Mutiara Residence adalah perumahan dengan konsep hunian modern yang mengedepankan kenyamanan dan keamanan. Dikelilingi oleh pagar tembok sehingga memberikan rasa aman dan nyaman bagi penghuninya dan mengusung konsep hunian nyaman yang terletak di pinggir kota.</p>
                        <p className='text-sm md:text-base text-justify leading-6 mt-4 md:mt-8'>Mutiara Residence merupakan pilihan yang tepat bagi Anda yang mencari hunian yang nyaman, tenang, dan terjangkau. Perumahan ini menawarkan berbagai tipe rumah yang dapat disesuaikan dengan kebutuhan Anda.</p>
                    </div>
                    <div className='flex flex-col gap-6 sm:grid sm:grid-cols-9 sm:grid-rows-2 grid-cols-1 grid-rows-1 mt-8 sm:gap-4'>
                        <Image
                            className='w-full h-full object-cover col-span-3 row-span-2 grayscale hover:grayscale-0 transition duration-500 ease-in-out'
                            src="/portfolio/mutiara-residence/1.jpg"
                            alt='cendana-asri-2'
                            width={825}
                            height={450}
                            loading='eager'
                        />
                        <Image
                            className='w-full h-full object-cover col-span-4 row-span-1 grayscale hover:grayscale-0 transition duration-500 ease-in-out'
                            src="/portfolio/mutiara-residence/main.jpg"
                            alt='cendana-asri-2'
                            width={825}
                            height={450}
                            loading='eager'
                        />
                        <Image
                            className='w-full h-full object-cover col-span-2 row-span-1 grayscale hover:grayscale-0 transition duration-500 ease-in-out'
                            src="/portfolio/mutiara-residence/3.jpg"
                            alt='cendana-asri-2'
                            width={825}
                            height={450}
                            loading='eager'
                        />
                        <Image
                            className='w-full h-full object-cover col-span-3 row-span-1 grayscale hover:grayscale-0 transition duration-500 ease-in-out'
                            src="/portfolio/mutiara-residence/4.jpg"
                            alt='cendana-asri-2'
                            width={825}
                            height={450}
                            loading='eager'
                        />
                        <Image
                            className='w-full h-full object-cover col-span-3 row-span-1 grayscale hover:grayscale-0 transition duration-500 ease-in-out'
                            src="/portfolio/mutiara-residence/5.jpg"
                            alt='cendana-asri-2'
                            width={825}
                            height={450}
                            loading='eager'
                        />
                    </div>
                    <div className='pt-8 md:pt-16'>
                        <div className='mb-8 md:mb-12'>
                            <h2 className='text-slate-900 text-2xl sm:text-3xl lg:text-4xl mb-2 font-semibold'>Other Project</h2>
                            <p className='text-slate-700 text-sm md:text-base max-w-xs sm:max-w-sm'>Check out another project we did</p>
                        </div>
                        <div className='flex flex-col gap-4 md:gap-6'>
                            <Link
                                href="alamanda-residence">
                                <h2 className='text-slate-900 text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 md:mb-6 font-semibold hover:underline'>Alamanda Residence</h2>
                                <hr className='border-slate-400 ' />
                            </Link>
                            <Link
                                href="griya-bintang-sukamulya">
                                <h2 className='text-slate-900 text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 md:mb-6 font-semibold hover:underline'>Griya Bintang Sukamulya</h2>
                                <hr className='border-slate-400 ' />
                            </Link>
                            <Link
                                href="griya-cendana-asri-1">
                                <h2 className='text-slate-900 text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 md:mb-6 font-semibold hover:underline'>Griya Cendana Asri 1</h2>
                                <hr className='border-slate-400 ' />
                            </Link>
                            <Link
                                href="griya-cendana-asri-2">
                                <h2 className='text-slate-900 text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 md:mb-6 font-semibold hover:underline'>Griya Cendana Asri 2</h2>
                                <hr className='border-slate-400 ' />
                            </Link>
                            <Link
                                href="griya-pasundan-sentosa">
                                <h2 className='text-slate-900 text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 md:mb-6 font-semibold hover:underline'>Griya Pasundan Sentosa</h2>
                                <hr className='border-slate-400 ' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default mutiara