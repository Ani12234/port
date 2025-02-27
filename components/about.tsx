"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Layers, Sparkles } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills = [
    {
      name: "Frontend Development",
      icon: <Layers className="w-8 h-8 text-primary" />,
      description:
        "Expert in React, Next.js, and modern UI frameworks with a focus on responsive and accessible design.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      name: "Backend Development",
      icon: <Database className="w-8 h-8 text-primary" />,
      description:
        "Building robust and scalable backend systems with Node.js, Express, and various database technologies.",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
    },
    {
      name: "AI Integration",
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      description: "Implementing AI solutions to enhance user experiences and automate complex processes.",
      technologies: ["TensorFlow", "OpenAI API", "Machine Learning", "Natural Language Processing"],
    },
    {
      name: "Full-Stack Development",
      icon: <Code className="w-8 h-8 text-primary" />,
      description: "End-to-end application development with a focus on performance, security, and user experience.",
      technologies: ["MERN Stack", "Zustand", "Redux", "GraphQL", "Serverless"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            I'm a passionate software developer specializing in creating innovative web solutions with a focus on AI
            integration, React, and full-stack development. My goal is to build applications that are not only
            functional but also provide exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} className="skill-card group" variants={itemVariants}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 backdrop-blur-sm">{skill.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{skill.name}</h3>
                  <p className="text-muted-foreground mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

