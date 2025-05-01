'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBrain, FaMicrochip, FaMobile } from 'react-icons/fa'

const milestones = [
  {
    icon: FaBrain,
    title: 'Deep Learning Integration',
    description: 'Implement advanced neural networks for noise classification and filtering',
    timeline: 'Q3 2024',
    color: 'bg-purple-500',
  },
  {
    icon: FaMicrochip,
    title: 'GPU Acceleration',
    description: 'Optimize performance with CUDA-accelerated signal processing',
    timeline: 'Q4 2024',
    color: 'bg-blue-500',
  },
  {
    icon: FaMobile,
    title: 'Mobile Deployment',
    description: 'Release mobile SDK for iOS and Android integration',
    timeline: 'Q1 2025',
    color: 'bg-green-500',
  },
]

export default function Future() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="future" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Next</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our roadmap for future development focuses on enhancing performance, accessibility,
            and real-world applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700" />

          {/* Milestones */}
          <div className="relative z-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="w-1/2 px-6">
                  <div className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg ${
                    index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                  }`}>
                    <div className={`${milestone.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                      <milestone.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{milestone.description}</p>
                    <div className={`inline-block ${milestone.color} text-white px-3 py-1 rounded-full text-sm`}>
                      {milestone.timeline}
                    </div>
                  </div>
                </div>

                {/* Timeline Point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full ${milestone.color}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Involved
          </a>
        </motion.div>
      </div>
    </section>
  )
} 