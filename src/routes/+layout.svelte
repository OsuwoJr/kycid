<script>
  
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  
    import "../app.css";
  </script>
  <style>
  
  </style>
  <div class="bg-gray-900 text-white min-h-screen">
    <Header/>
    
    
    
    <slot />

    <Footer/>

  </div>
 