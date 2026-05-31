---
layout: doc
editLink: false
lastUpdated: true
---

# Forges d'intégration et de déploiement continu

## Principe recherché

La construction d'une nouvelle application, d'un nouveau produit, ou d’une évolution fonctionnelle s'appuie aujourd'hui dans une chaîne d'**intégration continue** puis de **déploiement continu**. Les hébergements cloud, du ministère (PI), ou de l'État (PI ou NUBO) renforcent cette tendance.

La **chaîne d'intégration continue** vise à la production, d'un paquetage déployable de l'application ou d'un produit. 

La **chaîne de déploiement continu** vise à automatiser les opérations de déploiement réalisées manuellement par une équipe d'exploitation. Cette automatisation permet de fiabiliser le déploiement et d'augmenter la fréquence des livraisons, et des mises en production. 

Les chaînes d'intégration et de déploiement s'appuient sur une usine de développement, ou forge, constituée d'un ensemble d'outils prenant en compte le contexte du Ministère de l’Intérieur. 

Les services du numérique du ministère de l'intérieur (DTNUM, ANFSI, DSI de la PP et des SGAMI, ...) ont mis en place ces forges d'intégration et ou de déploiement. 

Au sein du Ministère de l’Intérieur, deux  usines logicielles sont disponibles : 

- la **forge MI** [DTNUM](http://forgedc.pages.r2.forge-dc.cloudmi.minint.fr/forge-doc/), usine d’automatisation permettant les déploiements sur des offres IaaS.
- L’[offre DevSecOps, usine logicielle Cloud Native](https://cloud-pi-native.fr/agreement/introduction), supportant le déploiements fréquents sur des offres de conteneurisation managée, et les besoins d’agilité des équipes projet.

Dans la cadre du CCT traditionnel, la **forge MI (DTNUM)**, dont les fonctions recouvrent à la fois intégration et déploiement, est décrite ci après.

## La forge MI (DTNUM)

La **forge MI** est l'offre de service de la DTNUM qui propose l'outillage nécessaire à l'intégration continue, au déploiement continu, et au suivi des projets **sur les offres Cloud PI Gen2 IaaS** :
- gitlab dépôt de code git des scripts de déploiement et autres configurations
- openstack, son API, et des fichiers d'architecture YAML permettant de piloter le cloud PI.
- ansible et python les langages de scripts
- CLI forge MI l'outil en ligne de commande qui assiste l'intégrateur et l'exploitant dans l'automatisation des commandes
- gitlab runner l'ordonnanceur utilisé pour automatiser les actions, à prendre en charge par le projet
- nexus le dépôt de binaires et proxy cache des dépôts applicatifs de l'internet (maven, npm, composer, ...)

### Les fonctions d'intégration continue de la forge MI

La **forge MI** permet de créer des paquetages déployables, au travers une image de contenaire de manière privilégié. Le paquetage déployable à privilégier au sein de la **forge MI** est l'image Docker stockée sur le dépôt Nexus. La reconstruction de cette image Docker et sa validation est effectuée par un pipeline gitlab runner et des scripts Ansible. Outre ce paquetage déployable, les livrables suivant sont aussi obligatoirement présent sur le dépôt Gitlab :
- le code source de l'application
- une version incluse dans l'application (par exemple sur une page)
- une requête runtime de test
- les scripts de build (utilisés pour construire le paquetage)
- les scripts de test introduisant des conditions d'acceptabilité des User Story et qui incluent nécessairement des conditions d'exploitabilité du déploiement

Il est possible de synchroniser la **forge MI (DTNUM)** avec des dépôts externes au ministère de l'intérieur de manière autonome au sein de son projet, par exemple dans un pipeline d'intégration continue. Il s'agit d'opération de type "pull" et à sens unique (l'intérieur va chercher ce qu'il y a à l'extérieur). 

A cet effet, il est **OBLIGATOIRE** de **reconstruire les binaires en interne au ministère de l'intérieur à partir des sources, des scripts, et des dépendances**. Dans ces configurations hybrides (interne/externe), l'homogénéité des configurations influe sur la compatibilité développement/production. La chaîne d'intégration et notamment ses tests automatisés sont les garants de la livraison d'un paquetage déployable opérationnel en production.

### Les fonctions de déploiement continu de la forge MI

La fonction de déploiement de la forge MI s'appuie sur les images gérées par le service Glance d'OpenStack. le CAEX (cahier d'exploitation) est aussi l'un des objectif de livrable de la forge MI. La forge nécessite la mise à disposition d’un CAEX (cahier d'exploitation) par application,  qui référence les commandes permettant de démarrer, arrêter, sauvegarder, restaurer, superviser, déclencher un PRA, etc. . L’équipe de la **forge MI** normalise et accompagne l'exploitant en simplifiant ces procédures.

D'autres outils sont enfin actuellement utilisés au delà du déploiement pour gérer l'exploitation au titre de la sauvegarde et archivage, supervision. Il est obligatoire d'en tenir compte dans les scripts de déploiement pour entrer dans le cadre de l'offre d'exploitation du ministère :

- fournir une sauvegarde régulière en précisant son emplacement, sa fréquence, sa taille et son augmentation, ses règles d'archivage, et le processus de restauration
- fournir une ou plusieurs transaction de test sous la forme d'une URL retournant l'état de fonctionnement de l'application et un message éventuel ciblant le problème relevé


### Impacts sur l'application de la Forge et de l’offre DevSecOps

Le ministère doit pouvoir conserver la maîtrise de ses applications et ses produits, que ceux-ci soient développés en interne ou en participation avec de prestataires externes. Cette maitrise passe par la détention du code source, des licences appropriées, des scripts de compilation et de paquetage, des scripts de construction des infrastructures et de déploiement. En définitive la capacité à reconstruire complètement l'application en cas de perte.

Les usines d'intégration et de déploiement du ministère sont un moyen d'atteindre cet objectif. Celles-ci permettent par ailleurs de mettre à disposition des concepteurs des composants réutilisables.

## Cloud Pi Native DSO 

Les régles de développement pour les appl https://docs.fabrique-numerique.fr

*ADU*


## Règles et recommandations

| Ref | Statut | Intitulé | Date |
|-----|---------|----------|-----| 
|EXI-DEV-1387|RG|Le ministère doit pouvoir conserver la maîtrise de ses applications et ses produits. En conséquence il doit en détenir les codes sources ainsi que tous les scripts permettant leur reconstruction. Cette règle s'applique également à des produits non hébergés sur un site du ministère.|révision initiale|
|EXI-DEV-1389|RG|Il est OBLIGATOIRE de définir et de formaliser un suivi rigoureux des dérogations, des bogues, des anomalies et des vulnérabilités tout au long du développement. Ce suivi, adossé à la matrice de couverture des risques, permettra d’évaluer le niveau de sécurité de l’application à la livraison, et de hiérarchiser les corrections à apporter.<br>Les outils de suivi de développement utilisés doivent intégrer les aspects bogues, anomalies et vulnérabilités afin de suivre l’état de sécurité de l’application tout au long de son cycle de vie, de la conception au retrait de service. Ils doivent intégrer les critères de causes et de conséquences des bogues de sécurité.<br>Les critères de causes et de conséquences des bogues de sécurité doivent s’inspirer des sources ouvertes (OWASP, CWE, etc.).<br>Ces éléments d’information viendront enrichir le dossier de vulnérabilités résiduelles du dossier de sécurité et d’homologation.|révision initiale|
|EXI-DEV-1399|RG|Il est OBLIGATOIRE de réaliser et maintenir à jour un inventaire des codes externes (bibliothèques, framework, API, etc.) utilisés par l’application.|révision initiale|
|EXI-DEV-1418|RG|Il est OBLIGATOIRE de disposer de conventions et de règles de codage adaptées au langage utilisé et de les appliquer dans le cadre du développement.<br>Ces règles et conventions contribuent à la lisibilité et à la qualité du développement de l’application. Elles doivent être jointes à la documentation technique du projet de développement et constituent un référentiel de vérification lors des revues de code. Elles sont idéalement vérifiables à l’aide d’un outil adapté.|révision initiale|
|EXI-DEV-1423|RG|Il est OBLIGATOIRE de mettre en œuvre les fonctions de gestion (création, allocation, libération, etc.) et de manipulation (lecture, écriture, etc.) des ressources informatiques (mémoire, fichier, etc.) au plus près de leur utilisation effective.|révision initiale|
|EXI-DEV-1429|RG|Il est OBLIGATOIRE de réaliser des revues des codes sources pendant la phase d’implémentation et de programmation.|révision initiale|
|EXI-DEV-1430|RG|Il est OBLIGATOIRE de décrire et de formaliser les tests unitaires pour chaque unité de code lors de la phase d’implémentation et de programmation.|révision initiale|
|EXI-DEV-1431|RG|Il est OBLIGATOIRE de mettre en œuvre un processus d’intégration des modules  l’application qui permet de vérifier l’absence de tout dysfonctionnements d’ordre fonctionnel et et technique <br>sur le service lui-même, avec les services qu’il consomme et vis à vis de son contexte d’exécution.|révision initiale|
|EXI-DEV-1432|RG|Il est OBLIGATOIRE de gérer les anomalies détectées lors du processus d’intégration via les outils de suivi des bogues et des vulnérabilités utilisés pour l’application.|révision initiale|
|EXI-DEV-1104|RG|La gestion des anomalies (bug tracking) doit s'appuyer sur les outils recommandés par le CCT.|révision initiale|
|EXI-DEV-1106|RG|La documentation propre à chaque base de données centrale doit être constituée au minimum d'un dictionnaire de données, d'un ensemble de règles de gestion, et d'un modèle conceptuel de données (ou d'un diagramme de classe). Cette documentation, actualisée en fonction d'éventuelles mises à jour, doit être consultable.|révision initiale|
|EXI-DEV-1229|RG|Toute application développée à l’initiative et sous la responsabilité des échelons décentralisés doit:<br>- ne répondre qu'à un besoin local dans le domaine applicatif ;<br>- être réalisée avec les logiciels mentionnés dans le CCT ;<br>- être maintenue localement ;<br>- être en conformité avec la loi informatique et libertés et notamment faire l'objet des déclarations CNIL adaptées en fonction des traitements automatiques effectués ;<br>- faire l'objet d'une utilisation limitée à un réseau local ;<br>- faire l'objet d'une étude de sécurité pour elle-même et vis à vis du système d'information et de communication du ministère.|révision initiale|
|EXI-DEV-1428|rc|Il est RECOMMANDÉ d’effectuer des analyses statiques des codes sources pendant la phase d’implémentation et de programmation.|révision initiale|
|EXI-DEV-1107|rc|Le cadre de cohérence technique RECOMMANDE de respecter :<br>- la démarche générale pour le développement des logiciels,<br>- les règles de nommage et de codage,<br>- les règles pour les journaux et les traces applicatives,<br>- les règles pour la gestion des exceptions,<br>- les règles pour la documentation du code source.|
|EXI-DEV-1108|rc|Le langage UML doit être privilégié pour la modélisation.|révision initiale|
|EXI-DEV-1391|RG|Il est OBLIGATOIRE d’utiliser un outil de gestion de version pour gérer et stocker les fichiers (codes sources, scripts, etc.) des applications.|révision initiale|
|EXI-DEV-1246|RG|Le code source d'une application ne doit pas être adhérent à un EDI.|révision initiale|
|EXI-DEV-1250|RG|L'usage de fichiers dits plats est déconseillé au profit de données structurées (JSON, XML...). L'utilisation de format autre que le XML doit être explicitement justifiée.|révision initiale|
|EXI-DEV-1265|RG|Les codes sources et la documentation des applications doivent être versionnés et centralisés à l'aide d'un outil de gestion de configuration référencé au CCT.|révision initiale|
|EXI-DEV-1279|RG|Les applications PHP ou JAVA doivent utiliser un framework de développement respectant au possible le modèle MVC et référencé au CCT.|révision initiale|
|EXI-DEV-1345|RG|Les jeux de tests permettant d'effectuer les vérifications de bon fonctionnement et de non régression de l'application doivent être fournis conformément à la procédure projet en vigueur en vue d'assurer la qualification des piles logicielles.|révision initiale|
|EXI-DEV-1346|RG| Les développements réalisés en javascript ou python doivent se référer aux règles établies https://docs.fabrique-numerique.fr/  | 2026-05-04|


