<script lang="ts">
    let name = "";
    let email = "";
  
    function handleResetBiometrics() {
      // Logic for resetting biometrics
      alert('Biometric data reset successfully');
    }
  
    function handleSaveSettings() {
      // Logic for saving settings
      alert('Settings saved successfully');
    }
  </script>
  
  <div class="bg-gray-800 p-4 rounded-lg shadow-md text-white">
    <h2 class="text-2xl font-bold mb-2">Settings</h2>
    <div class="mb-4">
      <label class="block mb-1">Name</label>
      <input type="text" bind:value={name} class="w-full p-2 rounded bg-gray-700 text-white"/>
    </div>
    <div class="mb-4">
      <label class="block mb-1">Email</label>
      <input type="email" bind:value={email} class="w-full p-2 rounded bg-gray-700 text-white"/>
    </div>
    <button on:click={handleSaveSettings} class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-md">Save Settings</button>
    <button on:click={handleResetBiometrics} class="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md ml-4">Reset Biometric Data</button>
  </div>
  