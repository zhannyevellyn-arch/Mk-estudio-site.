(function () {
  'use strict';
  var doc = document.documentElement;
  var MSG = 'Olá! Vim pelo site do MK Studio e gostaria de agendar um horário.';

  // Links de WhatsApp com mensagem pré-preenchida
  document.querySelectorAll('.js-wa').forEach(function (a) {
    a.href = 'https://wa.me/' + a.dataset.phone + '?text=' + encodeURIComponent(MSG);
  });

  // Menu mobile
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('menu');
  function toggleNav(open) {
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('open', open);
  }
  burger.addEventListener('click', function () {
    toggleNav(burger.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') toggleNav(false); });

  // Botão flutuante do WhatsApp (escolha Mari ou Karol)
  var fabBtn = document.querySelector('.fab__btn');
  var fabMenu = document.getElementById('fab-menu');
  function toggleFab(open) {
    fabBtn.setAttribute('aria-expanded', open);
    fabMenu.hidden = !open;
  }
  fabBtn.addEventListener('click', function () {
    toggleFab(fabBtn.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('click', function (e) {
    if (!document.getElementById('fab').contains(e.target)) toggleFab(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { toggleFab(false); toggleNav(false); }
  });

  // Animações suaves ao rolar
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    doc.classList.add('js');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  }
})();
