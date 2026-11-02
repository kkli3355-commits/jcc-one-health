// Floating cyan particles — decorative and independent from the editable text.
(() => {
  const container = document.getElementById('banner-particles');
  if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  for (let i = 0; i < 18; i++) {
    const mote = document.createElement('span');
    mote.className = 'mote';
    const size = 2 + Math.random() * 3;
    mote.style.width = `${size}px`;
    mote.style.height = `${size}px`;
    mote.style.left = `${Math.random() * 100}%`;
    mote.style.top = `${45 + Math.random() * 55}%`;
    mote.style.animationDuration = `${7 + Math.random() * 9}s`;
    mote.style.animationDelay = `${Math.random() * 8}s`;
    mote.style.setProperty('--drift', `${-25 + Math.random() * 50}px`);
    container.appendChild(mote);
  }
  const toggle = document.querySelector('.menu-toggle');
  const header = document.querySelector('.site-header');
  toggle?.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
})();
