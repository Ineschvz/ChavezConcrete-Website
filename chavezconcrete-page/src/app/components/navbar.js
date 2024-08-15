"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image"; 
import { FaPhone } from "react-icons/fa6";



const Navbar = () => {

  return (
    <div className="navbar bg-sky-950 bg-opacity-75 flex justify-between items-center p-4 space-x-10 ">
    <div className="rounded-full inline-block w-20 h-20">
    <Link href="/" legacyBehavior>
          <a className="">
            <Image src="/Badge Logo.jpg" alt="Chavez Concrete Logo" width={45} height={45} className="rounded-full object-cover object-center w-full h-full scale-125" />
          </a>
        </Link>
    </div>
    <div className="w-full flex justify-center">
      <ul className="flex space-x-20 ">
        <li className="flex space-x-4 text-xl">
          <Link href="/about" legacyBehavior>
            <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer capitalize font-medium">
              About
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer capitalize font-medium">
              Contact
            </a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer capitalize font-medium">
              Services
            </a>
          </Link>
          <Link href="/gallery" legacyBehavior>
            <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer capitalize font-medium">
              Gallery
            </a>
          </Link>
        </li> 

        <p className="max-w-[600px] flex items-center space-x-2 md:text-xl mx-auto flex justify-center"> <FaPhone /> <a href="tel:+919-624-7744" className=" hover:underline">919-624-7744</a> </p>
      </ul>  
      

    </div>
    
  </div>

  );
};


export default Navbar;