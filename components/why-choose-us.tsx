import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, TrendingUp, Clock, Users, Award, Globe } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Best Exchange Rates",
    description: "Competitive rates that save you money on every transaction",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Licensed and regulated with advanced security measures",
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "Quick processing for urgent forex and transfer needs",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Professional team with years of forex experience",
  },
  {
    icon: Award,
    title: "Trusted by Businesses",
    description: "Serving hotels, tour operators, and import/export companies",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Extensive network for worldwide money transfers",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Swift Money Exchange?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're the preferred choice for tourists, businesses, and individuals across Kenya and East Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Serving Kenya's Tourism & Business Community</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            From Nairobi hotels hosting international guests to safari tour operators and import/export businesses, we
            provide reliable forex services that keep your operations running smoothly.
          </p>
        </div>
      </div>
    </section>
  )
}
