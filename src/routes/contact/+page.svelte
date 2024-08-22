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
            <a href="tel:+254790932575" class="text-sm hover:text-emerald-400">+254 790 932 575</a>
          </li>
          <li>
            <h3 class="text-lg font-semibold">Address</h3>
            <p class="text-sm">KYCID, Nairobi CBD, Kenya</p>
          </li>
          <li>
            <h3 class="text-lg font-semibold">Office Location</h3>
            <!-- Embedded Google Map -->
            <div class="w-full h-64 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.682759148562!2d36.81229082271623!3d-1.2863895194841405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f112acee028c3%3A0xe8b8c08c31aaf2ab!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1692862308973!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style="border:0;"
                title="KYCID Office Location"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <!-- Directions link -->
            <a href="https://www.google.com/maps/dir/?api=1&destination=Nairobi%20CBD" target="_blank" class="mt-2 inline-block text-emerald-400 hover:text-emerald-300">Get Directions</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
