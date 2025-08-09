<!-- Process Step component -->
<script lang="ts">
    export let number: number;
    export let title: string;
    export let description: string;
    export let showConnector = true;
    export let delay = "0.2s";
    export let mounted = false;
</script>

<div
    class="slide-in-left text-center"
    style="animation-delay: {delay};"
>
    <div class="relative">
        <div
            class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6"
        >
            {number}
        </div>
        {#if mounted && showConnector}
            <div
                class="hidden md:block absolute top-10 left-full w-full h-0.5 bg-slate-200 -translate-y-1/2"
            ></div>
        {/if}
    </div>
    <h3 class="heading-3 mb-4">{title}</h3>
    <p class="body">
        {description}
    </p>
</div>
