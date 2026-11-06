# Taxi Pro — maquette liquid glass

Page de présentation d’un **chauffeur de taxi conventionné indépendant à Lyon** (25 ans de métier, berline Volvo) — pas une centrale de réservation. Le nom, le téléphone et WhatsApp restent des placeholders dans `src/lib/site.ts`.

L’interface reprend un landing « liquid glass » : fond charcoal chaud, grain, dégradé lent, faisceau lié au scroll, pilule de navigation givrée, titre Instrument Serif avec un seul mot en italique, cartes en verre.

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
| Ville | `city` | Lyon |
| Numéro affiché | `phoneDisplay` | 06 00 00 00 00 |
| Lien d’appel | `phoneTel` | +33600000000 |
| WhatsApp | `whatsapp` | 33600000000 |

`33600000000` est le format international, sans `+` ni espaces. Tant que le numéro est un placeholder, il n’est pas repris dans les données structurées.

Photos optimisées : `public/photos/` (Volvo, Lyon aérien, rue lyonnaise, couloir de soins). Le texte alternatif est à côté de chaque image.

Le formulaire n’enregistre rien. Il ouvre WhatsApp avec le message préparé.

## Avant un site officiel

Retirez « Maquette — Web Commit » dans le pied de page, complétez le nom, le téléphone, l’adresse, le SIRET et l’assurance, puis ajoutez le téléphone réel au schéma `TaxiService` si vous le souhaitez.
