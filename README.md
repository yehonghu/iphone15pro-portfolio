# iPhone 15 Pro — Product Page

[![CI](https://github.com/yehonghu/iphone15pro-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/yehonghu/iphone15pro-portfolio/actions/workflows/ci.yml)
[![Last commit](https://img.shields.io/github/last-commit/yehonghu/iphone15pro-portfolio)](https://github.com/yehonghu/iphone15pro-portfolio/commits/main)

A fully hand-coded Apple-style product landing page for the iPhone 15 Pro, built as a frontend portfolio project.

**Live Demo:** [yehonghu.github.io/iphone15pro-portfolio](https://yehonghu.github.io/iphone15pro-portfolio)

## Run locally

No build step — it's pure HTML, CSS, and vanilla JS. Serve the folder with any static server:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Or just open `index.html` directly in a browser.

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Main product overview — hero video, design, chip, color picker, specs, pricing, store map |
| `gallery.html` | Visual gallery — video showcase, four titanium finishes, camera system |
| `picture.html` | In Action — iPhone mockup with embedded video, color showcase with lightbox |
| `specs.html` | Full technical specifications — collapsible accordion sections |

## Features

- Apple SF Pro font stack with precise typographic hierarchy
- Frosted glass navigation bar (`backdrop-filter: blur`)
- Scroll-triggered fade-in animations via `IntersectionObserver`
- Interactive color switcher (Black / White / Blue / Natural Titanium)
- Embedded video backgrounds and iPhone mockup video player
- Lightbox image viewer with keyboard support
- Collapsible spec accordion with SVG icons
- Motion layer: hero parallax, animated stat counters, 3D card tilt, hover sheens — all respecting `prefers-reduced-motion`
- Responsive layout for mobile and desktop
- Pure HTML + CSS + Vanilla JS — zero dependencies

## Course Info

- **Course:** COMP-213 Web Interface Design
- **Section:** 006
- **Assignment:** 3
- **Student:** Yehong Hu (301392896)
- **Semester:** 2023 Fall

---

© 2023 Yehong Hu
