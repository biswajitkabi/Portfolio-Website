"use client"
import Achievements from "@/components/custom/Achievements";
import ContactForm from "@/components/custom/ContactForm";
import Experience from "@/components/custom/Experience";
import Footer from "@/components/custom/Footer";
import Links from "@/components/custom/Links";
import Navbar from "@/components/custom/Navbar";
import ProfileCard from "@/components/custom/Profile";
import Projects from "@/components/custom/Projects";
import Skills from "@/components/custom/Skills";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., API call, fetching assets)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden ">
      {loading?
      (        
        <div className="flex flex-col justify-center gap-1 items-center min-h-screen bg-background">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-t-transparent border-primary rounded-full animate-[spin_1s_linear_infinite]"></div>
          <div className="absolute inset-2 border-4 border-t-transparent border-custom-blue rounded-full animate-[spin_1.5s_linear_infinite]"></div>
        </div>
        <p className=" font-mono text-xs text-white">Great things take time...</p>
      </div>
      ):
      (<>  
      <div className=" absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/5 z-[-100]
                                w-[90vw] h-[50vh] max-w-[400px] max-h-[250px] 
                                bg-primary opacity-25 blur-3xl rounded-full md:top-1/3 md:left-2/3
                                md:w-[850px] md:h-[700px] md:max-w-[900px] md:max-h-[1250px] ">
      </div>
      <Navbar />
      <div className=" md:mt-20">
        <ProfileCard/>
      </div>
      <Links/>
      <Skills/>
      <Projects/>
      <Achievements/>
      {/* <Experience/> */}
      <ContactForm/>
      <Footer/>
      </>)}

    </div>
  );
}

