# Annexe : l'environnement numérique de travail (ENT) _ Règles


| Ref | Statut | Intitulé |
| --- | ------ | -------- |
|-|RG|<p>L'utilisateur doit  pouvoir accéder aux services applicatifs pour lesquels il est habilité, en toute sécurité, à tout moment, quel que soit le type de terminal, en tous lieux. Cf ATAWAD (Any Time, AnyWhere, Any Device).</p><p>Cette règle  doit être nécessairement contextualisée. Par exemple, dans le cas des agents du ministère, le principe du "Any Device" se limite aux terminaux fournis par le ministère, et ne prend pas en compte les terminaux personnels (dits BYOD). Néanmoins nous pouvons décliner quelques règles et recommandations structurantes pour nos applications :</p><p> - L’application doit être non  adhérente  vis à vis du poste de travail.</p><p> - Une application doit être accessible indifféremment sur un terminal Windows, Linux, Android, IOS, sur le grand écran d'un poste de bureau comme sur celui d'un smartphone.</p>|
|1439|RG|Toute application doit viser le minimum d'adhérence au poste de travail. Elle doit être indépendante du système d'exploitation (OS) de ce poste de travail.<br>En conséquence, il devra donc s'agir d'une application WEB.|
|1440|rc|Les applications rendues disponibles sur une terminal mobile doivent développer leurs interfaces en s’appuyant sur la technologie Progressive Web Applications (PWA) en priorité.|
|1441|rc|Toute application doit s’adapter à tous les terminaux validés au sein du ministère, ordinateurs, tablettes et smartphone. Trois approches sont possibles par ordre de préférence :<br>1\. **De préférence** le « Responsive web design » qui produit, sur une seule URL, un code html unique, auto-adaptatif, qui s’adapte aux caractéristiques du terminal.<br>2\. **à défaut**, la diffusion dynamique (« Dynamic serving » qui produit, sur une seule URL, un code html spécifique à chaque type de terminal.<br>3\.**à proscrire**, des URLs et du code spécifiques à chaque type de terminal.|
|1442|rc|Une application mobile (quand une application web ne peut faire l'affaire - cf règle 1440) devrait être configurable de telle sorte qu'elle soit hébergeable indifféremment dans un magasin Hesperis, CALL MI ou Neo. En effet chacun de ces environnements impose ses propres contraintes.|
|1228|RG|Les applications et les sites de communication web doivent respecter les standards proposés par les organismes reconnus tels que le W3C, l'ECMA ou l'IETF et être validés  avec l’ensemble des navigateurs qui seront potentiellement utilisés par les populations devant utiliser l’application|
|1086|rc|Il est recommandé de ne pas utiliser les macros des suites bureautiques.|
|1096|RG|Tout logiciel ou nouvelle version de logiciel devant être installé sur les terminaux de communication RUBIS (TIE et TDG fixe) doit au préalable être validé par le ministère. Toute demande d'ajout de logiciel doit être faite au ministère ou à la SDRTA pour l'ANFSI. Aucun autre logiciel que ceux autorisés dans le CCT ne peut être installé sur un TDG fixe.|
|1097|RG|Les versions des logiciels mentionnés dans le référentiel technique des produits (Terminal de communication RUBIS) sont les versions strictement imposées. Le déploiement toute nouvelle version d'un logiciel sur les terminaux de communication RUBIS (TIE et TDG fixe) est effectué conformément aux directives émises par le ministère ou l'ANFSI.|
|1160|RG|Tout poste de travail ou serveur (Windows ou Linux) doit être équipé des antivirus qualifiés par le ministère à jour de sa base antivirale.|
|1162|RG|Rien  ne doit entraver le fonctionnement et  la mise à jour de l'anti-virus et/ou de l'anti-espiogiciels et/ou du pare-feu.|
|1176|RG|Les offres de téléphonie IP (VOIP) orientées grand public sont interdites pour le ministère.|
|1260|rc|Les applications internes doivent être testées dans tous les environnements de travail prévus pour les populations ciblées. |
|1316|rc|Les applications client lourd sont à déployer sur l’environnement de travail au travers d’ une procédure automatique en mode silencieux et/ou manuel.|
|1318|RG|Une fonction de désinstallation de l’application installée sur l’environnement de travail doit exister. La fonction de désinstallation doit supprimer tous les ressources(composant logiciel et données) spécifique à l’application.|
|1354|RG|Pour les produits libres destinés à la bureautique, ce sont exclusivement les versions disponibles sur le site intranet officiel du ministère qui doivent être téléchargées par les administrateurs des parcs informatiques et utilisées.|
|1380|RG|Toute application client lourd doit être installée au travers d’un package d’installation adapté au système d’exploitation de l’environnement de travail. |
|1093|RG|Les données applicatives doivent être stockées dans des ressources réseau partagées, sauvegardées et sécurisées en terme d'accès.|
|1147|RG|L'accès au système d'information du ministère par des technologies sans-fil est interdit en dehors des offres de services de nomadisme ministérielles approuvées par le ministère.|
|1306|RG|L’application doit contenir une fonction d’aide à l’utilisation évolutive,  à destination des utilisateurs.| 

La nécessité de se déroger à ces règles revêt un caractère dérogatoire et temporaire.

L’accord doit être donné par le bureau en charge de l’Environnement de travail. 
