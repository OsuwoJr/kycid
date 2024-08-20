<script lang="ts">
    import { onMount } from 'svelte';
    import Button from './Button.svelte';
    import ThemeToggle from './ThemeToggle.svelte';
  
    let isMenuOpen = false;
  
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
    }
  </script>
  
  <header class="flex items-center justify-between p-4 bg-gray-900 text-white">
    <!-- Logo Area -->
    <div class="flex items-center">
      <img src="/logo.png" alt="KYCID Logo" class="h-8 w-8 mr-2" />
      <span class="text-xl font-bold">
        <a href="/" >
          KYCID
        </a>
      </span>
    </div>
  
    <!-- Navigation Menu -->
    <nav class="hidden md:flex space-x-4">
      <a href="/" class="hover:underline">Home</a>
      <a href="#how-it-works" class="hover:underline">How It Works</a>
      <a href="#features" class="hover:underline">Features</a>
      <a href="/documentation" class="hover:underline">Documentation</a>
      <a href="/interaction" class="hover:underline">Interaction</a>

      <Button className="border border-white">Sign In / Sign Up</Button>
    </nav>
  
    <!-- Action Buttons -->
    <div class="flex items-center space-x-4">
      <Button>Get Started</Button>
      <ThemeToggle />
      <button class="md:hidden" on:click={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="{isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}"
          />
        </svg>
      </button>
    </div>
  
    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <nav class="md:hidden absolute top-16 left-0 w-full bg-gray-800 p-4">
        <a href="/" class="block py-2 hover:underline">Home</a>
        <a href="#how-it-works" class="block py-2 hover:underline">How It Works</a>
        <a href="#features" class="block py-2 hover:underline">Features</a>
        <a href="/documentation" class="block py-2 hover:underline">Documentation</a>
        <a href="/interaction" class="hover:underline">App Interaction</a>

        <Button className="w-full mt-2">Sign In / Sign Up</Button>
      </nav>
    {/if}
  </header>
  
  <style>
    /* Additional custom styles if needed */
  </style>
  