(() => {
  "use strict";

  /* Número único de WhatsApp de todo el sitio. Cambiar SOLO este valor
     actualiza automáticamente todos los enlaces de WhatsApp de las páginas
     (botón flotante, CTAs, footer, cotizaciones). Formato internacional sin
     "+", sin espacios ni guiones. Ej. Argentina: 54911XXXXXXXX
     (54 país + 9 celular + código de área sin 0 + número sin 15). */
  const WHATSAPP_NUMBER = "5491133706391";

  document.querySelectorAll("[data-whatsapp-message]").forEach((link) => {
    const message = encodeURIComponent(link.dataset.whatsappMessage);
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  });
})();
