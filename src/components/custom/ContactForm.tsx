import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import * as motion from "motion/react-client"
import { Eye, Github, Linkedin, Mail, Twitter, Phone } from "lucide-react";

export default function ContactForm() {
  const stars = Array.from({ length: 40 }, (_, i) => i)
  
  return (
    <>
      <div className=" 
          overflow-visible w-[400px] h-[250px] md:mr-96
          bg-custom-blue z-[-100] opacity-15 blur-3xl rounded-full md:mx-[600px]
          md:w-[900px] md:h-[700px] md:max-w-[900px] md:max-h-[1250px] ">
      </div>
    <section id="contact" className=" relative -mt-[250px] md:-mt-[700px] flex flex-col md:flex-row items-center justify-center min-h-screen  text-white px-6 py-4">
      {/* Left Side */}
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-4xl font-bold text-primary font-display">Get In Touch</h1>
        <p className="mt-4 text-lg font-mono">
          Searching for the last piece to perfect your team?
          Let’s chat – I might be the one!
        </p>
        <div className=" relative hidden md:flex flex-col items-center justify-between mt-3">
        <div className="absolute w-full h-full">
        {stars.map((_, index) => {
        const size = Math.random() * 4 + 2; // Random size (2px - 6px)
        const duration = Math.random() * 3 + 2; // Random animation duration (2s - 5s)
        const left = Math.random() * 100; // Random X position (0% - 100%)
        const top = Math.random() * 100; // Random Y position (0% - 100%)

          return (
            <motion.div
              key={index}
              className="absolute bg-white rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`, // Random position in parent div
                top: `${top}%`,
              }}
              animate={{
                opacity: [0, 1, 0], // Fade in & out
                scale: [0.8, 1.2, 0.8], // Twinkle effect
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2, // Random delay
              }}
            />
          );
        })}
        </div>
            <div className="  w-64 mx-auto md:mx-0">
                <Image className=" z-100 " src={"/connect.png"}  alt="Lets's Connect" width={400} height={400}/>
            </div>

        </div>
      </div>

      {/* Right Side - Contact Form */}

    <div className="md:w-1/2 bg-muted/50 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
      <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
      <p className="text-sm text-gray-600 mb-6">Follow me on my social media platforms:</p>

      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-center space-x-2 bg-primary p-3 rounded-lg hover:bg-green-600 transition">
          <Mail className="h-6 w-6" />
          <span className="font-mono">biswajitkabi07@gmail.com</span>
        </div>
        <div className="flex items-center justify-center space-x-2 bg-primary p-3 rounded-lg hover:bg-green-600 transition">
          <Phone className="h-6 w-6" />
          <span className="font-mono">+91-8093120516</span>
        </div>

        <a href="https://www.linkedin.com/in/biswajit-kabi" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-primary p-3 rounded-lg hover:bg-green-600 transition">
          <Linkedin className="h-6 w-6" />
          <span className="font-mono">Linkedin</span>
        </a>

        <a href="https://x.com/biswajitkabi_7" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-primary p-3 rounded-lg hover:bg-green-600 transition">
          <Twitter className="h-6 w-6" />
          <span className="font-mono">X.com</span>
        </a>
        <a href="https://drive.google.com/file/d/1EhnqCYooSK10j2JJktzE036rUeSstxJ7/view?pli=1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-primary p-3 rounded-lg hover:bg-green-600 transition">
          <Eye className="h-6 w-6" />
          <span className="font-mono">Resume</span>
        </a>
      </div>
    </div>

    </section>
    </>
  );
}
