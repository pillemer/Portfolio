<!-- filepath: /Users/pillemer/Projects/Portfolio/src/routes/privacy/+page.svelte -->
<script lang="ts">
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import { siteContent } from "$lib/utils/content";
    
    const { privacy } = siteContent;
</script>

<PageWrapper
    title={privacy.meta.title}
    description={privacy.meta.description}
>
    <section class="py-24 bg-surface-primary">
        <div class="container-custom">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-16">
                    <h1 class="heading-1 mb-6">{privacy.header.title}</h1>
                    <p class="body-large text-content-secondary">
                        Last updated: {privacy.header.lastUpdated}
                    </p>
                </div>

                <div class="space-y-12">
                    {#each Object.entries(privacy.sections) as [key, section]}
                        <section class="border-b border-border-primary pb-8 last:border-b-0">
                            <h2 class="text-2xl font-semibold text-content-primary mb-6">{section.title}</h2>
                            <div class="space-y-4">
                                {#each section.content as paragraph}
                                    {#if paragraph === ""}
                                        <div class="h-2"></div>
                                    {:else if paragraph.startsWith("•")}
                                        <div class="ml-4">
                                            <p class="text-content-secondary leading-relaxed font-medium">{paragraph}</p>
                                        </div>
                                    {:else}
                                        <p class="text-content-secondary leading-relaxed">{paragraph}</p>
                                    {/if}
                                {/each}
                            </div>
                        </section>
                    {/each}
                </div>
            </div>
        </div>
    </section>
</PageWrapper>