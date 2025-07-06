import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, GraduationCap, User, Heart, Target } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Alok Sinha</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know more about my journey, passion for technology, and what drives me as an aspiring software
            developer
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1 animate-fade-in">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-30"></div>
                  <Image
                    src="/alok-photo.jpg"
                    alt="Alok Sinha"
                    width={192}
                    height={192}
                    className="relative w-48 h-48 rounded-full object-cover border-4 border-blue-400/50"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Alok Sinha</h2>
                <p className="text-blue-400 mb-4 text-lg">Aspiring Software Developer</p>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-400" />
                    <span>Patiala, Punjab, India</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <User className="h-4 w-4 text-blue-400" />
                    <span>Computer Engineering Student</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-400" />
                    <span>Open to Opportunities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm animate-fade-in">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Heart className="h-5 w-5 text-blue-400" />
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Hi, I'm <strong className="text-white">Alok Sinha</strong> — a passionate and enthusiastic fresher
                    in the world of software development. Currently pursuing Computer Engineering, I'm driven by
                    curiosity and the endless possibilities that technology offers.
                  </p>
                  <p>
                    My journey began with a simple "Hello, World!" program, and since then, I've been captivated by the
                    power of code to solve real-world problems. I believe in building things with both{" "}
                    <strong className="text-blue-400">code & curiosity</strong>, constantly learning and exploring new
                    technologies.
                  </p>
                  <p>
                    As an enthusiastic fresher, I'm <strong className="text-blue-400">open to opportunities</strong>{" "}
                    where I can contribute, learn, and grow. I'm particularly excited about roles that challenge me to
                    apply my skills in meaningful ways while continuing to expand my knowledge.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Skills & Interests */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm animate-fade-in">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-400" />
                  Areas of Expertise & Interest
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Core Skills</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-blue-400 font-medium mb-2">Machine Learning</h4>
                        <p className="text-gray-300 text-sm">
                          Building intelligent systems and working with data to create predictive models and solve
                          complex problems.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-blue-400 font-medium mb-2">Web Development</h4>
                        <p className="text-gray-300 text-sm">
                          Creating responsive, user-friendly web applications using modern frameworks and technologies.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-blue-400 font-medium mb-2">C/C++ Programming</h4>
                        <p className="text-gray-300 text-sm">
                          System-level programming, data structures, algorithms, and performance-critical applications.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-blue-400 font-medium mb-2">Operating Systems</h4>
                        <p className="text-gray-300 text-sm">
                          Understanding system internals, process management, and low-level programming concepts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">What Drives Me</h3>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Solving complex problems through innovative solutions</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Continuous learning and staying updated with latest technologies</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Building applications that make a positive impact</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Collaborating with teams to create amazing products</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Contributing to open-source projects and the developer community</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm animate-fade-in">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-400" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-400 pl-4">
                    <h3 className="text-lg font-semibold text-white">Bachelor of Engineering - Computer Engineering</h3>
                    <p className="text-blue-400 font-medium">Thapar Institute of Engineering & Technology</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        2022 - 2026
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
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
