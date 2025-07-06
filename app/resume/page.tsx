import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, MapPin, Calendar, GraduationCap, Briefcase, Award, ExternalLink } from "lucide-react"

export default function ResumePage() {
  const personalInfo = {
    name: "Alok Sinha",
    title: "Aspiring Software Developer",
    email: "sinhalok26@gmail.com",
    phone: "+91-XXXXXXXXXX",
    location: "Patiala, Punjab, India",
    linkedin: "linkedin.com/in/sinhalok7",
    github: "github.com/AlokSinha26",
  }

  const education = [
    {
      institution: "Thapar Institute of Engineering & Technology",
      degree: "Bachelor of Engineering (B.E.), Computer Engineering",
      period: "July 2022 - June 2026",
      location: "Patiala, Punjab",
      gpa: "8.5/10",
      relevant: ["Data Structures & Algorithms", "Operating Systems", "Database Management", "Computer Networks"],
    },
    {
      institution: "Sunbeam School Varuna",
      degree: "CBSE - Class 12th (Science)",
      period: "2020 - 2022",
      location: "Varanasi, Uttar Pradesh",
      percentage: "92%",
    },
  ]

  const experience = [
    {
      title: "Software Development Intern",
      company: "Tech Startup (Remote)",
      period: "June 2024 - August 2024",
      description: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with cross-functional teams to implement new features",
        "Optimized application performance resulting in 25% faster load times",
        "Participated in code reviews and followed agile development practices",
      ],
    },
    {
      title: "Open Source Contributor",
      company: "Various Projects",
      period: "2023 - Present",
      description: [
        "Contributed to multiple open-source projects on GitHub",
        "Fixed bugs and implemented new features in Python and JavaScript projects",
        "Improved documentation and wrote unit tests",
        "Collaborated with developers worldwide through pull requests and issues",
      ],
    },
  ]

  const projects = [
    {
      name: "Machine Learning Image Classifier",
      tech: ["Python", "TensorFlow", "OpenCV"],
      description: "Built a CNN model for multi-class image classification with 94% accuracy",
    },
    {
      name: "Full-Stack E-Commerce Platform",
      tech: ["React", "Node.js", "MongoDB"],
      description: "Developed complete e-commerce solution with payment integration and admin panel",
    },
    {
      name: "Real-Time System Monitor",
      tech: ["C++", "Qt", "Linux APIs"],
      description: "Created cross-platform system monitoring tool with real-time performance metrics",
    },
  ]

  const skills = {
    "Programming Languages": ["Python", "C/C++", "JavaScript", "HTML/CSS", "SQL"],
    "Frameworks & Libraries": ["React", "Node.js", "Express", "TensorFlow", "scikit-learn"],
    Databases: ["MongoDB", "MySQL", "PostgreSQL"],
    "Tools & Technologies": ["Git", "GitHub", "Linux", "VS Code", "Docker"],
    Concepts: ["Data Structures", "Algorithms", "OOP", "Machine Learning", "Web Development"],
  }

  const achievements = [
    "Solved 200+ problems on LeetCode and HackerRank",
    "Participated in multiple coding competitions and hackathons",
    "Maintained 3.8+ GPA throughout college",
    "Active contributor to open-source community",
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Resume -{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Alok Sinha
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Aspiring Software Developer | Computer Engineering Student
          </p>
          <Button asChild size="lg" className="mb-8">
            <a href="/resume.pdf" download>
              <Download className="w-5 h-5 mr-2" />
              Download PDF Resume
            </a>
          </Button>
        </div>

        {/* Personal Information */}
        <Card className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900 dark:text-white">Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {personalInfo.linkedin}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <a
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {personalInfo.github}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.institution}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.degree}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </span>
                    {edu.gpa && <span className="font-medium">GPA: {edu.gpa}</span>}
                    {edu.percentage && <span className="font-medium">{edu.percentage}</span>}
                  </div>
                  {edu.relevant && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
              <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Key Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                  <div className="flex flex-wrap gap-2 my-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
              <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              Achievements & Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">This resume is also available as a downloadable PDF</p>
          <Button asChild variant="outline">
            <a href="/resume.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download PDF Version
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
