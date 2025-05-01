'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaClock, FaExclamationTriangle, FaRandom } from 'react-icons/fa'

const challenges = [
  {
    icon: FaClock,
    title: 'Computational Overhead',
    description: 'Real-time filtering requires efficient algorithms to minimize processing latency',
    color: 'bg-red-500',
  },
  {
    icon: FaExclamationTriangle,
    title: 'Signal Length Mismatch',
    description: 'Handling variable-length signals during SNR calculation and filtering',
    color: 'bg-yellow-500',
  },
  {
    icon: FaRandom,
    title: 'Noise Generalization',
    description: 'Adapting to unpredictable and previously unseen noise types',
    color: 'bg-orange-500',
  },
]

export default function Challenges() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="challenges" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Challenges</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Throughout the development process, we encountered and addressed several key challenges
            that pushed us to innovate and improve our solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className={`${challenge.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                  <challenge.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{challenge.description}</p>
                
                {/* Solutions Preview */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Our Approach</h4>
                  <ul className="space-y-2">
                    {index === 0 && (
                      <>
                        <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2" />
                          Optimized FFT implementation
                        </li>
                        <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2" />
                          Parallel processing where possible
                        </li>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2" />
                          Dynamic buffer management
                        </li>
                        <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2" />
                          Adaptive window sizing
                        </li>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                          Online learning adaptation
                        </li>
                        <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                          Robust feature extraction
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 