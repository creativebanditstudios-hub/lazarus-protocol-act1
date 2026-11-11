# The Lazarus Protocol — Act I

A static screening page for Creative Bandit Studios. It runs directly on GitHub Pages with no packages or build step.

## Files

- `index.html`: screening page and native HTML video player.
- `styles.css`: responsive page styling, reduced-motion support, and theatre mode.
- `script.js`: user-triggered playback, theatre mode, and link copying.
- `assets/film.mp4`: web playback copy of the film, supplied separately during setup.
- `assets/poster.jpg`: a still from the film, supplied separately during setup.
- `.nojekyll`: serves the site as static files.

## GitHub Pages

The live page is https://creativebanditstudios-hub.github.io/lazarus-protocol-act1/ once deployment succeeds.

Select **Settings → Pages → GitHub Actions** as the publishing source. The included `.github/workflows/pages.yml` publishes the site when `main` changes and can also be run manually. Keep the `assets` directory alongside `index.html`.

The player uses H.264/AAC MP4, native browser controls, fullscreen controls, and inline playback on mobile. Playback begins only after a visitor chooses to watch. No tracking, remote scripts, external fonts, or account are required.

The displayed running time is 13 minutes 10 seconds. The original master film should remain outside this website repository; the included playback asset is the smaller web copy prepared for GitHub's file size limit.

No subtitle file was provided. To add captions, place a WebVTT file in `assets` and add a `<track kind="captions" ...>` element inside the video element.

## Local preview

Serve this directory with any local static HTTP server and open its local URL. The page also opens as a local HTML file; link copying may require using the provided copy-address fallback in that case.
