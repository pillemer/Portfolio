<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { useIntersectionObserver } from "$lib/utils/intersectionObserver";
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import HeroSection from "$lib/components/HeroSection.svelte";
    import SectionHeader from "$lib/components/SectionHeader.svelte";
    import ProcessStep from "$lib/components/ProcessStep.svelte";
    import Check from "$lib/assets/icons/Check.svelte";
    import { siteContent } from "$lib/utils/content";

    let mounted = false;

    // Set up intersection observer for scroll animations
    useIntersectionObserver();

    onMount(() => {
        mounted = true;
    });
</script>

<PageWrapper
    title="Services | Professional Website Design"
    description="Professional website design, booking systems, and payment integration for therapists and healthcare professionals."
>
    <!-- Hero Section -->
    <HeroSection
        badge={siteContent.services.hero.badge}
        title={siteContent.services.hero.title}
        titleHighlight={siteContent.services.hero.titleHighlight}
        description={siteContent.services.hero.description}
        showFloatingElements={false}
        minHeight="min-h-[60vh]"
    />

    <!-- Services Grid -->
    <section class="py-24 bg-surface-primary">
        <div class="container-custom">
            <div class="max-w-6xl mx-auto">
                <SectionHeader 
                    title="Choose Your Solution"
                    description="Select the package that best fits your needs, or contact me for a custom solution tailored to your practice."
                />

                <!-- Service Packages -->
                <div class="grid grid-cols-1 gap-8">
                    <!-- Base Package -->
                    <div class="fade-in p-8 rounded-2xl border-2 border-primary-600 bg-surface-primary hover:shadow-lg transition-shadow">
                        <div class="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="heading-3 mb-2">{siteContent.services.packages.website.title}</h3>
                                <p class="text-content-secondary mb-4">{siteContent.services.packages.website.description}</p>
                                <div class="flex items-baseline mb-4">
                                    <span class="text-4xl font-bold">{siteContent.services.packages.website.price}</span>
                                    <span class="text-content-secondary ml-2">{siteContent.services.packages.website.priceDetail}</span>
                                </div>
                                <a href="/contact" class="btn btn-primary inline-block">Get Started</a>
                            </div>
                            <div>
                                <ul class="space-y-4">
                                    {#each siteContent.services.packages.website.features as feature}
                                        <li class="flex items-center">
                                            <span class="text-blue-600 mr-2 flex-shrink-0"><Check /></span>
                                            <span>{feature}</span>
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Add-ons -->
                    <div class="grid md:grid-cols-2 gap-8">
                        <!-- Booking System Add-on -->
                        <div class="fade-in p-8 rounded-2xl border border-border-primary bg-surface-primary hover:shadow-lg transition-shadow">
                            <h3 class="heading-3 mb-2">{siteContent.services.packages.bookingSystem.title}</h3>
                            <p class="text-content-secondary mb-4">{siteContent.services.packages.bookingSystem.description}</p>
                            <div class="flex items-baseline mb-4">
                                <span class="text-4xl font-bold">{siteContent.services.packages.bookingSystem.price}</span>
                                <span class="text-content-secondary ml-2">{siteContent.services.packages.bookingSystem.priceDetail}</span>
                            </div>
                            <ul class="space-y-4 mb-8">
                                {#each siteContent.services.packages.bookingSystem.features as feature}
                                    <li class="flex items-center">
                                        <span class="text-blue-600 mr-2 flex-shrink-0"><Check /></span>
                                        <span>{feature}</span>
                                    </li>
                                {/each}
                            </ul>
                        </div>

                        <!-- Payment System Add-on -->
                        <div class="fade-in p-8 rounded-2xl border border-border-primary bg-surface-primary hover:shadow-lg transition-shadow">
                            <h3 class="heading-3 mb-2">{siteContent.services.packages.paymentSystem.title}</h3>
                            <p class="text-content-secondary mb-4">{siteContent.services.packages.paymentSystem.description}</p>
                            <div class="flex items-baseline mb-4">
                                <span class="text-4xl font-bold">{siteContent.services.packages.paymentSystem.price}</span>
                                <span class="text-content-secondary ml-2">{siteContent.services.packages.paymentSystem.priceDetail}</span>
                            </div>
                            <ul class="space-y-4 mb-8">
                                {#each siteContent.services.packages.paymentSystem.features as feature}
                                    <li class="flex items-center">
                                        <span class="text-blue-600 mr-2 flex-shrink-0"><Check /></span>
                                        <span>{feature}</span>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Process Section -->
    <section class="py-24 bg-surface-secondary">
        <div class="container-custom">
            <div class="max-w-4xl mx-auto">
                <SectionHeader 
                    title={siteContent.services.process.title}
                    description={siteContent.services.process.description}
                />

                <div class="space-y-12">
                    {#each siteContent.services.process.steps as step}
                        <ProcessStep
                            number={step.number}
                            title={step.title}
                            description={step.description}
                        />
                    {/each}
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-surface-primary">
        <div class="container-custom">
            <div class="max-w-4xl mx-auto text-center">
                <SectionHeader 
                    title={siteContent.services.cta.title}
                    description={siteContent.services.cta.description}
                    maxWidth="max-w-2xl"
                />
                <a href="/contact" class="btn btn-primary">{siteContent.services.cta.buttonText}</a>
            </div>
        </div>
    </section>
</PageWrapper>