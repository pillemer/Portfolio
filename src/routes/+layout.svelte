<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import Navigation from '$lib/components/Navigation.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '../app.css';
    import { initWindowAbout } from '$lib/utils/about.js';
  
  onMount(() => {
    initWindowAbout();
  });
    
    let scrollY = 0;
    let mounted = false;
    
    onMount(() => {
        mounted = true;
    });
</script>

<svelte:window bind:scrollY />

<div class="app flex flex-col min-h-screen transition-opacity duration-500" class:opacity-100={mounted} class:opacity-0={!mounted}>
	<Navigation {scrollY} currentPath={$page.url.pathname} />
	
	<main class="flex-1 pt-20">
		<slot />
	</main>
	
	<Footer />
</div>
