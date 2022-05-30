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
    Icon: MdDeveloperMode,
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
  /*{
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },*/
  
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
  /*{
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },*/
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
  /*{
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },*/
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
  /*{ 
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },*/
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
    deployed_url: "https://graphcms-blog-rqpedia.vercel.app/",
    github_url: "https://github.com/rqpedia/blog",
    category: ["WordPress","NodeJs"],
    description: "The first Headless Blog website I created using GraphCMS, NextJs, and TailwindCSS",
    key_techs: ["GraphCMS", "NextJs", "TailwindCSS", "Sass",],
  },

  /*{
    name: "YouTube using YouTube ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["WordPress"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    name: "Football App",
    image_path: "/images/football.png",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "https://github.com/Dey-Sumit/football-app",
    category: ["WordPress"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },*/
];
