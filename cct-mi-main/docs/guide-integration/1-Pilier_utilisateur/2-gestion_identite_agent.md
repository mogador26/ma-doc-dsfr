---
layout: doc
tags: ["NFR","agents"]
order: 3
editLink: false
---

# Agent : gestion des identifications / authentifications / autorisations

<Badges/>

## Contexte  

Les applications nécessitent généralement une quadruple fonction regroupée en 2 catégories :

- le contrôle d'accès: **identification**, **authentification,** 
- l’attribution de droits :**autorisation** et **habilitation** des utilisateurs / agents 

Ces fonctions sont fournies au travers des solutions centralisées, basées sur des protocoles standards du marché. 

Différents SSO existent par nature de populations :

- 4 SSO web ministériels, affectés à des populations identifiées : gendarmes, policiers, personnels de la préfecture de police, et tous agents du MI  et prestataires longue durée.
- L’ ProConnect, fédérateur de fournisseurs d'identités des agents publics, dans ses deux instances (ProConnect internet et ProConnect RIE).
- Pour les besoins d’authentification des postes de travail et applications client-serveur, plusieurs solutions d’authentification sont disponible ,basé sur Kerberos : les AD (Active Directory) pour les parcs d'ordinateurs Windows, ainsi que l'instance de Kerberos mise en œuvre pour le parc de postes Linux de la gendarmerie.


En cas d’inadéquation fonctionnelle, d’autres alternatives peuvent être mises en œuvre (ex. LDAP) et soumises obligatoirement à une validation du Comité d’architecture.

La suite de cette fiche se focalise sur les SSO web (pour ces derniers, quelques éléments sont disponibles dans l'[annexe SSO](../7-Annexes/CCTV3-Annexe_SSO_v1).

Passage2 est intégré à ProConnect. Cependant ce SSO en tant que fournisseur d'identité de ProConnect ne sera visible que si des services applicatifs positionnent ce Fournisseur d'identité comme moyen d'accès possible. 

La stratégie suivante doit être appliquée : Toute application ministérielle pouvant être utilisée par des agents externes au ministère, doit prendre en charge à minima deux SSO (web), plus étant recommandé :

- **l'un des 4 SSO ministériels**, pour les agents du ministère
- **ProConnect**, pour des agents publics identifiables par cette solution, ou, dans le cas contraire,via une solution SSO maitrisée par le domaine Métier 

Il est nécessaire de s’assurer que le SSO soit accessible pour les populations ciblées, selon le positionnement réseau de l’application. 

Le tableau suivant fait une synthèse des SSO à prendre en compte par les applications du ministère selon deux critères : le type de population, et réseau d'accès.

| Accès  |Agents MI (4 catégories)|Agents État non MI|Agents autres fonctions publiques|Agents non identifiés par leur organisme de rattachement|
|--------|------------------------|------------------|---------------------------------|------------------------------------------------------------|
|Accès intranet|L’un des 4 SSO du ministère sur un critère population : - PROXIMA pour les gendarmes<br/> - CHEOPS NG pour les policiers<br/> - [ PASSAGE PP pour certains agents PP ]<br/> - PASSAGE2 pour tous les agents restants|Pour les agents de l’État Hors MI dont le FI est déjà [interfacé avec ProConnect,](https://proconnect.gouv.fr/) utiliser cette solution .<br/> Pour les autres populations d’acteurs, intégrer la population ciblée dans une solution SSO maitrisée par le domaine Métier<br/> ProConnect-RIE en cible|Intégrer la population ciblée dans une solution SSO maitrisée par le domaine Métier<br/> ProConnect-RIE en cible|Intégrer la population ciblée dans une solution SSO maitrisée par le domaine Métier|
|Accès RIE (inter-ministériel)|Passage2 (RIE) pour les agents MI, incluant la fonction de fédération| Pour les agents de l’État  dont le FI est déjà [interfacé avec ProConnect-RIE,](https://proconnect.gouv.fr/) utiliser cette solution. Pour les populations non couvertes, intégrer la population ciblée dans une solution SSO maitrisée par le domaine Métier<br/> ProConnect-RIE en cible| Sauf exception, ces agents arrivent par Internet.  Pour ces cas d’exception, intégrer la population ciblée dans une solution SSO maitrisée par le domaine Métier<br/> ProConnect-RIE en cible|Intégrer la population ciblée dans une solution SSO maitrisée par le domaine Métier |
|Accès Internet|Privilégier les accès extranet via les solutions nomades.<br/> Pour l’accès direct à une application métier en tant qu’agent du ministère: Intégrer la population ciblée dans une solution SSO maitrisée par le domaine Métier|Pour les agents de l’État Hors MI dont le FI est déjà [interfacé avec ProConnect,](https://proconnect.gouv.fr/) utiliser cette solution .<br/> Pour les autres populations d’acteurs.Intégrer la population ciblée dans une solution SSO maitrisée par le domaine Métier|Intégrer la population ciblée dans une solution SSO maitrisée par le domaine Métier <br/> ProConnect-Internet en cible|Intégrer la population ciblée dans une solution SSO maitrisée par le domaine Métier|


### ProConnect

La section qui précède a documenté le cas d'usage le plus simple : un agent du MI accédant à une application du MI sur son Intranet. Le tableau des cas d'usage de l'introduction liste plusieurs autres cas. Le SSO qui y apparaît, en cible est le plus souvent ProConnect dans ses deux instances, ProConnect internet et ProConnect RIE.

Le tiers de confiance ProcConnect, a été conçu par la DINUM.
Le ministère positionne Passage2 en tant que Fournisseur de Services (FS) au regard d'ProConnect.

ProConnect est interfacé avec des composants existants et maitrisés au sein du ministère :

- il  s'appuie sur les FI (Fournisseurs d'Identité) existants dans les SSO ministériels
- le protocole standard d'ProConnect, **OpenID Connect**, supporté par les fournisseurs de services de nos SSO ministériels

Le fichier en annexe décrit les [cas de connexion des agents au travers d'internet qui pourraient mettre en oeuvre ProConnect](../7-Annexes/annexe_SSO_cas-d-usage-AgentConnect).


## Règles et recommandations  

| Ref | Statut | Intitulé | Date |
|-----|--------|----------|-----|
|EXI-USR-1435|rc|le tiers de confiance doit admettre à minima 1 fournisseur d’identité pour la population ciblée. Dans le cas contraire, veuillez solliciter les responsables interministeriels de la solutions ProConnect pour intégrer les fournisseurs d’identité adéquats.|
|EXI-USR-1436|RG|L'identification de l'agent doit être conforme aux identités pivot telles qu'elles sont décrites dans les documentations en ligne d'ProConnect. Cette conformité sémantique est très importante pour faciliter l'insertion de l'application dans l'approche état plateforme : c'est-à-dire lui permettre de s'intégrer à ProConnect et d'exposer si besoin des API de données.|
|EXI-USR-1071|RG|Pour les cartes à puce à usage interne, il est obligatoire de s'appuyer sur le standard IAS-ECC, format retenu dans le cadre de l'IGC ministérielle.|
|EXI-USR-1169|RG|Si une application du ministère est accessible à des utilisateurs d’une autre administration à partir de leur infrastructure (via RIE par exemple), l’authentification et la gestion des droits de ces utilisateurs ne peuvent être déléguées qu’à condition d’apporter des garanties de sécurité. Cette disposition est garantie intrinsèquement par ProConnect.|
|EXI-USR-1167|RG|Les habilitations (par exemple les droits fins d’une application) associées aux utilisateurs doivent être contenues dans une base protégée.|
|EXI-USR-1382|RG|Le RIO (Référentiel d'Identité et d'Organisation) est le référentiel socle des identités pour l'ensemble du ministère. Tout annuaire ou application utilisant l'identité d'un agent du ministère doit s'appuyer sur le RIO et au minimum intégrer le champ identifiant RIO.|
|EXI-USR-1114|RG|Une application ne doit pas prendre en charge la fonction d'authentification de ses utilisateurs : elle doit déléguer cette fonction au SSO du ministère dont elle relève, ou à ProConnect quand le périmètre d'usage dépasse celui des agents du ministère.|



