import {bock } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  chessIcon,
  youtubeCloneIcon,
  coffeeShopIcon,
  portfolioIcon,
  placeholder


} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "Bock",
    icon: bock,
    iconBg: "#accbe1",
    date: "May 2025 - aug 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/arbazz-siddique",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/arbaz-siddique-b99529244/",
  },
];

export const projects = [
   {
  iconUrl: placeholder,
  theme: "btn-back-green",
  name: "AI Mock Interview Platform",
  description:
    "AI-Powered Mock Interview Platform – Developed and deployed a platform with AI-driven interview question generation, automated feedback, and collaborative features, using Next.js, Firebase , Vercel, Gemini AI, and Vapi AI. ",
  link: "https://ai-trip-planner-eta-blue.vercel.app/",
},

  {
  iconUrl: chessIcon,
  theme: "btn-back-green",
  name: "Real-Time Chess Game",
  description:
    "Developed an interactive chess game using Socket.io, Express, and Chess.js, enabling real-time multiplayer matches where moves are instantly reflected across players’ boards.",
  link: "https://github.com/arbazz-siddique/Real-Time-Chess-Game",
},

{
  iconUrl: youtubeCloneIcon,
  theme: "btn-back-red",
  name: "YouTube Clone",
  description:
    "Created a full-stack YouTube-like platform with video upload, playback, search, comments, subscriptions, and watch history, built using React, Redux, Node.js, Express, and MongoDB.",
  link: "https://youtubeconles.netlify.app/",
},

{
  iconUrl: coffeeShopIcon,
  theme: "btn-back-yellow",
  name: "Coffee Shop E-Commerce",
  description:
    "Built an e-commerce web application for a coffee shop featuring product listings, cart management, order tracking, and secure payment integration.",
  link: "https://coffeeshopfrontend.netlify.app/",
},

{
  iconUrl: portfolioIcon,
  theme: "btn-back-blue",
  name: "Personal Portfolio Website",
  description:
    "Designed and developed a responsive personal portfolio website to showcase projects, skills, and achievements, with an interactive UI and smooth animations.",
  link: "https://forntendportfoliopage.netlify.app/",
}

  
];
