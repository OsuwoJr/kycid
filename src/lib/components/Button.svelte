<script lang="ts">
    export let type: 'button' | 'submit' | 'reset' = 'button';
    export let className: string = '';
    export let onClick: () => void = () => {};
  </script>
  
  <button
    type={type}
    class={`px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded ${className}`}
    on:click={onClick}
  >
    <slot />
  </button>
  