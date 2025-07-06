"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  GraduationCap,
  Award,
  Code,
  Briefcase,
  User,
} from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  const skills = {
    languages: ["Python", "C", "C++", "JavaScript", "Java", "SQL"],
    web: ["HTML5", "CSS3", "React", "Node.js", "Next.js", "Express", "Tailwind CSS"],
    tools: ["Git", "GitHub", "Linux", "VS Code", "Docker", "Postman"],
    ml: ["scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    databases: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    cloud: ["AWS", "Vercel", "Netlify", "Firebase"],
  }

  const projects = [
    {
      title: "ML Image Classifier",
      period: "Oct 2024 - Nov 2024",
      description: "Developed a deep learning model achieving 94% accuracy on image classification tasks",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
      achievements: [
        "Implemented CNN architecture with data augmentation techniques",
        "Created web interface for real-time image predictions",
        "Optimized model performance through hyperparameter tuning",
      ],
    },
    {
      title: "Full-Stack E-Commerce Platform",
      period: "Aug 2024 - Sep 2024",
      description: "Built complete e-commerce solution with payment integration and admin dashboard",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      achievements: [
        "Implemented secure user authentication and authorization",
        "Integrated Stripe payment gateway for secure transactions",
        "Developed responsive admin panel for inventory management",
      ],
    },
    {
      title: "Real-Time System Monitor",
      period: "Jun 2024 - Jul 2024",
      description: "Created comprehensive system monitoring tool with modern GUI interface",
      technologies: ["C++", "Qt", "Linux", "SQLite"],
      achievements: [
        "Utilized Linux system calls for real-time metrics collection",
        "Designed intuitive GUI with real-time graphs and alerts",
        "Implemented process management and performance logging",
      ],
    },
  ]

  const achievements = [
    "Dean's List for Academic Excellence (2022-2024)",
    "Winner - College Coding Competition (2023)",
    "Completed 100+ coding problems on LeetCode",
    "Active contributor to open-source projects",
    "Certified in Python Programming (HackerRank)",
    "Completed Machine Learning Specialization (Coursera)",
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Resume
          </h1>
          <p className="text-xl text-muted-foreground mb-8">Download my complete resume or view the details below</p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            <a href="/resume.pdf" download="Alok_Sinha_Resume.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download PDF Resume
            </a>
          </Button>
        </div>

        {/* Contact Information */}
        <Card className="mb-8 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20 border-purple-500/20">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">Alok Sinha</h2>
              <p className="text-xl text-purple-400 font-medium">Aspiring Software Developer</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="h-4 w-4 text-purple-400" />
                <a href="mailto:sinhalok26@gmail.com" className="hover:text-purple-400 transition-colors">
                  sinhalok26@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Patiala, Punjab, India</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Github className="h-4 w-4 text-indigo-400" />
                <a
                  href="https://github.com/AlokSinha26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                >
                  AlokSinha26
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Linkedin className="h-4 w-4 text-cyan-400" />
                <a
                  href="https://www.linkedin.com/in/sinhalok7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  sinhalok7
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-purple-400" />
              Professional Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Enthusiastic and dedicated Computer Engineering student with a strong foundation in software development,
              machine learning, and system programming. Passionate about creating innovative solutions and eager to
              contribute to cutting-edge projects. Proven ability to work with modern technologies and frameworks, with
              a keen interest in continuous learning and professional growth. Seeking opportunities to apply technical
              skills in a dynamic environment while contributing to meaningful projects.
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-blue-400" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold">Bachelor of Engineering - Computer Engineering</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2021 - 2025 (Expected)</span>
                  </div>
                </div>
                <p className="text-purple-400 font-medium mb-2">
                  Thapar Institute of Engineering and Technology, Patiala
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Operating Systems, Database
                  Management Systems, Machine Learning, Computer Networks, Software Engineering, Object-Oriented
                  Programming, System Programming
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Dean's List
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Academic Excellence
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Skills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-indigo-400" />
              Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-purple-400">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-3 text-blue-400">Web Development</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.web.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-3 text-indigo-400">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-3 text-cyan-400">Machine Learning & Data Science</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.ml.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Projects */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-cyan-400" />
              Key Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={project.title}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-lg font-semibold text-purple-400">{project.title}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{project.period}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                  {index < projects.length - 1 && <Separator className="mt-6" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements & Certifications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-400" />
              Achievements & Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20 border-purple-500/20">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm actively seeking opportunities to contribute to innovative projects and grow as a developer. Feel free
              to reach out to discuss potential collaborations or opportunities.
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
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Projects
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
