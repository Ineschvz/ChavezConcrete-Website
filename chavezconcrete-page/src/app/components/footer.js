//will be created to help the audience navigate 
//the footer will be added to the layout and will be on everypage
//will include contact info (contact us here), Social media, and another way to get to the pages taht are on the navbar 
 import Link from "next/link"
 import React from "react"

 const Footer = () =>{
    return(
        <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center border-t-4">
            <div className="mb-4 md:mb-0">
              <a className="text-2xl font-bold">Chavez Concrete</a>
              <p className="mt-1">© 2024 Chavez Concrete. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
                <a className="hover:underline">About Us</a>
                <a className="hover:underline">Services</a>
                <a className="hover:underline">Testimonials</a>
                <a className="hover:underline">Contact</a>
            </div>
            <div className="flex">
              <a className="hover:underline"> Facebook ICON</a>
              <a className="hover:underline"> map ICON</a>
            </div>
          </div>
        </div>
      </footer>
    )
 } 

 export default Footer;