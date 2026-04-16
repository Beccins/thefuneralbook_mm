import { ImageResponse } from "@vercel/og"
import { type NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const fullName = searchParams.get("fullName") ?? "In Memoriam"
  const tagline  = searchParams.get("tagline")  ?? "In Loving Memory"
  const dob      = searchParams.get("dob")      ?? ""
  const dod      = searchParams.get("dod")      ?? ""
  const photo    = searchParams.get("photo")    ?? ""

  const dates = dob && dod ? `${dob} — ${dod}` : ""

  const baseUrl  = process.env.NEXT_PUBLIC_BASE_URL ?? "https://thefuneralbook.com.au"
  const photoUrl = photo.startsWith("http") ? photo : `${baseUrl}${photo}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "row",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          fontFamily: "serif",
        }}
      >
        {/* Left — photo */}
        <div
          style={{
            width: "420px",
            height: "630px",
            display: "flex",
            flexShrink: 0,
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
  src={photoUrl}
  alt={fullName}
  width={420}
  height={630}
  style={{
    width: "420px",
    height: "630px",
    objectFit: "cover",
    objectPosition: "center top",
  }}
/>
          {/* Fade from photo into right panel */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "120px",
              height: "630px",
              background: "linear-gradient(to right, transparent, #16213e)",
            }}
          />
        </div>

        {/* Right — text */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 60px 60px 40px",
            gap: "24px",
          }}
        >
          {/* Tagline */}
          <div
            style={{
              fontSize: "22px",
              color: "#c9a96e",
              letterSpacing: "4px",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            {tagline}
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "52px",
              fontWeight: "bold",
              color: "#ffffff",
              lineHeight: 1.15,
              display: "flex",
            }}
          >
            {fullName}
          </div>

          {/* Dates */}
          {dates && (
            <div
              style={{
                fontSize: "26px",
                color: "#a0aec0",
                letterSpacing: "1px",
                display: "flex",
              }}
            >
              {dates}
            </div>
          )}

          {/* Divider */}
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "#c9a96e",
              display: "flex",
            }}
          />

          {/* Brand */}
          <div
            style={{
              fontSize: "20px",
              color: "#718096",
              letterSpacing: "2px",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            The Funeral Book
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
