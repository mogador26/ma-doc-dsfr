---
layout: doc
tags: ["NFR","usagers"]
order: 2
editLink: false
---

# Usager : gestion des identifications / authentifications  

<Badges/>

## Principe recherché

Les applications ouvertes au public nécessitent une **identification** de l'usager, ainsi que son **authentification**.  Ces fonctions sont fournies au travers des solutions centralisées, basées sur des protocoles standard du marché.

La DINUM, en utilisant le protocole sous-jacent OpenID Connect, a conçu un fédérateur de SSO nommé **FranceConnect**.

Il a été décliné en plusieurs  variantes :

- **FranceConnect** (objet de la suite de la fiche)
- FranceConnect+ (FranceConnect  à authentification forte pour  les démarches plus sensibles)
- ProConnect, variante réservée aux agents publics.

### Choix de l'identité

L'usager, sur tous les services mettant en œuvre le « bouton » FranceConnect, peut s'identifier auprès du fournisseur d'identité de son choix (FI) dans une liste de fournisseurs agréés .
**Plusieurs niveaux d'authentification sont possibles**. Conformément au règlement européen eIDAS, l'usager peut choisir trois niveaux d'authentification, sous réserve que ceux-ci soient offerts par ses fournisseurs d'identité :

- niveau **faible**, suffisant pour la majorité des services, dans lequel l'authentification de l'utilisateur s'appuie sur un seul secret, généralement son mot de passe ;
- niveau **substantiel**, dans lequel l'authentification de l'usager est renforcée par un second facteur : SMS, mot de passe à usage unique (OTP One time password) ..etc ;
- niveau **élevé**, dans lequel l'authentification de l'usager est renforcée par un second facteur mettant en œuvre des moyens de sécurité forts (carte à puce, token, biométrie).

FranceConnect ne propose qu'un niveau faible.
FranceConnect+, lui, propose un niveau substanciel à élevé.


### Qualité de l'identité 

Quel que soit le fournisseur d'identité et le niveau d'authentification, la qualité de l'identité de l'usager est garantie grâce à son croisement avec celle présente dans le RNIPP(Répertoire National d'Identification des Personnes) tenu par l'INSEE. 
A noter que le referentiel RNIPP de l'INSEE n'étant pas totalement fiable, des anomalies peuvent survenir lors du croisement entre FranceConnect/FranceConnect+ et celui-ci.


### Gestion de l'identité dans l'application

L’identité doit se conformer aux exigences de FranceConnect/FranceConnect+, notamment le RGI (Référentiel Général d’Interopérabilité)

Référence : <https://www.numerique.gouv.fr/publications/interoperabilite/>

Avec **FranceConnect/FranceConnect+**, l'application reçoit l'identité pivot définie dans le RGI (nom, prénom, genre, date de naissance, lieu de naissance), accompagnés d'autres attributs selon les possibilités du fournisseur d'identité (adresse, adresse de messagerie, téléphone...), du niveau d'authentification utilisé et d'un identifiant unique et opaque de la personne propre à l'application (FranceConnect/FranceConnect+ génère, pour une même personne, des identifiants applicatifs différents pour empêcher le croisement des fichiers).

## Impact pour les applications

L'identification et l'authentification des usagers ne doivent plus être prises en charge « en silo » au sein de l'application. Ces fonctions peuvent maintenant être mutualisées, à moindres frais, dans l'offre étatique FranceConnect/FranceConnect+. Le chef de projet pourra trouver des informations pratiques sur la mise en œuvre des SSO (y compris FranceConnect) dans la fiche dédiée.

Dans le cadre d'un raccordement à FranceConnect, l'application doit être capable d'assurer les fonctions suivantes :

- le stockage de l'identifiant opaque de FranceConnect,
- la procédure de réconciliation à la première connexion, c'est à dire d'appairage de l'identité pivot de FranceConnect avec celle connue de l'application,
- la vérification du niveau d'authentification, qui doit être supérieur ou égal au niveau requis par l'application. Par exemple, une application exigeant un niveau d'authentification substantiel acceptera un usager authentifié au niveau élevé, mais refusera un usager authentifié au niveau faible,
- les secrets FranceConnect sur les serveurs (authentification mutuelle application/FranceConnect)
- la gestion des cas d'erreur 


## Règles et recommandations

| Ref| Statut | Intitulé | Date |
|----|--------|----------|-----|
|EXI-USR-1166|RG|Les accès du grand public aux téléservices se font obligatoirement en TLS.| revision initiale|
|EXI-USR-1344|RG|Pour réaliser le maintien d'une session authentifiée, seuls les mécanismes de cookie de session gérés par le langage (HTTPSession en Java par ex.) sont acceptés.|revision initiale|
|EXI-USR-1435|rc|L'appairage de l'identité pivot de FranceConnect avec une identité connue de l'application, également appelé processus de réconciliation, peut intégrer la fourniture par l'usager d'une information complémentaire, vérifiable par l'application, et permettant de lever de potentielles ambiguïtés. Exemple : fourniture du numéro de permis dans le cadre de la démarche télépoint.| revision initiale|

## Informations utiles 

Pour plus d’information, consulter le portail de service de la DTNUM : <https://pi.interieur.rie.gouv.fr/>	
 
### Contacts utiles
FranceConnect a été conçu et est opéré par la DINUM. L’espace pour les contacter : <https://franceconnect.gouv.fr/faq#CONTACT>

### Offres de service
Site dédié aux partenaires (publics ou privés), c’est à dire tout organisme désirant utiliser FranceConnect comme fournisseur de service ou de données, ou se positionner en fournisseur d’identité : [https://partenaires.franceconnect.gouv.fr](https://partenaires.franceconnect.gouv.fr/)

### Ressources  
« Comment ca marche ? » : [https://franceconnect.gouv.fr](https://franceconnect.gouv.fr/)


  
  
  
  
