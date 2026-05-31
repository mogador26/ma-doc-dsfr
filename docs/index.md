---
newsletter:
  social_title: "Abonnez-vous aux flux RSS"
  rss: true
---

# Documentation du thème Mkdocs DSFR

Le composant [mkdocs-dsfr](https://pypi.org/project/mkdocs-dsfr/) est un thème pour [Mkdocs](https://www.mkdocs.org/) permettant de créer une documentation conforme au [DSFR](https://www.systeme-de-design.gouv.fr/), le système de design de l'Etat.

/// alert | Avertissement
    type: warning
Ce thème est uniquement destiné à être utilisé pour les sites et applications officiels des services publics français. Son objectif principal est de faciliter l'identification des sites gouvernementaux pour les citoyens.
///

## Prérequis

- Python 3.10 ou supérieur
- *(Facultatif mais recommandé) :* [uv](https://docs.astral.sh/uv/getting-started/installation/) pour la gestion des paquets Python. Vous pouvez néanmoins utiliser pip si vous le souhaitez. Le guide de démarrage rapide ci-dessous utilise uv.

## Démarrage rapide

> Pour expérimenter rapidement mkdocs avec le DSFR, vous pouvez cloner le [projet d'exemple](https://gitlab-forge.din.developpement-durable.gouv.fr/pub/numeco/mkdocs-dsfr-exemple), construit avec [uv](https://docs.astral.sh/uv/), un gestionnaire de paquets Python moderne et rapide.

### Installation avec uv

- Initialiser un nouveau projet avec uv

```bash
mkdir ma-doc-dsfr
cd ma-doc-dsfr
uv init
```

- Installer la dépendance mkdocs-dsfr. Cette dépendance installera sur votre projet Mkdocs lui-même et toutes les dépendances nécessaires.

```bash
uv add mkdocs-dsfr
```

- (Recommandé) Installer le plugin [Open in a new tab](#) afin de détecter les liens externes et de les ouvrir dans un nouvel onglet, avec une icône reconnaisable.

```bash
uv add mkdocs-open-in-new-tab
```

- Modifier le fichier `mkdocs.yml` pour utiliser le thème dsfr. Ajouter les lignes suivantes en fin de fichier.

```yaml
theme:
  name: dsfr
  locale: fr

plugins:
  - search:
      lang: fr
  - open-in-new-tab
  - tags_index
  - rss
  - git-revision-date-localized
  - dsfr_base

markdown_extensions:
  - dsfr_structure.extension.all_extensions
  - pymdownx.snippets
  - pymdownx.highlight:
      use_pygments: true
  - pymdownx.emoji:
      options:
        attributes:
          align: absmiddle
          height: 20px
          width: 20px
  - pymdownx.superfences
  - toc:
      permalink: false
      toc_depth: 2
  - attr_list
  - def_list
  - tables
```

La directive `theme` permet de spécifier le thème à utiliser. Dans ce cas, nous utilisons le thème `dsfr`. L'option `locale` permet de définir la langue de la documentation. C'est utile pour l'accessibilité de la page et le fonctionnement de certains plugins. Dans ce cas, nous utilisons le français (`fr`).

La directive `plugins` permet d'ajouter des plugins supplémentaires à Mkdocs. Dans ce cas, nous ajoutons le plugin `search` pour la recherche dans la documentation.

Enfin, la directive `markdown_extensions` permet d'ajouter des extensions Markdown supplémentaires. Dans ce cas, nous ajoutons plusieurs extensions pour améliorer la syntaxe Markdown et profiter pleinement du thème DSFR.

- Lancer Mkdocs en mode développement. Ce mode permet de visualiser la documentation générée en temps réel.

```bash
uv run mkdocs serve
```

- Pour construire la documentation, utilisez la commande suivante :

```bash
uv run mkdocs build
```

La documentation est alors créée dans le dossier `site` de votre projet. Félicitations, vous avez créé votre première documentation avec le thème DSFR ! Dans la [section suivante](options), nous allons explorer les différentes options de configuration disponibles pour personnaliser votre documentation.


