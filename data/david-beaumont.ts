import type { Memorial } from "./maureen-munns"

export const thelma: Memorial = {
  // ─── Identity ────────────────────────────────────────────────────────────────
  slug: "david-beaumont",
  fullName: "David John Beaumont",
  shortName: "David",
  nickname: "DJ",
  photo: "/david-beaumont/david-beaumont_og.jpg",
  dateOfBirth: "2nd April, 1951",
  dateOfDeath: "14th October, 2012",
  tagline: "Tributes to a Legend — loved his family, his table tennis, and doing it his way",

  // ─── Branding ────────────────────────────────────────────────────────────────
  logos: [
    { src: "/funeral-book-logo.webp", alt: "The Funeral Book", width: 120, height: 60 },
  ],
  footerLogo: { src: "/bessie_logo_final.png", alt: "The Funeral Book", width: 60, height: 30 },
  footerTagline: "Remembrance Reimagined • The Funeral Book",

  // ─── Order of Service ────────────────────────────────────────────────────────
  serviceTitle: "Order of Service",
  serviceDate: "TODO CONFIRM",
  serviceTime: "TODO CONFIRM",
  serviceVenueName: "TODO CONFIRM",
  serviceVenueAddress: "TODO CONFIRM",
  serviceVenueMapUrl: "TODO CONFIRM",
  officiant: "TODO CONFIRM",
  
  serviceItems: [
      {
      id: "introduction",
      title: "Words of Introduction",
      subtitle: "Rev Kel Willis",
      time: "",
      type: "general" as const,
    },
    {
      id: "hymn-1",
      title: "Hymn",
      subtitle: "How Great Thou Art",
      time: "",
      type: "hymn" as const,
      content: `O Lord my God, when I in awesome wonder
Consider all the works thy hands have made.
I see the stars, I hear the rolling thunder
Thy power throughout the universe displayed.

Refrain:
Then sings my soul, my Saviour God to thee
How great thou art, how great thou art!
Then sings my soul, my Saviour God to thee
How great thou art, how great thou art!

When through the woods and forest glades I wander
And hear the birds sing sweetly in the trees;
When I look down from lofty mountain grandeur
And hear the brook and feel the gentle breeze.
Refrain

And when I think that God, His Son not sparing,
Sent Him to die, I scarce can take it in;
That on the cross, my burden gladly bearing
He bled and died to take away my sin.
Refrain

When Christ shall come with shout of acclamation
And take me home, what joy shall fill my heart!
Then I shall bow in humble adoration
And there proclaim, my God, how great thou art!
Refrain`,
    },
        {
      id: "prayer-thanksgiving",
      title: "Prayer of Thanksgiving",
      subtitle: "Pastor Dilan Jayaskinge",
      time: "",
      type: "general" as const,
    },
    {
      id: "bible-reading",
      title: "Bible Reading",
      subtitle: "Amanda Hogan & Jenna-Gaye Hollis — 1 Corinthians 13:4-13",
      time: "",
      type: "prayer" as const,
      content: `Love is patient, love is kind. It does not envy, it does not boast, it is not proud.
It is not rude, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.
Love does not delight in evil but rejoices with the truth.
It always protects, always trusts, always hopes, always perseveres.
Love never fails. But where there are prophecies,they will cease; where there are
tongues, they will be stilled; where there is knowledge, it will pass away
For we know in part and we prophesy in part, but when perfection comes, the imperfect disappears.
When I was a child, I talked like a child, I thought like a child, I reasoned like a child. When I became a man, I put childish ways behind me.
Now we see but a poor reflection as in a mirror; then we shall see face to face. Now I know in part; then I shall know fully, even as I am fully known.
And now these three remain: faith, hope and love. But the greatest of these is love.`,
          },
    
        {
      id: "eulogy",
      title: "Eulogy",
      subtitle: "Gary Beaumont — Symbols of Thelma's Life",
      time: "",
      type: "general" as const,
    },
    {
      id: "music",
      title: "Music",
      subtitle: "Allan Peacock",
      time: "",
      type: "general" as const,
    },
        {
      id: "message",
      title: "Message",
      subtitle: "Rev. Kel Willis",
      time: "",
      type: "general" as const,
    },
    {
      id: "poem",
      title: "Poem",
      subtitle: "Tony Aduckiewicz",
      time: "",
      type: "tribute" as const,
    },
        {
      id: "hymn-2",
      title: "Hymn",
      subtitle: "Amazing Grace — Tara Dobson",
      time: "",
      type: "hymn" as const,
      content: `Amazing grace! How sweet the sound
That saved a wretch like me!
I once was lost, but now am found,
Was blind but now I see.

'Twas grace that taught by heart to fear,
And grace my fears relieved;
How precious did that grace appear
The hour I first believed!

Through many dangers, toils and snares
I have already come;
'Tis grace has brought me safe thus far,
And grace will lead me home.

The Lord has promised good to me,
His word my hope secures;
He will my shield and portion be
As long as life endures.

When we've been there ten thousand years,
Bright shining as the sun,
We've no less days to sing God's praise
Than when we first begun.`,
    },
        {
      id: "closing",
      title: "Closing Words",
      subtitle: "Rev Kel Willis",
      time: "",
      type: "general" as const,
    },
  ],

  // ─── After Service ───────────────────────────────────────────────────────────
  receptionIntro:
    "Following the burial, family and friends are invited to join us at Burwood RSL for refreshments.",
  receptionTime: "Following the burial",
  receptionVenueName: "Burwood RSL",
  receptionVenueDetail: "96 Shaftesbury Road\nBurwood, NSW 2134",
  receptionVenueMapUrl: "https://www.google.com/maps/search/?api=1&query=Burwood+RSL+Club+96+Shaftesbury+Rd+Burwood+NSW+2134",
  intermentTitle: "Burial",
  intermentDetail:
     "At the conclusion of the service the cortege will proceed to Rookwood Independent Cemetery.",
  intermentLocation: "Rookwood Independent Cemetery",
  dressCode:
    "Business casual or semi-formal attire is appropriate. Happy bright colors are encouraged, so please don't feel limited to traditional black.",

  // ─── Add Memories carousel ───────────────────────────────────────────────────
 carouselPhotos: [
  { url: "/thelma_and_bob_seaside.jpg", caption: "Thelma & Bob" },
  { url: "/thelma_and_bob_wedding_guests.jpg", caption: "Thelma & Bob's Wedding" },
  { url: "/thelma_bob_kids.png", caption: "Thelma with Family" },
  { url: "/thelma_table_tennis.jpg", caption: "Thelma Playing Table Tennis" },
],
    memoriesIntro:
    "Share your favorite photos and memories of Thelma. These precious moments will create a lasting tribute to her beautiful life and the joy she brought to so many people.",
  memoriesSubject: "Thelma",

  // ─── Donations ───────────────────────────────────────────────────────────────
  donationsIntro:
    "In lieu of flowers, the family requests donations be made to one of the following organizations that were dear to Thelma's heart. Your generosity will continue her legacy of giving and community service.",
  donationsShareText:
    "Honor Thelma's memory by making a donation to causes she cared about. Help continue her legacy of giving and community service.",
 charities: [
  {
    id: "cancer-council",
    name: "Cancer Council Australia",
    description: "Funds life-saving cancer research, education, and support services for Australians affected by cancer. Donations of $2 and over are tax deductible.",
    url: "https://www.cancer.org.au/get-involved/donate-to-cancer-council/one-time-donation",
    logo: "/cancer-council-logo-new.gif",
  },
  {
    id: "stroke-foundation",
    name: "Stroke Foundation",
    description: "Works to prevent stroke, save lives and enhance recovery for the 500,000+ Australians living with the effects of stroke.",
    url: "https://donate.strokefoundation.org.au/",
    logo: "/logo-stroke-foundation.webp",
  },
  {
    id: "white-ribbon",
    name: "White Ribbon Australia",
    description: "Drives primary prevention programs and engages men and boys to lead the charge against violence towards women and children.",
    url: "https://whiteribbon.org.au/give-now/",
    logo: "/white-ribbon-logo.jpg",
  },
  {
    id: "salvation-army",
    name: "The Salvation Army",
    description: "Supports Australians facing homelessness, addiction, domestic violence, and crisis — providing practical help and hope across the country.",
    url: "https://www.salvationarmy.org.au/donate/make-a-donation/donate-online/",
    logo: "/salvation-army-logo.webp",
  },
],

  // ─── Contact ─────────────────────────────────────────────────────────────────
  contactEmail: "rebecca.munns@thefuneralbook.com",
  contactPhone: "0411 649 097",
  familyContactName: "Jennifer Aduckiewicz",
  familyContactPhone: "0408 291 942",
  faqDonationsText: "Yes, the family welcomes donations to Thelma's favorite charities.",
  faqDressCode:
    "Business casual or semi-formal attire is appropriate. Bright colors are encouraged, so please don't feel limited to traditional black attire.",
}
