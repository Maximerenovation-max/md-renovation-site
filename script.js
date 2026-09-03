const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(toggle){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false')});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
/* Animations au défilement M.D Rénovation */
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    "section, .card, .service, .realisation, .gallery-item"
  );

  elements.forEach(function (element) {
    element.classList.add("md-scroll-animate");
  });

  function revealElements() {
    elements.forEach(function (element) {
      const position = element.getBoundingClientRect();

      if (position.top < window.innerHeight * 0.88) {
        element.classList.add("md-visible");
      }
    });
  }

  window.addEventListener("scroll", revealElements);
  window.addEventListener("resize", revealElements);

  revealElements();
});
