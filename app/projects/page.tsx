"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star, GitFork, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  const featuredProjects = [
    {
      id: 1,
      title: "ML Image Classifier",
      description:
        "A deep learning model built with TensorFlow that achieves 94% accuracy on image classification tasks. Features data preprocessing, model training, and a web interface for real-time predictions.",
      longDescription:
        "This project demonstrates advanced machine learning techniques including convolutional neural networks, data augmentation, and transfer learning. The model was trained on a custom dataset and deployed with a Flask web interface.",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "NumPy"],
      github: "https://github.com/AlokSinha26/ml-image-classifier",
      demo: "https://ml-classifier-demo.vercel.app",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
      stats: { stars: 15, forks: 8, views: 120 },
    },
    {
      id: 2,
      title: "Full-Stack E-Commerce Platform",
      description:
        "A complete e-commerce solution with user authentication, product management, shopping cart, payment integration, and admin dashboard. Built with modern web technologies.",
      longDescription:
        "Features include user registration/login, product catalog with search and filters, shopping cart functionality, secure payment processing with Stripe, order management, and comprehensive admin panel.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
      github: "https://github.com/AlokSinha26/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
      stats: { stars: 23, forks: 12, views: 200 },
    },
    {
      id: 3,
      title: "Real-Time System Monitor",
      description:
        "A comprehensive system monitoring tool built with C++ that tracks CPU usage, memory consumption, disk I/O, and network activity in real-time with a modern GUI interface.",
      longDescription:
        "Utilizes Linux system calls and /proc filesystem to gather system metrics. Features include real-time graphs, process management, system alerts, and performance logging.",
      tech: ["C++", "Qt", "Linux", "System Calls", "SQLite", "CMake"],
      github: "https://github.com/AlokSinha26/system-monitor",
      demo: null,
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
      stats: { stars: 18, forks: 6, views: 95 },
    },
  ]

  const otherProjects = [
    {
      id: 4,
      title: "Custom OS Kernel Module",
      description:
        "A Linux kernel module that implements custom system calls and demonstrates low-level system programming concepts.",
      tech: ["C", "Linux Kernel", "Assembly", "Makefile"],
      github: "https://github.com/AlokSinha26/kernel-module",
      stats: { stars: 12, forks: 4, views: 78 },
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description:
        "Interactive dashboard for visualizing complex datasets with multiple chart types, filters, and real-time updates.",
      tech: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      github: "https://github.com/AlokSinha26/data-dashboard",
      demo: "https://data-viz-demo.vercel.app",
      stats: { stars: 9, forks: 3, views: 65 },
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      description:
        "Decentralized voting application using blockchain technology to ensure transparency and security in elections.",
      tech: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
      github: "https://github.com/AlokSinha26/blockchain-voting",
      stats: { stars: 21, forks: 9, views: 145 },
    },
    {
      id: 7,
      title: "Chat Application",
      description:
        "Real-time chat application with multiple rooms, file sharing, and user authentication using WebSocket technology.",
      tech: ["Node.js", "Socket.io", "React", "MongoDB", "Express"],
      github: "https://github.com/AlokSinha26/chat-app",
      demo: "https://chat-demo.vercel.app",
      stats: { stars: 14, forks: 7, views: 89 },
    },
    {
      id: 8,
      title: "Algorithm Visualizer",
      description:
        "Interactive tool for visualizing sorting and pathfinding algorithms with step-by-step animations and explanations.",
      tech: ["JavaScript", "HTML5 Canvas", "CSS3", "React"],
      github: "https://github.com/AlokSinha26/algorithm-visualizer",
      demo: "https://algo-viz-demo.vercel.app",
      stats: { stars: 16, forks: 5, views: 112 },
    },
    {
      id: 9,
      title: "Weather Prediction Model",
      description:
        "Machine learning model for weather forecasting using historical data and multiple regression techniques.",
      tech: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
      github: "https://github.com/AlokSinha26/weather-prediction",
      stats: { stars: 11, forks: 6, views: 73 },
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in machine learning, web development, system programming, and more. Each project
            represents a learning journey and demonstrates different aspects of my technical skills.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 animate-stagger ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="lg:flex">
                  <div className="lg:w-1/2">
                    <div className="relative h-64 lg:h-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl mb-2 text-purple-400">{project.title}</CardTitle>
                      <p className="text-muted-foreground">{project.description}</p>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.longDescription}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="h-4 w-4" />
                          <span>{project.stats.forks}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{project.stats.views}</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild className="flex-1">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                        {project.demo && (
                          <Button asChild variant="outline" className="flex-1 bg-transparent">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 animate-stagger"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-3 w-3" />
                      <span>{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{project.stats.views}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <Card className="p-8 text-center bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20 border-purple-500/20">
          <CardContent className="pt-6">
            <Github className="h-16 w-16 mx-auto mb-4 text-purple-400" />
            <h3 className="text-2xl font-bold mb-4">Explore More on GitHub</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These are just highlights of my work. Visit my GitHub profile to see all my projects, contributions, and
              the evolution of my coding journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="https://github.com/AlokSinha26" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Visit GitHub Profile
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Discuss a Project
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
