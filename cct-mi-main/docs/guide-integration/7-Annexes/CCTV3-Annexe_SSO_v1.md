# Cadre de cohérence technique

# Annexe SSO

**Gestion des authentifications et des autorisations d’accès des agents du MI aux applications du ministère de l’intérieur**



**Table des matières**

- [1 -Les composantes de la solution SSO du ministère](#ch1)
- [2 -Les modes de fonctionnement – Vue utilisateur](#ch2)
- [3 -Modes de prise en charge des applications](#ch3)
- [3.1 -Mode délégué – Avec reverse proxy](#ch31)
- [3.2 -Mode direct – L’application parle au SSO](#ch32)
- [4 -Un SSO pour les clients lourds](#ch4)
- [5 -Cas des applications locales](#ch5)
- [5.1 -Mode direct](#ch51)
- [5.2 -Mode délégué](#ch52)
- [6 -Prise en charge des terminaux mobiles](#ch6)

## <a name="ch1">1 -Les composantes de la solution SSO du ministère</a>

Tous les SSO du ministère sont bâtis autour du même composant de base : **LemonLDAP::NG**. À quelques variantes près, ils partagent donc tous les mêmes caractéristiques qu’ils héritent du composant commun.
Le composant est documenté sur le site [http://lemonldap.ow2.org](http://lemonldap.ow2.org/).
LemonLDAP::NG est avant tout un SSO « web », il s’adresse principalement à des applications web, c’est-à-dire des applications fonctionnant avec un navigateur.
Néanmoins LemonLDAP::NG peut être également utilisé dans un contexte d’application client/serveur. Dans la pratique, cette fonctionnalité marginale n’est pas mise en œuvre dans tous les SSOs du ministère : seul PROXYMA l’utilise.

Le site de description du composant LemonLDAP::NG fournit le schéma de principe suivant :
![LemonLDAP](/img/annexes/serveurs.png)
  
La fonction de gestion des droits d’accès n’est par contre pas réalisée par le composant commun LemonLDAP::NG. Chaque porteur de SSO la réalise à sa façon et avec des composants différents. Ainsi, CHEOPS NG s’appuie sur l’outil GEHA-WEB, PROXYMA dispose de l’application GEDRAC, PASSAGE PP s’appuie sur GHABI et PASSAGE 2 a recours à la solution commerciale MRM. Les modes de gestion de ces droits d’accès sont parfois très différents. La Gendarmerie calcule la majorité des droits à partir des caractéristiques de l’utilisateur (affectation, compétences, fonction…) enregistrées dans le SIRH, et ne fait du discrétionnaire que de manière exceptionnelle. A l’opposé, PASSAGE 2, a plutôt recours à des droits discrétionnaires. Quelle que soit la solution de gestion de droits employée, elle alimente l’annuaire du SSO auquel elle est dédiée.

## <a name="ch2">2 -Les modes de fonctionnement – Vue utilisateur</a>

Deux modes de fonctionnement sont possibles
-   **mode à flux traversant** : l’utilisateur accède à ses applications au travers d’un portail, que ce soit pour la phase d’identification / authentification / autorisation ou pour la phase de dialogue avec son application. Dans ce mode, le portail relaie l’ensemble des flux entre l’utilisateur et son application.
-   **mode à flux direct ou non traversant** : l’utilisateur adresse directement son application, s’il n’est pas encore identifié, il est redirigé temporairement vers le portail d’identification / authentification / autorisation, mais une fois que sa session est créée et qu’il a obtenu son jeton, les flux sont directs entre le navigateur client et le serveur et ne transitent plus par le portail.
    

Le mode traversant peut présenter des inconvénients, d’une part en termes de performance (concentration des flux sur le même composant, à dimensionner correctement) et en termes de périmètre de déploiement : le mode traversant est un modèle très centralisé qui est plus difficile à déployer avec des applications locales ou des centres d’hébergements régionaux.

Les deux modes co-existent dans les systèmes déployés au ministère.

## <a name="ch3">3 -Modes de prise en charge des applications</a>

Ce sujet concerne tout particulièrement le chef de projet qui doit inscrire son application dans le SSO dont elle relève.

Une application doit dialoguer avec le SSO : elle doit rediriger vers le portail SSO les utilisateurs ne détenant pas encore de jeton d’authentification, (éventuellement vers une page de WAYF pour le choix du SSO approprié), puis, pour les utilisateurs autorisés, récupérer leur identité et leur profil de droits. Deux modes sont possibles avec plus ou moins d’impact pour l’application :
-   **Mode délégué**.  
    Tous les échanges SSO sont pris en charge par un « **reverse proxy applicatif » (RPA)**. L’application reçoit directement les informations utiles (identité, droits) sous forme d’en-têtes http. Le RPA est une composante de l’infrastructure SSO et celle-ci peut être mutualisée pour plusieurs applications.
-   **Mode direct.**  
    Dans ce mode, il n’y a pas de délégation, ni de reverse proxy, c’est à l’application elle-même de prendre en charge tous les échanges avec le SSO.

### <a name="ch31">3.1 -Mode délégué – Avec reverse proxy</a>

Le mode délégué, avec reverse proxy, est le plus simple du point de vue intégration. Malheureusement c’est aussi le mode de fonctionnement le plus limité, notamment du point de vue des applications locales et des sites d’hébergements régionaux.

### <a name="ch32">3.2 -Mode direct – L’application parle au SSO</a>

Une première question à se poser est celle de la « langue », ou protocole, dans laquelle cet échange se fait. Il y a en a plusieurs :
-   dialecte natif de LemonLDAP::NG ;
-   le protocole normalisé SAML ;  
-   le protocole OpenID Connect.

La seconde question est celle du handler ou de l’agent applicatif qui prendra en charge cet échange. Ici aussi il y a plusieurs possiblités :
-   Le **handler LemonLDAP::NG** peut être installé sur le serveur de présentation de l’application. Il peut être mis en œuvre sur un serveur apache (sous forme d’un module apache), ou sur un serveur NGINX à partir de la version 2. ). Le handler LemonLDAP::NG peut parler plusieurs protocoles, LemonLDAP, SAML, [CAS, OpenID Connect].
-   Un **module apache SAML, par exemple auth_mellon**. Cette solution est proposée par l’équipe PASSAGE2.
-   Au-delà de ces deux exemples, de nombreux logiciels ou progiciels sont capables de prendre en charge de façon paramétrable le rattachement à un SSO, en utilisant l’un des protocoles standard SAML, CAS, OpenID Connect (par exemple Alfresco ou Maarch).

**Au ministère, les protocoles LemonLDAP::NG et SAML sont privilégiés. Toutefois, l’arrivée de AgentFrance (déclinaison pour l'agent de FranceConnect), va y ajouter l’usage de OpenId Connect.**

## <a name="ch4">4 -Un SSO pour les clients lourds</a>

**Ce mode d’accès n’est mis en œuvre que dans le SSO PROXYMA.**

Une application utilisant un client autre que le navigateur (client lourd) peut déléguer l'authentification au portail LemonLDAP::NG par service SOAP : le client applicatif soumet le login et le mot de passe de l'utilisateur au portail, qui ouvre une session et retourne un cookie de session.

Ce cookie de session doit alors être présenté par le client à chaque requête au serveur de l'application. De même que pour une application web, ce serveur peut être protégé par un agent SSO configuré localement ou sur un reverse-proxy, qui peut propager les attributs de l'utilisateur et contrôler l'accès à l'application dans les mêmes conditions que précédemment. Le serveur de l'application peut également assurer lui-même ces fonctions en invoquant les services SOAP du portail présentés plus haut.
De plus, sur présentation du cookie de session le client peut lui aussi demander au portail les attributs de l'utilisateur.
Le client ne doit pas garder en mémoire le mot de passe de l'utilisateur ; fermé, il ne doit pas garder en mémoire le cookie de session.

## <a name="ch5">5 -Cas des applications locales</a>

On appellera ici application locale une application hébergée en dehors des sites d’hébergement nationaux dans lesquels sont localisées les infrastructures du SSO.

### <a name="ch51">5.1 -Mode direct</a>

Un SSO supportant le mode direct (quelques-fois appelé mode SAML) dans lequel le navigateur, après la phase d’identification / authentification / autorisation, peut dialoguer directement avec l’application ne pose pas de problème particulier pour l’application locale. À condition toutefois que celle-ci supporte le mode SAML, ou qu’elle soit interfacée localement par un reverse proxy SAML.

### <a name="ch52">5.2 -Mode délégué</a>

Si l’on souhaite - ou si on doit - utiliser le mode à flux traversant, l’intégration d’une application locale est plus problématique en termes de gestion des flux comme en termes de performances. La solution préconisée par l'ANFSI consiste à utiliser un portail d’authentification local, subordonné au portail SSO central. Le mode de fonctionnement est analogue à celui décrit dans la section précédente (SSO pour les clients lourds) et utilise un web service SOAP. Ce mode de fonctionnement est détaillé dans l’offre de service de l'ANFSI.
  
## <a name="ch6">6 -Prise en charge des terminaux mobiles</a>

Le cas le plus simple est celui d’une application web protégée par un SSO. Le terminal mobile (Neo, Hesperis, CALLME ..) peut y accéder, sans difficulté particulière, à condition toutefois de supporter le mode d’authentification par carte agent si celui-ci est imposé par l’application, et si celle-ci souhaite une authentification de niveau élevé.

Le cas d’une **application mobile** est plus complexe, mais il nous ramène à celui des clients lourds traité dans la section 4 qui précède. Le même mode opératoire peut être utilisé.

Mais un terminal Android sait aussi parler nativement le protocole OpenID Connect et cette éventualité pourra être envisagée dans le futur.
