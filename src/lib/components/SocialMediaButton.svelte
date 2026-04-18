<script lang="ts">
  let {
    url,
    color,
  }: {
    url: string;
    color: string;
  } = $props();
</script>

<a class="social-media-button social-media-button--{color}" href={url}></a>
