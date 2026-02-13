// src/components/Skills.jsx
import { useState } from 'react'
import { 
  Code, 
  Server, 
  Database, 
  Palette, 
  Shield, 
  GitBranch, 
  Cpu,
  FileCode,
  Lock,
  Zap,
  Users
} from 'lucide-react'

const skillCategories = [
  { id: 'all', name: 'All Skills' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'tools', name: 'Tools & Others' },
]

const skills = [
  {
    icon: <Code size={24} />,
    title: 'React.js',
    level: 95,
    category: 'frontend',
    color: 'from-blue-500 to-cyan-500',
    description: 'Building responsive, component-based UIs'
  },
  {
    icon: <Palette size={24} />,
    title: 'Tailwind CSS',
    level: 95,
    category: 'frontend',
    color: 'from-cyan-500 to-blue-500',
    description: 'Utility-first CSS framework'
  },
  {
    icon: <Server size={24} />,
    title: 'Node.js',
    level: 90,
    category: 'backend',
    color: 'from-green-500 to-emerald-500',
    description: 'Server-side development & REST APIs'
  },
  {
    icon: <Cpu size={24} />,
    title: 'Express.js',
    level: 90,
    category: 'backend',
    color: 'from-gray-600 to-gray-800',
    description: 'Web application framework'
  },
  {
    icon: <Database size={24} />,
    title: 'MongoDB',
    level: 85,
    category: 'backend',
    color: 'from-green-400 to-green-600',
    description: 'Database design & optimization'
  },
  {
    icon: <FileCode size={24} />,
    title: 'REST APIs',
    level: 92,
    category: 'backend',
    color: 'from-orange-500 to-yellow-500',
    description: 'Design & implementation'
  },
  {
    icon: <Lock size={24} />,
    title: 'JWT Authentication',
    level: 88,
    category: 'backend',
    color: 'from-purple-500 to-pink-500',
    description: 'Secure authentication & authorization'
  },
  {
    icon: <GitBranch size={24} />,
    title: 'Git & GitHub',
    level: 85,
    category: 'tools',
    color: 'from-orange-600 to-red-600',
    description: 'Version control & collaboration'
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="section-container ">
      <div className="text-center mb-12">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          MERN Stack Developer specializing in enterprise application development
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 card-hover"
          >
            <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4`}>
              <div className="text-white">
                {skill.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.title}</h3>
            
            {/* Skill Description */}
            <p className="text-sm text-gray-600 mb-3">{skill.description}</p>
            
            {/* Skill Level Bar */}
            <div className="mb-2">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Proficiency</span>
                <span className="font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Technical Skills */}
      <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Additional Technical Skills
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4">
            <div className="text-lg font-semibold text-gray-800 mb-2">JavaScript (ES6+)</div>
            <div className="text-gray-600 text-sm">Intermediate</div>
          </div>
          <div className="text-center p-4">
            <div className="text-lg font-semibold text-gray-800 mb-2">HTML5 & CSS3</div>
            <div className="text-gray-600 text-sm">Advanced</div>
          </div>
          <div className="text-center p-4">
            <div className="text-lg font-semibold text-gray-800 mb-2">RESTful Services</div>
            <div className="text-gray-600 text-sm">Advanced</div>
          </div>
          <div className="text-center p-4">
            <div className="text-lg font-semibold text-gray-800 mb-2">Agile Methodologies</div>
            <div className="text-gray-600 text-sm">Intermediate</div>
          </div>
        </div>
      </div>

      {/* Enterprise Application Skills */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Enterprise Application Development
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Role-Based Access Control</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Implemented secure authentication and authorization systems with JWT tokens and role-based access control.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Zap className="text-green-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Performance Optimization</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Optimized database queries and implemented indexing for enhanced performance and scalability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="text-purple-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Team Collaboration</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Collaborated in Agile development environments using Git version control for team coordination.
            </p>
          </div>
        </div>
      </div>

      {/* Resume Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-lg">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Want to see my full technical profile?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl">
              Download my complete resume with detailed technical skills, project experience, and professional background.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/Resume.pdf"
              className="btn-primary flex items-center justify-center gap-3 px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileCode size={20} />
              View Resume
            </a>
            <a
              href="/Resume.pdf"
              download
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium 
                         border-2 border-blue-600 hover:bg-blue-50 
                         transition-all duration-200 flex items-center justify-center gap-3"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}