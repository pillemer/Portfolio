<script>
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	// Props
	export let badge;
	export let title;
	export let titleHighlight = "";
	export let description;
	export let showFloatingElements = true;
	export let minHeight = "min-h-screen";

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<section
	class="relative {minHeight} flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100"
>
	<!-- Subtle Background Pattern -->
	<div class="absolute inset-0 opacity-[0.02]">
		<div
			class="absolute inset-0"
			style="background-image: radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px); background-size: 24px 24px;"
		></div>
	</div>

	<!-- Hero Content -->
	<div class="container-custom relative z-10">
		<div class="max-w-4xl mx-auto text-center">
			{#if mounted}
				<div in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-6">
					<span
						class="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
					>
						{badge}
					</span>
				</div>

				<h1
					in:fly={{ y: 30, duration: 800, delay: 400 }}
					class="heading-1 mb-6"
				>
					{title}
					{#if titleHighlight}
						<span class="text-primary-600 relative">
							{titleHighlight}
							<svg
								class="absolute -bottom-2 left-0 w-full h-3 text-primary-200"
								viewBox="0 0 200 12"
								fill="none"
							>
								<path
									d="M2 8C50 2 150 2 198 8"
									stroke="currentColor"
									stroke-width="3"
									stroke-linecap="round"
								/>
							</svg>
						</span>
					{/if}
				</h1>

				<p
					in:fly={{ y: 30, duration: 800, delay: 600 }}
					class="body-large mb-8 max-w-2xl mx-auto"
				>
					{description}
				</p>

				<!-- CTA Buttons (optional) -->
				<slot name="cta">
					<!-- Default CTA implementation if no slot provided -->
				</slot>
			{/if}
		</div>

		<!-- Floating Elements -->
		{#if mounted && showFloatingElements}
			<div
				class="absolute top-20 left-10 w-20 h-20 bg-primary-100 rounded-full opacity-60 animate-bounce"
				style="animation-delay: 0s; animation-duration: 3s;"
			></div>
			<div
				class="absolute top-40 right-20 w-16 h-16 bg-surface-secondary rounded-full opacity-40 animate-bounce"
				style="animation-delay: 1s; animation-duration: 4s;"
			></div>
			<div
				class="absolute bottom-40 left-20 w-12 h-12 bg-primary-200 rounded-full opacity-50 animate-bounce"
				style="animation-delay: 2s; animation-duration: 5s;"
			></div>
		{/if}
	</div>
</section>
