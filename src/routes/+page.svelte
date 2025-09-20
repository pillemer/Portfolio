<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { siteContent } from "$lib/utils/content";
    import { useIntersectionObserver } from "$lib/utils/intersectionObserver";
    
    // Components
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import ValueCard from "$lib/components/ValueCard.svelte";
    import ProcessStep from "$lib/components/ProcessStep.svelte";
    
    // Icons
    import ArrowRight from "$lib/assets/icons/ArrowRight.svelte";
    import Check from "$lib/assets/icons/Check.svelte";
    import Payment from "$lib/assets/icons/Payment.svelte";
    import Trust from "$lib/assets/icons/Trust.svelte";

    let mounted = false;
    let heroRef;
    let statsRef;
    let processRef;

    // Set up intersection observer for scroll animations
    useIntersectionObserver({ removeOnExit: true });

    onMount(() => {
        mounted = true;
    });
</script>

<PageWrapper
    title={siteContent.global.siteName}
    description={siteContent.home.hero.description}
>
    <!-- Hero Section -->
    <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100"
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
        <div class="max-w-4xl mx-auto text-center" bind:this={heroRef}>
            {#if mounted}
                <div in:fly={{ y: 30, duration: 800, delay: 200 }} class="mb-6">
                    <span
                        class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                        {siteContent.home.hero.badge}
                    </span>
                </div>

                <h1
                    in:fly={{ y: 30, duration: 800, delay: 400 }}
                    class="heading-1 mb-6"
                >
                    {siteContent.home.hero.title}
                    <span class="text-blue-600 relative">
                        {siteContent.home.hero.titleHighlight}
                        <svg
                            class="absolute -bottom-2 left-0 w-full h-3 text-blue-200"
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
                </h1>

                <p
                    in:fly={{ y: 30, duration: 800, delay: 600 }}
                    class="body-large mb-8 max-w-2xl mx-auto"
                >
                    {siteContent.home.hero.description}
                </p>

                <div
                    in:fly={{ y: 30, duration: 800, delay: 800 }}
                    class="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                >
                    <a href={siteContent.home.hero.cta.primary.href} class="btn btn-primary group">
                        {siteContent.home.hero.cta.primary.text}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <!-- <a href={siteContent.home.hero.cta.secondary.href} class="btn btn-secondary">
                        {siteContent.home.hero.cta.secondary.text}
                    </a> -->
                </div>
            {/if}
        </div>

        <!-- Floating Elements -->
        {#if mounted}
            <div
                class="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-60 animate-bounce"
                style="animation-delay: 0s; animation-duration: 3s;"
            ></div>
            <div
                class="absolute top-40 right-20 w-16 h-16 bg-slate-200 rounded-full opacity-40 animate-bounce"
                style="animation-delay: 1s; animation-duration: 4s;"
            ></div>
            <div
                class="absolute bottom-40 left-20 w-12 h-12 bg-blue-200 rounded-full opacity-50 animate-bounce"
                style="animation-delay: 2s; animation-duration: 5s;"
            ></div>
        {/if}
    </div>
</section>

<!-- Trust Indicators -->
<!-- TODO: to be added when testimonials are ready -->
<!-- <section class="section-sm bg-white">
    <div class="container-custom">
        <div class="fade-in text-center mb-16">
            <p class="text-slate-500 text-sm font-medium mb-8">
                {siteContent.home.trust.title}
            </p>
            <div
                class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60"
            >
                {#each siteContent.home.trust.badges as badge}
                    <div class="flex items-center justify-center">
                        <div
                            class="w-24 h-12 bg-slate-100 rounded flex items-center justify-center"
                        >
                            <span class="text-xs font-medium text-slate-400"
                                >{badge.text}</span
                            >
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section> -->

<!-- Value Propositions -->
<section class="section bg-slate-50">
    <div class="container-custom">
        <div class="text-center mb-16">
            <h2 class="slide-in-left heading-2 mb-4">
                {siteContent.home.valueProps.title}
            </h2>
            <p class="slide-in-right body-large max-w-2xl mx-auto">
                {siteContent.home.valueProps.description}
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            {#each siteContent.home.valueProps.cards as card, i}
                <ValueCard
                    title={card.title}
                    description={card.description}
                    icon={card.iconType === 'Trust' ? Trust : card.iconType === 'Check' ? Check : Payment}
                    iconBgColor={card.iconBgColor}
                    iconColor={card.iconColor}
                    linkText={card.linkText}
                    delay={`${0.2 * (i + 1)}s`}
                />
            {/each}
        </div>
    </div>
</section>

<!-- Process Section -->
<section class="section bg-white" bind:this={processRef}>
    <div class="container-custom">
        <div class="text-center mb-16">
            <h2 class="slide-in-left heading-2 mb-4">
                {siteContent.home.process.title}
            </h2>
            <p class="slide-in-right body-large max-w-2xl mx-auto">
                {siteContent.home.process.description}
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-12">
            {#each siteContent.home.process.steps as step, i}
                <ProcessStep
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    delay={`${0.2 * (i + 1)}s`}
                />
            {/each}
        </div>
    </div>
</section>

<!-- Social Proof / Stats -->
<section class="section-sm bg-blue-600 text-white" bind:this={statsRef}>
    <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {#each siteContent.home.stats.items as stat, i}
                <div class="fade-in" style={i > 0 ? `animation-delay: ${i * 0.2}s` : ''}>
                    <div class="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                    <div class="text-blue-100">{stat.label}</div>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Final CTA -->
<section class="section bg-slate-50">
    <div class="container-custom text-center">
        <div class="max-w-3xl mx-auto">
            <h2 class="fade-in heading-2 mb-6">
                {siteContent.home.finalCta.title}
            </h2>
            <p class="fade-in body-large mb-8">
                {siteContent.home.finalCta.description}
            </p>
            <div class="fade-in flex flex-col sm:flex-row gap-4 justify-center">
                <a href={siteContent.home.finalCta.cta.primary.href} class="btn btn-primary">
                    {siteContent.home.finalCta.cta.primary.text}
                </a>
                <a href={siteContent.home.finalCta.cta.secondary.href} class="btn btn-secondary">
                    {siteContent.home.finalCta.cta.secondary.text}
                </a>
            </div>
        </div>
    </div>
</section>
</PageWrapper>
