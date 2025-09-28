"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Calendar, X } from "lucide-react"

export function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false)

  const handleCallNow = () => {
    window.location.href = "tel:+254757486388"
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/254757486388", "_blank")
  }

  const handleBookConsultation = () => {
    const message =
      "Hi, I would like to book a consultation for foreign exchange services. When would be a good time to schedule a call?"
    window.open(`https://wa.me/254757486388?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Action Button */}
      <div className="relative">
        {isOpen && (
          <div className="absolute bottom-16 right-0 space-y-3 mb-2">
            <Button
              onClick={handleCallNow}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg"
              size="sm"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 shadow-lg"
              size="sm"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
            <Button
              onClick={handleBookConsultation}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 shadow-lg"
              size="sm"
            >
              <Calendar className="h-4 w-4" />
              Book Call
            </Button>
          </div>
        )}

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 shadow-lg bg-blue-600 hover:bg-blue-700"
          size="lg"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
        </Button>
      </div>
    </div>
  )
}
