'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBook } from 'react-icons/fa'

const references = [
  {
    citation: "Xia, B., & Bao, C. (2014). Wiener filtering based speech enhancement with Weighted Denoising Auto-encoder and noise classification. Speech Communication, 60, 13–29.",
    doi: null
  },
  {
    citation: "Roy, S. K., Nicolson, A., & Paliwal, K. K. (2021). DeepLPC: A deep learning approach to augmented Kalman filter-based single-channel speech enhancement. IEEE Access, 9, 64524–64540.",
    doi: null
  },
  {
    citation: "Roy, S. K., Nicolson, A., & Paliwal, K. K. (2021). DeepLPC-MHANet: Multi-Head Self-Attention for Augmented Kalman Filter-Based Speech Enhancement. IEEE Access, 9, 70516–70530.",
    doi: null
  },
  {
    citation: "Meng, H., & Grant, P. M. (2009). A self-tuning filter for audio signal processing. IEEE Transactions on Audio, Speech, and Language Processing, 17(1), 54–61.",
    doi: "10.1109/TASL.2008.2006701"
  },
  {
    citation: "Uplane, V. R., & Sambare, S. S. (2019). Design and implementation of self-tuning filter for hearing aid system. Procedia Computer Science, 152, 231–238.",
    doi: "10.1016/j.procs.2019.05.007"
  },
  {
    citation: "Kim, D., Lee, Y., & Park, H. (2022). An adaptive audio filter based on deep learning for environmental noise reduction in speech communication. ICT Express, 8(2), 270–274.",
    doi: "10.1016/j.icte.2022.02.007"
  },
  {
    citation: "Elshamy, M., Sohn, J., & Kim, N. (2021). A Self-Tuning Deep Learning-Based Speech Enhancement System for Smart Voice Interfaces. IEEE Access, 9, 23702–23714.",
    doi: "10.1109/ACCESS.2021.3056186"
  }
]

export default function References() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="references" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <FaBook className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">References</h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Academic papers and research that informed our work
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {references.map((reference, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
              <div className="flex">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">{index + 1}</span>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                    {reference.citation}
                  </p>
                  {reference.doi && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      DOI: <a 
                        href={`https://doi.org/${reference.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {reference.doi}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 