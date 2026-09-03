import type { Memorial } from "./maureen-munns"

export const bob: Memorial = {
  // ─── Identity ────────────────────────────────────────────────────────────────
  slug: "bob-beaumont",
  fullName: "Robert Wilson Beaumont",
  shortName: "Bob",
  nickname: "Pop",
  photo: "/bob-beaumont/bob-beaumont_og.jpeg",
  dateOfBirth: "25th November, 1921",
  dateOfDeath: "28th October, 2014",
  tagline: "TODO CONFIRM — a life well lived, loved by his family",

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
  officiant: "Pastor Dilan Jayaskinge",

  serviceItems: [
    {
      id: "introduction",
      title: "Words of Introduction",
      subtitle: "Pastor Dilan Jayaskinge",
      time: "",
      type: "general" as const,
    },
    {
      id: "hymn-1",
      title: "Hymn",
      subtitle: "What a Friend We Have in Jesus",
      time: "",
      type: "hymn" as const,
      content: `What a friend we have in Jesus,
All our sin and griefs to bear!
What a privilege to carry
Everything to God in prayer!
Oh, what peace we often forfeit,
Oh, what needless pain we bear,
All because we do not carry
Everything to God in prayer!

Have we trials and temptations?
Is there trouble anywhere?
We should never be discouraged —
Take it to the Lord in prayer.
Can we find a friend so faithful,
Who will all our sorrows share?
Jesus knows our every weakness;
Take it to the Lord in prayer.

Are we weak and heavy-laden,
Cumbered with a load of care?
Precious Savior, still our refuge —
Take it to the Lord in prayer.
Do thy friends despise, forsake thee?
Take it to the Lord in prayer!
In His arms He'll take and shield thee,
Thou wilt find a solace there.

Blessed Savior, Thou hast promised
Thou wilt all our burdens bear;
May we ever, Lord, be bringing
All to Thee in earnest prayer.
Soon in glory bright, unclouded,
There will be no need for prayer —
Rapture, praise, and endless worship
Will be our sweet portion there.`,
    },
    {
      id: "bible-reading-1",
      title: "Bible Reading",
      subtitle: "Andrew Beaumont & Robert Beaumont — 1 Corinthians 13:4–13 (KJV)",
      time: "",
      type: "prayer" as const,
      content: `Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up, Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil; Rejoiceth not in iniquity, but rejoiceth in the truth; Beareth all things, believeth all things, hopeth all things, endureth all things.

Charity never faileth: but whether there be prophecies, they shall fail; whether there be tongues, they shall cease; whether there be knowledge, it shall vanish away. For we know in part, and we prophesy in part. But when that which is perfect is come, then that which is in part shall be done away.

When I was a child, I spake as a child, I understood as a child, I thought as a child: but when I became a man, I put away childish things. For now we see through a glass, darkly; but then face to face: now I know in part; but then shall I know even as also I am known.

And now abideth faith, hope, charity, these three; but the greatest of these is charity.`,
    },
    {
      id: "eulogy",
      title: "Eulogy",
      subtitle: "Gary Beaumont & Jennifer Aduckiewicz",
      time: "",
      type: "general" as const,
    },
    {
      id: "music",
      title: "Music",
      subtitle: "Issabella & Sam Hogan — Fields of Gold",
      time: "",
      type: "general" as const,
    },
    {
      id: "prayer-thanksgiving",
      title: "Prayer of Thanksgiving",
      subtitle: "Gary Beaumont",
      time: "",
      type: "general" as const,
    },
    {
      id: "bible-reading-2",
      title: "Bible Reading",
      subtitle: "Adam Aduckiewicz — 1 Thessalonians 4:13–18 (KJV)",
      time: "",
      type: "prayer" as const,
      content: `But I would not have you to be ignorant, brethren, concerning them which are asleep, that ye sorrow not, even as others which have no hope. For if we believe that Jesus died and rose again, even so them also which sleep in Jesus will God bring with him.

For this we say unto you by the word of the Lord, that we which are alive and remain unto the coming of the Lord shall not prevent them which are asleep. For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first.

Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord.

Wherefore comfort one another with these words.`,
    },
    {
      id: "message",
      title: "Message",
      subtitle: "Pastor Dilan Jayaskinge",
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
      subtitle: "The Lord is My Shepherd",
      time: "",
      type: "hymn" as const,
      content: `The Lord's my Shepherd, I'll not want;
He makes me down to lie
In pastures green; He leadeth me
The quiet waters by.

My soul He doth restore again,
And me to walk doth make
Within the paths of righteousness,
E'en for His own name's sake.

Yea, though I walk in death's dark vale,
Yet will I fear no ill;
For Thou art with me, and Thy rod
And staff my comfort still.

My table Thou hast furnished me
In presence of my foes;
My head Thou dost with oil anoint,
And my cup overflows.

Goodness and mercy all my life
Shall surely follow me;
And in God's house forevermore,
My dwelling place shall be.`,
    },
    {
      id: "closing",
      title: "Closing Words",
      subtitle: "Pastor Dilan Jayaskinge",
      time: "",
      type: "general" as const,
    },
  ],

  // ─── After Service ───────────────────────────────────────────────────────────
  receptionIntro:
    "Following the burial, family and friends are invited to join us at Club Burwood for refreshments.",
  receptionTime: "Following the burial",
  receptionVenueName: "Club Burwood",
  receptionVenueDetail: "Cnr Burwood Rd & George St\nBurwood, NSW",
  receptionVenueMapUrl: "https://www.google.com/maps/search/?api=1&query=Club+Burwood+Cnr+Burwood+Rd+%26+George+St+Burwood+NSW",
  intermentTitle: "Burial",
  intermentDetail:
    "At the conclusion of the service the cortege will proceed to Rookwood Cemetery.",
  intermentLocation: "Rookwood Cemetery",
  dressCode: "TODO CONFIRM",

  // ─── Add Memories carousel ───────────────────────────────────────────────────
  carouselPhotos: [
    { url: "/bob-beaumont/bob-beaumont_og.jpeg", caption: "Bob" },
    { url: "/bob-beaumont/bob-beaumont_thelma_young.jpg", caption: "Bob & Thelma" },
    { url: "/bob-beaumont/bob-beaumont_thelma___holiday.jpg", caption: "Bob & Thelma on Holiday" },
    { url: "/bob-beaumont/bob-beaumont_family.jpeg", caption: "Bob with Family" },
    { url: "/bob-beaumont/bob-beaumont_brother.jpeg", caption: "Bob with his Brother" },
    { url: "/bob-beaumont/bob-beaumont_thelma_kids_and_partners.jpg", caption: "Bob & Thelma with Kids and Partners" },
  ],
  memoriesIntro:
    "Share your favourite photos and memories of Bob. These moments capture a life full of love, laughter, and family.",
  memoriesSubject: "Bob",

  // ─── Donations ───────────────────────────────────────────────────────────────
  donationsIntro: "TODO CONFIRM — in lieu of flowers, does the family have preferred charities for Bob?",
  donationsShareText: "TODO CONFIRM",
  charities: [],

  // ─── Contact ─────────────────────────────────────────────────────────────────
  contactEmail: "rebecca.munns@thefuneralbook.com",
  contactPhone: "0411 649 097",
  familyContactName: "Jennifer Aduckiewicz",
  familyContactPhone: "0408 291 942",
  faqDonationsText: "TODO CONFIRM",
  faqDressCode: "TODO CONFIRM",
}
