const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(toggle){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false')});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
/* Animations au défilement M.D Rénovation */
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("section, .card, .service, .realisation, .gallery-item");

  elements.forEach((element) => {
    element.classList.add("md-scroll-animate");
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("md-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  document.querySelectorAll(".md-scroll-animate").forEach((element) => {
    observer.observe(element);
  });
});
