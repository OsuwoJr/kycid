<script lang="ts">
    export let steps: string[] = ['Face Scan', 'Digital Signature', 'Additional Details'];
    export let currentStep = 0;
  </script>
  
  <div class="flex justify-center items-center space-x-4">
    {#each steps as step, index}
      <div class="flex items-center">
        <div class={`w-8 h-8 flex items-center justify-center rounded-full ${index <= currentStep ? 'bg-emerald-600 text-white' : 'bg-gray-600 text-gray-400'}`}>
          {index + 1}
        </div>
        {#if index < steps.length - 1}
          <div class="w-12 h-1 bg-gray-600"></div>
        {/if}
      </div>
    {/each}
  </div>
  <p class="mt-4 text-white">Step {currentStep + 1} of {steps.length}: {steps[currentStep]}</p>
  