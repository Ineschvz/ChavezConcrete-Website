import Image from "next/image";
import AboutUs from "./components/aboutus";
import Sponsors from "./components/hompage-sponsors";
import Slides from "./components/homepage-slides";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-black to-gray-800 text-gray-500">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    
      </div>

      <Slides/>
      <AboutUs/>
      <Sponsors/>


    </main>
  );
}

