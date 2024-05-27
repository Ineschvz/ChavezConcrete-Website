import React from "react"


const Sponsors = () => {
    const companyLogos = [
        "/company1-logo.svg",
        "/company2-logo.svg",
        "/company3-logo.svg",
        // Add more company logos as needed
    ];
    
    return (
<section className="bg-indigo-500 py-12">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            We Work alongside 

        </h2>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
                        {companyLogos.map((logo, index) => (
                            <div key={index} className="flex justify-center">
                                <img src={logo} alt={`Company ${index + 1}`} className="h-12 md:h-16 lg:h-20" />
                            </div>
                        ))}
                    </div>

    </div>
</div>

</section>
    )
}

export default Sponsors;