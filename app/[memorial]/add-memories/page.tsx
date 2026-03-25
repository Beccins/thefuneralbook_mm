import { getMemorial } from "@/lib/memorials"
import { notFound } from "next/navigation"
import { AddMemoriesClient } from "./AddMemoriesClient"

interface Props {
  params: Promise<{ memorial: string }>
}

export default async function AddMemoriesPage({ params }: Props) {
  const { memorial: slug } = await params
  const memorial = getMemorial(slug)
  if (!memorial) notFound()

  return <AddMemoriesClient slug={slug} memorial={memorial} />
}
