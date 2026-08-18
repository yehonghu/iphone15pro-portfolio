# Signal / Object — Upgrade Blueprint

## Purpose

Transform the original iPhone 15 Pro assignment into an authored **product-interface study**. The project must show how industrial material, interaction states, information hierarchy, and motion can form a single digital object narrative. It must never include purchasing, pricing, carrier, store-location, or course-assignment framing.

## Visual Direction: Signal / Object

Signal / Object is a near-black, titanium-grey interface laboratory. The tone is precise, sparse, and spatial: matte black panels, vapor-white typography, muted alloy surfaces, an optical-violet signal color, fine technical rules, and small monospaced registration labels. The real iPhone images are treated as evidence on a calibrated stage rather than as advertising cutouts.

| System element | Rule |
| --- | --- |
| Palette | `#09090b` obsidian, `#141418` graphite, `#e9e8e4` vapor white, `#837f78` titanium, `#8d7cff` optical violet, `#a7ffbf` diagnostic green. |
| Type | System sans for interface controls; Georgia / Times-derived serif only for large editorial object labels; monospace for coordinates, observations, and specs. |
| Composition | Use full-bleed dark stage scenes, narrow registration rails, asymmetric grids, and deliberate empty space. |
| Image treatment | Preserve existing product assets at full clarity. Use crop-safe contain framing, simple depth shadows, technical masks, and dimension labels—never replace evidence with abstract gradients. |
| Interaction | Scroll progress indicator, pointer-responsive hero object, motion-aware video poster plane, 3D tilt on material plates, active finish selection, and IntersectionObserver reveals. All motion must respect `prefers-reduced-motion`. |

## Information Architecture

| Route | Role |
| --- | --- |
| `index.html` | **Object index**: hero video, material study, finish calibrator, performance signal, and interface evidence. |
| `specs.html` | **Specimen sheet**: concise, structured technical inventory presented as calibrated measurement cards. |
| `gallery.html` | **Motion and form archive**: device video viewer, finish studies, camera close-up, and lightbox. |
| `picture.html` | **Interface in context**: framing, display behavior, and the original Canada map reframed as a provenance artifact—not a store locator. |

## Content Rule

All public text must be English. Product claims must be reframed as descriptive study notes based on the original project content, rather than current sales copy. Remove all prices, Buy calls to action, carrier links, store lists, school-course references, student identifiers, Apple retail styling, and non-user contributor attributions.

## Motion Rule

Normal document scrolling is mandatory. Scroll behavior must never be blocked by fixed-height or `overflow: hidden` rules. A persistent vertical progress line will communicate page position; cards may lift and tilt, and feature images may shift slightly in depth according to pointer position. The hero video must be muted, looped, and have a graceful still-image fallback.

## Attribution and Deployment

Every page must credit **Yehong Hu** as the sole creator. Commits and pushes must use `yehonghu <116537239+yehonghu@users.noreply.github.com>`. GitHub Pages must deploy from the `main` branch root and link directly to the public project site.
