---
layout: doc
tags: ["NFR","api","Data"]
editLink: false
---

# Concevoir une application orientée données et services  

<Badges/>

## Les données

**Les données** sont un patrimoine de l'État. Leur portée et leur importance peuvent déborder du traitement de l'application qui va les exploiter. Il est donc important, dès la conception d'un nouveau traitement ou d'une nouvelle application, de formaliser une réponse structurée, aux interrogations suivantes :

| Sujet |Quelle question doit on se poser ?  |
|-------|------------------------------------|
| [Réutilisation](#Réutilisation) (consommation de données déjà existantes) | les données que doit manipuler mon application existent-elles déjà ailleurs et ai je envisagé une réutilisation ? |
| [Exposition](#Exposition) des données|l'application est elle pensée pour faciliter la réutilisation des données qu'elle crée ou transforme ?|
| [Exposition de traitements](#Traitements)|Au-delà d'une exposition brute de données, les **traitements** sur les données peuvent être exposés. Sont-ils exposés en vue d'une réutilisation possible ?|

## Les services

Réutiliser des données, exposer des données, exposer des traitements : ces actions sont des **services**. Ceux-ci sont « exposés » aux travers d'interfaces, ou API (Application Programming Interface). L'API est un service WEB qui utilise le protocole http(s) et un style d'architecture REST ou REST full.

Le type d'interface dont il sera question dans la suite de la fiche sera ce type d'API HTTP/REST.

La [Stratégie d’API](../../strategie-api/sommaire.md) du CCT décrit la démarche dans toute sa dimension : architecture, design, sécurité et gouvernance. 

### <a name="Réutilisation">Réutilisation</a>

**Rappel de la question initiale :** les données que doit manipuler mon application existent-elles déjà ailleurs ? Ai-je envisagé leur réutilisation ?

Le traitement de cette question nécessite de croiser les données métier manipulées par l'application avec les données réutilisables, au niveau ministériel comme interministériel.

Il peut s'agir :

- de données de référence, souvent qualifiés de "communs", exposés sur des dispositifs de type MDM (Master Data Management) - Il peut s'agir du GDR (Gestion de Données de Référence) de la DTNUM, ou les données de référence exposées par le SIR de l'ANFSI pour la sécurité intérieure ;
- de données exposées dans le SI de l'État, dans le cadre État Plateforme et de FranceConnect Plateforme. Exemple : l'API Entreprise ;
- de données exposées par d'autres applications ;
- de données ouvertes.

Deux types de vérifications sont à réaliser pour chaque donnée manipulée :  
1. existence de la donnée au sein du ministère de l’Intérieur;
2. réutilisation de la donnée dans le contexte de l’application 

**Existence de la donnée au sein du ministère de l’Intérieur**  

Plusieurs sources de données sont disponibles au sein du ministère de l’Intérieur : 
- les données ouvertes de l’État dans [data.gouv.fr](https://www.data.gouv.fr/fr/)
- le référentiel patrimonial des applications du Ministère de l’intérieur, [Référentiel des applications](https://referentiel-applications.interieur.rie.gouv.fr/)
- le catalogue des données du ministère de l'intérieur :  [catalogue.data.minint.fr](http://catalogue.data.minint.fr)
- les catalogues d’API (la majorité des API exposent des données plus que des traitements) : [**api.minint.fr** pour l'accès aux données en interne](http://api.minint.fr/) pour le ministère et [api.gouv.fr](http://api.gouv.fr/) pour l'État.


**Réutilisation de la donnée dans le contexte de l’application**  

En cas de réutilisation, il est nécessaire de s’assurer que :
- sa sémantique soit compatible, 
- sa qualité soit satisfaisante,
- la qualité de service de l'exposition soit compatible avec les exigences de l’application, 
- les performances soient suffisantes,
- qu'une solution de repli ait été prévue en cas d'interruption de service, le cas échéant qu'un contrat de service ait été établi avec le fournisseur. 
  
### <a name="Exposition">Exposition des données</a>
  
**Rappel de la question initiale :** l'application contribue t elle à la réutilisation des données qu'elle crée ou transforme ?

Une application peut produire des données métier qui peuvent contribuer à la réutilisation de données, au-delà du contexte de l'application. Conformément à l'approche État Plate-forme avec ses API données, il est obligatoire de prévoir une exposition de ces données pour une ré-utilisation éventuelle. 

Modalités d'exposition : une exposition par API, quand elle ne participe pas à un inter-ou intra-applicatif planifié, doit utiliser les services d'une plateforme d'échange et sa brique de gestion d'API (API Management) pour intégrer un certain nombre de services tels que : 
  
- la gestion de la performance (il est possible de limiter les appels par acteurs - throttling, quotas)
- le contrôle d'accès s'il est nécessaire
- la contractualisation avec l’offre de service [MonComptePro](https://moncomptepro.beta.gouv.fr/) de la DINUM
- la traçabilité et l'accounting
- de la conversion (API SOAP en API REST par exemple)

Une donnée de référence est définie par les propriétés suivantes :
- utilisation fréquente par un grand nombre d'utilisateurs, internes et externes
- qualité critique pour un grand nombre de processus
- sémantique partagée et relativement stable dans le temps
- durée de vie qui va au-delà des processus opérationnels qui les utilisent
- facilité d'accès à ces données est critique

Si la donnée entre dans cette catégorie des données de référence, il est nécessaire de la traiter comme telle, et d'utiliser un système d'exposition dédié : GDR ou SIR.

### <a name="Traitements">Exposition de traitements</a>

**Rappel de la question initiale :** Au-delà d'une exposition brute de données, les **traitements** sur les données peuvent être exposés ? Sont-ils exposés en vue d'une réutilisation possible ?

L’exposition public d’un traitement via une API REST-Full est requise pour tout partage inter-applicatif. 

Ces API doivent être exposés dans une passerelle d’API (INES, SIR) et décrite au travers d’un catalogue. Le catalogage interne MI se fait sur <http://api.minint.fr/>  , le catalogage sur internet se fait sur <https://api.gouv.fr/>
  
## Règles et recommandations  

Pour information, il existe des règles pertinentes dans le périmètre des référentiels de données dans le [Cadre Commun d'Architecture des Référentiels de données.](../7-Annexes/Cadre-Commun-d-Architecture-des-Referentiels-de-donnees.pdf)

Le référentiel "stratégie d'API" est lui même un recueil de règles et de recommandations (ou bonnes pratiques) : [Stratégie d'API - Règles et recommandations](../../strategie-api/sommaire.md)

| Ref  | Statut | Intitulé |Date|
|------|--------|----------|----|
|EXI-DATA-1445|RG|Pour toute donnée, les conditions d'une possible réutilisation doivent être envisagées. Réutilisation en mode différé sous forme de publication de jeu de données ouvertes, et exposition au fil de l'eau sous forme d'API.||
|EXI-DATA-1446|RG|Toute nouvelle API susceptible d'être réutilisée, doit être cataloguée et documentée sur le catalogue api du ministère (api.minint.fr) si son usage est strictement restreint au ministère, sinon sur celui de l'état (data.gouv.fr).||
|EXI-DATA-1447|rc|Toute nouvelle API susceptible d'être réutilisée devrait être exposée via l'une des plateformes d'API Management du ministère.||
|EXI-DATA-1448|RG|En cas de consommation d'API externe, l'intermédiation d'une plateforme d'échange doit être privilégiée.||
|EXI-DATA-1360|RG|Il est obligatoire de réutiliser les données existantes||
|EXI-DATA-1100|RG|Les composants fonctionnels manifestement communs à plusieurs applications doivent être développés sous forme de services réutilisables.||


  
