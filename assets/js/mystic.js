(function () {
  "use strict";

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.addEventListener("DOMContentLoaded", function () {
    initScrollReveal();
    initRailProgress();
    if (!reduceMotion) {
      initParticles();
      initLantern();
    }
  });

  function initScrollReveal() {
    var targets = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("myst-in-view"); });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("myst-in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach(function (el) { io.observe(el); });
  }

  function initParticles() {
    var fields = document.querySelectorAll("[data-particles]");
    if (!fields.length) return;

    var count = window.innerWidth < 768 ? 12 : 26;
    fields.forEach(function (field) {
      for (var i = 0; i < count; i++) {
        var mote = document.createElement("span");
        mote.className = "myst-mote";
        var size = 2 + Math.random() * 3;
        mote.style.width = size + "px";
        mote.style.height = size + "px";
        mote.style.left = Math.random() * 100 + "%";
        mote.style.top = Math.random() * 100 + "%";
        mote.style.setProperty("--myst-dx", (Math.random() * 60 - 30) + "px");
        mote.style.setProperty("--myst-dy", (Math.random() * 70 - 40) + "px");
        mote.style.animationDuration = (9 + Math.random() * 14) + "s";
        mote.style.animationDelay = (Math.random() * -18) + "s";
        field.appendChild(mote);
      }
    });
  }

  function initLantern() {
    var hero = document.querySelector(".myst-hero");
    var lantern = document.getElementById("myst-lantern");
    if (!hero || !lantern) return;

    var canHover = window.matchMedia &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    var target = { x: 0, y: 0 };
    var current = { x: 0, y: 0 };
    var active = false;

    hero.addEventListener("mousemove", function (e) {
      var rect = hero.getBoundingClientRect();
      target.x = e.clientX - rect.left - rect.width * 0.4;
      target.y = e.clientY - rect.top - rect.height * 0.4;
      if (!active) {
        active = true;
        lantern.classList.add("myst-lantern-active");
      }
    });

    hero.addEventListener("mouseleave", function () {
      active = false;
      lantern.classList.remove("myst-lantern-active");
    });

    function loop() {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      lantern.style.setProperty("--myst-lx", current.x.toFixed(1) + "px");
      lantern.style.setProperty("--myst-ly", current.y.toFixed(1) + "px");
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  function initRailProgress() {
    var rails = Array.prototype.slice.call(document.querySelectorAll(".myst-rail"));
    if (!rails.length) return;

    function update() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      rails.forEach(function (rail) {
        var fill = rail.querySelector(".myst-rail-fill");
        if (!fill) return;
        var rect = rail.getBoundingClientRect();
        var start = vh * 0.85;
        var total = rect.height + vh * 0.3;
        var progressed = start - rect.top;
        var pct = Math.max(0, Math.min(1, progressed / total));
        fill.style.height = (pct * 100) + "%";
      });
    }

    var ticking = false;
    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          update();
          ticking = false;
        });
      },
      { passive: true }
    );
    window.addEventListener("resize", update);
    update();
  }
})();
