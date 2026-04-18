<script>
  import SocialMediaButton from "$lib/components/SocialMediaButton.svelte";
  import NavButton from "$lib/components/NavButton.svelte";

  import AboutSection from "$lib/sections/About.svelte";
  import ProjectSection from "$lib/sections/Projects.svelte";
  import EducationSection from "$lib/sections/Education.svelte";

  import portrait from "$lib/assets/portrait.jpg";

  let section = $state("about");
</script>

<aside class="sidebar-container">
  <div class="sidebar__top-container">
    <div class="sidebar__portrait-container">
      <img class="sidebar__portrait" src={portrait} alt="Portrait" />
    </div>
    <div class="social-media-button__container">
      <SocialMediaButton url="https://google.com" color="blue" />
      <SocialMediaButton url="https://google.com" color="pink" />
      <SocialMediaButton url="https://google.com" color="orange" />
    </div>
  </div>
  <div class="sidebar__bottom-container">
    <div class="nav-button__container">
      <NavButton
        text="About"
        active={section == "about"}
        onclick={() => {
          section = "about";
        }}
      />
      <NavButton
        text="Projects"
        active={section == "projects"}
        onclick={() => {
          section = "projects";
        }}
      />
      <NavButton
        text="education"
        active={section == "education"}
        onclick={() => {
          section = "education";
        }}
      />
    </div>
  </div>
</aside>

<section class="section-container">
  {#if section == "about"}
    <AboutSection />
  {:else if section == "projects"}
    <ProjectSection />
  {:else if section == "education"}
    <EducationSection />
  {/if}
</section>
