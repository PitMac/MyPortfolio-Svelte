// Projects
import Ecovid from "../../public/assets/projects/ecovid.webp";
import FreeGames from "../../public/assets/projects/freegamesapp.webp";
import Anime from "../../public/assets/projects/animeapp.webp";
import DisneyC from "../../public/assets/projects/disneyCharacters.webp";
import Activity from "../../public/assets/projects/activity.webp";
import RunMD from "../../public/assets/projects/runmd.webp";
import PitKemon from "../../public/assets/projects/pitkemon.webp";
import RunFMD from "../../public/assets/projects/RunFMD.webp";
import FreeGamesRN from "../../public/assets/projects/FreeGamesRN.webp";
import AntiPanico from "../../public/assets/projects/antipanico.webp";

// Tech
import Flutter from "../../public/assets/skills/flutter.svg";
import React from "../../public/assets/skills/react.svg";
import Node from "../../public/assets/skills/node.svg";
import Svelte from "../../public/assets/skills/svelte.svg";
import Tauri from "../../public/assets/skills/tauri.svg";
import Astro from "../../public/assets/skills/astro.svg";
import Django from "../../public/assets/skills/django.svg";
import Spring from "../../public/assets/skills/spring.svg";

// Languages
import Javascript from "../../public/assets/skills/languages/javascript.svg";
import Dart from "../../public/assets/skills/languages/dart.svg";
import Typescript from "../../public/assets/skills/languages/typescript.svg";
import Java from "../../public/assets/skills/languages/java.svg";
import Python from "../../public/assets/skills/languages/python.svg";
import SQL from "../../public/assets/skills/languages/sql.svg";
import HTMLCSS from "../../public/assets/skills/languages/htmlcss.svg";

// Tools
import Git from "../../public/assets/skills/tools/git.svg";
import PostgreSQL from "../../public/assets/skills/tools/postgresql.svg";
import Figma from "../../public/assets/skills/tools/figma.svg";
import Linux from "../../public/assets/skills/tools/linux.svg";
import MongoDB from "../../public/assets/skills/tools/mongodb.svg";
import TailwindCSS from "../../public/assets/skills/tools/tailwind.svg";

export const technologies = [
  {
    src: React,
    alt: "React",
  },
  {
    src: Flutter,
    alt: "Flutter",
  },
  {
    src: Svelte,
    alt: "Svelte",
  },
  {
    src: Node,
    alt: "Node",
  },
  {
    src: Spring,
    alt: "Spring",
  },
  {
    src: Tauri,
    alt: "Tauri",
  },
];
export const languages = [
  {
    src: Javascript,
    alt: "Javascript",
  },
  {
    src: Dart,
    alt: "Dart",
  },
  {
    src: Typescript,
    alt: "Typescript",
  },
  {
    src: Java,
    alt: "Java",
  },
  {
    src: HTMLCSS,
    alt: "HTML & CSS",
  },
  {
    src: SQL,
    alt: "SQL",
  },
];

export const tools = [
  {
    src: Git,
    alt: "Git",
  },
  {
    src: PostgreSQL,
    alt: "PostgreSQL",
  },
  {
    src: MongoDB,
    alt: "MongoDB",
  },
  {
    src: TailwindCSS,
    alt: "TailwindCSS",
  },
  {
    src: Figma,
    alt: "Figma",
  },
];

export const projects = [
  {
    id: 1,
    href: "https://github.com/PitMac/PitKemon-React",
    page: "https://pitkemon.vercel.app/",
    src: PitKemon,
    alt: "PitKemon",
    technologies: [technologies[0], tools[0], languages[2], languages[4]],
    readme:
      "This is a website that shows the first 151 pokemon. From BULBASAUR to MEW. Discover them!",
  },
  {
    id: 2,
    href: "https://github.com/PitMac/FreeGames-App-Flutter",
    src: FreeGames,
    alt: "FreeGamesApp",
    technologies: [technologies[1], languages[1], tools[0]],
    readme:
      "This Flutter application shows the new and the best free games in cross-platforms like Windows, Android, Linux, MacOs and IOS.",
  },
  {
    id: 3,
    href: "https://github.com/PitMac/RunMd-Tauri",
    page: "https://run-md.vercel.app/",
    src: RunMD,
    alt: "RunMD",
    technologies: [
      technologies[0],
      technologies[6],
      languages[2],
      languages[4],
    ],
    readme:
      "A markdown editor made with Tauri/ReactTS, can preview text, copy it and download it in md extension ready for use!",
  },
  {
    id: 4,
    href: "https://github.com/PitMac/ECovid-App-Flutter",
    src: AntiPanico,
    alt: "Anti-Panico Portoviejo",
    technologies: [technologies[1], languages[1], tools[0]],
    readme:
      "An application made to help people who live in the city of Portoviejo and are present in an emergency situation.",
  },
  {
    id: 5,
    href: "https://github.com/PitMac/ActivityWeb-React",
    page: "https://activityweb.vercel.app/",
    src: Activity,
    alt: "Activity Page",
    technologies: [technologies[0], tools[0], languages[2], languages[4]],
    readme:
      "Are you bored? NO PROBLEM with this website you can find any activity. Made with BoredAPI you can find alone activities or group activities",
  },
  {
    id: 6,
    href: "https://github.com/PitMac/Anime-App-Flutter",
    src: Anime,
    alt: "Anime Search",
    technologies: [technologies[1], languages[1], tools[0]],
    readme:
      "Do you like Anime? This is a application made with Flutter that shows all tranding anime, with a summary and popularity",
  },
  {
    id: 7,
    href: "https://github.com/PitMac/DisneyCharacters-React",
    page: "https://disney-characters.vercel.app/",
    src: DisneyC,
    alt: "DisneyC",
    technologies: [technologies[0], tools[3], tools[0], languages[4]],
    readme:
      "Do you like Disney Universe? This is a page that shows all characters of disney movies, series and cartoons",
  },
  {
    id: 8,
    href: "https://github.com/PitMac/RunMD-Flutter-Desktop",
    src: RunFMD,
    alt: "RunFMD",
    technologies: [technologies[1], languages[1], tools[0]],
    readme:
      "A markdown editor made with Flutter Desktop, can preview text and copy it",
  },
  {
    id: 9,
    href: "https://github.com/PitMac/FreeGame-App-RN",
    src: FreeGamesRN,
    alt: "FreeGamesRN",
    technologies: [technologies[1], languages[1], tools[0]],
    readme:
      "This React Native application shows the new and the best free games in cross-platforms like Windows, Android, Linux, MacOs and IOS.",
  },
  {
    id: 10,
    href: "https://github.com/PitMac/ECovid-App-Flutter",
    src: Ecovid,
    alt: "Ecovid App",
    technologies: [technologies[1], languages[1], tools[0]],
    readme:
      "It gathers information on covid cases that occurred in the pandemic, uses a public API and has a search engine by country.",
  },
];
