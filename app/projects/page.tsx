import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink, Star } from "lucide-react"
import { ProjectImage } from "../components/ProjectImages"

export default function ProjectsPage() {
  const featuredProjects = [
    {
      title: "Machine Learning Image Classifier",
      description:
        "Advanced deep learning model for multi-class image classification using TensorFlow and Keras. Achieved 94% accuracy on test dataset with custom CNN architecture.",
      longDescription:
        "This project implements a sophisticated image classification system using convolutional neural networks. The model was trained on a dataset of 50,000+ images across 10 different categories. Features include data augmentation, transfer learning with pre-trained models, and real-time prediction capabilities.",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
      github: "https://github.com/AlokSinha26/ml-image-classifier",
      demo: "https://ml-classifier-demo.vercel.app",
      imageType: "ml" as const,
      featured: true,
      status: "Completed",
    },
    {
      title: "Full-Stack E-Commerce Platform",
      description:
        "Modern e-commerce web application with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment integration, and admin dashboard.",
      longDescription:
        "A complete e-commerce solution built with modern web technologies. Includes features like product catalog, shopping cart, user profiles, order management, payment processing with Stripe, and comprehensive admin panel for inventory management.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Tailwind CSS"],
      github: "https://github.com/AlokSinha26/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
      imageType: "web" as const,
      featured: true,
      status: "Completed",
    },
    {
      title: "Real-Time System Monitor",
      description:
        "High-performance system monitoring application written in C++ with real-time CPU, memory, and network usage tracking. Features cross-platform compatibility and low resource overhead.",
      longDescription:
        "A lightweight system monitoring tool that provides real-time insights into system performance. Built with C++ for optimal performance, featuring multi-threading for concurrent monitoring, graphical visualization of metrics, and alert system for threshold breaches.",
      tech: ["C++", "Qt", "CMake", "Linux APIs", "Windows APIs", "SQLite"],
      github: "https://github.com/AlokSinha26/system-monitor",
      imageType: "system" as const,
      featured: true,
      status: "Completed",
    },
  ]

  const allProjects = [
    ...featuredProjects,
    {
      title: "Custom OS Kernel Module",
      description:
        "Linux kernel module implementing custom process scheduling algorithm with priority-based task management and memory optimization.",
      longDescription:
        "A kernel-level implementation of a custom process scheduler that improves system responsiveness for interactive applications. Includes memory management optimizations and detailed performance metrics.",
      tech: ["C", "Assembly", "Linux Kernel", "GDB", "Makefile"],
      github: "https://github.com/AlokSinha26/custom-scheduler",
      imageType: "kernel" as const,
      featured: false,
      status: "Completed",
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "Interactive dashboard for data analysis and visualization using D3.js and React. Supports multiple chart types and real-time data updates.",
      longDescription:
        "A comprehensive data visualization platform that allows users to upload datasets and create interactive charts and graphs. Features include real-time data streaming, export capabilities, and collaborative sharing.",
      tech: ["React", "D3.js", "Node.js", "PostgreSQL", "WebSocket"],
      github: "https://github.com/AlokSinha26/data-dashboard",
      demo: "https://data-viz-dashboard.vercel.app",
      imageType: "web" as const,
      featured: false,
      status: "In Progress",
    },
    {
      title: "Blockchain Voting System",
      description:
        "Decentralized voting application built on Ethereum blockchain ensuring transparency and immutability of votes.",
      longDescription:
        "A secure and transparent voting system leveraging blockchain technology. Features include voter authentication, smart contract-based vote recording, and real-time result tracking with complete audit trail.",
      tech: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
      github: "https://github.com/AlokSinha26/blockchain-voting",
      imageType: "web" as const,
      featured: false,
      status: "In Progress",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects, from machine learning applications to full-stack web development
          </p>
        </div>

        {/* Project Tabs */}
        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="all">All Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="featured">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700"
                >
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <ProjectImage
                      type={project.imageType}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      >
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                    </div>
                    <CardTitle className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 4).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 4} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button asChild size="sm" className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
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
          </TabsContent>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700"
                >
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <ProjectImage
                      type={project.imageType}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      {project.featured && (
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                        >
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                    </div>
                    <CardTitle className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button asChild size="sm" className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
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
          </TabsContent>
        </Tabs>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Want to see more?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Check out my GitHub profile for more projects, contributions, and code samples.
              </p>
              <Button asChild size="lg">
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
