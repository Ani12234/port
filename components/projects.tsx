"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Card3D from "@/components/card-3d"
import ParallaxSection from "@/components/parallax-section"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: "SuitSpot",
      description: "AI-powered e-commerce platform for suits with size recommendation system",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "AI", "E-commerce", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "React-based frontend with stylish UI",
        "AI-driven size recommendation system",
        "Full e-commerce functionality (cart, checkout, filtering)",
        "Responsive design for all devices",
      ],
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website built with Next.js and Framer Motion",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Responsive design with modern animations",
        "Dark/light mode support",
        "Interactive UI components",
        "Optimized performance",
      ],
    },
    {
      title: "Task Management App",
      description: "Full-stack task management application with real-time updates",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      features: [
        "Real-time updates with Socket.io",
        "User authentication and authorization",
        "Drag and drop interface",
        "Task categorization and filtering",
      ],
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-secondary/20 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <ParallaxSection baseVelocity={0.1}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Here are some of my recent projects showcasing my skills in web development, AI integration, and creating
              engaging user experiences.
            </p>
          </motion.div>
        </ParallaxSection>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card3D className="h-full">
                <div className="project-card h-full">
                  <div className="relative h-64 overflow-hidden rounded-t-xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>

                    <div className="flex flex-wrap gap-2 my-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Key Features:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button asChild size="sm" className="animated-button">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

