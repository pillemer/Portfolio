
<script lang="ts">
	import { siteContent } from "$lib/utils/content";
	import { page } from '$app/stores';
	import Hamburger from '$lib/assets/icons/Hamburger.svelte';
	import Close from '$lib/assets/icons/Close.svelte';
	
	export let scrollY = 0;
	export let currentPath = '/';
	
	$: isScrolled = scrollY > 50;
	const { navigation } = siteContent.global;
	
	// Mobile menu state
	let mobileMenuOpen = false;
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
		
		// Prevent body scroll when menu is open
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}
</script>

<nav
  class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm'
                 : 'bg-white/60 backdrop-blur-sm'}`}
>

	<div class="max-w-6xl mx-auto px-6">
		<div class="flex items-center justify-between h-20">
			<!-- Logo -->
			<a 
				href="/" 
				class="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
				on:click={() => {
					if (mobileMenuOpen) {
						toggleMobileMenu();
					}
				}}
			>
				{navigation.logo}
			</a>
			
			<!-- Mobile hamburger button (visible only on mobile) -->
			<button
				on:click={toggleMobileMenu}
				class="md:hidden w-8 h-8 flex items-center justify-center z-50"
				aria-label="Toggle mobile menu"
			>
				<div class="relative w-6 h-6">
					<!-- Hamburger icon -->
					<div class="absolute inset-0 transition-all duration-300 transform" 
						 class:opacity-0={mobileMenuOpen} 
						 class:opacity-100={!mobileMenuOpen}
						 class:rotate-360={mobileMenuOpen}>
						<Hamburger className="w-6 h-6" />
					</div>
					<!-- Close icon -->
					<div class="absolute inset-0 transition-all duration-300 transform"
						 class:opacity-100={mobileMenuOpen}
						 class:opacity-0={!mobileMenuOpen}
						 class:-rotate-360={!mobileMenuOpen}>
						<Close className="w-6 h-6" />
					</div>
				</div>
			</button>
			
			<!-- Desktop navigation menu -->
			<div class="hidden md:flex items-center space-x-8">
				{#each navigation.items as item}
					<a 
						href={item.href} 
						class="relative text-slate-600 hover:text-slate-900 font-medium transition-colors group"
						class:text-slate-900={currentPath === item.href}
					>
						{item.label}
						<span class="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"
						      class:w-full={currentPath === item.href}></span>
					</a>
				{/each}
			</div>
			
			<!-- CTA button (hidden on mobile when menu is open) -->
			<a 
				href={navigation.cta.href} 
				class="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-md"
			>
				{navigation.cta.label}
			</a>
		</div>
	</div>

	<!-- Mobile menu overlay -->
	{#if mobileMenuOpen}
		<div 
			style="
				position: fixed;
				top: 80px;
				left: 0;
				width: 100vw;
				height: calc(100vh - 80px);
				background-color: rgba(255, 255, 255, 0.6);
				backdrop-filter: blur(32px);
				z-index: 40;
			"
			class="md:hidden"
			on:click={toggleMobileMenu}
			on:keydown={(e) => e.key === 'Escape' && toggleMobileMenu()}
			role="button"
			tabindex="0"
			aria-label="Close mobile menu"
		></div>
	{/if}

	<!-- Mobile menu content -->
	{#if mobileMenuOpen}
		<div 
			class="fixed inset-x-0 z-45 md:hidden flex flex-col justify-center items-center"
			style="
				top: 80px;
				height: calc(100vh - 80px);
				background-color: rgba(255, 255, 255, 0.6);
				backdrop-filter: blur(32px);
			"
		>
			<div class="space-y-8 text-center">
				{#each navigation.items as item}
					<a 
						href={item.href}
						class="block text-slate-800 text-2xl font-medium hover:text-blue-600 transition-colors"
						on:click={toggleMobileMenu}
					>
						{item.label}
					</a>
				{/each}
				
				<!-- Mobile CTA -->
				<a 
					href={navigation.cta.href}
					class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
					on:click={toggleMobileMenu}
				>
					{navigation.cta.label}
				</a>
			</div>
		</div>
	{/if}
</nav>
