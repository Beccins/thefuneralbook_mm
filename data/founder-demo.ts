export const founderDemo = {
  // ─── Identity ────────────────────────────────────────────────────────────────
  slug: "founder-demo",
  fullName: "Rebecca 'Bec' Munns",
  shortName: "Rebecca",
  nickname: "Bec",
  photo: "/bec_munns_2024_og.jpg",
  dateOfBirth: "26th August, 1977",
  dateOfDeath: "One Day, Far From Now",
  tagline: "Founder & Creator of The Funeral Book — Remembrance Reimagined",

  // ─── Branding ────────────────────────────────────────────────────────────────
  logos: [
    { src: "/funeral-book-logo.webp", alt: "The Funeral Book", width: 120, height: 60 },
  ],
  footerLogo: { src: "/bessie_logo_final.png", alt: "The Funeral Book", width: 60, height: 30 },
  footerTagline: "Remembrance Reimagined • The Funeral Book",

  // ─── Order of Service ────────────────────────────────────────────────────────
  serviceTitle: "Celebration of Life",
  serviceDate: "A Sunny Sydney Morning, One Day Far From Now",
  serviceTime: "10:00 AM",
  serviceVenueName: "Cabarita Park Amphitheatre",
  serviceVenueAddress: "Cabarita Road\nCabarita, NSW, 2137",
  serviceVenueMapUrl: "https://www.google.com/maps/place/Cabarita+Park/@-33.8507,151.0947,17z",
  officiant: "Alex Rivers",
  serviceYouTubeId: "",
  serviceYouTubeTitle: "",

  serviceItems: [
    {
      id: "welcome",
      title: "Welcome and Opening Words",
      subtitle: "Alex Rivers",
      time: "",
      type: "general" as const,
    },
    {
      id: "song-1",
      title: "Song",
      subtitle: "What a Wonderful World",
      time: "",
      type: "hymn" as const,
      content: "",
    },
    {
      id: "tribute-1",
      title: "Memories shared of Bec",
      subtitle: "Sam Nguyen",
      time: "",
      type: "tribute" as const,
    },
    {
      id: "tribute-2",
      title: "Memories shared of Bec",
      subtitle: "Ian Cartwright",
      time: "",
      type: "tribute" as const,
    },
    {
  id: "contribution-eulogy",
  title: "Eulogy",
  subtitle: "Collaboratively written by Bec's family",
  time: "",
  type: "contribution" as const,
  contributorNames: "Ian Cartwright, Sam Nguyen & Alex Rivers",
  status: "published" as const,
  content: `Grateful. This is how we feel today at the thought of having had the time we did with her. She leaves a huge emptiness in the hearts of all of us who loved her, many who were her friends, and even more who just had a glimmer of her through our family.

She lit up any room when she entered, and many of her friends here today would agree that when she smiled, it was as if pure joy emanated from her beautiful eyes and face... and she was always smiling...`,
  googleDocUrl: "https://docs.google.com/",
},
{
  id: "contribution-poem",
  title: "A Poem for Bec",
  subtitle: "Written by Sam Nguyen",
  time: "",
  type: "contribution" as const,
  contributorNames: "Sam Nguyen",
  status: "draft" as const,
  content: `Always a season somewhere in everyplace,
Spring inside with tales of breeding and new,
Days on the rise-tide of daylight and becoming lost.
Here begin forgets of a woman younger.`,
  googleDocUrl: "https://docs.google.com/",
},
    {
      id: "song-2",
      title: "Song",
      subtitle: "Here Comes the Sun",
      time: "",
      type: "hymn" as const,
      content: "",
    },
    {
      id: "message",
      title: "Message",
      subtitle: "Alex Rivers",
      time: "",
      type: "general" as const,
    },
    {
      id: "benediction",
      title: "Closing Words",
      subtitle: "Alex Rivers",
      time: "",
      type: "general" as const,
    },
  ],

  // ─── After Service ───────────────────────────────────────────────────────────
  receptionIntro:
    "Following the service, family and friends are warmly invited to continue celebrating Bec's life over food, drinks and shared memories by the water.",
  receptionTime: "Immediately following the service",
  receptionVenueName: "The Boathouse Cabarita",
  receptionVenueDetail: "Waterside terrace, Cabarita Park",
  receptionVenueMapUrl: "https://www.google.com/maps/place/Cabarita+Park/@-33.8507,151.0947,17z",
  intermentTitle: "Private Family Farewell",
  intermentDetail: "A private farewell for immediate family will be held at a location close to Bec's heart.",
  intermentLocation: "To be advised to immediate family",
  dressCode: "Come as you are — bright colours and comfortable shoes encouraged. Bec would have wanted you to feel at home.",

  // ─── Add Memories carousel ───────────────────────────────────────────────────
  carouselPhotos: [
    { url: "/bec_munns_2024.jpg", caption: "Bec, 2024" },
    { url: "/at_the_tennis_mum_dad.jpg", caption: "At the tennis with Mum and Dad" },
    { url: "/christmas_with_inlaws.jpg", caption: "Christmas with the in-laws" },
    { url: "/godmother_millies_baptism.jpg", caption: "Godmother at Millie's baptism" },
    { url: "/high_tea_with_sam.jpg", caption: "High tea with Sam" },
    { url: "/lunch_date_with_ian.jpg", caption: "Lunch date with Ian" },
    { url: "/rebecca_crown.jpg", caption: "Rebecca" },
  ],
  memoriesIntro:
    "Share your favourite photos and memories of Bec. These precious moments will create a lasting tribute to her life and the joy she brought to so many people.",
  memoriesSubject: "Bec",

  // ─── Donations ───────────────────────────────────────────────────────────────
  donationsIntro:
    "In lieu of flowers, the family requests donations be made to causes close to Bec's heart. Your generosity will continue her legacy of care and community.",
  donationsShareText:
    "Honour Bec's memory by making a donation to causes she cared deeply about.",
  charities: [
    {
      id: "stroke-foundation",
      name: "Stroke Foundation",
      description: "Works to prevent stroke, save lives and enhance recovery for the 500,000+ Australians living with the effects of stroke.",
      url: "https://donate.strokefoundation.org.au/",
      logo: "/logo-stroke-foundation.webp",
    },
    {
      id: "leukaemia-foundation",
      name: "Leukaemia Foundation",
      description: "Dedicated to the care and cure of patients and families living with leukaemia, lymphoma, myeloma and related blood cancers.",
      url: "https://www.leukaemia.org.au/donate/",
      logo: "/leukemia_foundation_new_logo.jpg",
    },
  ],

  // ─── Contact ─────────────────────────────────────────────────────────────────
  contactEmail: "rebecca.munns@thefuneralbook.com",
  contactPhone: "0411 649 097",
  familyContactName: "The Funeral Book Team",
  familyContactPhone: "0411 649 097",
  faqDonationsText: "Yes, the family welcomes donations to Bec's chosen charities.",
  faqDressCode: "Come as you are — bright colours and comfortable shoes encouraged.",
}
