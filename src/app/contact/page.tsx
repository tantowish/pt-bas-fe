import React from 'react'

const Contact = () => {
  return (
    <div className='pt-16 lg:pt-8'>
        <div className="max-w-7xl p-8 lg:px-24 lg:py-24 md:px-16 md:py-16 mx-auto">
            <div className="text-start mb-12">
                <h4 className="text-slate-600 mb-2">PT BAS - Contact</h4>
                <h1 className="text-slate-900 text-3xl mb-2 lg:text-5xl font-semibold">Contact</h1>
                <p className='text-sm md:text-base text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quasi quis veniam nam, quae tenetur ab debitis quo nisi in?</p>
            </div>
            <div>
                <iframe 
                style={{ border:"0" }}
                className="w-full h-44 lg:h-96" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3835885535013!2d104.74973657472968!3d-2.9908830969851574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75fdffef3991%3A0x8eb938d31f7279f7!2sPT.%20BAS!5e0!3m2!1sen!2sid!4v1704285179558!5m2!1sen!2sid" 
                width="600" 
                height="450"   
                loading="lazy"></iframe>
            </div>
            <div className='pt-16'>
                <div className='flex flex-wrap py-4'>
                    <div className='md:w-1/2 w-full mb-4'>
                        <h4 className='font-semibold'>Whatsapp</h4>
                        <p>0819282346</p>
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <p className='text-sm md:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores consequuntur a explicabo deleniti distinctio nobis?</p>
                    </div>
                </div>
                <div className='flex flex-wrap py-4'>
                    <div className='md:w-1/2 w-full mb-4'>
                        <h4 className='font-semibold'>Email</h4>
                        <p>ptbas@gmail.com</p>
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <p className='text-sm md:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores consequuntur a explicabo deleniti distinctio nobis?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact