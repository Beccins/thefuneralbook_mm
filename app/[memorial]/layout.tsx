import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { headers } from "next/headers"
import { getMemorial } from "@/lib/memorials"

type Props = {
  params: { memorial: string }
  children: React.ReactNode
}

export async function generateMetadata(
  { params }: { params: { memorial: string } }
): Promise<Metadata> {
  const memorial = getMemorial(params.memorial)
  if (!memorial) {
    return {
      title: "Memorial | The Funeral Book",
    }
  }

 const headersList = await headers()
const host = headersList.get("host") ?? `${params.memorial}.funeralbook.com.au`
const baseUrl = `https://${host}`
  const photoUrl = memorial.photo.startsWith("http") ? memorial.photo : baseUrl + memorial.photo
  const ogImageUrl = `${baseUrl}/api/og?fullName=${encodeURIComponent(memorial.fullName)}&tagline=${encodeURIComponent(memorial.tagline)}&dob=${encodeURIComponent(memorial.dateOfBirth)}&dod=${encodeURIComponent(memorial.dateOfDeath)}&photo=${encodeURIComponent(photoUrl)}`

  return {
    title: `${memorial.fullName} | The Funeral Book`,
    description: memorial.tagline ?? `A memorial for ${memorial.fullName}`,
    openGraph: {
      title: `${memorial.fullName}`,
      description: memorial.tagline ?? `A memorial for ${memorial.fullName}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `Memorial for ${memorial.fullName}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${memorial.fullName}`,
      description: memorial.tagline ?? `A memorial for ${memorial.fullName}`,
      images: [ogImageUrl],
    },
  }
}

export default function MemorialLayout({ params, children }: Props) {
  const memorial = getMemorial(params.memorial)

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* ── Header ── */}
      <header className="w-full border-b border-border bg-background">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* Left — The Funeral Book logo */}
          <Link href="https://www.thefuneralbook.com.au" target="_blank" rel="noopener noreferrer">
            <Image
              src="/funeral-book-logo.webp"
              alt="The Funeral Book"
              width={120}
              height={60}
              className="object-contain"
            />
          </Link>

          {/* Right — partner logo if available, otherwise tagline */}
          {memorial?.logos?.[1] ? (
            <Image
              src={memorial.logos[1].src}
              alt={memorial.logos[1].alt}
              width={memorial.logos[1].width}
              height={memorial.logos[1].height}
              className="object-contain"
            />
          ) : (
            <span className="text-sm text-muted-foreground tracking-wide italic">
              Remembrance Reimagined
            </span>
          )}

        </div>
      </header>

      {/* ── Page content ── */}
      <main className="flex-1">
        {children}
      </main>

      {/* ── Footer ── */}
      <footer className="w-full border-t border-border bg-background mt-12">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">

          {/* Left — footer logo linked to website */}
          <Link href="https://www.thefuneralbook.com.au" target="_blank" rel="noopener noreferrer">
            <Image
              src={memorial?.footerLogo?.src ?? "/bessie_logo_final.png"}
              alt={memorial?.footerLogo?.alt ?? "The Funeral Book"}
              width={memorial?.footerLogo?.width ?? 60}
              height={memorial?.footerLogo?.height ?? 30}
              className="object-contain"
            />
          </Link>

          {/* Right — footer tagline */}
          <span className="text-xs text-muted-foreground tracking-wide">
            {memorial?.footerTagline ?? "Remembrance Reimagined • The Funeral Book"}
          </span>

        </div>
      </footer>

    </div>
  )
}
