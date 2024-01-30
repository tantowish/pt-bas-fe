'use client'

import Image from "next/image"
import { useEffect, useState } from "react";
import { ProgressBar } from "react-loader-spinner";

const PreLoader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
  
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
        setTimeout(()=>{
          setIsLoaded(true); 
        },500)
      }, 800);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, []);
  return (
    <div className={`transition-opacity duration-300 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
        {!isLoaded ? 
        <div className="fixed w-full h-full flex flex-wrap justify-center items-center bg-[#FCFCFC] z-[10]">
            <div className="flex flex-col justify-center items-center">
                <Image
                className="w-40"
                src="/logo.png"
                alt="logo"
                width={288}
                height={162}
                priority={true}
                />
                <div className="-mt-4">
                  <ProgressBar       
                    height="80"
                    width="180"
                    barColor="#FF8047"
                    ariaLabel="progress-bar-loading"
                  />
                </div>
            </div>
        </div> :
        " "} 
    </div>
  )
}

export default PreLoader