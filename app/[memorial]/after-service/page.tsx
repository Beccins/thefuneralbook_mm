import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Users, Info } from "lucide-react"
import { getMemorial } from "@/lib/memorials"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{ memorial: string }>
}

export default async function AfterServicePage({ params }: Props) {
  const { memorial: slug } = await params
  const memorial = getMemorial(slug)
  if (!memorial) notFound()

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

        {/* Page header */}
        <Card className="bg-card border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground mb-2">
              Reception & Gathering Details
            </CardTitle>
            <p className="text-muted-foreground text-pretty">
              {memorial.receptionIntro}
            </p>
          </CardHeader>
        </Card>

        {/* Reception details */}
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
                <p className="text-muted-foreground">{memorial.receptionTime}</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <a
                  href={memorial.receptionVenueMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors underline decoration-dotted underline-offset-4 text-pretty"
                >
                  {memorial.receptionVenueDetail && (
                    <span>{memorial.receptionVenueDetail}, </span>
                  )}
                  {memorial.receptionVenueName}
                </a>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="font-semibold text-foreground mb-3">What to Expect</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Light refreshments and beverages will be served</li>
                <li>• Opportunity to share stories and memories with family</li>
                <li>• Photo displays of {memorial.shortName}'s life will be available for viewing</li>
                <li>• Guest book for additional messages and signatures</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Interment details */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Interment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">{memorial.intermentTitle}</h4>
                <p className="text-muted-foreground text-pretty">{memorial.intermentDetail}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <p className="text-muted-foreground text-pretty">{memorial.intermentLocation}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important information */}
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
                <p className="text-muted-foreground text-pretty">{memorial.dressCode}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Accessibility</h4>
                <p className="text-muted-foreground text-pretty">
                  Both venues are wheelchair accessible with designated parking spaces and accessible restroom facilities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Photography</h4>
                <p className="text-muted-foreground text-pretty">
                  Photography is welcome during the reception. Please be respectful during the formal service portions.
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
          <Link href={`/${slug}/order-of-service`}>
            <Button variant="outline" className="w-full sm:w-auto bg-transparent">
              View Order of Service
            </Button>
          </Link>
          <Link href={`/${slug}/leave-message`}>
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              Leave a Message
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}
