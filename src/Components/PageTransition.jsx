import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageTransition = ({ children }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            containerRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
        );

        return () => tl.kill();
    }, []);

    return <div ref={containerRef}>{children}</div>;
};

export default PageTransition;
