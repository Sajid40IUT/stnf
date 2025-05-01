'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaLinkedin, FaUniversity } from 'react-icons/fa'

const teamMembers = [
  {
    name: 'Pushpita Khan',
    id: '200021354',
    role: 'Team Member',
  },
  {
    name: 'Muslima Siddiqui Shera',
    id: '200021117',
    role: 'Team Member',
  },
  {
    name: 'Sk Asad Al Abir',
    id: '200021331',
    role: 'Team Member',
  },
]

const supervisor = {
  name: 'Md Arefin Rabbi Emon',
  role: 'Supervisor',
  title: 'Lecturer',
  department: 'Department of EEE',
}

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collaborative project by students of Islamic University of Technology (IUT-OIC)
            under the Artificial Intelligence and Machine Learning course.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center"
            >
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Student ID: {member.id}</p>
              <p className="text-blue-600 dark:text-blue-400">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Supervisor */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 text-center max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-2">{supervisor.name}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-1">{supervisor.role}</p>
          <p className="text-gray-600 dark:text-gray-400 mb-1">{supervisor.title}</p>
          <p className="text-blue-600 dark:text-blue-400">{supervisor.department}</p>
        </motion.div>

        {/* Course Info & IUT Logo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <FaUniversity className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <div>
              <h4 className="text-lg font-semibold">EEE 4709</h4>
              <p className="text-gray-600 dark:text-gray-400">Artificial Intelligence and Machine Learning</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://iut-dhaka.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaUniversity className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 