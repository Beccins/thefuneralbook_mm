"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, ChevronDown, ChevronUp, Music, BookOpen, Mic, Users, ExternalLink } from "lucide-react"
import Link from "next/link"

interface ServiceItem {
  id: string
  title: string
  subtitle: string
  time?: string
  type: "hymn" | "prayer" | "tribute" | "general" | "contribution"
  content?: string
  audioUrl?: string
  spotifyId?: string
  youTubeId?: string
  contributorNames?: string
  status?: "draft" | "published"
  googleDocUrl?: string
}

function ContributionItem({ item, slug }: { item: ServiceItem; slug?: string }) {
  const [status, setStatus] = useState<"draft" | "published">(item.status ?? "draft")
  const [isExpanded, setIsExpanded] = useState(false)

  const isDraft = status === "draft"

  return (
    <div className="border-b border-border pb-4 last:border-b-0">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">

          {/* Title row */}
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <Users className="w-4 h-4 text-muted-foreground shrink-0" />
            <h4 className="font-semibold text-foreground">{item.title}</h4>

            {/* Coming Soon badge */}
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-medium shrink-0">
              Coming Soon
            </span>

            {/* Draft / Published badge */}
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 transition-colors duration-300 ${
              isDraft
                ? "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                : "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
            }`}>
              {isDraft ? "Draft" : "Published"}
            </span>

            {/* Expand/collapse */}
            {item.content && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsExpanded(!isExpanded)}
                className="h-6 px-2 text-primary hover:text-primary/80"
              >
                {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </Button>
            )}
          </div>

          {/* Subtitle / contributors */}
          <p className="text-muted-foreground text-sm mb-1">{item.subtitle}</p>
          {item.contributorNames && (
            <p className="text-muted-foreground text-xs mb-3">
              Contributors: {item.contributorNames}
            </p>
          )}

          {/* Expanded content preview */}
          {isExpanded && item.content && (
            <div className="mt-2 mb-3 p-4 bg-muted rounded-lg">
              <p className="text-foreground text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-wrap gap-2 mt-2">
            {item.googleDocUrl && (
              <a href={item.googleDocUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  Open Draft
                </Button>
              </a>
            )}

            {isDraft && (
              <Button
                size="sm"
                variant="outline"
                className="h-7 text-xs border-green-400 text-green-700 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-950"
                onClick={() => setStatus("published")}
              >
                Publish to Memorial
              </Button>
            )}

            {!isDraft && (
              <Button
                size="sm"
                variant="outline"
                className="h-7 text-xs border-amber-400 text-amber-700 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-950"
                onClick={() => setStatus("draft")}
              >
                Return to Draft
              </Button>
            )}

            {/* Register interest CTA */}
            <Link href={slug ? `/${slug}/contact` : "/contact"}>
              <Button
                size="sm"
                variant="ghost"
                className="h-7 text-xs text-muted-foreground hover:text-primary"
              >
                Register your interest →
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

function InteractiveServiceItem({ item, slug }: { item: ServiceItem; slug?: string }) {
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

  if (item.type === "contribution") {
    return <ContributionItem item={item} slug={slug} />
  }

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

export function ServiceProgram({ items, slug }: { items: ServiceItem[]; slug?: string }) {
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
          <InteractiveServiceItem key={item.id} item={item} slug={slug} />
        ))}
      </CardContent>
    </Card>
  )
}
