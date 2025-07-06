"use server"

import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormState = {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Extract form data
  const rawFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  }

  // Validate form data
  const validatedFields = contactSchema.safeParse(rawFormData)

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please fix the errors below",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, subject, message } = validatedFields.data

  try {
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically:
    // 1. Send an email using a service like Resend, SendGrid, or Nodemailer
    // 2. Save to a database
    // 3. Send to a webhook

    // For now, we'll just log the submission
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // You could also send an email notification here
    // await sendEmailNotification({ name, email, subject, message })

    return {
      success: true,
      message: `Thank you ${name}! Your message has been sent successfully. I'll get back to you within 24-48 hours.`,
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again or contact me directly via email.",
    }
  }
}

// Optional: Function to send email notifications
// You would need to set up an email service for this to work
/*
async function sendEmailNotification({
  name,
  email,
  subject,
  message,
}: {
  name: string
  email: string
  subject: string
  message: string
}) {
  // Example using Resend (you'd need to install and configure it)
  // const resend = new Resend(process.env.RESEND_API_KEY)
  
  // await resend.emails.send({
  //   from: 'portfolio@yourdomain.com',
  //   to: 'sinhalok26@gmail.com',
  //   subject: `Portfolio Contact: ${subject}`,
  //   html: `
  //     <h2>New Contact Form Submission</h2>
  //     <p><strong>Name:</strong> ${name}</p>
  //     <p><strong>Email:</strong> ${email}</p>
  //     <p><strong>Subject:</strong> ${subject}</p>
  //     <p><strong>Message:</strong></p>
  //     <p>${message.replace(/\n/g, '<br>')}</p>
  //   `,
  // })
}
*/
