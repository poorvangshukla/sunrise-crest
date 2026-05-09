import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP scroll-triggered animations
 * Automatically handles cleanup of ScrollTriggers
 * 
 * @param {Function} animationCallback - Callback function to set up animations
 * @param {Array} dependencies - Dependency array for useEffect
 * @returns {Object} - Returns ref to attach to the element container
 */
const useScrollAnimation = (animationCallback, dependencies = []) => {
    const elementRef = useRef(null);

    useEffect(() => {
        if (!elementRef.current) return;

        // Execute the animation callback
        const cleanupFn = animationCallback(elementRef.current);

        // Cleanup function
        return () => {
            // Kill all ScrollTriggers associated with this component
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars && trigger.vars.trigger === elementRef.current) {
                    trigger.kill();
                }
            });

            // Run custom cleanup if provided
            if (typeof cleanupFn === 'function') {
                cleanupFn();
            }
        };
    }, [animationCallback, ...dependencies]);

    return elementRef;
};

/**
 * Hook for simple fade-in scroll animation
 * 
 * @param {Object} options - Animation options
 * @returns {Object} - Returns ref to attach to element
 */
export const useFadeInScroll = (options = {}) => {
    const {
        duration = 1,
        y = 30,
        start = 'top 80%',
        stagger = 0,
    } = options;

    return useScrollAnimation((element) => {
        const children = element.children;

        gsap.fromTo(
            children.length > 0 ? children : element,
            { opacity: 0, y },
            {
                opacity: 1,
                y: 0,
                duration,
                stagger,
                scrollTrigger: {
                    trigger: element,
                    start,
                },
            }
        );
    });
};

/**
 * Hook for scale animation on scroll
 * 
 * @param {Object} options - Animation options
 * @returns {Object} - Returns ref to attach to element
 */
export const useScaleInScroll = (options = {}) => {
    const {
        duration = 0.8,
        scale = 0.8,
        start = 'top 75%',
        stagger = 0.2,
    } = options;

    return useScrollAnimation((element) => {
        const children = element.children;

        gsap.fromTo(
            children.length > 0 ? children : element,
            { opacity: 0, scale },
            {
                opacity: 1,
                scale: 1,
                duration,
                stagger,
                scrollTrigger: {
                    trigger: element,
                    start,
                },
            }
        );
    });
};

export default useScrollAnimation;
