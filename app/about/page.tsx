import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, GraduationCap, User } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
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

  const softSkills = [
    "Strong problem-solving mindset",
    "Team collaboration & communication",
    "Eager to learn and adapt",
    "Self-motivated and organized",
    "Analytical thinking",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Alok Sinha
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know more about my journey, education, and what drives my passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="text-center">
                  <Image
                    src="/alok-photo.jpg"
                    alt="Alok Sinha"
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-200 dark:border-blue-800 object-cover"
                  />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Alok Sinha</h2>
                  <p className="text-blue-600 dark:text-blue-400 mb-4">Aspiring Software Developer</p>
                  <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Patiala, Punjab, India</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
                    <User className="h-4 w-4 mr-2" />
                    <span>Computer Engineering Student</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Career Objective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Motivated and adaptive final-year Computer Engineering student seeking an entry-level software
                  development role. Passionate about applying knowledge in Data Structures, Machine Learning, and Web
                  Development to solve real-world problems and contribute to impactful technology. Eager to learn,
                  build, and grow in a dynamic work environment.
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
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{edu.institution}</h3>
                      <p className="text-blue-600 dark:text-blue-400">{edu.degree}</p>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-4">{edu.period}</span>
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{edu.location}</span>
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
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
