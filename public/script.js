// Mobile nav toggle
const toggle = document.getElementById('navtoggle');
const navlinks = document.getElementById('navlinks');

toggle.addEventListener('click', () => {
  const isOpen = navlinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});

navlinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navlinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Close mobile nav if the viewport is resized back to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    navlinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Smooth-scroll active state for the pipeline tracker:
// highlights each stage as it scrolls into view instead of being fixed in the markup.
const pipeStages = document.querySelectorAll('.pipe-stage');

if (pipeStages.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.6 }
  );

  pipeStages.forEach(stage => observer.observe(stage));
}
