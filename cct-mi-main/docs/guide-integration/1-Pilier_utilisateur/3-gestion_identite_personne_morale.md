---
layout: doc
tags: ["NFR","authentification","entreprise","association"]
order: 4
editLink: false
---

# Personne morale : gestion des identifications / authentifications / autorisations  

<Badges/>

## Contexte  
- Certaines applications ou traitement de données ne s'adressent pas à une personne physique, citoyen ou agent, mais à une **personne morale : une entreprise ou une association**. Dans ce cas de figure, il est nécessaire de  identifier de façon unique la personne morale
- établir le lien  avec le mandataire 

### Identité d'une entreprise

La base Sirene, opérée par l'Insee, est le fournisseur des données d’identité des entreprises et de leurs établissements. Celle-ci fait partie des données de référence du Service public de la donnée mis en place par la loi pour une République numérique. Cette identité a deux composantes :

- le SIREN : identifiant unique de l'unité légale (entreprise)
- le SIRET : identifiant unique d'un établissement - le SIRET est constitué du SIREN auquel on ajoute l'identifiant de l'établissement

Les entreprises peuvent être également référencées ou immatriculées dans d'autres registres :

- RCS (Registre du commerce et des sociétés), qui concerne les sociétés commerciales, opéré par Infogreffe pour le compte de l'ensemble des greffes des Tribunaux de commerce français.
- RM (Répertoire des métiers), qui concerne les entreprises artisanales, opérés par les chambres de métiers et de l'artisanat

Ces immatriculations contiennent toutes le n° SIREN de l'entreprise qui reste donc l'identifiant principal. [Synthèse utile sur Service-public.fr](https://www.service-public.fr/professionnels-entreprises/vosdroits/F31190)

**Règle :** dans le cadre d’entreprise étrangère, ou travaillant à l'international, celle ci doit être identifiée au travers de :
- un European Unique identifier (EUID) au niveau de la communauté européenne
- un "Unique business identifier" à un niveau plus global


### Identité d'une association

Lors de sa déclaration en préfecture, l'association reçoit automatiquement un numéro d'inscription au répertoire national des associations (RNA). Elle doit en outre demander son immatriculation au répertoire Sirene lorsqu'elle souhaite demander des subventions auprès de l’État ou des collectivités territoriales, lorsqu'elle emploie des salariés ou lorsqu'elle exerce des activités qui conduisent au paiement de la TVA ou de l'impôt sur les sociétés. [Extrait service-public.fr](https://www.service-public.fr/associations/vosdroits/F1926)


## Règles et recommandations  

| Ref  | Statut | Intitulé | Date|
|------|--------|----------|-----|
|EXI-USR-1437|RG|L'identification d'une entreprise doit s'appuyer sur son SIREN (ou SIRET s'il s'agit des établissements).<br>L'identification d'une association doit s'appuyer sur son SIREN (ou SIRET s'il s'agit des établissements) si elle un possède un. Elle s'appuiera sur son numéro RNA dans le cas contraire.| revision initiale |
|EXI-USR-1438|rc|Le protocole a mettre en œuvre est OpenID Connect.| revision initiale |
