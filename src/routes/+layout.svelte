<script lang="ts">
  import { fade, fly } from "svelte/transition";

  import Sidebar from "$lib/components/Sidebar.svelte";

  import favicon from "$lib/assets/favicon.ico";
  import glow from "$lib/assets/glow.png";

  import "$lib/styles/app.scss";
  import { afterNavigate, disableScrollHandling } from "$app/navigation";

  let { children, data } = $props();

  const bodyLoad = (elem: HTMLBodyElement) => {
    elem.style.opacity = "1";
  };

  afterNavigate(() => {
    /* Prevents scroll position jumping after page transitions */
    disableScrollHandling();
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Coby's Portfolio</title>
</svelte:head>

<svelte:body use:bodyLoad />

<Sidebar />

<img class="body-glow" src={glow} alt="Glow" />
<div class="body-fade"></div>

{#key data.pathname}
  <section
    class="section-container"
    in:fade={{ duration: 50, delay: 75 }}
    out:fade={{ duration: 50 }}
  >
    {@render children()}
  </section>
{/key}
