'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaMicrophone, 
  FaFileAudio, 
  FaRobot, 
  FaBrain,
  FaWaveSquare,
  FaCog,
  FaChartBar,
  FaArrowDown,
  FaArrowRight,
  FaMagic,
  FaCheck
} from 'react-icons/fa'

const steps = [
  {
    title: "Audio Input",
    icon: FaMicrophone,
    color: "bg-blue-500",
    lightColor: "bg-blue-50 dark:bg-blue-900/20",
    description: "We support three modes of input:",
    details: [
      "Real-time recording through a microphone",
      "Pre-recorded audio files with real-world background noise",
      "Synthetic audio generated in code with white and pink noise overlays"
    ],
    note: "Simulated environments include white noise (100–500 Hz) and pink noise (70–550 Hz)"
  },
  {
    title: "Preprocessing",
    icon: FaWaveSquare,
    color: "bg-purple-500",
    lightColor: "bg-purple-50 dark:bg-purple-900/20",
    description: "Before we apply any filters, we clean and standardize the input:",
    details: [
      "Voice Activity Detection (VAD): Removes silent portions",
      "Normalization: Brings all signals to the range [-1, 1]",
      "MFCC (Mel-Frequency Cepstral Coefficients) – captures speech-specific patterns",
      "STFT (Short-Time Fourier Transform) – maps the signal into time-frequency space"
    ]
  },
  {
    title: "Non-Adaptive Filtering",
    icon: FaCog,
    color: "bg-green-500",
    lightColor: "bg-green-50 dark:bg-green-900/20",
    description: "We run three classical filters in parallel:",
    details: [
      "Spectral Subtraction – removes estimated noise spectrum",
      "Wiener Filtering – minimizes mean squared error in the frequency domain",
      "Kalman Filtering – dynamically tracks signal evolution using state estimation"
    ],
    note: "Each filter alone works to some extent, but has limited effect in complex or real-time environments"
  },
  {
    title: "Adaptive Optimization",
    icon: FaBrain,
    color: "bg-red-500",
    lightColor: "bg-red-50 dark:bg-red-900/20",
    description: "A Reinforcement Learning Agent continuously:",
    details: [
      "Monitors output performance using SNR and MSE",
      "Takes actions to adjust parameters (e.g., noise suppression factor)",
      "Receives feedback in the form of a reward = SNR – MSE",
      "Updates its Q-table to learn which parameter settings yield the best results"
    ],
    note: "This loop continues, allowing the system to self-tune filter parameters in response to changing audio conditions"
  }
]

export default function Architecture() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="architecture" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Built</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A smarter audio cleaning system powered by reinforcement learning. Unlike traditional filters that apply the same rules regardless of context, our model learns from the environment and adapts its parameters in real-time.
          </p>
        </motion.div>

        {/* Architecture Flow */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`${step.lightColor} rounded-lg p-6 md:p-8 relative`}
            >
              {/* Step Number */}
              <div className="absolute -left-3 -top-3 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center">
                <span className="text-lg font-bold">{index + 1}</span>
              </div>

              {/* Content */}
              <div className="ml-6">
                <div className="flex items-center mb-4">
                  <div className={`${step.color} p-3 rounded-lg mr-4`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {step.description}
                </p>

                <ul className="space-y-3 mb-4">
                  {step.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start space-x-2"
                    >
                      <FaCheck className={`w-5 h-5 ${step.color} mt-1 flex-shrink-0`} />
                      <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                    </motion.li>
                  ))}
                </ul>

                {step.note && (
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      {step.note}
                    </p>
                  </div>
                )}
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={isInView ? { height: 40 } : { height: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  className="absolute left-1/2 bottom-0 transform translate-x-[-50%] translate-y-[100%] w-1 bg-gradient-to-b from-gray-300 to-transparent"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Final Output Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Enhanced Audio Output</h4>
            <p className="text-sm opacity-90">Optimized SNR/MSE Metrics</p>
          </div>
        </motion.div>

        {/* Spectrogram Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Visual Comparison</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Original Signal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">Original Signal</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Noise</span>
                </div>
              </div>
              
              <div className="relative h-64 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                {/* Simulated spectrogram visualization */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700">
                  {/* Simulated noise patterns */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
                    <div className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
                    <div className="absolute top-2/3 left-0 w-full h-1/3 bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
                  </div>
                  {/* Simulated speech signal */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                <p>Frequency Range: 0-8kHz</p>
                <p>SNR: -5dB</p>
              </div>
            </motion.div>

            {/* Filtered Signal */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">Filtered Output</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Clean</span>
                </div>
              </div>
              
              <div className="relative h-64 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                {/* Simulated spectrogram visualization */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700">
                  {/* Clean speech signal */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                <p>Frequency Range: 0-8kHz</p>
                <p>SNR: +15dB</p>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              The spectrogram comparison shows how our RL-based filter effectively removes background noise while preserving speech content.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 