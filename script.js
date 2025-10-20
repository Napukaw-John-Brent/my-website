
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const overlay = document.getElementById('nav-overlay') || document.querySelector('.nav-overlay');
const navLinks = document.querySelectorAll('.nav a');


function toggleMenu(open) {
  if (!menuToggle || !nav || !overlay) return;
  const isOpen = typeof open === 'boolean' ? open : !nav.classList.contains('active');
  nav.classList.toggle('active', isOpen);
  overlay.classList.toggle('active', isOpen);
  menuToggle.textContent = isOpen ? '✕' : '☰';
  menuToggle.setAttribute('aria-expanded', String(isOpen));
}


if (menuToggle) {
  menuToggle.setAttribute('type', 'button');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.addEventListener('click', () => toggleMenu());

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav && nav.classList.contains('active')) toggleMenu(false);
  });
}

if (overlay) overlay.addEventListener('click', () => toggleMenu(false));

if (navLinks && navLinks.length) {
  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
}


const cards = document.querySelectorAll('.era-card');
if ('IntersectionObserver' in window && cards.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.2 });
  cards.forEach(card => observer.observe(card));
}


const featuredEras = [
  { id: '1800s', title: 'Philippine Reform Movement' },
  { id: 'ww', title: 'World Wars' },
  { id: '1946', title: 'Independence 1946' },
];
featuredEras.forEach(era => console.log(`Featured: ${era.id} — ${era.title}`));


function toggleDarkMode(enable) {
  const body = document.body;
  const isOn = typeof enable === 'boolean' ? enable : !body.classList.contains('dark-mode');
  if (isOn) body.classList.add('dark-mode'); else body.classList.remove('dark-mode');
  console.log('Dark mode:', isOn);
}
// optional example trigger (uncomment to test)
// toggleDarkMode(true);

// Example 3: object with method
const siteInfo = {
  name: 'Chronoverse',
  version: '1.0',
  log() {
    console.info(`${this.name} — v${this.version}`);
  }
};
siteInfo.log();
