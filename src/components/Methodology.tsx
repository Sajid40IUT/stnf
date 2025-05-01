'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaWaveSquare,
  FaBrain,
  FaChartLine,
  FaChartBar,
  FaFilter,
  FaSync,
  FaRobot,
  FaArrowRight,
  FaArrowLeft,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa'

const techniques = [
  {
    title: "STFT (Short-Time Fourier Transform)",
    icon: FaWaveSquare,
    color: "bg-blue-500",
    lightColor: "bg-blue-50 dark:bg-blue-900/20",
    description: "Breaks down the audio signal into smaller time windows to analyze frequency components over time.",
    whyUseful: "Noise and speech occupy different frequency bands; STFT helps us isolate them."
  },
  {
    title: "MFCC (Mel-Frequency Cepstral Coefficients)",
    icon: FaBrain,
    color: "bg-purple-500",
    lightColor: "bg-purple-50 dark:bg-purple-900/20",
    description: "Extracts perceptual audio features that mimic how humans hear.",
    whyUseful: "Helps distinguish speech patterns from noise during feature extraction and evaluation."
  },
  {
    title: "SNR (Signal-to-Noise Ratio)",
    icon: FaChartLine,
    color: "bg-green-500",
    lightColor: "bg-green-50 dark:bg-green-900/20",
    description: "Quantifies clarity by comparing signal strength to background noise.",
    whyUseful: "Higher is better — Indicates clearer audio.",
    usage: "Used as a reward metric for our learning agent."
  },
  {
    title: "MSE (Mean Squared Error)",
    icon: FaChartBar,
    color: "bg-red-500",
    lightColor: "bg-red-50 dark:bg-red-900/20",
    description: "Measures the average difference between the filtered and original clean signal.",
    whyUseful: "Lower is better — Less distortion introduced.",
    usage: "Used as a penalty in the reward system (SNR - MSE)."
  },
  {
    title: "Spectral Subtraction",
    icon: FaFilter,
    color: "bg-yellow-500",
    lightColor: "bg-yellow-50 dark:bg-yellow-900/20",
    description: "A basic method that subtracts estimated noise from the noisy signal using FFT.",
    whyUseful: "Good for stationary noise (like fan hum).",
    limitation: "Can introduce artifacts if noise is unpredictable."
  },
  {
    title: "Kalman Filtering",
    icon: FaSync,
    color: "bg-indigo-500",
    lightColor: "bg-indigo-50 dark:bg-indigo-900/20",
    description: "A statistical method that predicts and corrects the audio signal frame-by-frame using a dynamic model.",
    whyUseful: "Good for time-varying or structured noise.",
    limitation: "Sensitive to inaccurate parameter tuning."
  }
]

export default function Methodology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="methodology" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our system combines signal processing fundamentals with reinforcement learning to create an adaptive noise filtering solution.
          </p>
        </motion.div>

        {/* Techniques Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techniques.map((technique, index) => (
            <motion.div
              key={technique.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${technique.lightColor} rounded-xl p-6 shadow-lg`}
            >
              <div className="flex items-center mb-4">
                <div className={`${technique.color} p-3 rounded-lg mr-4`}>
                  <technique.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{technique.title}</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {technique.description}
              </p>

              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    Why it's useful:
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {technique.whyUseful}
                  </p>
                </div>

                {technique.usage && (
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                      Usage:
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {technique.usage}
                    </p>
                  </div>
                )}

                {technique.limitation && (
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                      Limitation:
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {technique.limitation}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* RL Agent Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
        >
          <div className="flex items-center mb-6">
            <div className="bg-blue-500 p-3 rounded-lg mr-4">
              <FaRobot className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Adaptive Filtering with Reinforcement Learning</h3>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our RL agent dynamically adjusts filtering parameters (like noise thresholds) based on feedback from SNR and MSE metrics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Agent Goals</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaArrowUp className="w-5 h-5 text-green-500 mt-1 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Maximize speech clarity (SNR)</span>
                </li>
                <li className="flex items-start">
                  <FaArrowDown className="w-5 h-5 text-red-500 mt-1 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Minimize distortion (MSE)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Learning Loop</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <FaArrowRight className="text-white" />
                  </div>
                  <span className="ml-3 text-gray-600 dark:text-gray-300">Listen to audio</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <FaArrowRight className="text-white" />
                  </div>
                  <span className="ml-3 text-gray-600 dark:text-gray-300">Apply filters</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <FaArrowRight className="text-white" />
                  </div>
                  <span className="ml-3 text-gray-600 dark:text-gray-300">Evaluate results</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <FaArrowRight className="text-white" />
                  </div>
                  <span className="ml-3 text-gray-600 dark:text-gray-300">Update parameters</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <p className="text-blue-600 dark:text-blue-300 font-semibold">
              Why it's powerful: It learns the best settings over time for different types of audio and noise environments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 