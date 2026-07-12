// Année dynamique dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Menu mobile (burger) ----------
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Ferme le menu mobile après un clic sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ---------- Scrollspy : surligne le lien actif selon la section visible ----------
const sections = document.querySelectorAll('section, header');
const links = document.querySelectorAll('.nav-link');

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => spy.observe(sec));

// ---------- Animation "reveal" au défilement ----------
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => revealObserver.observe(el));

// ---------- Bouton retour en haut ----------
const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 500);
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
