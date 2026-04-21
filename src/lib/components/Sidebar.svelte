<script lang="ts">
  import SocialMediaButton from "./buttons/SocialMediaButton.svelte";
  import NavButton from "./buttons/NavButton.svelte";

  import portrait from "$lib/assets/portrait.jpg";
</script>

<header class="sidebar">
  <div class="sidebar__portrait-container">
    <div class="sidebar__portrait-frame">
      <img class="sidebar__portrait" src={portrait} alt="Portrait" />
    </div>
    <div class="social-media-button-list">
      <SocialMediaButton
        url="https://github.com/CobyPowers"
        color="blue"
        icon="line-md:github-loop"
      />
      <SocialMediaButton
        url="https://www.linkedin.com/in/coby-powers-73000a116"
        color="pink"
        icon="line-md:linkedin"
      />
      <SocialMediaButton
        url="mailto:mail@cobypowers.com"
        color="orange"
        icon="line-md:email"
      />
    </div>
  </div>
  <nav class="sidebar__nav-container">
    <div class="nav-button-list">
      <NavButton text="About" url="/about" />
      <NavButton text="Projects" url="/projects" />
      <NavButton text="Education" url="/education" />
    </div>
  </nav>
  <p class="sidebar__cr-notice">
    Made with SvelteKit
    <br />
    <i>AI Not Included</i>
  </p>
</header>
