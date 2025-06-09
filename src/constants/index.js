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
      title: "AI Enthusiast",
      icon: mobile,
    },
    {
      title: "Problem solver",
      icon: backend,
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
      name: "React JS",
      icon: reactjs,
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
      name: "python",
      icon: docker,
    },
    
  ];
  
  const experiences = [
    {
      title: "AI & Data Analyst Intern",
      company_name: "DgLiger Consulting Private Limited",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2025 - July 2025",
      points: [
        "Collaborated with AI development teams to fine-tune model outputs for more accurate and contextually relevant responses.",
        "Conducted prompt testing and analysis to ensure high quality, context aware responses.",
        "Gained experience with OpenAI API and AI tools to design and implement prompt-based solutions."
      ],
    }
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI - Resume analyzer",
      description:
        "The project targets : Users upload their resumes and receive personalized recommendations and analytics and Admins can access a centralized dashboard with aggregated data about all applicants, helping them identify trends and match candidates to job roles",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "NLP",
          color: "green-text-gradient",
        },
        {
          name: "Streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/JahnaviKhattar/ResumeAnalyzer",
    },
    {
      name: "Mario Map",
      description:
        "A map layout inspired by the Super Mario World overworld, complete with retro vibes and that nostalgic color palette.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "googleMaps API",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/JahnaviKhattar/MarioMap",
    },
    {
      name: "News App",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "news API",
          color: "green-text-gradient",
        },
        
      ],
      image: tripguide,
      source_code_link: "https://github.com/JahnaviKhattar/React-newsApp",
    },
    {
      name: "Portfolio",
      description:
        "A personal portfolio website built with React and Tailwind CSS to showcase my web development skills, projects, and experience, featuring smooth animations and a fully responsive design comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "three js",
          color: "pink-text-gradient",
        },
        
      ],
      image: tripguide,
      source_code_link: "https://github.com/JahnaviKhattar/React-newsApp",
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };