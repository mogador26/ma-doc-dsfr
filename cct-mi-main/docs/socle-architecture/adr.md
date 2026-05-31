---
layout: doc
editLink: false
lastUpdated: true
order: 1
---

## Architecture Decision Record (ADR)

Une décision d'architecture est un choix de conception d'un logiciel qui répond à une exigence fonctionnelle ou non fonctionnelle importante. 
Le format des [ADR](https://adr.github.io/) prend en compte à la fois la date de prise de décision, du statut de la décision, les différentes options envisagées voire dans certains cas les conséquences de la décision par rapport au contexte du produit numérique construit.

Un enregistrement de décision d'architecture  capture une seule décision architecturale de manière courte et ciblée (1 à 3 pages en général). L'ensemble des ADR créés et conservés dans le cadre d'un projet constitue son journal des décisions (docs/adrs).


### 📌 Mémoire organisationnelle

Les équipes évoluent — les développeurs partent, arrivent, changent de projet. Sans ADR, le **"pourquoi on a fait ça"** se perd. Les ADR constituent une mémoire écrite des choix techniques et évitent de répéter des erreurs passées ou de remettre en question des décisions déjà tranchées.

### 🤝 Alignement d'équipe

Rédiger un ADR force une **discussion explicite** avant de prendre une décision. Cela aligne l'équipe, expose les alternatives envisagées, et documente les compromis acceptés — plutôt qu'une décision prise en solo dans un coin.

### 🔍 Auditabilité et traçabilité

Dans des contextes réglementés ou avec des audits (sécurité, conformité, etc.), pouvoir retracer **qui a décidé quoi, quand, et pourquoi** a une vraie valeur. Les ADR s'intègrent naturellement dans un dépôt Git et bénéficient ainsi du versioning.

### 🔄 Facilitation des révisions

Un ADR bien rédigé **au fomat Markdown** inclut le **contexte qui a motivé la décision**. Quand ce contexte change (nouvelles contraintes, nouvel outil, croissance de l'équipe), il est beaucoup plus facile de réévaluer la décision de manière éclairée plutôt qu'à l'aveugle.

### 🚀 *Onboarding* accéléré

Un nouveau développeur qui lit les ADR comprend rapidement les **choix structurants du projet** — pourquoi PostgreSQL plutôt que MongoDB, pourquoi une architecture hexagonale, pourquoi tel framework — sans avoir à interroger tout le monde.

---

**Une ADR est immuable** : seul son statut peut changer (c'est-à-dire qu'elle peut devenir obsolète ou remplacée). Ainsi, l'on dispose de l'historique complet du projet en lisant simplement son journal de décisions dans l'ordre chronologique. 

En outre, le maintien de cette documentation vise à : 
- 🚀 Améliorer et accélérer l'intégration d'un nouveau membre de l'équipe 
- 🔭 Éviter l'acceptation/le retour aveugle d'une décision passée  
- 🤝 Formaliser le processus de décision de l'équipe

### Le statut d'une ADR peut avoir les états suivants :

- Brouillon
- Proposée
- Acceptée ou Rejetée
- Obsolète voire Remplacée


🚀 modèle d'ADR: [lien](adr-modele)



