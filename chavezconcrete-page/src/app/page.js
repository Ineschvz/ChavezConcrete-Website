import Image from "next/image";
import About from "./pages/aboutus"
import Contact from "./pages/contact";
import Services from "./pages/services";
import Testimonials from "./pages/testimonials";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-black to-gray-800 text-gray-500">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to Chavez Concrete
        </p>
      </div>
      <About/>
      <Contact/>
      <Services/> 
      <Testimonials/>

    </main>
  );
}