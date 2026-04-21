<script lang="ts">
  import ProjectCard from "$lib/components/cards/ProjectCard.svelte";
  import Timeline from "$lib/components/timeline/Timeline.svelte";

  import ptereno from "$lib/assets/projects/ptereno.png";

  let projects = [
    {
      briefing: "Deno API Wrapper",
      name: "Ptereno",
      description:
        "Object-oriented interface allows developers to easily interact with their game server instances through the Deno JavaScript runtime.",
      year: 2020,
      logo: ptereno,
      links: [
        {
          icon: "mdi:github",
          url: "https://github.com/CobyPowers/ptereno",
        },
      ],
    },
    {
      briefing: "Discord Bot",
      name: "AlanBot",
      description:
        "Multi-purpose Discord Bot serving management tools to 10+ Discord servers (role assignment, poll creation, server alerts)",
      year: 2019,
      logo: "",
      links: [],
    },
  ];
</script>

<h3>Skills</h3>

<p>
  <b>Languages</b>: TypeScript, JavaScript, HTML/CSS/HTML, C/C++/C#, Python,
  Rust, Luau
  <br />
  <b>Technologies</b>: React.js, Vue.js, Svelte, Git, UNIX, Docker, NGINX,
  MySQL, PostgreSQL
  <br />
  <b>Platforms</b>: Microsoft Office, Google Workspace, Trello, Notion, Miro
  <br />
</p>

<br />

<h3>Projects</h3>

<Timeline entries={projects} component={ProjectCard} />
