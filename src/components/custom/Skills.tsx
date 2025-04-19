"use client"
import data from "@/data";
import { Badge } from "../ui/badge"
import { motion } from "framer-motion";

const Skills = ()=>{
    const skills = data.skills
    return(
      <>
        <div className=" 
                                w-[400px] h-[250px] md:-ml-44
                                bg-custom-blue z-[-100] opacity-20 blur-3xl rounded-full
                                md:w-[900px] md:h-[700px] md:max-w-[900px] -mt-[250px] md:mt-0 md:max-h-[1250px] ">
       </div>
        <section id="skills" className="relative z-10 max-w-4xl mx-auto text-center pt-8 md:pt-16  md:mt-[-700px] ">
        {/* <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/5 w-[500px] h-[300px] bg-primary opacity-30 blur-3xl rounded-full"></div> */}
        <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ repeat:0, duration: 0.8 }} 
        className="text-5xl font-display font-bold text-primary mb-4">My Skills</motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Badge key={index} className=" transition-transform ease-in duration-300 hover:shadow-xs hover:ring-2 hover:scale-110  hover:ring-custom-blue hover:shadow-custom-blue bg-muted/40 font-mono text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md">
              {skill}
            </Badge>
          ))}
        </div>
      </section>
      </>
    )
}

export default Skills