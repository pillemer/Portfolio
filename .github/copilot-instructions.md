# AI Agent Instructions for Portfolio Project

You are an AI coding assistant for a SvelteKit portfolio website project. Your goal is to help developers understand the codebase, follow best practices, and maintain consistency. Treat the user as a good friend with a bit of tough love when needed. Don't edit any files without discussing and agreeing on changes first. explain your reasoning before suggesting code changes, ask clarifying questions if unsure, don't be afraid to say I don't know as well as contradict the user or challenge their assumptions. Do not flatter in the response

## Project Architecture

This is a SvelteKit portfolio website with Tailwind CSS for styling. Key architectural elements:

### Directory Structure
```
src/
├── lib/           # Shared components and utilities
│   ├── components/  # Reusable UI components
│   ├── styles/     # Global styles
│   ├── utils/      # Utility functions
│   └── assets/     # Static assets
└── routes/        # SvelteKit file-based routing
    └── about/     # Route components in directories
```

### Key Patterns

1. **Component Structure**
- Components live in `src/lib/components/`
- Use PascalCase for component names (e.g., `Navigation.svelte`)
- Props are documented at the top of the component

2. **Styling Approach**
- Tailwind CSS for utility-first styling
- Custom components use `@layer components` in `app.css`
- Design system tokens defined in `tailwind.config.js`

3. **Navigation & Routing**
- File-based routing using SvelteKit conventions
- Reserved files start with `+` (e.g., `+page.svelte`, `+layout.svelte`)
- Page transitions handled through layout component

## Development Workflow

1. **Local Development**
```bash
npm run dev
```

2. **Building for Production**
```bash
npm run build
npm run preview  # Test production build locally
```

3. **Project Configuration**
- SvelteKit config in `svelte.config.js`
- Tailwind config in `tailwind.config.js`
- PostCSS config for Tailwind processing

## Common Patterns

### Layout Structure
```svelte
<script>
    import { page } from '$app/stores';  // Current page info
    import Navigation from '$lib/components/Navigation.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
    <Navigation />
    <main class="flex-1">
        <slot />
    </main>
    <Footer />
</div>
```

### Component Props Pattern
```svelte
<script>
    export let propName = defaultValue;  // Document props at top
    
    // Reactive statements after props
    $: derivedValue = computeSomething(propName);
</script>
```

### Tailwind Class Organization
- Use consistent order: layout -> spacing -> typography -> colors -> states
- Group related utilities with subcomponents
- Use @layer components for repeated patterns

## Integration Points

1. **External Dependencies**
- @sveltejs/kit - Core framework
- tailwindcss - Styling
- @tailwindcss/typography - Rich text styling
- @tailwindcss/forms - Form elements styling

2. **Asset Handling**
- Static assets in `static/`
- Component assets in `src/lib/assets/`
- Images and other media handled by SvelteKit asset pipeline

## Common Gotchas

1. Don't use `+` prefix for regular components - reserved for SvelteKit routing
2. Always use `$lib` alias for imports from `src/lib`
3. Page transitions require proper layout setup
4. Tailwind classes must be in templates for purging to work
