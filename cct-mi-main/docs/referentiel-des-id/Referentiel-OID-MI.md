---
layout: doc
editLink: false
---

# Référentiel des OIDs du ministère de l'intérieur

## Sommaire

1.  <a href="#EVOL"> Evolutions du référentiel </a>
2.  <a href="#Regles">Règles d'usage</a>
3.  <a href="#OIDS">Liste des OIDs attribués</a>
    1.  <a href="#AGDREV">AGDREF2 (décommissionné)</a>
    2. <a href="#FRALERT">FR-ALERT</a>
    3. <a href="#SGIN">SGIN</a>
    4.  <a href="#RIO"> Référentiel des Identités et de l'Organisation (RIO)</a>
    5.  <a href="#SC"> Services de confiance (hors IGC)</a>
    6.  <a href="#SSO"> SSO</a>
    7.  <a href="#IGCMI"> IGC MI</a>
    8.  <a href="#IGCTECH"> IGC Technique</a>
    9.  <a href="#IGCPP"> IGC PP</a>

## <a name="EVOL">Evolutions du référentiel</a>

| Date | Version | Nature des modifications| Rédacteur |
|------|---------|-------------------------|-----------|
| 04/06/2020 | 1.5.3 | Mise à jour des services de confiance DNU         | Michel Hamelin           |
| 23/07/2020 | 1.5.4 | Enregistrement d’une IGC technique pour la PP     | Marc Heckmann, JC Bastoul|
| 16/04/2021 | 1.5.5 | Mise à jours OID IGC-MI certificats personne 2021 | Nidhal Selmane           |
| 15/12/2021 | 1.5.6 | Fourniture d'OID pour FR-ALERT et SGIN | David Scemama           |
| 28/07/2023 | 1.5.7 | Mise a jour de la méthode de préfixage de l'IGC-MI | Pierrick Picon-Formind  |

## <a name="Regles">Règles d'usage</a>

Toute demande de création d’OID doit faire l’objet d’une demande auprès de la DTNUM / SDID / BPNM par le chef de projet.

Les OIDs détenus par le ministère de l’intérieur et enregistrés auprès de l’AFNOR sont les suivants :
- Préfixe générique « Ministère de l'Intérieur » : 1.2.250.1.152.
- Préfixe gendarmerie : 1.2.250.1.189.
- Préfixe ANTS : 1.2.250.1.200.

Les préfixes Gendarmerie et ANTS sont gérés directement par ces entités, pour leur domaine métier. Le préfixe transverse « Ministère de l’Intérieur » sera suivi d’un suffixe attribué par la DTNUM selon les règles suivantes :
- Le suffixe sera composé de 4 nombres séparés par des points (a.b.c.d)
- L’OID aura donc pour forme : 1.2.250.1.152.a.b.c.d
- Le suffixe « a » caractérise l’application ou le domaine d’emploi
  - Les valeurs de « a » comprises entre « 1 » et « 199 ») sont réservées pour les applications transverses (messagerie, IGC, Référentiels, …).
  - Les valeurs de « a » comprises entre « 200 » et « 999 » seront affectées aux applications métiers.
  - Les valeurs de « a » de « 9001 » à « 9999 » sont réservées aux tests, en correspondance avec le besoin opérationnel ( « a opérationnel + 9000 »), exemple : 9001 » pour la messagerie).
- Les valeurs de « b », « c » et « d » sont comprises entre 1 et 9999.
- On peut éventuellement ajouter une valeur « e » pour décliner finement un usage


On aura ainsi notamment :
- 1.2.250.1.152.1.x.x.x pour le domaine messagerie
- 1.2.250.1.152.2 pour l’ IGC référencée IGC_A et RGS (ex : 1.2.250.1.152.2.1.4.1)
- 1.2.250.1.152.3 pour les extensions AD
- 1.2.250.1.152.4 pour le domaine RH
- 1.2.250.1.152.5 pour le domaine des réseaux mobiles
- 1.2.250.1.152.6 pour le domaine des services de confiance hors IGC
- 1.2.250.1.152.7 pour l’IGC technique
- 1.2.250.1.152.8 pour l’IGC PP mise en oeuvre pour le réseau de vidéo PVPP
- 1.2.250.1.152.10 pour le SSO PASSAGE2
- ..etc.

Les suffixes « a » « b » « c » et « d » seront déclinés en fonction de l’usage, selon des règles liées à des critères (hiérarchie, niveaux de versions,…). On essaiera, autant que faire se peut, d'utiliser les mêmes nombres thématiques dans les divers branches si une même thématique apparaît dans plusieurs branches.

Les nombres « thématiques » seront créés dans la branche appropriée au fur et à mesure des besoins

##  <a name="OIDS">Liste des OIDs attribués</a>

###  <a name="AGDREV">AGDREF2 (décommissionné)</a>

|OID| Application |
|---|-------------|
|1.2.250.1.152.200.1.b.c.d |AGDREF2 - IGC interne |

|Valeur des suffixes<br/> a.b.c.d| Intitulé (PC, classe d’objet, attribut, …) et caractéristiques |
|--------------------------------|----------------------------------------------------------------|
|200.1.1.1 |PC (décommissionné) |
|200.1.2.1 |DPC (décommissionné)|
|200.1.3.1 |Politique d’acceptation des certificats (décommissionné)|
|200.1.4.1 |Politique de Signature et d’administration de la preuve (décommissionné)|

Pour plus d'information, voir les documents pdf archivés.[Cf archive 1.5.3](annexes/OID_DNUM_référencement_V1.5.3_20200604.pdf)

###  <a name="FRALERT">FR-ALERT</a>

|OID| Application |
|---|-------------|
|1.2.250.1.152.201.1.1.1 |FR-ALERT - Politique de signature cachet - Environnement de production |
|1.2.250.1.152.**9**201.1.1.1 |FR-ALERT - Politique de signature cachet - Environnement de qualification |

###  <a name="SGIN">SGIN</a>

|OID| Application |
|---|-------------|
|1.2.250.1.152.202.1.1.1 |SGIN - Politique de signature cachet - Environnement de production |
|1.2.250.1.152.**9**202.1.1.1 |SGIN - Politique de signature cachet - Environnement de qualification |

### <a name="RIO"> Référentiel des Identités et de l'Organisation (RIO)</a>

- 1.2.250.1.152.**4.b.c.d** (pour les attributs)
- 1.2.250.1.152.**14.b.c.d** (pour les classes)

Valeur des suffixes :

|a| b| c| d| Intitulé (PC, classe d’objet, attribut, …) et caractéristiques |
|-|--|--|--|----------------------------------------------------------------|
|14| 2| 1| 1| Classe intPerson  |
|14| 2| 1| 2| Classe intService |
|4 |1 |1 |1 | codeInsee         |
|4 |1 |1 |2 | codeService       |
|4 |1 |1 |12| ouGestion du service|
|4 |1 |1 |13| ouSIC               |
|4 |1 |1 |14| status              |
|4 |1 |1 |15| serviceAdm          |
|4 |1 |1 |17| serviceConf         |
|4 |1 |1 |37| denominationAdr     |
|4 |1 |1 |38| idService           |
|4 |1 |1 |39| parentId            |
|4 |1 |1 |40| regroupement        |
|4 |1 |1 |41| idRegroupement      |
|4 |1 |1 |42| dateEffetStatus     |
|4 |1 |1 |3 | cNaissance|
|4 |1 |1 |4| dateDepart|
|4 |1 |1 |5| dateEffetAffectationAdmin|
|4 |1 |1 |6| dateEffetAffectationOP|
|4 |1 |1 |7| dateEntreeAdministration|
|4 |1 |1 |8| dateJpegPhoto|
|4 |1 |1 |9| dateNaissance|
|4 |1 |1 |10| jpegPhotoSignature|
|4 |1 |1 |11| nationalite|
|4 |1 |1 |47| OuGestion de l'agent|
|4 |1 |1 |29| idOuGestion|
|4 |1 |1 |22| ouOpe|
|4 |1 |1 |25| idOuOpe|
|4 |1 |1 |44| qualiteJud|
|4 |1 |1 |45| rank|
|4 |1 |1 |46| shortRank|
|4 |1 |1 |18| snNaissance|
|4 |1 |1 |19| specialite|
|4 |1 |1 |21| titularisation|
|4 |1 |1 |23| codeGrade|
|4 |1 |1 |24| personConf|
|4 |1 |1 |26| userPrincipalName|
|4 |1 |1 |27| NumeroRH|
|4 |1 |1 |28| premierPrenom|
|4 |1 |1 |30| idGrade|
|4 |1 |1 |31| corps|
|4 |1 |1 |33| idCorps|
|4 |1 |1 |34| filiere|
|4 |1 |1 |35| idFliere|
|4 |1 |1 |36| statut|

### <a name="SC"> Services de confiance (hors IGC)</a>

La déclinaison des OIDs est la suivante :
- Application : Signature, Horodatage
- OID : 1.2.250.1.152.**6.b.c.d** 
  - a = 6 (service de confiance)
  - b = 1 (politique) ou 2 (déclaration de politique)
  - c = 1 (validation), 2 (signature serveur), 3 (horodatage), 4 (signature personne)
  - d = usage

Valeur des suffixes : 

|a |b |c |d|Intitulé (PC, classe d’objet, attribut, …) et caractéristiques|
|--|--|--|-|--------------------------------------------------------------|
|6 |1 |1 |1 |Politique de validation générale (acceptation) – IDEMIA-DVS DNUM|
|6 |1 |1 |2 |FAETON - Politique de validation (décommissionné)|
|6 |1 |2 |1 |Politique de signature générale cachet serveur – IDEMIA D2S DNUM|
|6 |1 |3 |1 |Politique d'horodatage générale (RGS/eIDAS) – TrustyTime DNUM|
|6 |2 |3 |1 |DPH générale (RGS/eIDAS) – TrustyTime DNUM|
|6 |1 |3 |2 |FAETON - Politique d'horodatage (décommissionné)|
|6 |2 |3 |2 |DPH FAETON (décommissionné)|
|6 |1 |3 |3 |Politique d'horodatage générale (non RGS/eIDAS) – IDEMIA DTSS DNUM|
|6 |2 |3 |3 |DPH générale (non RGS/eIDAS) – IDEMIA DTSS DNUM|
|6 |1 |4 |1 |Politique générale de signature personne physique avec carte agent <br/>IDEMIA AdSigner Standalone DNUM|
|6 |1 |4 |2 |FAETON – Politique de signature agent (décommissionné)|
|6 |1 |4 |3 |Politique générale de signature personne physique avec carte agent via portail SIGNMI|
|6 |1 |4 |4 |Politique de signature des marchés publics DEPAFI avec carte|
|6 |1 |4 |5 |Politique de signature électronique <br/>procédure pénale (PN/GN) avec carte agent (AdSigner Standalone)|

Nota : pour les services de confiance de qualification, le chiffre « 6 » de l’OID, placé à la suite de « 152 », est à remplacer par 9006 » (« 8006 » pour la pré-production).

### <a name="SSO"> SSO</a>

- Application PASSAGE (SSO)
- OID = 1.2.250.1.152.**10.b.c.d**

Valeur des suffixes a, b, c, d :

| a |b |c |d | Intitulé (PC, classe d’objet, attribut, …) et caractéristiques |
|---|--|--|--|----------------------------------------------------------------|
|10 |2 |1 |1 |Classe passagePerson|
|10 |1 |1 |1 |accountStatus|
|10 |1 |1 |2 |anonymousLogin|
|10 |1 |1 |3 |login|
|10 |1 |1 |4 |memberOf|
|10 |1 |1 |5 |secondaryAccounts|

### <a name="IGCMI"> IGC MI</a>

La règle d’attribution des OIDs de l’IGC MI est donnée par de la manière suivante jusqu’au niveau du certificat final :

|  Racine MI    | Plateforme  | Type d'éléments | Usage de l’AC | Niveau de confiance| Usage du certificat | Type de carte pour les certificats personnes |
|--------------|--------------|-----------------|---------|-----------|-------|-------|
| 1.2.250.1.152|      a       |       b         |    c    |     d     |   e   | f |
|1.2.250.1.152 | 2 : Production<br> 9002 : Qualification <br> 8002 : Formation<br> 7002 : Préproduction |V1 : 11, 12<br> V2 : 21, 22 | 1, 2 ou 3 |V1 : 11, 21 ou 31<br> V2 : 12, 22 ou 32 |1, 2, 3, 4, 5, 6, 8, 9, 21, 31 |« », 1|

**a : « Plateforme »**  
  - « 2 » pour plateforme production 
  - « 9002 » pour plateforme qualification  
  - « 8002 » pour plateforme formation 
  - « 7002 » pour plateforme pré-production 

**b : « Type d’éléments »** 
  - Premier chiffre : « 1 » PC et certificats associés ou « 2 » DPC
  - Second chiffre: n° version de ACR.

**c : « Usage de l’AC »**
  - 1 AC signature, 2 AC Confidentialité, 3 AC Authentification
  
**d : « Niveau de confiance »**
  - 1er chiffre : 1 (RGS*), 2 (RGS**), 3 (eIDAS)
  - 2nd chiffre n° version de l’ACD

**e : «Usage du certificat»**
  - Les certificats logiciels personnes  1*: 3 (authentification)  
  - Les certificats personnes  2*: 1 (signature), 2 (confidentialité) ou 3 (authentification)  
  - Les certificats serveur authentification 1*: 2/21 (SSL Serveur), 3/31 (SSL Client), 4 (Contrôleur domaine AD)
  - Les certificats serveur cachet 1* : 5 (Cachet), 6 (OCSP), 8 (Horodatage), 9 (signature de code)

**f : « Type de carte pour les certificats personnes »**
  - JCOP 3 : pas de valeur (afin d’être compatible avec la situation existante)
  - JCOP 4.5 : 1


1.2.250.1.152.**a.b.c.d**    :identifiant de document de PC ou DPC pour ces AC déléguées et du certificat d'AC déléguée

1.2.250.1.152.**a.b.c.d.e.f**  :identifiant contenu dans le certificat final          


### <a name="IGCTECH"> IGC Technique</a>

Pour l’IGC technique, la suite est déclinée sous forme d’arborescence de la manière suivante jusqu’au
niveau du certificat final :
  - a : « application » : « 7 » pour IGC technique (rappel : « 2 » pour IGCMI)
  - b : 1er chiffre « type d’éléments » (« 1 » politique et certificats associés, « 2 » DPC) / second chiffre pour « version ACR »
  - c : 1er chiffre (domaine) : « 4 » (serveurs) ; second chiffre (n° version de l’ACD)
  - d : « 9 » pour « pas de conformité RGS »
  - e : 1 à 8 selon usage

| Racine MI | IGC technique (a) | PC ou DPC (b) | Domaine (c) | Niveau RGS (d) | Usage (e)    |
|-----------|-------------------|---------------|-------------|----------------|--------------|
| 1.2.250.1.152. | 7 <br/>(qualif : 9007)<br/>(pas de formation) | 1x ou 2x | 4x | 9  | 1 à 8 |

- 1.2.250.1.152.a.b.c.d : identifiant de document de PC pour ces AC déléguées et identifiant du certificat d'AC déléguée
- 1.2.250.1.152.a.b.c.d.e : identifiant contenu dans le certificat final.

#### Politique de certification (PC)

##### AC Racine

| OID de PC et ID de stratégie | Autorité de certification |
|-----------|------------|
| OID de PC (et du certificat auto-signé) : <br/>1.2.250.1.152.7.1 |AC RACINE TECHNIQUE MI |

##### AC déléguées
Nota : pour les ACD de qualification, le chiffre « 7 » de l’OID, placé à la suite de « 152 », est à remplacer par 9007 ». Il n’existe pas d’ACD de formation pour l’IGC technique.

**PC MACHINES2020** 

| OID | Désignation|
|-----|------------|
|2020 : 1.2.250.1.152.7.1.4.9    | AC MACHINES2020 MI  |
|2020 : 1.2.250.1.152.7.1.4.9.1  | SSL SERVEUR         |
|2020 : 1.2.250.1.152.7.1.4.9.11 | SSL SERVEUR MultiSAN|
|2020 : 1.2.250.1.152.7.1.4.9.2  | SSL CLIENT          |
|2020: 1.2.250.1.152.7.1.4.9.21  | SSL CLIENT MultiSan |
|2020 : 1.2.250.1.152.7.1.4.9.3  | Active Directory Microsoft|

**PC CACHET2020**

|OID |Désignation|
|----|-----------|
|2020 : 1.2.250.1.152.7.1.5.9    | AC CACHET2020 MI  |
|2020 : 1.2.250.1.152.7.1.5.9.1  | OSCP              |
|2020 : 1.2.250.1.152.7.1.5.9.2  | Signature de code |
|2020 : 1.2.250.1.152.7.1.5.9.3  | Cachet signature  |
|2020 : 1.2.250.1.152.7.1.5.9.4  | Horodatage        |

**PC PERSONNE2020**

|OID |Désignation|
|----|-----------|
|2020 : 1.2.250.1.152.7.1.6.9    | AC PERSONNE2020 MI  |
|2020 : 1.2.250.1.152.7.1.6.9.1  | Authentification              |
|2020 : 1.2.250.1.152.7.1.6.9.2  | Signature  |
|2020 : 1.2.250.1.152.7.1.6.9.3  | Confidentialité |

**PC AC Externes 2020**

|OID |Désignation|
|----|-----------|
|2020 : 1.2.250.1.152.7.1.7.9.1  | AC ORION2020 MI              |
|2020 : 1.2.250.1.152.7.1.7.9.2  | AC HESPERIS2020  |
|2020 : 1.2.250.1.152.7.1.7.9.3  | AC SIGNMI – Signature à distance |

**Déclaration des pratiques de certification (DPC)**

|OID DPC – ACD | Désignation de l’ACD |
|--------------|----------------------|
| 1.2.250.1.152.7.2.4.9 | MACHINES2020 pour les certificats émis depuis 2020, dont l’OID de PC est « 1.2.250.1.152.7.1.4.9 » |
| 1.2.250.1.152.7.2.5.9 | CACHET2020 pour les certificats émis depuis 2020, dont l’OID de PC est « 1.2.250.1.152.7.1.5.9 » |
| 1.2.250.1.152.7.2.6.9 | PERSONNES2020 pour les certificats émis depuis 2020, dont l’OID de PC est « 1.2.250.1.152.7.1.6.9 » |

### <a name="IGCPP"> IGC PP</a>

Le projet PVPP nécessite le déploiement de certificats 802.1x pour l'authentification des caméras et des postes de travail associés. Ces certificats s'appuient temporairement sur une PKI interne avec une AC interne autosignée. Dans la trajectoire d'évolution, des OID conformes à la politique du ministère sont attribués. Pour mémoire le format de OID ministériel est 1.2.250.1.152.a.b.c.d ou a représente l'application transversale ou le domaine d'emploi.

Le format général de l'IGC / PKI PP sera 1.2.250.1.152.8.b.c
- 1.2.250.1.152 pour la racine MI
- a : « application » (« 8 » pour IGCPP, "7008" pour la préprod)
- b : 1er chiffre « type d’éléments » (« 1 » politique et certificats associés, « 2 » DPC)
- c : 1er chiffre (type) : 1 (RAC ), 2(SER), 3(AUT), 4(SCE), 5(SIG), 6(HOR)

#### PC

| OID               | Description |
|-------------------|-------------|
|1.2.250.1.152.8.1.1|AC Racine (AC RAC)|
|1.2.250.1.152.8.1.2|AC Serveur (AC SER)|
|1.2.250.1.152.8.1.3|AC  Authentification client (AC AUT)|
|1.2.250.1.152.8.1.4|AC Scellement (AC SCE) « cachet serveur »|
|1.2.250.1.152.8.1.5|AC Signature (AC SIG) « signature de code »|
|1.2.250.1.152.8.1.6|AC Horodatage (AC HOR)|

#### DPC

| OID               | Description |
|-------------------|-------------|
|1.2.250.1.152.8.2.1|AC Racine (AC RAC)|
|1.2.250.1.152.8.2.2|AC Serveur (AC SER)|
|1.2.250.1.152.8.2.3|AC  Authentification client (AC AUT)|
|1.2.250.1.152.8.2.4|AC Scellement (AC SCE) « cachet serveur »|
|1.2.250.1.152.8.2.5|AC Signature (AC SIG) « signature de code »|
|1.2.250.1.152.8.2.6|AC Horodatage (AC HOR)|
