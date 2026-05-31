---
layout: doc
tags: ["NFR","Archivage","Data"]
editLink: false
---

# Cycle de vie de la donnée et archivage

<Badges/>  

## Principe recherché  
  
Modalité d’archivage par nature de donnée

La donnée au sens large (document, donnée structurée ou non) a un cycle de vie, représentée par une température.

- "chaude" lorsqu'elle est utilisée quasi-quotidiennement par son service producteur et ses consommateurs. Durant cette phase, elle doit être pleinement disponible, dans les respects de la sécurité Si et de la protection des données personnelles.
- "tiède" à la fin de son usage public mais qu'elle reste à disposition du service producteur
- "froide" lorsque la donnée n'est plus utilisée qu'à des fins historiques scientifiques ou statistiques.

Selon le [code du patrimoine article L 211-1](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000006074236&idArticle=LEGIARTI000006845559&dateTexte=&categorieLien=cid) la définition de l’archivage est le suivant :  'Les archives sont l'ensemble des documents, y compris les données, quels que soient leur date, leur lieu de conservation, leur forme et leur support, produits ou reçus par toute personne physique ou morale et par tout service ou organisme public ou privé dans l'exercice de leur activité'. 

Toutes les données sont considérées comme des archives dès leur création. 

## Impact sur les applications

L'application doit prendre en compte dans sa conception le cycle de vie de la donnée. C'est à dire les trois phases de l'archivage : courant, intermédiaire et définitif.

1. L'application détient exploite utilise des données chaudes, ou archives **courantes** dans la langue des archivistes.
2. Les données "tièdes" doivent être versées à un système prenant en charge les archives **intermédiaires**. Le ministère est doté d'un système d'archivage intermédiaire et il convient de s'assurer que le versement pourra être mis en place avec un minimum d'effort (respect des interfaces).
3. La dernière phase concerne l'archivage **définitif** - ou la destruction, le scénario est sous la responsabilité du responsable des archives ministérielles - Les archives définitives sont externalisées 

## Règles et recommandations  

| Ref | Statut | Intitulé | Date |
|-----|--------|----------|-----|
|EXI-DATA-1128|RG|Toute application doit prévoir dans sa conception le versement des données aux archives intermédiaires du ministère, selon la nature des données. Ce versement  doit être conçu dans le respect de l'interface [SEDA]().|
|EXI-DATA-1129|RG|Lorsqu'une application comporte des données actives et des données historiques, elles doivent être stockées dans des bases ou des fichiers différents.||
|EXI-DATA-1444|RG|Toute application nécessitant un archivage des données doit prévoir dans sa conception le versement des données aux archives intermédiaires du ministère, dans le respect de l’interface SEDA.||
