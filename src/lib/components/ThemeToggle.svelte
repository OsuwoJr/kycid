<script lang="ts">
    import { onMount } from 'svelte';
    let isDarkMode = false;
  
    function toggleTheme() {
      isDarkMode = !isDarkMode;
      document.documentElement.classList.toggle('dark', isDarkMode);
    }
  
    onMount(() => {
      isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      }
    });
  </script>
  
  <button on:click={toggleTheme} class="p-2 rounded bg-gray-700 hover:bg-gray-800">
    {#if isDarkMode}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-6 w-6 text-yellow-400"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m8.66-12.66l-.71-.71m-13.9 0l-.71.71M21 12h-1m-16 0H3m13.66 8.66l-.71.71m-7.9 0l-.71-.71M12 7a5 5 0 000 10V7z"
        />
      </svg>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-6 w-6 text-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m8.66-12.66l-.71-.71m-13.9 0l-.71.71M21 12h-1m-16 0H3m13.66 8.66l-.71.71m-7.9 0l-.71-.71M12 7a5 5 0 000 10V7z"
        />
      </svg>
    {/if}
  </button>
  