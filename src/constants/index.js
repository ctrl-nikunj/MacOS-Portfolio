import { getAssetPath } from "@/utils/helpers";

const WORK_LOCATION = {
  id: 1,
  name: "Work",
  icon: getAssetPath("/icons/work.svg"),
  kind: "folder",
  children: [
    // ▶ Project 1 — DevOps Demo Project
    {
      id: 5,
      name: "Notion Powered Blog",
      icon: getAssetPath("/images/folder.png"),
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[50vh] left-50",
      children: [
        {
          id: 1,
          name: "Blog.txt",
          icon: getAssetPath("/images/txt.png"),
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "I built a fully dynamic, CMS-free blog platform powered directly by the Notion API, enabling content to be written and managed from a Notion database while being rendered on a custom Next.js frontend. The system fetches structured Notion blocks and transforms them into a rich reading experience using a custom MDX-like renderer supporting headings, lists, callouts, images, quotes, and syntax-highlighted code.",
            "To ensure performance despite slow Notion API response times, I implemented multiple caching layers, route-level ISR, and optimized server components, reducing LCP/FCP from 10+ seconds to under 2 seconds. The entire platform is built with Next.js 16, TypeScript, and Vercel serverless functions, delivering a fast, SEO-friendly blogging workflow without needing a traditional CMS.",
          ],
        },
        {
          id: 2,
          name: "nikunj-blog.vercel.app",
          icon: getAssetPath("/images/safari.png"),
          kind: "file",
          fileType: "url",
          href: "https://nikunj-blog.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "blog.png",
          icon: getAssetPath("/images/image.png"),
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: getAssetPath("/images/blog.png"),
        },
      ],
    },

    // ▶ Project 2 — Paylert
    {
      id: 6,
      name: "Paylert - Budgeting & Accounting App",
      icon: getAssetPath("/images/folder.png"),
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] right-10",
      children: [
        {
          id: 1,
          name: "Paylert Project.txt",
          icon: getAssetPath("/images/txt.png"),
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Paylert is a full-stack finance and accounting system built for solo entrepreneurs to track expenses, reminders, savings, credit cards, and FDs.",
            "It includes real-time dashboards, analytics, Google OAuth, double-entry accounting, invoice automation, and a personal AI chatbot.",
            "Think of it as a modern Tally alternative—clean UI, smart automation, and powerful financial insights.",
            "Built with React 19, Node.js, Express, PostgreSQL, raw SQL, JWT cookies, Zustand, and shadcn/ui.",
          ],
        },
        {
          id: 2,
          name: "paylert.com",
          icon: getAssetPath("/images/safari.png"),
          kind: "file",
          fileType: "url",
          href: "#",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "paylert.png",
          icon: getAssetPath("/images/image.png"),
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: getAssetPath("/images/paylert-demo.png"),
        },
      ],
    },

    // ▶ Project 3 — Inverse-Transverse Wavelet Scrambling
    {
      id: 7,
      name: "Inverse-Transverse Wavelet Scrambling App",
      icon: getAssetPath("/images/folder.png"),
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[50vh] right-40",
      children: [
        {
          id: 1,
          name: "ITWS Encryption Project.txt",
          icon: getAssetPath("/images/txt.png"),
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Developed a self-contained Next.js web application that performs secure image hiding and retrieval using a custom DWT + DCT + inverse—transpose pixel scrambling steganography algorithm.",
            "Implemented all processing through Next.js API routes and in-app with no external backend or database, enabling fast clientdriven embedding and extraction workflows.",
            "Designed an intuitive interface for uploading, embedding, extracting, and downloading images, making the complex steganographic pipeline accessible to end-users.",
          ],
        },
        {
          id: 2,
          name: "itws-mern.vercel.app",
          icon: getAssetPath("/images/safari.png"),
          kind: "file",
          fileType: "url",
          href: "https://itws-mern.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "wavelet.png",
          icon: getAssetPath("/images/image.png"),
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: getAssetPath("/images/wavelet.png"),
        },
      ],
    },
  ],
};
const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: getAssetPath("/icons/file.svg"),
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: getAssetPath("/images/pdf.png"),
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};
const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: getAssetPath("/icons/info.svg"),
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.jpg",
      icon: getAssetPath("/images/image.png"),
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: getAssetPath("/images/me.jpg"),
    },
    {
      id: 2,
      name: "me-2.jpg",
      icon: getAssetPath("/images/image.png"),
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: getAssetPath("/images/me-2.jpg"),
    },
    {
      id: 4, //need to update
      name: "about-me.txt",
      icon: getAssetPath("/images/txt.png"),
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: getAssetPath("/images/me.jpg"),
      description: [
        "Hey! I’m Nikunj 👋, a MERN stack web developer who enjoys building sleek, interactive websites that actually work well with a smooth user experience.",
        "I specialize in JavaScript, TypeScript, React, Next.js and Node.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me with earphones on, jamming to my favourite musicians, or going through the latest tech and automotive trends..",
      ],
    },
  ],
};
const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: getAssetPath("/icons/trash.svg"),
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: getAssetPath("/images/image.png"),
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: getAssetPath("/images/trash-1.png"),
    },
    {
      id: 2,
      name: "trash2.png",
      icon: getAssetPath("/images/image.png"),
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: getAssetPath("/images/trash-2.png"),
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  resume: RESUME_LOCATION,
  about: ABOUT_LOCATION,
  trash: TRASH_LOCATION,
};

export const socials = [
  {
    id: 1,
    text: "Github",
    icon: getAssetPath("/icons/github.svg"),
    bg: "bg-gradient-to-br from-gray-900 via-green-700 to-green-400",
    link: "https://github.com/ctrl-nikunj",
  },
  {
    id: 2,
    text: "Instagram",
    icon: getAssetPath("/icons/instagram.svg"),
    bg: "bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
    link: "https://www.instagram.com/iamnikunjgoyal",
  },
  {
    id: 3,
    text: "Mail",
    icon: getAssetPath("/icons/email.svg"),
    bg: "bg-gradient-to-b from-red-600 via-orange-400 to-yellow-500",
    link: "mailto:goyalnikunj2004@gmail.com",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: getAssetPath("/icons/linkedin.svg"),
    bg: "bg-gradient-to-br from-[#06b6d4] via-[#2563eb] to-[#6366f1]",
    link: "https://www.linkedin.com/in/ctrlnikunjgoyal001",
  },
];
