
<script lang="ts">
	import { siteContent } from "$lib/utils/content";
	
	export let scrollY = 0;
	export let currentPath = '/';
	
	$: isScrolled = scrollY > 50;
	const { navigation } = siteContent.global;
</script>

<nav
  class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm'
                 : 'bg-white/60 backdrop-blur-sm'}`}
>

	<div class="max-w-6xl mx-auto px-6">
		<div class="flex items-center justify-between h-20">
			<a href="/" class="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
				{navigation.logo}
			</a>
			
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
			
			<a href={navigation.cta.href} class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-md">
				{navigation.cta.label}
		</div>
	</div>
</nav>
