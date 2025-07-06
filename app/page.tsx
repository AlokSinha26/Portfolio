"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const phrases = [
    "Aspiring Software Developer",
    "Machine Learning Enthusiast",
    "Web Development Passionate",
    "Problem Solver",
  ]

  useEffect(() => {
    const currentPhrase = phrases[currentIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentPhrase.length) {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, phrases])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                Hi, I'm <span className="text-white">Alok Sinha</span>
              </h1>

              <div className="text-2xl sm:text-3xl lg:text-4xl text-blue-300 font-medium h-12">
                <span>{displayText}</span>
                <span className="animate-pulse">|</span>
              </div>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Building things with code & curiosity. Computer Engineering student passionate about creating innovative
                solutions and building impactful software applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="group bg-blue-600 hover:bg-blue-700">
                  <Link href="/projects">
                    View My Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                >
                  <Link href="/contact">
                    Get In Touch
                    <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start gap-4 pt-4">
                <Button variant="ghost" size="sm" asChild className="text-gray-400 hover:text-white">
                  <Link href="https://github.com/AlokSinha26" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild className="text-gray-400 hover:text-white">
                  <Link href="https://www.linkedin.com/in/sinhalok7" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild className="text-gray-400 hover:text-white">
                  <Link href="mailto:sinhalok26@gmail.com">
                    <Mail className="h-6 w-6" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative animate-fade-in">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <Image
                  src="/alok-photo.jpg"
                  alt="Alok Sinha"
                  width={320}
                  height={320}
                  className="relative rounded-full object-cover border-4 border-blue-400/50 shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-gray-300">Projects</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-gray-300">Technologies</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-blue-400 mb-2">2+</div>
              <div className="text-gray-300">Years Learning</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-gray-300">Curiosity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 border-gray-700 hover:border-blue-500">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ML Classifier</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">Machine Learning Image Classifier</h3>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/projects" aria-label="View project details">
                      <ExternalLink className="h-4 w-4 text-blue-400" />
                    </Link>
                  </Button>
                </div>
                <p className="text-gray-300 mb-4">
                  Advanced ML model for image classification using TensorFlow and Python with 94% accuracy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                    TensorFlow
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                    OpenCV
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 border-gray-700 hover:border-blue-500">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E-Commerce</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">Full-Stack E-Commerce Platform</h3>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/projects" aria-label="View project details">
                      <ExternalLink className="h-4 w-4 text-blue-400" />
                    </Link>
                  </Button>
                </div>
                <p className="text-gray-300 mb-4">
                  Complete e-commerce solution with React frontend, Node.js backend, and payment integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                    React
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                    MongoDB
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 border-gray-700 hover:border-blue-500">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">System Monitor</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">Real-Time System Monitor</h3>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/projects" aria-label="View project details">
                      <ExternalLink className="h-4 w-4 text-blue-400" />
                    </Link>
                  </Button>
                </div>
                <p className="text-gray-300 mb-4">
                  High-performance system monitoring tool written in C++ with real-time metrics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                    C++
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                    Qt
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                    Linux
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
            >
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="border-blue-400 text-blue-300">
                  Python
                </Badge>
                <Badge variant="outline" className="border-blue-400 text-blue-300">
                  C
                </Badge>
                <Badge variant="outline" className="border-blue-400 text-blue-300">
                  C++
                </Badge>
              </div>
            </Card>

            <Card className="text-center p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Web Development</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="border-blue-400 text-blue-300">
                  HTML
                </Badge>
                <Badge variant="outline" className="border-blue-400 text-blue-300">
                  CSS
                </Badge>
                <Badge variant="outline" className="border-blue-400 text-blue-300">
                  JavaScript
                </Badge>
                <Badge variant="outline" className="border-blue-400 text-blue-300">
                  React
                </Badge>
              </div>
            </Card>

            <Card className="text-center p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Tools</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="border-blue-400 text-blue-300">
                  Git
                </Badge>
                <Badge variant="outline" className="border-blue-400 text-blue-300">
                  GitHub
                </Badge>
                <Badge variant="outline" className="border-blue-400 text-blue-300">
                  Linux
                </Badge>
              </div>
            </Card>

            <Card className="text-center p-6 bg-gray-800/50 border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">ML/DS</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="border-blue-400 text-blue-300">
                  scikit-learn
                </Badge>
                <Badge variant="outline" className="border-blue-400 text-blue-300">
                  TensorFlow
                </Badge>
                <Badge variant="outline" className="border-blue-400 text-blue-300">
                  Pandas
                </Badge>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
            >
              <Link href="/skills">
                View All Skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">
                Get In Touch
                <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
            >
              <Link href="/resume">
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
