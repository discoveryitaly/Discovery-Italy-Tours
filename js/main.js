document.addEventListener('DOMContentLoaded', function () {

  // Nav scroll behavior
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  // Fade-up on scroll
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(function (el) { observer.observe(el); });
  }

  // FAQ accordion (details/summary already handles open/close natively)
  // Add smooth animation
  document.querySelectorAll('details').forEach(function (detail) {
    detail.addEventListener('toggle', function () {
      if (detail.open) {
        // Close others
        document.querySelectorAll('details[open]').forEach(function (other) {
          if (other !== detail) other.removeAttribute('open');
        });
      }
    });
  });

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.style.color = 'var(--gold)';
    }
  });

  // Form submission feedback
  document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = 'Message sent! We\'ll be in touch.';
        btn.style.background = 'var(--green)';
        btn.style.color = 'white';
        btn.style.borderColor = 'var(--green)';
        setTimeout(function () {
          btn.textContent = orig;
          btn.style.background = '';
          btn.style.color = '';
          btn.style.borderColor = '';
          form.reset();
        }, 3500);
      }
    });
  });

});
