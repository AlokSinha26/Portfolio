import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Portfolio Website",
      description:
        "Created a personal website using HTML/CSS/JS and enhanced it with AI-assisted design for responsiveness and user experience.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["HTML", "CSS", "JavaScript", "AI Tools"],
      githubUrl: "https://github.com/AlokSinha26",
      liveUrl: "#",
    },
    {
      title: "Movie Recommendation System",
      description:
        "Built a recommendation engine using machine learning algorithms based on user ratings and genres to suggest personalized content.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
      githubUrl: "https://github.com/AlokSinha26",
      liveUrl: "#",
    },
    {
      title: "Meditation Website (ML-based)",
      description:
        "Developed a simple web platform integrating ML to suggest personalized meditation techniques based on user input.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "ML"],
      githubUrl: "https://github.com/AlokSinha26",
      liveUrl: "#",
    },
    {
      title: "Amazon Clone Website",
      description:
        "Designed a responsive frontend clone of Amazon's homepage and product UI using HTML, CSS, and JS to practice UI/UX and DOM manipulation.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/AlokSinha26",
      liveUrl: "#",
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "Created a console-based interactive game using C and C++, focusing on game logic, condition checking, and user input handling.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["C", "C++", "Game Logic", "Console Application"],
      githubUrl: "https://github.com/AlokSinha26",
      liveUrl: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my portfolio of projects showcasing skills in web development, machine learning, and software
            engineering
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="p-0">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
