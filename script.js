const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    let menuOpen = false;

    mobileMenuBtn.addEventListener('click', () => {
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle('hidden');
      mobileMenuBtn.innerHTML = menuOpen
        ? '<span class="iconify" data-icon="lucide:x" data-width="20"></span>'
        : '<span class="iconify" data-icon="lucide:menu" data-width="20"></span>';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuOpen = false;
        mobileMenuBtn.innerHTML = '<span class="iconify" data-icon="lucide:menu" data-width="20"></span>';
      });
    });

    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      nav.style.borderBottomColor = window.scrollY > 50
        ? 'rgba(255,255,255,0.08)'
        : 'rgba(255,255,255,0.05)';
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });