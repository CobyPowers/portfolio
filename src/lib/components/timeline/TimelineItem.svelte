<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    year: number;
    reduced?: boolean;
    first?: boolean;
    last?: boolean;
    children: Snippet;
  }

  let {
    year,
    reduced = false,
    first = false,
    last = false,
    children,
  }: Props = $props();
</script>

<div class="timeline-item">
  <div
    class={[
      "timeline-item__marker-container",
      reduced ? "reduced" : "",
      first ? "first" : "",
      last ? "last" : "",
    ]}
  >
    <span>{year}</span>
  </div>
  <div class="timeline-item__component-container">
    {@render children()}
  </div>
</div>
