(function () {
  'use strict';

  const tabTriggers = document.querySelectorAll('[data-tab]');
  const pages = document.querySelectorAll('.page');
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  function switchTab(tabId) {
    if (!tabId) return;
    const target = document.getElementById(tabId);
    if (!target) return;

    pages.forEach(function (p) {
      p.classList.remove('active');
    });
    document.querySelectorAll('.main-nav .nav-link[data-tab]').forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('data-tab') === tabId);
    });

    target.classList.add('active');
    if (mainNav) mainNav.classList.remove('open');
  }

  tabTriggers.forEach(function (el) {
    el.addEventListener('click', function (e) {
      const tab = el.getAttribute('data-tab');
      if (tab) {
        e.preventDefault();
        switchTab(tab);
      }
    });
  });

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
    });
  }

  if (window.location.hash) {
    const id = window.location.hash.slice(1);
    if (document.getElementById(id)) {
      switchTab(id);
    }
  }
})();
