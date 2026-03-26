import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function RootPage() {
  const headersList = await headers()
  const hostname = headersList.get("host") || ""

  // Map subdomains to memorial slugs
  if (hostname.startsWith("maureen-munns")) {
    redirect("/maureen-munns")
  }

  if (hostname.startsWith("gary-beaumont")) {
    redirect("/gary-beaumont")
  }

  // Default — show a simple landing page
  redirect("/maureen-munns")
}
