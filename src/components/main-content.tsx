"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'

const MotionButton = motion.create(Button)

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function MainContent() {
  const [isHovered, setIsHovered] = useState(false)
  const t = useTranslations('MainContent')

  const aboutItems = [1, 2, 3, 4, 5].map(num => t(`aboutSection.item${num}`))

  return (
    <main className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        className="space-y-6"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        <motion.h1 
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          variants={fadeIn}
        >
          {t('name')}
        </motion.h1>
        <motion.h2 
          className="text-2xl text-purple-600 font-light"
          variants={fadeIn}
        >
          {t('subtitle')}
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-lg"
          variants={fadeIn}
        >
          {t('welcome')}
        </motion.p>
        <motion.p 
          className="text-gray-600"
          variants={fadeIn}
        >
          {t('introduction')}
        </motion.p>
        <motion.p 
          className="text-gray-600"
          variants={fadeIn}
        >
          {t('description1')}
        </motion.p>
        <motion.p 
          className="text-gray-600"
          variants={fadeIn}
        >
          {t('description2')}
        </motion.p>
        
        <motion.div 
          className="space-y-3"
          variants={fadeIn}
        >
          <h3 className="text-lg font-medium">{t('aboutSection.title')}</h3>
          {aboutItems.map((item, index) => (
            <motion.div 
              key={item} 
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-purple-600"
                whileHover={{ scale: 1.5 }}
              />
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <MotionButton 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('button')}
          </MotionButton>
        </motion.div>
      </motion.div>

      <motion.div 
        className="flex justify-center lg:justify-end"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="relative"
          animate={{ rotate: isHovered ? [0, -5, 5, -5, 5, 0] : 0 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/placeholder.jpg?height=600&width=600"
            alt="3D Avatar"
            width={600}
            height={600}
            className="max-w-[500px] w-full rounded-3xl shadow-2xl"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 opacity-0 rounded-3xl"
            whileHover={{ opacity: 0.2 }}
          />
        </motion.div>
      </motion.div>
    </main>
  )
}
