# CCT (Cadre de cohérence technique) 

Le cadre de cohérence technique est basé sur [vitepress](https://vitepress.dev/). Ce produit est basé sur vue.js.
Vitepress est également utilisé pour la documentation:
 - [cloud pi native](https://cloud-pi-native.fr/).
 - [vue.js dsfr](https://vue-ds.fr/)


## Prérequis
- Node.js +22.12.0 
- npm


## Installation playwright

- apt-get update 
- npx playwright install 
- npx playwright install-deps

## Installation
```bash
npm install
```

## Lancer en local
```bash
npm run dev
```

## Build statique
```bash
npm run build
```

## Docker
```bash
docker build -t cct-mi:*tag* .
docker run --rm -p 8080:80 cct-mi:*tag*
```

Puis ouvrir http://localhost:8080

## Générer les PDF (1 PDF par thème)
```bash
npm run pdf
```

Les PDF sont générés dans `dist-pdf/`.

> Note: la génération PDF utilise Playwright (Chromium). Au premier run, Playwright peut télécharger les binaires nécessaires.

## Téléchargement des PDF par thème
Après `npm run build` (ou `npm run pdf`), les PDF sont copiés dans `docs/public/pdf/` et accessibles sur le site via `/pdf/<nom>.pdf`.


## Version
La version du cadre est définie dans `package.json` (`version`) et affichée automatiquement sur le site.

## Mode public / mode interne

Le site peut être généré en **mode public** ou **mode interne**.  
Le filtrage se fait **à la construction** via le frontmatter de la page (les pages `audience: ["interne"]` sont exclues du build public).

### Développement
```bash
npm run dev:public
# ou
npm run dev:interne
```

### Build
```bash
npm run build:public
# ou
npm run build:interne
```

### Marquage d’une page en interne uniquement
Dans le frontmatter Markdown :
```md
---
audience: ["interne"]
---
```

Par défaut, une page sans champ `audience` est incluse dans les deux modes.

## CI/CD

- La chaine primaire est positionnée au niveau du gitlab de la forge DC. Il est possible de tester la mise à jour du site via la génération d'un gitlab pages.

- La chaine secondaire est positionnée au niveau de la console DSO.