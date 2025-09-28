"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCallNow = () => {
    window.location.href = "tel:+254757486388"
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/254757486388", "_blank")
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Swift Money Exchange
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#exchange" className="text-gray-700 hover:text-blue-600 transition-colors">
              Currency Exchange
            </Link>
            <Link href="#transfers" className="text-gray-700 hover:text-blue-600 transition-colors">
              Money Transfers
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">
              FAQ
            </Link>
            <Link href="#partnership" className="text-gray-700 hover:text-blue-600 transition-colors">
              Partnership
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={handleCallNow} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button variant="outline" size="sm" onClick={handleWhatsApp} className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
            <Button
              size="sm"
              onClick={() => {
                const message =
                  "Hi, I would like to book a consultation for foreign exchange services. When would be a good time to schedule a call?"
                window.open(`https://wa.me/254757486388?text=${encodeURIComponent(message)}`, "_blank")
              }}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="#exchange" className="text-gray-700 hover:text-blue-600 transition-colors">
                Currency Exchange
              </Link>
              <Link href="#transfers" className="text-gray-700 hover:text-blue-600 transition-colors">
                Money Transfers
              </Link>
              <Link href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">
                FAQ
              </Link>
              <Link href="#partnership" className="text-gray-700 hover:text-blue-600 transition-colors">
                Partnership
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" onClick={handleCallNow} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
                <Button variant="outline" size="sm" onClick={handleWhatsApp} className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    const message =
                      "Hi, I would like to book a consultation for foreign exchange services. When would be a good time to schedule a call?"
                    window.open(`https://wa.me/254757486388?text=${encodeURIComponent(message)}`, "_blank")
                  }}
                >
                  Book Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
