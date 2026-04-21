<script lang="ts">
  import Icon from "@iconify/svelte";

  interface Link {
    icon: string;
    url: string;
  }

  interface ProjectInfo {
    briefing: string;
    name: string;
    description: string;
    year: number;
    logo: string;
    links: Link[];
  }

  interface Props {
    data: ProjectInfo;
  }

  let { data }: Props = $props();
  let { briefing, name, description, logo, links } = $derived(data);
</script>

<div class="project-card">
  <div class="project-card__logo-container">
    <img src={logo} alt="Project Logo" class="project-card__logo" />
  </div>
  <div class="project-card__info-container">
    <p class="project-card__briefing">{briefing}</p>
    <div class="project-card__name-line">
      <p class="project-card__name">{name}</p>
      <div class="project-card__link-list">
        {#each links as link}
          <a href={link.url} class="project-card__link">
            <Icon icon={link.icon} />
          </a>
        {/each}
      </div>
    </div>
    <p class="project-card__description">{description}</p>
  </div>
</div>
