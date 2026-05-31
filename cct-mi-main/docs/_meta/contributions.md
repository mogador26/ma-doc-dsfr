---
layout: doc
---

## Contribution

La contribution au CCT se veut largement ouverte. Pour atteindre cette objectif, les contenus du CCT, ses _codes_ source, ont été déposés dans le gitlab de la **forge MI** (DTNUM).  
La contribution à ces contenus s'appuie donc sur les fonctions natives du dépôt git / gitlab. Ce guide de contribution décrit comment le contributeur peut se connecter à la forge gitlab du ministère puis accèder aux projet CCT qui lui sont ouverts, avec un "rôle" qui détermine ses droits.

Deux types de contributions sont offerts :
- premier niveau de contribution, ou **niveau commentateur** : le contributeur n'accède pas directement au code source des composantes du CCT, mais peut ouvrir des fils de discussion avec les autres contributeurs du CCT, et ce sur chacune des composantes qui constituent le CCT. Ces commentaires seront pris en compte pour la publication de de la version suivante du CCT.
- second niveau de contribution, ou **niveau éditeur** : le contributeur accède aux fiches et documents du CCT, peut les éditer et ainsi soumettre une contribution clé en main. Cette contribution sera instruite et validée par un comité CCT au sein du comité d'architecture. Elle sera publiée dans la version suivante du CCT.

## Accès à la forge et enrôlement sur le dépôt source du CCT

La [forge MI](https://gitlab.forge-dc.cloudmi.minint.fr/) est accessible via les SSO du ministère (PASSAGE, CHEOPS NG, PROXYMA) : pour vous y connecter, vous pouvez utiliser le bouton PASSAGE qui vous renvoit vers le portail d'authentification du SSO PASSAGE, lequel permet une authentification faible (par identifiant / mot de passe) ou forte (carte agent). Le portail PASSAGE comporte également les boutons "CHEOPS NG" et "PROXYMA" pour les agents relevant de ces deux SSO.

Pour accéder directement au projet CCT, utiliser l'URL enrichie [Projet CCT](https://gitlab.forge-dc.cloudmi.minint.fr/cct/cct2-mi)

**Remarque importante:** lors d'une première connection, votre accès au dépôt CCT est ne vous autorise par défaut que le niveau commentateur décrit plus haut (rôle "Guest" dans la terminologie de Gitlab). Le rôle d'éditeur (rôle au minimum "Reporter" dans la terminologie de Gitlab), demande une intervention du gestionnaire du projet, vous devez le demander.

## Code de conduite

Toute contribution à un projet commun doit respecter quelques règles de comportement, décrites dans le document suivant : [Code de conduite](./CODE-OF-CONDUCT)

## Contributeur commentateur

Le contributeur commentateur peut se connecter sur le dépôt gitlab du CCT. Le rôle qui lui est attribué sur les projets CCT est "guest".

| Action | Description |
|--------|-------------|
| Connexion au dépôt CCT <br /> [Lien forge](https://gitlab.forge-dc.cloudmi.minint.fr/cct/cct2-mi) | ![Connexion](/img/Gitlab-PASSAGE.png) <br /> Cliquer sur le bouton "PASSAGE", même si vous relevez d'un autre SSO |
| Authentification | ![Connexion](/img/Gitlab-PASSAGE-auth.png) <br /> Authentifiez vous, en mode mot de passe ou carte agent. Si vous relevez d'un autre SSO que "PASSAGE", utilisez les boutons correspondant : **CHEOPS NG** ou **PROXYMA**. |
| Choisir le projet CCT sur lequel vous voulez contribuer | Le rôle «Guest» ne permet de visualiser que la page wiki du projet<br />Le bouton [Members] dans le menu de gauche vous permet de lister tous les membres du projet et de visualiser le rôle qui leur est attribué. |
| Ouvrir la page des discussions<br />(un élément de discussion est une "issue") | ![Issues](/img/Gitlab-Issue.png) <br /> Choisir «Issues» dans le menu de gauche (en notant le compteur indiqué à droite, pour le moment : 0 issues)<br />La page de discussion vous liste par défaut les «Issues» ouvertes<br />Noter les 3 compteurs Open / Closed / All, qui permettent de visualiser les fil de discussion fermés |
| Créer un nouveau fil de discussion | Cliquer sur [New Issue] : la page suivante s'affiche <br />![Issues](/img/Gitlab-SubmitIssue.png) <br /> Indiquer le titre, la description et la case indiquant si l'issue est confidentielle<br />Cliquer [Submit Issue] – noter que le compteur d'Issues du menu de gauche s'incrémente |
| Suivi de la discussion | A moins que vous n'ayez créé un fil confidentiel, tous les membres du projet peuvent participer à la discussion. A chaque contribution, un mail de notification est envoyé |
| Fermeture du fil de discussion | Chaque participant peut prendre l'initiative de fermer le fil de discussion, comme il peut décider de le réouvrir. |
| Suites données | Il appartient au comité CCT d'arbitrer les contributions, et d'en communiquer les suites, par exemple la prise en compte dans la prochaine version officielle du CCT |

## Contributeur éditeur

Le contributeur commentateur peut se connecter sur le dépôt gitlab du CCT. Le rôle qui lui est attribué sur les projets CCT est "reporter".

| Action | Description |
|--------|-------------|
| Connexion au dépôt CCT <br /> [Lien forge](https://gitlab.forge-dc.cloudmi.minint.fr/cct/cct_final) | ![Connexion](/img/Gitlab-PASSAGE.png) <br /> Cliquer sur le bouton "PASSAGE", même si vous relevez d'un autre SSO |
| Authentification | ![Connexion](/img/Gitlab-PASSAGE-auth.png) <br /> Authentifiez vous, en mode mot de passe ou carte agent. Si vous relevez d'un autre SSO que "PASSAGE", utilisez les boutons correspondant : **CHEOPS NG** ou **PROXYMA**. |
| Veiller à ne travailler que sur la branche Master du projet<br />(il ne devrait pas en exister d'autre) | |
| Choisir la fiche que vous souhaitez modifier | |
| Editer la fiche | Vous accédez au contenu modifiable de la fiche, en language markdown.<br />Noter qu'en réalité vous n'êtes pas autorisé à éditer directement la fiche : un "fork" de la branche dev est réalisé c'est à dire la création d'une branche "patch-xx" dans votre espace personnel |
| Soumettez votre proposition de modification<br /> (submit merge request) | En français, vous soumettez une demande de fusion de votre branche provisoire, modifiée par vos soins, avec la branche dev |

> **Note :** Ce contenu a été converti à partir d'un HTML brut. Certaines parties (comme les images) nécessitent une adaptation manuelle pour être correctement intégrées dans le format Markdown.