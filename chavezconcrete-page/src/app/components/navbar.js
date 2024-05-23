"use client";

import Link from "next/link";
import React, { useState } from "react";



const Navbar = () => {

  return (
    <div className="navbar bg-base-100 flex justify-between items-center p-4">
    <div className="max-w-screen-xl">
      <a className="btn btn-ghost normal-case text-xl">Chavez Concrete</a>
    </div>
    <div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/aboutus" legacyBehavior>
            <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer capitalize font-medium">
              About
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </div>

  );
};


export default Navbar;