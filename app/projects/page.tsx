import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star, Calendar, Code } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Machine Learning Image Classifier",
      description:
        "Advanced deep learning model for multi-class image classification using convolutional neural networks. Achieved 94% accuracy on test dataset with custom CNN architecture and data augmentation techniques.",
      longDescription:
        "This project implements a sophisticated image classification system using TensorFlow and Keras. The model was trained on a dataset of 50,000+ images across 10 different categories. Features include real-time prediction, web interface, and comprehensive model evaluation metrics.",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib", "Flask"],
      github: "https://github.com/AlokSinha26/ml-image-classifier",
      demo: "https://ml-classifier-demo.vercel.app",
      featured: true,
      status: "Completed",
      date: "Nov 2024",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      id: 2,
      title: "Full-Stack E-Commerce Platform",
      description:
        "Complete e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment integration, admin dashboard, and inventory management.",
      longDescription:
        "A comprehensive e-commerce platform built with modern web technologies. Includes features like product catalog, shopping cart, user profiles, order management, Stripe payment processing, and admin panel for inventory management.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Tailwind CSS"],
      github: "https://github.com/AlokSinha26/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
      featured: true,
      status: "Completed",
      date: "Oct 2024",
      gradient: "from-green-600 to-blue-600",
    },
    {
      id: 3,
      title: "Real-Time System Monitor",
      description:
        "High-performance system monitoring application written in C++ with Qt GUI. Provides real-time CPU, memory, disk, and network usage tracking with historical data visualization.",
      longDescription:
        "A lightweight system monitoring tool that provides real-time insights into system performance. Built with C++ for optimal performance, featuring multi-threading, graphical visualization, and alert system for threshold breaches.",
      tech: ["C++", "Qt", "CMake", "Linux APIs", "SQLite", "Charts"],
      github: "https://github.com/AlokSinha26/system-monitor",
      featured: true,
      status: "Completed",
      date: "Sep 2024",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      id: 4,
      title: "Custom OS Kernel Module",
      description:
        "Linux kernel module implementing custom process scheduling algorithm with priority-based task management and memory optimization for improved system responsiveness.",
      longDescription:
        "A kernel-level implementation of a custom process scheduler that improves system responsiveness for interactive applications. Includes memory management optimizations and detailed performance metrics.",
      tech: ["C", "Assembly", "Linux Kernel", "GDB", "Makefile"],
      github: "https://github.com/AlokSinha26/custom-scheduler",
      featured: false,
      status: "Completed",
      date: "Aug 2024",
      gradient: "from-red-600 to-orange-600",
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description:
        "Interactive dashboard for data analysis and visualization using React and D3.js. Supports multiple chart types, real-time data updates, and collaborative sharing features.",
      longDescription:
        "A comprehensive data visualization platform that allows users to upload datasets and create interactive charts and graphs. Features include real-time data streaming, export capabilities, and collaborative sharing.",
      tech: ["React", "D3.js", "Node.js", "PostgreSQL", "WebSocket", "Chart.js"],
      github: "https://github.com/AlokSinha26/data-dashboard",
      demo: "https://data-viz-dashboard.vercel.app",
      featured: false,
      status: "In Progress",
      date: "Dec 2024",
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      description:
        "Decentralized voting application built on Ethereum blockchain ensuring transparency and immutability of votes with smart contract-based vote recording.",
      longDescription:
        "A secure and transparent voting system leveraging blockchain technology. Features include voter authentication, smart contract-based vote recording, and real-time result tracking with complete audit trail.",
      tech: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask", "Truffle"],
      github: "https://github.com/AlokSinha26/blockchain-voting",
      featured: false,
      status: "In Progress",
      date: "Jan 2025",
      gradient: "from-yellow-600 to-orange-600",
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects, from machine learning applications to full-stack web development and
            system programming
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Star className="h-6 w-6 text-yellow-400" />
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 border-gray-700 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden rounded-t-lg relative">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-center">
                      <Code className="h-12 w-12 text-white mb-2 mx-auto" />
                      <span className="text-white font-bold text-lg">{project.title.split(" ")[0]}</span>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-yellow-600/20 text-yellow-300">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-400">{project.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-blue-400 text-blue-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="outline" className="border-blue-400 text-blue-300 text-xs">
                        +{project.tech.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
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

        {/* All Projects */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">All Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 border-gray-700 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-video overflow-hidden rounded-t-lg relative">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-center">
                      <Code className="h-10 w-10 text-white mb-2 mx-auto" />
                      <span className="text-white font-bold">{project.title.split(" ")[0]}</span>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    {project.featured && (
                      <Badge variant="secondary" className="bg-yellow-600/20 text-yellow-300">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="ml-auto">
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm">
                    {project.description.length > 100
                      ? project.description.substring(0, 100) + "..."
                      : project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-blue-400 text-blue-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="border-blue-400 text-blue-300 text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
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
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <Github className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
              <p className="text-gray-300 mb-6">
                Check out my GitHub profile for more projects, contributions, and code samples.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href="https://github.com/AlokSinha26" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  Visit GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
