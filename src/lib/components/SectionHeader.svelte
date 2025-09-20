<script>
	// Props
	export let title;
	export let description = "";
	export let alignment = "center"; // "center" | "left"
	export let titleClass = "slide-in-left";
	export let descriptionClass = "slide-in-right";
	export let maxWidth = "max-w-2xl"; // Container max-width for description
</script>

<div class="text-{alignment} mb-16">
	<h2 class="{titleClass} heading-2 mb-4">
		{title}
	</h2>
	{#if description}
		<p class="{descriptionClass} body-large {maxWidth} {alignment === 'center' ? 'mx-auto' : ''}">
			{description}
		</p>
	{/if}
</div>
