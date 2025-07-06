"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, ArrowRight, Code, Briefcase, User, Download } from "lucide-react"
import { useEffect, useState } from "react"

const typingTexts = [
  "Aspiring Software Developer",
  "Machine Learning Enthusiast",
  "Full-Stack Developer",
  "Problem Solver",
]

export default function HomePage() {
  const [currentText, setCurrentText] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = typingTexts[currentText]

        if (isDeleting) {
          setDisplayText(current.substring(0, displayText.length - 1))
        } else {
          setDisplayText(current.substring(0, displayText.length + 1))
        }

        if (!isDeleting && displayText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && displayText === "") {
          setIsDeleting(false)
          setCurrentText((prev) => (prev + 1) % typingTexts.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, displayText, isDeleting])

  const featuredProjects = [
    {
      title: "ML Image Classifier",
      description: "Deep learning model achieving 94% accuracy on image classification tasks",
      tech: ["Python", "TensorFlow", "OpenCV"],
      github: "https://github.com/AlokSinha26/ml-image-classifier",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with payment integration and admin dashboard",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/AlokSinha26/ecommerce-platform",
    },
    {
      title: "System Monitor",
      description: "Real-time system monitoring tool built with C++ and Linux system calls",
      tech: ["C++", "Linux", "Qt"],
      github: "https://github.com/AlokSinha26/system-monitor",
    },
  ]

  const skills = ["Python", "C++", "React", "Machine Learning", "Linux", "Git"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src="/alok-photo.jpg"
              alt="Alok Sinha"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 border-4 border-purple-500/30 shadow-2xl"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
            Alok Sinha
          </h1>

          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Building things with code & curiosity. Passionate about machine learning, web development, and creating
            solutions that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Link href="/projects">
                <Briefcase className="mr-2 h-5 w-5" />
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/AlokSinha26" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/sinhalok7" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:sinhalok26@gmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20">
              <CardContent className="pt-6">
                <Code className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-2xl font-bold mb-2">15+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/20">
              <CardContent className="pt-6">
                <User className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-2xl font-bold mb-2">Fresh</h3>
                <p className="text-muted-foreground">Graduate Ready</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20">
              <CardContent className="pt-6">
                <Download className="h-12 w-12 mx-auto mb-4 text-indigo-400" />
                <h3 className="text-2xl font-bold mb-2">100%</h3>
                <p className="text-muted-foreground">Commitment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Core Skills</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/30 animate-stagger"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
          <Button asChild variant="outline">
            <Link href="/skills">
              View All Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work in machine learning, web development, and system programming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="group hover:shadow-lg transition-all duration-300 animate-stagger"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" asChild className="w-full">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm actively seeking opportunities to contribute to innovative projects and grow as a developer. Let's build
            something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resume">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
