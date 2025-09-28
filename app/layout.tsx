import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Swift Money Exchange - Foreign Exchange & International Money Transfers in Kenya",
  description:
    "Professional foreign exchange services and international money transfers in Kenya. Best rates for EUR, GBP, USD, ZAR, CNY, AUD, AED, CAD. Serving tourists, hotels, importers, exporters, and travel agencies.",
  keywords:
    "foreign exchange Kenya, money transfer Kenya, forex Kenya, currency exchange Nairobi, international money transfer, EUR USD exchange, tourism forex, hotel currency exchange, import export forex",
  authors: [{ name: "Swift Money Exchange" }],
  openGraph: {
    title: "Swift Money Exchange - Foreign Exchange & International Money Transfers",
    description:
      "Professional foreign exchange services and international money transfers in Kenya. Best rates for major currencies.",
    type: "website",
    locale: "en_KE",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5XDXNMWZ');`}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5XDXNMWZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
