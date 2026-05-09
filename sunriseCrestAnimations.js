import { animate, createTimeline, stagger } from 'animejs';

let activeAnimation = null;

/* -------------------------------
   PATH UTILS
--------------------------------*/

function getPaths(svg) {
    return Array.from(svg.querySelectorAll('path'));
}

function getCenter(svg) {
    const box = svg.getBBox();
    return {
        x: box.x + box.width / 2,
        y: box.y + box.height / 2
    };
}

/* -------------------------------
   RESET
--------------------------------*/

function reset(paths) {
    if (activeAnimation) activeAnimation.pause();

    paths.forEach(p => {
        p.style.opacity = 0;
        p.style.transform = "none";
        p.style.filter = "none";
        p.style.transformOrigin = "50% 50%";
    });
}

/* -------------------------------
   SMART DELAY (important upgrade)
--------------------------------*/

function distanceDelay(paths, svg) {
    const center = getCenter(svg);

    return (el) => {
        const box = el.getBBox();
        const cx = box.x + box.width / 2;
        const cy = box.y + box.height / 2;

        const dist = Math.hypot(cx - center.x, cy - center.y);
        return dist * 0.8; // controls wave speed
    };
}

/* -------------------------------
   🎬 CINEMATIC (REAL ONE)
--------------------------------*/

function cinematic(paths, svg) {
    const tl = createTimeline();

    // stroke draw setup
    paths.forEach(p => {
        try {
            const len = p.getTotalLength();
            p.style.strokeDasharray = len;
            p.style.strokeDashoffset = len;
            p.style.stroke = "#CCA43D";
            p.style.fill = "transparent";
        } catch { }
    });

    tl.add({
        targets: paths,
        strokeDashoffset: 0,
        opacity: [0, 1],
        duration: 1200,
        easing: 'easeInOutSine',
        delay: stagger(30)
    })
        .add({
            targets: paths,
            fill: "#CCA43D",
            stroke: "transparent",
            duration: 600,
            easing: 'easeOutExpo'
        });

    return tl;
}

/* -------------------------------
   ⚡ FUTURISTIC (clean + directional)
--------------------------------*/

function futuristic(paths, svg) {
    return animate(paths, {
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.85, 1],
        duration: 900,
        easing: 'easeOutExpo',
        delay: distanceDelay(paths, svg)
    });
}

/* -------------------------------
   💎 LUXURY (minimal but perfect)
--------------------------------*/

function luxury(paths) {
    return animate(paths, {
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeOutSine',
        delay: stagger(80)
    });
}

/* -------------------------------
   🧩 ASSEMBLY (controlled, not random)
--------------------------------*/

function assembly(paths, svg) {
    return animate(paths, {
        opacity: [0, 1],
        translateY: [60, 0],
        translateX: (el) => {
            const box = el.getBBox();
            return (box.x % 2 === 0 ? -1 : 1) * 40;
        },
        duration: 1200,
        easing: 'easeOutExpo',
        delay: distanceDelay(paths, svg)
    });
}

/* -------------------------------
   🎯 PRECISION (tight + responsive)
--------------------------------*/

function precision(paths) {
    return animate(paths, {
        scale: [0.6, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutBack(1.8)',
        delay: stagger(20)
    });
}

/* -------------------------------
   MAIN CONTROLLER
--------------------------------*/

export function play(type, svg) {
    const paths = getPaths(svg);
    if (!paths.length) return;

    reset(paths);

    switch (type) {
        case "cinematic":
            activeAnimation = cinematic(paths, svg);
            break;

        case "futuristic":
            activeAnimation = futuristic(paths, svg);
            break;

        case "luxury":
            activeAnimation = luxury(paths);
            break;

        case "assembly":
            activeAnimation = assembly(paths, svg);
            break;

        case "precision":
            activeAnimation = precision(paths);
            break;
    }
}

/* -------------------------------
   HOVER (better feel)
--------------------------------*/

export function initHover(container, svg) {
    const paths = getPaths(svg);

    container.addEventListener('mouseenter', () => {
        animate(paths, {
            scale: 1.04,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });

    container.addEventListener('mouseleave', () => {
        animate(paths, {
            scale: 1,
            duration: 500,
            easing: 'easeOutExpo'
        });
    });
}