<script lang="ts">
  interface CollegeInfo {
    date: string;
    name: string;
    major: string;
    logo: string;
  }

  interface Props {
    college: CollegeInfo;
  }

  let { college }: Props = $props();
  let { date, name, major, logo } = $derived(college);
</script>

<div class="college-card">
  <div class="college-card__logo-container">
    <img src={logo} alt="College Logo" class="college-card__logo" />
  </div>
  <div class="college-card__info-container">
    <p class="college-card__date">{date}</p>
    <p class="college-card__name">{name}</p>
    <p class="college-card__major">{major}</p>
  </div>
</div>
