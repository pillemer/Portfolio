<!-- Process Step component -->
<script lang="ts">
    import { ANIMATION_DELAYS } from '$lib/utils/animations';
    
    export let number: string;
    export let title: string;
    export let description: string;
    export let delay: keyof typeof ANIMATION_DELAYS = "short";
</script>

<div
    class="slide-in-left text-center"
    style="animation-delay: {ANIMATION_DELAYS[delay]};"
>
    <div class="relative">
        <div
            class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6"
        >
            {number}
        </div>
    </div>
    <h3 class="heading-3 mb-4">{title}</h3>
    <p class="body">
        {description}
    </p>
</div>
