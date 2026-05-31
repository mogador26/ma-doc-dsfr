---
layout: doc
tags: ["api"]
editLink: false
---

Chaque principe exposé ici est décliné en un ensemble de règles [consultables](./regles). Ces principes visent à mettre en place un cadre partagé permettant d’inscrire l’ensemble des projets dans une dynamique API first.

<Badges/>

## <a name="pr1"> Principe n°1 : une API doit exposer des services métiers et non des composants techniques </a>

Un service métier repose sur l’utilisation d’une ou plusieurs ressources du système d’information. Ces dernières peuvent être de deux types :

- donnée : le service retourne de l’information à celui qui l’appelle;
- traitement : le service déclenche l’exécution d’un processus dans le SI. En fonction du contexte, le résultat peut être :
- l’état du processus : pris en compte, accepté, en cours, finalisé, rejeté …
- le résultat du traitement qui peut se matérialisé par :
- un élément physique : permis de conduire, acte d’état civil …
- un élément numérique

Le délai de retour n’est pas le même entre les ressources de type donnée et celles de type traitement. Les premières retournent l’information quasi instantanément alors que les secondes peuvent nécessiter plusieurs jours voire semaines.

Dans tous les cas, les ressources exposées doivent être documentées en prenant le point de vue fonctionnel du service :

- quel usage puis-je faire de cette API ?
- comment l’utiliser ?
- quelles sont les conditions d’utilisation ?
- inclure des exemples pour accompagner la compréhension.

De même, l’API doit respecter un certain nombre de règles dans sa définition :

- disposer d’une interface bien définie conforme aux règles de nommage
- fournir des données structurées et adaptées au métier faisant abstraction des ressources techniques sous-jacentes
- maîtriser les différentes versions disponibles en garantissant, par exemple, une compatibilité ascendante (cf. [**principe 3**](./principes.md#pr3))

Afin de s’assurer du respect de ce premier principe, l’approche " [Eat your own dog food](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) " est un bon moyen pour :

- détecter les bugs;
- les corriger rapidement;
- améliorer l’utilisabilité de l’API;
- réaliser les premiers tests de charge;
- vérifier la bonne application des règles de sécurité. [OWASP](https://owasp.org/www-project-api-security/) décrit ici le top 10 des règles de sécurité d'une API.

Enfin, mettre en place une stratégie « API first ». L’objectif est d’analyse le positionnement du projet dans l’écosystème d’API (du MI, de l’État Plateforme et/ou de partenaires). Cette phase doit permettre d’identifier, dès le lancement, les API disponibles utiles au projet et celles qui pourraient venir compléter l’écosystème.

## <a name="pr2"> Principe n°2 : veiller au découplage des API </a>

Le respect de cette règle se traduit par la conception de services qui ne portent qu’une responsabilité et n’assurent qu’une seule fonction. Il convient de viser l’excellence du service rendu plutôt qu’une large couverture fonctionnelle. Pour cela, le service doit être idempotent et ne pas conserver de contexte des différents appels qu’il reçoit.

L’application de cette règle permet de construire un catalogue d’API modulaires et maintenables en limitant les dépendances et la redondance entre les différentes ressources exposées. Une politique de gestion des versions (cf. [**principe 3**](./principes#pr3)) assure également cette pérennité et cette maîtrise des évolutions.

Ainsi, une API expose un service qui réalise une fonction métier unique, claire avec des périmètres bien définis. Ce service peut être un traitement ou la fourniture de données et le résultat retourné est indépendant du nombre de fois où l’API est appelée.

## <a name="pr3"> Principe n°3 : les versions d’une API suivent la politique de gestion de versions de la DTNUM </a>

En respect les **principes [1](./principes#pr1) et [2](./principes#pr2)**, une API doit maintenir une certaine indépendance avec les systèmes techniques. Pour cette raison, les versions d’une API sont en lien avec des évolutions fonctionnelles ou techniques qui lui sont propres et ne reflètent en rien les évolutions du SI. Le respect de ce principe est facilité par un travail de conception basé sur les besoins métiers et une volonté de réutilisabilité maximale.

Pour des raisons de gestion, le nombre de versions différentes actives en même temps ne peut être infini. Toute nouvelle version doit supporter, autant que faire se peut, les fonctionnalités de la version précédente (on parle de compatibilité ascendante). La mise en place d’une nouvelle version ou la disparition d’une ancienne version doit s’accompagner d’un délai raisonnable permettant aux utilisateurs de prendre en compte ses évolutions.

Une politique de gestion de versions permet de :

- maintenir une adéquation entre besoins métiers et API exposées;
- garantir la pérennité des API;
- accompagner les utilisateurs dans les évolutions

## <a name="pr4"> Principe n°4 : sélectionner les API à exposer </a>

Seuls les services répondant à des besoins métiers avérés ont vocation à être exposés, partagés. Le catalogue des API est le reflet des activités du ministère. Il doit donc être construit de manière réfléchie indépendamment des contingences techniques.

L’exposition d’API cohérentes et complémentaires permet :

- un couplage faible entre les API;
- d’éviter la redondance au niveau des API disponibles;
- maîtriser les interactions et limiter le risque d’enchaînement en cascade d’appels d’API

## <a name="pr5"> Principe n°5 : mettre en place des éléments de mesure, de supervision et de contrôle </a>

L’exposition d’API implique d’être en capacité de mesurer, contrôler et superviser la fourniture de ces services. Pour cela, un ensemble de métriques techniques et métiers doivent être définis et mis en œuvre par chaque API pour :

- vérifier le respect des engagements (conventions);
- détection d’usage frauduleux;
- prendre des mesures de régulation en cas de non respect des engagements;
- limitation ou coupure de l’accès à l’API;
- mesurer les performances du service [*Service Level Objectives*](https://fr.wikipedia.org/wiki/SLO);
- mesurer le niveau du service [*Service Level Agreement*](https://fr.wikipedia.org/wiki/Service-level_agreement); 
- détecter les défaillances;
- identifier un besoin d’évolution et en mesurer l’efficacité

## <a name="pr6"> Principe n°6 : une API expose de la donnée et des traitements </a>

Bien que dans un premier temps, les API soient principalement utilisées pour l’exposition de données, il ne faut pas les cantonner à ce cas d’usage. En effet, les API peuvent être utilisées pour déclencher des traitements nécessitant des délais de réalisation longs. Dans ces cas de figure, il est nécessaire de mettre en place des mécanismes adaptés à ces temps de traitement longs.

Ces mécanismes doivent permettre à l’émetteur de l’appel à l’API de recevoir le résultat dans un échange différent de son appel. Ils mettent en œuvre les principes de :

- **callback** : l’utilisateur indique à l’API la localisation du système par lequel le résultat doit lui être transmis. Il s’agit généralement d’une API dédiée à la réception des retours.
- **corrélation** : l’utilisateur et le fournisseur de l’API s’entendent sur un identifiant unique permettant de corréler le résultat transmis à un précédent appel.

En complément, des mécanismes de suivi de l’avancement de la réalisation des traitements et de reprise en cas d’incident doivent être mis en place pour informer les utilisateurs de l’API.
