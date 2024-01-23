    'use client'

    import Image from "next/image"
    import { useEffect, useState } from "react";

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
        }, 2000); // Set your maximum time in milliseconds (here, 5000 milliseconds or 5 seconds)
    
        window.addEventListener('load', loadEvent);
    
        return () => {
            window.removeEventListener('load', loadEvent);
            setIsLoaded(true)
            clearTimeout(timeoutId);
        };
        }, []);
    return (
        <div className={`transition-opacity duration-500 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
            {!isLoaded ? 
            <div className="fixed w-full h-full flex flex-wrap justify-center items-center bg-[#FCFCFC] z-[10]">
                <div>
                    <Image
                    className="w-40 animate-pulse"
                    src="/logo.png"
                    alt="logo"
                    width={288}
                    height={162}
                    />
                </div>
            </div> :
            " "} 
        </div>
    )
    }

    export default PreLoader