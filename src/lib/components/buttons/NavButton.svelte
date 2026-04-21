<script lang="ts">
  import { page } from "$app/state";

  interface Props {
    text: string;
    url: string;
  }

  let { text, url }: Props = $props();
</script>

<a
  class="nav-button nav-button--{page.url.pathname == url
    ? 'active'
    : 'inactive'}"
  href={url}>{text}</a
>
