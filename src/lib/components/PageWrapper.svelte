<script lang="ts">
    export let title: string;
    export let description: string;
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
</svelte:head>

<div class="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
    <!-- Subtle Background Pattern -->
    <div class="absolute inset-0 opacity-[0.02]">
        <div
            class="absolute inset-0"
            style="background-image: radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px); background-size: 24px 24px;"
        ></div>
    </div>
    
    <!-- Page Content -->
    <div class="relative z-10">
        <slot />
    </div>
</div>
