// Theme Toggle
(function () {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
    updateIcon(theme);
  }

  function updateIcon(theme) {
    const sunIcon = toggle.querySelector('.icon-sun');
    const moonIcon = toggle.querySelector('.icon-moon');
    if (sunIcon && moonIcon) {
      sunIcon.style.display = theme === 'dark' ? 'none' : 'block';
      moonIcon.style.display = theme === 'dark' ? 'block' : 'none';
    }
  }

  toggle.addEventListener('click', function () {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // Set initial icon state
  const currentTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  updateIcon(currentTheme);
})();

// Mobile Navigation Toggle
(function () {
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
})();
