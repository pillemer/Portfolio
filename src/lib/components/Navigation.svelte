<!-- Navigation.svelte -->
<script>
	export let scrollY = 0;
	export let currentPath = '/';
	
	$: isScrolled = scrollY > 50;
	
	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/portfolio', label: 'Portfolio' },
		// { href: '/contact', label: 'Contact' }
	];
</script>

<nav class="nav" class:scrolled={isScrolled}>
	<div class="container">
		<div class="nav-content">
			<a href="/" class="logo">
				Ariel Pillemer
			</a>
			
			<div class="nav-links">
				{#each navItems as item}
					<a 
						href={item.href} 
						class="nav-link"
						class:active={currentPath === item.href}
					>
						{item.label}
					</a>
				{/each}
			</div>
			
			<a href="/contact" class="btn btn-primary nav-cta">
				Get in touch
			</a>
		</div>
	</div>
</nav>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background: rgba(135, 128, 128, 0.8);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid transparent;
		transition: all var(--transition-base);
		padding-left: 8px;
		padding-right: 8px;
	}

	.nav.scrolled {
		background: rgba(255, 255, 255, 0.95);
		border-bottom-color: var(--border-light);
		box-shadow: var(--shadow-sm);
	}

	.nav-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 80px;
	}

	.logo {
		font-size: var(--font-size-xl);
		font-weight: 700;
		color: var(--text-primary);
		text-decoration: none;
		letter-spacing: -0.025em;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 6rem;
	}

	.nav-link {
		color: var(--text-secondary);
		font-weight: 450;
		position: relative;
		transition: color var(--transition-fast);
	}

	.nav-link:hover,
	.nav-link.active {
		color: var(--text-primary);
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -8px;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--primary);
		transition: width var(--transition-base);
	}

	.nav-link:hover::after,
	.nav-link.active::after {
		width: 100%;
	}

	.nav-cta {
		padding: var(--space-sm) var(--space-lg);
		font-size: var(--font-size-sm);
	}

	@media (max-width: 768px) {
		.nav-links {
			display: none;
		}
		
		.nav-content {
			height: 70px;
		}
		
		.logo {
			font-size: var(--font-size-lg);
		}
	}
</style>