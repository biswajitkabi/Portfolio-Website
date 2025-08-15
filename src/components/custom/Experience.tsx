"use client";
import * as motion from "motion/react-client";
import data from "@/data";

const { experienceData } = data; 

export default function Experience() {
  return (
    <section id="experience" className="px-6 pt-16 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ repeat: 0, duration: 0.8 }}
        className="text-5xl text-center font-display mx-auto font-bold text-primary mb-6"
      >
        Work Experience
      </motion.h2>

      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative bg-muted/50 p-6 rounded-2xl border border-primary shadow-lg"
          >
            <h3 className="text-3xl font-semibold text-green-300">{exp.title}</h3>
            <p className="text-lg text-gray-300 font-medium mt-1">
              {exp.company} • {exp.location}
            </p>
            <p className="text-base text-gray-400 mb-3">{exp.duration}</p>
            <ul className="list-disc list-inside text-gray-300">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
