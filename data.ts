import { RiComputerLine } from "react-icons/ri";
import { FaServer, FaWordpress } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful SPA using <b> HTML</b>, <b>CSS</b>, and <b>ReactJs</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>WordPress GraphQL </b> & other popular frameworks",
  },
  {
    Icon: FaWordpress,
    title: "WordPress",
    about:
      "I can create a website of any type using  <b>Wordpress</b> ",
  },
  {
    Icon: seo,
    title: "Search Engine Optimization",
    about: "I usually make articles and be on the first page <b>Google</b>  and <b>other Search Engine</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "HTML & CSS",
    level: "70",
  },
  
  {
    Icon: BsCircleFill,
    name: "Wordpress",
    level: "80",
  },
  
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  
  {
    Icon: BsCircleFill,
    name: "Tailwindcss",
    level: "60",
  },
  
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "70",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  
  {
    name: "Wedding Invitation",
    image_path: "/images/ab.png",
    deployed_url: "https://digitalarts.rqpedia.org/intan-talaha",
    github_url: "#",
    category: ["WordPress"],
    description: "Wedding invitation website created using Wordpress & Elementor",
    key_techs: ["WordPress","Elementor",],
  },

  {
    name: "Weeding Invitation",
    image_path: "/images/ac.png",
    deployed_url: "https://digitalarts.rqpedia.org/sulih-wulan/",
    github_url: "#",
    category: ["WordPress"],
    description: "Wedding invitation website created using Wordpress & Elementor",
    key_techs: ["WordPress","Elementor",],
  },

  {
    name: "Online Shop",
    image_path: "/images/ad.png",
    deployed_url: "https://drakulis.com/",
    github_url: "#",
    category: ["CodeIgniter"],
    description: "Online Shop website created using Code Igniter, MySQL Database, and Bootstrap",
    key_techs: ["CodeIgniter", "MySQL", "Bootstrap",],
  },

  {
    name: "Landing Page",
    image_path: "/images/ae.png",
    deployed_url: "http://rqpedia.org/",
    github_url: "#",
    category: ["WordPress"],
    description: "Website Landing Page complete with blog that I created using WordPress & Elementor",
    key_techs: ["WordPress", "Elementor",],
  },

  {
    name: "Headless Blog",
    image_path: "/images/af.png",
    deployed_url: "https://graphcms-blog-neon.vercel.app/",
    github_url: "https://github.com/rqpedia/blog",
    category: ["NodeJs"],
    description: "The first Headless Blog website I created using GraphCMS, NextJs, and TailwindCSS",
    key_techs: ["GraphCMS", "NextJs", "TailwindCSS", "Sass",],
  },

];
