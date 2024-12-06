"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const MotionLink = motion(Link)

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

export function Header() {
  return (
    <motion.nav className="flex items-center justify-between px-6 py-4 bg-white bg-opacity-80 backdrop-blur-md sticky top-0 z-10">
      <motion.div 
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/placeholder.jpg?height=32&width=32"
          alt="Avatar"
          className="rounded-full"
          width={32}
          height={32}
        />
        <span className="font-semibold">文浩Free</span>
      </motion.div>
      <motion.div 
        className="flex items-center gap-4"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        {["简介", "博客", "项目", "技术", "生活", "关于"].map((item) => (
          <MotionLink
            key={item}
            href={item === "博客" ? "https://blog.wenhaofree.com" : "#"}
            target={item === "博客" ? "_blank" : undefined}
            rel={item === "博客" ? "noopener noreferrer" : undefined}
            className="text-gray-600 hover:text-purple-600 transition-colors relative"
            variants={fadeIn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </MotionLink>
        ))}
      </motion.div>
    </motion.nav>
  )
}
