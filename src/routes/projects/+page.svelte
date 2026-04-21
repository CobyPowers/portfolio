<script lang="ts">
  import ProjectCard from "$lib/components/cards/ProjectCard.svelte";
  import Timeline from "$lib/components/timeline/Timeline.svelte";

  import alanbot from "$lib/assets/projects/alanbot.png";
  import bitrunner from "$lib/assets/projects/bitrunner.png";
  import codecrafters from "$lib/assets/projects/codecrafters.png";
  import fightyourfill from "$lib/assets/projects/fightyourfill.png";
  import portfolio from "$lib/assets/projects/portfolio.png";
  import ptereno from "$lib/assets/projects/ptereno.png";
  import python from "$lib/assets/projects/python.svg";

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
</script>

<h3>Skills</h3>

<p>
  <b>Languages</b>: TypeScript, JavaScript, HTML/CSS/HTML, C/C++/C#, Python,
  Rust, Luau
  <br />
  <b>Technologies</b>: React.js, Vue.js, Svelte, Git, UNIX, Docker, NGINX,
  MySQL, PostgreSQL, Unity, Godot
  <br />
  <b>Platforms</b>: Microsoft Office, Google Workspace, Trello, Notion, Miro,
  Figma
  <br />
</p>

<br />

<h3>Projects</h3>

<Timeline entries={projects} component={ProjectCard} />
