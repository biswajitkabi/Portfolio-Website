"use client";
import data from "@/data";
import { motion } from "framer-motion";

const achievements = data.achievements

const Achievements = () => {
  return (
    <>

    <section id="achievements" className="  pt-20 text-white flex flex-col items-center">
      <motion.h2
        className="font-display text-5xl font-bold text-primary md:mb-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ repeat:0, duration: 0.8 }} 
      >
        Achievements
      </motion.h2>
      <div className=" 
        w-[90vw] h-[50vh] max-w-[400px] max-h-[250px] md:mr-96
        bg-custom-blue z-[-100] opacity-20 blur-3xl rounded-full md:mx-[600px]
        md:w-[900px] md:h-[700px] md:max-w-[900px] md:max-h-[1250px] md:mt-[-700px]">
    </div>
      <div className="  grid -mt-40 md:mt-0 md:grid-cols-2 gap-8 w-10/12">
        {achievements.map((ach, index) => (
          <motion.div
            key={index}
            className=" bg-muted/50 p-6 rounded-2xl shadow-lg flex z-10 items-center gap-6 border border-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 ,boxShadow: "0px 0px 20px rgba(88, 49, 217, 1)" , transition:{duration:0.3} }}
          >
            <motion.div
              className="text-5xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              {ach.icon}
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold text-primary font-display">{ach.title}</h3>
              <p className="text-gray-300 font-mono">{ach.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Achievements;
