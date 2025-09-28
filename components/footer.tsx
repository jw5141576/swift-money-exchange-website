import Link from "next/link"
import { Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Swift Money Exchange</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for foreign exchange and international money transfers in Kenya.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+254 757 486388</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>jeremy@laeken.co</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Currency Exchange</li>
              <li>International Money Transfers</li>
              <li>Business Forex Solutions</li>
              <li>Tourist Exchange Services</li>
              <li>Import/Export Support</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#exchange" className="hover:text-white transition-colors">
                  Currency Exchange
                </Link>
              </li>
              <li>
                <Link href="#transfers" className="hover:text-white transition-colors">
                  Money Transfers
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#partnership" className="hover:text-white transition-colors">
                  Partnership
                </Link>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Operating Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Business Hours</span>
              </div>
              <div className="text-sm">
                <p>Monday - Friday</p>
                <p>8:30 AM - 5:00 PM</p>
              </div>
              <div className="text-sm">
                <p>Saturday</p>
                <p>8:30 AM - 1:00 PM</p>
              </div>
              <div className="text-sm text-red-400">
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Swift Money Exchange. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Licensed and regulated financial services provider in Kenya
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
