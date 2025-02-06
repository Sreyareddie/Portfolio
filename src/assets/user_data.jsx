import {
  FaGithub,
  FaCode,
  FaReact,
  FaHtml5,
  FaCss3,
  FaJava,
  FaJs,
  FaBootstrap,
  FaNode,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

export const skills = [
  { icon: <FaCode />, name: "Programming" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3 />, name: "CSS3" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <FaNode />, name: "Node.js" },
  { icon: <RiTailwindCssFill />, name: "Tailwind Css" },
  { icon: <BiLogoMongodb />, name: "MongoDB" },
  { icon: <GrMysql />, name: "MySql" },
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
    title: "Music Streaming Website",
    description:
      "A full-stack music streaming platform using the MERN stack with authentication, playlists, and real-time media playback.",
    githubLink:
      "https://github.com/Sreyareddie/EchoTunes-Music-Streaming-Website",
    livedemo: "https://echotunes-musicplayer-frontend.onrender.com",
  },
  {
    title: "Task Management System",
    description:
      "A full-stack Task Hub using the MERN stack with authentication, tasks kanban board and feed for posting images.",
    githubLink: "https://github.com/Sreyareddie/Task_Management_System",
    livedemo: "https://task-management-system-vun7.onrender.com",
  },
  {
    title: "Web-Based Rental Management System",
    description:
      "A property management tool built with the MERN stack, deployed using Docker for scalability and efficiency.",
    githubLink: "#",
    livedemo: "",
  },

  {
    title: "Rain Water Management System",
    description:
      "A decentralized system for tracking and distributing rainwater, developed using Java, JSP, and MySQL.",
    githubLink: "https://github.com/Sreyareddie/Rain_Water_Management",
    livedemo: "https://youtu.be/vix2f5Nq82s",
  },
];
