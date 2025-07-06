"use client"

import { useActionState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Linkedin, Github, MapPin, Send, ExternalLink, CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm, type ContactFormState } from "@/app/actions/contact"

const initialState: ContactFormState = {}

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  // Scroll to top when form is successfully submitted
  useEffect(() => {
    if (state.success) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [state.success])

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "sinhalok26@gmail.com",
      link: "mailto:sinhalok26@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/sinhalok7",
      link: "https://www.linkedin.com/in/sinhalok7",
      description: "Let's connect professionally",
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "github.com/AlokSinha26",
      link: "https://github.com/AlokSinha26",
      description: "Check out my code repositories",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Patiala, Punjab, India",
      link: null,
      description: "Currently based in",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology. Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Success/Error Messages */}
        {state.message && (
          <div className="mb-8">
            <Alert
              className={`${
                state.success
                  ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                  : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"
              }`}
            >
              {state.success ? (
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
              )}
              <AlertDescription
                className={`${state.success ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"}`}
              >
                {state.message}
              </AlertDescription>
            </Alert>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Whether you're looking for a passionate developer to join your team, want to collaborate on a project,
                or simply want to discuss technology trends, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-all">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-900 dark:text-white font-semibold mb-1">{info.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{info.description}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1 group"
                          >
                            {info.value}
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <span className="text-gray-700 dark:text-gray-300">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Profile Image */}
            <div className="text-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upscalemedia-transformed-54mA5BOJaTgJL51BCII9oc1FOdI4kq.jpeg"
                alt="Alok Sinha"
                className="w-48 h-48 rounded-full mx-auto border-4 border-blue-200 dark:border-blue-800 shadow-lg object-cover"
              />
            </div>

            {/* Quick Links */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Quick Actions</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Explore more about my work and background
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 bg-transparent"
                >
                  <a href="/resume">View Resume</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 bg-transparent"
                >
                  <a href="/projects">View Projects</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-green-300 dark:border-green-600 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 bg-transparent"
                >
                  <a href="/skills">View Skills</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white text-2xl">Send a Message</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400"
                        required
                        disabled={isPending}
                      />
                      {state.errors?.name && (
                        <p className="text-red-600 dark:text-red-400 text-sm mt-1">{state.errors.name[0]}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400"
                        required
                        disabled={isPending}
                      />
                      {state.errors?.email && (
                        <p className="text-red-600 dark:text-red-400 text-sm mt-1">{state.errors.email[0]}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400"
                      required
                      disabled={isPending}
                    />
                    {state.errors?.subject && (
                      <p className="text-red-600 dark:text-red-400 text-sm mt-1">{state.errors.subject[0]}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me more about your project or opportunity..."
                      className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 min-h-[120px]"
                      required
                      disabled={isPending}
                    />
                    {state.errors?.message && (
                      <p className="text-red-600 dark:text-red-400 text-sm mt-1">{state.errors.message[0]}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="bg-white/60 dark:bg-gray-800/30 backdrop-blur-sm border-gray-200 dark:border-gray-700">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Response Time</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I typically respond to messages within 24-48 hours. For urgent matters, feel free to reach out directly
                via email or LinkedIn.
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  <a href="mailto:sinhalok26@gmail.com">
                    <Mail size={16} className="mr-2" />
                    Email Me
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  <a href="https://www.linkedin.com/in/sinhalok7" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={16} className="mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
