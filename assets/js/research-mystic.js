(function () {
  "use strict";

  var section = document.getElementById("research-focus");
  if (!section) return;

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var nodes = Array.prototype.slice.call(section.querySelectorAll(".rf-node"));
  var railFill = document.getElementById("rf-rail-fill");

  function activate(node) {
    if (node.classList.contains("rf-active")) return;
    node.classList.add("rf-active");
    var tw = node.querySelector(".rf-quote-typewriter");
    if (tw && !tw.classList.contains("rf-typed")) {
      tw.classList.add("rf-typed");
      typeWriter(tw);
    }
  }

  function typeWriter(el) {
    var full = el.getAttribute("data-text") || "";
    if (reduceMotion) {
      el.textContent = full;
      return;
    }
    el.textContent = "";
    var i = 0;
    var speed = 28;
    (function step() {
      if (i <= full.length) {
        el.textContent = full.slice(0, i);
        i++;
        setTimeout(step, speed);
      } else {
        el.classList.add("rf-done");
      }
    })();
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) activate(entry.target);
        });
      },
      { threshold: 0.35 }
    );
    nodes.forEach(function (n) { io.observe(n); });
  } else {
    nodes.forEach(activate);
  }

  nodes.forEach(function (n) {
    n.addEventListener("focus", function () { activate(n); });
    n.addEventListener("mouseenter", function () { activate(n); });
  });

  function updateRail() {
    if (!railFill) return;
    var rect = section.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var start = vh * 0.85;
    var total = rect.height + vh * 0.3;
    var progressed = start - rect.top;
    var pct = Math.max(0, Math.min(1, progressed / total));
    railFill.style.height = (pct * 100) + "%";
  }

  var ticking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        updateRail();
        ticking = false;
      });
    },
    { passive: true }
  );
  window.addEventListener("resize", updateRail);
  updateRail();
})();
