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
      id: "prelude",
      title: "Prelude",
      subtitle: "The Rose — Bette Midler",
      time: "",
      type: "general" as const,
    },
    {
      id: "welcome",
      title: "Welcome",
      subtitle: "",
      time: "",
      type: "general" as const,
    },
    {
      id: "prayer-1",
      title: "Prayer",
      subtitle: "",
      time: "",
      type: "general" as const,
    },
    {
      id: "hymn-amazing-grace",
      title: "Hymn",
      subtitle: "Amazing Grace",
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
      id: "eulogy",
      title: "Eulogy",
      subtitle: "Tributes to a Legend",
      time: "",
      type: "general" as const,
    },
    {
      id: "life-in-pictures",
      title: "David's Life in Pictures",
      subtitle: "",
      time: "",
      type: "general" as const,
    },
    {
      id: "bible-reading",
      title: "Bible Reading",
      subtitle: "John 11:17–44 (KJV)",
      content: `Then when Jesus came, he found that he had lain in the grave four days already. Now Bethany was nigh unto Jerusalem, about fifteen furlongs off: And many of the Jews came to Martha and Mary, to comfort them concerning their brother.

Then Martha, as soon as she heard that Jesus was coming, went and met him: but Mary sat still in the house. Then said Martha unto Jesus, Lord, if thou hadst been here, my brother had not died. But I know, that even now, whatsoever thou wilt ask of God, God will give it thee.

Jesus saith unto her, Thy brother shall rise again. Martha saith unto him, I know that he shall rise again in the resurrection at the last day. Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live: And whosoever liveth and believeth in me shall never die. Believest thou this?

She saith unto him, Yea, Lord: I believe that thou art the Christ, the Son of God, which should come into the world.

And when she had so said, she went her way, and called Mary her sister secretly, saying, The Master is come, and calleth for thee. As soon as she heard that, she arose quickly, and came unto him. Now Jesus was not yet come into the town, but was in that place where Martha met him. The Jews then which were with her in the house, and comforted her, when they saw Mary, that she rose up hastily and went out, followed her, saying, She goeth unto the grave to weep there.

Then when Mary was come where Jesus was, and saw him, she fell down at his feet, saying unto him, Lord, if thou hadst been here, my brother had not died. When Jesus therefore saw her weeping, and the Jews also weeping which came with her, he groaned in the spirit, and was troubled. And said, Where have ye laid him? They said unto him, Lord, come and see.

Jesus wept.

Then said the Jews, Behold how he loved him! And some of them said, Could not this man, which opened the eyes of the blind, have caused that even this man should not have died?

Jesus therefore again groaning in himself cometh to the grave. It was a cave, and a stone lay upon it. Jesus said, Take ye away the stone. Martha, the sister of him that was dead, saith unto him, Lord, by this time he stinketh: for he hath been dead four days. Jesus saith unto her, Said I not unto thee, that, if thou wouldest believe, thou shouldest see the glory of God?

Then they took away the stone from the place where the dead was laid. And Jesus lifted up his eyes, and said, Father, I thank thee that thou hast heard me. And I knew that thou hearest me always: but because of the people which stand by I said it, that they may believe that thou hast sent me. And when he thus had spoken, he cried with a loud voice, Lazarus, come forth.

And he that was dead came forth, bound hand and foot with graveclothes: and his face was bound about with a napkin. Jesus saith unto them, Loose him, and let him go.`,
      time: "",
      type: "prayer" as const,
    },
    {
      id: "address",
      title: "Address",
      subtitle: "",
      time: "",
      type: "general" as const,
    },
    {
      id: "prayer-2",
      title: "Prayer",
      subtitle: "",
      time: "",
      type: "general" as const,
    },
    {
      id: "committal",
      title: "Committal",
      subtitle: "My Way — Frank Sinatra",
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
    { url: "/david-beaumont/david-beaumont_young.jpeg", caption: "David as a young man" },
    { url: "/david-beaumont/david-beaumont_glennys_wedding.jpeg", caption: "David & Glennys's Wedding" },
    { url: "/david-beaumont/david-beaumont_family.jpeg", caption: "David with Family" },
    { url: "/david-beaumont/david-beaumont_john.jpeg", caption: "David with his son, John" },
    { url: "/david-beaumont/david-beaumont_michelle.jpeg", caption: "David with his daughter, Michelle" },
    { url: "/david-beaumont/david-beaumont_tabletennis.jpeg", caption: "David Playing Table Tennis" },
    { url: "/david-beaumont/david-beaumont_mum_leonie.jpeg", caption: "David and Friends" },
  ],
  memoriesIntro:
    "Share your favourite photos and memories of David. Table tennis was in his blood — a passion the whole family still shares — and these moments capture the man who loved his family, his sport, and doing things his way.",
  memoriesSubject: "David",

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
