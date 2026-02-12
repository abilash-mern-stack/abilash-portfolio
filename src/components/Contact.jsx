// src/components/Contact.jsx
import { useState } from 'react'
import { CheckCircle, Github, Linkedin } from 'lucide-react'

const socialLinks = [
  { 
    icon: <Github size={20} />, 
    href: 'https://github.com/abilash-mern-stack/',
    label: 'GitHub' 
  },
  { 
    icon: <Linkedin size={20} />, 
    href: 'https://linkedin.com/in/abilash-mern-developer', 
    label: 'LinkedIn' 
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const sendViaWhatsApp = () => {
    // Create a formatted message
    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}

*Message:*
${formData.message}

---
Sent from Portfolio Website
    `.trim()

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const phoneNumber = '919488210489' // Your WhatsApp number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    
    // Show success message
    setIsSubmitted(true)
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendViaWhatsApp()
  }

  return (
    <section id="contact" className="section-container bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          Have a project in mind? I'd love to hear about it
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send a Message via WhatsApp</h3>
            <p className="text-gray-600">I'll respond as soon as possible</p>
          </div>
          
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fade-in">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h4 className="text-2xl font-semibold text-green-800 mb-2">
                Message Sent Successfully!
              </h4>
              <p className="text-green-600 mb-4">
                WhatsApp will open with your message. If it doesn't open automatically, 
                please click the WhatsApp button below.
              </p>
              <button
                onClick={() => window.open('https://wa.me/919488210489', '_blank')}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Open WhatsApp
              </button>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-green-700 hover:text-green-800 font-medium mt-4 block mx-auto"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Project inquiry or collaboration"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project requirements, timeline, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Send via WhatsApp
              </button>
            </form>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* WhatsApp Button Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Send a Message via WhatsApp</h3>
            <p className="text-gray-600 mb-6">Get in touch directly via WhatsApp for quick responses.</p>
            <a
              href="https://wa.me/919488210489"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-medium hover:bg-green-700 transition-all duration-200 flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-gray-900 text-lg mb-2">Email</h4>
              <a
                href="mailto:abilashkumaravel@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                abilashkumaravel@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-gray-900 text-lg mb-2">Location</h4>
              <a
                href="https://maps.google.com/?q=Nagercoil,Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Nagercoil, Tamil Nadu
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Connect on Social Media</h3>
            <div className="flex justify-center gap-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center 
                           text-gray-600 group-hover:text-white group-hover:bg-blue-600 
                           transition-all duration-300 group-hover:scale-110">
                    {link.icon}
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}