<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { siteContent } from "$lib/utils/content";
    import { useIntersectionObserver } from "$lib/utils/intersectionObserver";
    
    // Components
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import HeroSection from "$lib/components/HeroSection.svelte";
    import SectionHeader from "$lib/components/SectionHeader.svelte";
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
    useIntersectionObserver();

    onMount(() => {
        mounted = true;
    });
</script>

<PageWrapper
    title={siteContent.global.siteName}
    description={siteContent.home.hero.description}
>
    <!-- Hero Section -->
    <HeroSection
        badge={siteContent.home.hero.badge}
        title={siteContent.home.hero.title}
        titleHighlight={siteContent.home.hero.titleHighlight}
        description={siteContent.home.hero.description}
        showFloatingElements={true}
        minHeight="min-h-screen"
    >
        <div slot="cta" class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href={siteContent.home.hero.cta.primary.href} class="btn btn-primary group">
                {siteContent.home.hero.cta.primary.text}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <!-- <a href={siteContent.home.hero.cta.secondary.href} class="btn btn-secondary">
                {siteContent.home.hero.cta.secondary.text}
            </a> -->
        </div>
    </HeroSection>

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
        <SectionHeader 
            title={siteContent.home.valueProps.title}
            description={siteContent.home.valueProps.description}
        />

        <div class="grid md:grid-cols-3 gap-8">
            {#each siteContent.home.valueProps.cards as card, i}
                <ValueCard
                    title={card.title}
                    description={card.description}
                    icon={card.iconType === 'Trust' ? Trust : card.iconType === 'Check' ? Check : Payment}
                    iconBgColor={card.iconBgColor}
                    iconColor={card.iconColor}
                    linkText={card.linkText}
                    delay={i === 0 ? 'short' : i === 1 ? 'medium' : 'long'}
                />
            {/each}
        </div>
    </div>
</section>

<!-- Process Section -->
<section class="section bg-white" bind:this={processRef}>
    <div class="container-custom">
        <SectionHeader 
            title={siteContent.home.process.title}
            description={siteContent.home.process.description}
        />

        <div class="grid md:grid-cols-3 gap-12">
            {#each siteContent.home.process.steps as step, i}
                <ProcessStep
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    delay={i === 0 ? 'short' : i === 1 ? 'medium' : 'long'}
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
                <div class="fade-in" style={i === 0 ? 'animation-delay: 0ms' : i === 1 ? 'animation-delay: 200ms' : 'animation-delay: 400ms'}>
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
            <SectionHeader 
                title={siteContent.home.finalCta.title}
                description={siteContent.home.finalCta.description}
                titleClass="fade-in"
                descriptionClass="fade-in"
            />
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
