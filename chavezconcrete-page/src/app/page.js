import Image from "next/image";
import AboutUs from "./components/aboutus";
import Sponsors from "./components/hompage-sponsors";
import Slider from "./components/Slider"
import RootLayout from "./layout";
import Map from "./components/map";




export default function Home() {
  const accessToken = 'pk.eyJ1IjoiaW5lc2NodnowMSIsImEiOiJjbHhrdHZoM2YwNHh2MmtwdDA2amFxZnF6In0.euocNqqEdapzDmsAhj7MmA'
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-gray-500">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    
      </div>
      <div className=" w-full min-h-screen grid place-items-center">
        <Slider/>
      </div>
      <div>
      <AboutUs/>
      </div>
      <div>
      <Sponsors/>
      </div>
    </main>
  );
}


// bg-gradient-to-r from-[#cBbdba] to-[#a49d9b]