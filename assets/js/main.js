/* =====================================================================
   なるほ堂 - main.js (skeleton)
   ※ 共通の最小挙動のみ。ヒーロー（鏡）の演出は initHero() に実装してください。
   ===================================================================== */
(function () {
  "use strict";

  /* ---- モバイルナビの開閉 ---- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".global-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });
  }

  /* ---- フッターの年号 ---- */
  function initYear() {
    var el = document.querySelector("[data-current-year]");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---- ヒーロー（鏡＋シャドー）: ここに演出を実装 ----
     対象要素の例: #hero-mirror / #hero-fog / #hero-silhouette
     プロトタイプの rAF + lerp ロジックを移植する場合はこの関数内に。 */
  function initHero() {
    var mirror = document.getElementById("hero-mirror");
    if (!mirror) return;
    /* TODO: マウス/タッチ追従の鏡演出を実装 */
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initYear();
    initHero();
  });
})();
