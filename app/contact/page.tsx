"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Github, Linkedin, MapPin, Phone, Send, MessageCircle } from "lucide-react"
import { useState } from "react"
import { submitContactForm } from "@/app/actions/contact"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        })
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      } else {
        toast({
          title: "Error sending message",
          description: result.error || "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-6">
            Get In <span className="text-blue-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and exciting projects. Let's discuss how we can
            work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-blue-400" />
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  I'm currently seeking opportunities as a software developer and would love to hear about potential
                  roles, freelance projects, or collaboration opportunities. Feel free to reach out!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700/70 transition-colors">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a href="mailto:sinhalok26@gmail.com" className="text-blue-400 hover:text-blue-300">
                        sinhalok26@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700/70 transition-colors">
                    <div className="p-2 bg-gray-600 rounded-lg">
                      <Github className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">GitHub</p>
                      <a
                        href="https://github.com/AlokSinha26"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        github.com/AlokSinha26
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700/70 transition-colors">
                    <div className="p-2 bg-blue-700 rounded-lg">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/sinhalok7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        linkedin.com/in/sinhalok7
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-700/50">
                    <div className="p-2 bg-green-600 rounded-lg">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-300">Patiala, Punjab, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button asChild className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                    <a href="mailto:sinhalok26@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Direct Email
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                  >
                    <a href="/resume" target="_blank" rel="noreferrer">
                      <Phone className="w-4 h-4 mr-2" />
                      View Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Send className="h-6 w-6 text-blue-400" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form id="contact-form" action={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <p className="text-sm text-blue-300">
                    <strong>Response Time:</strong> I typically respond within 24-48 hours. For urgent matters, feel
                    free to reach out directly via email.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  What type of opportunities are you looking for?
                </h3>
                <p className="text-gray-300 text-sm">
                  I'm open to full-time software developer positions, internships, freelance projects, and collaboration
                  opportunities in web development, machine learning, and system programming.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Are you available for remote work?</h3>
                <p className="text-gray-300 text-sm">
                  Yes, I'm open to both remote and on-site opportunities. I'm comfortable working with distributed teams
                  and have experience with remote collaboration tools.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">What's your preferred tech stack?</h3>
                <p className="text-gray-300 text-sm">
                  I enjoy working with Python, JavaScript/React, and C++. I'm also experienced with machine learning
                  frameworks like TensorFlow and web technologies like Node.js.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Do you take on freelance projects?</h3>
                <p className="text-gray-300 text-sm">
                  Yes, I'm available for freelance projects, especially those involving web development, data analysis,
                  or machine learning. Feel free to discuss your project requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
