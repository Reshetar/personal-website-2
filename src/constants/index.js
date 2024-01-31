import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  jobify,
  editor,
  realtor,
  threejs,
  upwork,
  bjp,
  nda,
  client1,
  client2,
  client3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-end Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Wordpress Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Wordpress Developer",
    company_name: "Freelancer on Upwork | Remote",
    icon: upwork,
    iconBg: "#383E56",
    date: "Aug 2018 - Apr 2021",
    points: [
      "Developing landing pages, e-commerce websites, corporate websites.",
      "Developing custom front-end/back-end WordPress solutions.",
      "Creating website cores and choosing plugins for the development.",
    ],
  },
  {
    title: "Senior WordPress Developer",
    company_name: "Business JetPack l USA | Remote",
    icon: bjp,
    iconBg: "#E6DEDD",
    date: "Apr 2021 - Feb 2024",
    points: [
      "Identify solutions for challenging development problems.",
      "Develop website cores and select plugins for the project.",
      "Create development documentation to facilitate smoother onboarding to our processes.",
      "Coordinate with three developers. ",
    ],
  },
  {
    title: "React Developer",
    company_name: "Under NDA",
    icon: nda,
    iconBg: "#383E56",
    date: "December 2022 - Jan 2023",
    points: [
      "It was a medical web application for dentists in the UK.",
      "My responsibility was to develop UI components.",
      "Create new pages with additional features/information, and enhance existing UI elements on pages.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've enjoyed working with Yevhen. Communication was great. He told me what he wanted to do before doing so and also summarized his work for the day. Much appreciated. Will work with him again.",
    name: "Gabriel",
    // designation: "CFO",
    company: "Upwork",
    image: client3,
  },
  {
    testimonial:
      "Yevhen always puts his best foot forward and gets the job completed to the best of his ability. He is very detail-oriented and friendly!",
    name: "Morghan",
    // designation: "COO",
    company: "Upwork",
    image: client2,
  },
  {
    testimonial:
      "Yevhen is an ace at building pages. He's also so fast, detailed (even pointing out how something can look better than our specs) and responsive. We'd love to work with Yevhen again.",
    name: "Sunni",
    // designation: "CTO",
    company: "Upwork",
    image: client1,
  },
];

const projects = [
  {
    name: "Jobify Website",
    description:
      'I crafted "Jobify" that provides a comprehensive view of job statuses, statistics, and the ability to seamlessly add new jobs.',
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
    ],
    image: jobify,
    source_code_link: "https://github.com/Reshetar/jobify",
  },
  {
    name: "Realtor Website",
    description:
      '"Realtor" website featuring an intuitive listing of buildings, demonstrating my proficiency in creating user-friendly interfaces for complex datasets.',
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "google-authentication",
        color: "blue-text-gradient",
      },
      {
        name: "leaflet-maps",
        color: "green-text-gradient",
      },
    ],
    image: realtor,
    source_code_link: "https://github.com/Reshetar/realtor",
  },
  {
    name: "VS Code in browser",
    description:
      'A browser-based version of "Visual Studio Code." This project allows users to edit files directly in the browser.',
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "materialui",
        color: "blue-text-gradient",
      },
      {
        name: "auth0",
        color: "green-text-gradient",
      },
      {
        name: "protecting-routes",
        color: "pink-text-gradient",
      },
    ],
    image: editor,
    source_code_link: "https://github.com/Reshetar/vscode-in-browser",
  },
];

export { services, technologies, experiences, testimonials, projects };
