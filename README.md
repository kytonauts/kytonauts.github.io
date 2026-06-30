# KYTONAUTS Website

Vue 3 + Vite + Tailwind CSS static site for KYTONAUTS.

## Run With Docker

You do not need Node/npm installed on Windows if Docker Desktop is running.

```bash
docker compose up web
```

Open:

```text
http://localhost:5173
```

If live reload stops reacting after Docker config changes, restart the dev container:

```bash
docker compose down
docker compose up web
```

Build static files:

```bash
docker compose --profile build run --rm build
```

The production output will be generated in `dist/`.

Do not open `dist/index.html` directly with `file://`.
For local preview of the built static version, use:

```bash
preview.bat
```

Or build and preview in one step:

```bash
dist-preview.bat
```

## Run With Local Node

```bash
npm install
npm run dev
npm run build
```

## Editing Content

Editable site data lives in `src/data/`.

### Site Text

Edit `src/data/site.json`:

- `artistName`
- `tagline`
- `bioHeadline`
- `bio`
- `contactEmail`
- `contactNote`
- `heroImage`
- `logo`

To replace the hero background, put the image in `public/` and update:

```json
"heroImage": "/your-new-image.jpg"
```

### Add A New Mix

Edit `src/data/mixes.json` and add an object:

```json
{
  "title": "Void Sessions 013",
  "series": "KYTONAUTS",
  "platform": "Mixcloud",
  "url": "https://www.mixcloud.com/kytonauts/",
  "date": "Jun 2025",
  "duration": "1:04:12",
  "description": "Short description of the session.",
  "imageClass": "art-horizon",
  "featured": true
}
```

Only one mix should have `"featured": true`.

### Add A New Release / Track

Edit `src/data/tracks.json` and add an object:

```json
{
  "title": "New Signal",
  "type": "Single",
  "platform": "SoundCloud",
  "url": "https://soundcloud.com/kytonauts",
  "detailsUrl": "mailto:kytonauts@proton.me",
  "date": "2026",
  "description": "Short release description.",
  "imageClass": "art-signal",
  "featured": false
}
```

### Social Links

Edit `src/data/socials.json`:

```json
{
  "name": "YouTube",
  "url": "https://www.youtube.com/@kytonauts",
  "label": "YouTube"
}
```

Supported icon names in the current component:

- `SoundCloud`
- `Instagram`
- `YouTube`

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the Vite app and deploys `dist/` to GitHub Pages on pushes to `main` or `master`.

For this repository (`kytonauts.github.io`) the Vite `base` is `/`, which matches the root GitHub Pages domain.

The custom domain/CNAME is not managed from this repo.


tracks:

[
  {
    "title": "Obsidian Gate",
    "type": "EP",
    "platform": "SoundCloud",
    "url": "https://soundcloud.com/kytonauts",
    "detailsUrl": "mailto:kytonauts@proton.me",
    "date": "2024",
    "description": "Dark, architectural pressure and metallic atmosphere.",
    "imageClass": "art-obelisk",
    "featured": false
  },
  {
    "title": "Zero Horizon",
    "type": "EP",
    "platform": "SoundCloud",
    "url": "https://soundcloud.com/kytonauts",
    "detailsUrl": "mailto:kytonauts@proton.me",
    "date": "2023",
    "description": "Hypnotic motion across cold industrial space.",
    "imageClass": "art-horizon",
    "featured": false
  },
  {
    "title": "Signal Fade",
    "type": "EP",
    "platform": "SoundCloud",
    "url": "https://soundcloud.com/kytonauts",
    "detailsUrl": "mailto:kytonauts@proton.me",
    "date": "2022",
    "description": "Minimal signal, controlled distortion and forward tension.",
    "imageClass": "art-signal",
    "featured": false
  }
]


mixeS:

[
  {
    "title": "Void Sessions 012",
    "series": "KYTONAUTS",
    "platform": "Mixcloud",
    "url": "https://www.mixcloud.com/kytonauts/",
    "date": "May 2025",
    "duration": "1:07:32",
    "description": "A focused session of dark momentum, pressure and late-night atmosphere.",
    "imageClass": "art-horizon",
    "featured": true
  },
  {
    "title": "Void Sessions 011",
    "series": "KYTONAUTS",
    "platform": "Mixcloud",
    "url": "https://www.mixcloud.com/kytonauts/",
    "date": "Apr 2025",
    "duration": "1:02:48",
    "description": "Hypnotic techno and stripped industrial movement.",
    "imageClass": "art-signal",
    "featured": false
  },
  {
    "title": "Void Sessions 010",
    "series": "KYTONAUTS",
    "platform": "Mixcloud",
    "url": "https://www.mixcloud.com/kytonauts/",
    "date": "Mar 2025",
    "duration": "59:31",
    "description": "Deep, driving and atmospheric.",
    "imageClass": "art-obelisk",
    "featured": false
  }
]
