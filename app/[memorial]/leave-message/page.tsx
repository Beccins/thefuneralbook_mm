import { getMemorial } from "@/lib/memorials"
import { notFound } from "next/navigation"
import { LeaveMessageClient } from "./LeaveMessageClient"

interface Props {
  params: Promise<{ memorial: string }>
}

export default async function LeaveMessagePage({ params }: Props) {
  const { memorial: slug } = await params
  const memorial = getMemorial(slug)
  if (!memorial) notFound()

  return <LeaveMessageClient slug={slug} memorial={memorial} />
}
