import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Globe, Database, Cpu, Brain, Wrench } from "lucide-react"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 85, description: "Data Science, ML, Web Development" },
        { name: "C/C++", level: 80, description: "System Programming, DSA" },
        { name: "JavaScript", level: 75, description: "Web Development, Node.js" },
        { name: "HTML/CSS", level: 90, description: "Frontend Development" },
      ],
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "React", level: 80, description: "Frontend Framework" },
        { name: "Node.js", level: 70, description: "Backend Development" },
        { name: "Express.js", level: 65, description: "Web Framework" },
        { name: "Tailwind CSS", level: 85, description: "Styling Framework" },
      ],
    },
    {
      title: "Machine Learning & Data Science",
      icon: Brain,
      skills: [
        { name: "TensorFlow", level: 70, description: "Deep Learning Framework" },
        { name: "scikit-learn", level: 75, description: "Machine Learning Library" },
        { name: "Pandas", level: 80, description: "Data Manipulation" },
        { name: "NumPy", level: 85, description: "Numerical Computing" },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 70, description: "NoSQL Database" },
        { name: "MySQL", level: 65, description: "Relational Database" },
        { name: "PostgreSQL", level: 60, description: "Advanced SQL Database" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Git", level: 85, description: "Version Control" },
        { name: "GitHub", level: 90, description: "Code Repository" },
        { name: "Linux", level: 75, description: "Operating System" },
        { name: "VS Code", level: 95, description: "Code Editor" },
      ],
    },
    {
      title: "System Programming",
      icon: Cpu,
      skills: [
        { name: "Operating Systems", level: 70, description: "OS Concepts & Implementation" },
        { name: "Data Structures", level: 85, description: "Algorithms & Problem Solving" },
        { name: "Computer Networks", level: 65, description: "Network Programming" },
        { name: "System Design", level: 60, description: "Architecture & Scalability" },
      ],
    },
  ]

  const certifications = [
    "Python for Data Science - Coursera",
    "Machine Learning Fundamentals",
    "Web Development Bootcamp",
    "Data Structures & Algorithms",
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Expertise
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                  <category.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Learning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Certifications & Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Currently Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-green-500 text-green-700 dark:text-green-400">
                    Advanced React Patterns
                  </Badge>
                  <Badge variant="outline" className="border-green-500 text-green-700 dark:text-green-400">
                    Docker & Kubernetes
                  </Badge>
                  <Badge variant="outline" className="border-green-500 text-green-700 dark:text-green-400">
                    System Design
                  </Badge>
                  <Badge variant="outline" className="border-green-500 text-green-700 dark:text-green-400">
                    Cloud Computing (AWS)
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  I'm constantly expanding my skill set and staying up-to-date with the latest technologies and industry
                  trends.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
