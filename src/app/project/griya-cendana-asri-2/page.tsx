import Image from 'next/image'
import Link from 'next/link'

interface portfolio {
  name: string,
  description: string,
  image: string
}

const griyaCendana2 = () => {
  return (
    <div className='pt-16 pb-4 lg:pb-0 lg:pt-8'>
      <div className="max-w-7xl p-8 lg:px-24 lg:py-24 md:px-16 md:py-16 mx-auto">
        <div className="text-start">
          <h4 className="text-slate-600 mb-2">PT BAS - Project</h4>
          <h1 className="text-slate-900 text-3xl lg:text-5xl mb-12 font-semibold">Griya Cendana Asri 2</h1>
        </div>
        <div className='mb-8 md:mb-12'>
            <Image 
            className='w-full'
            src="/portfolio/cendana-asri-2/main.jpg"
            alt='cendana-asri-2' 
            width={1020}
            height={385}
            />
            <h2 className='text-lg font-semibold mt-4'>Griya Cendana Asri 2</h2>
            <p className='text-sm md:text-base text-slate-600'>Jl. Tapak Siring Talang Betutu</p>
        </div>
        <div className='text-slate-600'>
            <p className='text-sm md:text-base text-justify leading-6'>Rumah ini memiliki luas tanah sebesar 96 m² dengan satu kavling berukuran 8m x 12m. Tiap kavling berbahan batu bata plester, dengan cat luar dan dalam. Konstruksi rumah dibuat kokoh dengan bahan beton dengan lantai keramik bermotif. dan tidak lupa juga dinding dan lantai kamar mandi  menggunakan keramik. Selain itu, rumah ini dilengkapi kusen kayu dengan pintu yang luas, serta jendela kayu dilengkapi kaca gelap. Plafond menggunkan gypsum dengan rangka galvanis  sementara atap multiroof dengan rangka baja menjamin kekokohan struktur.</p>
            <p className='text-sm md:text-base text-justify leading-6 mt-4 md:mt-8'>Halaman samping rumah dapat dengan mudah ditambahkan dengan dua kamar tidur tambahan, sedangkan halaman belakang dan depan memberikan fleksibilitas untuk menambahkan dapur, ruang makan, dan bahkan toko atau warung. Carport di samping rumah juga cukup luas untuk menampung parkir mobil besar, melengkapi kenyamanan dan kepraktisan rumah ini.</p>
        </div>
        <div className='flex flex-col gap-6 sm:grid sm:grid-cols-9 sm:grid-rows-2 grid-cols-1 grid-rows-1 mt-8 sm:gap-4'>
            <Image 
            className='w-full h-full object-cover col-span-3 row-span-2 grayscale hover:grayscale-0 transition duration-500 ease-in-out'
            src="/home/ongoing/2.jpg"
            alt='cendana-asri-2' 
            width={1020}
            height={385}            
            />
            <Image 
            className='w-full h-full object-cover col-span-4 row-span-1 grayscale hover:grayscale-0 transition duration-500 ease-in-out'
            src="/home/ongoing/3.jpg"
            alt='cendana-asri-2' 
            width={1020}
            height={385}            
            />
            <Image 
            className='w-full h-full object-cover col-span-2 row-span-1 grayscale hover:grayscale-0 transition duration-500 ease-in-out'
            src="/home/ongoing/4.jpg"
            alt='cendana-asri-2' 
            width={1020}
            height={385}            
            />
            <Image 
            className='w-full h-full object-cover col-span-3 row-span-1 grayscale hover:grayscale-0 transition duration-500 ease-in-out'
            src="/home/ongoing/5.jpg"
            alt='cendana-asri-2' 
            width={1020}
            height={385}            
            />
            <Image 
            className='w-full h-full object-cover col-span-3 row-span-1 grayscale hover:grayscale-0 transition duration-500 ease-in-out'
            src="/home/ongoing/6.jpg"
            alt='cendana-asri-2' 
            width={1020}
            height={385}            
            />
        </div>
        <div className='pt-8 md:pt-16'>
            <div className='mb-8 md:mb-12'>
                <h2 className='text-slate-900 text-2xl sm:text-3xl lg:text-4xl mb-2 font-semibold'>Other Project</h2>
                <p className='text-slate-600 text-sm md:text-base max-w-xs sm:max-w-sm'>lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
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
                href="griya-pasundan-sentosa">
                    <h2 className='text-slate-900 text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 md:mb-6 font-semibold hover:underline'>Griya Pasundan Sentosa</h2>
                    <hr className='border-slate-400 ' />
                </Link>
                <Link
                href="mutiara-residence">
                    <h2 className='text-slate-900 text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 md:mb-6 font-semibold hover:underline'>Mutiara Residence</h2>
                    <hr className='border-slate-400 ' />
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default griyaCendana2