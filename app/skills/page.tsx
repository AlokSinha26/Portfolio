import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Globe, Brain, Wrench, BookOpen, Star } from "lucide-react"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 85, description: "Data Science, ML, Backend Development" },
        { name: "C", level: 80, description: "System Programming, Embedded Systems" },
        { name: "C++", level: 80, description: "Object-Oriented Programming, DSA" },
        { name: "JavaScript", level: 75, description: "Web Development, Node.js" },
      ],
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "HTML", level: 90, description: "Semantic HTML, Accessibility" },
        { name: "CSS", level: 85, description: "Responsive Design, Animations" },
        { name: "React", level: 80, description: "Component-based Architecture" },
        { name: "Node.js", level: 75, description: "Server-side JavaScript" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", level: 85, description: "Version Control, Collaboration" },
        { name: "GitHub", level: 90, description: "Code Repository, CI/CD" },
        { name: "Linux", level: 75, description: "Command Line, System Administration" },
        { name: "VS Code", level: 95, description: "Development Environment" },
      ],
    },
    {
      title: "Machine Learning & Data Science",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "scikit-learn", level: 80, description: "Classical ML Algorithms" },
        { name: "TensorFlow", level: 70, description: "Deep Learning, Neural Networks" },
        { name: "Pandas", level: 85, description: "Data Manipulation and Analysis" },
        { name: "NumPy", level: 80, description: "Numerical Computing" },
      ],
    },
  ]

  const additionalSkills = [
    "Problem Solving",
    "Data Structures",
    "Algorithms",
    "Object-Oriented Programming",
    "Database Design",
    "API Development",
    "Responsive Design",
    "Testing & Debugging",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-6">
            Technical <span className="text-blue-400">Skills</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build innovative solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-white">{skill.name}</span>
                        <span className="text-sm text-blue-400 font-semibold">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-gray-700" />
                      <p className="text-sm text-gray-400">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm animate-fade-in mb-16">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Star className="h-6 w-6 text-blue-400" />
              Additional Skills & Concepts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {additionalSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white transition-colors cursor-default text-sm py-2 px-4"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Journey */}
        <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500/50 backdrop-blur-sm animate-fade-in">
          <CardContent className="p-8 text-center">
            <BookOpen className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends, frameworks, and
              best practices. I regularly explore new technologies and work on personal projects to expand my skill set.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="bg-green-600/20 text-green-300">
                Currently Learning: Docker
              </Badge>
              <Badge variant="secondary" className="bg-green-600/20 text-green-300">
                Next: AWS Cloud
              </Badge>
              <Badge variant="secondary" className="bg-green-600/20 text-green-300">
                Exploring: GraphQL
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
