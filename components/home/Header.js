import Image from "next/image";
import React from "react";
import {
  MenuAlt1Icon,
  SearchIcon,
  UserCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 grid grid-cols-3 bg-white shadow-md py-5 px-4">
      {/* left */}
      <div className="relative cursor-pointer h-10">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="logo"
        />
      </div>
      {/* middle */}
      <div className="flex md:border-2 rounded-full pl-5 sm:pl-3 pr-3 items-center">
        <input
          type="text"
          placeholder="start search"
          className=" bg-transparent outline-none"
        />
        <SearchIcon className="h-7 hidden lg:inline p-1 bg-red-400 text-white rounded-full cursor-pointer ml-auto" />
      </div>
      {/* right */}
      <div className="flex flex-row items-center cursor-pointer justify-evenly pl-10 text-gray-700">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 hidden md:inline  cursor-pointer" />
        <div className="flex border-2 rounded-full space-x-2 px-2 ">
          <MenuAlt1Icon className="h-6 " />
          <UserCircleIcon className="h-6  " />
        </div>
      </div>
    </header>
  );
};

export default Header;
