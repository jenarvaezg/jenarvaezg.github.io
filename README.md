# jenarvaezg.github.io

Portfolio personal de José Enrique Narváez, bilingüe (inglés/español), construido con Astro 5 + Tailwind CSS v4 y desplegado en GitHub Pages.

**[Ver online](https://jenarvaezg.github.io)** · **[/es/](https://jenarvaezg.github.io/es/)**

## Stack

- **Astro 5** (sin islas dinámicas — todo estático)
- **Tailwind CSS v4** (vía `@tailwindcss/vite`)
- **TypeScript strict**
- **i18n** nativo de Astro (`en` por defecto, `es` en `/es/`)
- **GitHub Pages** vía GitHub Actions

## Estructura

```
src/
├── data/
│   ├── resume.ts        # Fuente única para hero, about, experience, skills, education, nav
│   ├── projects.json    # Lista canónica de proyectos (también consumida por el README del perfil)
│   └── aoc.json         # Lista canónica de Advent of Code
├── components/          # Secciones presentacionales (reciben { lang })
├── layouts/Layout.astro # HTML wrapper, fuentes, estilos globales
├── pages/
│   ├── index.astro      # /
│   └── es/index.astro   # /es/
└── styles/global.css
```

## Desarrollo local

```bash
npm install
npm run dev          # http://localhost:4321
```

## Otros comandos

```bash
npm run check        # Astro type-check
npm run build        # Build de producción a dist/
npm run preview      # Previsualizar build
npm run sync:profile # Regenerar tabla de proyectos para jenarvaezg/README.md
```

Para sincronizar el README del perfil de GitHub:

```bash
npm run sync:profile -- --write ../jenarvaezg/README.md
```

## Convenciones

- **Copy bilingüe**: cualquier texto visible vive en `src/data/resume.ts` o `projects.json` como `Record<Lang, string>`. Cambios de copy actualizan `en` *y* `es` en el mismo commit.
- **Sin strings hardcodeados** en componentes: si aparece en pantalla, viene de `src/data/`.
- **Tabla del perfil generada**: la sección "Featured Projects" del [perfil de GitHub](https://github.com/jenarvaezg) se genera desde `projects.json` con `npm run sync:profile`. No editarla a mano.

Más detalle para agentes y contribuidores en [`AGENTS.md`](AGENTS.md).

## Deploy

Push a `main` → GitHub Actions ejecuta `astro check` + `astro build` → publica `dist/` en GitHub Pages.

## Licencia

Contenido (copy, fotos, CV) © José Enrique Narváez. Código del sitio bajo MIT.
