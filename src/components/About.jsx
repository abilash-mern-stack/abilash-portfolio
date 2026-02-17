// src/components/About.jsx
import { Briefcase, GraduationCap, Building, Calendar, Code, Database } from 'lucide-react'

const stats = [
  { icon: <Briefcase size={24} />, value: '6+', label: 'Months Experience' },
  { icon: <Code size={24} />, value: 'MERN', label: 'Stack Expertise' },
  { icon: <Database size={24} />, value: '2+', label: 'Enterprise Project' },
]

export default function About() {
  return (
    <section id="about" className="section-container ">
      <div className="text-center mb-12">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle ">
          Full Stack Developer specializing in scalable MERN applications and enterprise-grade solutions.

        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-lg text-black font-medium leading-relaxed">
            Full Stack Developer with professional experience building scalable web applications using 
            the MERN stack. Experienced in designing secure RESTful APIs, implementing role-based access 
            control, and developing responsive user interfaces with React.js and Tailwind CSS.
            </p>
            <p className="text-lg text-black font-medium leading-relaxed">
              At AS Global Soft Tech, I contributed to enterprise-level applications by delivering end-to-end features, 
              optimizing database performance, and implementing JWT-based authentication systems.
            </p>
            <p className="text-lg text-black font-medium leading-relaxed">
              I bring strong analytical thinking and a structured problem-solving approach to software development, 
              with a focus on clean architecture, performance optimization, and maintainable code. Passionate about building reliable, user-centric digital products that solve real business problems.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-blue-600 mb-3 flex justify-center">{stat.icon}</div>
                <div className="sm:text-3xl text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Education Section */}
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <GraduationCap size={20} /> Education
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800">Bachelor of Engineering in Mechanical Engineering</h4>
                <p className="text-gray-600">Udaya School of Engineering, Anna University</p>
                <p className="text-blue-600 text-sm font-medium">Graduated: 2024</p>
              </div>
              {/* <div className="pt-4 border-t border-blue-100">
                <h4 className="font-semibold text-gray-800">Diploma in Mechanical Engineering</h4>
                <p className="text-gray-600">Udaya Polytechnic College, DOTE</p>
                <p className="text-blue-600 text-sm font-medium">Completed: 2019</p>
              </div> */}
            </div>
          </div>

          {/* Professional Experience Section */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Briefcase size={20} /> Professional Experience
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800">Full Stack Developer (MERN)</h4>
                <p className="text-gray-600">AS Global Soft Tech</p>
                <p className="text-blue-600 text-sm font-medium">6 Months (Full-time)</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Built responsive and scalable web applications using React.js and Tailwind CSS</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Designed and implemented secure RESTful APIs using Node.js and Express.js</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Implemented JWT authentication & role-based access control</span>
                  </li>
                </ul>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}