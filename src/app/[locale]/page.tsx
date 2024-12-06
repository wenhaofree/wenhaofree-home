"use client"
import { SocialContact } from "@/components/soclal-contact"
import { Header } from "@/components/header"
import { MainContent } from "@/components/main-content"
export default function Page() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white overflow-hidden">
      <Header />
      <MainContent />
      <SocialContact />
    </div>
  )
}
