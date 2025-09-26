<script lang="ts">
    import { page } from '$app/stores';
    import PageWrapper from '$lib/components/PageWrapper.svelte';
    import { spring } from 'svelte/motion';
    import { fly } from 'svelte/transition';
    import { siteContent } from "$lib/utils/content";
    
    // Interactive animation
    let mouseX = 0;
    let mouseY = 0;
    const position = spring({ x: 0, y: 0 }, {
        stiffness: 0.1,
        damping: 0.4
    });
    
    function handleMouseMove(event: MouseEvent) {
        const { clientX, clientY } = event;
        const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
        mouseX = (clientX - rect.left - rect.width / 2) * 0.1;
        mouseY = (clientY - rect.top - rect.height / 2) * 0.1;
        position.set({ x: mouseX, y: mouseY });
    }
</script>

<PageWrapper
    title={siteContent.global.error.title}
    description={siteContent.global.error.description}
>
    <section 
        class="section flex items-center justify-center min-h-[60vh]"
        on:mousemove={handleMouseMove}
        aria-label="Error page interactive area"
    >
        <div class="container-custom">
            <div class="max-w-2xl mx-auto text-center">
                <h1 
                    in:fly={{ y: 20, duration: 800 }} 
                    class="heading-1 mb-4"
                    style="transform: translate3d({$position.x}px, {$position.y}px, 0)"
                >
                    <span class="text-blue-600">{siteContent.global.error.heading}</span>
                </h1>
                <p in:fly={{ y: 20, duration: 800, delay: 200 }} class="heading-3 mb-4">
                    {siteContent.global.error.subheading}
                </p>
                <p in:fly={{ y: 20, duration: 800, delay: 400 }} class="body-large mb-12 text-content-secondary">
                    {siteContent.global.error.message}
                </p>
                {#if $page.error?.message}
                    <p in:fly={{ y: 20, duration: 800, delay: 500 }} class="text-sm text-content-tertiary mb-12">
                        {$page.error.message}
                    </p>
                {/if}
                <div class="relative inline-block">
                    <a 
                        href={siteContent.global.error.cta.href}
                        class="btn btn-primary inline-flex"
                        in:fly={{ y: 20, duration: 800, delay: 600 }}
                    >
                        {siteContent.global.error.cta.text}
                    </a>
                </div>
            </div>
        </div>
    </section>
</PageWrapper>
