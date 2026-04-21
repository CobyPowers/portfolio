<script lang="ts">
  import CollegeCard from "$lib/components/cards/CollegeCard.svelte";
  import AffiliationCard from "$lib/components/cards/AffiliationCard.svelte";

  import { colleges, affiliations } from "$lib/data";
</script>

<h3>Education</h3>

<div class="college-card-list">
  {#each colleges as college}
    <CollegeCard {college} />
  {/each}
</div>

<br />

<h3>Affiliations</h3>

<div class="affiliation-card-list">
  {#each affiliations as affiliation}
    <AffiliationCard data={affiliation} />
  {/each}
</div>
