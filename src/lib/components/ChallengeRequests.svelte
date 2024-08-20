<script lang="ts">
    export let challenges: { appName: string; status: string }[];
  </script>
  
  <div class="bg-gray-800 p-4 rounded-lg shadow-md text-white">
    <h2 class="text-2xl font-bold mb-2">Challenge Requests</h2>
    <ul>
      {#each challenges as challenge}
        <li class="border-b border-gray-700 py-2">
          <strong>{challenge.appName}</strong>: {challenge.status}
        </li>
      {/each}
    </ul>
  </div>
  