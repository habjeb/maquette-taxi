# Taxi Pro — maquette React

Page de présentation pour un chauffeur de taxi indépendant. Elle sert à valider le ton, les rubriques et le rendu mobile avant un éventuel site officiel. Le contenu reste celui de la maquette : ville, numéro et avis sont des exemples.

Application [Vite](https://vite.dev) + React + TypeScript + Tailwind. Les animations viennent de [React Bits](https://reactbits.dev), bibliothèque gratuite : le code des composants est installé dans ce dépôt (`src/components`). Aucun composant React Bits Pro n’est utilisé.

Ce dépôt est le build React Bits actuel, extrait de l’archive source. Une intégration anime.js peut encore arriver séparément via une pull request Origin ; elle n’est pas dans cette version.

## Site en ligne

Adresse prévue :

**https://habjeb.github.io/maquette-taxi/**

Le site est publié par GitHub Actions (`.github/workflows/pages.yml`) à chaque push sur `main` : `npm ci`, `npm run build`, puis `actions/upload-pages-artifact` et `actions/deploy-pages`. La base Vite est `/maquette-taxi/` (`vite.config.ts`), ce qui correspond à un site de projet sous le compte `habjeb` (un site utilisateur ou d’organisation utiliserait `/`).

### Dépôt privé et GitHub Pages

GitHub Pages est gratuit pour les dépôts **publics**. Sur un dépôt **privé**, Pages exige GitHub Pro, GitHub Team ou GitHub Enterprise. Ce dépôt est privé : si l’activation échoue pour cette raison, le workflow reste prêt. Deux options :

1. Rendre le dépôt **public** (Settings → General → Danger zone → Change visibility), puis laisser le workflow déployer. L’URL ci-dessus fonctionne alors sans abonnement payant.
2. Héberger ailleurs en un clic, sans rendre le code public sur GitHub Pages :
   - [Vercel](https://vercel.com/new) : importer `habjeb/maquette-taxi`. Framework Vite. Build `npm run build`, dossier de sortie `dist`. Définir la variable d’environnement n’est pas nécessaire si la base reste `/maquette-taxi/` uniquement pour Pages ; sur Vercel à la racine du domaine, il faut repasser `base` à `/` dans `vite.config.ts` (ou `base: '/'`).
   - [Netlify](https://app.netlify.com/start) : même build `npm run build`, publish directory `dist`, et `base: '/'` si le site est servi à la racine du domaine.

Le premier déploiement crée l’environnement `github-pages`. GitHub peut demander une approbation (Settings → Environments → github-pages, ou l’onglet Actions du premier run) avant que l’URL réponde.

## Reconstruire

En local :

```bash
npm ci
npm run dev
npm run build
```

Le serveur de développement sert l’application sous la base du projet, en général [http://127.0.0.1:5173/maquette-taxi/](http://127.0.0.1:5173/maquette-taxi/). `npm run build` produit le site dans `dist/` et copie `dist/index.html` vers `dist/404.html` pour le repli SPA de GitHub Pages (le site navigue surtout par ancres).

Pour republier : pousser sur `main`. Actions lance le workflow « Deploy GitHub Pages ».

## Composants React Bits

Variante TypeScript + Tailwind, installée avec :

```bash
npx shadcn@latest add https://reactbits.dev/r/<Composant>-TS-TW
```

| Composant | Usage |
| --- | --- |
| Aurora | Fond ambre, lent, limité au haut de page |
| SplitText | Titre « À l’heure. Tarif annoncé. » |
| ShinyText | Sur-titre du bandeau |
| StarBorder | Bouton d’appel principal |
| CountUp | Repères déjà présents dans le texte : 7j/7, 4 passagers, ouverture à 6 h |
| SpotlightCard | Cartes services, zone et horaires |
| TiltedCard | Portrait du chauffeur |
| AnimatedContent | Entrée des sections au défilement |

Les animations respectent `prefers-reduced-motion`.

## Personnaliser

Dans `src/lib/site.ts` :

| Élément | Clé | Valeur actuelle |
| --- | --- | --- |
| Marque | `brand` | Taxi Pro |
| Nom du chauffeur | `driver` | Votre chauffeur |
| Ville | `city` | Votre ville |
| Numéro affiché | `phoneDisplay` | 06 00 00 00 00 |
| Lien d’appel | `phoneTel` | +33600000000 |
| WhatsApp | `whatsapp` | 33600000000 |

`33600000000` est le format international, sans `+` ni espaces. Le titre et la description de `index.html` reprennent aussi « Votre ville ».

Photos :

- Portrait : remplacez `public/assets/chauffeur.svg` (environ 800×1000) et le texte alternatif dans `src/sections/Chauffeur.tsx`.
- Véhicule : remplacez `public/assets/taxi.svg` dans `src/sections/Hero.tsx`.

Couleurs : `--color-amber`, `--color-ink` et `--color-cream` dans `src/index.css`.

Le formulaire n’enregistre rien. Il ouvre WhatsApp avec le message préparé (nom, départ, arrivée, date, heure, précision).

## Avant un site officiel

Retirez la mention « Maquette — Web Commit » dans le pied de page, la balise `noindex` de `index.html`, et complétez la carte professionnelle, le SIRET et l’assurance.

La police [Outfit](https://github.com/Outfitio/Outfit-Fonts) est incluse sous licence SIL Open Font License (`public/assets/fonts/OFL.txt`). Les `@font-face` sont dans `public/fonts.css` (URLs relatives, compatibles avec la base `/maquette-taxi/`).
