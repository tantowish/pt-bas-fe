'use client'

import Image from "next/image"
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

const PreLoader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
  
  
    useEffect(() => {
      const loadEvent = () => {
        setIsLoading(false);
      };
  
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
        window.removeEventListener('load', loadEvent);
      }, 800); // Set your maximum time in milliseconds (here, 5000 milliseconds or 5 seconds)
  
      window.onload = ()=>{
        setIsLoading(false);
      }
  
      return () => {
        setIsLoaded(true)
        clearTimeout(timeoutId);
      };
    }, []);
  return (
    <div className={`transition-opacity duration-500 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
        {!isLoaded ? 
        <div className="fixed w-full h-full flex flex-wrap justify-center items-center bg-[#FCFCFC] z-[10]">
            <div className="flex flex-col justify-center items-center gap-4">
                <Image
                className="w-40"
                src="/logo.png"
                alt="logo"
                width={288}
                height={162}
                />
                <BarLoader 
                color="#FF8047" 
                loading={isLoading}
                width={150}
                />
            </div>
        </div> :
        " "} 
    </div>
  )
}

export default PreLoader