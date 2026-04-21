<script lang="ts">
  import { fade } from "svelte/transition";

  import Sidebar from "$lib/components/Sidebar.svelte";

  import favicon from "$lib/assets/favicon.svg";
  import glow from "$lib/assets/glow.png";

  import "$lib/styles/app.scss";

  let { children, data } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Sidebar />

<img class="body-glow" src={glow} alt="Glow" />
<div class="body-fade"></div>

{#key data.pathname}
  <section
    class="section-container"
    in:fade={{ duration: 50, delay: 60 }}
    out:fade={{ duration: 50 }}
  >
    {@render children()}
  </section>
{/key}
