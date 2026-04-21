<script lang="ts">
  import ProjectCard from "$lib/components/cards/ProjectCard.svelte";
  import Timeline from "$lib/components/timeline/Timeline.svelte";

  import { skills, projects } from "$lib/data";
</script>

<h3>Skills</h3>

<p>
  {#each Object.entries(skills) as [k, v]}
    <b>{k[0].toUpperCase() + k.slice(1)}</b>: {v.join(", ")}
    <br />
  {/each}
</p>

<br />

<h3>Projects</h3>

<Timeline entries={projects} component={ProjectCard} />
