"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import data from "@/data";

const projects = data.projects

export default function Projects() {
  return (
    <section id="projects" className=" relative max-w-4xl w-full mx-auto text-center pt-8 md:pt-17">
      {/* Title Animation */}
      <motion.h2
        className="text-5xl font-display text-primary font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ repeat:0, duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(88, 49, 217, 1)" ,transition:{duration:0.3}}}
            className="rounded-xl"
          >
            <Card className="bg-black h-full mx-3 md:mx-0 text-white p-4 rounded-xl shadow-lg overflow-hidden">
              {/* Image */}
              <div className=" hidden md:block relative w-full h-40 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Card Content */}
              <CardContent className="text-left mt-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold font-display text-primary">
                    {project.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer" ><Github className="text-primary" /></a>
                  </motion.div>
                </div>

                <p className="text-gray-400 font-mono text-sm mt-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      className="bg-gray-800 font-display text-white px-3 py-1 text-sm rounded-md"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
