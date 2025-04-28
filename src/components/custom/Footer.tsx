"use client"
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Github, Linkedin, MailOpen } from "lucide-react";

export default function Footer() {
   const yourEmail = "biswajitkabi.dev@gmail.com";

   const handleGmailClick = () => {
       window.open(`https://mail.google.com/mail/?view=cm&cc=${yourEmail}`, "_blank")
   }
    
  return (
    <footer className="bg-muted/50 mb-3 -mt-4 text-white p-4 rounded-xl max-w-4xl mx-auto flex items-center justify-between">
      {/* Navigation Links */}
      <nav className="flex space-x-6 text-lg">
        <p className=" font-mono">Developed By <span className=" text-primary">Biswajit Kabi</span>!</p>
      </nav>

      {/* Social Icons */}
      <div className="flex space-x-4">
        <Button variant="ghost" size="icon" onClick={handleGmailClick}>
          <MailOpen className="text-white" />
        </Button>
        <a href="https://www.linkedin.com/in/biswajit-kabi" className=" hover:cursor-pointer" target="_blank" >
          <Button variant="ghost" size="icon">
            <Linkedin className="text-white text-2xl" />
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/biswajit-kabi" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon">
            <Github className="text-white text-2xl" />
          </Button>
        </a>
      </div>
    </footer>
  );
}
