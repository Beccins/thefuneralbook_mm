"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Clock, Users, Info } from "lucide-react"

export default function AfterServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Memorial
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">After Service Information</h1>
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Page Header */}
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground mb-2">Reception & Gathering Details</CardTitle>
              <p className="text-muted-foreground text-pretty">
                Following the service, family and friends are invited to join us for a thanksgiving reception to continue sharing
                memories and celebrating Mor's life together.
              </p>
            </CardHeader>
          </Card>

          {/* Reception Information */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Reception Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold text-foreground mb-2">Time</h3>
                  <p className="text-muted-foreground">Immediately Following the service</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground text-pretty">
                    In the church foyer,{" "}
                    <a
                      href="https://www.google.com/maps/place/Parramatta+Baptist+Church/@-33.7891197,150.988575,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12a25722886781:0x7d79e080732b9c08!8m2!3d-33.7891197!4d150.9911499!16s%2Fg%2F1q5brt9z6?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-pretty hover:text-primary transition-colors cursor-pointer underline decoration-dotted underline-offset-4"
                    >
                      Parramatta Baptist Church
                    </a>
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-foreground mb-3">What to Expect</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Light refreshments and beverages will be served</li>
                  <li>• Opportunity to share stories and memories with family</li>
                  <li>• Photo displays of Mor's life will be available for viewing</li>
                  <li>• Guest book for additional messages and signatures</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Interment Information */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Interment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Private Family Service</h4>
                  <p className="text-muted-foreground text-pretty">
                    A private interment service for immediate family will be held at Castlebrook Memorial Park Garden Chapel Rouse Hill at 11am
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Location</h4>
                  <p className="text-muted-foreground text-pretty">
                    A Crematorium
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <Card className="bg-muted border-border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Dress Code</h4>
                  <p className="text-muted-foreground text-pretty">
                    Business casual or semi-formal attire is appropriate. Maureen loved colors, so please don't
                    feel limited to traditional black.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Accessibility</h4>
                  <p className="text-muted-foreground text-pretty">
                    Both venues are wheelchair accessible with designated parking spaces and accessible restroom
                    facilities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Photography</h4>
                  <p className="text-muted-foreground text-pretty">
                    Photography is welcome during the reception. Please be respectful during the formal service
                    portions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Children</h4>
                  <p className="text-muted-foreground text-pretty">
                    Children are welcome at both the service and reception. A quiet room will be available if needed.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/order-of-service">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                View Order of Service
              </Button>
            </Link>
            <Link href="/leave-message">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                Leave a Message
              </Button>
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <p className="text-muted-foreground">{"Remembrance Reimagined • The Funeral Book"}</p>
              <Image
                src="/bessie_logo_final.png"
                alt="The Funeral Book"
                width={60}
                height={30}
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Created by{" "}
            <a
              href="https://github.com/Beccins"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted-foreground transition-colors"
            >
              Munns Media Pty Ltd
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
