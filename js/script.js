(() => {
  "use strict";

  /* Navbar: cambia de estilo al hacer scroll */
  const navbar = document.querySelector(".navbar");
  const onScroll = () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Resalta el link activo según la sección visible */
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  const sections = [...navLinks]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((section) => sectionObserver.observe(section));
  }

  /* Menú hamburguesa (mobile) */
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-links");

  if (navToggle && navMenu) {
    const closeMenu = () => {
      navToggle.classList.remove("is-open");
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    };

    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("no-scroll", isOpen);
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  /* Acordeón de preguntas frecuentes */
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      faqItems.forEach((other) => {
        other.classList.remove("is-open");
        other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* Animaciones al hacer scroll (fade in / slide up) */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* Timeline del proceso: la línea conectora se "dibuja" al entrar en pantalla.
     Cubre todas las instancias de .process-steps (Home y páginas de servicio). */
  const processStepsAll = document.querySelectorAll(".process-steps");
  if (processStepsAll.length) {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      processStepsAll.forEach((el) => el.classList.add("is-drawn"));
    } else {
      const lineObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-drawn");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.35 }
      );
      processStepsAll.forEach((el) => lineObserver.observe(el));
    }
  }

  /* Formulario de contacto (Home): envío AJAX a Netlify Forms con feedback de
     éxito/error, sin recargar la página. Netlify procesa cualquier POST que
     incluya el campo `form-name`; por eso enviamos el formulario codificado
     como application/x-www-form-urlencoded hacia la ruta del atributo `action`. */
  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    const statusEl = contactForm.querySelector("[data-form-status]");
    const submitBtn = contactForm.querySelector(".contact-submit");

    const setStatus = (message, type) => {
      if (!statusEl) return;
      statusEl.textContent = message;
      statusEl.classList.remove("is-success", "is-error");
      if (type) statusEl.classList.add(`is-${type}`);
      statusEl.hidden = !message;
    };

    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      /* Validación nativa (el form tiene novalidate: la disparamos a mano) */
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const endpoint = contactForm.getAttribute("action") || "/";

      const originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Enviando...";
      setStatus("");

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(new FormData(contactForm)).toString(),
        });

        if (response.ok) {
          contactForm.reset();
          setStatus(
            "¡Gracias! Tu consulta fue enviada. Te responderé dentro de las próximas 24 horas.",
            "success"
          );
        } else {
          setStatus(
            "Hubo un problema al enviar tu consulta. Probá de nuevo o escribime por WhatsApp.",
            "error"
          );
        }
      } catch (error) {
        setStatus(
          "No se pudo enviar. Revisá tu conexión a internet o escribime por WhatsApp.",
          "error"
        );
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    });
  }

  /* Carrusel de mensajes del Hero (Home): alterna automáticamente entre slides
     y permite navegación manual con flechas. Agregar un tercer/cuarto slide
     solo requiere sumar otro [data-hero-slide] en el HTML; este script no
     necesita cambios. */
  const heroSlidesEl = document.querySelector("[data-hero-slides]");
  if (heroSlidesEl) {
    const heroSlides = [...heroSlidesEl.querySelectorAll("[data-hero-slide]")];
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (heroSlides.length > 1) {
      let activeIndex = Math.max(heroSlides.findIndex((slide) => slide.classList.contains("is-active")), 0);
      let heroTimer;

      const goToSlide = (index) => {
        heroSlides[activeIndex].classList.remove("is-active");
        activeIndex = (index + heroSlides.length) % heroSlides.length;
        heroSlides[activeIndex].classList.add("is-active");
      };

      const showNextSlide = () => goToSlide(activeIndex + 1);
      const showPrevSlide = () => goToSlide(activeIndex - 1);

      const startHeroTimer = () => {
        if (prefersReducedMotion) return;
        heroTimer = setInterval(showNextSlide, 7000);
      };

      const restartHeroTimer = () => {
        clearInterval(heroTimer);
        startHeroTimer();
      };

      startHeroTimer();

      document.addEventListener("visibilitychange", () => {
        clearInterval(heroTimer);
        if (!document.hidden) startHeroTimer();
      });

      const heroPrevBtn = heroSlidesEl.querySelector("[data-hero-prev]");
      const heroNextBtn = heroSlidesEl.querySelector("[data-hero-next]");

      if (heroPrevBtn) {
        heroPrevBtn.addEventListener("click", () => {
          showPrevSlide();
          restartHeroTimer();
        });
      }

      if (heroNextBtn) {
        heroNextBtn.addEventListener("click", () => {
          showNextSlide();
          restartHeroTimer();
        });
      }
    }
  }
})();
