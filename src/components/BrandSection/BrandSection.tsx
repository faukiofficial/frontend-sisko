import xiaomi from "../../assets/xiaomi.png"

const BrandSection = () => {
  return (
    <section className="xl:px-[100px] px-4 lg:px-10 bg-white font-poppins my-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Brand Terkenal
        </h2>
        <p className="text-center text-gray-500 mt-6 text-xs md:text-sm">Cek produk terbaik dari brand berikut hanya di BeboTech</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8 mt-10">
            <img src={xiaomi} alt="" className="w-full" />
            <img src={xiaomi} alt="" className="w-full" />
            <img src={xiaomi} alt="" className="w-full" />
            <img src={xiaomi} alt="" className="w-full" />
            <img src={xiaomi} alt="" className="w-full" />
            <img src={xiaomi} alt="" className="w-full" />
            <img src={xiaomi} alt="" className="w-full" />
            <img src={xiaomi} alt="" className="w-full" />
        </div>
    </section>
  )
}

export default BrandSection