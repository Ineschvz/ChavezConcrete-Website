// import React from "react" 
// import Image from "next/image";
// import { FaCheck } from "react-icons/fa";

// const Services = () => {
//     return (
//         <div className="text-center space-y-4">
//             <h1 className="bg-blue-700 text-white py-6 mx-auto px-4 text-3xl font-bold"> Services </h1>
//             <p> list down here blah blah blah </p>
//             <div className="grid grid-cols-2 gap-6 ">  
            
//             <div className="">
//             {/* <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"> Commercial </h2> */}
//             <Image 
//           src='/DSC01589.jpg' 
//           width="550"
//           height="550"
//           className= "mx-auto object-cover "></Image>
            
//             </div>  
//             <div className="bg-white">
//               <p className=" text-black">
//                Pavement and Pathways
//               </p>
//               <p className="flex justify-center text-black">   <FaCheck /> Side Walks </p>
//               <p className="flex justify-center text-black">   <FaCheck /> Drive Thrus </p>
//             </div>

//             <div className="bg-white">
//               <p className="text-black"> 
//               Structual Elements 
             
//           </p>
//           <p className="flex justify-center text-black">   <FaCheck /> Curbs </p> 
//           <p className="flex justify-center text-black">   <FaCheck /> Stairs</p>

//             </div>


//             <div>
//             {/* <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"> Residential</h2> */}
//             <Image 
//           src='/DSC01588.jpg' 
//           width="550"
//           height="550"
//           className= "mx-auto  object-cover "></Image>
//             </div>

//             </div>
//             <div className="text-muted-foreground md:text-xl text-center">



// <p className="flex justify-center">   <FaCheck /> Gutters </p>
// <p className="flex justify-center">   <FaCheck /> Slabs </p>



// <div className="mt-6 flex justify-center">
//  <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
//   Contact us 
//  </a>
// </div>

// </div>
//         </div>
//       )   

// }

// export default Services; 
import React from "react"; 
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const Services = () => {
    return (
        <div className="text-center space-y-8  py-12 px-6">
            <h1 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Services</h1>
            <p className="text-white text-lg max-w-2xl mx-auto">We provide a wide range of high-quality services to meet your construction needs. Here’s a quick overview of what we offer:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6">  
                {/* Commercial Services */}
                <div className="relative group">
                    <Image 
                        src='/DSC01589.jpg' 
                        width="550"
                        height="550"
                        className="mx-auto object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                        alt="Commercial Services"
                    />
                    <div className="absolute inset-0  opacity-25 rounded-lg group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-4 text-black">Pavement and Pathways</h2>
                    <p className="flex items-center justify-center text-black mb-2"> <FaCheck className="text-green-500 mr-2" /> Side Walks </p>
                    <p className="flex items-center justify-center text-black"> <FaCheck className="text-green-500 mr-2" /> Drive Thrus </p>
                </div>

                {/* Residential Services */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-4 text-black">Structural Elements</h2>
                    <p className="flex items-center justify-center text-black mb-2"> <FaCheck className="text-green-500 mr-2" /> Curbs </p> 
                    <p className="flex items-center justify-center text-black"> <FaCheck className="text-green-500 mr-2" /> Stairs </p>
                </div>
                <div className="relative group">
                    <Image 
                        src='/DSC01588.jpg' 
                        width="550"
                        height="550"
                        className="mx-auto object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                        alt="Residential Services"
                    />
                    <div className="absolute inset-0 opacity-25 rounded-lg group-hover:opacity-50 transition-opacity duration-300"></div>
                </div> 
                <div className="relative group">
                    <Image 
                        src='/DSC01589.jpg' 
                        width="550"
                        height="550"
                        className="mx-auto object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                        alt="Commercial Services"
                    />
                    <div className="absolute inset-0  opacity-25 rounded-lg group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-4 text-black">Drainage and Support </h2>
                    <p className="flex items-center justify-center text-black mb-2"> <FaCheck className="text-green-500 mr-2" /> Gutters </p>
                    <p className="flex items-center justify-center text-black"> <FaCheck className="text-green-500 mr-2" /> Slabs </p>
                </div>
            </div> 
            <div className="mt-6">
                    <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        Contact us 
                    </a>
                </div>
        </div>
    );
}

export default Services;