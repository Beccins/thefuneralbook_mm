"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"
import { ArrowLeft, Heart, DollarSign, Share2, Facebook, Instagram, MessageCircleQuestion } from "lucide-react"
import type { Memorial } from "@/lib/memorials"

interface Props {
  slug: string
  memorial: Memorial
}

export function DonationsClient({ slug, memorial }: Props) {
  const [selectedCharity, setSelectedCharity] = useState("")
  const [donationAmount, setDonationAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    message: "",
    anonymous: false,
  })

  const donationAmounts = ["25", "50", "100", "250", "500"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you for your generous donation in memory of ${memorial.shortName}. The family has been notified of your kindness.`)
  }

  const shareToFacebook = () => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(memorial.donationsShareText)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, "_blank")
  }

  const shareToInstagram = () => {
    const text = `${memorial.donationsShareText} ${window.location.href}`
    navigator.clipboard.writeText(text)
    alert("Link copied to clipboard! You can now paste it in your Instagram story or post.")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">

        <div>
          <Link href={`/${slug}`}>
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Memorial
            </Button>
          </Link>
        </div>

        {/* Header */}
        <Card className="bg-card border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground mb-2 flex items-center justify-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              Honor {memorial.shortName}'s Memory
            </CardTitle>
            <p className="text-muted-foreground text-pretty">{memorial.donationsIntro}</p>
          </CardHeader>
        </Card>

        {/* Charity selection */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Choose a Charity</CardTitle>
            <p className="text-muted-foreground">
              Select an organization that {memorial.shortName} supported during their lifetime.
            </p>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedCharity} onValueChange={setSelectedCharity} className="space-y-4">
              {memorial.charities.map((charity) => (
                <div key={charity.id} className="flex items-start space-x-3 p-4 border border-border rounded-lg">
                  <RadioGroupItem value={charity.id} id={charity.id} className="mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageCircleQuestion className="w-5 h-5 text-primary" />
                      <Label htmlFor={charity.id} className="text-foreground font-semibold cursor-pointer">
                        {charity.name}
                      </Label>
                    </div>
                    <p className="text-muted-foreground text-sm text-pretty">{charity.description}</p>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Donation amount */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              Donation Amount
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {donationAmounts.map((amount) => (
                <Button
                  key={amount}
                  variant={donationAmount === amount ? "default" : "outline"}
                  onClick={() => { setDonationAmount(amount); setCustomAmount("") }}
                  className={donationAmount === amount ? "bg-primary text-primary-foreground" : "bg-transparent border-border hover:bg-muted"}
                >
                  ${amount}
                </Button>
              ))}
            </div>
            <div className="space-y-2">
              <Label htmlFor="custom-amount" className="text-foreground">Or enter a custom amount</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="custom-amount"
                  type="number"
                  placeholder="0.00"
                  value={customAmount}
                  onChange={(e) => { setCustomAmount(e.target.value); setDonationAmount("") }}
                  className="pl-8 bg-input border-border"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Donor information */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Donor Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="donor-name" className="text-foreground">Full Name *</Label>
                  <Input
                    id="donor-name"
                    value={donorInfo.name}
                    onChange={(e) => setDonorInfo((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                    required
                    className="bg-input border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="donor-email" className="text-foreground">Email Address *</Label>
                  <Input
                    id="donor-email"
                    type="email"
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter your email"
                    required
                    className="bg-input border-border"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="donor-message" className="text-foreground">Memorial Message (Optional)</Label>
                <Textarea
                  id="donor-message"
                  value={donorInfo.message}
                  onChange={(e) => setDonorInfo((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder={`Share a message about ${memorial.shortName} or your donation...`}
                  rows={4}
                  className="bg-input border-border resize-none"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={donorInfo.anonymous}
                  onChange={(e) => setDonorInfo((prev) => ({ ...prev, anonymous: e.target.checked }))}
                  className="rounded border-border"
                />
                <Label htmlFor="anonymous" className="text-foreground cursor-pointer">
                  Make this donation anonymous
                </Label>
              </div>
              <Button
                type="submit"
                disabled={!selectedCharity || (!donationAmount && !customAmount)}
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
              >
                Complete Donation
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Important info */}
        <Card className="bg-muted border-border">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-3">Important Information</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• All donations are tax-deductible. You will receive a receipt via email.</li>
              <li>• The family will be notified of your donation (unless made anonymously).</li>
              <li>• 100% of your donation goes directly to the selected charity.</li>
              <li>• For questions about your donation, please contact the funeral home.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Share */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground flex items-center gap-2">
              <Share2 className="w-5 h-5 text-primary" />
              Share {memorial.shortName}'s Legacy
            </CardTitle>
            <p className="text-muted-foreground">
              Help spread the word about {memorial.shortName}'s memorial donations.
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={shareToFacebook} className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white">
                <Facebook className="w-4 h-4" />
                Share on Facebook
              </Button>
              <Button onClick={shareToInstagram} className="flex items-center gap-2 bg-gradient-to-r from-[#E4405F] to-[#5B51D8] hover:opacity-90 text-white">
                <Instagram className="w-4 h-4" />
                Share on Instagram
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link href={`/${slug}/leave-message`}>
            <Button variant="outline" className="w-full sm:w-auto bg-transparent">
              Leave a Message
            </Button>
          </Link>
          <Link href={`/${slug}/add-memories`}>
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              Share Memories
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}
