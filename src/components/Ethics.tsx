'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaShieldAlt, FaLeaf, FaBrain } from 'react-icons/fa'

const ethicalConsiderations = [
  {
    icon: FaShieldAlt,
    title: 'Privacy',
    description: 'Ensuring user data protection and secure audio processing',
    points: [
      'No audio data storage without consent',
      'Local processing when possible',
      'Transparent data handling policies',
    ],
    color: 'bg-blue-500',
  },
  {
    icon: FaLeaf,
    title: 'Green AI',
    description: 'Minimizing environmental impact through efficient computing',
    points: [
      'Optimized algorithms for lower power consumption',
      'Edge computing to reduce cloud dependency',
      'Resource-aware model design',
    ],
    color: 'bg-green-500',
  },
  {
    icon: FaBrain,
    title: 'Bias Handling',
    description: 'Addressing potential biases in noise filtering',
    points: [
      'Diverse training data collection',
      'Regular bias assessment',
      'Adaptive filtering for different accents',
    ],
    color: 'bg-purple-500',
  },
]

export default function Ethics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="ethics" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ethics & Sustainability</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are committed to developing our technology responsibly, with careful consideration
            for privacy, environmental impact, and fairness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ethicalConsiderations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              {/* Header */}
              <div className={`${item.color} p-6 flex items-center space-x-4`}>
                <item.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                <ul className="space-y-3">
                  {item.points.map((point, pointIndex) => (
                    <motion.li
                      key={pointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + pointIndex * 0.1 }}
                      className="flex items-start space-x-2"
                    >
                      <div className={`w-1.5 h-1.5 ${item.color} rounded-full mt-2 flex-shrink-0`} />
                      <span className="text-gray-600 dark:text-gray-300">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900">
                <a
                  href="#"
                  className={`text-sm font-medium ${item.color.replace('bg-', 'text-')} hover:underline`}
                >
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View Our Ethics Guidelines
          </a>
        </motion.div>
      </div>
    </section>
  )
} 