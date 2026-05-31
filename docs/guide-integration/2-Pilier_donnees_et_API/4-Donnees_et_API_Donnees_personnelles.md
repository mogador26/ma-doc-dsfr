---
layout: doc
tags: ["RGPD","Data","api"]
editLink: false
---

# Gestion des données personnelles  

<Badges/>  
  
## Contexte  
 
Les dispositions de l’article 4 du RGPD précisent : «données à caractère personnel», toute information se rapportant à une  personne physique identifiée ou identifiable (ci-après dénommée  «personne concernée») ; est réputée être une «personne physique  identifiable» une personne physique qui peut être identifiée,  directement ou indirectement, notamment par référence à un identifiant,  tel qu'un nom, un numéro d'identification, des données de localisation,  un identifiant en ligne, ou à un ou plusieurs éléments spécifiques  propres à son identité physique, physiologique, génétique, psychique,  économique, culturelle ou sociale. Au vu de cette définition, la majorité des applications du ministère de l’intérieur traitent des données personnelles.
La protection des données personnelles relève de plusieurs cadres juridiques :
- Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016, relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données, et abrogeant la directive 95/46/CE (règlement général sur la protection des données).
- Loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés
- Directive (UE) 2016/680 du Parlement européen et du Conseil du 27 avril  2016 relative à la protection des personnes physiques à l'égard du  traitement des données à caractère personnel par les autorités  compétentes à des fins de prévention et de détection des infractions  pénales, d'enquêtes et de poursuites en la matière ou d'exécution de  sanctions pénales, et à la libre circulation de ces données, et  abrogeant la décision-cadre 2008/977/JAI du Conseil 
- La sûreté de l'État et le renseignement

  
### Le RGPD  
  
Le règlement européen renforce de façon significative les droits de l'usager sur ses données personnelles, notamment :
- Droit d'accès aux données, de rectification
- Selon les circonstances : droit à l'effacement, opposition
- Pour certains traitements (et très rare au MI) : portabilité des données


[Politique de conformité des données personnelles du ministère de l'intérieur (PCDP-MI)](http://sg.minint.fr/images/RGPD/PCDP_MI_V1_03062019.pdf)
  
Les dispositions du RGPD ne parlent pas d’« application informatique » *stricto sensu* mais plutôt de « **traitement** »** . Un traitement selon les dispositions de l’article 4 du RGPD constitue « *toute opération ou tout ensemble d'opérations effectuées ou non à l'aide de procédés automatisés et appliquées à des données ou des ensembles de données à caractère personnel, telles que la collecte, l'enregistrement, l'organisation, la structuration, la conservation, l'adaptation ou la modification, l'extraction, la consultation, l'utilisation, la communication par transmission, la diffusion ou toute autre forme de mise à disposition, le rapprochement ou l'interconnexion, la limitation, l'effacement ou la destruction* ». Il s’agit donc d’une définition très large qui désigne toute action sur les données personnelles. Un traitement peut être automatisé (une ou plusieurs applications) ou non (par exemple l'utilisation de la messagerie électronique pour envoyer un mail). Le RGPD s’applique donc à tout traitement, ainsi qu’à tous les fichiers (dont un simple tableau Excel), même papier.

Selon le RGPD, tout traitement doit avoir un **responsable de traitement** : dans la pratique celui qui détermine la finalité et les moyens du traitement, tel qu’un préfet d'un département, ou le directeur d'une administration centrale.

Règle : Chaque responsable de traitement a l'obligation de maintenir un *registre* des traitements dont il a l’initiative (ce qui exclut les traitements nationaux dont il n’est qu’utilisateur). Ce registre pourra être audité par la CNIL, et également, en tant que document administratif, communiqué sur demande citoyenne après occultation des mentions relatives à la sécurité (Cf annexe 2 de la note du DPD).

Lorsqu'un traitement est susceptible "d'engendrer un risque élevé pour les droits et les libertés des personnes physiques" (art 35 du RGPD), **le responsable du traitement doit faire mener une analyse d'impact du traitement sur la protection des données à caractère personnel**.

**Remarque :** l'analyse d'impact est souvent nommée PIA, Privacy Impact Assesment ou encore Étude d'Impacts sur la Vie Privée. (Cf annexe 3 de la note du DPD). Elle doit comporter l’avis du délégué ministériel à la protection des données avant sa validation par le responsable du traitement. L’analyse permet de vérifier la conformité juridique du traitement, d’évaluer les risques, et de mettre en place les mesures de sécurité appropriées. Si une homologation SSI est menée, il est recommandé de la coupler à l’analyse d’impact RGPD : les deux vont recenser les mêmes risques (notamment SSI), et elles différeront sur le périmètre des enjeux : impact sur les droits et libertés pour la PIA, impact sur le ministère pour l’homologation SSI.
  
### La loi 78-17 Informatique et libertés 
L’entrée en vigueur du RGPD a entraîné l’abrogation de certaines dispositions de cette loi. Toutefois, certaines autres dispositions restent en vigueur afin de préciser les marges de manœuvre nationales du RGPD.

Ainsi, le chapitre II de la loi fixe les conditions de licéité des traitements de données à caractère personnel ; le chapitre III contient les dispositions relatives à la Commission nationale de l'informatique et des libertés (CNIL).
 
  
## Impacts pour l'application  

La protection des données à caractère personnel, que celle-ci relève du RGPD ou de la loi n° 78-17 du 6 janvier 1978 (périmètre sécurité publique et infractions pénales) a un **impact important pour l'application** dans l'ensemble de son cycle de vie (conception, exploitation, décommissionnement). Ainsi que le spécifie le RGPD dans l'article 25, la protection des données doit être prise en compte **dès la conception, et par défaut** (*privacy by design*, *privacy by default*).

Le guide méthodologique de la CNIL « Analyse d'impact relative à la protection des données / La méthode», la démarche de mise en conformité s'appuie sur deux piliers : 
- les **principes et droits fondamentaux**, sont réglementaires, et de facto obligatoires sans condition. On peut citer parmi les droits fondamentaux, l'information des personnes concernées, l'exercice des droits selon les situations (d'accès, de rectification, d'effacement, de limitation du traitement ....)
- la **gestion des risques sur les droits et libertés des personnes**, qui permet de déterminer les mesures techniques appropriées.

La mise en conformité nécessite la mise en place d'un ensemble de mesures, d'ordre fonctionnel, organisationnel, ou de mise en place de processus et techniques Ces dernières relèvent du présent cadre de cohérence technique.

Les relations avec les sous-traitants qui traitent des données personnelles pour le compte du ministère sont également impactées (nouveaux devoirs du sous-traitant). Le cadre juridique impose de :
- mettre en conformité avec l’article 28 du RGPD l’ensemble des contrats de sous-traitance;
- sécuriser les données ; à ce titre, la mise en place d’un dispositif de journalisation participe à cette sécurisation. La CNIL a émis une recommandation en 2021 en ce sens (cf. délibération n° 2021-122 du 14 octobre 2021 portant adoption d'une recommandation relative à la journalisation.
- pour tous les traitements : mettre en place du concept de limitation du traitement des données (marquage de certaines données pour empêcher leur utilisation, sans toutefois les effacer).

La CNIL a édité un catalogue des mesures de mise en conformité (Analyse d'impact relative à la protection des données / Les bases de connaissance). Le tableau ci-dessous synthétise dans ce catalogue les mesures techniques relevant du CCT.


|Mesures de protection des données (extrait guide CNIL cité ci dessus)| Mesures techniques|
|--|---|
|2 - Anonymisation|Identifier les données pertinentes et supprimer les données inutiles, sur les données. Sur les éléments d’identification directe ou à valeur rare, anonymiser selon la technique adéquate : randomisation ou généralisation.|
|3 - Archivage|La protection des données à caractère personnelle a des impacts sur la politique d’archivage. Cf fiche cycle de vie de la donnée. (offre de service Maarch RM, VITAM, chiffrement des données)|
|4 - Chiffrement|Le référentiel de composant du CCT préconise des composants de chiffrement, comme les composants PRIM’S|
|8 - Contrôle des accès logiques|Cf Fiches identification et authentification de l’agent et de l’usager|
|11 - Exercice des droits de l’usager|Ces nouveaux droits de l’usager induisent principalement des mesures organisationnelles.Du point de vue technique, la mise en œuvre des droits de l’usager nécessite un bon niveau d’authentification de celui-ci. \_Cette fonction pourrait être utilement mutualisée par un téléservice au niveau ministériel (ou au-delà).|
|19 - Gestion des postes de travail|La protection des données à caractère personnelles implique le poste de travail. Cf fiche ETNA|

Remarque : Le CCT préconise d’utiliser les mesures proposées par la CNIL comme un guide, dans le respect du contexte de l’application et du Ministère de l’Intérieur
  
Le guide CNIL « [Analyse d'impact relative à la protection des données](https://www.cnil.fr/fr/RGPD-analyse-impact-protection-des-donnees-aipd) » dans son volet base de connaissance est un catalogue des mesures destinées respecter les exigences légales du RGPD et à traiter les risques.
