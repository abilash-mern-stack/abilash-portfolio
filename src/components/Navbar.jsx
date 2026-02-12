// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { Menu, X, FileDown } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 shadow-sm  ${
      scrolled 
        ? 'bg-gradient-to-r from-green-300 to-blue-300/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-gradient-to-r from-green-300 to-blue-300/90 backdrop-blur-sm py-4 md:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="flex justify-between items-center">
          {/* Logo - Responsive sizing */}
          <a 
            href="#home" 
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:scale-105 transition-transform "
          >
            Abilash K
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black hover:text-blue-600 px-3 py-2 text-sm lg:text-base font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-4/5 transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/19zUa9NcCuRMRNPQQ0SFFIwRSPiUKiWcC/view?usp=drive_link"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 lg:px-6 lg:py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 text-sm lg:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileDown size={18} className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="hidden sm:inline">Resume</span>
              <span className="sm:hidden">CV</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} className="w-6 h-6 sm:w-7 sm:h-7" />
            ) : (
              <Menu size={28} className="w-6 h-6 sm:w-7 sm:h-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-xl shadow-2xl border border-gray-200 animate-fade-in">
            <div className="py-2 px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3.5 rounded-lg transition-colors text-base font-medium mb-1 last:mb-0"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-gray-200 mt-2 pt-3">
                <a
                  href="https://drive.google.com/file/d/19zUa9NcCuRMRNPQQ0SFFIwRSPiUKiWcC/view?usp=drive_link"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3.5 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md flex items-center justify-center gap-2 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <FileDown size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}