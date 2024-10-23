import heroImage from "../../assets/herosection.png";
import { IoBagOutline } from "react-icons/io5";

const HeroSection = () => {
  return (
    <section className="xl:px-[100px] px-4 lg:px-10 bg-white font-poppins w-full relative hidden md:block">
      <img src={heroImage} alt="hero section" className="rounded-br-[23%] w-full" />
      <div className="absolute text-white top-[10%] lg:top-1/4 left-1/2 max-w-[350px] lg:max-w-[500px]">
        <p className="text-xl">Best Seller 2024</p>
        <h2 className="text-5xl font-bold mt-3">iPhone 14 Pro</h2>
        <p className="mt-6 text-gray-300">
          Hingga saat ini, Apple masih menjadi favorit banyak orang dengan
          produk iPhone seriesnya, salah satunya adalah iPhone 14 Pro
        </p>
        <p className="text-red-500 mt-10 text-2xl font-semibold">
          Rp 18.999.000
        </p>
        <button className="bg-white mt-6 text-gray-800 font-semibold px-6 py-2 flex items-center gap-2">
          <IoBagOutline className="text-2xl"/>
          <span className="text-2xl hover:text-red-500">Buy Now</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
