"use client";

import Link from "next/link";
import React, { useState } from "react";



const Navbar = () => {

  return (
    <div className="navbar bg-base-100 flex justify-between items-center p-4">
    <div className="max-w-screen-xl">
      <Link href="/" legacyBehavior>
      <a className="btn btn-ghost normal-case text-xl">Chavez Concrete</a>
      </Link>
    </div>
    <div>
      <ul className="flex space-x-4">
        <li className="flex space-x-4">
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
          <Link href="/testimonials" legacyBehavior>
            <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer capitalize font-medium">
              Reviews
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </div>

  );
};


export default Navbar;