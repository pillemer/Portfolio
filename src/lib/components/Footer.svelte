<script lang="ts">
    import { siteContent } from "$lib/utils/content";
    const { footer } = siteContent.global;
</script>

<footer class="bg-blue-300 border-t border-slate-200">
	<div class="max-w-6xl mx-auto px-6">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
			<div class="md:col-span-2">
				<h3 class="text-lg font-bold text-slate-900 mb-4">{siteContent.global.siteName}</h3>
				<p class="text-slate-600 leading-relaxed mb-4">{footer.description}</p>
				
				<p class="text-sm text-slate-600">
					Questions? Drop me a line: 
					<a href="mailto:{footer.contact.email}" class="text-blue-600 hover:text-blue-700 transition-colors">
						{footer.contact.email}
					</a>
				</p>
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
				<h4 class="font-semibold text-slate-900 mb-4">{footer.legal.title}</h4>
				<ul class="space-y-3">
					{#each footer.legal.items as item}
						<li>
							<a href={item.href} class="text-slate-600 hover:text-blue-600 transition-colors">
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
				
				<div class="mt-6">
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
		</div>
		
		<div class="py-8 border-t border-slate-200">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<p class="text-slate-500">{footer.copyright}</p>
				<div class="flex gap-6">
					{#each footer.legal.items as item}
						<a href={item.href} class="text-slate-500 hover:text-slate-700 transition-colors text-sm">
							{item.label}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</footer>