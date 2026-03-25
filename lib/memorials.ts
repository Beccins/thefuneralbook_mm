import { maureen } from "@/data/maureen-munns"
import { gary } from "@/data/gary-beaumont"
import type { Memorial } from "@/data/maureen-munns"

// Registry — add new memorials here as one line
const registry: Record<string, Memorial> = {
  "maureen-munns": maureen,
  "gary-beaumont": gary,
}

/**
 * Look up a memorial by its URL slug.
 * Returns null if the slug doesn't match any registered memorial.
 *
 * Usage in a Next.js page:
 *   const memorial = getMemorial(params.memorial)
 *   if (!memorial) notFound()
 */
export function getMemorial(slug: string): Memorial | null {
  return registry[slug] ?? null
}

/**
 * Returns all registered slugs.
 * Used by generateStaticParams to pre-render every memorial at build time.
 *
 * Usage in app/[memorial]/layout.tsx or any page:
 *   export function generateStaticParams() {
 *     return getAllSlugs().map((slug) => ({ memorial: slug }))
 *   }
 */
export function getAllSlugs(): string[] {
  return Object.keys(registry)
}

export type { Memorial }
