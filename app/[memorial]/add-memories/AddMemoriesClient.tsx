"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft, Camera, Heart, Upload, ImageIcon,
  Calendar, X, Play, Music, Video,
  ChevronLeft, ChevronRight, Share2, Facebook, Instagram, Pause
} from "lucide-react"
import type { Memorial } from "@/lib/memorials"

interface Memory {
  id: number
  name: string
  relationship: string
  category: string
  title: string
  description: string
  imageUrl?: string
  date: string
  timeframe: string
}

interface Props {
  slug: string
  memorial: Memorial
}

const categories = [
  { value: "family", label: "Family Moments" },
  { value: "friends", label: "Friends & Social" },
  { value: "work", label: "Work & Career" },
  { value: "hobbies", label: "Hobbies & Interests" },
  { value: "travel", label: "Travel & Adventures" },
  { value: "community", label: "Community Service" },
]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "family": return "👨‍👩‍👧‍👦"
    case "friends": return "👥"
    case "work": return "💼"
    case "hobbies": return "🎨"
    case "travel": return "✈️"
    case "community": return "🤝"
    default: return "📷"
  }
}

export function AddMemoriesClient({ slug, memorial }: Props) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(true)
  const [previewUrl, setPreviewUrl] = useState("")
  const [expandedMemory, setExpandedMemory] = useState<Memory | null>(null)

  const [memoryForm, setMemoryForm] = useState({
    name: "", relationship: "", category: "", title: "", description: "", timeframe: "",
  })

  const [memories, setMemories] = useState<Memory[]>([
    {
      id: 1,
      name: "Submitter's Name",
      relationship: "Relationship",
      category: "family",
      title: "Memory title",
      description: "Shorter description of the memory",
      date: "Date",
      timeframe: "Memory date",
    },
  ])

  // Auto-advance carousel
  useEffect(() => {
    if (!isCarouselPlaying) return
    const timer = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % memorial.carouselPhotos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [isCarouselPlaying, memorial.carouselPhotos.length])

  const nextPhoto = () => setCurrentPhotoIndex((prev) => (prev + 1) % memorial.carouselPhotos.length)
  const prevPhoto = () => setCurrentPhotoIndex((prev) => (prev - 1 + memorial.carouselPhotos.length) % memorial.carouselPhotos.length)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setPreviewUrl(URL.createObjectURL(file))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (memoryForm.name && memoryForm.title && memoryForm.description) {
      const newMemory: Memory = {
        id: memories.length + 1,
        name: memoryForm.name,
        relationship: memoryForm.relationship || "Friend",
        category: memoryForm.category || "family",
        title: memoryForm.title,
        description: memoryForm.description,
        imageUrl: previewUrl || undefined,
        date: new Date().toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" }),
        timeframe: memoryForm.timeframe,
      }
      setMemories([newMemory, ...memories])
      setMemoryForm({ name: "", relationship: "", category: "", title: "", description: "", timeframe: "" })
      setPreviewUrl("")
    }
  }

  const shareToFacebook = (memory: Memory) => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(`Remembering ${memorial.fullName}: "${memory.title}" - ${memory.description.substring(0, 100)}...`)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, "_blank")
  }

  const shareToInstagram = (memory: Memory) => {
    const text = `Remembering ${memorial.fullName}: "${memory.title}" - ${memory.description.substring(0, 100)}... ${window.location.href}`
    navigator.clipboard.writeText(text)
    alert("Memory details copied to clipboard! You can now paste it in your Instagram story or post.")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">

        <div>
          <Link href={`/${slug}`}>
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Memorial
            </Button>
          </Link>
        </div>

        {/* Photo carousel */}
        <Card className="bg-card border-border overflow-hidden">
          <div className="relative h-96 md:h-[500px] bg-muted">
            <Image
              src={memorial.carouselPhotos[currentPhotoIndex].url}
              alt={memorial.carouselPhotos[currentPhotoIndex].caption}
              fill
              className="object-contain"
              priority
            />
            <Button variant="secondary" size="sm" className="absolute left-4 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100" onClick={prevPhoto}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="secondary" size="sm" className="absolute right-4 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100" onClick={nextPhoto}>
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button variant="secondary" size="sm" className="absolute bottom-4 right-4 opacity-80 hover:opacity-100" onClick={() => setIsCarouselPlaying(!isCarouselPlaying)}>
              {isCarouselPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-center text-lg font-medium">{memorial.carouselPhotos[currentPhotoIndex].caption}</p>
            </div>
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
              {memorial.carouselPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentPhotoIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"}`}
                  aria-label={`Go to photo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Card>

        {/* Page header */}
        <Card className="bg-card border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground mb-2 flex items-center justify-center gap-2">
              <Camera className="w-6 h-6 text-primary" />
              Celebrate {memorial.shortName}'s Life
            </CardTitle>
            <p className="text-muted-foreground text-pretty">{memorial.memoriesIntro}</p>
          </CardHeader>
        </Card>

        {/* Add memory form */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground flex items-center gap-2">
              <Upload className="w-5 h-5 text-primary" />
              Share a Memory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="memory-name" className="text-foreground">Your Name *</Label>
                  <Input id="memory-name" value={memoryForm.name} onChange={(e) => setMemoryForm((prev) => ({ ...prev, name: e.target.value }))} placeholder="Enter your full name" required className="bg-input border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="memory-relationship" className="text-foreground">Relationship to {memorial.shortName}</Label>
                  <Input id="memory-relationship" value={memoryForm.relationship} onChange={(e) => setMemoryForm((prev) => ({ ...prev, relationship: e.target.value }))} placeholder="e.g., Family, Friend, Neighbour" className="bg-input border-border" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground">Memory Category</Label>
                  <Select value={memoryForm.category} onValueChange={(value) => setMemoryForm((prev) => ({ ...prev, category: value }))}>
                    <SelectTrigger className="bg-input border-border"><SelectValue placeholder="Select a category" /></SelectTrigger>
                    <SelectContent>
                      {categories.map((c) => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="memory-timeframe" className="text-foreground">When was this? (Optional)</Label>
                  <Input id="memory-timeframe" value={memoryForm.timeframe} onChange={(e) => setMemoryForm((prev) => ({ ...prev, timeframe: e.target.value }))} placeholder="e.g., Summer 2020, Christmas 2019" className="bg-input border-border" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="memory-title" className="text-foreground">Memory Title *</Label>
                <Input id="memory-title" value={memoryForm.title} onChange={(e) => setMemoryForm((prev) => ({ ...prev, title: e.target.value }))} placeholder="Give your memory a meaningful title" required className="bg-input border-border" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="memory-description" className="text-foreground">Share Your Memory *</Label>
                <Textarea id="memory-description" value={memoryForm.description} onChange={(e) => setMemoryForm((prev) => ({ ...prev, description: e.target.value }))} placeholder={`Tell us about this special moment with ${memorial.shortName}...`} rows={4} required className="bg-input border-border resize-none" />
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Add a Photo (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  {previewUrl ? (
                    <div className="space-y-4">
                      <div className="relative w-48 h-48 mx-auto">
                        <Image src={previewUrl} alt="Memory preview" fill className="object-cover rounded-lg" />
                      </div>
                      <Button type="button" variant="outline" onClick={() => setPreviewUrl("")} className="bg-transparent">Remove Photo</Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground" />
                      <div>
                        <Input id="memory-photo" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                        <Label htmlFor="memory-photo" className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                          <Upload className="w-4 h-4" />
                          Choose Photo
                        </Label>
                      </div>
                      <p className="text-sm text-muted-foreground">JPG, PNG, or GIF up to 10MB</p>
                    </div>
                  )}
                </div>
              </div>

              <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                Share Memory
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Memories gallery */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Shared Memories ({memories.length})</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memories.map((memory) => (
              <Card key={memory.id} className="bg-card border-border overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setExpandedMemory(memory)}>
                {memory.imageUrl && (
                  <div className="relative h-48 w-full">
                    <Image src={memory.imageUrl} alt={memory.title} fill className="object-cover" />
                  </div>
                )}
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                      {getCategoryIcon(memory.category)} {categories.find((c) => c.value === memory.category)?.label}
                    </span>
                    {memory.timeframe && (
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />{memory.timeframe}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-balance">{memory.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 text-pretty line-clamp-3">{memory.description}</p>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span><strong className="text-foreground">{memory.name}</strong> • {memory.relationship}</span>
                      <span>{memory.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link href={`/${slug}/leave-message`}>
            <Button variant="outline" className="w-full sm:w-auto bg-transparent">Leave a Message</Button>
          </Link>
          <Link href={`/${slug}/donations`}>
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">Make a Donation</Button>
          </Link>
        </div>
      </div>

      {/* Memory detail modal */}
      {expandedMemory && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">{expandedMemory.title}</h2>
              <Button variant="ghost" size="sm" onClick={() => setExpandedMemory(null)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-6 space-y-6">
              {expandedMemory.imageUrl && (
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image src={expandedMemory.imageUrl} alt={expandedMemory.title} fill className="object-cover" />
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">The Memory</h3>
                <p className="text-muted-foreground leading-relaxed">{expandedMemory.description}</p>
              </div>
              <div className="border-t border-border pt-4 space-y-3">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-primary" />
                  Share this Memory
                </h4>
                <div className="flex gap-3">
                  <Button onClick={() => shareToFacebook(expandedMemory)} size="sm" className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white">
                    <Facebook className="w-3 h-3" />Facebook
                  </Button>
                  <Button onClick={() => shareToInstagram(expandedMemory)} size="sm" className="flex items-center gap-2 bg-gradient-to-r from-[#E4405F] to-[#5B51D8] hover:opacity-90 text-white">
                    <Instagram className="w-3 h-3" />Instagram
                  </Button>
                </div>
                <div className="space-y-2 pt-2 border-t border-border text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shared by:</span>
                    <span className="text-foreground">{expandedMemory.name} ({expandedMemory.relationship})</span>
                  </div>
                  {expandedMemory.timeframe && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">When:</span>
                      <span className="text-foreground">{expandedMemory.timeframe}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shared on:</span>
                    <span className="text-foreground">{expandedMemory.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
