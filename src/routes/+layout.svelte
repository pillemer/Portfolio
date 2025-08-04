<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import Navigation from '$lib/components/Navigation.svelte';
    import Footer from '$lib/components/Footer.svelte';
    
    let scrollY = 0;
    let mounted = false;
    
    onMount(() => {
        mounted = true;
    });
</script>

<svelte:window bind:scrollY />

<div class="app" class:mounted>
    <Navigation {scrollY} currentPath={$page.url.pathname} />
    
    <main>
        <slot />
    </main>
    
    <Footer />
</div>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(:root) {
		/* Color System */
		--primary: #2563eb;
		--primary-dark: #1d4ed8;
		--primary-light: #3b82f6;
		--secondary: #0ea5e9;
		--accent: #06b6d4;
		
		/* Neutral Colors */
		--bg-primary: #ffffff;
		--bg-secondary: #f8fafc;
		--bg-tertiary: #f1f5f9;
		--text-primary: #0f172a;
		--text-secondary: #475569;
		--text-muted: #64748b;
		--border: #e2e8f0;
		--border-light: #f1f5f9;
		
		/* Shadows */
		--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
		--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
		
		/* Spacing System */
		--space-xs: 0.25rem;
		--space-sm: 0.5rem;
		--space-md: 1rem;
		--space-lg: 1.5rem;
		--space-xl: 2rem;
		--space-2xl: 3rem;
		--space-3xl: 4rem;
		--space-4xl: 6rem;
		
		/* Typography */
		--font-size-xs: 0.75rem;
		--font-size-sm: 0.875rem;
		--font-size-base: 1rem;
		--font-size-lg: 1.125rem;
		--font-size-xl: 1.25rem;
		--font-size-2xl: 1.5rem;
		--font-size-3xl: 1.875rem;
		--font-size-4xl: 2.25rem;
		--font-size-5xl: 3rem;
		
		/* Border Radius */
		--radius-sm: 0.375rem;
		--radius-md: 0.5rem;
		--radius-lg: 0.75rem;
		--radius-xl: 1rem;
		
		/* Transitions */
		--transition-fast: 150ms ease;
		--transition-base: 250ms ease;
		--transition-slow: 400ms ease;
	}

	:global(body) {
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		background: var(--bg-primary);
		color: var(--text-primary);
		line-height: 1.6;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-weight: 600;
		line-height: 1.2;
		letter-spacing: -0.025em;
	}

	:global(h1) {
		font-size: var(--font-size-4xl);
		font-weight: 700;
	}

	:global(h2) {
		font-size: var(--font-size-3xl);
	}

	:global(h3) {
		font-size: var(--font-size-2xl);
	}

	:global(p) {
		color: var(--text-secondary);
		margin-bottom: var(--space-md);
	}

	:global(a) {
		color: var(--primary);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	:global(a:hover) {
		color: var(--primary-dark);
	}

	/* Button System */
	:global(.btn) {
		display: inline-flex;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-md) var(--space-xl);
		border-radius: var(--radius-lg);
		font-weight: 500;
		font-size: var(--font-size-base);
		border: none;
		cursor: pointer;
		transition: all var(--transition-base);
		text-decoration: none;
		white-space: nowrap;
	}

	:global(.btn-primary) {
		background: var(--primary);
		color: white;
		box-shadow: var(--shadow-sm);
	}

	:global(.btn-primary:hover) {
		background: var(--primary-dark);
		transform: translateY(-1px);
		box-shadow: var(--shadow-md);
	}

	:global(.btn-secondary) {
		background: var(--bg-primary);
		color: var(--text-primary);
		border: 1px solid var(--border);
		box-shadow: var(--shadow-sm);
	}

	:global(.btn-secondary:hover) {
		background: var(--bg-secondary);
		transform: translateY(-1px);
		box-shadow: var(--shadow-md);
	}

	:global(.btn-ghost) {
		background: transparent;
		color: var(--text-secondary);
		padding: var(--space-sm) var(--space-md);
	}

	:global(.btn-ghost:hover) {
		background: var(--bg-secondary);
		color: var(--text-primary);
	}

	/* Container System */
	:global(.container) {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 var(--space-xl);
	}

	:global(.container-sm) {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 var(--space-xl);
	}

	/* Section Spacing */
	:global(.section) {
		padding: var(--space-4xl) 0;
	}

	:global(.section-sm) {
		padding: var(--space-3xl) 0;
	}

	/* Card System */
	:global(.card) {
		background: var(--bg-primary);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: var(--space-xl);
		box-shadow: var(--shadow-sm);
		transition: all var(--transition-base);
	}

	:global(.card:hover) {
		box-shadow: var(--shadow-md);
		transform: translateY(-2px);
	}

	/* Animation Utilities */
	:global(.fade-in) {
		opacity: 0;
		transform: translateY(20px);
		transition: all var(--transition-slow);
	}

	:global(.fade-in.visible) {
		opacity: 1;
		transform: translateY(0);
	}

	:global(.slide-in-left) {
		opacity: 0;
		transform: translateX(-30px);
		transition: all var(--transition-slow);
	}

	:global(.slide-in-left.visible) {
		opacity: 1;
		transform: translateX(0);
	}

	:global(.slide-in-right) {
		opacity: 0;
		transform: translateX(30px);
		transition: all var(--transition-slow);
	}

	:global(.slide-in-right.visible) {
		opacity: 1;
		transform: translateX(0);
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		:global(.container),
		:global(.container-sm) {
			padding: 0 var(--space-md);
		}
		
		:global(.section) {
			padding: var(--space-3xl) 0;
		}
		
		:global(h1) {
			font-size: var(--font-size-3xl);
		}
		
		:global(h2) {
			font-size: var(--font-size-2xl);
		}
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		opacity: 0;
		transition: opacity var(--transition-slow);
	}

	.app.mounted {
		opacity: 1;
	}

	main {
		flex: 1;
		padding-top: 80px; /* Account for fixed navigation */
	}
</style>
