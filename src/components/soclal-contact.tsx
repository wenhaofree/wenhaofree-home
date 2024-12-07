"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'

const socialLinks = [
  { key: "github", icon: Github, url: "https://github.com/wenhaofree" },
  { key: "twitter", icon: Twitter, url: "https://twitter.com/wenhaofree" },
  { key: "email", icon: Mail, url: "mailto:fuwenhao945@gmail.com" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export function SocialContact() {
  const t = useTranslations('SocialContact')

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.p
          className="text-purple-600 mb-4 italic"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('available')}
        </motion.p>

        <motion.h2
          className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('letsConnect')}
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-12 text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {t('description')}
        </motion.p>

        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            variant="outline"
            className="px-8 py-4 text-lg border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300"
            asChild
          >
            <a href="mailto:fuwenhao945@gmail.com">
              {t('contactButton')} <span className="ml-2">→</span>
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((link) => (
            <motion.div key={link.key} variants={itemVariants}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
              >
                <link.icon className="w-10 h-10" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
