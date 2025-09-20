import { onMount } from 'svelte';

export interface IntersectionObserverOptions {
    threshold?: number;
    rootMargin?: string;
    removeOnExit?: boolean;
}

export function useIntersectionObserver(
    options: IntersectionObserverOptions = {}
) {
    const {
        threshold = 0.1,
        rootMargin = "-50px 0px -50px 0px",
        removeOnExit = true  // Changed default to true
    } = options;

    let observer: IntersectionObserver | undefined;

    onMount(() => {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else if (removeOnExit) {
                        entry.target.classList.remove("visible");
                    }
                });
            },
            { threshold, rootMargin }
        );

        // Observe all animation elements
        const elementsToObserve = document.querySelectorAll(
            ".fade-in, .slide-in-left, .slide-in-right"
        );
        
        elementsToObserve.forEach((el) => {
            observer!.observe(el);
        });

        return () => {
            observer?.disconnect();
        };
    });
}
