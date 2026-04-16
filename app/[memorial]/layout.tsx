import type { Metadata } from "next"
import Link from "next/link"
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

  const baseUrl = "https://maureen-munns.thefuneralbook.com.au"
  const ogImageUrl = `${baseUrl}/api/og?fullName=${encodeURIComponent(memorial.fullName)}&tagline=${encodeURIComponent(memorial.tagline)}&dob=${encodeURIComponent(memorial.dateOfBirth)}&dod=${encodeURIComponent(memorial.dateOfDeath)}&photo=${encodeURIComponent(baseUrl + memorial.photo)}`

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

export default function MemorialLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  )
}
