<script>
  
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  
    import "../app.css";
  </script>
  <style>
  
  </style>
  <div class="flex flex-col bg-gray-900 text-white min-h-screen">
    <Header/>
    <main class="flex-1">
      <slot />

    </main>
    

    <Footer/>

  </div>
 