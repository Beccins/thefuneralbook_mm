import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message, memorial, to } = await request.json()

    await resend.emails.send({
      from: "The Funeral Book <noreply@thefuneralbook.com.au>",
      to: [to],
      replyTo: email,
      subject: `[${memorial}] Contact Form: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New message from ${memorial} memorial</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 120px;">From:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px; font-weight: bold;">Phone:</td>
              <td style="padding: 8px;">${phone}</td>
            </tr>` : ""}
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold;">Subject:</td>
              <td style="padding: 8px;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f9f9f9; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="white-space: pre-wrap; color: #555;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Sent via The Funeral Book contact form — ${memorial}
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
