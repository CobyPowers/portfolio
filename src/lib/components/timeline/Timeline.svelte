<script lang="ts">
  import type { Component } from "svelte";
  import TimelineItem from "./TimelineItem.svelte";

  interface TimelineEntry {
    year: number;
  }

  interface Props {
    entries: TimelineEntry[];
    component: Component<{ data: any }>;
  }

  let { entries, component }: Props = $props();

  const getPreviousYear = (index: number): number => {
    return (entries[index - 1] || { year: 0 }).year;
  };
</script>

<div class="timeline">
  {#each entries as entry, i}
    <TimelineItem
      year={entry.year}
      reduced={getPreviousYear(i) == entry.year}
      first={i == 0}
      last={i == entries.length - 1}
    >
      <svelte:component this={component} data={entry} />
    </TimelineItem>
  {/each}
</div>
