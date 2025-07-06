"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Calendar, GraduationCap, Code, Brain, Server, Terminal } from "lucide-react"

export default function AboutPage() {
  const coreSkills = [
    {
      name: "Machine Learning",
      icon: Brain,
      description: "Building intelligent systems with Python, TensorFlow, and scikit-learn",
    },
    {
      name: "Web Development",
      icon: Code,
      description: "Creating responsive web applications with React, Node.js, and modern frameworks",
    },
    {
      name: "System Programming",
      icon: Terminal,
      description: "Low-level programming with C/C++ and understanding of operating systems",
    },
    { name: "Backend Development", icon: Server, description: "Designing scalable server architectures and APIs" },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know the person behind the code - my journey, passions, and what drives me to create
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="p-8 text-center bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20">
              <CardContent className="pt-6">
                <Image
                  src="/alok-photo.jpg"
                  alt="Alok Sinha"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6 border-4 border-purple-500/30 shadow-xl"
                />
                <h2 className="text-2xl font-bold mb-2">Alok Sinha</h2>
                <p className="text-purple-400 font-medium mb-4">Aspiring Software Developer</p>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Patiala, Punjab, India</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Available for opportunities</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>B.E. Computer Engineering</span>
                  </div>
                </div>

                <Button asChild className="w-full mt-6">
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-8">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">My Story</h3>
                <div className="prose prose-gray dark:prose-invert max-w-none space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Hello! I'm Alok Sinha, a passionate and enthusiastic fresher in the field of software development.
                    Currently pursuing my Bachelor's in Computer Engineering from Thapar Institute of Engineering and
                    Technology, I'm on an exciting journey of turning ideas into reality through code.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    My fascination with technology began early, but it truly ignited when I wrote my first "Hello World"
                    program in C. Since then, I've been captivated by the endless possibilities that programming offers
                    - from building intelligent systems with machine learning to creating seamless web experiences.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    What drives me is the ability to solve real-world problems through technology. Whether it's
                    developing a machine learning model that can classify images with high accuracy, building a
                    full-stack web application, or diving deep into system-level programming with C/C++, I approach each
                    challenge with curiosity and determination.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="text-lg font-semibold">Bachelor of Engineering - Computer Engineering</h4>
                    <p className="text-purple-400 font-medium">Thapar Institute of Engineering and Technology</p>
                    <p className="text-sm text-muted-foreground">2021 - 2025 (Expected)</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems,
                      Machine Learning, Computer Networks, Software Engineering
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Core Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreSkills.map((skill, index) => (
              <Card
                key={skill.name}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-stagger"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                      <skill.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                      <p className="text-muted-foreground text-sm">{skill.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What Drives Me */}
        <Card className="p-8 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20 border-purple-500/20">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-6 text-center">What Drives Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-purple-400">Continuous Learning</h4>
                <p className="text-muted-foreground text-sm">
                  Technology evolves rapidly, and I'm committed to staying current with the latest trends, tools, and
                  best practices in software development.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-400">Problem Solving</h4>
                <p className="text-muted-foreground text-sm">
                  I thrive on tackling complex challenges and finding elegant solutions that make a real difference in
                  people's lives.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-indigo-400">Innovation</h4>
                <p className="text-muted-foreground text-sm">
                  I believe in pushing boundaries and exploring new possibilities to create innovative solutions that
                  shape the future.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply chat about
            technology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                <Code className="mr-2 h-5 w-5" />
                View My Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
