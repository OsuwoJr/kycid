<script lang="ts">
    // Auto-updating year
    let currentYear: number = new Date().getFullYear();
  </script>
  
  <div class="bg-gray-900 text-white py-8">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-emerald-500">Contact Us</h1>
        <p class="mt-2 text-sm">We'd love to hear from you. Reach out to us through any of the following channels.</p>
      </div>
      
      <!-- Contact Information -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Form -->
        <div>
          <h2 class="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form action="#" method="POST" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium mb-1">Name</label>
              <input type="text" id="name" name="name" required class="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-1">Email</label>
              <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium mb-1">Message</label>
              <textarea id="message" name="message" rows="4" required class="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"></textarea>
            </div>
            <button type="submit" class="w-full py-2 px-4 bg-emerald-500 text-white rounded-md hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500">Send Message</button>
          </form>
        </div>
  
        <!-- Contact Details -->
        <div>
          <h2 class="text-xl font-semibold mb-4">Contact Details</h2>
          <ul class="space-y-4">
            <li>
              <h3 class="text-lg font-semibold">Email</h3>
              <a href="mailto:support@kycid.com" class="text-sm hover:text-emerald-400">support@kycid.com</a>
            </li>
            <li>
              <h3 class="text-lg font-semibold">Phone</h3>
              <a href="tel:+254123456789" class="text-sm hover:text-emerald-400">+254 123 456 789</a>
            </li>
            <li>
              <h3 class="text-lg font-semibold">Address</h3>
              <p class="text-sm">KYCID, Nairobi, Kenya</p>
            </li>
          </ul>
        </div>
      </div>
  
      
    </div>
  </div>
  