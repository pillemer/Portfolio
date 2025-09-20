<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { useIntersectionObserver } from "$lib/utils/intersectionObserver";
    import PageWrapper from "$lib/components/PageWrapper.svelte";
    import HeroSection from "$lib/components/HeroSection.svelte";
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
    <section class="py-24 bg-white">
        <div class="container-custom">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="heading-2 mb-4">Choose Your Solution</h2>
                    <p class="body-large text-slate-600 max-w-2xl mx-auto">
                        Select the package that best fits your needs, or contact me for a custom solution 
                        tailored to your practice.
                    </p>
                </div>

                <!-- Service Packages -->
                <div class="grid grid-cols-1 gap-8">
                    <!-- Base Package -->
                    <div class="fade-in p-8 rounded-2xl border-2 border-blue-600 bg-white hover:shadow-lg transition-shadow">
                        <div class="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="heading-3 mb-2">{siteContent.services.packages.website.title}</h3>
                                <p class="text-slate-600 mb-4">{siteContent.services.packages.website.description}</p>
                                <div class="flex items-baseline mb-4">
                                    <span class="text-4xl font-bold">{siteContent.services.packages.website.price}</span>
                                    <span class="text-slate-600 ml-2">{siteContent.services.packages.website.priceDetail}</span>
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
                        <div class="fade-in p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
                            <h3 class="heading-3 mb-2">{siteContent.services.packages.bookingSystem.title}</h3>
                            <p class="text-slate-600 mb-4">{siteContent.services.packages.bookingSystem.description}</p>
                            <div class="flex items-baseline mb-4">
                                <span class="text-4xl font-bold">{siteContent.services.packages.bookingSystem.price}</span>
                                <span class="text-slate-600 ml-2">{siteContent.services.packages.bookingSystem.priceDetail}</span>
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
                        <div class="fade-in p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
                            <h3 class="heading-3 mb-2">{siteContent.services.packages.paymentSystem.title}</h3>
                            <p class="text-slate-600 mb-4">{siteContent.services.packages.paymentSystem.description}</p>
                            <div class="flex items-baseline mb-4">
                                <span class="text-4xl font-bold">{siteContent.services.packages.paymentSystem.price}</span>
                                <span class="text-slate-600 ml-2">{siteContent.services.packages.paymentSystem.priceDetail}</span>
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
    <section class="py-24 bg-slate-50">
        <div class="container-custom">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="heading-2 mb-4">{siteContent.services.process.title}</h2>
                    <p class="body-large text-slate-600 max-w-2xl mx-auto">
                        {siteContent.services.process.description}
                    </p>
                </div>

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
    <section class="py-24 bg-white">
        <div class="container-custom">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="heading-2 mb-6">{siteContent.services.cta.title}</h2>
                <p class="body-large text-slate-600 mb-8 max-w-2xl mx-auto">
                    {siteContent.services.cta.description}
                </p>
                <a href="/contact" class="btn btn-primary">{siteContent.services.cta.buttonText}</a>
            </div>
        </div>
    </section>
</PageWrapper>