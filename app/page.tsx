"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef, lazy } from "react"
import { Mail, Linkedin, Github, Send, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ProjectImage } from "./components/ProjectImages"

// Lazy load the 3D Canvas component
const Canvas3D = lazy(() => import("./components/Canvas3D"))

// Custom hook for typing animation
function useTypingAnimation(phrases: string[], speed = 100, deleteSpeed = 50, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState("")
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentPhrase.length) {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    )

    return () => clearTimeout(timeout)
  }, [displayText, currentPhraseIndex, isDeleting, phrases, speed, deleteSpeed, pauseTime])

  return displayText
}

// Loading Skeleton for Project Cards
function ProjectCardSkeleton() {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <div className="aspect-video bg-gray-700 animate-pulse rounded-t-lg"></div>
      <CardHeader>
        <div className="h-6 bg-gray-700 animate-pulse rounded mb-2"></div>
        <div className="h-4 bg-gray-700 animate-pulse rounded mb-1"></div>
        <div className="h-4 bg-gray-700 animate-pulse rounded w-3/4"></div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <div className="h-6 w-16 bg-gray-700 animate-pulse rounded-full"></div>
          <div className="h-6 w-20 bg-gray-700 animate-pulse rounded-full"></div>
          <div className="h-6 w-14 bg-gray-700 animate-pulse rounded-full"></div>
        </div>
        <div className="h-10 bg-gray-700 animate-pulse rounded"></div>
      </CardContent>
    </Card>
  )
}

// Canvas Loading Component
function CanvasLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

// Intersection Observer Hook for Navigation
function useIntersectionObserver() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return activeSection
}

// Hook for lazy loading sections
function useLazySection(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: "100px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [projectsLoaded, setProjectsLoaded] = useState(false)
  const activeSection = useIntersectionObserver()
  const { ref: projectsRef, isVisible: projectsVisible } = useLazySection()
  const { ref: skillsRef, isVisible: skillsVisible } = useLazySection()
  const { ref: contactRef, isVisible: contactVisible } = useLazySection()

  const typingText = useTypingAnimation([
    "Aspiring Software Developer",
    "Computer Engineering Student",
    "Problem Solver & Innovator",
    "Tech Enthusiast",
  ])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  // Simulate loading projects data
  useEffect(() => {
    if (projectsVisible && !projectsLoaded) {
      const timer = setTimeout(() => {
        setProjectsLoaded(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [projectsVisible, projectsLoaded])

  const projects = [
    {
      title: "Machine Learning Classifier",
      description:
        "Advanced ML model for image classification using deep learning techniques with TensorFlow and Python.",
      tech: ["Python", "TensorFlow", "Pandas", "NumPy"],
      github: "https://github.com/AlokSinha26",
      imageType: "ml" as const,
    },
    {
      title: "Full-Stack Web Application",
      description: "Modern web application with React frontend, Node.js backend, and MongoDB database integration.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/AlokSinha26",
      imageType: "web" as const,
    },
    {
      title: "System Performance Monitor",
      description: "High-performance system monitoring tool written in C++ with real-time memory and CPU tracking.",
      tech: ["C++", "CMake", "Linux", "Qt"],
      github: "https://github.com/AlokSinha26",
      imageType: "system" as const,
    },
    {
      title: "Custom OS Kernel Module",
      description:
        "Operating system kernel module implementing custom process scheduling and memory management algorithms.",
      tech: ["C", "Assembly", "Linux Kernel", "GDB"],
      github: "https://github.com/AlokSinha26",
      imageType: "kernel" as const,
    },
  ]

  const skills = [
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "C",
    "C++",
    "Git",
    "Linux",
    "Machine Learning",
    "OS Concepts",
  ]

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm Alok Sinha
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                {typingText}
                <span className="animate-pulse">|</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed">
                Computer Engineering student at Thapar Institute, passionate about Data Structures & Algorithms, Machine
                Learning, and Web Development. Ready to solve real-world problems with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>

              {/* Quick Links */}
              <div className="flex space-x-6 mt-8">
                <a
                  href="mailto:sinhalok26@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/AlokSinha26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sinhalok7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative animate-fade-in">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
                <Image
                  src="/alok-photo.jpg"
                  alt="Alok Sinha"
                  width={320}
                  height={320}
                  className="relative rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">6+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Learning</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">∞</div>
              <div className="text-gray-600 dark:text-gray-300">Curiosity</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Hi, I'm Alok Sinha — a passionate learner exploring Machine Learning, Web Development, C/C++, and Operating
            Systems. I love building innovative solutions and constantly expanding my knowledge in cutting-edge
            technologies.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-20 px-4 bg-gray-800/30 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsVisible && projectsLoaded
              ? projects.map((project, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group"
                  >
                    <div className="aspect-video bg-gray-700 rounded-t-lg overflow-hidden">
                      <ProjectImage
                        type={project.imageType}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <Github size={16} />
                            View on GitHub
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              : Array.from({ length: 4 }).map((_, index) => <ProjectCardSkeleton key={index} />)}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} id="skills" className="py-20 px-4 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </h2>
          {skillsVisible ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-gray-900 dark:text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 11 }).map((_, index) => (
                <div key={index} className="h-16 bg-gray-700 animate-pulse rounded-lg"></div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 px-4 bg-gray-800/30 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          {contactVisible ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Let's Connect</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                  technology.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:sinhalok26@gmail.com"
                    className="flex items-center gap-4 p-4 bg-white/80 dark:bg-gray-800/50 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <Mail
                      size={24}
                      className="text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300"
                    />
                    <div>
                      <div className="text-gray-900 dark:text-white font-medium">Email</div>
                      <div className="text-gray-600 dark:text-gray-400">sinhalok26@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sinhalok7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/80 dark:bg-gray-800/50 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <Linkedin
                      size={24}
                      className="text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300"
                    />
                    <div>
                      <div className="text-gray-900 dark:text-white font-medium">LinkedIn</div>
                      <div className="text-gray-600 dark:text-gray-400">linkedin.com/in/sinhalok7</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/AlokSinha26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/80 dark:bg-gray-800/50 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <Github
                      size={24}
                      className="text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300"
                    />
                    <div>
                      <div className="text-gray-900 dark:text-white font-medium">GitHub</div>
                      <div className="text-gray-600 dark:text-gray-400">github.com/AlokSinha26</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="bg-white/80 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white">Send a Message</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 min-h-[120px]"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="h-8 bg-gray-700 animate-pulse rounded"></div>
                <div className="h-20 bg-gray-700 animate-pulse rounded"></div>
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="h-16 bg-gray-700 animate-pulse rounded-lg"></div>
                  ))}
                </div>
              </div>
              <div className="h-96 bg-gray-700 animate-pulse rounded-lg"></div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p>&copy; 2024 Alok Sinha. All rights reserved. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  )
}
