<script lang="ts">
  import ProjectCard from "$lib/components/cards/ProjectCard.svelte";
  import Timeline from "$lib/components/timeline/Timeline.svelte";

  import { skills, projects } from "$lib/data";
</script>

<h3>Skills</h3>

{#each Object.entries(skills) as [k, v], i}
  <p style="font-size: 0.9em; margin-bottom: 1em;">
    <b>{k[0].toUpperCase() + k.slice(1)}</b>: {v.join(", ")}
  </p>
{/each}

<h3>Projects</h3>

<Timeline entries={projects} component={ProjectCard} />
