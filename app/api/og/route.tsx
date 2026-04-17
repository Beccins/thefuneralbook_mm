import { ImageResponse } from "@vercel/og"
import { type NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const fullName = searchParams.get("fullName") ?? "In Memoriam"
  const tagline  = searchParams.get("tagline")  ?? "In Loving Memory"
  const dob      = searchParams.get("dob")      ?? ""
  const dod      = searchParams.get("dod")      ?? ""
  const photo = searchParams.get("photo") || ""

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
          background: "linear-gradient(135deg, #f9f9f9 0%, #f9f9f9 50%, #f9f9f9 100%)",
          fontFamily: "serif",
        }}
      >
      {/* Left — photo (only if provided) */}
{photo.length > 0 && (
<div
  style={{
    width: "420px",
    height: "630px",
    display: "flex",
    flexShrink: 0,
    position: "relative",
  }}
>
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
  <div
    style={{
      position: "absolute",
      top: 0,
      right: 0,
      width: "120px",
      height: "630px",
      background: "linear-gradient(to right, transparent, #f9f9f9)",
    }}
  />
</div>
)}
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
  color: "#e8929a",
  letterSpacing: "4px",
  textTransform: "uppercase",
  fontWeight: "bold",
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
              color: "#1a1a1a",
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
                color: "#666666",
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
              background: "#F8B7BC",
              display: "flex",
            }}
          />

          {/* Brand */}
       <img
  src="https://gary-beaumont.thefuneralbook.com.au/bessie_logo_final.png"
  alt="The Funeral Book"
  width={300}
  height={150}
  style={{ objectFit: "contain" }}
/>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
