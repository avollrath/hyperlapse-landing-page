# HyperType Landing Page

Landing page for [HyperType](https://avollrath.github.io/HyperType/) - a fast-paced synthwave typing shooter built with Godot 4.

## Stack

- [Astro](https://astro.build/) - static site generator
- [Tailwind CSS](https://tailwindcss.com/) - utility-first styling
- TypeScript - strict mode

## Development

```sh
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build for production -> ./dist
npm run preview   # Preview production build locally
```

## Assets

Game screenshots are in `src/assets/images/`:

- `gameplay-screenshot.webp` - in-game screenshot used in hero section
- `menu-screenshot.png` - main menu screenshot used in tech section

Fonts are loaded from Google Fonts (Share Tech Mono) as fallback for Departure Mono. JetBrains Mono is bundled through `@fontsource/jetbrains-mono`.

## Deployment

The `dist/` folder is the production build output.
Deploy to GitHub Pages, Netlify, or Vercel.
For GitHub Pages: set `base` in `astro.config.mjs` if deploying to a subpath.

## Design Reference

Visual identity follows the HyperType brand:

- Primary accent: `#ff00b8` (magenta)
- Secondary accent: `#00d6ff` (cyan)
- Background: `#04060d`
- Font: Departure Mono (monospace, arcade feel)
