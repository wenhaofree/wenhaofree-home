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
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('title')}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((link) => (
            <motion.div key={link.key} variants={itemVariants}>
              <Button
                variant="outline"
                className="w-full py-6 flex items-center justify-center space-x-2 text-purple-600 hover:text-white hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-6 h-6 mr-2" />
                  <span>{t(`links.${link.key}`)}</span>
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
