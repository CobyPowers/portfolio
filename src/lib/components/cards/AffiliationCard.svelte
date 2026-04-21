<script lang="ts">
  interface AffiliationInfo {
    name: string;
    descriptions: string[];
    logo: string;
  }

  interface Props {
    data: AffiliationInfo;
  }

  let { data }: Props = $props();
  let { name, descriptions, logo } = $derived(data);
</script>

<div class="affiliation-card">
  <div class="affiliation-card__logo-container">
    <img src={logo} alt="Affiliation Logo" class="affiliation-card__logo" />
  </div>
  <div class="affiliation-card__info-container">
    <p class="affiliation-card__name">{name}</p>
    {#each descriptions as description}
      <p class="affiliation-card__description">• {description}</p>
    {/each}
  </div>
</div>
