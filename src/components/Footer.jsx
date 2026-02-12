// Alternative: Ultra-compact professional footer
// src/components/Footer.jsx
import { Heart, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  'Navigation': [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ],
  'Connect': [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/abilash-mern-developer' },
    { name: 'GitHub', href: 'https://github.com/abilash-mern-stack/' },
    { name: 'Twitter', href: 'https://twitter.com/abilash_mern' },
    { name: 'Email', href: 'mailto:abilashkumaravel@gmail.com' },
  ],
  'Legal': [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Sitemap', href: '/sitemap.xml' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-400 py-8">
      <div className="max-w-4xl mx-auto px-5">
        {/* Compact Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800">
          <div>
            <h2 className="text-lg font-semibold text-white">Abilash K</h2>
            <p className="text-xs text-gray-500 mt-0.5">Full-Stack Developer</p>
          </div>
          <button
            onClick={scrollToTop}
            className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1"
          >
            <span className="hidden sm:inline">Return to top</span>
            <ArrowUpRight size={12} />
          </button>
        </div>

        {/* Links Grid - Compact */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                    >
                      {link.name}
                      {link.href.startsWith('http') && <ArrowUpRight size={10} className="opacity-60" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright - Minimal */}
        <div className="text-center pt-4 border-t border-gray-800">
          <p className="text-xs text-gray-500">
            © {currentYear} Abilash K. All rights reserved.
          </p>
          <p className="text-[10px] text-gray-600 mt-1 flex items-center justify-center gap-1">
            Built with React 19 • Tailwind CSS • Deployed
          </p>
        </div>
      </div>
    </footer>
  )
}