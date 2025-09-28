"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const currencies = [
  { code: "EUR", name: "Euro", flag: "🇪🇺", country: "European Union" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧", country: "United Kingdom" },
  { code: "USD", name: "US Dollar", flag: "🇺🇸", country: "United States" },
  { code: "ZAR", name: "South African Rand", flag: "🇿🇦", country: "South Africa" },
  { code: "CNY", name: "Chinese Yuan", flag: "🇨🇳", country: "China" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", country: "Australia" },
  { code: "AED", name: "UAE Dirham", flag: "🇦🇪", country: "United Arab Emirates" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", country: "Canada" },
]

export function CurrencyExchange() {
  const handleCurrencySelect = (currency: string) => {
    window.open(
      `https://wa.me/254757486388?text=Hi, I'm interested in exchanging ${currency}. Could you please provide me with the current rates?`,
      "_blank",
    )
  }

  return (
    <section id="exchange" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Foreign Exchange Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the best exchange rates for major international currencies. Perfect for tourists, businesses, and
            travelers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
          {currencies.map((currency) => (
            <Card key={currency.code} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center pb-4">
                <div className="text-3xl sm:text-4xl mb-2">{currency.flag}</div>
                <CardTitle className="text-lg sm:text-xl">{currency.code}</CardTitle>
                <CardDescription className="text-sm">{currency.name}</CardDescription>
                <p className="text-xs text-gray-500 hidden sm:block">{currency.country}</p>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  onClick={() => handleCurrencySelect(currency.code)}
                  className="w-full group-hover:bg-blue-700 transition-colors text-sm"
                  size="sm"
                >
                  Get Rate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Need a different currency? Contact us for rates on other international currencies.
          </p>
          <Button
            size="lg"
            onClick={() =>
              window.open(
                "https://wa.me/254757486388?text=Hi, I need exchange rates for a currency not listed on your website. Could you help?",
                "_blank",
              )
            }
          >
            Request Custom Rate
          </Button>
        </div>
      </div>
    </section>
  )
}
