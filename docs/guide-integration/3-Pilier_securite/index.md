---
layout: doc
tags: ["ssi","cyber","sécurité"]
editLink: false
---

<Badges/>

# SSI et homologation

## Principe recherché

La **sécurité (SSI)** d’une application est obligatoire, et une des conditions qui lui permettront d’offrir le service attendu en garantissant la disponibilité, la confidentialité et l’intégrité de l’information.

Le souci de la SSI concerne toutes les applications, elle ne se limite pas aux **SI « vitaux » ou « essentiels »** tels que les définit le SHFD.

La SSI doit être prise en compte dès la conception de l’application et jusqu’à son dé-commissionnement. Sa prise en compte est inscrite dans le projet par une **démarche d’intégration de la sécurité des systèmes d’information dans les projet, ou DISSIP**.

Dans le prolongement de la DISSIP, la sécurité de l'application est attestée, avant sa mise en production, par son **homologation de sécurité**. L'homologation permet à un responsable, s’appuyant sur l’avis des experts, de s’informer et d’attester aux utilisateurs d’un système d’information que les risques qui pèsent sur eux, sur les informations qu’ils manipulent et sur les services rendus, sont connus et maîtrisés. La décision d’homologation constitue donc un acte formel par lequel l’Autorité :

- atteste de sa connaissance du système d’information et des mesures de sécurité (techniques, organisationnelles ou juridiques) mises en œuvre ;
- en accepte les risques résiduels

Le responsable de l'homologation de sécurité est l’AQSSI (Autorité Qualifiée pour la SSI,  directeur ou directeur général nommé par arrêté ministériel) de la MOA du projet qui, pour piloter cette démarche, s’appuie sur son Conseiller à la Sécurité Numérique (CSN) [conformément à l’IGI 1337](https://www.ssi.gouv.fr/entreprise/reglementation/protection-des-systemes-dinformations/la-politique-de-securite-des-systemes-dinformation-de-letat-pssie/) . Le chef de projet MoE et le RSSI MoE ont un rôle de support et d’accompagnement (sauf lorsque la MOE et sa propre MOA comme c’est le cas pour la DTNUM)

Les principaux acteurs de la SSI sont :
- Le Service du Haut Fonctionnaire à la Défense (SHFD)
- La chaîne SSI (RSSI…) qui irrigue l’ensemble du ministère, préfectures comme directions centrales, maîtrises d’œuvre (les DSI / acteurs SIC) comme maîtrises d’ouvrages (directions métier). 

## Impacts sur les applications

Pour être mise en production une application doit: 
- être homologuée, sur la base d’un dossier contenant à minima : 
  - une analyse de risque de type EBIOS Risk Manager  
  - un ou des rapports d’audits (tests d’intrusion systèmatiques,  de code, d’architecture, voire organisationnel pour les SI les plus sensibles)
  - un plan d’action SSI permettant de réduire les risques identifiés lors de l’analyse de risques et des audits
  - un support présenté à la commission d’homologation  (présidé par l’AQSSI ou son représentant, le FSSI ou son représentant, CSN, MOA, MOE, RSSI)
- être en conformité vis a vis du RGPD :
  - avec éventuellement, et en parallèle de l’analyse de risques, une analyse d'impact au sens protection des données à caractère personnel / RGPD.

L’ensemble de ces livrables doivent donc être anticipés et provisionnés dans le  budget de l’application, notamment
- l'éventuelle sous-traitance de l'analyse de risque EBIOS RM ou FEROS
- l'audit **PASSI**(Prestation d'Audit SSI) par un partenaire agréé ANSSI. 

Le produit doit mettre en œuvre des composants de sécurité, selon les objectifs de sécurité établis durant la réalisation des démarches d’homologation et de conformité réglementaire . Ces composants de sécurité sont spécifiés dans le référentiel de produits du CCT (Partie 4 : Sécurité & interopérabilité), ainsi que dans les offres de services existantes, que celles-ci soient ministérielles ou interministérielles.

Par ailleurs, il est important d'appliquer les procédures d'exploitation de la sécurité (PES) qui définissent les règles et bonnes pratiques de sécurité applicables à tous les systèmes de la DTNUM et des SGAMIs :  [http://dtnum.minint.fr/index.php/la-s-s-i/pes](http://dtnum.minint.fr/index.php/la-s-s-i/pes)


## Règles et recommandations

| Ref | Statut | Intitulé | Date |
|-----|--------|----------|------|
|EXI-SEC-1383|RG|Rappel de la règle INT-HOMOLOG-SSI de la PSSI de l’État (Homologation de sécurité des systèmes d’information). Tout système d’information doit faire l’objet d’une décision d’homologation de sa sécurité avant sa mise en exploitation dans les conditions d’emploi définies.|
|EXI-SEC-1384|RG|La sécurité de l’information (ou SSI) doit être prise en compte dès la conception de l’application. Cette prise en compte est structurée par la DISSIP, démarche d’intégration de la sécurité des systèmes d’information.|
|EXI-SEC-1385|RG|Il est OBLIGATOIRE d’identifier et de hiérarchiser les exigences de sécurité applicables au développement de l’application. Les arbitrages et les évolutions seront formalisés et tracés dans la documentation technique de réalisation ou le dossier de sécurité et d’homologation.<br>Les exigences de sécurité applicables au développement sont constituées des éléments suivants :<br>- La politique de sécurité des systèmes d’information applicable.<br>- La sensibilité (confidentialité, intégrité, disponibilité) des données traitées et traitantes (code source, paramétrages, etc.).<br>- L’analyse de risques exprimant les besoins et identifiant les objectifs de sécurité.<br>- Les exigences de sécurité issues de la fiche d’expression rationnelle des objectifs de sécurité (EBIOS RM FEROS).<br>- Les éventuelles menaces prises en compte au cours de l’analyse de risque.<br>- Les éventuelles réglementations applicables (protection du secret, données personnelles, etc.).<br>Ces exigences de sécurité sont exprimées par les directions métier aux équipes de projet (ou aux prestataires) concernées en amont du développement. Elles sont accompagnées d’une métrique convenue permettant de les hiérarchiser, et d’effectuer des arbitrages le cas échéant, en termes d’impacts métier.|
|EXI-SEC-1386|RG|Il est OBLIGATOIRE d’identifier et de définir l’ensemble des rôles (métier et technique) et des privilèges strictement nécessaires et suffisants, pour le développement et la mise en oeuvre de l’application. Les rôles et privilèges associés aux acteurs du développement, aux utilisateurs et aux exploitants de l’application tant sur le plan fonctionnel (métier), que sur le plan technique (MOE, équipe projet, administrateur, opérateur sauvegarde, etc.) doivent être formalisés au sein de la documentation technique du projet (cahier des charges fonctionnel, doctrine d'emploi, etc.) ou du dossier de sécurité et d’homologation (matrice de couverture des risques, dossier d’administration et d’utilisation, etc.).|
|EXI-SEC-1387|RG|Il est OBLIGATOIRE d’identifier et de définir les responsabilités (métier, technique, sécurité) des différents acteurs impliqués dans le développement. Les responsabilités des différents acteurs doivent être formalisées au sein du plan de management (ou équivalent) de projet de développement :<br>- dans le domaine fonctionnel pour la partie métier ;<br>- dans le domaine technique pour la partie architecture, programmation, intégration, etc. ;<br>- dans le domaine de la vérification (revue de code, tests, etc.).|
|EXI-SEC-1388|RG|Il est OBLIGATOIRE d’identifier au sein de l’équipe de projet un correspondant sécurité garant de la prise en compte de l’ensemble des questions de sécurité pour le projet de développement.|
|EXI-SEC-1398|RG|Il est INTERDIT d’utiliser des protocoles, services ou algorithmes obsolètes pour la conception de nouvelles applications<br>Exemples de services, protocoles ou algorithmes obsolètes et vulnérables :<br>- rlogin, rsh, telnet, SNMP v1, SSH v1.<br>- SSL, TLS v1.0, TLS v1.1.<br>- RC4, MD5, SHA1, DES, 3DES.<br>- LM, NTLM v1.|
|EXI-SEC-1420|RG|Il est OBLIGATOIRE de contrôler les données, à traiter et traitées, en entrée et en sortie des modules et des fonctionnalités développés et codés.<br>Afin de prévenir les risques de types injection, les données doivent être :<br>- filtrées en rejetant les caractères non autorisés et non pris en compte ;<br>- normalisées en les réduisant à leur représentation la plus simple ;<br>- validées en vérifiant le format, le type, l’origine ou encore la longueur des données attendues ;<br>- encodées selon le contexte de traitement.|
|EXI-SEC-1433|RG|Il est INTERDIT de livrer une application informatique ou un logiciel incluant des paramètres d’authentification par défaut dans les codes sources ou les fichiers de configuration.|
|EXI-SEC-1110|RG|L’application doit être conçue et développée dans le strict respect des règles de sécurité en vigueur au Ministère en particulier, pour les applications Web, veiller à ne pas être sensible aux 10 principales menaces identifiées par l'OWASP (Open Web Application Security Project)|
|EXI-SEC-1334|RG|De manière à mettre en place le principe de moindre privilège, il est nécessaire de définir, au niveau du SGBD, des comptes de connexion correspondants aux différents rôles définis (type administrateur, relecteur, contributeur, …).|
|EXI-SEC-1336|RG|De manière à se prémunir des attaques dites XSS, et en sus du filtrage des données non sûres, l'encodage des mots clé de la grammaire HTML (HTML entity encoding) doit être effectué avant stockage ou affichage de données.|
|EXI-SEC-1342|RG|L'ensemble des informations relatives aux sessions (variables de l'utilisateur, droits d'accès, etc.) doivent être stockées côté serveur en les associant à un identifiant de session, qui doit être la seule information envoyée au client. En particulier, il est proscrit de transmettre ces données, par sérialisation par exemple, vers le client dans l'objectif d'assurer une persistance de ces données.|
|EXI-SEC-1337|RG|De manière à se prémunir du vol de cookie de session ou contenant des informations sensibles (authentification ou données) par attaque de type XSS, le mécanisme HTTPOnly doit être utilisé pour sécuriser l'emploi de ces cookies.|
|EXI-SEC-1348|RG|Des mécanismes de nettoyage des bases de données doivent être prévus afin de supprimer tout contenu illégitime (ex : existence de scripts en lieu et place d'une chaîne de caractère)|
|EXI-SEC-1434|rc|En cas de DISSIP renforcée il est RECOMMANDE d’armer la comitologie projet d’un COSEC (Comité Sécurité) dont le but serait de conduire la DISSIP, de préparer l’homologation et qui serait animé par le correspondant sécurité du projet.|
|EXI-SEC-1194|RG|La traçabilité des actions de gestion des utilisateurs et de leurs droits doit être assurée.|

