export interface Project {
  id: string
  name: string
  category: string
  year: number
  client: string
  description: string
  thumbnail: string
  images: string[]
  scope: string
  location: string
  area: string
  featured: boolean
  gallerySections?: {
    title: string
    images: string[]
  }[]
}

// All images are sorted by file size (highest quality first)
export const projects: Project[] = [
  {
    id: "jsa",
    name: "JSA — Law Firm Headquarters",
    category: "Corporate Office",
    year: 2023,
    client: "JSA (J. Sagar Associates)",
    description:
      "A 25,000 sq.ft. bespoke workplace for one of India's leading law firms — blending gravitas with contemporary elegance. The design features a striking reception, open-plan offices with acoustic solutions, a curated library space, and a collaborative café that balances confidentiality with openness.",
    thumbnail: "/projects/jsa/img-06.jpg",
    images: [
      "/projects/jsa/img-01.jpg",
      "/projects/jsa/img-02.jpg",
      "/projects/jsa/img-03.jpg",
      "/projects/jsa/img-04.jpg",
      "/projects/jsa/img-05.jpg",
      "/projects/jsa/img-06.jpg",
      "/projects/jsa/img-07.jpg",
      "/projects/jsa/img-08.jpg",
      "/projects/jsa/img-09.jpg",
    ],
    scope:
      "Space planning, concept development, furniture selection, lighting design, acoustic treatment, material curation",
    location: "Mumbai, India",
    area: "25,000 sq.ft.",
    featured: true,
    gallerySections: [
      {
        title: "Reception area",
        images: [
          "/projects/jsa/img-06.jpg",
          "/projects/jsa/img-07.jpg",
          "/projects/jsa/img-05.jpg",
          "/projects/jsa/img-08.jpg",
        ],
      },
      {
        title: "Meeting room",
        images: ["/projects/jsa/img-03.jpg"],
      },
      {
        title: "Break out",
        images: ["/projects/jsa/img-01.jpg", "/projects/jsa/img-02.jpg", "/projects/jsa/img-04.jpg"],
      },
      {
        title: "Cafe",
        images: ["/projects/jsa/img-09.jpg"],
      },
    ],
  },
  {
    id: "fractal",
    name: "Fractal — Tech Campus",
    category: "Technology Workspace",
    year: 2023,
    client: "Fractal Analytics",
    description:
      "A 50,000 sq.ft. technology campus designed for an AI-driven analytics company — featuring open collaborative workspaces, a bold reception narrative, training facilities, meeting rooms, and a vibrant café culture. The design emphasizes transparency, innovation, and biophilic integration.",
    thumbnail: "/projects/fractal/img-05.jpg",
    images: [
      "/projects/fractal/img-01.png",
      "/projects/fractal/img-02.png",
      "/projects/fractal/img-03.jpg",
      "/projects/fractal/img-04.jpg",
      "/projects/fractal/img-05.jpg",
      "/projects/fractal/img-06.jpg",
      "/projects/fractal/img-07.jpg",
      "/projects/fractal/img-08.jpg",
      "/projects/fractal/img-09.png",
      "/projects/fractal/img-10.png",
      "/projects/fractal/img-11.jpg",
      "/projects/fractal/img-12.jpg",
      "/projects/fractal/img-13.jpg",
      "/projects/fractal/img-14.jpg",
      "/projects/fractal/img-15.jpg",
      "/projects/fractal/img-16.jpg",
      "/projects/fractal/img-17.jpg",
    ],
    scope:
      "Architectural consultation, interior layout, material selection, sustainability integration, biophilic design",
    location: "Bangalore, India",
    area: "50,000 sq.ft.",
    featured: true,
    gallerySections: [
      {
        title: "Reception area",
        images: ["/projects/fractal/img-05.jpg", "/projects/fractal/img-07.jpg", "/projects/fractal/img-17.jpg"],
      },
      {
        title: "Board room",
        images: ["/projects/fractal/img-14.jpg"],
      },
      {
        title: "Meeting room",
        images: ["/projects/fractal/img-11.jpg", "/projects/fractal/img-03.jpg", "/projects/fractal/img-04.jpg"],
      },
      {
        title: "Break out",
        images: [
          "/projects/fractal/img-12.jpg",
          "/projects/fractal/img-13.jpg",
          "/projects/fractal/img-15.jpg",
          "/projects/fractal/img-16.jpg",
          "/projects/fractal/img-08.jpg",
        ],
      },
      {
        title: "Cafe",
        images: ["/projects/fractal/img-01.jpg", "/projects/fractal/img-06.jpg"],
      },
    ],
  },
  {
    id: "ey",
    name: "EY — Multi-City Offices",
    category: "Corporate Headquarters",
    year: 2024,
    client: "Ernst & Young (EY)",
    description:
      "A large-scale workplace transformation spanning Mumbai, Pune & Bangalore — over 2,00,000 sq.ft. of people-centric design. State-of-the-art boardrooms, hybrid-ready open offices, training zones, collaborative café areas, and reception experiences that embody EY's global brand identity.",
    thumbnail: "/projects/ey/img-06.jpg",
    images: [
      "/projects/ey/img-01.jpg",
      "/projects/ey/img-02.jpg",
      "/projects/ey/img-03.jpg",
      "/projects/ey/img-04.jpg",
      "/projects/ey/img-05.jpg",
      "/projects/ey/img-06.jpg",
      "/projects/ey/img-07.jpg",
      "/projects/ey/img-08.jpg",
      "/projects/ey/img-09.jpg",
      "/projects/ey/img-10.jpg",
      "/projects/ey/img-11.jpg",
      "/projects/ey/img-12.jpg",
      "/projects/ey/img-13.jpg",
      "/projects/ey/img-14.jpg",
      "/projects/ey/img-15.jpg",
      "/projects/ey/img-16.jpg",
    ],
    scope:
      "Master planning, biophilic design, technology integration, hybrid workspace design, employee wellness zones",
    location: "Mumbai, Pune & Bangalore, India",
    area: "2,00,000+ sq.ft.",
    featured: true,
    gallerySections: [
      {
        title: "Reception area",
        images: [
          "/projects/ey/img-06.jpg",
          "/projects/ey/img-07.jpg",
          "/projects/ey/img-15.jpg",
          "/projects/ey/img-09.jpg",
        ],
      },
      {
        title: "Board room",
        images: ["/projects/ey/img-10.jpg", "/projects/ey/img-04.jpg"],
      },
      {
        title: "Meeting room",
        images: ["/projects/ey/img-14.jpg"],
      },
      {
        title: "Break out",
        images: [
          "/projects/ey/img-03.jpg",
          "/projects/ey/img-05.jpg",
          "/projects/ey/img-12.jpg",
          "/projects/ey/img-13.jpg",
          "/projects/ey/img-08.jpg",
        ],
      },
      {
        title: "Cafe",
        images: ["/projects/ey/img-01.jpg", "/projects/ey/img-16.jpg"],
      },
    ],
  },
  {
    id: "eight-roads",
    name: "Eight Roads (Fidelity) — Investment Office",
    category: "Financial Workspace",
    year: 2023,
    client: "Eight Roads (Fidelity International)",
    description:
      "A refined 5,000 sq.ft. investment office designed for Fidelity's venture arm — featuring an elegant reception, executive cabins, a sophisticated boardroom, and a vibrant cafeteria that reflects the precision and ambition of the financial sector.",
    thumbnail: "/projects/eight-roads/img-07.jpg",
    images: [
      "/projects/eight-roads/img-01.jpg",
      "/projects/eight-roads/img-02.jpg",
      "/projects/eight-roads/img-03.jpg",
      "/projects/eight-roads/img-04.jpg",
      "/projects/eight-roads/img-05.jpg",
      "/projects/eight-roads/img-06.jpg",
      "/projects/eight-roads/img-07.jpg",
      "/projects/eight-roads/img-08.jpg",
    ],
    scope:
      "Space planning, executive suite design, meeting room acoustics, premium material selection",
    location: "Mumbai, India",
    area: "5,000 sq.ft.",
    featured: false,
    gallerySections: [
      {
        title: "Reception area",
        images: ["/projects/eight-roads/img-07.jpg"],
      },
      {
        title: "Board room",
        images: ["/projects/eight-roads/img-02.jpg"],
      },
      {
        title: "Meeting room",
        images: ["/projects/eight-roads/img-03.jpg", "/projects/eight-roads/img-05.jpg"],
      },
      {
        title: "Break out",
        images: ["/projects/eight-roads/img-01.jpg", "/projects/eight-roads/img-04.jpg"],
      },
      {
        title: "Cafe",
        images: ["/projects/eight-roads/img-06.jpg"],
      },
    ],
  },
  {
    id: "bajaj-electricals",
    name: "Bajaj Electricals - Corporate HQ",
    category: "Corporate Office",
    year: 2023,
    client: "Bajaj Electricals",
    description:
      "A 26,000 sq.ft. corporate headquarters renovation across dual floors — featuring a bold reception experience, executive boardroom, open-plan offices, and an executive lounge that marries Bajaj's heritage with forward-looking design.",
    thumbnail: "/projects/bajaj/img-06.jpg",
    images: [
      "/projects/bajaj/img-01.jpg",
      "/projects/bajaj/img-02.jpg",
      "/projects/bajaj/img-03.jpg",
      "/projects/bajaj/img-04.jpg",
      "/projects/bajaj/img-05.jpg",
      "/projects/bajaj/img-06.jpg",
      "/projects/bajaj/img-07.jpg",
      "/projects/bajaj/img-08.jpg",
      "/projects/bajaj/img-09.jpg",
      "/projects/bajaj/img-10.jpg",
      "/projects/bajaj/img-11.jpg",
    ],
    scope:
      "Dual-floor planning, executive suite design, brand identity integration, ergonomic workspace design",
    location: "Mumbai, India",
    area: "26,000 sq.ft.",
    featured: false,
    gallerySections: [
      {
        title: "Reception area",
        images: [
          "/projects/bajaj/img-06.jpg",
          "/projects/bajaj/img-08.jpg",
          "/projects/bajaj/img-05.jpg",
        ],
      },
      {
        title: "Board room",
        images: ["/projects/bajaj/img-07.jpg"],
      },
      {
        title: "Meeting room",
        images: ["/projects/bajaj/img-11.jpg"],
      },
      {
        title: "Break out",
        images: ["/projects/bajaj/img-03.jpg", "/projects/bajaj/img-04.jpg", "/projects/bajaj/img-09.jpg"],
      },
      {
        title: "Cafe",
        images: ["/projects/bajaj/img-10.jpg"],
      },
    ],
  },
  {
    id: "brookfield",
    name: "Brookfield — Premium Workspace",
    category: "Commercial Interior",
    year: 2022,
    client: "Brookfield Asset Management",
    description:
      "A 15,000 sq.ft. premium workspace for a global asset management firm — designed with rich materiality, spatial clarity, and an understated luxury that reflects Brookfield's global stature.",
    thumbnail: "/projects/brookfield/img-01.jpg",
    images: [
      "/projects/brookfield/img-01.jpg",
      "/projects/brookfield/img-02.jpg",
      "/projects/brookfield/img-03.jpg",
      "/projects/brookfield/img-04.jpg",
      "/projects/brookfield/img-05.jpg",
      "/projects/brookfield/img-06.jpg",
      "/projects/brookfield/img-07.jpg",
      "/projects/brookfield/img-08.jpg",
      "/projects/brookfield/img-09.jpg",
    ],
    scope:
      "Premium interior design, material curation, bespoke joinery, lighting design",
    location: "Mumbai, India",
    area: "15,000 sq.ft.",
    featured: false,
  },
  {
    id: "kbs",
    name: "KBS — Commercial Office",
    category: "Commercial Workspace",
    year: 2022,
    client: "KBS",
    description:
      "A 50,000 sq.ft. commercial workspace designed for agility and collaboration — featuring open-plan offices, glass-fronted meeting rooms, and warm material accents that foster a productive atmosphere.",
    thumbnail: "/projects/kbs/img-01.jpg",
    images: [
      "/projects/kbs/img-01.jpg",
      "/projects/kbs/img-02.jpg",
      "/projects/kbs/img-03.jpg",
      "/projects/kbs/img-04.jpg",
      "/projects/kbs/img-05.jpg",
      "/projects/kbs/img-06.jpg",
      "/projects/kbs/img-07.jpg",
      "/projects/kbs/img-08.jpg",
      "/projects/kbs/img-09.jpg",
      "/projects/kbs/img-10.jpg",
      "/projects/kbs/img-11.jpg",
      "/projects/kbs/img-12.jpg",
      "/projects/kbs/img-13.jpg",
    ],
    scope:
      "Large-scale space planning, open-office design, collaboration zone design",
    location: "Mumbai, India",
    area: "50,000 sq.ft.",
    featured: false,
  },
  {
    id: "liberty-insurance",
    name: "Liberty General Insurance — Office",
    category: "Insurance Sector",
    year: 2024,
    client: "Liberty General Insurance",
    description:
      "A 40,000 sq.ft. workplace designed for an insurance leader — featuring a luminous reception, MD's cabin, boardroom, training areas, a themed café with sports elements, and open offices that prioritize daylight and employee wellbeing.",
    thumbnail: "/projects/liberty/img-06.jpg",
    images: [
      "/projects/liberty/img-01.jpg",
      "/projects/liberty/img-02.jpg",
      "/projects/liberty/img-03.jpg",
      "/projects/liberty/img-04.jpg",
      "/projects/liberty/img-05.jpg",
      "/projects/liberty/img-06.jpg",
      "/projects/liberty/img-07.jpg",
      "/projects/liberty/img-08.jpg",
      "/projects/liberty/img-09.jpg",
    ],
    scope:
      "Full workspace design, executive areas, training facilities, themed social spaces",
    location: "Mumbai, India",
    area: "40,000 sq.ft.",
    featured: false,
    gallerySections: [
      {
        title: "Reception area",
        images: ["/projects/liberty/img-06.jpg", "/projects/liberty/img-09.jpg"],
      },
      {
        title: "Board room",
        images: ["/projects/liberty/img-01.jpg"],
      },
      {
        title: "Meeting room",
        images: ["/projects/liberty/img-07.jpg", "/projects/liberty/img-04.jpg"],
      },
      {
        title: "Break out",
        images: [
          "/projects/liberty/img-02.jpg",
          "/projects/liberty/img-05.jpg",
          "/projects/liberty/img-03.jpg",
        ],
      },
      {
        title: "Cafe",
        images: ["/projects/liberty/img-08.jpg"],
      },
    ],
  },
  {
    id: "sony",
    name: "Sony — Creative Workspace",
    category: "Entertainment & Media",
    year: 2023,
    client: "Sony",
    description:
      "A 20,000 sq.ft. creative workspace for Sony — designed around collaboration and creative expression. The space features dynamic open offices, a striking reception, a sophisticated boardroom, and collaborative zones that reflect Sony's innovative spirit.",
    thumbnail: "/projects/sony/img-01.jpg",
    images: [
      "/projects/sony/img-01.jpg",
      "/projects/sony/img-02.jpg",
      "/projects/sony/img-03.jpg",
      "/projects/sony/img-04.jpg",
      "/projects/sony/img-05.jpg",
      "/projects/sony/img-06.jpg",
      "/projects/sony/img-07.jpg",
    ],
    scope:
      "Creative workspace design, collaborative zones, brand-integrated interiors",
    location: "Mumbai, India",
    area: "20,000 sq.ft.",
    featured: false,
    gallerySections: [
      {
        title: "Reception area",
        images: ["/projects/sony/img-07.jpg"],
      },
      {
        title: "Board room",
        images: ["/projects/sony/img-05.jpg"],
      },
      {
        title: "Break out",
        images: [
          "/projects/sony/img-01.jpg",
          "/projects/sony/img-02.jpg",
          "/projects/sony/img-03.jpg",
          "/projects/sony/img-04.jpg",
          "/projects/sony/img-06.jpg",
        ],
      },
    ],
  },
  {
    id: "oic-lobby",
    name: "OIC Nucleus — Lobby & Banquet",
    category: "Hospitality & Commercial",
    year: 2023,
    client: "OIC (Nucleus)",
    description:
      "A prestigious lobby and banquet space design — featuring a grand reception & lift lobby, elegant banquet halls, and multifunctional spaces that set the tone for a premium commercial complex.",
    thumbnail: "/projects/oic-lobby/img-01.jpg",
    images: [
      "/projects/oic-lobby/img-01.jpg",
      "/projects/oic-lobby/img-02.jpg",
      "/projects/oic-lobby/img-03.jpg",
      "/projects/oic-lobby/img-04.jpg",
      "/projects/oic-lobby/img-05.jpg",
      "/projects/oic-lobby/img-06.jpg",
      "/projects/oic-lobby/img-07.jpg",
      "/projects/oic-lobby/img-08.jpg",
      "/projects/oic-lobby/img-09.jpg",
      "/projects/oic-lobby/img-10.jpg",
    ],
    scope:
      "Lobby design, banquet hall interiors, reception experience, premium material selection",
    location: "Mumbai, India",
    area: "N/A",
    featured: false,
  },
  {
    id: "table-space",
    name: "Table Space — Co-working Campus",
    category: "Co-working & Managed Office",
    year: 2024,
    client: "Table Space",
    description:
      "A massive 2,00,000+ sq.ft. co-working campus in Pune — encompassing open offices, recreation zones, cafés, and client-specific buildouts for tenants like Paccar and Stantec. The design emphasizes flexibility, community, and wellness across multiple buildings.",
    thumbnail: "/projects/table-space/img-12.jpg",
    images: [
      "/projects/table-space/img-01.png",
      "/projects/table-space/img-02.png",
      "/projects/table-space/img-03.png",
      "/projects/table-space/img-04.png",
      "/projects/table-space/img-05.png",
      "/projects/table-space/img-06.png",
      "/projects/table-space/img-07.jpg",
      "/projects/table-space/img-08.jpg",
      "/projects/table-space/img-09.jpg",
      "/projects/table-space/img-10.jpg",
      "/projects/table-space/img-11.jpg",
      "/projects/table-space/img-12.jpg",
      "/projects/table-space/img-13.jpg",
      "/projects/table-space/img-14.jpg",
      "/projects/table-space/img-15.jpg",
      "/projects/table-space/img-16.jpg",
      "/projects/table-space/img-17.jpg",
      "/projects/table-space/img-18.jpg",
      "/projects/table-space/img-19.jpg",
      "/projects/table-space/img-20.jpg",
      "/projects/table-space/img-21.jpg",
      "/projects/table-space/img-22.jpg",
      "/projects/table-space/img-23.jpg",
      "/projects/table-space/img-24.jpg",
      "/projects/table-space/img-25.jpg",
      "/projects/table-space/img-26.jpg",
      "/projects/table-space/img-27.jpg",
      "/projects/table-space/img-28.jpg",
      "/projects/table-space/img-29.jpg",
    ],
    scope:
      "Campus master planning, co-working design, tenant buildout, recreation and wellness zones",
    location: "Pune, India",
    area: "2,00,000+ sq.ft.",
    featured: false,
    gallerySections: [
      {
        title: "Reception area",
        images: ["/projects/table-space/img-12.jpg", "/projects/table-space/img-13.jpg", "/projects/table-space/img-14.jpg"],
      },
      {
        title: "Board room",
        images: ["/projects/table-space/img-04.png"],
      },
      {
        title: "Meeting room",
        images: ["/projects/table-space/img-11.jpg", "/projects/table-space/img-03.png"],
      },
      {
        title: "Break out",
        images: [
          "/projects/table-space/img-05.png",
          "/projects/table-space/img-07.jpg",
          "/projects/table-space/img-10.jpg",
          "/projects/table-space/img-01.png",
        ],
      },
      {
        title: "Cafe",
        images: ["/projects/table-space/img-08.jpg", "/projects/table-space/img-09.jpg"],
      },
    ],
  },
]
