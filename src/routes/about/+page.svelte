<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { siteContent } from "$lib/utils/content";
    import PageWrapper from "$lib/components/PageWrapper.svelte";

    let mounted = false;

    // Intersection Observer for animations
    let intersectionObserver: IntersectionObserver;

    onMount(() => {
        mounted = true;

        // Set up intersection observer for scroll animations
        intersectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { 
                threshold: 0.1,
                rootMargin: "-50px 0px -50px 0px"
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

<PageWrapper
    title={`About Me | ${siteContent.global.siteName}`}
    description={siteContent.about.hero.description}
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
                    <h2 class="heading-2 mb-6">My Approach</h2>
                    <p class="body-regular mb-6 text-slate-600">
                        With a deep understanding of the healthcare sector's unique needs, I create websites that prioritize professionalism, accessibility, and user experience. My goal is to help professionals establish a strong online presence while making it easy for potential clients to learn about their services and get in touch.
                    </p>
                    <p class="body-regular mb-6 text-slate-600">
                        Every website I build is tailored to the specific needs of healthcare professionals, incorporating essential features like secure contact forms, appointment scheduling, and HIPAA-compliant communication channels.
                    </p>
                </div>

                <!-- Skills -->
                <div class="mb-16 fade-in">
                    <h2 class="heading-2 mb-6">Services & Expertise</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="p-6 rounded-xl bg-slate-50">
                            <h3 class="heading-4 mb-3">Website Development</h3>
                            <p class="text-slate-600">Custom, responsive websites built with modern technology and best practices</p>
                        </div>
                        <div class="p-6 rounded-xl bg-slate-50">
                            <h3 class="heading-4 mb-3">Practice Management</h3>
                            <p class="text-slate-600">Integration of scheduling, payment, and client management tools</p>
                        </div>
                        <div class="p-6 rounded-xl bg-slate-50">
                            <h3 class="heading-4 mb-3">SEO & Marketing</h3>
                            <p class="text-slate-600">Optimization for local search and professional online presence</p>
                        </div>
                        <div class="p-6 rounded-xl bg-slate-50">
                            <h3 class="heading-4 mb-3">Ongoing Support</h3>
                            <p class="text-slate-600">Regular updates, maintenance, and technical assistance</p>
                        </div>
                    </div>
                </div>

                <!-- Personal -->
                <div class="fade-in">
                    <h2 class="heading-2 mb-6">Why Work With Me</h2>
                    <p class="body-regular mb-6 text-slate-600">
                        I understand that healthcare professionals need more than just a website – they need a digital solution that helps them focus on what matters most: their patients and clients. That's why I handle all the technical details, ensuring your online presence is professional, secure, and effective.
                    </p>
                    <p class="body-regular text-slate-600">
                        Whether you're starting fresh or looking to improve your existing website, I'm here to help you create a digital presence that reflects your professionalism and helps grow your practice.
                    </p>
                </div>
            </div>
        </div>
    </section>
</PageWrapper>