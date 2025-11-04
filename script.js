// --- Mobile menu toggle ---
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.classList.toggle('open');
});

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// --- Reveal on scroll animation ---
const revealEls = document.querySelectorAll('.about, .work, .hero, .grid, .card');

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) el.classList.add('visible');
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
