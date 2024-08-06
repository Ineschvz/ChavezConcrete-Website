import React from "react"
import Image from "next/image"; // Import the Image component from Next.js

const Gallery= () => {
    return (
        <div >
            <header className="bg-blue-700 text-white py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold"> image gallery  </h1>
          </div>
        </header>
        <div className=" container grid grid-cols-4 gap-4">
          <Image 
          
          ></Image>


        </div>
        
        </div>
      )   

}; 

export default Gallery;