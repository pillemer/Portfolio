<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { siteContent } from "$lib/utils/content";
    import { useIntersectionObserver } from "$lib/utils/intersectionObserver";
    import PageWrapper from "$lib/components/PageWrapper.svelte";

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
    <section
        class="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100"
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
                            class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                            {siteContent.about.hero.badge}
                        </span>
                    </div>

                    <h1
                        in:fly={{ y: 30, duration: 800, delay: 400 }}
                        class="heading-1 mb-6"
                    >
                        {siteContent.about.hero.title}
                        <span class="text-blue-600 relative">
                            {siteContent.about.hero.titleHighlight}
                            <svg
                                class="absolute -bottom-2 left-0 w-full h-3 text-blue-200"
                                viewBox="0 0 200 12"
                                fill="none"
                            >
                                <path
                                    d="M1 5C1 5 47.5 -2.5 100 5C152.5 12.5 199 5 199 5"
                                    stroke="currentColor"
                                    stroke-width="4"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </span>
                    </h1>

                    <p
                        in:fly={{ y: 30, duration: 800, delay: 600 }}
                        class="body-large text-slate-600 mb-8 max-w-2xl mx-auto"
                    >
                        I specialize in creating beautiful, functional websites that help healthcare professionals showcase their practice and connect with more clients.
                    </p>
                {/if}
            </div>
        </div>
    </section>

    <!-- Main Content Section -->
    <section class="py-24 bg-white">
        <div class="container-custom">
            <div class="max-w-3xl mx-auto">
                <!-- Experience -->
                <div class="mb-16 fade-in">
                    <h2 class="heading-2 mb-6">{siteContent.about.sections.approach.title}</h2>
                    {#each siteContent.about.sections.approach.content as paragraph}
                        <p class="body-regular mb-6 text-slate-600">
                            {paragraph}
                        </p>
                    {/each}
                </div>

                <!-- Skills -->
                <div class="mb-16 fade-in">
                    <h2 class="heading-2 mb-6">{siteContent.about.sections.expertise.title}</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {#each siteContent.about.sections.expertise.services as service}
                            <div class="p-6 rounded-xl bg-slate-50">
                                <h3 class="heading-4 mb-3">{service.title}</h3>
                                <p class="text-slate-600">{service.description}</p>
                            </div>
                        {/each}
                    </div>
                </div>

                <!-- Personal -->
                <div class="fade-in">
                    <h2 class="heading-2 mb-6">{siteContent.about.sections.why.title}</h2>
                    {#each siteContent.about.sections.why.content as paragraph}
                        <p class="body-regular mb-6 text-slate-600">
                            {paragraph}
                        </p>
                    {/each}
                </div>
            </div>
        </div>
    </section>
</PageWrapper>