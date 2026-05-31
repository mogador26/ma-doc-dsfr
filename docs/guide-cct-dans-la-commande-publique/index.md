---
tags: ["Gouvernance", "marché"]
order: 3
lastupdated: true
editLink: false
---

<PdfThemeBadge/>
<Badges/>

# Guide d’utilisation dans la passation des marchés publics

## <a name="CCT">Cadre de Cohérence Technique (CCT)</a>

Le Cadre de Cohérence Technique (CCT) est un dispositif, à disposition des acteurs SIC, chefs de projets et prestataires, qui a pour objectif la maîtrise du système d’information, la réduction des coûts et la capitalisation sur les compétences. Il concourt à fournir à l’utilisateur – qu’il soit citoyen/usager, agent, entreprise, ou association - un service numérique de qualité. Cet objectif de qualité doit s'entendre dans toutes ses composantes :

- en terme de qualité logicielle : un service simple et compréhensible, répondant au besoin, accessible à tous, sécurisé, et préservant les données personnelles
- en terme de délai et d'évolutivité : le bon service au bon moment
- en terme de coût : même si en général le service est gratuit, c'est bien l'argent du contribuable qui est mobilisé pour le produire, le maintenir et le faire évoluer

Le CCT du ministère de l'intérieur est constitué de nombreux contenus, mais dans l'optique des marchés publics deux éléments jouent un rôle fondamental :

- un guide d'intégration
- un référentiel de produits


### <a name="GI">Le guide d'intégration</a>

Le guide d'intégration liste les conditions de la bonne intégration d'une application dans l'écosystème ministériel et interministériel. Il ne porte pas, ou peu, sur l'architecture interne de ladite application mais apporte un cadre quant à ses interfaces avec l'écosystème du SI de l'État. La conformité de l'application ou du produit à ces interfaces en est un gage de réussite. Les interfaces sont classifiées dans 6 piliers que sont l'utilisateur, les données et API, la sécurité du SI, la fabrique de code, l'hébergement et les services transverses. Cf schéma ci-dessous.

![Rosace](/img/CommandePubliquesAutres.png)

Chaque pilier comporte un certain nombre de fiches de domaine qui énoncent chacune

- le contexte et les enjeux du domaine
- les règles et recommandations propres au domaine
- les composants mutualisés, les API, ou les offres de service sur étagère, qu'il convient d'utiliser sauf justification expresse

### <a name="Prod">Le référentiel des produits</a>

Le référentiel des produits est l’une des composantes, historique, du CCT ministériel. Il concourt à la finalité du CCT en préconisant, pour chaque fonction logicielle des composants maîtrisés par le ministère, avec une parité volontariste entre solution éditeur et solution libre.

Certains produits, quand ils ne figurent pas au référentiel, peuvent déroger à la règle commune s'ils sont **logiciels « embarqués » dans une application métier.** On entend par logiciel « embarqué » dans une application métier un logiciel **qui ne nécessite aucune intervention ni aucune compétence spécifique de la part des exploitants** (dont les intégrateurs, architectes ....) , notamment :

- l'installation et la mise à jour de ces logiciels embarqués sont pleinement intégrées à celles de l'application métier qui les utilise
- ces composants ne nécessitent pas de TMA (Tierce Maintenance Applicative) ni de MCO (Maintien en Conditions Opérationnelles) spécifique.

### <a name="Regl">Règles et recommandations</a>

|Ref|Statut|Intitulé|
|---|------|--------|
|-|RG|` `Un fournisseur désirant inclure dans sa solution un composant non référencé et donc non maîtrisé par le ministère dans le référentiel des produits du CCT, devra remplir les garanties pour que celui-ci puisse être considéré comme un logiciel « embarqué » dans l’application, et devra s’assurer que l’usage de ce composant n’impact pas la sécurité du SI. La gestion de ce composant est alors à la charge du demandeur sur tout le cycle de vie de celui-ci.|

## <a name="Doc">Ressources documentaires</a>

De nombreux clausiers sont disponibles sur étagère. Quelques références suivent ci-dessous.

- Le site <https://www.numerique.gouv.fr/> présente dans le cas du logiciel libre des [« conseils à la rédaction de clauses de propriété intellectuelle pour les marchés de développement et de maintenance de logiciels libres »](https://www.economie.gouv.fr/apie/actualites/conseils-redaction-clauses-propriete-intellectuelle)
- Le [site du SHFD - Service du Haut Fonctionnaire de Défense](http://ssi.minint.fr) présente ses propres [clauses concernant la sécurité du système d'information](http://ssi.minint.fr/index.php/clauses-de-securite-dans-les-marches) ainsi qu'un [guide de l'externalisation](http://ssi.minint.fr/files/referentiel_SSI/SSI_global/Guide_externalisation_V_1_0-1.pdf)
- Clausier propriété intellectuelle avec l’APIE et la DAE (Direction des Achats de l'État), daté de mars 2019 : [Guide de l'achat public - Achats informatiques et propriété intellectuelle](https://www.economie.gouv.fr/files/files/directions_services/dae/doc/Guide_PII_web.pdf).
- Pour information : [Publications de l'Agence du Patrimoine Immatériel de l'État (APIE)](https://www.economie.gouv.fr/apie/publications)

**Remarque :** le contenu des offres de service est mis à disposition du soumissionnaire en tant que de besoin.
