'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaPhoneAlt, 
  FaHeadphones, 
  FaMicrophone, 
  FaWaveSquare, 
  FaCog, 
  FaBrain,
  FaArrowRight 
} from 'react-icons/fa'

const applications = [
  {
    icon: FaPhoneAlt,
    title: "Phone calls in noisy environments",
    description: "Miscommunication due to background chaos.",
    color: "bg-blue-500",
    lightColor: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    icon: FaHeadphones,
    title: "Hearing aids",
    description: "Difficulty isolating voices in dynamic surroundings.",
    color: "bg-purple-500",
    lightColor: "bg-purple-50 dark:bg-purple-900/20"
  },
  {
    icon: FaMicrophone,
    title: "Voice assistants and speech recognition",
    description: "Struggling to transcribe in cluttered audio.",
    color: "bg-green-500",
    lightColor: "bg-green-50 dark:bg-green-900/20"
  }
]

const challenges = [
  {
    icon: FaWaveSquare,
    text: "Traditional Filtering",
    color: "text-red-500"
  },
  {
    icon: FaCog,
    text: "Fixed Parameters",
    color: "text-yellow-500"
  },
  {
    icon: FaBrain,
    text: "Smart Adaptation",
    color: "text-green-500"
  }
]

export default function Motivation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="motivation" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Background Pattern */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: "url('/images/motivation/pattern.svg')",
              backgroundSize: "30px 30px",
              backgroundRepeat: "repeat"
            }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Where We Started</h2>
        </motion.div>

        {/* Problem Statement with Visual Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative">
            <div className="flex justify-between items-center mb-12">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  className="flex flex-col items-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-3 ${challenge.color}`}>
                    <challenge.icon className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium">{challenge.text}</span>
                </motion.div>
              ))}
            </div>
            <div className="absolute top-8 left-0 w-full">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-0.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
              />
            </div>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            In the era of digital communication, one persistent challenge continues to affect speech clarity: background noise. Traditional noise filtering methods—like Spectral Subtraction, Wiener Filtering, and Kalman Filtering—are built on fixed assumptions and pre-defined models. These systems struggle to adapt to the unpredictable, ever-changing dynamics of real-world noise. Instead of enhancing the audio, they often introduce unwanted distortion, especially when dealing with non-stationary environments like bustling streets, public transport, or crowded rooms.
          </p>

          {/* Key Question with Visual Enhancement */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-lg mb-16">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <FaBrain className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-center mb-4">
                Our journey began with a single question:
              </h3>
              <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 text-center italic">
                Can we build a filter that learns to improve over time instead of rigidly following rules?
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why It Matters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Why It Matters</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Think about the daily scenarios where clear audio is not just a luxury—but a necessity:
          </p>

          {/* Applications Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                className={`group p-6 rounded-lg shadow-lg hover:shadow-xl transition-all ${app.lightColor}`}
              >
                <div className={`${app.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 mx-auto transform group-hover:scale-110 transition-transform`}>
                  <app.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-center">{app.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-center">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conclusion with Visual Emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center max-w-3xl mx-auto bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <FaArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A smarter, self-tuning filter that understands the environment and adjusts itself in real time could revolutionize audio clarity across industries—from telecommunications to assistive technology.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 