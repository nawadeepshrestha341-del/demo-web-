// Shared GSAP scroll-motion helpers for AMRAPALI static pages.
// Requires gsap + ScrollTrigger CDN scripts to be loaded before this file.
(function () {
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  function revealOnScroll(selector) {
    var els = document.querySelectorAll(selector);
    if (!els.length) return;
    if (prefersReducedMotion || !window.gsap) return;
    els.forEach(function (el) {
      gsap.from(el, {
        opacity: 0,
        y: 24,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
      });
    });
  }

  function revealGrid(selector) {
    var grid = document.querySelector(selector);
    if (!grid || !grid.children.length) return;
    if (prefersReducedMotion || !window.gsap) return;
    gsap.from(grid.children, {
      opacity: 0,
      scale: 0.92,
      y: 16,
      duration: 0.4,
      stagger: { each: 0.06, from: 'start', grid: 'auto' },
      ease: 'back.out(1.4)',
      scrollTrigger: { trigger: grid, start: 'top 85%' }
    });
  }

  function parallaxLayer(selector) {
    var els = document.querySelectorAll(selector);
    if (!els.length) return;
    if (prefersReducedMotion || !window.gsap) return;
    els.forEach(function (el) {
      gsap.to(el, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: el.closest('section') || el, scrub: true }
      });
    });
  }

  window.AmrapaliMotion = {
    prefersReducedMotion: prefersReducedMotion,
    revealOnScroll: revealOnScroll,
    revealGrid: revealGrid,
    parallaxLayer: parallaxLayer
  };
})();
