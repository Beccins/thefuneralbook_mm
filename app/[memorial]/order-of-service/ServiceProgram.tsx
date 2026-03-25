"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, ChevronDown, ChevronUp, Music, BookOpen, Mic } from "lucide-react"

interface ServiceItem {
  id: string
  title: string
  subtitle: string
  time?: string
  type: "hymn" | "prayer" | "tribute" | "general"
  content?: string
  audioUrl?: string
  spotifyId?: string
  youTubeId?: string
}

function InteractiveServiceItem({ item }: { item: ServiceItem }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showSpotify, setShowSpotify] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (item.type === "tribute" && item.audioUrl) {
      audioRef.current = new Audio(item.audioUrl)
      audioRef.current.addEventListener("ended", () => setIsPlaying(false))
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [item.audioUrl, item.type])

  const getIcon = () => {
    switch (item.type) {
      case "hymn": return <Music className="w-4 h-4" />
      case "prayer": return <BookOpen className="w-4 h-4" />
      case "tribute": return <Mic className="w-4 h-4" />
      default: return null
    }
  }

  const handlePlay = () => {
    if (item.type === "tribute" && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    } else if (item.type === "hymn" && item.spotifyId) {
      setShowSpotify(!showSpotify)
    }
  }

  const canExpand = (item.type === "hymn" || item.type === "prayer") && item.content
  const canPlay = (item.type === "tribute" && item.audioUrl) || (item.type === "hymn" && item.spotifyId)

  return (
    <div className="border-b border-border pb-3 last:border-b-0">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {getIcon()}
            <h4 className="font-semibold text-foreground">{item.title}</h4>
            {canPlay && (
              <Button size="sm" variant="ghost" onClick={handlePlay} className="h-6 px-2 text-primary hover:text-primary/80">
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </Button>
            )}
            {canExpand && (
              <Button size="sm" variant="ghost" onClick={() => setIsExpanded(!isExpanded)} className="h-6 px-2 text-primary hover:text-primary/80">
                {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </Button>
            )}
          </div>
          <p className="text-muted-foreground text-sm">{item.subtitle}</p>
          {isExpanded && item.content && (
            <div className="mt-3 p-4 bg-muted rounded-lg">
              <p className="text-foreground text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
            </div>
          )}
          {showSpotify && item.spotifyId && (
            <div className="mt-3">
              <iframe
                style={{ borderRadius: "12px" }}
                src={`https://open.spotify.com/embed/track/${item.spotifyId}?utm_source=generator`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          )}
          {item.youTubeId && (
            <div className="mt-3 aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${item.youTubeId}`}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          )}
        </div>
        {item.time && <span className="text-muted-foreground text-sm ml-4">{item.time}</span>}
      </div>
    </div>
  )
}

export function ServiceProgram({ items }: { items: ServiceItem[] }) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl text-foreground text-center">Service Program</CardTitle>
        <p className="text-sm text-muted-foreground text-center mt-2">
          Click the icons to play audio or expand lyrics
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <InteractiveServiceItem key={item.id} item={item} />
        ))}
      </CardContent>
    </Card>
  )
}
