"use client"

export function Hero() {
  const handleCallNow = () => {
    window.location.href = "tel:+254757486388"
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/254757486388", "_blank")
  }

  const handleBookConsultation = () => {
    // Create a Google Calendar event link
    const eventDetails = {
      text: "Swift Money Exchange Consultation",
      dates: "", // Will be filled by user
      details:
        "Consultation about foreign exchange and money transfer services with Swift Money Exchange. Please call +254 757 486388 to schedule.",
      location: "Phone/Video Call",
    }

    // Alternative: Open WhatsApp with booking message
    const message =
      "Hi, I would like to book a consultation for foreign exchange services. When would be a good time to schedule a call?"
    window.open(`https://wa.me/254757486388?text=${encodeURIComponent(message)}`, "_blank")
  }
}
