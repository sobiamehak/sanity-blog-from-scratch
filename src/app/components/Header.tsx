// components/Header.js
import React from 'react';
import Link from 'next/link';
import { RxDropdownMenu } from "react-icons/rx";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet"

  
const Header = () => {
  return (
    <header className=" md:px-40 px-0 py-4 border-2   shadow-md shadow-red-950
     ">
      <div className="max-w-screen-2xl mx-auto flex justify-between
       items-center px-4 ">
        {/* Blog Title */}
        <div>
          <h1 className="lg:text-3xl text-xl font-bold font-serif
           text-red-800  ">My Blog</h1>
        </div>

        <nav>
          <ul className="lg:flex gap-5 font-extrabold font-serif hidden md:block ">
            <li><Link href="/" className=" hover:text-red-600 hover:underline">Home</Link ></li>
            <li><Link href="/" className=" hover:text-red-600 hover:underline">Blog</Link ></li>
            <li><Link  href="/contact" className=" hover:text-red-600 hover:underline">Contact</Link ></li>
          </ul>
        </nav>
        <Sheet>
  <SheetTrigger className='ml-auto text-2xl block md:hidden'><RxDropdownMenu size={30} /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetDescription>
      <ul className="flex flex-col gap-5   mt-10 items-center  font-extrabold font-serif ">
            <li><Link href="#" className=" hover:text-white hover:underline">Home</Link ></li>
            <li><Link href="#" className=" hover:text-white hover:underline">About</Link ></li>
            <li><Link  href="#" className=" hover:text-white hover:underline">Contact</Link ></li>
          </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
      </div>
  

    </header>
  );
}

export default Header;
