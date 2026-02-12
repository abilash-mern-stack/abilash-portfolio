// src/App.jsx
import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App