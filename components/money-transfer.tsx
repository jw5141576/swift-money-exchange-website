"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const transferCountries = [
  { name: "Kenya", flag: "🇰🇪", code: "KE" },
  { name: "Uganda", flag: "🇺🇬", code: "UG" },
  { name: "Nigeria", flag: "🇳🇬", code: "NG" },
  { name: "Ghana", flag: "🇬🇭", code: "GH" },
  { name: "Zambia", flag: "🇿🇲", code: "ZM" },
  { name: "Ethiopia", flag: "🇪🇹", code: "ET" },
  { name: "Zimbabwe", flag: "🇿🇼", code: "ZW" },
  { name: "Tanzania", flag: "🇹🇿", code: "TZ" },
  { name: "China", flag: "🇨🇳", code: "CN" },
  { name: "Saudi Arabia", flag: "🇸🇦", code: "SA" },
  { name: "United Arab Emirates", flag: "🇦🇪", code: "AE" },
  { name: "United Kingdom", flag: "🇬🇧", code: "GB" },
  { name: "Canada", flag: "🇨🇦", code: "CA" },
  { name: "Australia", flag: "🇦🇺", code: "AU" },
  { name: "Japan", flag: "🇯🇵", code: "JP" },
]

export function MoneyTransfer() {
  const handleTransferSelect = (country: string) => {
    window.open(
      `https://wa.me/254757486388?text=Hi, I need to send money to ${country}. Could you please provide me with the transfer rates and process?`,
      "_blank",
    )
  }

  return (
    <section id="transfers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">International Money Transfer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Send money securely to family, friends, or business partners worldwide with competitive rates and fast
            processing.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mb-12">
          {transferCountries.map((country) => (
            <Card key={country.code} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center pb-2">
                <div className="text-2xl sm:text-3xl mb-2">{country.flag}</div>
                <CardTitle className="text-sm sm:text-base leading-tight">{country.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  onClick={() => handleTransferSelect(country.name)}
                  size="sm"
                  className="w-full group-hover:bg-blue-700 transition-colors text-xs sm:text-sm"
                >
                  Send Money
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Transfer Service?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Competitive Rates</h4>
              <p className="text-gray-600 text-sm">Best exchange rates with transparent fees</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fast Processing</h4>
              <p className="text-gray-600 text-sm">Quick transfers within 24-48 hours</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Secure & Reliable</h4>
              <p className="text-gray-600 text-sm">Licensed and regulated for your safety</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
