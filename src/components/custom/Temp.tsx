"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
const projects = [
  {
    title: "Hero Fan",
    description: "A full-stack (Marvel) Hero Fan webpage.A full-stack (Marvel) Hero Fan webpage.",
    image: "/hero-fan.png",
    technologies: ["JavaScript", "React.js", "Next.js", "Node.js"],
  },
  {
    title: "SMTH",
    description: "A mobile application for professional networking.",
    image: "/smth.png",
    technologies: ["TypeScript", "React Native"],
  },
  {
    title: "FdF",
    description: "A 3D wireframe visualization tool.",
    image: "/fdf.png",
    technologies: ["C", "Makefile", "MLX42 library"],
  },
];

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto text-center py-1">
      <h2 className="text-5xl font-display text-primary font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.5)" }}
          >
            <Card className="bg-black mx-3 md:mx-0 text-white p-4 rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
              <div className="relative w-full h-40 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <CardContent className="text-left mt-4 flex flex-col flex-grow">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold font-display text-primary">{project.title}</h3>
                  <Github className="font-bold text-primary" />
                </div>
                <p className="text-gray-400 font-mono text-sm mt-2 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} className="bg-gray-800 font-display text-white px-3 py-1 text-sm rounded-md">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
