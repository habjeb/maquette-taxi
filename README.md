# Taxi Pro — maquette liquid glass

Page de présentation pour un chauffeur de taxi indépendant. Le contenu reste celui de la maquette : ville, numéro et avis sont des exemples. L’interface reprend le langage visuel d’un landing « liquid glass » : fond quasi noir, pilule de navigation givrée, titre Instrument Serif avec un seul mot en italique, cartes en verre, pied de page discret.

Application [Vite](https://vite.dev) + React + TypeScript. Les polices viennent de [Fontsource](https://fontsource.org) : Instrument Serif, Newsreader, Geist et Geist Mono.

## Site en ligne

**https://habjeb.github.io/maquette-taxi/**

Le workflow `.github/workflows/pages.yml` lance `npm ci` puis `npm run build`. La base Vite est `/maquette-taxi/` (`vite.config.ts`). GitHub Pages doit être activé sur le dépôt (Source : GitHub Actions). Un dépôt privé exige un forfait qui inclut Pages.

## Reconstruire

```bash
npm ci
npm run dev
npm run build
```

Le serveur de développement sert l’application sous [http://127.0.0.1:5173/maquette-taxi/](http://127.0.0.1:5173/maquette-taxi/). `npm run build` écrit `dist/` et copie `dist/index.html` vers `dist/404.html`.

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

`33600000000` est le format international, sans `+` ni espaces. Le titre de `index.html` reprend aussi « Votre ville ».

Photos : remplacez `public/assets/chauffeur.svg` et `public/assets/taxi.svg`. Le texte alternatif est dans `src/sections/Chauffeur.tsx` et `src/sections/Ride.tsx`.

Le formulaire n’enregistre rien. Il ouvre WhatsApp avec le message préparé.

## Avant un site officiel

Retirez « Maquette — Web Commit » dans le pied de page, la balise `noindex` de `index.html`, et complétez la carte professionnelle, le SIRET et l’assurance.
