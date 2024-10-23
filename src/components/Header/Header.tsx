import { Phone } from "lucide-react";
import {
  FaSquareInstagram,
  FaFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

import { NavLink, Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { LogOut, Settings, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { seacrhProducts } from "@/redux/slice/productSlice";
import Search from "../Search/Search";
import { fetchCategories } from "@/redux/slice/categorySlice";

// Define the type for user object
interface User {
  name: string;
  profilePicture: string;
}

// Define the props type for the Header component
interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [debouncedQuery, setDebouncedQuery] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const { productSearch } = useSelector((state: RootState) => state.products);
  const { categories } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery && debouncedQuery !== "none") {
      dispatch(seacrhProducts({ searchQuery: debouncedQuery }));
    }
  }, [dispatch, debouncedQuery]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  function getFirstName(name: string): string {
    return name.split(" ")[0];
  }
  return (
    <header className="bg-white font-poppins sticky top-0 z-50">
      <div className="text-gray-400 border-b text-sm mx-auto flex justify-between h-14 xl:px-[100px] px-4 lg:px-10 items-center">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 hover:text-red-500 cursor-pointer">
            <Phone className="w-5 h-5" />
            <span className="hidden md:block">(021) 893457</span>
          </div>
          <div className="flex gap-2 ml-3 text-lg">
            <FaSquareInstagram className="hover:text-red-500 cursor-pointer" />
            <FaFacebook className="hover:text-red-500 cursor-pointer" />
            <FaSquareXTwitter className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
            <IoIosInformationCircleOutline className="text-2xl" />
            <Link to="/support">Support</Link>
          </div>
          <div className="flex items-center hover:text-red-500 cursor-pointer">
            <Select>
              <SelectTrigger className="border-none p-0 shadow-none">
                <TbWorld className="text-2xl mr-1" />
                <SelectValue placeholder="ID" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="english" className="cursor-pointer">
                  ENG
                </SelectItem>
                <SelectItem value="indonesia" className="cursor-pointer">
                  ID
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Separator */}
      <Separator className="w-full" />

      <div className="mx-auto flex justify-between h-16 xl:px-[100px] px-4 lg:px-10 items-center">
        <img
          src="/Logo - Ulin Art.svg"
          alt=""
          className="cursor-pointer h-7 xl:h-10"
        />

        <nav
          aria-label="Global"
          className="hidden md:flex items-center justify-between gap-7"
        >
          <Select>
            <SelectTrigger className="w-[150px] lg:w-[180px] border-none focus:border-none shadow-none hidden lg:flex">
              <SelectValue placeholder="All Category" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="all" key="all" className="font-semibold">
                All Category
              </SelectItem>
              {categories.map((category) => (
                <SelectItem key={category?.keyword_name} value={category?.keyword_name}>
                  <p className="capitalize">{category?.product_category_name}</p>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <ul className="flex items-center gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `pb-2 ${
                    isActive ? "text-red-600 border-b-2 border-red-600" : ""
                  }`
                }
              >
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/new"
                className={({ isActive }) =>
                  `pb-2 ${
                    isActive ? "text-red-600 border-b-2 border-red-600" : ""
                  }`
                }
              >
                {" "}
                New{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/accesories"
                className={({ isActive }) =>
                  `pb-2 ${
                    isActive ? "text-red-600 border-b-2 border-red-600" : ""
                  }`
                }
              >
                {" "}
                Accesories{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/sale"
                className={({ isActive }) =>
                  `pb-2 ${
                    isActive ? "text-red-600 border-b-2 border-red-600" : ""
                  }`
                }
              >
                {" "}
                Sale{" "}
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-2 md:gap-6 text-2xl">
          <IoSearchOutline
            className="cursor-pointer"
            onClick={() => {
              if (searchOpen === false) {
                setSearchOpen(true);
              } else {
                setSearchOpen(false);
              }
            }}
          />
          <div className="relative">
            <IoBagOutline className="cursor-pointer" />
            <span className="absolute top-1 -right-2 w-4 h-4 rounded-full bg-red-600 text-white text-[9px] flex justify-center items-center">
              5
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="sm:flex">
            {!user ? (
              <Button variant="outline" className="hover:border-red-500">
                <Link to="/login" className="hover:text-red-500">
                  Login
                </Link>
              </Button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <span className="hidden lg:block">
                      Hai, {getFirstName(user?.name)}
                    </span>
                    <img
                      src={user?.profilePicture}
                      alt={user?.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <ChevronDownIcon />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings />
                      <span>Settings</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuItem>
                    <LogOut />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Search */}

      {searchOpen && (
        <Search
          setSearchOpen={setSearchOpen}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery || ""}
          productSearch={productSearch}
        />
      )}
    </header>
  );
};

export default Header;
