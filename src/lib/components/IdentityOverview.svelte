<script lang="ts">
    export let publicKey: string;
    export let kycStatus: string;
  </script>
  
  <div class="bg-gray-800 p-4 rounded-lg shadow-md text-white">
    <h2 class="text-2xl font-bold mb-2">Identity Overview</h2>
    <p class="text-lg"><strong>Public Key:</strong> {publicKey}</p>
    <p class="text-lg"><strong>KYC Status:</strong> {kycStatus}</p>
  </div>
  