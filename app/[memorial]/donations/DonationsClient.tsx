"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, Share2, Facebook, Instagram, ExternalLink } from "lucide-react"
import type { Memorial } from "@/lib/memorials"

interface Props {
  slug: string
  memorial: Memorial
}

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
          <p className="text-sm text-muted-foreground">
            Each button will take you directly to the charity's secure donation page where you'll receive an official receipt.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {memorial.charities.map((charity) => (
              <Card key={charity.id} className="bg-card border-border hover:shadow-lg transition-all duration-200 border-2">
                <CardContent className="p-6 flex flex-col gap-4 h-full">

                  {/* Logo + Name */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 relative flex-shrink-0 bg-white rounded-lg p-1">
                      <Image
                        src={charity.logo}
                        alt={charity.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground">{charity.name}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground flex-1">{charity.description}</p>

                  {/* Donate button */}
                  <a href={charity.url} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2">
                      Donate Now
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
