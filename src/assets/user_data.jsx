import {
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3,
  FaJava,
  FaJs,
  FaBootstrap,
  FaNode,
  FaFigma,
  FaLinkedin,
  FaEnvelope,
  FaPython,
  FaAws,
} from "react-icons/fa";
import { RiTailwindCssFill, RiRobotLine } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import {
  SiAngular,
  SiTypescript,
  SiSelenium,
  SiFlask,
  SiPostgresql,
  SiFastapi,
  SiLangchain,
} from "react-icons/si";

export const heroData = {
  name: "SREYA GUJJA",
  title: "Full Stack & Java Developer",
  subtitle:
    "Crafting scalable, efficient, and user-centric digital solutions with passion and precision.",
};

export const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "5+" },
  { label: "Technologies", value: "10+" },
];

export const skills = [
  { icon: <FaAws />, name: "AWS" },
  { icon: <SiLangchain />, name: "LangChain" },
  { icon: <RiRobotLine />, name: "LLM / AI" },
  { icon: <SiFastapi />, name: "FastAPI" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiFlask />, name: "Flask" },
  { icon: <SiAngular />, name: "Angular" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiSelenium />, name: "Selenium" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <FaNode />, name: "Node.js" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <RiTailwindCssFill />, name: "Tailwind Css" },
  { icon: <BiLogoMongodb />, name: "MongoDB" },
  { icon: <GrMysql />, name: "MySql" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3 />, name: "CSS3" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
];

export const educations = [
  {
    id: 1,
    title: "Bachelor of Technology (CSE)",
    institution: "Keshav Memorial Institute of Technology, Hyderabad",
    duration: "2019 - 2023",
  },
  {
    id: 2,
    title: "Intermediate (12th)",
    institution: "Narayana Junior College, Hyderabad",
    duration: "2017 - 2019",
  },
  {
    id: 3,
    title: "Secondary School (10th)",
    institution: "Vivekavardhini High School, Huzurabad",
    duration: "2015 - 2017",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Associate Engineer - L1",
    company: "YottaFlex AI Technologies",
    duration: "Dec 2023 - Jan 2025",
    description:
      "Developed and scaled AI-powered web applications using AWS and modern backend frameworks.",
    highlights: [
      "Built and deployed scalable backend services using FastAPI and integrated them with React.js frontends.",
      "Architected AI solutions using Large Language Models (LLMs), LangChain, and LiteLLM for advanced data processing.",
      "Managed cloud infrastructure using Amazon Web Services (AWS), including EC2 instance management and S3 storage solutions.",
      "Implemented secure user authentication and authorization using Amazon Cognito.",
      "Streamlined frontend deployment and hosting using AWS Amplify and S3.",
      "Collaborated on full-stack features, ensuring seamless integration between AI models and user interfaces.",
    ],
  },
  {
    id: 2,
    title: "Junior Engineer",
    company: "YottaFlex AI Technologies (Previously known as Yotta Tech Ports)",
    duration: "Feb 2025 - Sep 2025",
    description:
      "Designed and developed full-stack web applications with a Flask backend and Angular frontend.",
    highlights: [
      "Designed and developed full-stack web applications with a Flask backend and Angular frontend, ensuring modularity and scalability.",
      "Implemented REST APIs with JWT-based authentication and optimized PostgreSQL database performance.",
      "Improved test coverage by automating testing with PyTest (unit/integration) and Selenium WebDriver (UI).",
      "Applied OOP, SOLID principles, UML modeling, and design patterns to deliver maintainable solutions.",
      "Built responsive UIs with Angular, TypeScript, HTML/CSS, and Bootstrap, improving user experience.",
      "Collaborated in Agile teams, participating in sprints, code reviews, and cross-functional discussions.",
      "Gained hands-on exposure to UI/UX design (Figma) and database management.",
    ],
  },
  {
    id: 3,
    title: "Full Stack Developer (Freelance)",
    company: "Self-Employed",
    duration: "Dec 2023 - Jan 2025",
    description:
      "Delivered high-quality, custom web solutions for a diverse range of clients.",
    highlights: [
      "Conceptualized and developed end-to-end web applications tailored to client specific needs.",
      "Managed full project lifecycles from requirements gathering to deployment and maintenance.",
      "Integrated various third-party services including payment gateways, social auth, and cloud storage.",
      "Ensured cross-browser compatibility and optimized mobile responsiveness for all projects.",
      "Provided technical consulting and ongoing support to non-technical stakeholders.",
    ],
  },
];

export const aboutMe = {
  description: [
    "I am a passionate Full Stack Developer dedicated to building scalable, high-performance, and user-focused web applications. With a strong command of modern technologies, I excel at bridging the gap between dynamic user interfaces and robust, secure backend architectures.",
    "I thrive in collaborative Agile teams, where I apply deep knowledge of OOP and SOLID principles to deliver clean, maintainable, and high-quality code. From Python (Flask) and PostgreSQL to Angular and TypeScript, I take pride in crafting seamless digital experiences at every layer of the stack.",
    "Beyond coding, my expertise extends to automation testing with Selenium, UI/UX design in Figma, and a commitment to continuous learning. I'm always looking for opportunities to solve complex problems and contribute to innovative projects that drive real value.",
  ],
};

export const contactLinks = [
  {
    id: "github",
    href: "https://github.com/Sreyareddie",
    icon: (
      <FaGithub className="text-4xl text-gray-300 group-hover:text-violet-400" />
    ),
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/sreya-gujja-588545237/",
    icon: (
      <FaLinkedin className="text-4xl text-gray-300 group-hover:text-violet-400" />
    ),
  },
  {
    id: "email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=gujjasreya2000@gmail.com&su=Let's%20connect&body=Hi%20Let's%20Connect",
    icon: (
      <FaEnvelope className="text-4xl text-gray-300 group-hover:text-violet-400" />
    ),
  },
];

export const projectData = [
  {
    title: "Winvale Automation Platform",
    description:
      "A data automation system that streamlines complex contract management by automating the comparison of large-scale Excel price lists (100,000+ rows) using Python and Pandas, replacing slow manual workflows.",
    techs: ["Python", "Pandas", "FastAPI", "React", "AWS", "PostgreSQL", "Docker"],
    githubLink: "",
    livedemo: "",
  },
  {
    title: "JobEase - Recruitment Platform",
    description:
      "A comprehensive hiring ecosystem connecting job seekers, recruiters, and admins. Streamlines job posting, applicant management, and real-time tracking for a modern recruitment experience.",
    techs: ["Angular", "TypeScript", "Flask", "Python", "PostgreSQL"],
    githubLink: "",
    livedemo: "",
  },
  {
    title: "Music Streaming Website",
    description:
      "A full-stack music streaming platform using the MERN stack with authentication, playlists, and real-time media playback.",
    techs: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    githubLink:
      "https://github.com/Sreyareddie/EchoTunes-Music-Streaming-Website",
    livedemo: "https://echotunes-musicplayer-frontend.onrender.com",
  },
  {
    title: "Task Management System",
    description:
      "A full-stack Task Hub using the MERN stack with authentication, tasks kanban board and feed for posting images.",
    techs: ["React", "Express", "Node.js", "MongoDB", "Tailwind"],
    githubLink: "https://github.com/Sreyareddie/Task_Management_System",
    livedemo: "https://task-management-system-vun7.onrender.com",
  },
  {
    title: "Web-Based Rental Management System",
    description:
      "A property management tool built with the MERN stack, deployed using Docker for scalability and efficiency.",
    techs: ["React", "Tailwind", "Node.js", "Docker", "PostgreSQL"],
    githubLink: "#",
    livedemo: "",
  },
  {
    title: "Rain Water Management System",
    description:
      "A decentralized system for tracking and distributing rainwater, developed using Java, JSP, and MySQL.",
    techs: ["Java", "JSP", "MySQL", "Bootstrap", "JDBC"],
    githubLink: "https://github.com/Sreyareddie/Rain_Water_Management",
    livedemo: "https://youtu.be/vix2f5Nq82s",
  },
];
