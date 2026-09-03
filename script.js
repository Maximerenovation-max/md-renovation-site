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
/* Gestion de la fenêtre cookies M.D Rénovation */
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const accept = document.getElementById("cookie-accept");
  const reject = document.getElementById("cookie-reject");
  const customize = document.getElementById("cookie-customize");

  if (!banner) return;

  if (localStorage.getItem("md-cookie-choice")) {
    banner.style.display = "none";
  } else {
    banner.style.display = "block";
  }

  accept.addEventListener("click", function () {
    localStorage.setItem("md-cookie-choice", "accepted");
    banner.style.display = "none";
  });

  reject.addEventListener("click", function () {
    localStorage.setItem("md-cookie-choice", "rejected");
    banner.style.display = "none";
  });

  customize.addEventListener("click", function () {
    alert("Vous pouvez choisir d’accepter ou de refuser les cookies non essentiels.");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookie-banner");

  if (cookieBanner) {
    document.body.appendChild(cookieBanner);
  }
});
