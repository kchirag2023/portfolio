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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "journey",
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
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Learning DSA",
    company_name: "first",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2022-April 2023",
    points: [
      "Took the first step into the world of coding by learning Data Structures and Algorithms (DSA) and C++ language.",
      "Gained satisfaction from writing 'Hello, World!' programs as a beginner coder.",
      "Learned various data structure concepts such as arrays, trees, graphs, and linked lists."
    ],
  },
  {
    title: "Web Development",
    company_name: "Second",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "May 2023 - Jan 2024",
    points: [
      "Took the first step into the world of development by learning mern stack",
      "Started learning full-stack development with MERN stack, progressing from backend (Node.js) to frontend (React).",
      "Implemented my learning by developing my first eCommerce website, applying both backend and frontend technologies."
    ],
  },
  {
    title: "Developing my coding profile",
    company_name: "Third",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2024 - april 2024",
    points: [
      "Worked on improving my coding profile by solving problems on platforms like LeetCode and Codeforces.",
      "Focused on solving problems using better approaches and optimizing my solutions for efficiency.",
      "Continually pushing myself to solve more complex problems and strengthen my problem-solving skills."
    ],
  },
  {
    title: "Learning CP",
    company_name: "Fourth",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Present",
    points: [
      "Started learning Competitive Programming (CP) in November 2024 and have been actively working on it since.",
      "Participated in various contests hosted on Codeforces to improve problem-solving skills and coding speed.",
      "Realized the truth behind Bill Gates' statement that coding improves mental ability, as it enhances logical thinking and problem-solving."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I knew that if i failed i wouldn't regret that ,but i knew that one thing i regret is not trying",
    name: "jeff bezos",
    designation: "Co-founder",
    company: "Amazon",
    image: "data:image/webp;base64,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",
  },
  {
    testimonial:
      "Surround yourself with people who challenge you and push you to be your best self",
    name: "Bill Gates",
    designation: "Chairman",
    company: "Microsoft",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdmWGuOptx1SWeVffnXIgjIOxqCvzE4EQBQ&s",
  },
  {
    testimonial:
      "Ups and downs in life are very important to keep us going because a straight line, even in an ECG, means we are not alive",
    name: "Ratan Tata",
    designation: "Ex-chairman",
    company: "Tata Group",
    image: "data:image/jpeg;base64,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",
  },
];

const projects = [
  {
    name: "Assembler 8085",
    description:
      "Developed an assembler for 8085, it was an amazing experience",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "programminglanguage",
        color: "green-text-gradient",
      },
      {
        name: "visual studio code",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/kchirag2023/assembler_8085",
  },
  {
    name: "Youtube video summarizer",
    description:
      "An application thatcan summarize whole video using youtube link",
    tags: [
      {
        name: "generative AI",
        color: "blue-text-gradient",
      },
      {
        name: "geminiapi",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/kchirag2023/youtube-summarizer",
  },
  {
    name: "FOODIE_G",
    description:
      "A plateform to order and track food delivery it come with cart feature and order history",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/kchirag2023/Foodie_G",
  },
];

export { services, technologies, experiences, testimonials, projects };
