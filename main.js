(() => {
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    root.style.setProperty('--progress', `${max > 0 ? (window.scrollY / max) * 100 : 0}%`);
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      nav.classList.remove('open');
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const reveals = document.querySelectorAll('[data-reveal]');
  if (reduced) {
    reveals.forEach((element) => element.classList.add('is-visible'));
  } else if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -7% 0px' });
    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add('is-visible'));
  }

  const hero = document.querySelector('[data-object-plane]');
  if (hero && !reduced && window.matchMedia('(pointer:fine)').matches) {
    window.addEventListener('pointermove', (event) => {
      const x = (event.clientX / window.innerWidth - .5) * 8;
      const y = (event.clientY / window.innerHeight - .5) * -8;
      hero.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    }, { passive: true });
    document.addEventListener('pointerleave', () => { hero.style.transform = ''; });
  }

  const finishButtons = document.querySelectorAll('.finish-button');
  const finishImages = document.querySelectorAll('.finish-image');
  const finishReadout = document.querySelector('[data-finish-readout]');
  const finishScene = document.querySelector('.finish-scene');
  const finishData = {
    black: { label: 'Black titanium / calibrated low-light finish', light: 'rgba(86,91,105,.2)' },
    white: { label: 'White titanium / high-value material response', light: 'rgba(230,225,216,.20)' },
    blue: { label: 'Blue titanium / optical-violet signal shift', light: 'rgba(111,125,170,.24)' },
    natural: { label: 'Natural titanium / raw alloy baseline', light: 'rgba(179,160,138,.23)' }
  };
  finishButtons.forEach((button) => button.addEventListener('click', () => {
    const choice = button.dataset.finish;
    finishButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    finishImages.forEach((image) => image.classList.toggle('active', image.dataset.finish === choice));
    if (finishReadout) finishReadout.innerHTML = `<span>Finish selected / </span>${finishData[choice].label}`;
    if (finishScene) finishScene.style.setProperty('--finish-light', finishData[choice].light);
  }));

  const cards = document.querySelectorAll('[data-lightbox]');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox img');
  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.classList.remove('menu-open');
  };
  cards.forEach((card) => card.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = card.dataset.lightbox;
    lightboxImage.alt = card.dataset.lightboxAlt || 'Expanded project image';
    lightbox.classList.add('open');
    document.body.classList.add('menu-open');
  }));
  lightbox?.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
  document.querySelector('.lightbox button')?.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox(); });
})();
