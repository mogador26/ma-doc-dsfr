# Cas des connexions des agents via internet

Les agents peuvent être autorisés à se connecter à une application du MI via Internet. Le risque de ce type de connexion est l'exposition d'une donnée très sensible : la liste des agents du ministère. Deux cas de figure existent selon que l'on accède à une application métier ou à un service à l'agent.

### Connexion à une application métier
Ce cas devrait être peu usité car les applications métier sont généralement confinées à l'intranet ou au RIE. Néanmoins la solution cible est l'utilisation de AgentConnect Agent.

### Connexion à une application offrant un service à l'agent (RH, formation, ...)
Dans ce cas d'usage, l'agent accède à un service qui relève plus des ressources humaine que du métier. L'authentification de l'agent, considéré comme un citoyen, peut alors être déléguée à AgentConnect. FranceConnect fournit (entre autres) l'adresse mail personnelle de l'agent, et c'est celle-ci qui sera utilisée pour vérifier la qualité d'agent du ministère et la fourniture du n° RIO utilisé pour la connexion. Cette solution nécessite que l'adresse mail personnelle de l'agent, identique à celle du fournisseur d'indentité FranceConnect que celui-ci va choisir, soit enregistrée dans le SI RH du ministère.

## Impacts sur les applications
Selon le périmètre d'usage de l'application, les actions suivantes sont requises :
1. inscrire l'application dans le SSO ministériel dont elle relève (PROXIMA, CHEOPS NG, PASSAGE PP ou PASSAGE 2)
2. S'assurer de la fédération des identités pour que l'application ne soit pas restreinte à la population « naturelle » du SSO dans lequel elle est inscrite. Exemple : on peut souhaiter qu'une application inscrite dans PASSAGE 2 puisse être accessible par des gendarmes et des policiers, ce qui nécessite une action de fédération inter-SSO
3. Inscrire l'application dans AgentConnect si elle doit être utilisée par des agents externes au ministère de l'intérieur.


