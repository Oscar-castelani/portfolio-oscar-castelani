# Portfolio Profesional | Oscar Castelani

Sitio web profesional que funciona como portfolio y punto de entrada comercial de Oscar Castelani, técnico en comercio electrónico.

---

## Descripción

Este proyecto es el **portfolio profesional de Oscar Castelani**. Su objetivo es presentar de forma clara y moderna los servicios que ofrece, compartir contenido educativo a través de un blog y facilitar el contacto con potenciales clientes.

Servicios que presenta el sitio:

- **Desarrollo Web**
- **Automatización de Procesos**
- **Publicidad Online**
- **Desarrollo de Software**
- **Consultoría Digital**
- **Optimización de Redes Sociales**

En resumen, el sitio busca tres cosas: **presentar servicios**, **compartir contenido educativo** y **facilitar el contacto** con quienes necesiten una solución digital.

---

## Vista previa

> _Espacio reservado para una captura del Home._ Cuando tengas la imagen, guardala en `assets/` (por ejemplo `assets/preview-home.png`) y descomentá la línea de abajo:

<!-- ![Vista previa del Home](assets/preview-home.png) -->

---

## Tecnologías utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **Figma**
- **Git**
- **GitHub**

> El sitio es estático (HTML, CSS y JavaScript puro), sin frameworks ni proceso de build.

---

## Funcionalidades

- **Home moderno** con hero animado y presentación de servicios
- **Página de servicios** (una por cada servicio ofrecido)
- **Sobre mí**
- **Blog** con índice de publicaciones
- **Artículos** individuales con contenido educativo
- **FAQ** (preguntas frecuentes)
- **Formulario de contacto**
- **Botón flotante de WhatsApp**
- **Diseño responsive** (mobile, tablet y desktop)
- **SEO básico** (title, meta description, Open Graph, canonical, sitemap y robots)
- **Animaciones** sutiles (reveal on scroll, hover, aurora del hero, línea del proceso)

---

## Estructura del proyecto

```
portfolio-oscar-castelani/
├── index.html                         # Home
├── sobre-mi.html                      # Sobre mí
├── proyectos.html                     # Proyectos
├── desarrollo-web.html                # Servicio: Desarrollo Web (planes)
├── automatizaciones.html              # Servicio: Automatización de Procesos
├── publicidad-redes-sociales.html     # Servicio: Publicidad en Redes Sociales
├── desarrollo-software.html           # Servicio: Desarrollo de Software a Medida
├── optimizacion-redes-sociales.html   # Servicio: Optimización de Redes Sociales
├── asesorias.html                     # Servicio: Asesorías Digitales
├── privacidad.html                    # Política de privacidad
├── blog/                              # Blog
│   ├── index.html                     # Índice de publicaciones
│   └── *.html                         # Artículos
├── css/
│   └── styles.css                     # Único archivo de estilos
├── js/
│   ├── script.js                      # Navbar, FAQ, reveal, formulario, hero
│   ├── whatsapp.js                    # Enlaces de WhatsApp centralizados
│   └── analytics.js                   # GA4 + Meta Pixel (opt-in) + aviso de cookies
├── assets/
│   ├── favicon.svg
│   ├── og-cover.jpg                   # Imagen para redes sociales (1200×630)
│   ├── logos/                         # Logos de tecnologías
│   └── blog/                          # Imágenes destacadas de artículos
├── sitemap.xml
├── robots.txt
└── README.md
```

---

## Cómo ejecutar el proyecto

Al ser un sitio estático no requiere instalación ni build. Basta con servirlo desde un servidor local:

- **Live Server** (extensión de VS Code): abrí la carpeta del proyecto y hacé clic en _"Go Live"_. Se recomienda un servidor local en vez de abrir el archivo directamente para que las rutas relativas y el JavaScript funcionen igual que en producción.
- **GitHub Pages**: al publicar el repositorio, el sitio queda disponible online automáticamente (ver sección de despliegue más abajo).

### Despliegue en GitHub Pages

1. Subí el proyecto a un repositorio público (por ejemplo, `portfolio-oscar-castelani`).
2. En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. En pocos minutos el sitio queda disponible en la URL que indica GitHub Pages.

> Todas las rutas internas son **relativas**, por lo que el sitio funciona tanto en la raíz de un dominio propio como bajo una subruta de GitHub Pages.

---

## Próximas mejoras

- Integración con **Google Analytics**
- **Meta Pixel**
- **Casos de estudio** reales en la sección Proyectos
- **Nuevos artículos** en el blog
- **Optimización SEO** avanzada
- Integración del **formulario** con EmailJS o un backend propio

---

## Autor

**Oscar Castelani** — Técnico en Comercio Electrónico

- **LinkedIn:** _(por configurar)_
- **Sitio web:** [oscarcastelani.com](https://oscarcastelani.com) _(por publicar)_
- **Correo:** hola@oscarcastelani.com _(por configurar)_

---

<sub>Hecho con estrategia, tecnología y diseño.</sub>
