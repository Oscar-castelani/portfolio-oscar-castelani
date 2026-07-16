# Documento Maestro del Proyecto — Portfolio Oscar Castelani

> Este documento es el contexto oficial y permanente del proyecto. Cualquier persona o IA que vaya a realizar cambios en el sitio debe leer este archivo completo antes de modificar código, contenido o diseño. El objetivo es garantizar coherencia visual, técnica y de marca a lo largo del tiempo.

**Última actualización:** 2026-07-16
**Repositorio:** `c:\sitio-oscarcastelani` (proyecto estático, sin control de versiones Git inicializado actualmente)

---

## 1. Descripción general del proyecto

### Objetivo del sitio

El sitio es el **portfolio profesional de Oscar Castelani**. Su función es presentar sus servicios, generar confianza, comunicar su propuesta de valor y convertir visitantes en clientes o leads a través de WhatsApp.

No es un blog, no es un e-commerce y no es una plantilla genérica: es una herramienta de ventas y posicionamiento profesional.

### Público objetivo

- Emprendedores y dueños de pequeños negocios.
- PyMEs en crecimiento que necesitan presencia digital.
- Negocios que ya tienen presencia digital pero quieren optimizarla o automatizarla.
- Perfiles no técnicos que buscan un proveedor único de confianza para tecnología, automatización y publicidad.

### Servicios ofrecidos

- Desarrollo Web
- Automatización de Procesos
- Publicidad Online
- Desarrollo de Software a Medida
- Consultoría Digital (Asesorías)
- Optimización de Redes Sociales

### Posicionamiento profesional

Oscar Castelani se posiciona como un **proveedor integral de "ecosistemas digitales"**: no vende servicios sueltos, sino soluciones conectadas entre sí (web + automatización + publicidad + datos) que trabajan en conjunto para hacer crecer un negocio.

### Propuesta de valor

- Un solo interlocutor para estrategia, tecnología y diseño.
- Soluciones a medida, no plantillas genéricas.
- Enfoque orientado a resultados medibles (más clientes, más ventas, más eficiencia).
- Comunicación clara y cercana, sin tecnicismos innecesarios.
- El cliente es dueño de todo lo que se desarrolla (dominio, hosting, herramientas a su nombre).

---

## 2. Identidad de marca

| Elemento | Definición |
|---|---|
| **Nombre de marca** | Oscar Castelani |
| **Concepto de marca** | "Ecosistemas Digitales" |
| **Mensaje principal** | "Conecto estrategia, tecnología y diseño para hacer crecer tu negocio." |
| **Tono de comunicación** | Cercano, directo, profesional y claro. Sin jerga técnica excesiva. Habla en segunda persona ("tu negocio", "vos") para generar cercanía con el público hispanohablante (es_AR). |
| **Personalidad** | Estratégica, moderna, confiable, resolutiva. Combina la mentalidad de un consultor con la ejecución de un desarrollador. |
| **Valores** | Transparencia, orientación a resultados, ownership del cliente sobre sus herramientas, mejora continua, acompañamiento post-entrega. |

### Qué transmite la marca

- Solidez técnica y profesionalismo.
- Modernidad y actualización tecnológica constante.
- Cercanía y confianza (no una agencia impersonal).
- Enfoque práctico y orientado a negocio, no solo a estética.

### Qué NO debe transmitir

- Improvisación o falta de estructura.
- Estética "amateur" o de plantilla gratuita.
- Discurso agresivo de venta o urgencia artificial.
- Complejidad técnica innecesaria de cara al cliente.
- Saturación visual o exceso de información en pantalla.

---

## 3. Identidad visual

### Paleta de colores

Todos los colores están centralizados como variables en la hoja de estilos (`css/styles.css`). **No deben crearse nuevos colores fuera de esta paleta.**

| Rol | Variable | HEX / Valor | Uso |
|---|---|---|---|
| Fondo principal | `--bg` | `#0a0a0a` | Fondo general del sitio (negro profundo) |
| Fondo secundario | `--bg-soft` | `#0d0d0f` | Fondo de secciones alternas (Servicios, FAQ) para generar contraste sutil de franjas |
| Fondo de cards | `--surface` | `#141416` | Cards de servicios, planes, FAQ, beneficios, collage |
| Fondo de cards (hover) | `--surface-hover` | `#191a1d` | Estado hover de cards y burbuja de chat entrante |
| Color de bordes | `--border` | `#232326` | Bordes de cards, separadores, líneas del footer |
| Borde hover (acento) | `--border-hover` | `rgba(255, 106, 43, 0.45)` | Borde naranja translúcido al pasar el mouse sobre cards, botones ghost, links |
| Texto principal | `--text-primary` | `#ffffff` | Títulos (h1–h4) y textos destacados |
| Texto secundario | `--text-secondary` | `#a3a3a8` | Texto de párrafo por defecto (body) |
| Texto atenuado | `--text-muted` | `#6f6f76` | Texto de menor jerarquía (footer bottom, detalles pequeños) |
| **Color principal / acento** | `--orange` | `#ff6a2b` | Color de marca: eyebrows, íconos, links activos, elementos destacados |
| Color acento (hover/oscuro) | `--orange-dark` | `#e2551b` | Hover de botones primarios |
| Color acento suave | `--orange-soft` | `rgba(255, 106, 43, 0.12)` | Fondos suaves detrás de íconos, tags, badges |
| Botón primario (fondo) | `--orange` sobre texto `#0a0a0a` | `#ff6a2b` / `#0a0a0a` | Todos los botones `.btn-primary` |
| WhatsApp (color de marca externa) | — | `#25d366` | Exclusivo del botón flotante de WhatsApp |
| Fondo de bloques destacados del Blog | `--callout-bg` | `#ffffff` | Excepción intencional a la paleta oscura: quote, tip, error común, destacado y card informativa dentro de los artículos del Blog (`.callout*`, `.article-body .service-card`) |
| Texto sobre bloques destacados del Blog | `--callout-text` / `--callout-text-soft` | `#111111` / `#33333a` | Texto principal y de párrafo dentro de esos mismos bloques claros |

**Regla clave:** el naranja (`#ff6a2b`) es el único color de acento del sitio. No se debe introducir un segundo color de acento (verde, azul, violeta, etc.) salvo el verde oficial de WhatsApp, reservado exclusivamente para ese componente. **Única excepción a "fondo siempre oscuro":** los bloques destacados del Blog (`--callout-bg`) usan fondo blanco a propósito, para funcionar como pausas visuales de alto contraste durante la lectura; el naranja ahí se usa solo como acento puntual (barra, borde, ícono), nunca como relleno. No extender el fondo claro a ningún otro componente del sitio sin que el usuario lo pida explícitamente.

---

### Tipografía

| Aspecto | Valor |
|---|---|
| Fuente principal | Pila de fuentes del sistema: `"Segoe UI", "Inter", system-ui, -apple-system, sans-serif` |
| Fuente externa/web font | No se carga ninguna (no hay Google Fonts ni fuentes propias). Esto es intencional: prioriza velocidad de carga. |
| Peso de títulos (h1–h4) | 700 (bold) |
| Peso de texto de apoyo destacado (eyebrow, botones, links) | 600–700 |
| Peso de párrafo | Normal (400), heredado del navegador |
| Interlineado (line-height) | 1.6 en el cuerpo del texto; 1.2 en títulos |

#### Jerarquía de títulos

| Elemento | Tamaño aproximado | Contexto |
|---|---|---|
| H1 (Hero de Home) | Fluido entre ~2.2rem y 3.4rem según ancho de pantalla | Hero principal |
| H1 (Hero "Sobre mí") | Fluido entre ~2.1rem y 3rem | Encabezado de página Sobre mí |
| H1 (encabezado interno, ej. Planes) | Fluido entre ~2rem y 2.8rem | Páginas internas tipo `page-header` |
| H2 (encabezado de sección) | Fluido entre ~1.8rem y 2.5rem | Todos los `section-head` del sitio |
| H3 (títulos de card) | ~1.05rem–1.3rem según componente | Cards de servicios, planes, proceso |

#### Jerarquía de textos

| Elemento | Tamaño aproximado | Uso |
|---|---|---|
| Eyebrow (etiqueta pequeña sobre título) | 0.8rem, mayúsculas, letter-spacing amplio | Antecede a cada H2 de sección |
| Lead / bajada de sección | ~1.05rem | Texto introductorio bajo el H1 o H2 |
| Texto de card | ~0.88rem–0.94rem | Descripciones dentro de cards |
| Texto pequeño / legal | ~0.7rem–0.85rem | Footer bottom, tags, captions de galería |

**Regla:** el tamaño de fuente siempre usa `clamp()` (fluido) para títulos principales, evitando saltos bruscos entre breakpoints. No introducir tamaños fijos en píxeles para títulos.

---

### Espaciado

| Aspecto | Valor | Notas |
|---|---|---|
| Padding vertical estándar de sección | 96px (arriba y abajo) | Se reduce a 72px en mobile (≤640px) |
| Ancho máximo del contenido | 1180px | Variable de contenedor central, con padding lateral de 24px |
| Separación entre elementos de grillas (cards) | 20px–32px según componente | Servicios: 24px · Beneficios: 20px · Proceso: 32px · Planes: 28px |
| Separación entre título de sección y contenido | 56px | Estándar del `.section-head` |
| Padding interno de cards | 22px–36px según tipo de card | Cards de servicios y planes usan más padding que las de beneficios |
| Border radius pequeño | 10px | Íconos, badges |
| Border radius mediano | 16px | Cards de FAQ, beneficios, galería |
| Border radius grande | 24px | Cards de servicios, planes, collage, CTA box |
| Border radius de botones | 999px (píldora completa) | Todos los botones y tags |
| Sombras | Sutiles, siempre en tono naranja translúcido o negro suave | Ej.: sombra del botón primario, sombra de card destacada de planes, sombra del laptop mockup |
| Transición estándar | 0.35s con curva de aceleración suave (`cubic-bezier(0.22, 1, 0.36, 1)`) | Se usa en casi todas las animaciones de hover y estado |

**Regla de espaciado:** el sitio prioriza el espacio en blanco. Nunca se deben pegar componentes entre sí ni reducir el padding de sección por debajo de lo definido en los breakpoints existentes.

---

## 4. Componentes reutilizables

| Componente | Objetivo | Dónde se utiliza | Variantes | Comportamiento / Animación |
|---|---|---|---|---|
| **Navbar** | Navegación principal y branding | Todas las páginas | Estado normal (transparente) y estado "scrolled" (fondo oscuro con blur) | Cambia de fondo/altura al hacer scroll; en mobile se convierte en overlay de pantalla completa con botón hamburguesa animado (3 líneas → X) |
| **Hero** | Presentar la propuesta de valor principal, minimalista y sin distracciones | Home (`index.html`) | El Home usa un **carrusel de 3 slides** (`.hero-slides` / `.hero-slide[data-hero-slide]`) que alterna automáticamente cada 7s: (1) Desarrollo Web — laptop con texto de estrategia; (2) Automatización y Publicidad — smartphone con carrito de ecommerce, imagen a la izquierda; (3) Automatización de Procesos — laptop con dashboard de flujo de automatización, texto a la izquierda. Cada slide es solo H1 + una ilustración, sin lead ni CTA propios. Sobre mí mantiene la versión estática de un solo mensaje (collage tecnológico + lead) | Fondo con degradados radiales sutiles en naranja; el H1 del primer slide entra con `.reveal`; los slides del carrusel alternan con una transición orquestada propia (ver sección 6) |
| **Carrusel del Hero (`.hero-slides`)** | Rotar automáticamente entre varios mensajes principales del Home sin cambiar la altura del Hero, con navegación manual opcional | Home, dentro de `.hero .container` | Todos los `.hero-slide` comparten la misma celda de grid (`grid-area: 1/1`), por eso la altura nunca salta al cambiar de slide. Estructura idéntica por slide: `.hero-copy` (H1) + `.hero-visual` (ilustración); los slides 2 y 3 alternan el orden en el HTML (visual primero o texto primero) para variar qué lado ocupa la imagen. Slide activo marcado con `.is-active`. Dos flechas (`.hero-nav--prev` / `.hero-nav--next`, `[data-hero-prev]` / `[data-hero-next]`) permiten navegar manualmente: en desktop viven dentro de un gutter horizontal reservado en `.hero-slides` (`padding-inline: 64px`) para no superponerse nunca al H1 ni a la ilustración, centradas verticalmente; en mobile/tablet (`≤1024px`, layout de una columna) el gutter se retira y las flechas bajan por debajo de todo el contenido del slide (dentro del `padding-bottom` existente del Hero) para no tapar nada | La transición anima `.hero-copy` y `.hero-visual` por separado (no el slide completo): entrada orquestada de 0.56s (`--ease`) con la ilustración 90ms detrás del texto; salida rápida de 0.32s sin stagger. JS (`js/script.js`) usa un `goToSlide(index)` genérico reutilizado por el timer y las flechas — agregar un 4to slide es copiar el bloque HTML, sin tocar CSS/JS. Un click en una flecha reinicia el temporizador de 7s. Pausa con la pestaña oculta (`visibilitychange`); con `prefers-reduced-motion` se mantiene un fade de opacidad corto (0.2s) sin desplazamiento ni stagger |
| **Dashboard de automatización (`.flow-content`)** | Ilustrar el flujo de datos entre apps en el 3er Hero, con estética propia (no calca n8n/Make) | Home, dentro de `.laptop-screen` del slide 3 | Reutiliza el marco `.laptop` / `.screen-nav` / `.tag` / `.glow-line` del primer Hero; solo el contenido interno (`.flow-content`) es nuevo | `.flow-node` (WhatsApp, Gmail, Shopify, HubSpot, Google Sheets) conectados por `.flow-branch` (líneas verticales); cada nodo tiene un `.flow-dot` (ícono abstracto) y un `.flow-status` (punto naranja con glow, indicador de "conexión activa"); el nodo disparador (WhatsApp) usa `.flow-node--trigger` con el dot en naranja. Sin animación propia — hereda el crossfade orquestado del carrusel |
| **Cards de servicios** | Resumir cada servicio ofrecido | Home (grilla de 6) | Con o sin link "Ver más" hacia página de detalle | **Actualizado 2026-07-16: las cards del Home ya NO llevan ícono** — el contenido arranca directamente con el título (estructura Título → Descripción → "Ver más"), para una estética más limpia y mayor jerarquía tipográfica. El título se agranda ~13% solo en el Home vía `.services .service-card h3` (1.15rem → 1.3rem), scopeado para no afectar `.service-card` de otras páginas. **Ojo:** la clase `.service-icon` y su tile duotono siguen usándose en otras páginas (platform-cards de servicios, cards informativas del Blog) — no removerla del CSS. Hover: se elevan (`translateY`), cambia borde a color de acento y la flecha del link se desplaza (el hover del ícono ya no aplica en el Home) |
| **Cards de precios (planes)** | Presentar los 3 planes de Desarrollo Web | Página `desarrollo-web.html` | Estándar y "destacado" (Sitio Profesional, con borde naranja y sombra propia) | Hover: elevación; la card destacada se eleva más y en mobile pasa a mostrarse primero |
| **Botones** | Llamados a la acción | Todas las páginas | `btn-primary` (relleno naranja), `btn-ghost` (texto + ícono circular con borde) | Hover: elevación, cambio de color, desplazamiento del ícono interno |
| **Cards informativas (beneficios)** | Listar ventajas de trabajar con Oscar | Sobre mí, sección "¿Por qué trabajar conmigo?" | Grilla de 8 ítems con ícono de check | Hover: leve elevación y cambio de borde |
| **Timeline / Proceso** | Explicar la metodología de trabajo en pasos numerados | Home ("Cómo trabajo") y Sobre mí ("Mi forma de trabajar") | 4 pasos con numeración y línea punteada conectora | Los íconos de paso están sobre la línea (z-index); en mobile la línea desaparece y los pasos se apilan |
| **FAQ (acordeón)** | Resolver dudas frecuentes sin saturar la pantalla | Home | Un único ítem abierto a la vez | Se abre/cierra con animación de altura (grid-template-rows), el ícono "+" rota a "×" |
| **CTA final** | Cierre de página con llamado a la acción fuerte | Sobre mí (antes del footer) y cada artículo del Blog (antes del footer) | Título + texto + botón hacia WhatsApp (copy propio por página) | Card con degradado sutil y resplandor circular decorativo en la esquina |
| **Formulario de contacto** | CTA principal del sitio: convertir visitantes en leads por correo electrónico | Home, justo antes del footer | Columna de beneficios + botón secundario a WhatsApp (izquierda) y formulario (derecha); en mobile se apila a una columna | Fade-in al entrar en pantalla; focus naranja con resplandor suave en los campos; estructura preparada para conectar a futuro con EmailJS/Formspree/backend propio (sin lógica de envío real todavía) |
| **Footer** | Navegación secundaria, redes y cierre legal | Todas las páginas, incluido el Blog | Igual en todas las páginas (rutas con `../` dentro de `blog/`) | Links cambian a color naranja en hover; íconos sociales se elevan levemente |
| **Botón flotante de WhatsApp (`.whatsapp-float`)** | Contacto directo inmediato desde cualquier punto del sitio | Componente global: presente en **las 8 páginas** (Home, Sobre mí, Desarrollo Web, índice del Blog y los 4 artículos). Es la misma estructura copiada en cada archivo (el sitio no tiene un sistema de includes/plantillas) | Posición fija, esquina inferior derecha (`right/bottom: 24px` desktop, `16px` mobile, respetando `env(safe-area-inset-bottom)`), ~58px de diámetro en desktop y ~52px en mobile, ícono oficial de WhatsApp sobre verde de marca (`#25d366`), con etiqueta "¿Hablamos?" visible solo en desktop | Hover: elevación + escala leve; `:focus-visible` con anillo naranja para navegación por teclado; sin animaciones de pulso. Mensaje precargado unificado en las 8 instancias: "Hola Oscar, estuve viendo tu sitio y quiero hacerte una consulta sobre mi proyecto." (vía `data-whatsapp-message` + `js/whatsapp.js`) |
| **Carrusel de tecnologías (marquee)** | Comunicar el stack tecnológico de forma dinámica, con logos oficiales | Sobre mí, entre "¿Por qué trabajar conmigo?" y el CTA final | Fila única, tarjetas sutiles por logo (fondo `--surface`, borde, radius) | Loop infinito de derecha a izquierda sin cortes; se pausa al pasar el mouse; cada logo escala levemente en hover |
| **Collage tecnológico (CSS puro)** | Representar visualmente "tecnología" sin usar fotos | Sobre mí, junto al hero | Tiles de código, gráfico de barras, chat y navegador, todos ilustrados con CSS/SVG | Cada tile se eleva levemente en hover |
| **Card de publicación (`.post-card`)** | Componente único y reutilizable para representar cualquier entrada del Blog | Grilla de `blog/index.html` (`.blog-grid`) y toda sección "Artículos relacionados" | Thumbnail (`.post-thumb`): imagen real (`<img>`, `assets/blog/<archivo>`) si el artículo tiene una asignada, o ícono ilustrado en CSS/SVG por categoría como *fallback*; badge de categoría (`.plan-tag` reutilizado), tiempo de lectura y fecha, título, resumen recortado a 3 líneas, link "Leer artículo" | Hover: elevación + cambio de borde (igual que `.service-card`); el thumbnail (imagen o ícono) hace zoom leve; lleva `data-category` listo para un futuro filtro. Imagen con `loading="lazy"` |
| **Breadcrumbs** | Ubicar al usuario dentro de la jerarquía del sitio | Encabezado de cada artículo del Blog | Inicio / Blog / Artículo | Enlaces cambian a naranja en hover; también se emite como `BreadcrumbList` (JSON-LD) para SEO |
| **Imagen destacada de artículo (`.article-featured`)** | Presentar la imagen principal del artículo (o, si todavía no tiene una asignada, una ilustración CSS/SVG ligada a la categoría como *fallback*) | Encabezado de cada artículo del Blog | Imagen real (`<img>`, `object-fit: cover`, sin `lazy loading` por ser contenido above-the-fold) o, en su ausencia, un ícono temático grande sobre fondo con patrón diagonal sutil (mismo patrón que `.gallery-tile`) | Estática, sin animación propia (mantiene foco en el contenido) |
| **Componentes de contenido de artículo (`.callout`)** | Destacar ideas clave sin caer en muros de texto; funcionan como "pausas visuales" de alto contraste durante la lectura | Cuerpo de cualquier artículo del Blog (`.article-body`) | Variantes: `--quote` (cita), `--tip` (consejo), `--warning` (error común), `--highlight` (frase destacada), `--conclusion` (cierre); además `.icon-list` (lista con íconos, reutiliza `.benefit-icon`) y `.service-card` reutilizado como card informativa dentro del texto (con fondo claro solo en ese contexto, vía `.article-body .service-card`) | Fondo claro (`--callout-bg: #fff`) y texto oscuro (`--callout-text`/`--callout-text-soft`) — a propósito, es la única familia de componentes del sitio con fondo claro, para contrastar con el resto de la página oscura. El naranja se usa solo como acento (barra izquierda en la cita, borde superior en el destacado, ícono en tip/warning), nunca como relleno. Sin animación propia; heredan el `reveal` del contenedor si se les agrega la clase |
| **Artículos relacionados** | Retener al lector dentro del Blog cruzando publicaciones entre sí | Cierre de cada artículo del Blog | Reutiliza `.blog-grid` + `.post-card` con el/los otro/s artículo/s ya publicados; si en algún momento hay un único artículo, se usa `.related-posts-empty` (card con borde punteado y mensaje) como estado vacío en su lugar | — |

---

## 5. Reglas de diseño

Estas reglas rigen cualquier decisión de UX/UI dentro del proyecto:

- No saturar la pantalla: cada sección tiene un único mensaje central.
- Usar mucho espacio en blanco entre bloques y dentro de las cards.
- Priorizar la lectura rápida: frases cortas, sin párrafos extensos.
- No utilizar párrafos largos de más de 2-3 líneas en ningún bloque de contenido.
- Organizar la información siempre en cards, nunca en bloques de texto corrido cuando se listan varios ítems.
- Mantener una jerarquía visual clara: eyebrow → H2 → lead → contenido.
- Usar íconos (SVG en línea) para reforzar contenido, nunca como decoración vacía.
- Utilizar representaciones visuales de tecnología (código, gráficos, chat, navegador) en lugar de fotografías genéricas de stock.
- Evitar bloques enormes de texto: si un contenido crece demasiado, dividirlo en cards o pasos.
- Todo el diseño debe verse moderno y actual, evitando tendencias que envejezcan rápido.
- El diseño debe sentirse premium: cuidado en el detalle, consistencia y sutileza, no elementos "gratuitos" o genéricos.
- No utilizar gradientes exagerados ni saturados; los degradados existentes son sutiles y radiales, casi imperceptibles.
- No utilizar colores fluorescentes ni fuera de la paleta definida en la sección 3.
- No romper la coherencia del sitio: todo componente nuevo debe reutilizar los mismos colores, radios, sombras y transiciones ya definidos.

---

## 6. Animaciones

| Animación | Dónde se aplica | Descripción | Duración / Velocidad | Librería |
|---|---|---|---|---|
| Reveal on scroll (fade + slide up) | Prácticamente todos los bloques de contenido (clase reveal) | Los elementos aparecen con opacidad 0 y un leve desplazamiento vertical, y se revelan al entrar en el viewport | 0.7s, con posibilidad de retraso escalonado (hasta 5 niveles de delay, de 0.08s a 0.4s) para efecto cascada en grillas | Ninguna (IntersectionObserver nativo del navegador) |
| Carrusel del Hero (crossfade entre slides) | Home, sección Hero | Cada 7s alterna al siguiente `.hero-slide`: el saliente y el entrante cruzan opacidad + 12px de desplazamiento vertical simultáneamente | 0.9s, curva `--ease` (misma curva fuerte del resto del sitio) | Nativo (`setInterval` + toggle de clase `.is-active`; se pausa con la pestaña oculta y se detiene por completo con `prefers-reduced-motion`) |
| Cambio de navbar al hacer scroll | Navbar, todas las páginas | Pasa de transparente a fondo oscuro semitransparente con desenfoque (blur) y reduce ligeramente su altura | Transición estándar (0.35s) | Nativo (scroll listener + clases CSS) |
| Menú mobile (hamburguesa) | Navbar en mobile | El botón de 3 líneas se transforma en una X; el menú entra deslizando desde la derecha a pantalla completa | Transición estándar (0.35s) | Nativo |
| Hover de cards (servicios, beneficios, planes, collage) | Todas las cards del sitio | Elevación sutil (`translateY`), cambio de color de borde a naranja translúcido, a veces leve rotación o escala del ícono interno | Transición estándar (0.35s) | Nativo (CSS transitions) |
| Hover de botones | `.btn-primary`, `.btn-ghost` | Elevación, oscurecimiento/cambio de color de fondo, desplazamiento del ícono interno hacia la derecha | Transición estándar (0.35s) | Nativo |
| Acordeón de FAQ | Sección FAQ (Home) | Expansión/colapso de la respuesta mediante animación de altura (grid-template-rows de 0fr a 1fr); el ícono "+" rota 180° | Transición estándar (0.35s) | Nativo (JavaScript vanilla controla la clase, CSS controla la animación) |
| Carrusel de tecnologías (marquee) | Sobre mí | Desplazamiento horizontal infinito de logos en una única fila, de derecha a izquierda, sin cortes gracias a la duplicación del contenido | 34 segundos por ciclo, velocidad lineal y constante | Nativo (CSS @keyframes) |
| Pausa de marquee en hover | Carrusel de tecnologías | Al pasar el mouse sobre el carrusel, se detiene por completo | Instantáneo | Nativo |
| Focus de campos de formulario | Formulario de contacto (Home) | El borde del campo pasa a naranja y aparece un resplandor sutil (box-shadow) alrededor | Transición estándar (0.35s) | Nativo |
| Botón flotante de WhatsApp | Todas las páginas del sitio | Se eleva y escala levemente en hover; anillo naranja en `:focus-visible` | Transición estándar (0.35s) | Nativo |
| Respeto a accesibilidad de movimiento | Todo el sitio | Si el usuario tiene activada la preferencia de "reducir movimiento" del sistema operativo, se desactivan las animaciones de reveal y de marquee | — | Media query `prefers-reduced-motion` |
| Feedback de presión (`:active`) | Todo botón/link interactivo: `.btn`, `.btn-ghost`, `.service-link`, `.back-link`, `.faq-question`, `.whatsapp-float`, `.nav-toggle` | Ligera reducción de escala (`scale(0.97)`) al presionar, confirmando que el click/tap fue "escuchado" | 140ms, `ease-out` (variable `--transition-press`) | Nativo (CSS transitions) |
| Focus visible unificado | Todo elemento `<a>`/`<button>` del sitio (navegación, botones, enlaces, FAQ, CTA, WhatsApp float) | Anillo naranja de marca (`outline: 2px solid var(--orange)`, `outline-offset: 3px`) solo con teclado/`:focus-visible`; sin outline al hacer click con mouse | Instantáneo | Nativo (CSS, reglas globales `a:focus-visible, button:focus-visible`) |

**No se utiliza ninguna librería externa de animación** (no GSAP, no AOS, no Framer Motion). Todo el movimiento del sitio se logra con CSS puro (transiciones, keyframes) y JavaScript vanilla mínimo (IntersectionObserver y manejo de clases).

### Reglas del sistema de interacción (auditoría de animaciones, 2026-07-11)

- **Todos los `:hover` del sitio están encapsulados en `@media (hover: hover) and (pointer: fine)`.** En dispositivos táctiles no hay estados hover "pegados" tras un tap. Cualquier hover nuevo que se agregue en el futuro debe seguir este mismo patrón.
- **Dos variables de transición adicionales** conviven con `--transition` (0.35s, curva fuerte, para entradas/salidas): `--transition-press` (140ms `ease-out`, para `:active`) y `--transition-color` (0.35s `ease`, para hover de color puro en `.nav-links a`, `.footer-links a` y `.breadcrumbs a`). No usar `--transition` para nuevos casos de color-only hover ni para `:active`.
- **Propiedades de layout retiradas de las transiciones** por rendimiento: `height` del navbar (el cambio de 76px→68px ahora salta sin animar), `width` del subrayado de nav-links (ahora `transform: scaleX()` con `transform-origin: left`), `padding` del WhatsApp float. El truco de `grid-template-rows` del acordeón de FAQ se mantiene intencionalmente (es la técnica aceptada de la industria para animar "auto height" en CSS puro, sin alternativa GPU-only real).
- **El hero del Home ahora usa `.reveal`** en el H1 y el lead, igual que el resto de las páginas — antes era la única entrada sin fade-in del sitio.

### Pase de dirección de arte + motion (2026-07-16)

CSS puro + JS vanilla, sin librerías externas (se mantuvo la regla del proyecto; se descartó GSAP por decisión del usuario). Icon tiles + duotono aplicados a la Home y **propagados a todo el sitio** (2026-07-16).

- **Icon tiles premium (`.service-icon` / `.step-icon`):** los íconos de servicios y del proceso dejaron de ser un glifo plano en un cuadrado naranja. Ahora son *tiles* de 60px con gradiente (`surface-hover → bg`), glow radial naranja, textura diagonal (`::before`) y borde; radius-md para servicios, círculo con anillo naranja para el proceso. El cambio es **global** (ambas clases viven en `styles.css`), así que todas las páginas ya muestran el tile nuevo, pero los **íconos duotono solo están en la Home** por ahora.
- **Íconos duotono (`.ic-fill`):** en la Home, cada ícono combina una masa rellena tenue (`.ic-fill`, `fill: currentColor; opacity: .18`) con trazos/acentos a naranja pleno. Monocromo naranja (respeta la paleta), pero con profundidad. Los 6 servicios y 4 pasos de la Home son duotono con glifos rediseñados (megáfono, bloques modulares, bombilla, nodos en crecimiento, etc.).
- **Propagación duotono (`.ic-mass`):** para el resto de las páginas se usó una segunda utilidad, `.ic-mass` (`fill: currentColor; fill-opacity: .16`, **conserva el trazo**), que rellena translúcida la forma principal **cerrada** del ícono existente sin redibujarlo ni duplicarlo. Se aplicó con un script solo a formas cerradas seguras (`circle`/`rect`/`ellipse` + lista blanca de `path` cerradas: escudo, megáfono, documento, rayo, llave, bombilla). Los íconos de **trazo abierto** (checks, ejes de gráfico, arcos, llaves de código) quedan como línea limpia dentro del tile (rellenarlos se vería mal). 28 formas etiquetadas en 7 páginas (automatizaciones, asesorías, optimización, publicidad, sobre-mí y 2 artículos del blog).
- **Aurora del Hero (`.hero::before` / `::after`):** dos resplandores naranjas muy sutiles que derivan lento (`heroAurora1/2`, 22s y 26s, solo `transform`). `.hero` pasó a `position: relative; overflow: hidden` y `.hero > .container` a `z-index: 1`. Desactivado con `prefers-reduced-motion`.
- **Línea del proceso que se dibuja (`.process-steps::before`):** el conector arranca en `scaleX(0)` y se dibuja a `scaleX(1)` cuando la sección entra en viewport (JS agrega `.is-drawn` vía IntersectionObserver en `script.js`; con reduced-motion o sin IO se marca dibujada de entrada).
- **Hover de cards refinado:** se reemplazó el `rotate(-4deg)` del ícono por elevación + escala + glow naranja, y la textura del tile se desplaza levemente.
- **Imágenes:** por decisión del usuario, se elige **ilustración/gráficos custom** (sin stock genérico) + una futura **foto real de Oscar en "Sobre mí"** (a aportar). No se introdujo fotografía de stock.

### Backlog de oportunidades de mejora (relevado 2026-07-16, para implementar luego)

Detectadas al recorrer las páginas durante la propagación. Ordenadas por prioridad. **No implementadas todavía** (a confirmar alcance con el usuario).

| # | Oportunidad | Dónde | Problema / Impacto | Prioridad |
|---|---|---|---|---|
| 1 | ✅ **Teléfono placeholder visible** (resuelto 2026-07-16) | Home, `.cta-phone` en el "CTA final" | Se reemplazó el número falso `+54 11 1234 5678` por el email real `hola@oscarcastelani.com` como enlace `mailto:` (ícono de sobre). Ya no hay número falso a la vista. | ~~Alta~~ |
| 2 | ✅ **Orden del FAQ** (resuelto 2026-07-16) | Home | El FAQ se movió al final, como última sección antes del footer. Nuevo orden: Hero → Servicios → Proceso → CTA final → Formulario → FAQ → Footer. Nota UX: cerrar en FAQ (sin CTA después) es levemente menos "vendedor" que cerrar en el formulario; a reevaluar junto con la #3. | ~~Media~~ |
| 3 | **Doble sección de contacto consecutiva** | Home, "CTA final" (`#contacto`) seguido del formulario (`#contactame`) | Dos cierres de contacto casi pegados (caja CTA grande + formulario). Puede sentirse redundante. Evaluar fusionarlos o darles roles más distintos. | Media |
| 4 | **Familias de íconos de card sin unificar** | Páginas de servicio: `.benefit-tile-icon`, `.benefit-row-icon`, `.benefit-feature-icon` | No recibieron el lenguaje de tile/duotono nuevo. Rompen coherencia con `.service-icon`/`.step-icon`. Unificarlas al mismo sistema. | Media |
| 5 | **Íconos de proceso de "Sobre mí" sin duotono** | `sobre-mi.html` (3 de 4 son trazo abierto: auriculares, brackets, ejes) | Quedan como línea limpia mientras el resto es duotono. Rediseñar esos 3 glifos con una forma cerrada rellenar para igualar. | Media |
| 6 | **LinkedIn placeholder** | Footer de las 14 páginas | Enlaza a `https://linkedin.com` genérico. Poner el perfil real o quitar el ícono (hoy también excluido del `sameAs` de JSON-LD por eso). | Media |
| 7 | **Ritmo entre secciones** | Home | Servicios/Proceso/FAQ/CTA/Form son casi todas grillas centradas del mismo ancho. Introducir variación de composición (ej. Proceso como timeline horizontal más editorial) para mejor ritmo. | Baja |
| 8 | **`aria-hidden` en íconos decorativos** | Íconos de `.service-icon`/`.step-icon` | Muchos glifos decorativos no están marcados como ocultos para lectores de pantalla. Auditar accesibilidad de íconos. | Baja |
| 9 | **Referencias de precio** | Servicios distintos de Desarrollo Web | Solo Desarrollo Web tiene planes/precios; el resto va directo a WhatsApp sin rango orientativo. | Baja |
| 10 | **Filtro del blog** | `blog/index.html` | Cada `.post-card` tiene `data-category` pero no hay UI de filtro. Construir el filtro real o retirar el atributo no usado. | Baja |

---

## 7. Responsive

El sitio es mobile-first en su lógica de contenido, aunque el CSS está escrito desktop-first con media queries de achicamiento. Los puntos de quiebre (breakpoints) principales son:

| Breakpoint | Rango | Qué cambia |
|---|---|---|
| Desktop | > 1024px | Layout completo: grillas de 3–4 columnas, navbar horizontal, hero en dos columnas |
| Tablet | ≤ 1024px | Hero pasa a una sola columna (el visual se reordena arriba); grillas de servicios pasan de 3 a 2 columnas; footer pasa de 4 a 3 columnas; tamaños de logos del marquee se reducen |
| Mobile grande / menú | ≤ 860px | El menú de navegación se convierte en overlay de pantalla completa con botón hamburguesa; el botón "Hablemos" del navbar se oculta (queda solo el menú); grillas de proceso y CTA pasan a una sola columna |
| Mobile | ≤ 640px | Padding de sección se reduce de 96px a 72px; todas las grillas de cards pasan a una sola columna; los botones ocupan el 100% del ancho; el texto del botón flotante de WhatsApp se oculta (solo ícono); planes de precios se apilan y el plan destacado pasa a mostrarse primero |
| Rango intermedio para planes | 641px–1024px | Los planes de Desarrollo Web usan una grilla de 2 columnas, con el plan destacado ocupando ambas columnas |

### Componentes que cambian estructuralmente

- Navbar (de horizontal a overlay fullscreen).
- Todas las grillas de cards (servicios, beneficios, galería, planes, proceso).
- El hero (de dos columnas a una, reordenando el visual).
- El carrusel de herramientas (reduce tamaño de ítems y separación, pero mantiene las dos filas y el movimiento infinito en todo momento).

### Componentes que mantienen su estructura

- El footer mantiene su organización en columnas (solo reduce la cantidad de columnas, nunca cambia a un layout distinto).
- Los botones mantienen su forma de píldora en todos los tamaños.
- El acordeón de FAQ no cambia su comportamiento en mobile.
- El botón flotante de WhatsApp permanece fijo en la esquina inferior derecha en todos los tamaños.

---

## 8. Servicios

### Desarrollo Web

- **Objetivo:** Brindar presencia digital profesional a través de sitios web modernos y rápidos.
- **Problema que resuelve:** Falta de presencia digital, sitios desactualizados o que no generan confianza ni conversiones.
- **Beneficios:** Diseño responsive, carga rápida, integración con redes y WhatsApp, base sólida para SEO.
- **Mensaje comercial:** "Sitios modernos, rápidos y optimizados para convertir visitantes en clientes."
- **CTA:** "Ver más" → dirige a la página de planes de Desarrollo Web.

### Automatización de Procesos

- **Objetivo:** Automatizar conversaciones y tareas repetitivas del negocio.
- **Problema que resuelve:** Pérdida de tiempo en tareas manuales y atención al cliente lenta o inconsistente.
- **Beneficios:** Ahorro de tiempo, respuestas más rápidas a clientes, escalabilidad sin contratar más personal.
- **Mensaje comercial:** "Automatizo conversaciones y procesos para ahorrar tiempo y vender más."
- **CTA:** "Ver más" → dirige al contacto (WhatsApp).

### Publicidad Online

- **Objetivo:** Generar más clientes a través de campañas digitales pagas.
- **Problema que resuelve:** Baja visibilidad y falta de resultados medibles en redes sociales.
- **Beneficios:** Campañas orientadas a resultados, ecosistema preparado para medir conversiones (Meta Pixel, Analytics).
- **Mensaje comercial:** "Campañas efectivas en Meta Ads para atraer más clientes y aumentar ventas."
- **CTA:** "Ver más" → dirige al contacto (WhatsApp).

### Desarrollo de Software a Medida

- **Objetivo:** Crear aplicaciones y soluciones digitales adaptadas a necesidades específicas del negocio.
- **Problema que resuelve:** Herramientas genéricas que no se ajustan a procesos particulares del negocio.
- **Beneficios:** Soluciones únicas, escalables y pensadas para el caso real del cliente.
- **Mensaje comercial:** "Aplicaciones web y móviles a medida para tu negocio."
- **CTA:** "Ver más" → dirige al contacto (WhatsApp).

### Consultoría Digital (Asesorías)

- **Objetivo:** Diagnosticar y guiar decisiones estratégicas sobre el ecosistema digital del negocio.
- **Problema que resuelve:** Falta de claridad sobre qué tecnología o estrategia digital implementar.
- **Beneficios:** Diagnóstico profesional, plan de acción claro, decisiones basadas en objetivos reales.
- **Mensaje comercial:** "Diagnóstico y recomendaciones para optimizar tu ecosistema digital."
- **CTA:** "Ver más" → dirige al contacto (WhatsApp).

### Optimización de Redes Sociales

- **Objetivo:** Mejorar la presencia y efectividad de los perfiles sociales del negocio.
- **Problema que resuelve:** Perfiles sociales desalineados con la marca o que no generan conversiones.
- **Beneficios:** Perfiles estratégicos que atraen, conectan y convierten visitantes en clientes.
- **Mensaje comercial:** "Perfiles estratégicos que atraen, conectan y convierten."
- **CTA:** "Ver más" → dirige al contacto (WhatsApp).

> **Nota (actualizada 2026-07-16):** los **6 servicios ya tienen página de detalle propia**: `desarrollo-web.html` (planes), `automatizaciones.html`, `publicidad-redes-sociales.html`, `desarrollo-software.html`, `asesorias.html` y `optimizacion-redes-sociales.html`. Las 5 páginas de detalle (todas menos Desarrollo Web) comparten una plantilla común: `service-hero` → `automation-platforms` ("¿Qué incluye/desarrollo?") → `advisory-why` (editorial "por qué importa") → `process` (`process-steps--six`) → `benefits` (`benefit-feature-grid`) → `audience` ("Ideal para...") → `cta`. `desarrollo-web.html` es la excepción (página de planes/precios).
>
> **Nombres canónicos de los servicios (usar idénticos en card del Home, footer, `<title>` y `<select>` del formulario):** Desarrollo Web · Automatización de Procesos · Publicidad en Redes Sociales · Desarrollo de Software a Medida · Asesorías Digitales · Optimización de Redes Sociales. Se unificaron el 2026-07-16 (antes el mismo servicio tenía hasta 3 nombres distintos). El eje de **categorías del Blog** es independiente y puede diferir (p. ej. usa "Consultoría Digital" como categoría editorial).
>
> **Footer — columna "Servicios" (corregida 2026-07-16):** en las 15 páginas, cada servicio del footer ahora hace *deep-link* a su página de detalle (antes casi todos apuntaban a `index.html#servicios`, y el footer era incoherente entre páginas). Rutas relativas: raíz sin prefijo, blog con `../`.

---

## 9. Desarrollo Web — Planes

La página `desarrollo-web.html` presenta 3 planes de desarrollo web, pensados como una escalera de valor según la etapa del negocio.

### Landing Page

- **Descripción:** Sitio simple y directo para presentar un producto, servicio, promoción o campaña específica.
- **Qué incluye:** Una sección principal o estructura de una sola página, diseño responsive, formulario de contacto, botón a WhatsApp, optimización SEO básica, integración con redes sociales.
- **Precio base:** Desde AR$ 150.000.
- **Beneficios:** Rápido de lanzar, ideal para validar una oferta o campaña puntual.
- **CTA:** "Cotizar" (vía WhatsApp).

### Sitio Profesional (plan destacado / "Más elegido")

- **Descripción:** Sitio completo para negocios o profesionales que necesitan presentar su marca, servicios y canales de contacto.
- **Qué incluye:** Hasta 5 secciones, diseño responsive, formulario de contacto, botón flotante de WhatsApp, integración con redes sociales, optimización SEO básica, preparado para Google Analytics y Meta Pixel.
- **Precio base:** Desde AR$ 250.000.
- **Beneficios:** Presencia digital completa y profesional, preparado para medir resultados desde el día uno.
- **CTA:** "Cotizar" (vía WhatsApp).

### E-commerce

- **Descripción:** Tienda online para vender productos, mostrar catálogo, gestionar pedidos y recibir pagos digitales.
- **Qué incluye:** Catálogo de productos, carrito de compras, pasarelas de pago, gestión básica de pedidos, diseño responsive, optimización SEO básica, integración con WhatsApp.
- **Precio base:** Desde AR$ 300.000.
- **Beneficios:** Habilita la venta online directa, sin depender de marketplaces de terceros.
- **CTA:** "Cotizar" (vía WhatsApp).

> Los precios son valores "desde", sujetos a ajuste según alcance real del proyecto. Cualquier cambio de precios debe actualizarse directamente en `desarrollo-web.html` y reflejarse aquí para mantener este documento como fuente de verdad.

---

## 10. Arquitectura del sitio

### Estado actual de las páginas

| Página | Archivo | Estado |
|---|---|---|
| Home | `index.html` | Implementada |
| Sobre mí | `sobre-mi.html` | Implementada |
| Desarrollo Web (detalle de servicio) | `desarrollo-web.html` | Implementada |
| Automatización de Procesos (servicio) | `automatizaciones.html` | Implementada |
| Publicidad en Redes Sociales (servicio) | `publicidad-redes-sociales.html` | Implementada |
| Desarrollo de Software a Medida (servicio) | `desarrollo-software.html` | Implementada (2026-07-16). Cierra la simetría: era el único de los 6 servicios sin página; antes la card iba a `#contacto`. Contenido basado en la sección 8 (posicionamiento del doc), sin métricas/clientes inventados — **borrador para que Oscar revise/personalice**. |
| Asesorías Digitales (servicio) | `asesorias.html` | Implementada |
| Optimización de Redes Sociales (servicio) | `optimizacion-redes-sociales.html` | Implementada |
| Proyectos | `proyectos.html` | Implementada (base, 2026-07-16). Reutiliza Navbar, `page-header`, grilla `.blog-grid`/`.post-card`, CTA final y botón flotante de WhatsApp. Muestra 3 proyectos como scaffolding (e-commerce básico, sitio web informativo, app de gestión de stock) en estado "En preparación" (componente `.project-status`), sin métricas ni clientes inventados. Pendiente: reemplazar los `<svg>` de `.post-thumb` por imágenes reales y publicar los casos de estudio cuando estén pulidos. |
| Blog (índice) | `blog/index.html` | Implementada |
| Blog (artículo 1) | `blog/como-estructuro-un-sitio-web-para-convertir-mas-consultas.html` | Implementada — Desarrollo Web, 4 min |
| Blog (artículo 2) | `blog/que-errores-encuentro-al-auditar-un-negocio-digital.html` | Implementada — Consultoría Digital, 5 min |
| Blog (artículo 3) | `blog/como-elijo-la-tecnologia-adecuada-para-cada-proyecto.html` | Implementada — Desarrollo de Software, 4 min |
| Blog (artículo 4) | `blog/por-que-automatizar-procesos-en-un-negocio.html` | Implementada — Automatización, 5 min |
| Contacto | — | En Sobre mí sigue siendo una sección con CTA hacia WhatsApp. En el Home, además, hay un formulario de contacto real (ver sección "Home" más abajo). |
| Servicios (hub) | `servicios.html` | Implementada (2026-07-16). **Página propia** que reemplaza al viejo ancla `#servicios` del navbar (antes "Servicios" apuntaba a la sección del Home, redundante con "Inicio"). Es un hub: `page-header` + grilla de las 6 cards de servicio (estilo limpio sin ícono, título protagonista, reutiliza `<section class="services">` para heredar el tamaño de título scopeado) + CTA final. Cada card enlaza a su página de detalle. El navbar y el footer-nav de las **16 páginas** ahora apuntan "Servicios" → `servicios.html`. La sección `#servicios` del Home se mantiene como *teaser* (sigue existiendo el id, pero ya no hay enlace de navegación hacia él; el scroll-spy solo cubre `#inicio` y `#contacto`). |
| Privacidad | `privacidad.html` | Implementada (2026-07-16). Política de privacidad (plantilla/borrador para revisar, Ley 25.326 AR). Reutiliza Navbar, `page-header`, `.article-body` (mismo cuerpo de texto legible del Blog), footer y botón flotante. Enlazada desde el `footer-bottom` de las 14 páginas (`.footer-legal-link`). Lleva `<meta name="robots" content="noindex, follow">`. |

### Home (`index.html`)

- **Objetivo:** Convertir visitantes en leads/clientes, presentando la propuesta de valor general y cerrando con un formulario de contacto directo.
- **Secciones:** Hero (carrusel de 3 slides), Servicios (grilla de 6), Cómo trabajo (proceso en 4 pasos), FAQ (acordeón), CTA final con teléfono visible, Formulario de contacto (CTA principal del sitio, justo antes del footer), Footer.
- **CTA principal:** el formulario de contacto ("Contame tu proyecto") es la llamada a la acción principal del sitio; también existen "Quiero empezar" (CTA intermedio) y "Hablar por WhatsApp" (alternativa de respuesta inmediata junto al formulario), hacia WhatsApp, además del formulario, que es por correo electrónico. El Hero **ya no tiene CTA propio** (se simplificó a solo H1 + ilustración) — el primer llamado a la acción del recorrido es el de la sección Servicios.
- **Componentes usados:** Navbar, Hero con carrusel de slides (laptop + smartphone + laptop con dashboard de automatización), Cards de servicios, Timeline de proceso, Acordeón FAQ, CTA final, Formulario de contacto, Footer, Botón flotante de WhatsApp.
- **Slides del Hero (3 de 3-4 planeados):** (1) "Conecto estrategia, tecnología y diseño..." con mockup de laptop (mensaje general/desarrollo web). (2) "Desarrollo web, automatizaciones y publicidad para atraer más clientes." con mockup de smartphone mostrando un carrito de ecommerce, composición invertida (imagen a la izquierda). (3) "Automatizo tareas repetitivas para que puedas enfocarte en hacer crecer tu negocio." con mockup de laptop mostrando un dashboard de automatización (`.flow-content`: nodos WhatsApp/Gmail/Shopify/HubSpot/Google Sheets conectados por líneas), texto a la izquierda otra vez. Para sumar un 4to slide: copiar el bloque `.hero-slide` completo en el HTML (con su propio `.hero-copy` + `.hero-visual`) — el CSS y el JS ya están preparados y no requieren cambios.
- **Nota:** es la única página que combina contacto por WhatsApp y por formulario/correo electrónico.

### Sobre mí (`sobre-mi.html`)

- **Objetivo:** Generar cercanía y confianza mostrando quién es Oscar, cómo trabaja y con qué tecnologías, cerrando con una invitación a contactarlo.
- **Secciones (en este orden):** Hero ("Quién soy"), "Mi forma de trabajar" (Cómo trabajo), "¿Por qué trabajar conmigo?" (beneficios — Qué obtiene el cliente), "Tecnologías con las que trabajo" (carrusel de logos oficiales en una fila), CTA final (invitación a contactar), Footer.
- **CTA principal:** "¿Tenés un proyecto en mente?" → botón "Hablemos" hacia WhatsApp.
- **Componentes usados:** Navbar, Hero + collage CSS, Timeline, Cards de beneficios, Carrusel de tecnologías, CTA, Footer, Botón flotante de WhatsApp.
- **Nota:** esta página deliberadamente no repite las cards de servicios ni una galería de proyectos (eso vive en el Home y en la futura página de Proyectos) — no reintroducir esas secciones aquí sin una decisión explícita del usuario.

### Desarrollo Web (`desarrollo-web.html`)

- **Objetivo:** Detallar los planes de desarrollo web y facilitar la cotización directa.
- **Secciones:** Encabezado simple de página (con link de "volver"), Grilla de 3 planes de precios.
- **CTA principal:** Botón "Cotizar" en cada plan, hacia WhatsApp con mensaje predefinido según el plan elegido.
- **Componentes usados:** Navbar, `page-header`, Cards de planes, Footer, Botón flotante de WhatsApp.

### Proyectos (pendiente)

- Debe listar casos de trabajo/proyectos realizados.
- Al crearse, debe reutilizar Navbar, un `page-header` (igual al de Desarrollo Web) y un sistema de cards coherente con el resto del sitio (mismo radius, mismo hover, misma paleta).

### Blog (`blog/`)

- **Objetivo:** demostrar conocimiento, generar confianza y mejorar el posicionamiento SEO mediante contenido educativo (no es un blog de noticias). Temas: Desarrollo Web, Automatización, Publicidad Digital, UX/UI, Comercio Electrónico, Tecnología, Inteligencia Artificial y Marketing Digital.
- **Estructura de carpeta:** vive en su propio subdirectorio `blog/`, a diferencia del resto del sitio (que es completamente plano en la raíz). Por eso todas las rutas dentro de `blog/*.html` usan el prefijo `../` para volver a la raíz (`../css/styles.css`, `../js/script.js`, `../js/whatsapp.js`, `../assets/favicon.svg`, `../index.html`, `../sobre-mi.html`, `../desarrollo-web.html`, `../proyectos.html`), mientras que los enlaces entre páginas del propio blog son relativos entre sí (`index.html`, `nombre-del-articulo.html`).
- **Página índice (`blog/index.html`):**
  - Hero reutilizando el componente `page-header` (mismo que usa Desarrollo Web), con eyebrow/H1 "Blog" y bajada fija.
  - Grilla de publicaciones (`.blog-grid` → `.post-card`): un único componente de card reutilizable para todas las publicaciones presentes y futuras. Cada card incluye thumbnail ilustrado en CSS/SVG (no fotografía, seguidno la regla de "sin imágenes genéricas de stock"), categoría (`.plan-tag` reutilizado como badge), tiempo de lectura, fecha, título, resumen (recortado a 3 líneas con `line-clamp`) y botón "Leer artículo" (`.service-link` reutilizado).
  - Cada `.post-card` lleva un atributo `data-category` (ej. `data-category="Desarrollo Web"`) ya preparado para un futuro filtro por categoría; **el filtro, la búsqueda y las relaciones automáticas entre artículos todavía no tienen lógica JS — solo la estructura de datos está lista.**
- **Plantilla de artículo:** cada publicación es un archivo HTML independiente dentro de `blog/`, pero todas reutilizan exactamente los mismos componentes (ver sección 4). No se crea una card ni una plantilla distinta por artículo.
  - Encabezado: `page-header` con breadcrumbs (Inicio / Blog / Artículo), meta (categoría + fecha + tiempo de lectura vía `.post-meta`), H1, bajada e imagen destacada ilustrada (`.article-featured`).
  - Cuerpo (`.article-body`, máximo 720px, centrado): tipografía de lectura (párrafos cortos, H2/H3, listas), y los componentes reutilizables de contenido (ver sección 4: quote, tip, error común, bloque destacado, lista con íconos, card informativa, conclusión).
  - Cierre: link "Volver al Blog" (`.back-link` reutilizado) + sección "Artículos relacionados" (grilla `.blog-grid`/`.post-card` con el resto de las publicaciones; cae a `.related-posts-empty` solo si hubiera un único artículo) + CTA final (`.cta`/`.cta-box` reutilizado, con copy propio por artículo) antes del footer.
- **Artículos publicados:**
  1. "Cómo estructuro un sitio web para convertir más consultas" — categoría Desarrollo Web, 4 min de lectura.
  2. "Qué errores encuentro al auditar un negocio digital" — categoría Consultoría Digital, 5 min de lectura.
  3. "Cómo elijo la tecnología adecuada para cada proyecto" — categoría Desarrollo de Software, 4 min de lectura.
  4. "¿Por qué automatizar procesos en un negocio?" — categoría Automatización, 5 min de lectura.
  Las cuatro se referencian mutuamente en su sección "Artículos relacionados" (cada una muestra a las otras tres). Cualquier publicación nueva debe agregarse a `blog/index.html` y sumarse a la sección de relacionados de **todas** las publicaciones existentes (siguiendo el mismo criterio: mostrar las demás, no repetirse a sí misma).
- **SEO del Blog:** cada página tiene metadatos completos (title, description, canonical, Open Graph, Twitter Cards) más JSON-LD `Schema.org`: `Blog` en el índice y `Article` + `BreadcrumbList` en cada publicación — el primer lugar del sitio con datos estructurados implementados (ver sección 12).

---

## 11. Tecnologías

### Tecnologías con las que está construido el sitio

| Tecnología | Uso en este proyecto |
|---|---|
| HTML5 | Estructura semántica de las 3 páginas |
| CSS3 (puro, sin frameworks) | Todo el diseño visual, animaciones y responsive. No se usa Bootstrap, Tailwind ni ningún framework de CSS |
| JavaScript (vanilla, sin frameworks) | Interactividad: navbar, menú mobile, acordeón FAQ, reveal on scroll, reemplazo dinámico de enlaces de WhatsApp |
| Figma | Diseño y prototipado previo a la implementación |
| Git / GitHub | Control de versiones y alojamiento del código (a inicializar/confirmar en este entorno) |
| VS Code | Editor de desarrollo |
| Claude Code | Asistente de IA utilizado para el desarrollo y mantenimiento del sitio |
| Hostinger | Proveedor de hosting del sitio en producción |

### Tecnologías que Oscar ofrece/domina para proyectos de clientes

Estas herramientas se muestran en el carrusel de "Herramientas que utilizo" de la página Sobre mí como parte del stack profesional que Oscar maneja, **aunque el sitio en sí no esté construido con todas ellas**:

| Tecnología | Rol |
|---|---|
| ManyChat | Automatización de conversaciones (chatbots) |
| Meta Business / Meta Ads | Gestión y campañas de publicidad en redes sociales |
| Google Analytics | Medición de tráfico y comportamiento de usuarios |
| Google Tag Manager | Gestión de etiquetas de medición |
| Meta Pixel | Seguimiento de conversiones para campañas de Meta |
| React | Desarrollo de aplicaciones/interfaces a medida para clientes |
| Firebase | Backend/base de datos para aplicaciones de clientes |
| Node.js | Desarrollo backend para proyectos de software a medida |

> **Importante para futuras modificaciones:** no asumir que el sitio usa React, Firebase o Node.js solo porque aparecen en el carrusel de herramientas. El sitio del portfolio en sí es HTML/CSS/JS estático puro.

---

## 12. SEO

### Prácticas ya implementadas (presentes en todas las páginas)

- **Title** único y descriptivo por página.
- **Meta description** única por página, orientada a conversión.
- **Canonical URL** declarada en cada página (`https://oscarcastelani.com/...`).
- **Open Graph** completo: `og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:locale` (es_AR), `og:image`.
- **Twitter Cards**: `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`.
- **Jerarquía H1–H3:** un único H1 por página; H2 para cada sección; H3 para títulos de card. No deben saltearse niveles (por ejemplo, no usar H4 sin un H3 previo en esa sección).
- **Idioma declarado:** `lang="es"` en la etiqueta `html` de todas las páginas.
- **Favicon** en formato SVG.
- **Schema.org (datos estructurados):** Blog (`Blog` en `blog/index.html`, `Article` + `BreadcrumbList` en cada artículo), **`ProfessionalService` en la Home** y **`Person` en Sobre mí** (agregados 2026-07-16). Desarrollo Web y las páginas de servicio todavía no tienen JSON-LD. Nota: en `sameAs` solo se incluye Instagram (real); el LinkedIn del footer sigue siendo un placeholder genérico y por eso no se declara como perfil.
- **Sitemap y robots:** `sitemap.xml` (14 URLs canónicas) y `robots.txt` (permite todo + referencia al sitemap) creados en la raíz el 2026-07-16.
- **Breadcrumbs:** visuales (`.breadcrumbs`) y estructurados (`BreadcrumbList`) en cada artículo del Blog.
- **URLs amigables del Blog:** `blog/index.html` (servido como `/blog/`) y `blog/<slug-descriptivo>.html` por artículo, en español y sin parámetros.

### Pendiente / a definir

- ✅ **Schema.org fuera del Blog:** hecho (Home `ProfessionalService`, Sobre mí `Person`). Falta, opcionalmente, en Desarrollo Web y las páginas de servicio.
- ✅ **Sitemap.xml y Robots.txt:** creados en la raíz (2026-07-16). Recordar mantener `sitemap.xml` al día al sumar páginas nuevas.
- ✅ **La Home ahora resuelve en la raíz del dominio.** La portada se renombró de `oscar-castelani.html` a **`index.html`** (2026-07-16) y se actualizaron todos los enlaces internos del sitio (raíz y blog con `../`). Ya coincide con el canonical/sitemap (`https://oscarcastelani.com/`). **Nota para el futuro:** al enlazar a la home usar `index.html#seccion` (o `../index.html#seccion` desde el blog); ya no existe `oscar-castelani.html`.
- **Imagen Open Graph (`og-cover.jpg`):** ✅ creada (2026-07-16). Archivo real en `assets/og-cover.jpg`, 1200×630 px, JPEG (~82 KB), on-brand (fondo `#0a0a0a`, acento naranja, marca + tagline "Ecosistemas digitales" + dominio). Referenciada en el `og:image`/`twitter:image` de todas las páginas.
- **Atributos ALT:** la mayoría del contenido visual es SVG en línea (decorativo, marcado como oculto para lectores de pantalla, o con texto accesible asociado). Las excepciones son los logos de tecnologías en Sobre mí y los thumbnails del Blog, que si en el futuro pasan a ser imágenes reales (`<img>`) deben llevar `alt` descriptivo — los logos ya lo hacen (`alt="HTML5"`, etc.).

### Buenas prácticas a mantener

- Un H1 único y claro por página, alineado con la intención de búsqueda de esa página.
- Descripciones (`meta description`) de largo moderado, con foco en beneficio + acción.
- Mantener URLs limpias y descriptivas (ej.: `desarrollo-web.html`, `blog/como-estructuro-un-sitio-web-para-convertir-mas-consultas.html`).
- Cualquier página nueva debe replicar el mismo bloque de metadatos (title, description, canonical, Open Graph, Twitter Cards) que las páginas existentes; si es un artículo del Blog, además debe llevar JSON-LD `Article` + `BreadcrumbList` como las plantillas ya creadas.

---

## 13. Convenciones de desarrollo

### Cómo escribir el código

- HTML semántico: uso de `header`, `main`, `section`, `footer`, `article` según corresponda.
- Cada sección de página debe ir precedida por un comentario separador que indique su número y nombre (patrón ya usado en las 3 páginas existentes).
- CSS organizado por bloques temáticos separados por comentarios (Reset, Navbar, Hero, Servicios, Proceso, FAQ, CTA, Footer, Responsive, etc.), todo dentro de un único archivo (`css/styles.css`).
- JavaScript vanilla, sin dependencias externas, organizado en funciones autocontenidas dentro de un IIFE (patrón ya usado en `js/script.js`).

### Cómo nombrar clases

- Metodología tipo BEM simplificado: bloque en minúsculas con guiones (`service-card`), modificador con doble guión (`plan-card--featured`), variantes de utilidad cortas (`text-orange`, `reveal-delay-1`).
- Los nombres de clase deben describir el componente o su función, nunca su apariencia visual momentánea (evitar clases como `naranja-grande`).

### Cómo organizar carpetas

| Carpeta / archivo | Contenido |
|---|---|
| `/` (raíz) | Páginas HTML principales (Home, Sobre mí, Desarrollo Web) |
| `blog/` | Único subdirectorio de páginas del sitio: índice (`index.html`) y un archivo HTML por artículo. Todas las rutas a `css/`, `js/` y `assets/` usan el prefijo `../` |
| `css/styles.css` | Único archivo de estilos del sitio completo, incluido el Blog |
| `js/script.js` | Comportamiento general (navbar, menú, FAQ, reveal on scroll, envío del formulario de contacto) |
| `js/whatsapp.js` | Lógica centralizada para generar los enlaces de WhatsApp a partir del atributo de mensaje |
| `js/analytics.js` | Analítica opt-in (GA4 + Meta Pixel) y banner de consentimiento de cookies. IDs placeholder a reemplazar antes de activar |
| `assets/` | Recursos estáticos: favicon, logos de tecnologías en `assets/logos/`, e imágenes destacadas del Blog en `assets/blog/` (una por artículo, referenciada tanto en el hero del artículo como en su card) |

No se debe fragmentar el CSS en múltiples archivos ni introducir un bundler/framework de construcción salvo que el usuario lo solicite explícitamente: el proyecto es intencionalmente estático y simple. El Blog tampoco introduce generación estática ni plantillas: cada artículo es un archivo HTML independiente que reutiliza los componentes ya definidos (ver sección 4) copiando la misma estructura base.

### Cómo nombrar imágenes y recursos

- Nombres en minúsculas, en español o inglés simple, separados por guiones (ej.: `favicon.svg`, `og-cover.jpg`).
- Sin espacios, sin mayúsculas, sin caracteres especiales ni tildes en los nombres de archivo.

### Cómo crear nuevos componentes

1. Revisar primero si un componente existente puede reutilizarse o adaptarse (ver sección 4) antes de crear uno nuevo.
2. Si es un componente realmente nuevo, debe usar exclusivamente las variables de color, radios y transiciones ya definidas (sección 3).
3. Debe incluirse en una sección propia y comentada dentro de `styles.css`, siguiendo el mismo patrón de encabezados de bloque.
4. Debe contemplar su comportamiento responsive en los mismos breakpoints ya establecidos (1024px, 860px, 640px).
5. Debe incorporar la clase `reveal` (y su variante `reveal-delay-N` si corresponde) si aparece al hacer scroll, para mantener consistencia de animación con el resto del sitio.

### Cómo reutilizar estilos

- Priorizar las clases de utilidad ya existentes (`text-orange`, `eyebrow`, `section-head`, `btn`, `btn-primary`, `btn-ghost`, `reveal`) antes de escribir CSS nuevo.
- Los botones de WhatsApp deben seguir siempre el patrón de atributo de mensaje (`data-whatsapp-message`) resuelto por `js/whatsapp.js`, en lugar de escribir el número de teléfono manualmente en el `href`.

### Cómo documentar futuras modificaciones

- Cada cambio relevante en diseño, contenido, precios o estructura debe reflejarse en este documento (`PROYECTO_PORTFOLIO_OSCAR_CASTELANI.md`), en la sección correspondiente.
- Si se agrega una página nueva, debe documentarse en la sección 10 (Arquitectura del sitio).
- Si se agrega o modifica un componente, debe documentarse en la sección 4 (Componentes reutilizables).
- Si cambian colores, tipografía o espaciados, debe actualizarse la sección 3 (Identidad visual) antes que el propio código.

---

## 14. Reglas para futuras modificaciones

Esta sección tiene prioridad sobre cualquier otra al momento de decidir cómo implementar un cambio. Toda modificación futura del sitio **debe**:

- Respetar la identidad visual definida en la sección 3 (paleta de colores, tipografía, espaciado, radios y sombras).
- Mantener la coherencia del diseño general del sitio (secciones 5 y 6: reglas de diseño y animaciones).
- Reutilizar componentes existentes (sección 4) en lugar de crear variantes redundantes.
- Evitar duplicar estilos: si una regla CSS ya existe para un caso similar, extenderla o reutilizarla en vez de copiarla.
- No romper el comportamiento responsive definido en la sección 7, ni introducir nuevos breakpoints sin una justificación clara.
- No modificar la paleta de colores (sección 3) sin que el usuario lo pida explícitamente.
- No cambiar la tipografía base del sitio sin que el usuario lo pida explícitamente.
- Mantener la estética moderna y "premium" del proyecto: minimalista, oscura, con un único color de acento y mucho espacio en blanco.
- Mantener la experiencia de usuario actual: navegación clara, tiempos de carga rápidos (sin frameworks pesados), accesibilidad básica (jerarquía de encabezados, `aria-label`, soporte a `prefers-reduced-motion`) y llamados a la acción siempre visibles.

### Puntos de atención conocidos (deuda técnica a considerar)

- ✅ `proyectos.html` creada (2026-07-16). El enlace de navegación/footer ya no apunta a un archivo inexistente.
- ✅ WhatsApp unificado en `index.html` (2026-07-16): el CTA "Quiero empezar" y el ícono de WhatsApp del footer ahora usan `data-whatsapp-message` como el resto del sitio. **Ya no queda ningún número escrito a mano en ningún `href` del sitio.** El número real sigue pendiente: es un placeholder centralizado en un único punto (`js/whatsapp.js` → `WHATSAPP_NUMBER`), claramente marcado con un banner ⚠️.
- El botón flotante de WhatsApp no usa ningún sistema de includes/plantillas (el sitio no tiene uno): la misma estructura HTML está copiada en cada uno de los 8 archivos. **Al crear `proyectos.html` o cualquier página futura, hay que agregarle manualmente el mismo bloque `.whatsapp-float`** (copiarlo de cualquier página existente) — no se hereda automáticamente.
- ⚠️ El formulario de contacto del Home (`#contactame`) ya tiene lógica de envío real (2026-07-16): envío AJAX a **Formspree** desde `js/script.js` con estados de éxito/error (componente `.form-status`), validación nativa, botón en estado "Enviando…", honeypot anti-spam (`_gotcha`) y asunto (`_subject`). **Falta un solo paso antes de publicar:** reemplazar `YOUR_FORM_ID` en el atributo `action` del `<form>` por el endpoint real de Formspree (crear cuenta free → New form → copiar `https://formspree.io/f/xxxxxxx`). Hasta entonces el envío muestra un aviso de "no configurado" y redirige a WhatsApp. Plan free de Formspree: 50 envíos/mes.
- El número de WhatsApp centralizado en `js/whatsapp.js` es un valor de placeholder (`5491112345678`) y debe reemplazarse por el número real antes de publicar el sitio. Es el **único** punto de edición (marcado con banner ⚠️): actualiza los enlaces de las 14 páginas.
- ⚠️ **Analítica (GA4 + Meta Pixel) con aviso de cookies** instalada el 2026-07-16 en `js/analytics.js` (incluido en las 14 páginas). Carga **opt-in**: nada se carga hasta que el visitante toca "Aceptar" en el banner de cookies; la elección se guarda en `localStorage` (`cookie-consent`). **Pendiente de activar:** reemplazar los placeholders `GA4_ID` (`G-XXXXXXXXXX`) y `META_PIXEL_ID` en `js/analytics.js` por los IDs reales. Mientras sean placeholders, el banner **no** aparece y no se cargan scripts (solo un aviso en consola); al poner IDs reales, el banner y la medición se activan solos. Componente visual: `.cookie-consent` (CSS en `styles.css`). La sección "Cookies y medición" de `privacidad.html` ya contempla estas herramientas.
- ✅ La Home tenía 3 `<h1>` (uno por slide del carrusel del Hero), un problema de SEO/accesibilidad. Corregido (2026-07-16): solo el slide 1 conserva `<h1>`; los slides 2 y 3 usan `<p class="hero-title">`, visualmente idéntico (misma regla CSS `.hero h1, .hero .hero-title`). La Home ahora tiene un único H1.
- La imagen de Open Graph (`assets/og-cover.jpg`) está referenciada en los metadatos de todas las páginas (incluido el Blog) pero el archivo no existe todavía en `assets/`.
- No hay `sitemap.xml` ni `robots.txt` en el proyecto — ahora más relevante porque el Blog sumó URLs nuevas.
- El Blog ya tiene cuatro artículos publicados (Desarrollo Web, Consultoría Digital, Desarrollo de Software y Automatización) que se referencian mutuamente en "Artículos relacionados" (cada uno muestra los otros tres, que todavía completan exactamente una fila de la grilla de 3 columnas). La grilla de `blog/index.html` sigue preparada para seguir creciendo sin cambios de diseño. **Punto de atención concreto:** al agregar un quinto artículo, cada sección de "relacionados" pasaría a mostrar 4 cards (ya no completa una sola fila); ese es el momento de decidir si conviene limitar "Artículos relacionados" a una selección (por ejemplo, los 3 más recientes o los de la misma categoría) en vez de seguir mostrando literalmente todos los demás.
- El filtro por categoría y la búsqueda del Blog **no tienen lógica JS implementada a propósito** (cada `.post-card` ya lleva `data-category`, pero no hay UI de filtros ni buscador). No agregar botones o campos de filtro/búsqueda no funcionales solo por completitud visual: hay que construir la lógica real cuando se decida priorizarlo.
- Imagen destacada por artículo: los cuatro artículos ya usan una imagen real propia tanto en su hero (`.article-featured`) como en su card (`.post-thumb`) en todos los lugares donde aparecen (índice y las secciones de "Artículos relacionados" de las demás publicaciones):
  1. "Cómo estructuro un sitio web para convertir más consultas" → `assets/blog/web.svg`
  2. "Qué errores encuentro al auditar un negocio digital" → `assets/blog/consul.svg`
  3. "Cómo elijo la tecnología adecuada para cada proyecto" → `assets/blog/herra.svg`
  4. "¿Por qué automatizar procesos en un negocio?" → `assets/blog/auto.svg`
  Ya no queda ningún artículo usando el ícono ilustrado en CSS/SVG como *fallback* — ese patrón (definido en `.article-featured svg` / `.post-thumb svg`) sigue existiendo en el CSS por si se publica un artículo nuevo sin imagen todavía. **Para cualquier publicación futura:** al asignarle una imagen, hay que reemplazar el `<svg>` placeholder por un `<img>` en **los mismos dos lugares**: su propio hero y **todas** las cards de esa publicación (índice + relacionados de las otras publicaciones) — son instancias independientes del mismo componente, no se actualizan solas. Convención de nombre: el archivo vive en `assets/blog/<nombre-corto>.svg`, no necesariamente con el mismo slug largo del artículo.
- El artículo 4 cambió de URL una vez publicado (de `por-que-automatizar-las-respuestas-de-instagram.html`, enfocado en Instagram, a `por-que-automatizar-procesos-en-un-negocio.html`, con un enfoque más amplio sobre automatización de procesos). El archivo viejo se eliminó y se actualizaron todos los enlaces internos que apuntaban a él (índice + relacionados de los otros 3 artículos). Si el artículo llegara a indexarse en Google con la URL vieja antes de este cambio, faltaría un redirect 301 — no implementado, porque el sitio no tiene servidor/backend propio (ver limitaciones de hosting estático en sección 11).

- ⚠️ **Decisión pendiente — color del mensaje de éxito del formulario.** El estado `.form-status.is-success` usa un verde suave (`#4ade80`), que es la convención universal para "enviado con éxito" pero introduce un segundo color fuera de la paleta (la regla de la sección 3 reserva el único acento al naranja y el verde solo para WhatsApp). El estado de error sí es on-brand (naranja). Queda a confirmación del usuario: mantener el verde por claridad de UX, o migrar el éxito a un tratamiento neutro/naranja para respetar la paleta estricta.
- Nuevos componentes agregados el 2026-07-16 (pendientes de fila propia en la sección 4 si se consolidan): `.hero-title` (párrafo con estilo de H1 para los slides no-primarios del Hero), `.form-status` (mensaje de estado del formulario, variantes `.is-success`/`.is-error`) y `.project-status` (estado "En preparación" de las cards de Proyectos, con punto naranja).

Cualquier IA o desarrollador que continúe este proyecto debe considerar estos puntos como tareas pendientes legítimas, no como errores a "corregir silenciosamente": deben resolverse de forma explícita y, de ser posible, confirmando el alcance con el usuario antes de actuar (por ejemplo, antes de publicar un número de WhatsApp real o de generar contenido para la página de Proyectos).
