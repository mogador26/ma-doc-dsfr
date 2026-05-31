---
layout: doc
tags: ["NFR","api"]
editLink: false
---

# Gestion des échanges 

<Badges/>  
  
## Principe recherché  
  
Les applications s'intègrent dans un écosystème ministériel, voire interministériel (SI de l'État), voire au-delà (SI collectivités, partenaires, usagers ..) avec lesquels elles échangent des données. Celles-ci peuvent être des données externes qu'elles consomment, ou des données internes qu'elles exposent (à la consommation des autres applications).
  
### Interfaces d'échange - ou API  
  
Dans la stratégie de l'État plateforme, qui s'aligne en cela sur des pratiques généralisée dans l'Internet, les données sont échangées selon le profil recommandé P1 « Fondations État Plateforme » défini dans le [Réglement Général d'Interopérabilité (RGI)](https://references.modernisation.gouv.fr/sites/default/files/Referentiel_General_Interoperabilite_V2.pdf) qui préconise des interfaces API basées sur le protocole https, le style d'architecture REST, le format de données JSON, et le protocole d'authentification OpenID Connect. Un certain nombre de bonnes pratiques ont été définies pour ces échanges, notamment au niveau ministériel avec la stratégie API qui définit le niveau sémantique des API REST. 
  
L’usage d’interface sous forme webservices SOAP est proscrite pour toutes nouvelles ou évolutions majeures de l’application. 

Une tolérance, soumise sans condition à validation par le Comité d’architecture, existe pour d'autres modes d'échange :

- échanges par fichier -- Encore très répandus, notamment pour les données ouvertes.
- CFT, RMI/JRMP, PeSIT 
  
### Les plateformes d'échange  
  
Le ministère structure ses échanges autour de deux plate-formes d'échange : 
- INES, opérée par la DTNUM
- SIR (Système d'Interface et de Référence), opérée par l'ANFSI

Les autres DSI (PP, ANTS, ANTAI ...) ne se sont pas dotées de plateforme d'échange référencé par le Ministère de l’intérieur

Par ailleurs, d'autres plateformes d’échange interministériel peuvent être utilisées, si les besoins de l’application ne peuvent être couverte par les plateformes d’échange du Ministère de l’intérieur :
- La plateforme d’API Gateway/Management de l’AIFE : PISTE (https://piste.gouv.fr/).  

**Règle :**

Indépendamment de la plateforme d’échange, qu’elle soit ministèriel ou inter-ministériel,  en cas d’exposition d’une API sur Internet, Il est recommandé d’utiliser la solution de contractualisation de la DINUM :MonComptePro (<https://moncomptepro.beta.gouv.fr>)

Le composant majeur des plateformes d'échange est l'**API Gateway / API Management**. Celui-ci offre un certain nombre de fonctions essentielles telles que :

- **Passerelle d'API** avec des fonctions d'exposition des services et des ressources, de sécurisation des flux, de régulation du trafic (seuils, quotas), de contrôle des identités et des droits (par jetons)
- **Magasin d'API** avec des fonctions de publication, des API, de souscription aux API, de tableau de bord pour les développeurs -- Cette fonction est portée au ministère par un autre composant : <http://api.minint.fr>
- **Editeur d'API** avec des fonctions de gouvernance (cycles de vie, versioning) , facturation, monitoring, autorisation
- **ESB (Enterprise Service Bus)**. Ces bus de services sont capables de prendre en charge des transformations ainsi que des agrégations de flux dans des contextes d'échanges inter-applicatifs.
- **SAS fichier**

### Fonctions d'intermédiation des plateformes d'échange.  
  
La plateforme d'échange et d’intermédiation est porté par la plateforme. Elle offre un service d'intermédiation entre un consommateur et plusieurs fournisseurs.  

![](/img/donnees-echanges-api/APIfederee.png)

L'exemple ci-dessus montre un cas d'intermédiation avec la possibilité pour une application mobile du smartphone Néo qui équipe les forces de l'ordre d'interroger plusieurs fichiers de police en une seule demande sur une API fédérée.

API Entreprise de la DINUM est un autre exemple d'intermédiation et de service à valeur ajoutée en ce qu'elle agrège des informations de l'INSEE (Sirene) et d'Infogreffe.

|INES - DTNUM|SIR - ANFSI|
|------------|-------------|
|La plateforme INES met en œuvre 3 composants :<br/> - API management (tel que décrit ci-dessus)<br/> - ESB (Bus de service) qui permet de transformer ou d’agréger des flux.<br/> - SAS fichier<br/> La plateforme INES est appelée à prendre en charge tous les flux d’API internes au applications hébergées par la DTNUM.<br/> La plateforme INES mutualise le raccordement au RIE et à Internet. C’est elle qui permet de « consommer » des API externes, comme par exemple l’API entreprise, la BAN, l’API INSEE …etc.<br/> INES est raccordé au SIR et route les flux destinés aux applications de sécurité interieure hébergées au STIG |La plateforme SIR est basée sur un ESB (Bus de service) qui permet notamment d’assurer le routage, la sécurisation, et des agrégations de flux d’API.<br/> La plateforme SIR prend en charge les flux d’API sortant du périmètre du centre d’hébergement de la sécurité intérieure (STIG).<br/> Le SIR ne prend pas en charge les flux internes au STIG.<br/> SIR est raccordé à INES et route les flux destinés aux applications de hébergées dans le centre d’hébergement de la DTNUM.<br/> Le SIR route et agrège tous les flux API avec les équipements mobiles des forces de l’ordre, notamment les applications des smartphones Neo (interrogation de fichier ..etc). Cf schéma ci-dessus.|


### Urbanisation des flux  

![INES-SIR : l'image est expliquée dans le paragraphe qui suit](/img/donnees-echanges-api/INES-SIR.png)

Les deux plateformes d'échanges sont dédiées aux deux principaux hébergements nationaux : INES pour l'hébergement DTNUM et SIR pour l'hébergement STIG de la sécurité intérieure. 

Règle : Les flux inter-applicatifs transitant entre les deux hébergements doivent être relayés (contrôlés, sécurisés ...) via INES et SIR.

## Impacts sur les applications  

Tout échange entre application doit transiter au travers d’une plateforme d’échange. 
  
## Règles et recommandations  

| Ref  | Statut | Intitulé | Date |
|------|--------|----------|----|
|EXI-DATA-1449|rc|La consommation d'API interne devrait passer par une fonction d'API gateway pour avoir une bonne visibilité sur l'ensemble des flux de consommation.|
|EXI-DATA-1450|RG|Les flux inter-applicatifs inter-centres d'hébergement transitent par INES et SIR.||
|EXI-DATA-1451|RG|La plateforme INES est le point d'entrée pour les API interministérielles (API entreprise, API INSEE, BAN ...etc). Grâce à son API management, elle est garante du respect du contrat de service établi avec les fournisseurs extérieurs.||
|EXI-DATA-1363|RG|Le format de présentation et d’échange d’une adresse postale doit respecter la norme AFNOR XPZ 10-011.||
|EXI-DATA-1047|rc|Si l'échange entre deux applications nécessite une transformation des données, il est recommandé de s'appuyer sur les plateformes d’échange du ministère.|
|EXI-DATA-1048|RG|Tous échanges asynchrones doivent être réalisés au travers d’une plateforme d’échange du ministère, ou interministériel.||
|EXI-DATA-1065|RG|Tous les échanges par Web Service ou par API doivent être authentifiés. ||
|EXI-DATA-1072|RG|Tout fichier XML doit être accompagné de son schéma.||
|EXI-DATA-1074|RG|Les formats PNG et JPEG doivent être utilisés pour échanger les informations graphiques et les images fixes.||
|EXI-DATA-1075|RG|Les flux audiovisuels, doivent respecter les formats MPEG-2 ou MPEG-4.||
|EXI-DATA-1076|RG|En complément du RGI, pour tous les échanges de documents bureautiques internes et externes, seuls les formats OpenDocument et PDF sont autorisés.|
|EXI-DATA-1078|RG|Le format d’échange des fichiers géographiques retenu est le format ShapeFile.||
|EXI-DATA-1120|RG|Tout échange d’informations avec un SI externe au ministère doit faire l’objet d’un traitement particulier par des serveurs proxy déployés au sein d’une DMZ (conformément aux recommandations de l’ANSSI) afin de vérifier l’innocuité et l’intégrité des flux ou des fichiers. Les infrastructures nationales existantes (ex : SIR, INES) doivent être systématiquement privilégiées.||
|EXI-DATA-1165|RG|Les interconnexions avec des partenaires externes doivent être réalisées en priorité à l’aide de VPN IPSEC, selon les recommandations de configuration ANSSI. A défaut, l’usage du protocole TLS, basé sur l’authentification mutuelle par certificat, sera utilisé.||



