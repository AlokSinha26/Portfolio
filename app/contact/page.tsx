"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Github, Linkedin, Send, Clock, MessageCircle } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"
import { useActionState } from "react"

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sinhalok26@gmail.com",
      href: "mailto:sinhalok26@gmail.com",
      color: "text-purple-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "AlokSinha26",
      href: "https://github.com/AlokSinha26",
      color: "text-blue-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "sinhalok7",
      href: "https://www.linkedin.com/in/sinhalok7",
      color: "text-indigo-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Patiala, Punjab, India",
      href: null,
      color: "text-cyan-400",
    },
  ]

  const faqs = [
    {
      question: "What type of opportunities are you looking for?",
      answer:
        "I'm open to full-time positions, internships, and freelance projects in software development, particularly in web development, machine learning, and system programming.",
    },
    {
      question: "Are you available for remote work?",
      answer:
        "Yes, I'm open to both remote and on-site opportunities. I'm comfortable working in distributed teams and have experience with remote collaboration tools.",
    },
    {
      question: "What's your preferred tech stack?",
      answer:
        "I enjoy working with Python for ML/backend, React/Next.js for frontend, and C/C++ for system programming. However, I'm always eager to learn new technologies based on project requirements.",
    },
    {
      question: "How quickly can you start?",
      answer:
        "I'm currently completing my degree and will be available for full-time positions from May 2025. For part-time or project-based work, I can start immediately.",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply chat about
            technology. Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MessageCircle className="h-6 w-6 text-purple-400" />
                  Send Me a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <form action={formAction} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" name="name" placeholder="Your full name" required className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      rows={6}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  {state?.error && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      {state.error}
                    </div>
                  )}

                  {state?.success && (
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                      {state.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-background/50">
                        <info.icon className={`h-4 w-4 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className={`text-sm hover:${info.color} transition-colors`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <h3 className="font-semibold">Response Time</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  I typically respond to messages within 24 hours. For urgent matters, feel free to reach out directly
                  via email.
                </p>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-4">Connect on Social Media</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/AlokSinha26" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/sinhalok7" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="mailto:sinhalok26@gmail.com">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-3 text-purple-400">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
