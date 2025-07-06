import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Linkedin, MapPin, GraduationCap, Briefcase } from "lucide-react"

export default function Resume() {
  const education = [
    {
      institution: "Thapar Institute of Engineering & Technology",
      degree: "Bachelor of Engineering (B.E.), Computer Engineering",
      period: "July 2022 - June 2026",
      location: "Patiala, Punjab",
    },
    {
      institution: "Sunbeam School Varuna",
      degree: "CBSE - Class 12th",
      period: "Graduated: 2022",
      location: "Varanasi, Uttar Pradesh",
    },
    {
      institution: "Sunbeam School Varuna",
      degree: "CBSE - Class 10th",
      period: "Graduated: 2020",
      location: "Varanasi, Uttar Pradesh",
    },
  ]

  const projects = [
    {
      title: "AI-Powered Portfolio Website",
      description:
        "Created a personal website using HTML/CSS/JS and enhanced it with AI-assisted design for responsiveness and user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "AI Tools"],
    },
    {
      title: "Movie Recommendation System (ML)",
      description:
        "Built a recommendation engine using machine learning algorithms based on user ratings and genres to suggest personalized content.",
      technologies: ["Python", "Machine Learning", "Pandas"],
    },
    {
      title: "Meditation Website (ML-based)",
      description:
        "Developed a simple web platform integrating ML to suggest personalized meditation techniques based on user input.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "ML"],
    },
    {
      title: "Amazon Clone Website",
      description:
        "Designed a responsive frontend clone of Amazon's homepage and product UI using HTML, CSS, and JS to practice UI/UX and DOM manipulation.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Tic Tac Toe Game (C/C++)",
      description:
        "Created a console-based interactive game using C and C++, focusing on game logic, condition checking, and user input handling.",
      technologies: ["C", "C++"],
    },
  ]

  const technicalSkills = [
    { category: "Languages", skills: ["C++", "C", "Kotlin"] },
    { category: "Web Development", skills: ["HTML", "CSS", "JavaScript"] },
    { category: "Database", skills: ["MySQL", "Firebase"] },
    { category: "Other", skills: ["Data Structures & Algorithms", "Git", "Android Basics"] },
    { category: "Tools/Tech", skills: ["Visual Studio Code", "Android Studio", "AI Tools for Web Design"] },
  ]

  const softSkills = [
    "Strong problem-solving mindset",
    "Team collaboration & communication",
    "Eager to learn and adapt",
    "Self-motivated and organized",
    "Analytical thinking",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Resume</span>
          </h1>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Resume Content */}
        <div className="space-y-8">
          {/* Personal Information */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Alok Sinha</h1>
                <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">
                  Aspiring Software Developer | Strong in DSA, Web & ML Projects
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Patiala, Punjab, India
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-1" />
                    sinhalok26@gmail.com
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-4 w-4 mr-1" />
                    linkedin.com/in/sinhalok7
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Objective */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Career Objective</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Motivated and adaptive final-year Computer Engineering student seeking an entry-level software
                development role. Passionate about applying knowledge in Data Structures, Machine Learning, and Web
                Development to solve real-world problems and contribute to impactful technology. Eager to learn, build,
                and grow in a dynamic work environment.
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{edu.institution}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{edu.degree}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.period} | {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {technicalSkills.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">{category.category}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white flex items-center">
                <Briefcase className="h-5 w-5 mr-2" />
                Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-2">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
