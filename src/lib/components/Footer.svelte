<script lang="ts">
    import { siteContent } from "$lib/utils/content";
    const { footer } = siteContent.global;
</script>

<footer class="bg-blue-300 border-t border-slate-200">
	<div class="max-w-6xl mx-auto px-6">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
			<div class="md:col-span-1">
				<h3 class="text-lg font-bold text-slate-900 mb-4">{siteContent.global.siteName}</h3>
				<p class="text-slate-600 leading-relaxed">{footer.description}</p>
			</div>
			
			<div>
				<h4 class="font-semibold text-slate-900 mb-4">{footer.services.title}</h4>
				<ul class="space-y-3">
					{#each footer.services.items as item}
						<li>
							<a href={item.href} class="text-slate-600 hover:text-blue-600 transition-colors">
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			
			<div>
				<h4 class="font-semibold text-slate-900 mb-4">{footer.connect.title}</h4>
				<ul class="space-y-3">
					{#each footer.connect.items as item}
						<li>
							<a href={item.href} class="text-slate-600 hover:text-blue-600 transition-colors">
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		
		<div class="py-8 border-t border-slate-200 text-center">
			<p class="text-slate-500">{footer.copyright}</p>
		</div>
	</div>
</footer>