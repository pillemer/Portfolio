<!-- src/routes/+page.svelte - Homepage -->
<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    
    // Components
    import ValueCard from "$lib/components/ValueCard.svelte";
    import ProcessStep from "$lib/components/ProcessStep.svelte";
    
    // Icons
    import ArrowRight from "$lib/assets/icons/ArrowRight.svelte";
    import Check from "$lib/assets/icons/Check.svelte";
    import Payment from "$lib/assets/icons/Payment.svelte";

    let mounted = false;
    let heroRef;
    let statsRef;
    let processRef;

    // Intersection Observer for animations
    let intersectionObserver: IntersectionObserver;

    onMount(() => {
        mounted = true;

        // Set up intersection observer for scroll animations
        intersectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Add visible class when entering viewport
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        // Remove visible class when leaving viewport
                        entry.target.classList.remove("visible");
                    }
                });
            },
            { 
                threshold: 0.1,
                rootMargin: "-50px 0px -50px 0px" // Adjusted to trigger slightly earlier
            },
        );

        // Observe elements
        document
            .querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
            .forEach((el) => {
                intersectionObserver.observe(el);
            });

        return () => {
            if (intersectionObserver) {
                intersectionObserver.disconnect();
            }
        };
    });
</script>

<svelte:head>
    <title>Ariel Pillemer</title>
    <meta
        name="description"
        content="Clean, professional websites that help professionals attract more clients. Specializing in booking systems, online payments, and modern design."
    />
</svelte:head>

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
                        Professional Website Design
                    </span>
                </div>

                <h1
                    in:fly={{ y: 30, duration: 800, delay: 400 }}
                    class="heading-1 mb-6"
                >
                    Beautiful websites that help
                    <span class="text-blue-600 relative">
                        professionals grow
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
                    Clean, professional websites with integrated booking systems
                    and online payments. Designed specifically for professionals
                    who want to attract more clients.
                </p>

                <div
                    in:fly={{ y: 30, duration: 800, delay: 800 }}
                    class="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                >
                    <a href="/services" class="btn btn-primary group">
                        See What I Can Build
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="/portfolio" class="btn btn-secondary">
                        View Examples
                    </a>
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
<section class="section-sm bg-white">
    <div class="container-custom">
        <div class="fade-in text-center mb-16">
            <p class="text-slate-500 text-sm font-medium mb-8">
                TRUSTED BY MANY PROFESSIONALS
            </p>
            <div
                class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60"
            >
                <!-- Mock trust badges/logos -->
                <div class="flex items-center justify-center">
                    <div
                        class="w-24 h-12 bg-slate-100 rounded flex items-center justify-center"
                    >
                        <span class="text-xs font-medium text-slate-400"
                            >BACP</span
                        >
                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <div
                        class="w-24 h-12 bg-slate-100 rounded flex items-center justify-center"
                    >
                        <span class="text-xs font-medium text-slate-400"
                            >BPS</span
                        >
                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <div
                        class="w-24 h-12 bg-slate-100 rounded flex items-center justify-center"
                    >
                        <span class="text-xs font-medium text-slate-400"
                            >UKCP</span
                        >
                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <div
                        class="w-24 h-12 bg-slate-100 rounded flex items-center justify-center"
                    >
                        <span class="text-xs font-medium text-slate-400"
                            >HCPC</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Value Propositions -->
<section class="section bg-slate-50">
    <div class="container-custom">
        <div class="text-center mb-16">
            <h2 class="slide-in-left heading-2 mb-4">
                Everything your practice needs online
            </h2>
            <p class="slide-in-right body-large max-w-2xl mx-auto">
                From professional design to booking systems, I build websites
                that help therapists focus on what matters most - helping their
                clients.
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            <ValueCard
                title="Build Trust Instantly"
                description="Clean, professional design that makes potential clients feel safe and confident about reaching out to you."
                icon={ArrowRight}
                iconBgColor="bg-blue-100"
                iconColor="text-blue-600"
                linkText="Learn more"
                delay="0.2s"
            />

            <ValueCard
                title="Simple Booking"
                description="Integrated booking system that lets clients schedule appointments 24/7, reducing phone calls and admin work."
                icon={Check}
                iconBgColor="bg-green-100"
                iconColor="text-green-600"
                linkText="See demo"
                delay="0.4s"
            />

            <ValueCard
                title="Secure Payments"
                description="Accept payments online with secure, GDPR-compliant payment processing. Get paid faster, reduce no-shows."
                icon={Payment}
                iconBgColor="bg-purple-100"
                iconColor="text-purple-600"
                linkText="Try it out"
                delay="0.6s"
            />
        </div>
    </div>
</section>

<!-- Process Section -->
<section class="section bg-white" bind:this={processRef}>
    <div class="container-custom">
        <div class="text-center mb-16">
            <h2 class="slide-in-left heading-2 mb-4">
                Simple process, professional results
            </h2>
            <p class="slide-in-right body-large max-w-2xl mx-auto">
                From initial consultation to launch, I handle everything so you
                can focus on your practice.
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-12">
            <ProcessStep
                number={1}
                title="Discovery Call"
                description="We discuss your practice, goals, and what you need from your website. I'll show you examples and explain the process."
                delay="0.2s"
                {mounted}
            />

            <ProcessStep
                number={2}
                title="Design & Build"
                description="I create your website with your content, branding, and functionality. You'll see progress updates throughout the process."
                delay="0.4s"
                {mounted}
            />

            <ProcessStep
                number={3}
                title="Launch & Support"
                description="Your website goes live with full training on how to manage bookings and content. Ongoing support included."
                delay="0.6s"
                {mounted}
                showConnector={false}
            />
        </div>
    </div>
</section>

<!-- Social Proof / Stats -->
<section class="section-sm bg-blue-600 text-white" bind:this={statsRef}>
    <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div class="fade-in">
                <div class="text-3xl md:text-4xl font-bold mb-2">5+</div>
                <div class="text-blue-100">Years Experience</div>
            </div>
            <div class="fade-in" style="animation-delay: 0.4s;">
                <div class="text-3xl md:text-4xl font-bold mb-2">100%</div>
                <div class="text-blue-100">Client Satisfaction</div>
            </div>
            <div class="fade-in" style="animation-delay: 0.6s;">
                <div class="text-3xl md:text-4xl font-bold mb-2">24h</div>
                <div class="text-blue-100">Average Response</div>
            </div>
        </div>
    </div>
</section>

<!-- Final CTA -->
<section class="section bg-slate-50">
    <div class="container-custom text-center">
        <div class="max-w-3xl mx-auto">
            <h2 class="fade-in heading-2 mb-6">
                Ready to grow your practice online?
            </h2>
            <p class="fade-in body-large mb-8">
                Let's build you a professional website that attracts more
                clients and makes running your practice easier.
            </p>
            <div class="fade-in flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/services" class="btn btn-primary"
                    >See What I Can Build</a
                >
                <a href="/contact" class="btn btn-secondary"
                    >Start Your Project</a
                >
            </div>
        </div>
    </div>
</section>
