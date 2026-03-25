import { getMemorial } from "@/lib/memorials"
import { notFound } from "next/navigation"
import { ContactClient } from "./ContactClient"

interface Props {
  params: Promise<{ memorial: string }>
}

export default async function ContactPage({ params }: Props) {
  const { memorial: slug } = await params
  const memorial = getMemorial(slug)
  if (!memorial) notFound()

  return <ContactClient slug={slug} memorial={memorial} />
}
