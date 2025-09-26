<script lang="ts">
    import { siteContent } from "$lib/utils/content";
    const { footer } = siteContent.global;
</script>

<footer class="bg-primary-600 border-t border-border-primary">
	<div class="max-w-6xl mx-auto px-6">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
			<div class="md:col-span-2">
				<h3 class="text-lg font-bold text-content-inverse mb-4">{siteContent.global.siteName}</h3>
				<p class="text-content-inverse/90 leading-relaxed mb-4">{footer.description}</p>
				
				<p class="text-sm text-content-inverse/90">
					Questions? Drop me a line: 
					<a href="mailto:{footer.contact.email}" class="text-content-inverse hover:text-content-inverse/80 transition-colors underline">
						{footer.contact.email}
					</a>
				</p>
			</div>
			
			<div>
				<h4 class="font-semibold text-content-inverse mb-4">{footer.services.title}</h4>
				<ul class="space-y-3">
					{#each footer.services.items as item}
						<li>
							<a href={item.href} class="text-content-inverse/90 hover:text-content-inverse transition-colors">
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			
			<div>
				<h4 class="font-semibold text-content-inverse mb-4">{footer.legal.title}</h4>
				<ul class="space-y-3">
					{#each footer.legal.items as item}
						<li>
							<a href={item.href} class="text-content-inverse/90 hover:text-content-inverse transition-colors">
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
				
				<div class="mt-6">
					<h4 class="font-semibold text-content-inverse mb-4">{footer.connect.title}</h4>
					<ul class="space-y-3">
						{#each footer.connect.items as item}
							<li>
								<a href={item.href} class="text-content-inverse/90 hover:text-content-inverse transition-colors">
									{item.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
		
		<div class="py-8 border-t border-content-inverse/20">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<p class="text-content-inverse/80">{footer.copyright}</p>
				<div class="flex gap-6">
					{#each footer.legal.items as item}
						<a href={item.href} class="text-content-inverse/80 hover:text-content-inverse transition-colors text-sm">
							{item.label}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</footer>