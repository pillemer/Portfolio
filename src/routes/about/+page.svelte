<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { siteContent } from "$lib/utils/content";
    import { useIntersectionObserver } from "$lib/utils/intersectionObserver";
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import HeroSection from "$lib/components/HeroSection.svelte";

    let mounted = false;
    
    // Set up intersection observer for scroll animations
    useIntersectionObserver();

    onMount(() => {
        mounted = true;
    });
</script>

<PageWrapper
    title={siteContent.about.meta.title}
    description={siteContent.about.meta.description}
>
    <!-- Hero Section -->
    <HeroSection
        badge={siteContent.about.hero.badge}
        title={siteContent.about.hero.title}
        titleHighlight={siteContent.about.hero.titleHighlight}
        description="I specialize in creating beautiful, functional websites that help healthcare professionals showcase their practice and connect with more clients."
        showFloatingElements={false}
        minHeight="min-h-[60vh]"
    />

    <!-- Main Content Section -->
    <section class="py-24 bg-surface-primary">
        <div class="container-custom">
            <div class="max-w-3xl mx-auto">
                <!-- Experience -->
                <div class="mb-16 fade-in">
                    <h2 class="heading-2 mb-6">{siteContent.about.sections.approach.title}</h2>
                    {#each siteContent.about.sections.approach.content as paragraph}
                        <p class="body-regular mb-6 text-content-secondary">
                            {paragraph}
                        </p>
                    {/each}
                </div>

                <!-- Skills -->
                <div class="mb-16 fade-in">
                    <h2 class="heading-2 mb-6">{siteContent.about.sections.expertise.title}</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {#each siteContent.about.sections.expertise.services as service}
                            <div class="p-6 rounded-xl bg-surface-secondary">
                                <h3 class="heading-4 mb-3">{service.title}</h3>
                                <p class="text-content-secondary">{service.description}</p>
                            </div>
                        {/each}
                    </div>
                </div>

                <!-- Personal -->
                <div class="fade-in">
                    <h2 class="heading-2 mb-6">{siteContent.about.sections.why.title}</h2>
                    {#each siteContent.about.sections.why.content as paragraph}
                        <p class="body-regular mb-6 text-content-secondary">
                            {paragraph}
                        </p>
                    {/each}
                </div>
            </div>
        </div>
    </section>
</PageWrapper>