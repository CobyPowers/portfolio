<script lang="ts">
  import CollegeCard from "$lib/components/cards/CollegeCard.svelte";
  import AffiliationCard from "$lib/components/cards/AffiliationCard.svelte";

  import msu from "$lib/assets/colleges/msu.svg";
  import nwcc from "$lib/assets/colleges/nwcc.png";

  let colleges = [
    {
      date: "May 2024 - Present",
      name: "Mississippi State University",
      major: "B.S. Computer Science",
      logo: msu,
    },
    {
      date: "Aug 2021 - May 2024",
      name: "Northwest Mississippi Community College",
      major: "B.S. Computer Science",
      logo: nwcc,
    },
  ];

  let affiliations = [
    {
      name: "Video Game Design Club",
      descriptions: [
        "Worked in collaboration with other officers to deliver informational  presentations on video game design principles",
        "Lead interactive workshops to teach students the fundamentals of version control systems and video game design",
      ],
      logo: msu,
    },
    {
      name: "Cybersecurity Club",
      descriptions: [
        "Attended meetings to strengthen my cybersecurity skills in red & blue teaming",
        "Performed a K-12 CISA cybersecurity assessment to gauge the strength of a Mississippi school district’s IT & OT infrastructure, offered suggestions for improvement",
      ],
      logo: msu,
    },
    {
      name: "Phi Theta Kappa",
      descriptions: ["N/A"],
      logo: nwcc,
    },
  ];
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
