"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowLeft, Heart, MessageCircle } from "lucide-react"
import type { Memorial } from "@/lib/memorials"
import { supabase } from "@/lib/supabase"

interface Message {
  id: string
  name: string
  relationship: string
  message: string
  created_at: string
}

interface Props {
  slug: string
  memorial: Memorial
}

export function LeaveMessageClient({ slug, memorial }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    relationship: "",
    message: "",
  })
  const [messages, setMessages] = useState<Message[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadMessages() {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .eq("memorial_slug", slug)
        .order("created_at", { ascending: false })
      if (!error && data) setMessages(data)
      setIsLoading(false)
    }
    loadMessages()
  }, [slug])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.message) return
    setIsSubmitting(true)
    const { data, error } = await supabase
      .from("messages")
      .insert({
        memorial_slug: slug,
        name: formData.name,
        relationship: formData.relationship || "Friend",
        message: formData.message,
      })
      .select()
      .single()
    if (error) {
      console.error("Supabase error:", error)
      alert("Error: " + error.message)
    } else if (data) {
      setMessages([data, ...messages])
      setFormData({ name: "", relationship: "", message: "" })
    }
    setIsSubmitting(false)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-AU", {
      year: "numeric", month: "long", day: "numeric",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">

        <div>
          <Link href={`/${slug}`}>
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Memorial
            </Button>
          </Link>
        </div>

        <Card className="bg-card border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground mb-2">Share Your Memories</CardTitle>
            <p className="text-muted-foreground text-pretty">
              Your words of comfort and cherished memories mean so much to the family during this difficult time.
              Please share your thoughts about {memorial.shortName} and how they touched your life.
            </p>
          </CardHeader>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              Leave Your Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Your Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                    required
                    className="bg-input border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="relationship" className="text-foreground">
                    Relationship to {memorial.shortName}
                  </Label>
                  <Input
                    id="relationship"
                    value={formData.relationship}
                    onChange={(e) => setFormData((prev) => ({ ...prev, relationship: e.target.value }))}
                    placeholder="e.g., Family, Friend, Neighbour, Colleague"
                    className="bg-input border-border"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Your Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder={`Share your memories, condolences, or thoughts about ${memorial.shortName}...`}
                  rows={6}
                  required
                  className="bg-input border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? "Sharing..." : "Share Your Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Messages of Love and Remembrance ({messages.length})
            </h2>
          </div>

          {isLoading ? (
            <p className="text-muted-foreground text-center py-8">Loading messages...</p>
          ) : messages.length === 0 ? (
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center text-muted-foreground">
                Be the first to leave a message for {memorial.shortName}'s family.
              </CardContent>
            </Card>
          ) : (
            messages.map((message) => (
              <Card key={message.id} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground">{message.name}</h3>
                      <p className="text-sm text-muted-foreground">{message.relationship}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{formatDate(message.created_at)}</span>
                  </div>
                  <p className="text-foreground leading-relaxed text-pretty">{message.message}</p>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link href={`/${slug}/order-of-service`}>
            <Button variant="outline" className="w-full sm:w-auto bg-transparent">
              View Order of Service
            </Button>
          </Link>
          <Link href={`/${slug}/add-memories`}>
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              Share Photos & Memories
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}
