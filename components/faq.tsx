"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What currencies do you exchange?",
    answer:
      "We exchange major international currencies including EUR, GBP, USD, ZAR, CNY, AUD, AED, and CAD. We can also arrange exchanges for other currencies upon request.",
  },
  {
    question: "How do your exchange rates compare to banks?",
    answer:
      "Our rates are typically more competitive than traditional banks. We offer real-time market rates with transparent fees, ensuring you get the best value for your money.",
  },
  {
    question: "How long do international money transfers take?",
    answer:
      "Most transfers are completed within 24-48 hours. The exact time depends on the destination country and local banking systems. We'll provide you with tracking information for your transfer.",
  },
  {
    question: "What documents do I need for currency exchange?",
    answer:
      "For currency exchange, you'll need a valid ID (passport or national ID). For larger amounts or international transfers, additional documentation may be required as per regulatory requirements.",
  },
  {
    question: "Is there a minimum or maximum amount for exchanges?",
    answer:
      "We handle both small and large transactions. Minimum amounts vary by currency, and we can accommodate substantial business transactions with advance notice.",
  },
  {
    question: "Do you offer services for businesses?",
    answer:
      "Yes! We specialize in serving hotels, tour operators, import/export businesses, and car dealers. We offer competitive rates and can establish business accounts for regular transactions.",
  },
  {
    question: "How can I get the current exchange rates?",
    answer:
      "Call us at +254 757 486388 or WhatsApp us for real-time rates. Rates change throughout the day based on market conditions.",
  },
  {
    question: "Are your services regulated?",
    answer:
      "Yes, we operate under all relevant Kenyan financial regulations and maintain the highest standards of security and compliance for your protection.",
  },
  {
    question: "Can tourists exchange money with you?",
    answer:
      "We welcome tourists and provide competitive rates for holiday money. We're experienced in serving international visitors to Kenya.",
  },
  {
    question: "Do you offer same-day service?",
    answer:
      "Yes, for currency exchanges and many money transfers, we offer same-day service during our operating hours. Contact us early in the day for fastest processing.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our forex and money transfer services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "tel:+254757486388")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Call +254 757 486388
            </button>
            <button
              onClick={() => window.open("https://wa.me/254757486388", "_blank")}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
