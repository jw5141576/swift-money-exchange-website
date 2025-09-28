"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Handshake, Building, Plane, Car, MapPin, Users } from "lucide-react"

const partnershipTypes = [
  {
    icon: Building,
    title: "Hotels & Resorts",
    description: "Partner with us to offer forex services to your international guests",
  },
  { icon: Plane, title: "Tour & Travel Agencies", description: "Provide competitive exchange rates for your clients" },
  { icon: Car, title: "Car Dealers & Importers", description: "Streamline your international transactions" },
  {
    icon: MapPin,
    title: "Import/Export Businesses",
    description: "Reliable forex solutions for your trade operations",
  },
  { icon: Users, title: "Corporate Clients", description: "Customized forex services for your business needs" },
  { icon: Handshake, title: "Referral Partners", description: "Earn commissions by referring clients to us" },
]

export function Partnership() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    partnershipType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create email content
    const emailSubject = `Partnership Inquiry from ${formData.name} - ${formData.company}`
    const emailBody = `
Partnership Inquiry Details:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Partnership Type: ${formData.partnershipType}

Message:
${formData.message}

---
This inquiry was submitted through the Swift Money Exchange website partnership form.
    `.trim()

    // Create mailto link
    const mailtoLink = `mailto:jeremy@laeken.co?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

    // Open email client
    window.location.href = mailtoLink

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      partnershipType: "",
      message: "",
    })

    alert("Thank you for your partnership inquiry! Your email client should open with the pre-filled message.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="partnership" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our network of partners and provide exceptional forex services to your clients while earning attractive
            commissions.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {partnershipTypes.map((type, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <type.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{type.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Partner With Us</CardTitle>
              <CardDescription className="text-center">
                Fill out the form below and we'll get back to you within 24 hours to discuss partnership opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="partnershipType">Partnership Type *</Label>
                  <Select
                    value={formData.partnershipType}
                    onValueChange={(value) => handleInputChange("partnershipType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select partnership type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hotel">Hotels & Resorts</SelectItem>
                      <SelectItem value="travel">Tour & Travel Agencies</SelectItem>
                      <SelectItem value="automotive">Car Dealers & Importers</SelectItem>
                      <SelectItem value="import-export">Import/Export Businesses</SelectItem>
                      <SelectItem value="corporate">Corporate Clients</SelectItem>
                      <SelectItem value="referral">Referral Partners</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your business and how you'd like to partner with us..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Partnership Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Prefer to discuss over the phone? Call us directly!</p>
          <Button onClick={() => (window.location.href = "tel:+254757486388")} variant="outline" size="lg">
            Call +254 757 486388
          </Button>
        </div>
      </div>
    </section>
  )
}
