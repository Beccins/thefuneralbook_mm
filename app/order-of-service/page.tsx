"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Clock, Calendar, Play, Pause, ChevronDown, ChevronUp, Music, BookOpen, Mic } from "lucide-react"
import { useState, useRef, useEffect } from "react"
 
interface ServiceItem {
  id: string
  title: string
  subtitle: string
  time: string
  type: "hymn" | "prayer" | "tribute" | "general"
  content?: string
  audioUrl?: string
}

const serviceItems: ServiceItem[] = [
  {
    id: "welcome",
    title: "Welcome and prayer",
    subtitle: "Stephen Bates",
    time: "unknown",
    type: "general",
  },
  {
    id: "Scripture Reading",
    title: "Scripture reading - 1 Peter chapter 1:3-9",
    subtitle: "Caitlyn Munns",
    time: "unknown",
    type: "general",
  },
  {
    id: "song",
    title: "Song",
    subtitle: "How Great Thou Art",
    time: "unknown",
    type: "hymn",
    content: `O Lord my God
When I in awesome wonder 
Consider all the worlds
Thy hands have made, 
I see the stars,
I hear the rolling thunder, 
Thy pow'r throughout The universe displayed!

Chorus:
Then sings my soul,
My Saviour God, to Thee; 
How great Thou art, 
How great Thou art!
Then sings my soul,
My Saviour God, to Thee;
How great Thou art,
How great Thou art!
 
And when I think
That God, His Son not sparing, 
Sent Him to die,
I scarce can take it in - 
That on the cross,
My burden gladly bearing, He bled and died
To take away my sin!

Chorus

When Christ shall come 
With shout of acclamation 
And take me home,
What joy shall fill my heart! 
Then I shall bow
In humble adoration
And there proclaim,
My God, how great Thou art!
 
Chorus`,
  },
  {
    id: "Memories shared of Maureen",
    title: "Memories shared of Maureen",
    subtitle: "Phil Munns reads poem - More of Mor",
    time: "unknown",
    type: "tribute",
    audioUrl: "/Phil Munns reads poem - More of Mor.m4a",
  },
  {
    id: "song-3",
    title: "Song",
    subtitle: "It is well with my soul",
    time: "unknown",
    type: "hymn",
    content: `When peace, like a river, 
attendeth my way,
When sorrows like sea billows roll;
Whatever my lot, Thou hast taught me to say,
It is well, it is well with my soul.

Refrain:
It is well (it is well) with my soul (with my soul),
It is well, it is well with my soul.

Though Satan should buffet, 
though trials should come,
Let this blest assurance control,
That Christ has regarded my helpless estate,
And has shed His own blood for my soul.

Refrain

My sin—oh, the bliss of this 
glorious thought!—
My sin, not in part but the whole,
Is nailed to the cross, and I bear it no more,
Praise the Lord, praise the Lord, O my soul!

Refrain

And Lord, haste the day when the 
faith shall be sight,
The clouds be rolled back as a scroll;
The trump shall resound, and the 
Lord shall descend,
Even so, it is well with my soul.

Refrain`,
  },
  {
    id: "Prayer for the family",
    title: "Prayer for the family",
    subtitle: "Jordon Taylor",
    time: "unknown",
    type: "general",
  },
  {
    id: "benediction",
    title: "Benediction",
    subtitle: "Joshua Taylor",
    time: "unknown",
    type: "general",
  },
]

function InteractiveServiceItem({ item }: { item: ServiceItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element when component mounts
  useEffect(() => {
    if (item.type === "tribute" && item.audioUrl) {
      audioRef.current = new Audio(item.audioUrl);
      
      // Listen for when audio ends to reset the playing state
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    }

    // Cleanup function to pause and remove audio when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [item.audioUrl, item.type]);

  const getIcon = () => {
    switch (item.type) {
      case "hymn":
        return <Music className="w-4 h-4" />;
      case "prayer":
        return <BookOpen className="w-4 h-4" />;
      case "tribute":
        return <Mic className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const canExpand = (item.type === "prayer" && item.content) || (item.type === "hymn" && item.content);
  const canPlay = (item.type === "tribute" && item.audioUrl);

  return (
    <div className="border-b border-border pb-3 last:border-b-0">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {getIcon()}
            <h4 className="font-semibold text-foreground">{item.title}</h4>
            {canPlay && (
              <Button
                size="sm"
                variant="ghost"
                onClick={handlePlay}
                className="h-6 px-2 text-primary hover:text-primary/80"
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </Button>
            )}
            {canExpand && (
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
          <p className="text-muted-foreground text-sm">{item.subtitle}</p>
          {isExpanded && item.content && (
            <div className="mt-3 p-4 bg-muted rounded-lg">
              <p className="text-foreground text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
            </div>
          )}
        </div>
        <span className="text-muted-foreground text-sm ml-4">{item.time}</span>
      </div>
    </div>
  );
}

export default function OrderOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Memorial
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Order of Service</h1>
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="bg-card border-border">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl font-bold text-foreground mb-4">Order of Service</CardTitle>
              <h2 className="text-2xl text-foreground mb-2">Maureen (Mor) Munns</h2>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">Date</h3>
                <p className="text-muted-foreground">Friday, 6th February, 2026</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">Time</h3>
                <p className="text-muted-foreground">1:30 PM</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <a
                  href="https://www.google.com/maps/place/Parramatta+Baptist+Church/@-33.7891197,150.988575,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12a25722886781:0x7d79e080732b9c08!8m2!3d-33.7891197!4d150.9911499!16s%2Fg%2F1q5brt9z6?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-pretty hover:text-primary transition-colors cursor-pointer underline decoration-dotted underline-offset-4"
                >
                  Parramatta Baptist Church
                  <br />
                  84-94 Kleins Road
                  <br />
                  Northmead, NSW, 2152
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground text-center">Service Program</CardTitle>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Click the icons to play audio or expand hymn lyrics
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {serviceItems.map((item) => (
                <InteractiveServiceItem key={item.id} item={item} />
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Officiant</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Pastor Glenn Stanley</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/leave-message">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                Leave a Message
              </Button>
            </Link>
            <Link href="/add-memories">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                Share Memories
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-border bg-muted mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <p className="text-muted-foreground">{"Remembrance Reimagined • The Funeral Book"}</p>
              <Image
                src="/bessie_logo_final.png"
                alt="The Funeral Book"
                width={60}
                height={30}
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Created by{" "}
            <a
              href="https://github.com/afishydeath"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted-foreground transition-colors"
            >
              Munns Media Pty Ltd
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
