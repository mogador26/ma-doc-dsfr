---
tags: ["Gouvernance", "Principes"]
order: 4
status: "Brouillon"
editLink: false
---

# Le périmètre

<Badges/>

Le CCT cadre les attentes concernant les applications en datacenter ou déployés dans un environnement Cloud.<br/>
Le [**CCT Cloud Native**](https://github.com/cloud-pi-native/cct-cloud-native/) complète ce document pour l’intégration et le déploiement d’une application dans l’offre Cloud du Ministère de l’Intérieur.<br/>
Le [**CCT ENT**](https://postedetravail.interieur.rie.gouv.fr/referentiels-et-tableaux-de-bord/cct/) complète ce document pour la description des environnements de travail des agents du MI, hors agences et GN. 

Par ailleurs, le cadre de cohérence spécifique à l’ANFSI porte la dénomination RDSI. Il intègre les exigences propres aux missions de l’ANFSI ainsi qu'aux spécificités de ses environnements d’hébergement tout en respectant les principes directeurs du CCT.

Le CCT s'intéresse à 6 domaines principaux, ou piliers :

1. l'**utilisateur**, – qu’il soit citoyen/usager, agent, entreprise, association – Ce domaine primordial adresse différents thèmes comme son identification / authentification / autorisation, l’environnement numérique de travail de l’agent (ENTA), les chaînes de soutien, la qualité et l’accessibilité du service rendu
2. les **données et les API**, patrimoine du SI de l’État et socle sur lequel se fonde le service rendu à l'utilisateur
3. la **sécurité** du service et la protection des données personnelles
4. la **fabrique de code** qui traite du "build" au travers des processus d'intégration et de déploiement continu
5. l'**hébergement** qui traite du "run" et des problématiques d'hébergement et d'exploitation
6. les **services transverses** : services de confiance, gestion électronique de courrier, ..etc.

Le socle **architecture** vient compléter ces piliers.

Dans ces domaines préférentiels,

- il édicte **des règles et des recommandations**,
- et il référence **les composants et offres services** portés par les différents acteurs SIC ministériels ou interministériels. Au delà d'un référentiel de cadrage, le CCT se veut un outil de mise en relation entre les producteurs et consommateurs de ces composants et services.

Au delà de ces 6 piliers majeurs, le CCT produit un référentiel de composants, libres ou éditeurs, dont certains sont préconisés à l'échelon ministériel et d'autres à l'échelon d'un acteur SIC. Le CCT se focalise sur les logiciels ou briques de services suivants :

1. **Les composants de base :** ce sont les  briques de  base d’un système d’information. Ils n’ont pas vocation à fonctionner  seul et ne fournissent pas de services finaux aux utilisateurs métiers,  mais sont très structurants pour le SI. Leur  rôle est de fournir des  services à d’autres composants ou applications.
1. **Les outils métier informatiques**, qui permettent à  la fois de créer le service (outils de génie logiciel) et de maintenir  ce service (outils de sauvegarde, de supervision, de déploiement…etc)
1. L**es services applicatifs transverses**. Ceux-ci  font souvent l’objet d’une offre de service, comme l’offre de gestion  électronique de courrier (GEC) bâtie sur le produit Maarch, les offres de SSO  bâties sur le composant LemonLDAP::NG.

Le Schéma ci-dessous représente ce périmètre :

![Criteres](/img/CCT_schema_perimetre.png)

Ainsi, le CCT Traditionnel n’a pas vocation d’apporter les directives suivantes, restant à la discrétion des DSI. 

- les méthodes projet,
- la gestion des développements locaux,
- les environnements de développement
- les piles ou assemblages de composants des services hébergement, dans le sens ou ceux-ci sont considérés comme partie intégrante des offres.
- les applications ou composants logiciels qui ne concourent pas à la conception de produits, **mais qui devront être soumis, durant leur phase de conception, à l’avis de l’architecture d’entreprise**, c’est-à-dire :
  - les logiciels destinés à être installés sur les environnements de travail, à usage local, non structurants et **dont le risque de sécurité a été analysé** que l’on nomme  « logiciels de niche ». 
  - les logiciels ou ensemble de composants, développés ou adaptés pour répondre aux  exigences d’un domaine Métier, que l’on nomme  « applications Métier », **à inscrire obligatoirement dans le référentiel patrimonial des applications** du ministère,
  - les logiciels, composants ou services concourant à la mise en œuvre d’une application Métier, **qui ne nécessite aucune intervention ni aucune compétence spécifique** de la part des exploitants, que l’on nomme « logiciels embarqués ».

Le CCT apporte un ensemble d’exigences et de recommandations que doivent valider les soumissionnaires dans la réponse aux passations de marchés publics. Un ensemble de clauses pouvant être pris en compte dans la notation de ces offres sont donnés à titre indicatif, en lien utiles, dans le chapitre “Guide d’utilisation du CCT dans la passation des marchés publics “. 
