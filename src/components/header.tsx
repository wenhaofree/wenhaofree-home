"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Globe } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const MotionLink = motion.create(Link)

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
  const t = useTranslations('Header')
  const pathname = usePathname()
  
  const menuItems = [
    { key: 'blog', href: 'https://blog.wenhaofree.com', external: true },
    { key: 'projects', href: '#', external: false },
    { key: 'tech', href: '#', external: false },
    { key: 'about', href: '#', external: false }
  ]

  // Get the current locale from the pathname
  const currentLocale = pathname.split('/')[1] || 'en'

  // Function to change language while preserving the current route
  const switchLanguage = (locale: string) => {
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <motion.nav className="flex items-center justify-between px-6 py-4 bg-white bg-opacity-80 backdrop-blur-md sticky top-0 z-10">
      <motion.div 
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/placeholder.png?height=32&width=32"
          alt="Avatar"
          className="rounded-full"
          width={32}
          height={32}
        />
        <span className="font-semibold">{t('name')}</span>
      </motion.div>
      <motion.div 
        className="flex items-center gap-4"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        {menuItems.map((item) => (
          <MotionLink
            key={item.key}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="text-gray-600 hover:text-purple-600 transition-colors relative"
            variants={fadeIn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {t(item.key)}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
          </MotionLink>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-gray-600 hover:text-purple-600"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">{t('language.switch')}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={switchLanguage('en')} className={currentLocale === 'en' ? 'text-purple-600' : ''}>
                {t('language.en')}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={switchLanguage('zh')} className={currentLocale === 'zh' ? 'text-purple-600' : ''}>
                {t('language.zh')}
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    </motion.nav>
  )
}
