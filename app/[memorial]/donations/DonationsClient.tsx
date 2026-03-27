"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Heart, Share2, Facebook, Instagram, ExternalLink } from "lucide-react"
import type { Memorial } from "@/lib/memorials"
import Image from "next/image"

interface Props {
  slug: string
  memorial: Memorial
}

const CHARITIES = [
  {
    id: "cancer-council",
    name: "Cancer Council Australia",
    description: "Funds life-saving cancer research, education, and support services for Australians affected by cancer. Donations of $2 and over are tax deductible.",
    url: "https://www.cancer.org.au/get-involved/donate-to-cancer-council/one-time-donation",
    logo: "https://www.cancer.org.au/content/images/cancer-council-logo.png",
    color: "hover:border-yellow-400",
  },
  {
    id: "stroke-foundation",
    name: "Stroke Foundation",
    description: "Works to prevent stroke, save lives and enhance recovery for the 500,000+ Australians living with the effects of stroke. All donations $2 and over are tax deductible.",
    url: "https://donate.strokefoundation.org.au/",
    logo: "https://strokefoundation.org.au/content/images/stroke-foundation-logo.png",
    color: "hover:border-red-400",
  },
  {
    id: "white-ribbon",
    name: "White Ribbon Australia",
    description: "Drives primary prevention programs and engages men and boys to lead the charge against violence towards women and children.",
    url: "https://whiteribbon.org.au/give-now/",
    logo: "https://whiteribbon.org.au/content/images/white-ribbon-logo.png",
    color: "hover:border-white",
  },
  {
    id: "salvation-army",
    name: "The Salvation Army",
    description: "Supports Australians facing homelessness, addiction, domestic violence, and crisis — providing practical help and hope across the country.",
    url: "https://www.salvationarmy.org.au/donate/make-a-donation/donate-online/",
    logo: "https://www.salvationarmy.org.au/content/images/salvos-logo.png",
    color: "hover:border-red-600",
  },
]

export function DonationsClient({ slug, memorial }: Props) {

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

        {/* Back button */}
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

        {/* Charity cards */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Choose a Charity to Donate To</h2>
          <p className="text-muted-foreground text-sm">
            Each button will take you directly to the charity's secure donation page where you'll receive an official receipt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CHARITIES.map((charity) => (
              <Card
                key={charity.id}
                className={`bg-card border-border transition-all duration-200 ${charity.color} border-2`}
              >
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img
                        src={charity.logo}
                        alt={charity.name}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          // Fallback to initials if logo fails to load
                          e.currentTarget.style.display = "none"
                        }}
                      />
                    </div>
                    <h3 className="font-semibold text-foreground">{charity.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground flex-1">{charity.description}</p>
                  <a href={charity.url} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
                      Donate to {charity.name.split(" ")[0]} {charity.name.split(" ")[1]}
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Info note */}
        <Card className="bg-muted border-border">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-3">About These Donations</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• You'll be taken directly to each charity's secure, official donation page.</li>
              <li>• All donations are processed and receipted by the charity directly.</li>
              <li>• Donations of $2 and over are tax deductible.</li>
              <li>• 100% of your donation goes directly to the selected charity.</li>
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
