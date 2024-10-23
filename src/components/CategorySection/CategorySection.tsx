import { useDispatch, useSelector } from "react-redux";
import categoryPic from "../../assets/categoryPic.png";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { fetchCategories } from "@/redux/slice/categorySlice";

const CategorySection = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { categories } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <section className="xl:px-[100px] px-4 lg:px-10 bg-white font-poppins my-20">
      <h2 className="text-2xl md:text-4xl font-bold">Jelajahi Kategori</h2>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
        {
          categories.map((category) => (
          <div key={category?.keyword_name} className="flex flex-col items-center justify-between gap-4 border p-4 hover:scale-105 hover:ease-in-out transition-all duration-300 bg-white cursor-pointer">
            <img src={categoryPic} alt="" width={100} height={100} />
            <h3 className="text-lg md:text-xl font-semibold text-center capitalize">
            {category?.product_category_name}
            </h3>
            <p className="text-gray-500 text-sm md:text-base">5,6k Produk</p>
          </div>
          ))
        }
      </div>
    </section>
  );
};

export default CategorySection;
