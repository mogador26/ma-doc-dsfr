---
layout: doc
order: 0
tags: ["utilisateurs","données", "développement", "hébergement"]
---

<PdfThemeBadge/>

# Guide d'intégration d'une application dans l'écosystème ministériel  

## Introduction  

Une application, avec son contexte qui lui est propre, doit pouvoir s’interfacer avec l’ensemble des outils, processus, chaînes de services, permettant d’assurer son maintien en condition au sein du système d'information du ministère, et de celui de l'État. Plus précisément :

- l'application aura tout bénéfice à utiliser des **communs**, composants et services existants qu'il convient de ne pas réécrire, avec pour ne citer que celles-ci, les fonctions d'identification et d'authentification des utilisateurs, les services de confiance (signature électronique, horodatage...), les services d'archivage, etc.
- l'application pourra, plutôt que de les recréer, réutiliser les **données** existantes, voire des traitements de ces données ; à l'inverse, elle peut être amenée à rendre disponible les données ou traitements qu'elle va créer,
- l'application doit être sécurisée,
- et bien sûr, l'application doit pouvoir être exploitée, hébergée, soutenue à moindre coût par les professionnels qui assurent ces services

**Le guide d’intégration se focalise sur l’intégration de l’application au sein du SI de l’Administration**. Il ne traite pas de son architecture technico-fonctionnelle.  

## Structure du document  

**Le guide liste les 6 piliers d'une intégration réussie:** 

1. les utilisateurs (usagers comme agents), 
1. les données et les API, 
1. la sécurité, 
1. la fabrique de code
1. l'hébergement, 
1. les services transverses. 

**Chacun de ces piliers sera décliné en domaines et chaque domaine fait l'objet d'une fiche**.

Chaque pilier est constitué de plusieurs Domaines, qu’il est nécessaire de couvrir pour favoriser l’homologation de l’application. 

Chaque fiche, relevant d'un pilier et d'un domaine, est structurée de la façon suivante : 
- le **principe recherché**
- les **impacts sur l'application**
- les **règles et recommandations** : nous conservons ici la même signification que dans le CCT historique (pré V3). Les règles s'imposent, les recommandations sont à comprendre comme des bonnes pratiques.
- **informations utiles** : le guide se veut avant tout une aide à l'acteur ministériel. Celui-ci trouvera dans ce pavé d'information tous les liens vers des éléments pouvant lui faciliter la tâche : contacts, offres de service, ressources utiles, zones d'échange et de collaboration ... 

## Les piliers de l'intégration  

Le tableau qui suit liste les 6 piliers d'une intégration réussie, mentionnés plus haut, et les décline de façon plus précise en domaines à couvrir. Dans une phase de dégrossissage, ce tableau peut servir de check list pour le chef de projet et lui permettre d'éviter des surprises au moment de l'intégration ou de la mise en production.  

<div class="table-responsive">
<table class="table table-bordered table-striped">  
<thead> <!-- En-tête du tableau -->  
<tr>  
<th>Piliers</th>  
<th>Fiches de domaine</th>  
<th>Check</th>  
</tr>  
</thead>  
<tbody>  
<!-- Corps du tableau -->  
<!-- 1er pilier PU -->  
<tr>  
<td rowspan="6"><a href="./1-Pilier_utilisateur/index">1 - Utilisateur (personne physique ou morale, usager ou agent)</a></td>  
<td><a href="./1-Pilier_utilisateur/1-gestion_identite_usager">1 - Gestion de l’identité des usagers</a></td>  
<td></td>  
</tr>  
<tr>  
<td><a href="./1-Pilier_utilisateur/2-gestion_identite_agent">2 - Gestion de l’identité des agents</a> </td>  
<td></td>  
</tr>  
<tr>  
<td><a href="./1-Pilier_utilisateur/3-gestion_identite_personne_morale">3 - Gestion de l’identité des personnes morales</a></td>  
<td></td>  
</tr>  
<tr>  
<td><a href="./1-Pilier_utilisateur/4-utilisateur_ENTA">4 - L’environnement de travail numérique de l’utilisateur (ENTA pour l’agent)</a> </td>  
<td></td>  
</tr>  
<tr><!-- v3.1.0 désactivation du lien CSU  
<td><a href="./1-Pilier_utilisateur/5-xxx.md">5 - Chaîne de soutien utilisateur</br>(Fiche non consultable pour le moment) </a> </td> 
<td> </td>  --> 
</tr> 
<tr>  
<td><a href="./1-Pilier_utilisateur/6-utilisateur_qualite_parcours_utilisateur">6 - Qualité du parcours utilisateur</a> </td>  
<td></td>  
</tr>  
<!-- 2 eme pilier - PD -->  
<tr>  
<td rowspan="5"><a href="../2-Pilier_donnees_et_API/">2 - Données & API</a></td>  
<td><a href="./2-Pilier_donnees_et_API/1-Donnees_et_API_Donnees_et_services">1 - Données et services</a></td>  
<td></td>  
</tr>  
<tr>  
<td><a href="./2-Pilier_donnees_et_API/2-Donnees_et_API_Gestion_des_echanges">2 - Gestion des échanges</a> </td>  
<td></td>  
</tr>  
<tr>  
<td><a href="./2-Pilier_donnees_et_API/3-Donnees_et_API_Analyser_et_valoriser_les_donnees">3 - Analyser et valoriser les données</a></td>  
<td></td>  
</tr>  
<tr>  
<td><a href="./2-Pilier_donnees_et_API/4-Donnees_et_API_Donnees_personnelles">4 - Données personnelles</a> </td>  
<td></td>  
</tr>  
<tr>  
<td><a href="./2-Pilier_donnees_et_API/5-Donnees_et_API_Cycle_de_vie">5 - Cycle de vie de la donnée / Archivage</a></td>  
<td></td>  
</tr>  
<!-- 3 eme pilier PS -->  
<tr>  
<td>3 - Sécurité</td>  
<td><a href="./3-Pilier_securite/">1 - La sécurité (SSI, DISSIP, PSSI...) et l'homologation</a> </td>  
<td></td>  
</tr>  
<!-- 4eme pilier PF-->  
<tr>  
<td>4 - Fabrique de code</td>  
<td><a href="./4-Pilier_fabrique_de_code/Forges_integration_et_deploiement_continu">1 - Forges d'intégration et de déploiement continus</a></td>    
<td></td>  
</tr>
<!-- 5eme pilier PH-->  
<tr>  
<td>5 - Hébergement</td>  
<td><a href="./5-pilier_hebergement/">1 - Mise en place d'un hébergement</a></td>     
<td></td> 
</tr>
<!-- 6eme pilier PA-->  
<tr>  
<td>6 - (Autres) Service transverse</td>  
<td><a href="./6-Pilier_services_transverses/">1 - Synthèse des services transverses</a> </td>  
<td></td>  
</tr>  
</tbody>  
</table>
</div>

> _Remarque : a noter que les aspects "chaine de soutien utilisateur" (domaine 4 du pilier 1) et "services de supervision" (domaine 2 du pilier 5) n'ont pas été adressés dans cette version du document._
