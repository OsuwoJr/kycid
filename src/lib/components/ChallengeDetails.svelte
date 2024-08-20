<script lang="ts">
    export let challenge: string;
    export let appInfo: string;
  </script>
  
  <div class="bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-lg text-center">
    <h2 class="text-2xl font-semibold mb-4 text-emerald-400">Challenge Details</h2>
    <p class="text-lg mb-2"><strong>App:</strong> {appInfo}</p>
    <p class="text-lg"><strong>Challenge:</strong> {challenge}</p>
  </div>
  