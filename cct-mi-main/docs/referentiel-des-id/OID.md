---
layout: doc
editLink: false
---

# Référentiel des OID

1. <a href="#Def"> Qu'est ce qu'un OID</a>
2. <a href="#Reg"> Le registre des OID</a>
3. <a href="#Util"> Informations utiles - Comment enregistrer un nouvel OID</a>

## <a name="Def">Qu'est qu'un OID ?</a>

Pour paraphraser la définition de [wikipedia](https://fr.wikipedia.org/wiki/OID), un OID, ou "Object Identifier", est un identifiant universel (c'est à dire unique à l'échelle de la planète) utilisé pour nommer un objet. Quel type d'objet peut on identifier ainsi ?

En fait tout type d'objet que l'on souhaite, à des fins d'interopérabilité, identifier de manière unique : ce peut être un attribut dans un schéma d'annuaire LDAP, une variable "MIB" utilisée pour administrer un équipement ou un logiciel à distance (avec le protocole SNMP), des codes pays, des codes BIC pour le domaine bancaire, ou dans le cadre d'une IGC (Infrastructure à clé publique), un type de certificat, une politique de certification  ..etc.

Au ministère de l'intérieur, les OID sont utilisés pour identifier des attributs dans nos schémas d'annuaire LDAP et notre Référentiel des Identités et des Organisations (RIO), pour les IGC et autres services de confiance notamment.

A l'origine les identifiants OID sont été définis par l'[UIT-T](http://www.itu.int/fr/about/Pages/default.aspx) dans le cadre du standard ASN.1, puis rapidement largement exploités par la communauté Internet dans le cadre du protocole de gestion de réseau SNMP.

L'OID est représenté sous la forme d'une suite de nombres entiers, et organisé hiérarchiquement de façon à permettre la délégation d'autorité d'attribution. Dans le principe, un OID est construit  de façon analogue à un nom de domaine DNS, et l'objectif est le même, à savoir se donner le moyen de nommer des objets (des domaines) de façon totalement décentralisée mais tout en garantissant leur unicité globale. L'unicité des identifiants est bien sûre vitale pour atteindre l'interopérabilité des logiciels.

Prenons un exemple, l'OID 1.2.250.1.152.4.1.1.30 identifie de façon unique et universelle l'attribut "idGrade" du référentiel RIO du ministère de l'intérieur (Référentiel des Identités et des Organisations). La suite d'entier permet d'identifier les autorités d'attributions successives :

- 1 = ISO (International Standard Organization)
- 1.2 = member-body
- 1.2.250 = France
- 1.2.250.1 = AFNOR
- 1.2.250.1.152 = Ministère de l'intérieur (qui a obtenu cet identifiant auprès de l'AFNOR, elle-même ayant obtenu sa délégation de l'ISO)
- 1.2.250.1.152.4.1.1.30 = attribut idGrade du RIO, le suffixe 4.1.1.30 est attribué par le ministère de l'intérieur, qui en garantit l'unicité au sein du ministère

La DTNUM/SDID/BPNM est responsable de l'unicité, de la cohérence et de l'enregistrement des OID dans le périmètre du ministère de l'intérieur.

## <a name="Reg">Le registre des OID</a>

Il est possible de consulter l'arbre des OID, dans sa partie la plus publique, en interrogeant l'[OID Repository](http://www.oid-info.com/). 

Le ministère détient plusieurs préfixes d'OID délivrés par l'AFNOR :

- 1.2.250.1.141, préfixe spécifique à l'ANTAI - Contact : Laurent Wallet. [Mise à jour AFNOR 2017](annexes/2017-03-07-MI-registre-numérique-OID-141.pdf)
- 1.2.250.1.152 préfixe générique du ministère de l'intérieur - Contact : [DTNUM/SDID/BPNM](mailto:dnum-architecture-entreprise@interieur.gouv.fr). [Mise à jour AFNOR 2017](annexes/2017-02-10-MINISTERE-INTERIEUR-registre-numérique-OID-152.pdf).
- 1.2.250.1.159, préfixe utilisé par l'ANTS pour la signature des données des passeport (cf [CSCA](https://ants.gouv.fr/L-international/Country-Signing-CA-France)) - Contact : [DTNUM/SDID/BPNM](mailto:dnum-architecture-entreprise@interieur.gouv.fr). [Mise à jour AFNOR 2017](annexes/2017-02-10-MINISTERE-INTERIEUR-registre-numérique-OID-159.pdf)(89.42 Ko)
- 1.2.250.1.189, préfixe spécifique à la gendarmerie - Contact : le [Capitaine Sébastien Marcq](mailto:Sebastien.Marcq@gendarmerie.interieur.gouv.fr)
- 1.2.250.1.200, préfixe spécifique à l'ANTS - Contact : [Frederic Culie](mailto:Frederic.Culie@interieur.gouv.fr)

Les documents définissant précisément les attributions d'OID au sein du ministère sont listés dans le corpus du CCT :

- [Registre OID du ministère de l'intérieur](Referentiel-OID-MI.md)
- Registre OID de l'AFNOR: de [1990 à 2013](annexes/REGISTRE_OSI_N_1_-_N_302_-_1990-2013.pdf), et de [2013 à 2016](annexes/REGISTRE_OSI_N_303_-_N_XXX_-_2014.pdf)
- [Registre ANTS](annexes/Gestion_des_OID_ANTS_v2.10.pdf)

## <a name="Util">Informations utiles - Comment enregistrer un nouvel OID</a>

La DTNUM/SDID/BPNM est garante de l'unicité des OID (ou Object IDentifier) au sein du ministère.

Vous voulez créer un nouvel OID : [Contact OID](mailto:dnum-architecture-entreprise@interieur.gouv.fr)
