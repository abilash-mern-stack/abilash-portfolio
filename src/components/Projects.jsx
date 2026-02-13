// src/components/Projects.jsx
import { ExternalLink, Github, Globe, ArrowUpRight } from 'lucide-react'
import image01 from '../assets/01.jpg';
import image02 from '../assets/02.jpg';
import image03 from '../assets/03.png';

const projects = [
  {
    title: 'MyNestToStay',
    description: 'A comprehensive property rental platform with advanced search filters, booking management system, and user review functionality.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    liveUrl: 'https://mynesttostay.com',
    githubUrl: 'https://github.com/abilash-mern-stack/My-Nest-To-Stay.git',
    featured: true,
    image: image01
  },
  {
    title: 'Krishna Engineering Kiosks',
    description: 'Manufacturing company website showcasing food business kiosks with interactive product catalogs and inquiry management system.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    liveUrl: 'https://krishnakiosks.com',
    githubUrl: 'https://github.com/abilash-mern-stack/krishnan_engineering.git',
    featured: true,
    image: image02
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website built with React 19 and Tailwind CSS v4, featuring optimal performance and SEO.',
    technologies: ['React 19', 'Tailwind CSS v4', 'Vite', 'Responsive'],
    liveUrl: 'https://abilash.in/',
    githubUrl: 'https://github.com/abilash-mern-stack/abilash-portfolio.git',
    featured: true,
    image: image03
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-container ">
      <div className="text-center mb-12">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Showcasing my recent work and technical capabilities
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 card-hover border border-gray-200">
            <div className={`h-48 bg-gradient-to-r relative`}>
              <div className="h-48 relative bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-bold text-white/20">
                  {project.title.charAt(0)}
                </div>
              </div>
              {project.featured && (
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <div className="flex gap-2">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  <a
                    href={project.liveUrl}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label="Live project"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Live Project</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium"
        >
          View all projects
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  )
}