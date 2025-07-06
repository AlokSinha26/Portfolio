"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Globe, Wrench, Brain, Database, Cloud, ArrowRight, BookOpen } from "lucide-react"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Python", level: 90, description: "Primary language for ML and backend development" },
        { name: "C", level: 85, description: "System programming and competitive coding" },
        { name: "C++", level: 85, description: "Object-oriented programming and algorithms" },
        { name: "JavaScript", level: 80, description: "Frontend and full-stack web development" },
        { name: "Java", level: 75, description: "Object-oriented programming and Android development" },
        { name: "SQL", level: 80, description: "Database queries and data manipulation" },
      ],
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5", level: 90, description: "Semantic markup and modern web standards" },
        { name: "CSS3", level: 85, description: "Responsive design and modern layouts" },
        { name: "React", level: 85, description: "Component-based UI development" },
        { name: "Node.js", level: 80, description: "Server-side JavaScript development" },
        { name: "Next.js", level: 75, description: "Full-stack React framework" },
        { name: "Tailwind CSS", level: 85, description: "Utility-first CSS framework" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Git", level: 85, description: "Version control and collaboration" },
        { name: "GitHub", level: 85, description: "Code hosting and project management" },
        { name: "Linux", level: 80, description: "Command line and system administration" },
        { name: "VS Code", level: 90, description: "Primary development environment" },
        { name: "Docker", level: 70, description: "Containerization and deployment" },
        { name: "Postman", level: 75, description: "API testing and development" },
      ],
    },
    {
      title: "Machine Learning & Data Science",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "scikit-learn", level: 85, description: "Machine learning algorithms and models" },
        { name: "TensorFlow", level: 80, description: "Deep learning and neural networks" },
        { name: "Pandas", level: 85, description: "Data manipulation and analysis" },
        { name: "NumPy", level: 85, description: "Numerical computing and arrays" },
        { name: "Matplotlib", level: 80, description: "Data visualization and plotting" },
        { name: "Jupyter", level: 85, description: "Interactive development and analysis" },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "MySQL", level: 80, description: "Relational database management" },
        { name: "MongoDB", level: 75, description: "NoSQL document database" },
        { name: "PostgreSQL", level: 70, description: "Advanced relational database" },
        { name: "SQLite", level: 85, description: "Lightweight embedded database" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-teal-500 to-blue-500",
      skills: [
        { name: "AWS", level: 65, description: "Cloud computing and services" },
        { name: "Vercel", level: 80, description: "Frontend deployment and hosting" },
        { name: "Netlify", level: 75, description: "Static site deployment" },
        { name: "Firebase", level: 70, description: "Backend-as-a-Service platform" },
      ],
    },
  ]

  const additionalSkills = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "System Design",
    "API Development",
    "Responsive Design",
    "Testing & Debugging",
    "Agile Methodology",
    "Problem Solving",
    "Technical Writing",
    "Code Review",
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="p-6 hover:shadow-lg transition-all duration-300 animate-stagger"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <Card className="p-8 mb-16 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20 border-purple-500/20">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-6 text-center">Additional Skills & Concepts</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/30 animate-stagger"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Journey */}
        <Card className="p-8 mb-16">
          <CardContent className="pt-6">
            <div className="text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
                Technology evolves rapidly, and I'm committed to staying current with the latest trends and best
                practices. I regularly engage in online courses, contribute to open-source projects, and experiment with
                new technologies to expand my skill set and stay ahead of the curve.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <h4 className="font-semibold mb-2 text-purple-400">Currently Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced React Patterns, GraphQL, Kubernetes, and Deep Learning with PyTorch
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2 text-blue-400">Next Goals</h4>
                  <p className="text-sm text-muted-foreground">
                    System Design, Microservices Architecture, and Cloud-Native Development
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2 text-indigo-400">Interests</h4>
                  <p className="text-sm text-muted-foreground">
                    AI/ML Research, Blockchain Technology, and Quantum Computing
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Put These Skills to Work?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm excited to apply my technical skills to real-world projects and continue growing as a developer. Let's
            discuss how I can contribute to your team!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/projects">
                <Code className="mr-2 h-5 w-5" />
                View My Projects
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <ArrowRight className="mr-2 h-5 w-5" />
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
