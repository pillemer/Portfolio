<!-- Card component -->
<script lang="ts">
    import type { ComponentType } from 'svelte';
    
    export let title: string;
    export let description: string;
    export let icon: ComponentType;
    export let iconBgColor = "bg-blue-100";
    export let iconColor = "text-blue-600";
    export let linkText = "Learn more";
    export let linkHref = "/services";
    export let delay = "0.2s";
</script>

<div
    class="fade-in card card-hover text-center"
    style="animation-delay: {delay};"
>
    <div
        class="w-16 h-16 {iconBgColor} rounded-xl flex items-center justify-center mx-auto mb-6"
    >
        <svelte:component this={icon} className="w-8 h-8 {iconColor}" />
    </div>
    <h3 class="heading-3 mb-4">{title}</h3>
    <p class="body mb-6">
        {description}
    </p>
    <a
        href={linkHref}
        class="text-blue-600 font-medium hover:text-blue-700"
        >{linkText} →</a
    >
</div>
