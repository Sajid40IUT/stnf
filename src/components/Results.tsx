'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaMicrophone, FaFileAudio, FaRandom } from 'react-icons/fa'

const testResults = [
  {
    type: 'Real-time Mic',
    icon: FaMicrophone,
    mseImprovement: '45%',
    snrImprovement: '8.3 dB',
    color: 'bg-purple-500',
  },
  {
    type: 'Pre-recorded',
    icon: FaFileAudio,
    mseImprovement: '52%',
    snrImprovement: '9.1 dB',
    color: 'bg-blue-500',
  },
  {
    type: 'Synthetic',
    icon: FaRandom,
    mseImprovement: '67%',
    snrImprovement: '12.4 dB',
    color: 'bg-green-500',
  },
]

export default function Results() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="results" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiments & Results</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We evaluated our system using three different types of inputs, measuring improvements in
            Mean Square Error (MSE) and Signal-to-Noise Ratio (SNR).
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testResults.map((result, index) => (
            <motion.div
              key={result.type}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className={`${result.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                <result.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{result.type}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">MSE Improvement</p>
                  <div className="flex items-center">
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`${result.color} h-2 rounded-full`}
                        style={{ width: result.mseImprovement }}
                      />
                    </div>
                    <span className="ml-4 font-semibold">{result.mseImprovement}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">SNR Improvement</p>
                  <div className="flex items-center">
                    <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`${result.color} h-2 rounded-full`}
                        style={{ width: `${(parseFloat(result.snrImprovement) / 15) * 100}%` }}
                      />
                    </div>
                    <span className="ml-4 font-semibold">{result.snrImprovement}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 