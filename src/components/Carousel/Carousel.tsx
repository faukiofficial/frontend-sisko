import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { GoArrowRight } from "react-icons/go";

import CarouselPic from "../../assets/CarouselPic.png";

export function CarouselSize() {
  return (
    <Carousel className="xl:mx-[100px] mx-4 lg:mx-10 mt-12">
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 border flex items-center gap-4 hover:shadow-md hover:ease-in-out transition-all duration-300 bg-white cursor-pointer">
            <img src={CarouselPic} alt="" />
            <div>
              <p className="text-gray-400 text-sm mb-2">Smartphone</p>
              <h2 className="text-lg md:text-xl font-bold">Samsung Galaxy S23 Ultra</h2>
              <button className="flex items-center gap-2 mt-2">
                <span className="text-red-500 text-sm">Beli sekarang</span>
                <GoArrowRight />
              </button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 border flex items-center gap-4 hover:shadow-md hover:ease-in-out transition-all duration-300 bg-white cursor-pointer">
            <img src={CarouselPic} alt="" />
            <div>
              <p className="text-gray-400 text-sm mb-2">Smartphone</p>
              <h2 className="text-lg md:text-xl font-bold">Samsung Galaxy S23 Ultra</h2>
              <button className="flex items-center gap-2 mt-2">
                <span className="text-red-500 text-sm">Beli sekarang</span>
                <GoArrowRight />
              </button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 border flex items-center gap-4 hover:shadow-md hover:ease-in-out transition-all duration-300 bg-white cursor-pointer">
            <img src={CarouselPic} alt="" />
            <div>
              <p className="text-gray-400 text-sm mb-2">Smartphone</p>
              <h2 className="text-lg md:text-xl font-bold">Samsung Galaxy S23 Ultra</h2>
              <button className="flex items-center gap-2 mt-2">
                <span className="text-red-500 text-sm">Beli sekarang</span>
                <GoArrowRight />
              </button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 border flex items-center gap-4 hover:shadow-md hover:ease-in-out transition-all duration-300 bg-white cursor-pointer">
            <img src={CarouselPic} alt="" />
            <div>
              <p className="text-gray-400 text-sm mb-2">Smartphone</p>
              <h2 className="text-lg md:text-xl font-bold">Samsung Galaxy S23 Ultra</h2>
              <button className="flex items-center gap-2 mt-2">
                <span className="text-red-500 text-sm">Beli sekarang</span>
                <GoArrowRight />
              </button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 border flex items-center gap-4 hover:shadow-md hover:ease-in-out transition-all duration-300 bg-white cursor-pointer">
            <img src={CarouselPic} alt="" />
            <div>
              <p className="text-gray-400 text-sm mb-2">Smartphone</p>
              <h2 className="text-lg md:text-xl font-bold">Samsung Galaxy S23 Ultra</h2>
              <button className="flex items-center gap-2 mt-2">
                <span className="text-red-500 text-sm">Beli sekarang</span>
                <GoArrowRight />
              </button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-4 border flex items-center gap-4 hover:shadow-md hover:ease-in-out transition-all duration-300 bg-white cursor-pointer">
            <img src={CarouselPic} alt="" />
            <div>
              <p className="text-gray-400 text-sm mb-2">Smartphone</p>
              <h2 className="text-lg md:text-xl font-bold">Samsung Galaxy S23 Ultra</h2>
              <button className="flex items-center gap-2 mt-2">
                <span className="text-red-500 text-sm">Beli sekarang</span>
                <GoArrowRight />
              </button>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
