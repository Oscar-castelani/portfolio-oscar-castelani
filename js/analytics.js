(() => {
  "use strict";

  /* ============================================================================
     Analítica + aviso de cookies (GA4 y Meta Pixel)
     ----------------------------------------------------------------------------
     ⚠️ PLACEHOLDERS — REEMPLAZAR POR LOS IDs REALES ANTES DE ACTIVAR ⚠️
     - GA4_ID:        Google Analytics 4 → Admin → Flujos de datos → "G-XXXXXXXXXX"
     - META_PIXEL_ID: Meta Events Manager → tu píxel → ID numérico

     Comportamiento:
     - La medición NO se carga hasta que el visitante toca "Aceptar" (opt-in).
     - La elección (aceptar/rechazar) se guarda en localStorage.
     - Si los IDs siguen siendo placeholders, NO se muestra el banner ni se
       cargan scripts (para no pedir consentimiento de algo que no corre): solo
       se deja un aviso en la consola. En cuanto pongas IDs reales, el banner y
       la medición se activan solos.
     ========================================================================== */

  const GA4_ID = "G-XXXXXXXXXX";
  const META_PIXEL_ID = "XXXXXXXXXXXXXXX";

  const gaConfigured = /^G-[A-Z0-9]{6,}$/.test(GA4_ID);
  const pixelConfigured = /^\d{6,}$/.test(META_PIXEL_ID);
  const anyConfigured = gaConfigured || pixelConfigured;

  const STORAGE_KEY = "cookie-consent"; // "granted" | "denied"

  /* ---- Carga de GA4 ---- */
  const loadGA = () => {
    if (!gaConfigured) return;
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA4_ID);
  };

  /* ---- Carga de Meta Pixel ---- */
  const loadPixel = () => {
    if (!pixelConfigured) return;
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0";
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", META_PIXEL_ID);
    window.fbq("track", "PageView");
  };

  const enableTracking = () => { loadGA(); loadPixel(); };

  /* ---- Banner de consentimiento (se construye en JS, sin duplicar HTML) ---- */
  const showBanner = () => {
    const prefix = location.pathname.includes("/blog/") ? "../" : "";

    const banner = document.createElement("div");
    banner.className = "cookie-consent";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Aviso de cookies");
    banner.innerHTML =
      '<p class="cookie-consent-text">Uso cookies para medir el tráfico y mejorar el sitio. ' +
      'Podés aceptarlas o rechazarlas. <a href="' + prefix + 'privacidad.html">Más info</a>.</p>' +
      '<div class="cookie-consent-actions">' +
      '<button type="button" class="btn-ghost cookie-reject">Rechazar</button>' +
      '<button type="button" class="btn btn-primary cookie-accept">Aceptar</button>' +
      '</div>';

    document.body.appendChild(banner);
    requestAnimationFrame(() => banner.classList.add("is-visible"));

    const close = () => {
      banner.classList.remove("is-visible");
      setTimeout(() => banner.remove(), 350);
    };

    banner.querySelector(".cookie-accept").addEventListener("click", () => {
      localStorage.setItem(STORAGE_KEY, "granted");
      enableTracking();
      close();
    });
    banner.querySelector(".cookie-reject").addEventListener("click", () => {
      localStorage.setItem(STORAGE_KEY, "denied");
      close();
    });
  };

  /* ---- Arranque ---- */
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "granted") { enableTracking(); return; }
  if (stored === "denied") { return; }

  if (!anyConfigured) {
    console.info(
      "[analytics] GA4/Meta Pixel sin configurar: reemplazá los IDs placeholder en js/analytics.js para activar la medición y el aviso de cookies."
    );
    return;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showBanner);
  } else {
    showBanner();
  }
})();
