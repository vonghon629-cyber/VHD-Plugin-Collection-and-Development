/* =====================================================
   PluginVault — GSAP + Lenis Cinematic Engine v3.0
   Smooth Scroll · ScrollTrigger · Parallax · Stagger
   Inspired by jungheonlee.com aesthetic
   ===================================================== */

// ==================== Lenis Smooth Scroll ====================
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
});

// Connect Lenis to GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ==================== Cinematic Preloader ====================
(function preloader() {
    const counter = document.querySelector('.preloader-counter');
    const preloaderEl = document.querySelector('.preloader');
    const wipeCols = document.querySelectorAll('.preloader-wipe .wipe-col');
    if (!counter || !preloaderEl) return;

    // Pause scroll during loading
    lenis.stop();

    const count = { val: 0 };
    const tl = gsap.timeline();

    tl.to(count, {
        val: 100,
        duration: 2.2,
        ease: 'power2.inOut',
        roundProps: 'val',
        onUpdate: () => {
            counter.textContent = String(Math.floor(count.val)).padStart(3, '0');
            counter.style.opacity = 0.1 + (count.val / 100) * 0.9;
        }
    })
    .to(counter, {
        scale: 0.4,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.in',
    })
    .to(preloaderEl, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
    }, '-=0.2')
    .to(wipeCols, {
        scaleY: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: 'power4.inOut',
        transformOrigin: 'top',
        onComplete: () => {
            preloaderEl.style.display = 'none';
            document.querySelector('.preloader-wipe').style.display = 'none';
            document.body.classList.add('cursor-ready');
            lenis.start();
            heroEntrance();
        }
    }, '-=0.4');
})();

// ==================== Scroll Progress Bar ====================
const progressBar = document.querySelector('.scroll-progress');
if (progressBar) {
    ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: self => {
            progressBar.style.width = (self.progress * 100) + '%';
        }
    });
}

// ==================== Hero Cinematic Entrance ====================
function heroEntrance() {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.to('.hero-title .line-inner', {
        y: '0%',
        rotateX: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.1,
    })
    .to('.hero-badge', {
        y: 0, opacity: 1, scale: 1,
        duration: 0.9,
    }, '-=1')
    .to('.hero-desc', {
        y: 0, opacity: 1,
        duration: 0.9,
    }, '-=0.6')
    .to('.hero-actions', {
        y: 0, opacity: 1,
        duration: 0.9,
    }, '-=0.6')
    .to('.hero-stats', {
        y: 0, opacity: 1,
        duration: 0.9,
    }, '-=0.6')
    .from('.scroll-indicator', {
        y: 20, opacity: 0,
        duration: 0.7,
    }, '-=0.4');

    // Counter animation
    animateCounters();

    // Morph blob organic floating
    gsap.to('.morph-blob-1', {
        x: 50, y: -40, scale: 1.15, rotation: 60,
        duration: 20, repeat: -1, yoyo: true, ease: 'sine.inOut'
    });
    gsap.to('.morph-blob-2', {
        x: -40, y: 50, scale: 0.85, rotation: -45,
        duration: 25, repeat: -1, yoyo: true, ease: 'sine.inOut'
    });
    gsap.to('.morph-blob-3', {
        x: 35, y: 25, scale: 1.08, rotation: 75,
        duration: 18, repeat: -1, yoyo: true, ease: 'sine.inOut'
    });
}

// ==================== Counter Animation (GSAP) ====================
function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.dataset.target);
        const obj = { val: 0 };
        gsap.to(obj, {
            val: target,
            duration: 2.5,
            ease: 'power2.out',
            roundProps: 'val',
            onUpdate: () => {
                if (target >= 10000) {
                    el.textContent = (obj.val / 1000).toFixed(1).replace('.0', '') + 'K+';
                } else {
                    el.textContent = obj.val.toLocaleString() + '+';
                }
            }
        });
    });
}

// ==================== Hero Parallax on Scroll ====================
gsap.to('.hero-bg-img', {
    yPercent: 30, scale: 1.2,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
    }
});

gsap.to('.hero-content', {
    yPercent: -25, opacity: 0,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: '40% top',
        end: 'bottom top',
        scrub: 1,
    }
});

// Blob parallax
gsap.utils.toArray('.morph-blob').forEach((blob, i) => {
    gsap.to(blob, {
        yPercent: (i + 1) * 30,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
        }
    });
});

// ==================== Section Titles & Tags ====================
gsap.utils.toArray('.section-tag').forEach(tag => {
    gsap.from(tag, {
        y: 30, opacity: 0, duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: tag, start: 'top 88%' }
    });
});

gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        y: 60, opacity: 0, duration: 1.1,
        ease: 'power4.out',
        scrollTrigger: { trigger: title, start: 'top 85%' }
    });
});

gsap.utils.toArray('.section-desc').forEach(desc => {
    gsap.from(desc, {
        y: 30, opacity: 0, duration: 0.9, delay: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: desc, start: 'top 88%' }
    });
});

// ==================== Category Cards — 3D Tilt + ScrollTrigger ====================
gsap.utils.toArray('.category-card').forEach((card, i) => {
    gsap.from(card, {
        y: 100, opacity: 0, rotateX: -12, scale: 0.9,
        duration: 1.1,
        delay: i * 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 90%' }
    });

    // 3D tilt hover
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        gsap.to(card, {
            rotateX: (y - 0.5) * -18,
            rotateY: (x - 0.5) * 18,
            transformPerspective: 800,
            scale: 1.04,
            y: -10,
            duration: 0.4,
            ease: 'power2.out',
        });

        // Move glow
        const glow = card.querySelector('.card-glow');
        if (glow) {
            glow.style.left = `${x * 100 - 100}%`;
            glow.style.top = `${y * 100 - 100}%`;
        }
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotateX: 0, rotateY: 0,
            scale: 1, y: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.6)',
        });
    });
});

// ==================== Plugin Cards — Legendary Entrance ====================
gsap.utils.toArray('.plugins-grid').forEach(grid => {
    const cards = grid.querySelectorAll('.plugin-card');

    // Dramatic stager entrance — each card flies in with rotation
    ScrollTrigger.create({
        trigger: grid,
        start: 'top 88%',
        onEnter: () => {
            gsap.fromTo(cards,
                {
                    y: 80,
                    opacity: 0,
                    scale: 0.88,
                    rotateY: -8,
                    filter: 'blur(4px)',
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    filter: 'blur(0px)',
                    duration: 0.9,
                    stagger: {
                        each: 0.08,
                        from: 'start',
                    },
                    ease: 'power3.out',
                }
            );
        },
        once: true,
    });
});

// ==================== Plugin Cards — 3D Micro-Tilt + Spotlight ====================
document.querySelectorAll('.plugin-card').forEach(card => {
    // Mouse spotlight tracking
    const shine = document.createElement('div');
    shine.style.cssText = `
        position:absolute;inset:0;opacity:0;transition:opacity 0.4s;pointer-events:none;border-radius:inherit;z-index:1;
        background:radial-gradient(350px circle at var(--mx,50%) var(--my,50%),
            rgba(255,255,255,0.04), transparent 60%);
    `;
    card.appendChild(shine);

    // 3D tilt + spotlight
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        // Micro 3D tilt
        gsap.to(card, {
            rotateX: (y - 0.5) * -8,
            rotateY: (x - 0.5) * 8,
            transformPerspective: 1000,
            duration: 0.4,
            ease: 'power2.out',
        });

        // Track mouse for spotlight
        card.style.setProperty('--mx', (x * 100) + '%');
        card.style.setProperty('--my', (y * 100) + '%');
    });

    card.addEventListener('mouseenter', () => {
        shine.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
        shine.style.opacity = '0';
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.6,
            ease: 'power3.out',
        });
    });
});

// ==================== Plugin Card — Particle Burst on Hover ====================
document.querySelectorAll('.plugin-card').forEach(card => {
    let particleTimeout = null;

    card.addEventListener('mouseenter', () => {
        // Create 8 particles
        for (let i = 0; i < 8; i++) {
            const p = document.createElement('span');
            p.className = 'card-particle';
            const size = Math.random() * 4 + 2;
            const angle = (Math.PI * 2 * i) / 8 + (Math.random() - 0.5) * 0.5;
            const dist = 80 + Math.random() * 60;

            p.style.cssText = `
                position:absolute;
                width:${size}px;height:${size}px;
                border-radius:50%;
                pointer-events:none;
                z-index:5;
                left:50%;top:50%;
                background: var(--card-glow, rgba(99,102,241,0.5));
                box-shadow: 0 0 6px var(--card-glow, rgba(99,102,241,0.3));
            `;
            card.appendChild(p);

            gsap.fromTo(p,
                { x: 0, y: 0, opacity: 1, scale: 1 },
                {
                    x: Math.cos(angle) * dist,
                    y: Math.sin(angle) * dist,
                    opacity: 0,
                    scale: 0,
                    duration: 0.8 + Math.random() * 0.4,
                    ease: 'power2.out',
                    onComplete: () => p.remove(),
                }
            );
        }
    });
});

// ==================== Feature Cards ====================
gsap.utils.toArray('.feature-card').forEach((card, i) => {
    gsap.from(card, {
        y: 70, opacity: 0, scale: 0.88,
        duration: 0.9,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 90%' }
    });
});

// ==================== Footer Clip Reveal ====================
ScrollTrigger.create({
    trigger: '.footer',
    start: 'top 95%',
    onEnter: () => {
        gsap.to('.footer', {
            clipPath: 'inset(0 0 0 0)',
            duration: 1.2,
            ease: 'power4.inOut',
        });
    }
});

// ==================== Navbar Auto-Hide ====================
let lastDir = 1;
ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    onUpdate: (self) => {
        if (self.direction !== lastDir) {
            gsap.to('.navbar', {
                y: self.direction === 1 ? -100 : 0,
                duration: 0.4,
                ease: 'power3.out',
            });
            lastDir = self.direction;
        }
    }
});

// ==================== Custom Cursor (GSAP smooth) ====================
(function initCursor() {
    if (window.innerWidth <= 768) return;
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    // Set initial centering offset
    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    gsap.set(ring, { xPercent: -50, yPercent: -50 });

    // Use quickTo for best performance
    const dotX = gsap.quickTo(dot, 'left', { duration: 0.1, ease: 'power2.out' });
    const dotY = gsap.quickTo(dot, 'top', { duration: 0.1, ease: 'power2.out' });
    const ringX = gsap.quickTo(ring, 'left', { duration: 0.35, ease: 'power2.out' });
    const ringY = gsap.quickTo(ring, 'top', { duration: 0.35, ease: 'power2.out' });

    window.addEventListener('mousemove', (e) => {
        dotX(e.clientX);
        dotY(e.clientY);
        ringX(e.clientX);
        ringY(e.clientY);
    });

    const hoverTargets = 'a, button, .plugin-card, .category-card, input';
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(hoverTargets)) {
            gsap.to(dot, { width: 40, height: 40, background: 'rgba(99,102,241,0.15)', duration: 0.3 });
            gsap.to(ring, { width: 60, height: 60, borderColor: 'rgba(99,102,241,0.8)', duration: 0.3 });
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(hoverTargets)) {
            gsap.to(dot, { width: 8, height: 8, background: '#818cf8', duration: 0.3 });
            gsap.to(ring, { width: 40, height: 40, borderColor: 'rgba(99,102,241,0.4)', duration: 0.3 });
        }
    });
})();

// ==================== Spotlight Cursor ====================
const spotlight = document.querySelector('.spotlight');
if (spotlight && window.innerWidth > 768) {
    gsap.set(spotlight, { xPercent: -50, yPercent: -50 });
    const spotX = gsap.quickTo(spotlight, 'left', { duration: 0.8, ease: 'power2.out' });
    const spotY = gsap.quickTo(spotlight, 'top', { duration: 0.8, ease: 'power2.out' });

    window.addEventListener('mousemove', (e) => {
        spotX(e.clientX);
        spotY(e.clientY);
    });
}

// ==================== Magnetic Buttons ====================
document.querySelectorAll('.btn, .search-btn, .back-to-top').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, { x: x * 0.25, y: y * 0.25, duration: 0.3, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
    });
});

// ==================== Smooth Anchor Links ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            lenis.scrollTo(target, { offset: -80, duration: 1.5 });
        }
    });
});

// ==================== Back to Top ====================
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    lenis.on('scroll', (e) => {
        backToTop.classList.toggle('visible', e.animatedScroll > 600);
    });
    backToTop.addEventListener('click', () => {
        lenis.scrollTo(0, { duration: 2 });
    });
}

// ==================== Marquee Speed Boost on Scroll ====================
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
    lenis.on('scroll', (e) => {
        const vel = Math.min(Math.abs(e.velocity) * 3, 20);
        marqueeTrack.style.animationDuration = Math.max(10, 30 - vel) + 's';
    });
}

console.log('%c⚡ GSAP + Lenis Cinematic Engine v3.0 — Loaded', 'color: #a855f7; font-size: 14px; font-weight: bold;');
