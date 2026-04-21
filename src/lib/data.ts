import alanbot from "$lib/assets/projects/alanbot.png";
import bitrunner from "$lib/assets/projects/bitrunner.png";
import codecrafters from "$lib/assets/projects/codecrafters.png";
import fightyourfill from "$lib/assets/projects/fightyourfill.png";
import portfolio from "$lib/assets/projects/portfolio.png";
import ptereno from "$lib/assets/projects/ptereno.png";
import python from "$lib/assets/projects/python.svg";

import msu from "$lib/assets/colleges/msu.svg";
import nwcc from "$lib/assets/colleges/nwcc.png";

let skills = {
  languages: ["TypeScript", "JavaScript", "HTML/CSS/SCSS", "C/C++/C#", "Python", "Rust", "Luau"],
  technologies: ["React.js", "Vue.js", "Svelte", "Git", "UNIX", "Docker", "NGINX", "MySQL", "PostgreSQL", "Unity", "Godot"],
  platforms: ["Microsoft Office", "Google Workspace", "Trello", "Notion", "Miro", "Figma"]
}

let projects = [
  {
    briefing: "Website",
    name: "Portfolio",
    description:
      "Figma-designed SvelteKit/SCSS site serving as a prettier alternative to my resume.",
    year: 2026,
    logo: portfolio,
    links: [
      {
        icon: "mdi:github",
        url: "https://github.com/CobyPowers/portfolio",
      },
    ],
  },
  {
    briefing: "CodeCrafters Challenge",
    name: "Credis",
    description:
      "Multi-threaded toy Redis server written in Rust. Features advanced command and RESP input parsing.",
    year: 2026,
    logo: codecrafters,
    links: [
      {
        icon: "mdi:github",
        url: "https://github.com/CobyPowers/credis",
      },
      {
        icon: "mdi:link",
        url: "https://app.codecrafters.io/courses/redis/overview",
      },
    ],
  },
  {
    briefing: "Individual Game Jam",
    name: "BitRunner",
    description:
      "Infinite 2D platformer game with flood escape mechanics, made in Godot over three days.",
    year: 2026,
    logo: bitrunner,
    links: [
      {
        icon: "mdi:github",
        url: "https://github.com/CobyPowers/bitrunner",
      },
    ],
  },
  {
    briefing: "Group Game Jam",
    name: "FightYourFill",
    description:
      "Low-poly 3D cooking/hack-and-slash game made in Unity. I worked on environmental & level design.",
    year: 2026,
    logo: fightyourfill,
    links: [
      {
        icon: "mdi:github",
        url: "https://github.com/Haywinkler05/FightYourFill",
      },
    ],
  },
  {
    briefing: "Deno API Wrapper",
    name: "Ptereno",
    description:
      "Object-oriented interface allows developers to easily interact with their game server instances through the Deno JavaScript runtime.",
    year: 2021,
    logo: ptereno,
    links: [
      {
        icon: "mdi:github",
        url: "https://github.com/CobyPowers/ptereno",
      },
      {
        icon: "lineicons:deno",
        url: "https://deno.land/x/ptereno"
      }
    ],
  },
  {
    briefing: "Python API Wrapper",
    name: "OpenTDBpy",
    description:
      "Open-source Python library allows developers to interface with OpenTDB's trivia API to create interactive experiences.",
    year: 2019,
    logo: python,
    links: [
      {
        icon: "mdi:github",
        url: "https://github.com/CobyPowers/opentdbpy",
      },
    ],
  },
  {
    briefing: "Discord Bot",
    name: "AlanBot",
    description:
      "Multi-purpose Discord Bot serving management tools to 10+ Discord servers (role assignment, poll creation, server alerts)",
    year: 2019,
    logo: alanbot,
    links: [
      {
        icon: "mdi:github",
        url: "https://github.com/CobyPowers/AlanBot",
      },
    ],
  },
];

let colleges = [
  {
    date: "May 2024 - Present",
    name: "Mississippi State University",
    major: "B.S. Computer Science",
    logo: msu,
  },
  {
    date: "Aug 2021 - May 2024",
    name: "Northwest Mississippi Community College",
    major: "B.S. Computer Science",
    logo: nwcc,
  },
];

let affiliations = [
  {
    name: "Video Game Design Club",
    descriptions: [
      "Worked in collaboration with other officers to deliver informational  presentations on video game design principles",
      "Lead interactive workshops to teach students the fundamentals of version control systems and video game design",
    ],
    logo: msu,
  },
  {
    name: "Cybersecurity Club",
    descriptions: [
      "Attended meetings to strengthen my cybersecurity skills in red & blue teaming",
      "Performed a K-12 CISA cybersecurity assessment to gauge the strength of a Mississippi school district’s IT & OT infrastructure, offered suggestions for improvement",
    ],
    logo: msu,
  },
];

export { skills, projects, colleges, affiliations }
