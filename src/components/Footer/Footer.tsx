import shipping from "@/assets/shipping.png";
import costumerService from "@/assets/costumer-service.png";
import chat from "@/assets/chat.png";
import voucher from "@/assets/voucher.png";
import AppStore from "@/assets/AppStore.png";
import GooglePlay from "@/assets/GooglePlay.png";
import Payment from "@/assets/Payment.png";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FaSquareInstagram,
  FaFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { fetchCategories } from "@/redux/slice/categorySlice";

const Footer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { categories } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <footer>
      <div className="bg-[#ededee] py-5 grid grid-cols-2 lg:grid-cols-4 xl:px-[100px] px-4 lg:px-10 gap-4">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
          <img src={shipping} alt="" />
          <div className="flex flex-col max-w-[140px]">
            <span className="font-semibold text-sm text-center lg:text-start">
              Gratis ongkir
            </span>
            <span className="text-sm  text-center lg:text-start">
              Tanpa minimal belanja
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
          <img src={costumerService} alt="" />
          <div className="flex flex-col max-w-[140px]">
            <span className="font-semibold text-sm text-center lg:text-start">
              24/7 Customer Service
            </span>
            <span className="text-sm  text-center lg:text-start">
              (021) 893457
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
          <img src={chat} alt="" />
          <div className="flex flex-col max-w-[140px]">
            <span className="font-semibold text-sm text-center lg:text-start">
              Chat dengan kami
            </span>
            <span className="text-sm  text-center lg:text-start">
              Layanan chat online 24 Jam
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
          <img src={voucher} alt="" />
          <div className="flex flex-col max-w-[170px]">
            <span className="font-semibold text-sm text-center lg:text-start">
              Voucher menarik
            </span>
            <span className="text-sm  text-center lg:text-start">
              Untuk kamu yang sering berbelanja
            </span>
          </div>
        </div>
      </div>
      <div className="py-16 flex flex-col lg:flex-row items-center gap-7 lg:items-start justify-around bg-white xl:px-[100px] px-4 lg:px-10">
        <img src="/Logo - Ulin Art.svg" alt="" />
        <div className="flex justify-between flex-2 flex-col md:flex-row gap-7 items-center md:items-start">
          <div className="w-[200px]">
            <h3 className="font-semibold text-center md:text-start">
              NAVIGASI
            </h3>
            <ul className="text-center md:text-start">
              {categories.map((category) => (
                <li key={category?.keyword_name} className="my-2 cursor-pointer text-gray-600 hover:text-red-500 text-sm capitalize">
                  {category?.product_category_name}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[200px]">
            <h3 className="font-semibold text-center md:text-start">
              INFORMASI
            </h3>
            <ul className="text-center md:text-start">
              <li className="my-2 cursor-pointer text-gray-600 hover:text-red-500 text-sm">
                About Us
              </li>
              <li className="my-2 cursor-pointer text-gray-600 hover:text-red-500 text-sm">
                Informasi Pengiriman
              </li>
              <li className="my-2 cursor-pointer text-gray-600 hover:text-red-500 text-sm">
                Privacy & Policy
              </li>
              <li className="my-2 cursor-pointer text-gray-600 hover:text-red-500 text-sm">
                Syarat & Ketentuan
              </li>
            </ul>
            <h3 className="font-semibold mt-4 text-center md:text-start">
              BAHASA
            </h3>
            <Select>
              <SelectTrigger className="p-2 mt-1 w-[150px] mx-auto md:ml-0">
                <SelectValue placeholder="Indonesia" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="english" className="cursor-pointer">
                  English
                </SelectItem>
                <SelectItem value="indonesia" className="cursor-pointer">
                  Indonesia
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-[200px]">
            <h3 className="font-semibold text-center md:text-start">
              COSTUMER SERVICE
            </h3>
            <ul className="text-center md:text-start">
              <li className="my-2 cursor-pointer text-gray-600 hover:text-red-500 text-sm">
                Costumer Service
              </li>
              <li className="my-2 cursor-pointer text-gray-600 hover:text-red-500 text-sm">
                Daftar atau Masuk
              </li>
              <li className="my-2 cursor-pointer text-gray-600 hover:text-red-500 text-sm">
                Referensi Gadget
              </li>
              <li className="my-2 cursor-pointer text-gray-600 hover:text-red-500 text-sm">
                Cookie
              </li>
              <li className="my-2 cursor-pointer text-gray-600 hover:text-red-500 text-sm">
                Keamanan berbelanja
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col justify-center items-center lg:items-start gap-10 lg:gap-5">
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold mb-2">Ikuti Kami</p>
            <div className="flex gap-4 text-2xl">
              <FaSquareInstagram className="hover:text-red-500 cursor-pointer" />
              <FaFacebook className="hover:text-red-500 cursor-pointer" />
              <FaSquareXTwitter className="hover:text-red-500 cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold mb-2">BeboTech App</p>
            <div className="flex gap-2 text-2xl">
              <button>
                <img
                  src={AppStore}
                  alt=""
                  width={100}
                  className="rounded-[5px] border"
                />
              </button>
              <button>
                <img
                  src={GooglePlay}
                  alt=""
                  width={85}
                  className="rounded-[5px] border"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold mb-2">Metode Pembayaran</p>
            <img
              src={Payment}
              alt=""
              width={250}
              className="rounded-[5px] border"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#ededee] py-5 text-sm text-gray-600 flex items-center justify-around">
        All Rights Reserved &copy; 2024
      </div>
    </footer>
  );
};

export default Footer;
