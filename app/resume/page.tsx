import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, MapPin, Calendar, GraduationCap, Briefcase, Award, ExternalLink, FileText } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-blue-400">Resume</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">Download my resume or view it online</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="/resume.pdf" download="Alok_Sinha_Resume.pdf">
              <Download className="w-5 h-5 mr-2" />
              Download PDF Resume
            </a>
          </Button>
        </div>

        {/* Resume Content */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm animate-fade-in">
          <CardContent className="p-8">
            {/* Header Section */}
            <div className="text-center mb-8 pb-8 border-b border-gray-700">
              <h1 className="text-4xl font-bold text-white mb-2">Alok Sinha</h1>
              <p className="text-xl text-blue-400 mb-4">Aspiring Software Developer</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>sinhalok26@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-blue-400" />
                  <a
                    href="https://github.com/AlokSinha26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    github.com/AlokSinha26
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-blue-400" />
                  <a
                    href="https://www.linkedin.com/in/sinhalok7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    linkedin.com/in/sinhalok7
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>Patiala, Punjab, India</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-400" />
                Professional Summary
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Passionate Computer Engineering student with strong foundation in programming, data structures, and
                algorithms. Experienced in Machine Learning, Web Development, and System Programming. Enthusiastic
                fresher seeking opportunities to contribute to innovative projects and grow as a software developer.
                Building things with code & curiosity.
              </p>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-blue-400" />
                Education
              </h2>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-400 pl-4">
                  <h3 className="text-lg font-semibold text-white">Bachelor of Engineering - Computer Engineering</h3>
                  <p className="text-blue-400 font-medium">Thapar Institute of Engineering & Technology</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      July 2022 - June 2026
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Patiala, Punjab
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-300 mb-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-blue-400 text-blue-300 text-xs">
                        Data Structures & Algorithms
                      </Badge>
                      <Badge variant="outline" className="border-blue-400 text-blue-300 text-xs">
                        Operating Systems
                      </Badge>
                      <Badge variant="outline" className="border-blue-400 text-blue-300 text-xs">
                        Database Management
                      </Badge>
                      <Badge variant="outline" className="border-blue-400 text-blue-300 text-xs">
                        Computer Networks
                      </Badge>
                      <Badge variant="outline" className="border-blue-400 text-blue-300 text-xs">
                        Software Engineering
                      </Badge>
                      <Badge variant="outline" className="border-blue-400 text-blue-300 text-xs">
                        Machine Learning
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Technical Skills</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-white mb-2">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-blue-400 text-blue-300">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-blue-400 text-blue-300">
                      C
                    </Badge>
                    <Badge variant="outline" className="border-blue-400 text-blue-300">
                      C++
                    </Badge>
                    <Badge variant="outline" className="border-blue-400 text-blue-300">
                      JavaScript
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Web Technologies</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-blue-400 text-blue-300">
                      HTML
                    </Badge>
                    <Badge variant="outline" className="border-blue-400 text-blue-300">
                      CSS
                    </Badge>
                    <Badge variant="outline" className="border-blue-400 text-blue-300">
                      React
                    </Badge>
                    <Badge variant="outline" className="border-blue-400 text-blue-300">
                      Node.js
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-blue-400 text-blue-300">
                      Git
                    </Badge>
                    <Badge variant="outline" className="border-blue-400 text-blue-300">
                      GitHub
                    </Badge>
                    <Badge variant="outline" className="border-blue-400 text-blue-300">
                      Linux
                    </Badge>
                    <Badge variant="outline" className="border-blue-400 text-blue-300">
                      VS Code
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">ML/Data Science</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-blue-400 text-blue-300">
                      scikit-learn
                    </Badge>
                    <Badge variant="outline" className="border-blue-400 text-blue-300">
                      TensorFlow
                    </Badge>
                    <Badge variant="outline" className="border-blue-400 text-blue-300">
                      Pandas
                    </Badge>
                    <Badge variant="outline" className="border-blue-400 text-blue-300">
                      NumPy
                    </Badge>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-blue-400" />
                Key Projects
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-400 pl-4">
                  <h3 className="text-lg font-semibold text-white">Machine Learning Image Classifier</h3>
                  <p className="text-sm text-gray-400 mb-2">Nov 2024</p>
                  <p className="text-gray-300 mb-2">
                    Developed an advanced deep learning model for multi-class image classification achieving 94%
                    accuracy using TensorFlow and Keras.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 text-xs">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 text-xs">
                      TensorFlow
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 text-xs">
                      OpenCV
                    </Badge>
                  </div>
                </div>

                <div className="border-l-2 border-blue-400 pl-4">
                  <h3 className="text-lg font-semibold text-white">Full-Stack E-Commerce Platform</h3>
                  <p className="text-sm text-gray-400 mb-2">Oct 2024</p>
                  <p className="text-gray-300 mb-2">
                    Built a complete e-commerce solution with React frontend, Node.js backend, payment integration, and
                    admin dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 text-xs">
                      React
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 text-xs">
                      Node.js
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 text-xs">
                      MongoDB
                    </Badge>
                  </div>
                </div>

                <div className="border-l-2 border-blue-400 pl-4">
                  <h3 className="text-lg font-semibold text-white">Real-Time System Monitor</h3>
                  <p className="text-sm text-gray-400 mb-2">Sep 2024</p>
                  <p className="text-gray-300 mb-2">
                    Created a high-performance system monitoring application in C++ with Qt GUI for real-time
                    performance tracking.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 text-xs">
                      C++
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 text-xs">
                      Qt
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 text-xs">
                      Linux
                    </Badge>
                  </div>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-blue-400" />
                Achievements & Certifications
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">
                    Completed multiple online courses in Machine Learning and Data Science
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Active contributor to open-source projects on GitHub</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Participated in coding competitions and hackathons</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">
                    Strong problem-solving skills with focus on algorithmic thinking
                  </span>
                </div>
              </div>
            </section>

            {/* Interests */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Interests</h2>
              <p className="text-gray-300">
                Machine Learning, Artificial Intelligence, Web Development, Open Source Contribution, System
                Programming, Competitive Programming, Technology Innovation, Software Architecture
              </p>
            </section>
          </CardContent>
        </Card>

        {/* Download CTA */}
        <div className="text-center mt-8">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="/resume.pdf" download="Alok_Sinha_Resume.pdf">
              <Download className="w-5 h-5 mr-2" />
              Download PDF Resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
