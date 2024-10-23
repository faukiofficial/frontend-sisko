import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { FiLoader } from "react-icons/fi";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchProducts } from "@/redux/slice/productSlice";
import { useEffect } from "react";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { products } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    // Panggil fetchProducts saat komponen dirender
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="xl:px-[100px] px-4 lg:px-10 bg-white font-poppins my-20">
      <div className="flex items-center justify-between">
        <div className="h-[1px] w-full bg-gray-300"></div>
        <h2 className="text-2xl md:text-4xl font-bold text-center min-w-[200px] md:min-w-[300px]">
          List Produk
        </h2>
        <div className="h-[1px] w-full bg-gray-300"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 mt-10 cursor-pointer">
        {products.map((product) => (
          <div className="border hover:scale-105 hover:ease-in-out transition-all duration-300" key={product?.id}>
            <img src={product?.photo} alt="" />
            <div className="p-5 flex flex-col gap-2">
              <p className="font-semibold text-lg">{product?.name}</p>
              <div className="flex items-center gap-1">
                <MdOutlineStarPurple500 className="text-yellow-400 text-lg" />
                <span className="text-sm font-semibold">4.6</span>
                <span className="text-sm text-gray-500">(142 Review)</span>
              </div>
              <p className="text-lg font-semibold text-red-500">
                {product?.currency} {product?.price}
              </p>
            </div>
            <div className="p-5">
              <button className="text-white bg-gray-800 hover:bg-gray-700 px-6 py-3 -mt-5 flex items-center justify-center gap-2 w-full">
                <IoBagOutline className="text-lg" />
                <span className="text-sm">Masukkan ke Keranjang</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-20">
        <button className="bg-white text-gray-800 border border-black hover:bg-gray-100 px-8 py-3 -mt-5 flex items-center justify-center gap-2">
          <FiLoader className="animate-spin" />
          <span className="text-sm">Lihat lainnya</span>
        </button>
      </div>
    </section>
  );
};

export default ProductList;
