<script lang="ts">
  let {
    text,
    active,
    onclick,
  }: {
    text: string;
    active: boolean;
    onclick: () => void;
  } = $props();
</script>

<button
  class="nav-button nav-button--{active ? 'active' : 'inactive'}"
  {onclick}>{text}</button
>
