import { getMemorial } from "@/lib/memorials"
import { notFound } from "next/navigation"
import { DonationsClient } from "./DonationsClient"

interface Props {
  params: Promise<{ memorial: string }>
}

export default async function DonationsPage({ params }: Props) {
  const { memorial: slug } = await params
  const memorial = getMemorial(slug)
  if (!memorial) notFound()

  return <DonationsClient slug={slug} memorial={memorial} />
}
