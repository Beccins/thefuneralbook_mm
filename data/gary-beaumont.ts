import type { Memorial } from "./maureen-munns"

export const gary: Memorial = {
  // ─── Identity ────────────────────────────────────────────────────────────────
  slug: "gary-beaumont",
  fullName: "Gary Robert Beaumont",
  shortName: "Gary",
  nickname: "Gary",
  photo: "/GARY 2010.jpg",
  dateOfBirth: "14th January, 1947",
  dateOfDeath: "18th March, 2024",
  tagline: "He loved the Lord, his family, his church, his community, his country and pavlova",

  // ─── Branding ────────────────────────────────────────────────────────────────
  logos: [
    { src: "/funeral-book-logo.webp", alt: "The Funeral Book", width: 120, height: 60 },
  ],
  footerLogo: { src: "/bessie_logo_final.png", alt: "The Funeral Book", width: 60, height: 30 },
  footerTagline: "Remembrance Reimagined • The Funeral Book",

  // ─── Order of Service ────────────────────────────────────────────────────────
  serviceTitle: "Celebration of Life",
  serviceDate: "Tuesday, 26th of March, 2024",
  serviceTime: "11:00 AM",
  serviceVenueName: "Hills Community Church of the Nazarene Kenthurst",
  serviceVenueAddress: "87 Kenthurst Rd\nKenthurst, NSW, 2156",
  serviceVenueMapUrl: "https://maps.app.goo.gl/NoevFPoF6r64iyNo6",
  officiant: "Pastor Glenn Stanley",
  serviceYouTubeId: "HVVEK395Io4",
  serviceYouTubeTitle: "Funeral Service for Gary Robert Beaumont",

  serviceItems: [
    {
      id: "welcome",
      title: "Welcome",
      subtitle: "Pastor Glenn Stanley",
      time: "",
      type: "general" as const,
    },
    {
      id: "song-1",
      title: "Song",
      subtitle: "When the Roll is Called Up Yonder",
      time: "",
      type: "hymn" as const,
      content: `1 When the trumpet of the Lord shall sound and time shall be no more,
And the morning breaks, eternal, bright and fair;
When the saved of earth shall gather over on the other shore,
And the roll is called up yonder, I'll be there.

Refrain:
When the roll is called up yonder,
When the roll is called up yonder,
When the roll is called up yonder,
When the roll is called up yonder, I'll be there.

2 On that bright and cloudless morning when the dead in Christ shall rise,
And the glory of his resurrection share;
When his chosen ones shall gather to their home beyond the skies,
And the roll is called up yonder, I'll be there. [Refrain]

3 Let us labor for the Master from the dawn till setting sun;
Let us talk of all his wondrous love and care.
Then when all of life is over and our work on earth is done,
And the roll is called up yonder, I'll be there. [Refrain]`,
    },
    {
      id: "bible-reading",
      title: "Bible Reading",
      subtitle: "Psalm 119: 9-16 - Larry Ransley",
      time: "",
      type: "prayer" as const,
      content: `How can a young person stay on the path of purity
by living according to your word I seek you with all my heart
do not let me stray from your commands
I have hidden your word in my heart
that I might not sin against you
praise be to you Lord
teach me your decrees
with my lips I recount
all the laws that come from your mouth
I rejoice in following your statutes
as one rejoices in great riches
I meditate on your precepts
and I consider your ways
I delight in your decrees
I will not neglect your word`,
    },
    {
      id: "eulogy",
      title: "Eulogy",
      subtitle: "Read by Pastor Judy Stanley",
      time: "",
      type: "general" as const,
    },
    {
      id: "song-2",
      title: "Song",
      subtitle: "Blessed Assurance",
      time: "",
      type: "hymn" as const,
      content: `1 Blessed assurance, Jesus is mine!
Oh, what a foretaste of glory divine!
Heir of salvation, purchase of God,
born of his Spirit, washed in his blood.

Refrain:
This is my story, this is my song,
praising my Savior all the day long.
This is my story, this is my song,
praising my Savior all the day long.`,
    },
    {
      id: "sharing-memories",
      title: "Sharing Memories of Gary",
      subtitle: "Pastor Glenn Stanley",
      time: "",
      type: "general" as const,
    },
    {
      id: "memorial-video",
      title: "Watch Gary's Memorial Video",
      subtitle: "A tribute to Gary Robert Beaumont",
      time: "",
      type: "general" as const,
      // Inline YouTube embed — rendered specially in the order of service page
      youTubeId: "zmPNVK6RZ4s",
    },
    {
      id: "song-3",
      title: "Song",
      subtitle: "It is well with my soul",
      time: "",
      type: "hymn" as const,
      content: `When peace, like a river, attendeth my way,
When sorrows like sea billows roll;
Whatever my lot, Thou hast taught me to say,
It is well, it is well with my soul.

Refrain:
It is well with my soul,
It is well, it is well with my soul.

Though Satan should buffet, though trials should come,
Let this blest assurance control,
That Christ hath regarded my helpless estate,
And hath shed His own blood for my soul.

My sin—oh, the bliss of this glorious thought!—
My sin, not in part but the whole,
Is nailed to the cross, and I bear it no more,
Praise the Lord, praise the Lord, O my soul!

For me, be it Christ, be it Christ hence to live:
If Jordan above me shall roll,
No pang shall be mine, for in death as in life
Thou wilt whisper Thy peace to my soul.

But, Lord, 'tis for Thee, for Thy coming we wait,
The sky, not the grave, is our goal;
Oh, trump of the angel! Oh, voice of the Lord!
Blessed hope, blessed rest of my soul!

And Lord, haste the day when the faith shall be sight,
The clouds be rolled back as a scroll;
The trump shall resound, and the Lord shall descend,
Even so, it is well with my soul.`,
    },
    {
      id: "benediction",
      title: "Benediction",
      subtitle: "Pastor Glenn Stanley",
      time: "",
      type: "general" as const,
    },
  ],

  // ─── After Service ───────────────────────────────────────────────────────────
  receptionIntro:
    "Following the service, family and friends are invited to join us for a reception to continue sharing memories and celebrating Gary's life together.",
  receptionTime: "Immediately following the service",
  receptionVenueName: "Hills Community Church of the Nazarene Kenthurst",
  receptionVenueDetail: "In the church grounds",
  receptionVenueMapUrl: "https://maps.app.goo.gl/NoevFPoF6r64iyNo6",
  intermentTitle: "Private Family Service",
  intermentDetail:
    "A private interment service for immediate family will be held at Castlebrook Memorial Park Garden Chapel Rouse Hill at 9am",
  intermentLocation: "Castlebrook Memorial Park Garden Chapel, Rouse Hill",
  dressCode:
    "Business casual or semi-formal attire is appropriate. Happy bright colors are encouraged, so please don't feel limited to traditional black.",

  // ─── Add Memories carousel ───────────────────────────────────────────────────
  carouselPhotos: [
    { url: "/01_Gary_Young_7ish.jpg", caption: "Young Gary" },
    { url: "/02_Gary_11ish_with_family.jpg", caption: "Gary with Family" },
    { url: "/03_Gary_21st_cake.jpg", caption: "Gary's 21st Birthday" },
    { url: "/04_Gary_Gail_WeddingCar.jpg", caption: "Gary & Gail's Wedding" },
    { url: "/05_Gary_Family_50ish.jpg", caption: "Gary with Family" },
    { url: "/06_Gary_TableTennis.jpg", caption: "Gary Playing Table Tennis" },
    { url: "/07_Gary_Seaplane.jpg", caption: "Gary & the Seaplane" },
    { url: "/08_Gary_in_Cadets.jpg", caption: "Gary in Cadets" },
    { url: "/GARY 2010.jpg", caption: "Gary, 2010" },
  ],
  memoriesIntro:
    "Share your favorite photos and memories of Gary. These precious moments will create a lasting tribute to his beautiful life and the joy he brought to so many people.",
  memoriesSubject: "Gary",

  // ─── Donations ───────────────────────────────────────────────────────────────
  donationsIntro:
    "In lieu of flowers, the family requests donations be made to one of the following organizations that were dear to Gary's heart. Your generosity will continue his legacy of giving and community service.",
  donationsShareText:
    "Honor Gary's memory by making a donation to causes he cared about. Help continue his legacy of giving and community service.",
  charities: [
    {
      id: "charity",
      name: "Charity Name",
      description: "Description of charity",
    },
  ],

  // ─── Contact ─────────────────────────────────────────────────────────────────
  contactEmail: "rebecca.munns@thefuneralbook.com",
  contactPhone: "0200 000 000",
  familyContactName: "Contact Name",
  familyContactPhone: "0400 000 000",
  faqDonationsText: "Yes, the family welcomes donations to Gary's favorite charities.",
  faqDressCode:
    "Business casual or semi-formal attire is appropriate. Bright colors are encouraged, so please don't feel limited to traditional black attire.",
}
