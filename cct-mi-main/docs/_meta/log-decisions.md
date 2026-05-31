---
layout: doc
---

# Log des décisions

## Version stable du 18 Juillet 2025
 - erratum sur le référencement des produits veeam

## Version stable du 08 Juillet 2025
 - Mise à jour du référentiel des produits : sauvegarde (veeam), développements (vscode, vscodium, cypress, playwright), système d'exploitation des postes de travail (Debian), Apache Superset, Talaxie (en observation)
 - Changement de statut du produit Talend OpenStudio
 - Mise à jour des informations ANFSI
 - Mise à jour du modèle de Document d'Architecture Général
 - Ajout des éléments d'informations concernant les procédures d'exploitation de la sécurité (guide d'intégration / pilier sécurité)
 - Ajout de la spécification asyncAPI (API Asynchrone) dans la stratégie d'API

## Version stable du 06 Août 2024
 - Mise à jour du document d'expression de besoins pour un nouvel outil du numérique (ENT).
 - Mise à jour des liens forge DC et Cloud PI Native

## Version stable de Juillet 2023 
- Production d'une version stable nettoyée des données obsolètes ou érronées.
- Integration des retours ENTA et integration du Cloud Pi Native.
- Document préalablement partagé avec l'ensemble des acteurs du Comité pour validation mutuelle.

## Mise à jour Oracle Java de juillet 2020

- Oracle Open JDK en version 11, version LTS (Long Term Support), est recommandée par le [SILL](https://code.gouv.fr/sill/detail?name=OpenJDK) et le CCT s'aligne. Bien noter la disparition dans cette version du JWS (Java Web Start) et la nécessité dorénavant pour les applications d'embarquer leur runtime java.
- En corrolaire, Oracle Open JDK en version 8 passe en état migration.

## Nouvelle politique d'Oracle pour Java - Point partiel juin 2019

Java a modifié sa polique Java. Le référentiel des produits a été modifié en conséquence.
- En matière de **serveurs**
  - la préférence pour l'openJDK versus Oracle JDK est réaffirmée.
  - Oracle a introduit une notion de version LTS (Long Term Support) qui se focalise sur des versions précises, révisables tous les trois ans. Dans cette optique l'openJDK version 8 reste recommandée, la version LTS suivante est la version 11, placée en observation. [Remarque : les versions non LTS, par exemple 12, sont tout à fait déconseillées]
- En matière de **poste de travail**
  - Rappel, la notion même de JRE disparait avec Java 11 : les applications doivent maintenant embarquer leur propre runtime java.
  - Disparition dans le même temps des applets et du Java Web Start (JWS)
  - En conséquence, les JRE 7 et 8 sont placée en statut "Migration". 
  - Néanmoins, le poste de travail devra maintenir, pour des raisons de compatibilité avec des applications anciennes, une ou plusieurs versions de JRE
  - Le comité sollicite en ce moment les DSI pour énoncer les bonnes pratiques permettant de faciliter la coexistence des différentes JRE et nouvelles applications post java 11 sur un même poste de travail.

## Comité du 22/05/2019

- **Inscription de l'hyperviseur Hyper-V au CCT.** Sollicité par le CCN (Centre de Compétence Nationale) virtualisation en environnement Windows opéré par le SGAMI Ouest, le comité a décidé d'inscrire l'hyperviseur Hyper-V au référentiel de produit du CCT, avec une restriction d'usage : l'usage d'Hyper-V est limité aux serveurs d'applications bureautiques et ou locales. La notion de serveur s'étend aux postes windows 10 faisant office de serveur dans les petits sites (moins de 20 postes). Cette restriction d'usage pourra être revue au regard de la future politique relative à l'environnement de travail numérique de l'agent (ENTA). Pour information, des architectures type sont préconisées par le CCN virtualisation : vous trouverez ses coordonnées dans la fiche services transverses du guide d'intégration.
- Demande d'inscription de modules de formation à la gestion de crise, sous forme de "serious game". Le comité considère que ces "jeux", installables sur des postes d'agent en préfecture, sont des outils "métier", et ne relèvent donc pas d'une inscription au référentiel des produits du CCT.

## 14 mars 2019 - Robotic Process Automation

Le comité d'architecture, en la personne du référent DNUM Philippe Bron, a été sollicité pour l'inscription au CCT d'un produit de [RPA](https://en.wikipedia.org/wiki/Robotic_process_automation), Blue Prism. La thématique RPA (Robotic Process Automation) est dans la liste des évolutions qui pourraient entrer au CCT. Il faut cependant en mesurer les impacts et un retour d'expérience d'un projet l'ayant mis en oeuvre sera un bon moyen de disposer d'une évaluation de cette technologie. Accord est donc donné pour un usage dans le cadre d'un PoC dans le cadre de l'ANF (Accès à la Nationalité Française). Le retour d'expérience de ce PoC alimentera les réflexions du comité architecture du CCT. Noter que cet accord ne présage en rien de l'inscription de Blue Prims au référentiel de produits du CCT.

## Comité du 27/11/2018

- Décision de créer un log public des décisions du comité
- Composer, gestionnaire de dépendances PHP, est élargi à l'ensemble du MI
- La demande d'inscription d'HyperV, du SGAMI Ouest, pour le compte du CCN "Virtualisation en environnement Windows", est suspendue dans l'attente d'une étude de migration demandée dans la lettre de mission de ce CCN.

## Comité du 12/04/2018

Il existe au CCT plusieurs composants de base pour la virtualisation de serveur (les
hyperviseurs) :

- KVM, l’hyperviseur opensource fourni en standard dans les distributions Linux
- vSphere, l’hyperviseur de l'éditeur VMware
- et pour le contexte plus restreint du poste de travail : VirtualBox de l'éditeur Oracle et VMware Workstation
- Remarque : l’hyperviseur HyperV de Microsoft n'est pas inscrit

Au-delà du composant hyperviseur, un centre d'hébergement va utiliser d'autres outils pour gérer et orchestrer son infrastructure de virtualisation : ces outils ne sont pas inscrits au CCT (à l'exception du Vcenter qui est intimement lié à vSphere). Dans le cas de KVM, plusieurs outils existent, comme Proxmox, Ovirt, OpenNebula... Le comité CCT considère que le choix de ces outils incombe à la communauté des hébergeurs / exploitants, dont il ne fait pas de doute qu'elle en a une pleine maîtrise et qu'elle assume les conséquences de ses choix. En effet, l'usage de ces outils n'a pas d'impact sur les projets ni d'effet structurant sur les architectures applicatives, et le CCT n'apporterait aucune plus-value à préconiser un produit plutôt qu'un autre.

Pour toutes ces raisons, le comité ne fera pas de préconisation sur ce segment de produit.