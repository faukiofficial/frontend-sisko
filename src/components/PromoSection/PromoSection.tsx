import promo1 from "../../assets/promo1.png";
import promo2 from "../../assets/promo2.png";
import promo3 from "../../assets/promo3.png";
import promo4 from "../../assets/promo4.png";
import promo5 from "../../assets/promo5.png";

import { GoArrowRight } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";

const PromoSection = () => {
  return (
    <section className="xl:px-[100px] px-4 lg:px-10 bg-white font-poppins my-20">
      <h2 className="text-2xl md:text-4xl font-bold">Promo Untukmu</h2>
      <div className="flex flex-col lg:flex-row gap-2 md:gap-7 mt-10">
        <div className="relative cursor-pointer flex-1">
          <img src={promo1} alt="" className="w-full" />
          <div className="absolute text-white bottom-[10%] left-[10%] flex flex-col gap-3">
            <p className="text-red-500 text-2xl">Save up to 30% off</p>
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">Macbook Air M2</h3>
            <button className="flex items-center gap-2 mt-2">
              <span className="text-2xl">Beli sekarang</span>
              <GoArrowRight />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 md:gap-7 flex-1">
          <div className="flex flex-col md:flex-row gap-2 md:gap-7">
            <div className="relative cursor-pointer flex-1">
              <img src={promo2} alt="" className="w-full" />
              <div className="absolute text-white bottom-[15px] left-[20px] flex flex-col gap-1">
                <p className="text-red-500 text-sm">Save up to 30% off</p>
                <h3 className="text-lg font-semibold">Acer Nitro 5 Ryzen 7</h3>
              </div>
            </div>
            <div className="relative cursor-pointer flex-1">
              <img src={promo3} alt="" className="w-full" />
              <div className="absolute top-[15px] left-[20px] flex flex-col gap-1">
                <p className="text-red-500 text-sm">Save up to 30% off</p>
                <h3 className="text-lg font-semibold">Xiaomi 12 Pro</h3>
              </div>
            </div>
          </div>
          <div className="relative cursor-pointer">
            <img src={promo4} alt="" className="w-full" />
            <div className="absolute top-[15px] left-[20px] flex flex-col gap-1">
              <p className="text-red-500 text-sm">Save up to 30% off</p>
              <h3 className="text-2xl font-semibold">Nintendo Switch</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 relative hidden md:block">
        <img src={promo5} alt="" className="w-full" />
        <div className="absolute text-white top-[20%] left-[40%] flex flex-col gap-4">
          <p className="text-lg">Audio</p>
          <h3 className="text-5xl font-semibold max-w-[500px] leading-[1.3]">
            Headphone Sony WH-1000XM4
          </h3>
          <p className="text-2xl text-red-500 font-semibold">Rp. 4.499.000</p>
          <button className="bg-white text-gray-800 font-semibold px-6 py-2 flex items-center justify-center gap-2 w-[190px]">
            <IoBagOutline className="text-2xl" />
            <span className="text-2xl hover:text-red-500">Buy Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
