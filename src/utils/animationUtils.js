/**
 * Utility function to optimize GSAP animations for mobile devices
 * Reduces animation intensity and duration on smaller screens
 */

/**
 * Check if device is mobile based on window width
 * @returns {boolean}
 */
export const isMobile = () => {
    return typeof window !== 'undefined' && window.innerWidth < 768;
};

/**
 * Get optimized animation config for mobile
 * @param {Object} config - Original animation configuration
 * @returns {Object} - Mobile-optimized configuration
 */
export const getMobileOptimizedConfig = (config) => {
    if (!isMobile()) return config;

    return {
        ...config,
        // Reduce duration by 40% on mobile
        duration: (config.duration || 1) * 0.6,
        // Reduce movement distance by 50%
        y: config.y ? config.y * 0.5 : undefined,
        x: config.x ? config.x * 0.5 : undefined,
        // Reduce scale changes
        scale: config.scale ? 1 - ((1 - config.scale) * 0.5) : undefined,
        // Reduce stagger
        stagger: config.stagger ? config.stagger * 0.7 : undefined,
    };
};

/**
 * Debounce function for resize events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function}
 */
export const debounce = (func, wait = 250) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Check if user prefers reduced motion
 * @returns {boolean}
 */
export const prefersReducedMotion = () => {
    if (typeof window === 'undefined') return false;

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get animation config respecting user preferences
 * @param {Object} config - Original animation configuration
 * @returns {Object} - User-preference-aware configuration
 */
export const getAccessibleAnimationConfig = (config) => {
    if (prefersReducedMotion()) {
        return {
            duration: 0.01,
            y: 0,
            x: 0,
            scale: 1,
            stagger: 0,
        };
    }

    return getMobileOptimizedConfig(config);
};
