import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CurrencyExchange } from "@/components/currency-exchange"
import { MoneyTransfer } from "@/components/money-transfer"
import { WhyChooseUs } from "@/components/why-choose-us"
import { FAQ } from "@/components/faq"
import { Partnership } from "@/components/partnership"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CurrencyExchange />
      <MoneyTransfer />
      <WhyChooseUs />
      <FAQ />
      <Partnership />
      <Footer />
      <FloatingActions />
    </main>
  )
}
