import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Clock, Calendar } from "lucide-react"
import { getMemorial } from "@/lib/memorials"
import { notFound } from "next/navigation"
import { ServiceProgram } from "./ServiceProgram"

interface Props {
  params: Promise<{ memorial: string }>
}

export default async function OrderOfServicePage({ params }: Props) {
  const { memorial: slug } = await params
  const memorial = getMemorial(slug)
  if (!memorial) notFound()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">

        <div>
          <Link href={`/${slug}`}>
            <Button variant="ghost" className="flex items-center gap-2">
              ← Back to Memorial
            </Button>
          </Link>
        </div>

        <Card className="bg-card border-border">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl font-bold text-foreground mb-4">{memorial.serviceTitle}</CardTitle>
            <h2 className="text-2xl text-foreground mb-2">{memorial.fullName}</h2>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold text-foreground mb-2">Date</h3>
              <p className="text-muted-foreground">{memorial.serviceDate}</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold text-foreground mb-2">Time</h3>
              <p className="text-muted-foreground">{memorial.serviceTime}</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <a
                href={memorial.serviceVenueMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
              >
                {memorial.serviceVenueName}
                {memorial.serviceVenueAddress.split("\n").map((line, i) => (
                  <span key={i}><br />{line}</span>
                ))}
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Interactive service program - client component */}
        <ServiceProgram items={memorial.serviceItems} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Officiant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-foreground">{memorial.officiant}</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Watch the Service</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${memorial.serviceYouTubeId}`}
                  title={memorial.serviceYouTubeTitle}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${slug}/leave-message`}>
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              Leave a Message
            </Button>
          </Link>
          <Link href={`/${slug}/add-memories`}>
            <Button variant="outline" className="w-full sm:w-auto bg-transparent">
              Share Memories
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}
