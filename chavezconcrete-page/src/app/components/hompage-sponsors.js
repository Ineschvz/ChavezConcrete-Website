import React from "react"
import Image from "next/image";


// const Sponsors = () => {
//     const companyLogos = [
//         "/mills-logo.png",
    
//         // Add more company logos as needed
//     ];
    
//     return (
// <section className="py-12">
// <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="">
//         <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
//             We Work alongside 

//         </h2>
//         <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 ">
//                         {companyLogos.map((logo, index) => (
//                             <div key={index} className="flex justify-center">
//                                 <img src={logo} alt={`Company ${index + 1}`} className="h-12 md:h-16 lg:h-20 " />
//                             </div>
//                         ))}
//                     </div>

//     </div>
// </div>
// <div>
//     <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center  gap-8">
//         Reviews
//     </h1>
//     <div className="">
//         <div className="bold text-2xl text-white ">
//             Chavez Concrete has been working on our projects for over 10 years. They are great to work with, and show up to our projects ready and willing to get the job done. They continue to support us with their quality of concrete finish work.  We look forward to many more years of team work together.
//         </div>
//         <div className="text-2xl text-white">
//         -Jennie Maley Administrative Assistant Mills Construction Company of SC., Inc.
//         </div>
    
//     </div>
// </div>

// </section>
//     )
// }

// export default Sponsors;


export default function Component() {

        const companyLogos = [
        "/mills-logo.png","/NealLogo.jpg"
    
        // Add more company logos as needed
    ];
    
  return (

    <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
           We Work alongside 
           </h2>
           <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 ">
                       {companyLogos.map((logo, index) => (
                           <div key={index} className="flex justify-center">
                                <img src={logo} alt={`Company ${index + 1}`} className="h-12 md:h-16 lg:h-20 " />
                           </div>
                       ))}
                       </div>
        </div>

      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 ">
          <div className="space-y-2">
            <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied customers about their experience with our services.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-muted p-6 text-center">
            <Image className="border">
            </Image>
            <blockquote className="text-lg font-semibold leading-snug">
              "Chavez Concrete has been working on our projects for over 10 years. They are great to work with, and show up to our projects ready and willing to get the job done. They continue to support us with their quality of concrete finish work.  We look forward to many more years of team work together."
            </blockquote>
            <div className="font-semibold">Jennie Maley</div>
            <div className="text-sm text-muted-foreground">Administrative Assistant Mills Construction Company of SC., Inc.</div>
          </div> 
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-muted p-6 text-center">
            <Image className="border">
            </Image>
            <blockquote className="text-lg font-semibold leading-snug">
            "As a Commercial Site and Utility Contractor, we have been working with Chavez for several years. They are very responsive, knowledgeable, and accommodating. From flat work to curb & gutter, Chavez always does a terrific job and we will continue to use them in the future on our projects."
            </blockquote>
            <div className="font-semibold">Courtney Neal</div>
            <div className="text-sm text-muted-foreground">Neal Construction & Consulting, Inc.</div>
          </div>
        </div>
      </div>
    </section>
  )
}