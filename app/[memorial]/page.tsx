import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { getMemorial } from "@/lib/memorials"

interface Props {
  params: Promise<{ memorial: string }>
}

export default async function MemorialHomepage({ params }: Props) {
  const { memorial: slug } = await params
  const memorial = getMemorial(slug)
  if (!memorial) notFound()

  const navCards = [
    {
      href: `/${slug}/order-of-service`,
      title: "Order of Service",
      description: `View the complete ${memorial.serviceTitle.toLowerCase()} program and schedule`,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
    },
    {
      href: `/${slug}/leave-message`,
      title: "Leave a Message",
      description: "Share your condolences and memories with the family",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      ),
    },
    {
      href: `/${slug}/donations`,
      title: "Legacy",
      description: `Make a charitable donation in memory of ${memorial.shortName}`,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      ),
    },
    {
      href: `/${slug}/after-service`,
      title: "After Service Information",
      description: "Details about reception and gathering arrangements",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      href: `/${slug}/add-memories`,
      title: "Add Memories",
      description: `Share photos and stories to celebrate ${memorial.shortName}'s life`,
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      ),
    },
    {
      href: `/${slug}/contact`,
      title: "Need Assistance?",
      description: "Contact the funeral home for support",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      ),
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Memorial Card */}
        <Card className="mb-12 bg-card border-border shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="mb-8">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-muted">
                <Image
                  src={memorial.photo}
                  alt={`${memorial.fullName} memorial portrait`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground text-balance">
                {memorial.fullName}
              </h2>
              <div className="text-xl text-muted-foreground space-y-2">
                <p>{memorial.dateOfBirth} — {memorial.dateOfDeath}</p>
                <p className="text-2xl font-semibold text-foreground italic">
                  {memorial.tagline}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navCards.map((card) => (
            <Link key={card.href} href={card.href}>
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer bg-card border-border h-64">
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {card.icon}
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-pretty">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
