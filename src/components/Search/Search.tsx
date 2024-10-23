import React from "react";

import { IoClose } from "react-icons/io5";

// Define Product Type
interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
}

// Define Props Type
interface SearchProps {
  setSearchOpen: (open: boolean) => void;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
  productSearch: Product[];
}

const Search: React.FC<SearchProps> = ({
  setSearchOpen,
  setSearchQuery,
  searchQuery,
  productSearch,
}) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => {
        setSearchOpen(false);
        setSearchQuery("");
      }}
    >
      <div
        className="bg-white p-5 shadow-lg w-full max-w-[400px] md:max-w-[600px] space-y-4 max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Search */}
        <div className="relative mt-2">
          <input
            type="text"
            className="w-full p-3 text-gray-700 border border-gray-300 focus:ring-1 focus:ring-red-200 outline-none transition"
            placeholder="Search products..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Kondisi Ketika Search Kosong */}
        {!searchQuery && (
          <div className="text-center text-red-600 font-medium">
            Masukkan keyword pencarian
          </div>
        )}

        {/* Kondisi Jika Tidak Ada Produk */}
        {searchQuery === "none" && (
          <div className="text-center text-red-600 font-medium">
            Masukkan keyword pencarian yang lain
          </div>
        )}

        {/* Menampilkan Hasil Pencarian */}
        {searchQuery && productSearch.length > 0 && (
          <div className="space-y-2">
            {productSearch.map((product) => (
              <div
                key={product?.id}
                className="flex items-center gap-3 p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition"
              >
                <img
                  src={product?.photo}
                  alt={product?.name}
                  className="w-12 h-12 rounded-md object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-gray-700 font-semibold">
                    {product?.name}
                  </span>
                  <span className="text-gray-500 text-sm">
                    Rp {product?.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Kondisi Jika Tidak Ada Hasil */}
        {searchQuery && productSearch.length === 0 && (
          <div className="text-center text-gray-500">
            Tidak ada produk ditemukan
          </div>
        )}

        <IoClose className="text-red-500 text-2xl absolute -top-4 right-0 cursor-pointer hover:text-red-600 rounded-full hover:bg-red-100" onClick={() => setSearchOpen(false)} />
      </div>
    </div>
  );
};

export default Search;
