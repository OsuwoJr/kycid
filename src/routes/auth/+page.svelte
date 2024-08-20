<script lang="ts">
    import { goto } from '$app/navigation';
    import FaceScan from '$lib/components/FaceScan.svelte';
    import DigitalSignature from '$lib/components/DigitalSignature.svelte';
    import UserForm from '$lib/components/UserForm.svelte';
    import ProgressTracker from '$lib/components/ProgressTracker.svelte';
  
    let currentStep = 0;
  
    const steps = ['Face Scan', 'Digital Signature', 'Additional Details'];
  
    const nextStep = () => {
      if (currentStep < steps.length - 1) {
        currentStep += 1;
      } else {
        // Once the process is complete, redirect to the dashboard
        goto('/dashboard');
      }
    };
  </script>
  
  <main class="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold mb-8 text-emerald-500">KYCID Authentication</h1>
  
    <ProgressTracker {steps} {currentStep} />
  
    {#if currentStep === 0}
      <FaceScan />
      <button on:click={nextStep} class="mt-8 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded">Next</button>
    {/if}
  
    {#if currentStep === 1}
      <DigitalSignature />
      <button on:click={nextStep} class="mt-8 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded">Next</button>
    {/if}
  
    {#if currentStep === 2}
      <UserForm />
      <p class="mt-8 text-green-400">You have completed the KYC process!</p>
      <button on:click={nextStep} class="mt-8 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded">Go to Dashboard</button>
    {/if}
  </main>
  