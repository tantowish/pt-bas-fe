import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

interface OngoingItem {
    id: number;
    img: string;
}

interface CarouselCompProps {
    onGoingData: OngoingItem[];
  }

export function CarouselComp({onGoingData}:CarouselCompProps) {
  return (
    <Carousel
        opts={{
            align: "start",
        }}
        className="md:w-full w-5/6 mx-auto"
        >
        <CarouselContent>
            {onGoingData.map((item:OngoingItem)=> (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative overflow-hidden bg-cover bg-no-repeat" key={item.id}>
                    <Image 
                    className="transition duration-500 ease-in-out hover:scale-105"
                    src={item.img}
                    alt='ongoing'
                    width={825}
                    height={450}
                    />
                </div>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
  )
}
