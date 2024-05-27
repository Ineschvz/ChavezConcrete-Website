import React from "react"


const AboutUs = () => {
    return (
        <section className="bg-gray-100 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Welcome to Chavez Concrete
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Chavez Concrete is a mission, vision, and core values. We strive to create your vision. With a dedicated team and innovative solutions, we are committed to keep you all happy.
          </p>
          <div className="mt-6">
            <a href="/about" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Learn more about us
            </a>
          </div>
        </div>
      </div>
        </section>
    )
}

export default AboutUs;