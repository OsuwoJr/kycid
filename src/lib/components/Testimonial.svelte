<script lang="ts">
    // Define the structure of a testimonial
    interface Testimonial {
      id: number;
      name: string;
      title: string;
      quote: string;
      avatar: string;
    }
  
    // Sample testimonials data
    const testimonials: Testimonial[] = [
      {
        id: 1,
        name: "Jane Doe",
        title: "Product Manager, TechCorp",
        quote: "KYCID has transformed our onboarding process. The seamless integration and robust security features give us peace of mind.",
        avatar: "/jane-doe.jpg",
      },
      {
        id: 2,
        name: "John Smith",
        title: "CTO, Fintech Ltd.",
        quote: "The level of security and ease of use provided by KYCID is unparalleled. We've seen a significant reduction in fraudulent activities.",
        avatar: "/john-smith.jpg",
      },
      {
        id: 3,
        name: "Emily Johnson",
        title: "CEO, StartupX",
        quote: "KYCID's platform is user-friendly and secure. Our customers love the quick verification process.",
        avatar: "/emily-johnson.jpg",
      },
    ];
  </script>
  
  <section class="bg-gray-900 text-white py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-emerald-500 mb-12">What Our Users Say</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each testimonials as testimonial (testimonial.id)}
          <div class="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <div class="flex items-center mb-4">
              <img src={testimonial.avatar} alt="{testimonial.name}" class="w-12 h-12 rounded-full object-cover" />
              <div class="ml-4">
                <h3 class="text-xl font-semibold">{testimonial.name}</h3>
                <p class="text-sm text-gray-400">{testimonial.title}</p>
              </div>
            </div>
            <p class="italic text-gray-300">"{testimonial.quote}"</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
  