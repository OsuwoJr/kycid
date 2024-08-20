<script lang="ts">
    import { goto } from '$app/navigation';
    import IdentityOverview from '$lib/components/IdentityOverview.svelte';
    import ChallengeRequests from '$lib/components/ChallengeRequests.svelte';
    import Settings from '$lib/components/Settings.svelte';
  
    let publicKey = "0x123456789ABCDEF";
    let kycStatus = "Verified";
    let challenges = [
      { appName: "External App 1", status: "Completed" },
      { appName: "External App 2", status: "Pending" },
    ];

    function goToAuth() {
    goto('/auth');
  }
  </script>
  
  <main class="p-8 bg-gray-900 min-h-screen text-white">
    <h1 class="text-4xl font-bold mb-8">Dashboard</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <IdentityOverview {publicKey} {kycStatus} />
      <ChallengeRequests {challenges} />
    </div>
    
    <div class="mt-8">
      <Settings />
    </div>

    <button on:click={goToAuth} class="mt-8 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded">
        Re-verify Identity
      </button>
  </main>
  