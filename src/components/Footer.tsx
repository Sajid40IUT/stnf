'use client'

import { FaGithub, FaUniversity, FaCopyright } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Self-Tuning Noise Filter</h3>
            <p className="text-gray-600 dark:text-gray-400">
              A reinforcement learning-based adaptive noise filtering system for real-time audio enhancement.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://iut-dhaka.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaUniversity className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#motivation"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Motivation
                </a>
              </li>
              <li>
                <a
                  href="#architecture"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Architecture
                </a>
              </li>
              <li>
                <a
                  href="#methodology"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Methodology
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Results
                </a>
              </li>
            </ul>
          </div>

          {/* Course Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Course Information</h3>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400">EEE 4709</p>
              <p className="text-gray-600 dark:text-gray-400">Artificial Intelligence and Machine Learning</p>
              <p className="text-gray-600 dark:text-gray-400">Islamic University of Technology (IUT-OIC)</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
            <FaCopyright className="w-4 h-4" />
            <span>{currentYear} Self-Tuning Noise Filter Project. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
} 