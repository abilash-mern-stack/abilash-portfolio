// src/components/Hero.jsx
import { useEffect, useRef } from 'react'
import { ArrowRight, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import profilePhoto from '../assets/Abilash.png'

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
  {
    icon: <Twitter size={20} />,
    href: '#',
    label: 'Twitter'
  },
  {
    icon: <Mail size={20} />,
    href: 'mailto:abilashkumaravel@gmail.com',
    label: 'Email'
  },
]

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" ref={heroRef} className="section-container pt-32 md:pt-40 "> 
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <br />
            <br />
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
              ABILASH K
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                MERN Stack Developer
              </span>
            </h1>
            <p className="text-xl text-black leading-relaxed font-medium">
              Full Stack Web Developer with 6+ months of professional experience at AS Global Soft Tech.
              Specialist in building scalable, role-based enterprise applications using React.js, Node.js,
              Express.js, and MongoDB. Passionate about creating modern, responsive web interfaces with Tailwind CSS.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Connect
            </a>
          </div>

          <div className="pt-3">
            <p className="text-black font-bold mb-4">Connect with me</p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center 
                           text-gray-600 hover:text-white hover:bg-blue-600 
                           transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  {link.icon}
                </a>
              ))}
            </div>

          </div>
        </div>
       
        <div className="relative">
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
            {/* Gradient Border Circle */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-float p-1">
              <div className="w-full h-full bg-white rounded-full p-1">
                <img
                  src={profilePhoto}
                  alt="Abilash K - MERN Stack Developer"
                  className="w-full h-full rounded-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 bg-white p-6 rounded-2xl shadow-xl animate-slide-up">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">6+</div>
                <div className="text-gray-600">Months Experience</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}