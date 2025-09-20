export const ANIMATION_CONFIG = {
  durations: {
    fast: 300,
    normal: 500,
    slow: 800
  },
  delays: {
    none: 0,
    short: 200,
    medium: 400,
    long: 600
  },
  easing: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)', // Tailwind default
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
} as const;

// Helper function for consistent delay calculations
export function getStaggeredDelay(index: number, baseDelay = ANIMATION_CONFIG.delays.short): number {
  return baseDelay * (index + 1);
}

// Standard delay values as CSS custom properties
export const ANIMATION_DELAYS = {
  none: '0ms',
  short: '200ms',
  medium: '400ms',
  long: '600ms',
  stagger1: '200ms',
  stagger2: '400ms',
  stagger3: '600ms',
  stagger4: '800ms',
  stagger5: '1000ms'
} as const;
