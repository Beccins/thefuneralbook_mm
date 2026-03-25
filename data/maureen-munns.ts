export const maureen = {
  // ─── Identity ────────────────────────────────────────────────────────────────
  slug: "maureen-munns",
  fullName: "Maureen 'Mor' Munns",
  shortName: "Maureen",
  nickname: "Mor",
  photo: "/Mor Munns funeral book cover image.jpg",
  dateOfBirth: "15th March, 1938",
  dateOfDeath: "25th January, 2026",
  tagline: "In Loving Memory",

  // ─── Branding ────────────────────────────────────────────────────────────────
  // Logos shown in the header
  logos: [
    { src: "/funeral-book-logo.webp", alt: "The Funeral Book", width: 120, height: 60 },
    { src: "/Hills family funerals logo.png", alt: "Hills Family Funerals", width: 120, height: 60 },
  ],
  footerLogo: { src: "/bessie_logo_final.png", alt: "The Funeral Book", width: 60, height: 30 },
  footerTagline: "Remembrance Reimagined • The Funeral Book",

  // ─── Order of Service ────────────────────────────────────────────────────────
  serviceTitle: "Order of Service",
  serviceDate: "Friday, 6th February, 2026",
  serviceTime: "1:30 PM",
  serviceVenueName: "Parramatta Baptist Church",
  serviceVenueAddress: "84-94 Kleins Road\nNorthmead, NSW, 2152",
  serviceVenueMapUrl:
    "https://www.google.com/maps/place/Parramatta+Baptist+Church/@-33.7891197,150.988575,17z",
  officiant: "Stephen Bates",
  serviceYouTubeId: "GqIhCqdaunA",
  serviceYouTubeTitle: "Funeral Service for Maureen Munns",

  serviceItems: [
    {
      id: "welcome",
      title: "Welcome and prayer",
      subtitle: "Stephen Bates",
      time: "",
      type: "general" as const,
    },
    {
      id: "scripture",
      title: "Scripture reading - 1 Peter chapter 1:3-9",
      subtitle: "Caitlyn Munns",
      time: "",
      type: "general" as const,
    },
    {
      id: "song-1",
      title: "Song",
      subtitle: "How Great Thou Art",
      time: "",
      type: "hymn" as const,
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
      id: "tribute",
      title: "Memories shared of Maureen",
      subtitle: "Phil Munns reads poem - More of Mor",
      time: "",
      type: "tribute" as const,
      audioUrl: "/Phil Munns reads poem - More of Mor.m4a",
    },
    {
      id: "song-2",
      title: "Song",
      subtitle: "It is well with my soul",
      time: "",
      type: "hymn" as const,
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
      id: "prayer",
      title: "Prayer for the family",
      subtitle: "Jordon Taylor",
      time: "",
      type: "general" as const,
    },
    {
      id: "benediction",
      title: "Benediction",
      subtitle: "Joshua Taylor",
      time: "",
      type: "general" as const,
    },
  ],

  // ─── After Service ───────────────────────────────────────────────────────────
  receptionIntro:
    "Following the service, family and friends are invited to join us for a thanksgiving reception to continue sharing memories and celebrating Mor's life together.",
  receptionTime: "Immediately following the service",
  receptionVenueName: "Parramatta Baptist Church",
  receptionVenueDetail: "In the church foyer",
  receptionVenueMapUrl:
    "https://www.google.com/maps/place/Parramatta+Baptist+Church/@-33.7891197,150.988575,17z",
  intermentTitle: "Private Family Service",
  intermentDetail:
    "A private interment service for immediate family will be held at Castlebrook Memorial Park Garden Chapel Rouse Hill at 11am",
  intermentLocation: "Castlebrook Memorial Park Garden Chapel, Rouse Hill",
  dressCode:
    "Business casual or semi-formal attire is appropriate. Maureen loved colors, so please don't feel limited to traditional black.",

  // ─── Add Memories carousel ───────────────────────────────────────────────────
  carouselPhotos: [
    { url: "/delivering-mors-eulogy.jpeg", caption: "Delivering Mor's eulogy" },
    { url: "/family-at-mors-cremation.jpg", caption: "Family at Mor's cremation" },
    { url: "/grandkids-with-mor.jpg", caption: "Grandkids with Mor" },
    { url: "/josh-taylor-presents-mors-cremation-service.jpeg", caption: "Josh Taylor presents Mor's cremation service" },
    { url: "/kids-partners-mors-birthday.jpg", caption: "Kids and partners at Mor's birthday" },
    { url: "/mor-helping-out-at-church.jpg", caption: "Mor helping out at church" },
    { url: "/mor-in-pink-paisley.jfif", caption: "Mor in pink paisley" },
    { url: "/mor-making-toys-for-less-fortunate-kids.jpg", caption: "Mor making toys for less fortunate kids" },
    { url: "/rylie-reaching-for-mor.jpg", caption: "Rylie reaching for Mor" },
    { url: "/young-mor-with-bob-haircut.jpg", caption: "Young Mor with bob haircut" },
  ],
  memoriesIntro:
    "Share your favorite photos and memories of Mor. These precious moments will create a lasting tribute to her beautiful life and the joy she brought to so many people.",
  memoriesSubject: "Maureen",

  // ─── Donations ───────────────────────────────────────────────────────────────
  donationsIntro:
    "In lieu of flowers, the family requests donations be made to one of the following organizations that were dear to Maureen's heart. Your generosity will continue her legacy of giving and community service.",
  donationsShareText:
    "Honor Maureen's memory by making a donation to causes she cared about. Help continue her legacy of giving and community service.",
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
  faqDonationsText: "Yes, the family welcomes donations to Maureen's favorite charities.",
  faqDressCode:
    "Business casual or semi-formal attire is appropriate. Maureen loved colors, so please don't feel limited to traditional black attire.",
}

export type Memorial = typeof maureen
