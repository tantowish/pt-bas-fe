import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#FAFAFA] border-t-2'>
        <div className="max-w-7xl flex flex-wrap p-8 lg:px-24 lg:py-16 mx-auto items-center">
            <div className="w-full md:w-1/2 flex flex-wrap">
                <div className="max-w-md">
                    <h3 className="text-sm font-semibold lg:text-base mb-2 lg:mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</h3>
                    <p className="text-xs lg:text-sm">Jl. Merdeka No.3 E, Talang Semut, Kec. Bukit Kecil,
                        Kota Palembang, Sumatera Selatan 30135</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 text-sm  md:text-bas md:flex md:flex-row-reverse py-4 md:mt-0">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2 items-center">
                        <a href="" className="underline">INSTAGRAM</a>
                        <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 36 36"><path fill="currentColor" d="M27.66 15.61L18 6l-9.66 9.61A1 1 0 1 0 9.75 17L17 9.81v19.13a1 1 0 1 0 2 0V9.81L26.25 17a1 1 0 0 0 1.41-1.42Z" className="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                        <a href="" className="underline">FACEBOOK</a>
                        <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 36 36"><path fill="currentColor" d="M27.66 15.61L18 6l-9.66 9.61A1 1 0 1 0 9.75 17L17 9.81v19.13a1 1 0 1 0 2 0V9.81L26.25 17a1 1 0 0 0 1.41-1.42Z" className="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                        <a href="" className="underline">E-MAIL</a>
                        
                        <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 36 36"><path fill="currentColor" d="M27.66 15.61L18 6l-9.66 9.61A1 1 0 1 0 9.75 17L17 9.81v19.13a1 1 0 1 0 2 0V9.81L26.25 17a1 1 0 0 0 1.41-1.42Z" className="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-wrap justify-center pb-4'>
            <p className='text-sm lg:text-base'>
            © 2023 PT Bintang Andalas Selatan. All Rights Reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer
