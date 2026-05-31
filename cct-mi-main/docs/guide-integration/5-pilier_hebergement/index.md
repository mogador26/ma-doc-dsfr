---
layout: doc
tags: ["cloud","hébergement"]
editLink: false
---

# Mise en place d'un hébergement

<Badges/>

### Grandes tendances

Le métier de l'hébergement est en pleine mutation sous l'effet de plusieurs tendances :

- Des **tendances technologiques**
  - de la virtualisation au cloud,
  - de la machine virtuelle au conteneur
  - avec comme dénominateur commun la mise en place des mécanismes d’automatisation : intégration continue, déploiement continu des applications comme des infrastructures.
- Des **tendances métier**
  - interpénétration du métier des "dev" (développeurs) et de celui des "ops" (exploitants hébergeurs) - le DevOps,
  - interpénétration des métiers et des développeurs avec l'expansion des méthodes agiles.
- Des **tendances organisationnelles au niveau de l'état**,
  - qui structure de façon croissante la production informatique sur un petit nombre de sites,
  - et qui travaille activement à l'intégration et à l'ouverture de tous les SI jusqu'ici gérés en silos.

### Doctrine de l'Etat

Ces tendances se sont matérialisées par

- La “circulaire du 8 novembre 2018 relative à la doctrine d’utilisation de l’informatique en nuage par l’Etat” publiée sur [LEGIFRANCE](http://circulaires.legifrance.gouv.fr/pdf/2018/11/cir_44120.pdf).
- La “circulaire n° 6282-SG du 5 juillet 2021 relative à la doctrine d’utilisation de l’informatique en nuage par l’État” publiée sur [LEGIFRANCE](https://www.legifrance.gouv.fr/download/pdf/circ?id=45205).

Le tableau qui suit synthétise les deux solutions d’hébergement  étatiques, cloud interne (cercle 1) et cloud externe ou commercial  (cercle 3), avec leur conditions d’usage :


|Cercle de solution|  Condition d'usage | Nature du service | Disponibilité de offre | Catalogue |
|:----------------:|--------------------|-------------------|------------------------|-----------|
|Cloud interne<br> (cercle 1)|Données et traitements sensibles jusqu’à classification DR,<br> Besoins régaliens | Service de type IaaS et PaaS, sur une base OpenStack,<br> Service de type Caas sur une base Openshift/Kubernetes<br> infrastructure interne (Cloud-PI et Nubo [MINEFI/DGFIP]).<br> Conformité au référentiel SecNumCloud Essentiel de l’ANSSI | Cloud-PI : redondé sur deux sites, en cours de bascule sur une nouvelle architecture (GEN2)| Cloud-PI : [PI - catalogue de services numériques du Ministère de l’Intérieur](https://pi.interieur.rie.gouv.fr/home-dnum/cloud-%CF%80/)<br> Nubo : [offre de service](https://portailnubo.dgfip.finances.rie.gouv.fr/offre-de-services/) |
|Cloud externe/commercial<br> (cercle 3)|Données et traitements non sensibles|Service de type SaaS, sur cloud public|Marché Cloud Cercle 3 notifié depuis la fin du 1er semestre 2020.|[**Catalogue UGAP**]<br> Une convention entre l’UGAP et la DTNUM est signée depuis début novembre 2020 pour le périmètre du ministère de l’Intérieur. |
|Cloud commercial de confiance<br> (cercle 3 SecNumCloud) | Données et traitements peu sensibles |Service de type SaaS, sur cloud public|Marché Cloud Cercle 3 notifié depuis la fin du 1er semestre 2020.|[**Catalogue UGAP**]<br> Une convention entre l’UGAP et la DTNUM est signée depuis début novembre 2020 pour le périmètre du ministère de l’Intérieur.|

Les échanges sont autorisés entre clouds de cercle différent, dans le respect du contexte de l’application, des réglementations et cadres normatifs.

## Impact sur les applications

La doctrine d’utilisation de l’informatique en nuage par l’État a des  impacts importants sur l’hébergement d’une application.  Le positionnement d’une application sur un cloud de 1er ou 3ème cercle  dépend avant tout du niveau de sensibilité des données qu’il manipule.  La décision peut aussi varier en fonction d’éléments contextuels comme  des accords commerciaux ou des tensions diplomatiques.

### Mise en place d'un hébergement

Sachant que les conventions de service de ministère à ministère sont appelées à se multiplier, cette fiche CCT de l’hébergement prend le parti de d'aligner l'offre de service d'hébergement ministérielle à l'offre de service inter-ministérielle telle qu'elle est décrite dans le schéma directeur des infrastructures d’hébergement inter-ministériel, réalisé sous l’égide de la DINUM avec les DSI ministérielles. Ce catalogue de service, issus de ce schéma directeur, décrit les types de prestations assurées dans le cadre d’une convention entre l’offreur de service et sont bénéficiaire. Cette description couvre les domaines suivants :
- la description du service
- le périmètre de la prestation
- la responsabilité des acteurs
- les modalités de mise en œuvre et de gestion des services considérés
- les engagements sur les niveaux de qualité de service.

Ce document de référence, reconnu au niveau inter-ministériel (CINUM), décrit des engagements de service standard, susceptibles d’être complétés par chaque offreur.
La présente fiche, comme le catalogue dont elle s’inspire, est structurée selon une vue « bénéficiaire ». Elle adresse plusieurs types de bénéficiaires : des maîtrises d’oeuvre, consommatrice de services d’infrastructure (offre IaaS d’un cloud par exemple), des responsables de projets SI, et finalement des utilisateurs finaux (offres de type SaaS).

Remarque : cet hébergement peut ne concerner qu'une partie de l'application concernée.

#### Service offert par les hébergeurs

Les services d’hébergement et d’exploitation offerts au sein du ministère sont structurés par le catalogue sus-nommé qui en établit le cadre, et complétés par les services propres à chaque hébergeur. Ces offres s’appuient sur des infrastructures techniques dont l’architecture est exposée par chaque offreur de service.

#### Qui sont les hébergeurs du ministère

Le ministère possède aujourd’hui deux instances d’hébergement centrales ainsi que des instances d'hébergement zonales. Les instances d'hébergement centrales :

- Celui du centre d’hébergement (CH) de la DTNUM, qui héberge les plateformes ISOCELE et CLOUD PI, et opère trois sites :
  - le **SIR (Service informatique de Rosny)**, qui opère les salles B021 et B015 qui a une vocation interministérielle,
  - le **SIL (Service informatique de Lognes)**
  - le **SIVM (Service informatique du Val Maubouée)**.
- Celui du STIG, avec les centres de Rosny et Nogent. Le STIG a aujourd’hui une forte orientation sécurité intérieure.

Les instances d'hébergement zonales : les SGAMI, dont la préfecture de police de Paris et le SGAMI EST.

Outre leur centre d'hébergement zonal, Les SGAMI peuvent être Centre de Compétence national (CCN) sur des compétences qui leur sont spécifiques. Le chapitre des informations utiles liste les fonctions d’hébergement et d’exploitation des SGAMI et de leurs CCN.

#### Cycle de vie d’un hébergement et convention

La mise en place d’un hébergement est matérialisée par une demande d’hébergement, puis par l’élaboration et la signature d’une convention avec un hébergeur. Cf liens en fin de fiche. Ces actions s’intègrent dans un cycle de vie de l’hébergement
1. le bénéficiaire évalue ses besoins fonctionnels, les services nécessaires
2. le bénéficiaire fait une demande d’hébergement (cf formulaire en fin de fiche)
3. mise au point de la convention et de ses annexes et signature de la convention (cf conventions type en fin de fiche)
4. mise en place de l’hébergement et mise en production
5. fonctionnement courant
6. phase de réversibilité ou de dé-commissionnement


## Règles et recommandations

|Ref|Statut|Intitulé| Date |
|---|------|--------|------|
|EXI-HEB-1001|RG|L’hébergement et l’exploitabilité d’une application sont à prendre en compte dès la phase amont du projet. Le centre d'hébergement doit être impliqué en amont du projet pour pouvoir assurer l'hébergement dans de bonnes conditions.|
|EXI-HEB-1002|RG|Les DBA des hébergeurs ne sont pas habilités à répondre à des demandes d’extraction de données. Il appartient au concepteur de l’application de prévoir ses propres mécanismes d’extraction de données en conformité avec la loi ou les règlements européens.|
|EXI-HEB-1003|RG|Les demandes d’hébergement d’application nationale sont traitées par le BPAH (DTNUM/SDAS). <br>Les demandes sont à adresser au BRM ( à l’adresse <dnum-brm-contacts@interieur.gouv.fr>)|
|EXI-HEB-1004|RG|Les hébergements doivent être pensés « Cloud First ».|
|EXI-HEB-1347|RG|La journalisation doit être prévue dès la conception de l'application en indiquant notamment les personnes autorisées à y accéder, le mode d'administration et la durée de conservation.|
|EXI-HEB-1000|RG|Lorsque l’application comporte des chemins différents entre deux composants, le fichier de paramètres doit systématiquement contenir les éléments nécessaires à l’établissement du chemin principal, mais également à l’établissement d’un chemin de secours.|
|EXI-HEB-1008|RG|Une application utilisant un socle technique donné doit être développée dans un souci de compatibilité avec les autres applications utilisant ce même socle.|
|EXI-HEB-1009|RG|Les chefs de projets des services techniques centraux doivent respecter les dispositions relatives à la gestion de la plate-forme de production centralisée décrites en annexe du CCT.|
|EXI-HEB-1012|RG|La sauvegarde des données applicatives s’appuie sur des solutions mutualisées mises en œuvre par le ministère.|
|EXI-HEB-1014|RG|Les outils d'ordonnancement ne doivent pas être utilisés à des fins d'orchestration de processus métier.|
|EXI-HEB-1019|RG|Les journaux doivent respecter le format défini par le ministère conformément aux « Normes d'exploitation » dont les éléments nécessaires seront fournis aux titulaires.|
|EXI-HEB-1020|RG|"L’application doit disposer d’un mode trace, qui permet, en cas de défaillance, de comportement suspect, ou de test intensif, de suivre pas à pas son déroulement (horodatage du début et de la fin de chaque module applicatif au minimum).<br>Ce mode trace doit ainsi permettre :<br>- de suivre pas à pas le déroulement des opérations, à un niveau très fin (opération unitaire de donnée stockée, de transfert de message, de traitement)<br>- de fournir le contenu des données liées aux opérations précédentes<br>- d’indiquer précisément la position de l’opération dans le programme<br>- de détailler précisément toutes les erreurs, ou problèmes, même internes<br>- de fournir un niveau d’importance aux fonctions tracées, et aux erreurs<br>- d’être activé, et de ne garder que le niveau d’information choisi (niveau du point précédent)<br>- d’archiver les informations sur une période assez longue (compte tenu du niveau choisi), de l’ordre de plusieurs jours à plusieurs semaines<br>- d’archiver ces informations et de les purger, ceci de manière automatique."|
|EXI-HEB-1021|RG|Le mode trace ne doit pas être dépendant d’un outil de développement particulier. Il doit être intégré dans le produit final, comme une option de fonctionnement.|
|EXI-HEB-1022|RG|Le mode trace doit pouvoir être activé/supprimé dynamiquement. Le niveau de détail du mode trace doit pouvoir être spécifié/modifié dynamiquement.|
|EXI-HEB-1023|RG|Tout processus d’une application doit «journaliser» le moment où il est lancé et le moment où il s’arrête. En cas de fin anormale, un message d’erreur doit être journalisé. La description de ce message doit être contenue dans la documentation de mise en exploitation.|
|EXI-HEB-1051|RG|Les journaux doivent être stockés sur les disques locaux des serveurs. L'application doit permettre de les dupliquer vers un système externe.|
|EXI-HEB-1052|RG|La journalisation technique repose aujourd'hui sur : l'association NAGIOS/application PROLOG ou SYSLOG. Le cahier des charges techniques précisera,en fonction du centre d'hébergement retenu, les spécifications .|
|EXI-HEB-1053|RG|Les environnements virtualisés doivent se faire sur les produits référencés au CCT.|
|EXI-HEB-1054|RG|Les disques d'un serveur connectés en architecture DAS (Direct Attached Storage) ont pour vocation de n'accueillir que le système d'exploitation et les logiciels de base.|
|EXI-HEB-1349|RG|Toute application (ou sous-application) doit:<br>- être identifiée par un trigramme;<br>- correspondre à une arborescence normalisée par environnement (production, développement, ...) sur un espace de stockage dédié;<br>- l'espace de stockage peut comprendre un à plusieurs groupes de volumes (ou disques) et systèmes de fichiers.|
|EXI-HEB-1007|RG|Les informations/traitements sensibles doivent être hébergés sur des serveurs physiquement distincts des serveurs hébergeant des informations/traitements non sensibles.	|
|EXI-HEB-1015|RG|Les opérations de télémaintenance par un prestataire externe, quand elles sont autorisées doivent systématiquement être réalisées avec le système SPAN|
|EXI-HEB-1002|rc|La répartition des flux est assurée par les équipements réseaux en frontalité de la ferme des serveurs de présentation.|
|EXI-HEB-1003|rc|Les mécanismes de haute disponibilité et de répartition de charge entre les serveurs de présentation et les serveurs d’application sont ceux présents nativement dans les technologies utilisées.|
|EXI-HEB-1004|rc|Pour le 'tiers' serveur base de données, les solutions de haute disponibilité unifiées, standard, et industrielles à disposition dans les centres de service sont privilégiées. A défaut les solutions fournies par les moteurs SGBD seront utilisées.|
|EXI-HEB-1010|rc|Les bases de données et les fichiers, doivent pouvoir (si le système de gestion de données le permet), être sauvegardés dynamiquement (sauvegardes dites bases «ouvertes»).<br>L’application doit offrir la possibilité de verrouiller les mises à jour, tout en maintenant les consultations actives.|
|EXI-HEB-1013|rc|La sauvegarde des bases des données<br>- soit sensibles et volumineuses<br>- soit accessibles 24h/24<br>s’effectue à chaud en utilisant l'une des technologies suivantes :<br>- les snapshots des solutions de stockage disque<br>- l’agent spécifique du logiciel de sauvegarde lorsqu’il est disponible.|
|EXI-HEB-1018|rc|Dans le cas de journaux applicatifs répartis, il faut garantir le respect de la chronologie des opérations (exemples : horodatage, numéro de séquence, ...).|
|EXI-HEB-1099|RG|Toutes les actions contribuant au lancement ou à l’arrêt de l’application, doivent pouvoir être déclenchées par une commande unique et s'enchaîner ensuite automatiquement.|
|EXI-HEB-1220|RG|L’application ne doit ni imposer, ni embarquer de solution d’ordonnancement liées aux travaux d'exploitation et d'administration.|
|EXI-HEB-1289|RG|L’application doit permettre les points de synchronisation assurant une cohérence fonctionnelle pour les sauvegardes de contextes entiers.|
|EXI-HEB-1297|RG|Tous les paramètres de l'application doivent être regroupés dans un fichier.|
|EXI-HEB-1299|RG|L'application doit fournir une commande permettant d'interdire toute nouvelle connexion utilisateur, sans perturber les connexions en cours.|
|EXI-HEB-1300|RG|L'application doit fournir une commande permettant l'arrêt de toutes les connexions utilisateur en cours.|
|EXI-HEB-1302|RG|"Toutes les actions d’exploitation et de pilotage de l’application doivent pouvoir être déclenchées :<br>- manuellement en mode «expert» (mode commande) ou en mode «novice» (interface graphique),<br>- et automatiquement par un automate (soumission de scripts sans aucune intervention humaine)."|
|EXI-HEB-1303|RG|Le fonctionnement normal et quotidien d’une application ne doit pas solliciter une intervention directe d’un opérateur.|
|EXI-HEB-1304|RG|Tous les logs des applications doivent être tracés dans un fichier au format ASCII.	|
|EXI-HEB-1319|RG|L’application ne doit pas imposer des composants logiciels qui seraient incompatibles avec la solution de sauvegarde mutualisée mise en oeuvre par le service d'exploitation.|
|EXI-HEB-1301|rc|L'application doit fournir une commande permettant de passer, à tout moment, en mode «consultation».|
|EXI-HEB-1035|RG|Dans les centres d'exploitation, les données ne sont pas stockées sur les serveurs mais sur des systèmes partagés (exemple SAN/NAS).	|
