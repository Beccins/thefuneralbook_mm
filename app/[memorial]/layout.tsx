import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getMemorial } from "@/lib/memorials"

interface MemorialLayoutProps {
  children: React.ReactNode
  params: { memorial: string }
}

export default function MemorialLayout({ children, params }: MemorialLayoutProps) {
  const memorial = getMemorial(params.memorial)

  if (!memorial) notFound()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {memorial.logos.map((logo, i) => (
                <div key={i} className="flex items-center gap-4">
                  {i > 0 && <div className="h-8 w-px bg-border" />}
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain"
                  />
                </div>
              ))}
              <div className="h-8 w-px bg-border" />
              <h1 className="text-2xl font-bold text-foreground">
                Digital Memorial Services
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <p className="text-muted-foreground">{memorial.footerTagline}</p>
              <Image
                src={memorial.footerLogo.src}
                alt={memorial.footerLogo.alt}
                width={memorial.footerLogo.width}
                height={memorial.footerLogo.height}
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Created by{" "}
            <a
              href="https://thefuneralbook.com.au"
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

export async function generateStaticParams() {
  const { getAllSlugs } = await import("@/lib/memorials")
  return getAllSlugs().map((slug) => ({ memorial: slug }))
}
