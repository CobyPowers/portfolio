<script lang="ts">
  import Icon from "@iconify/svelte";

  interface Props {
    url: string;
    icon: string;
    color: string;
  }

  let { url, icon, color }: Props = $props();
</script>

<a
  class="social-media-button social-media-button--{color}"
  href={url}
  target="_blank"
>
  <Icon {icon} />
</a>
