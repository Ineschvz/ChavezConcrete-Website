import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar"
import Footer from "./components/footer";
import Link from "next/link";
// import Head from 'next/head';
import 'mapbox-gl/dist/mapbox-gl.css'; // Import Mapbox GL CSS
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'; // Import Mapbox Geocoder CSS if needed


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chavez Concrete Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar/>

        <main> {children} </main>

        <Footer />
        <script src="https://smtpjs.com/v3/smtp.js"> 
        </script>
      </body>
    </html>
  );
}
