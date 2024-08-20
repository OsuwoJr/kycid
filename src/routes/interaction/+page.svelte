<script lang="ts">
    import { onMount } from 'svelte';
    import { signChallenge, verifySignature } from '$lib/utils/crypto'; // Assume these utilities handle the signing and verification
    import ChallengeDetails from '$lib/components/ChallengeDetails.svelte';
    import Button from '$lib/components/Button.svelte';
  
    let challenge = "Example challenge string from external app";
    let appInfo = "External App XYZ";
    let signedChallenge: string | null = null;
    let verificationStatus: string | null = null;
  
    async function handleSignChallenge() {
      signedChallenge = await signChallenge(challenge);
      verificationStatus = await verifySignature(signedChallenge);
    }
  </script>
  
  <main class="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold mb-8 text-emerald-500">App Interaction</h1>
  
    <ChallengeDetails {challenge} {appInfo} />
  
    {#if signedChallenge}
      <p class="mt-4 text-lg text-green-400">Challenge Signed Successfully!</p>
    {/if}
  
    <Button on:click={handleSignChallenge} className="mt-8">
      Sign Challenge
    </Button>
  
    {#if verificationStatus}
      <p class="mt-8 text-lg">
        Verification Status: 
        <span class={verificationStatus === 'success' ? 'text-green-500' : 'text-red-500'}>
          {verificationStatus === 'success' ? 'Verified' : 'Failed'}
        </span>
      </p>
    {/if}
  </main>
  