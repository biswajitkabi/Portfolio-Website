"use client"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import * as motion from "motion/react-client"
import { useEffect, useState } from "react";

const examples = ["Full Stack Developer" , "Devops Enthusiast"]
const Typerwrite = (props:{examples:string[]})=>{

    const [index,setIndex] = useState(0);

    // const LETTER_DELAY : number = 0.1
    const LETTER_DELAY : number = 0.025
    const BOX_FADE_DURATION:number = 0.125
    const FADE_DELAY:number = 4
    const MAIN_FADE_DURATION:number = 0.25
    const SWAP_DELAY_IN_MS:number = 4500

    const {examples} = props
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setIndex(prev=>(prev+1)%examples.length)
        },SWAP_DELAY_IN_MS)
        return ()=>clearInterval(intervalId)
    },[])
    return(<>
        <motion.h2 className="text-5xl font-display text-primary font-bold mt-3">{
            examples[index].split("").map((l,i)=>{
                return(<motion.span
                 initial={{
                    opacity:1
                 }}
                 animate={{
                    opacity:0
                 }}
                 transition={{
                    delay:FADE_DELAY,
                    duration:MAIN_FADE_DURATION,
                    ease:"easeInOut"
                 }}
                className=" relative" key={`${index}-${i}`}>
                    <motion.span
                    initial={{
                        opacity:0
                    }}
                    animate={{
                        opacity:1
                    }}
                    transition={{
                        delay: i*LETTER_DELAY,
                        duration:0
                    }}
                    >{l}</motion.span>
                    <motion.span
                    initial={{
                        opacity:0
                    }}
                    animate={{
                        opacity:[0,1,0]
                    }}
                    transition={{
                        times:[0,0.1,1],
                        delay: i*LETTER_DELAY,
                        duration:BOX_FADE_DURATION,
                        ease:"easeInOut"
                    }}
                    className=" absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-primary"/>
                </motion.span>)
            })
        }</motion.h2>
    </>)
}

export default function ProfileCard() {
  return (
    <section id="home">
    <Card className="md:w-4/5 max-w-4/5 mx-auto p-6 bg-transparent border-none">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <motion.div 
        initial={{ x: -1083 }} 
        animate={{ x: 0 }} 
        transition={{ type: "tween", duration:0.5}}
        className="text-white text-center md:text-left flex flex-col gap-4 md:max-w-3/4 ">
          <span className=" self-center font-display inline-block bg-primary text-black py-1 rounded-md  text-center text-sm font-bold px-3 md:self-start md:h-13 md:w-52 md:text-lg md:py-3 ">
            Hi there! I’m Biswajit!
          </span>
          {/* <h2 className="text-5xl font-display text-primary font-bold mt-3">Full Stack Developer</h2> */}
          <Typerwrite examples={examples}/>
          <p className="mt-2 font-mono text-gray-300">
          Aspiring Software Engineer with a strong foundation in Data Structures and Full Stack Development, transforming challenges into opportunities for growth.
          </p>
          <p className="mt-2 font-mono text-gray-300">
          Passionate about exploring new technologies and pushing boundaries.
          </p>
          <p className="mt-2 font-mono text-gray-300">
          Mastering the balance between college attendance and upskilling.
          </p>
        </motion.div>
        <motion.div
        initial={{ x: 1000 }} 
        animate={{ x: 0 }} 
        transition={{ type: "tween", duration:0.8 }} 
        className="relative w-44 h-52 md:w-72 md:h-80 md:justify-self-center rounded-lg overflow-hidden border-2  border-green-400">
          <Image
            src="/biswa-profile.jpg" // Change this to the actual image path
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>
    </Card>
    </section>
  );
}