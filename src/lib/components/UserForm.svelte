<script lang="ts">
    let userDetails = {
      name: '',
      email: '',
    };
  
    const handleSubmit = () => {
      // Logic to handle form submission
      console.log('User Details:', userDetails);
    };
  </script>
  
  <div class="bg-gray-800 p-6 rounded-lg">
    <h2 class="text-xl font-bold text-emerald-500 mb-4">Additional Details</h2>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="mb-4">
        <label for="name" class="block text-white">Name</label>
        <input
          id="name"
          type="text"
          bind:value={userDetails.name}
          class="w-full px-4 py-2 bg-gray-700 text-white rounded"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-white">Email</label>
        <input
          id="email"
          type="email"
          bind:value={userDetails.email}
          class="w-full px-4 py-2 bg-gray-700 text-white rounded"
          required
        />
      </div>
      <button
        type="submit"
        class="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded"
      >
        Submit
      </button>
    </form>
  </div>
  