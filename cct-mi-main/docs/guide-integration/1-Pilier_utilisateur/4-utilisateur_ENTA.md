---
layout: doc
tags: ["NFR","ENT"]
order: 5
editLink: false
---

# Agent : l'environnement numérique de travail (ENT)

## Définition de l’ENT
L’Environnement Numérique de Travail (ENT) correspond à **l’ensemble des ressources, matériels, outils et services transverses mis à disposition des agents du Ministère de l’Intérieur et des Outre-Mer, leur permettant d’accéder aux informations, de créer ou modifier des fichiers, de communiquer, de collaborer sur des projets, en mobilité ou
dans les locaux administratifs, dans un cadre sécurisé.**

L’ENT permet de faciliter les communications, la collaboration et les échanges quotidiens.

L’ENT doit répondre aux normes de sécurité imposées par l’ANSSI.

Le remplacement des applications client-serveur vers des services en ligne engendre de plus fortes implications de sécurité et de confidentialité des données. Avec la doctrine « Cloud au centre », la sécurisation de l’ENT est en enjeu majeur. Le chiffrement des outils nomades de type Noemi, Ubiquity (GN), Hesperis, Call-MI et NEO revêt par
conséquent un caractère obligatoire.

Il convient également de rappeler et d’imposer à tous les Systèmes d’Information (SI) le respect des normes d’interopérabilité et de sécurité, et ce dès le début de la phase de développement (security by design). A ce titre, la maîtrise d’ouvrage de chaque SI est responsable de la compatibilité aux normes précitées pour les nouveaux SI comme pour les plus anciens qu’il conviendra de faire évoluer, pour garantir la sécurité des SI et
permettre l’accès à l’ensemble des postes de travail, sans imposer la moindre adhérence à un logiciel, format, version, outil ou à un système d’exploitation.

Les API permettant la communication entre logiciels devront être de type API Rest.

Le développement des applications web devra obligatoirement intégrer le format "Responsive Web Design". L'UX Design devra également être associée aux projets applicatifs dès les premières phases du projet.
L’accessibilité est un aspect clé de l’ENT car elle garantit que tous les utilisateurs, y compris les personnes en situation de handicap, puissent accéder à l’ensemble des fonctionnalités et services de l’ENT de manière équitable.

Il conviendra de :
- s’assurer de l’existence de fonctionnalités permettant d’ajuster la lisibilité des contenus à la convenance de l’utilisateur, par exemple en autorisant l’agrandissement des caractères, la présence d’alternatives textuelles aux médias (images, vidéos et podcasts), la bonne sonorisation des contenus par un formatage compatible avec les
aides techniques employées par les agents (lecteurs d’écran et plages braille) ;
- s’assurer que les fonctionnalités de publication de contenus permettent de publier des contenus accessibles ;
- veiller à proposer des interfaces avec un contraste suffisant ;
- rédiger les contenus dans un langage facile à lire et à comprendre ;
- respecter le Référentiel Général d’Amélioration de l’Accessibilité (RGAA) pour les interfaces web et se conformer aux normes européennes EN 301 549, ou à défaut aux bonnes pratiques internationales, notamment le Référentiel de l’Accessibilité des Applications Mobiles (RAAM) pour les applications mobiles ;
- fournir la preuve de l’accessibilité en réalisant ou faisant réaliser un audit d’accessibilité et en publiant le rapport avec l’objectif d’atteindre un score de conformité égal à 100 % des critères du RGAA ou de la norme équivalente pour les fonctionnalités auditées.



## Périmètre de l'ENT

Le périmètre de l’Environnement Numérique de Travail du Ministère de l’Intérieur et des Outre-Mer englobe les ordinateurs fixes et mobiles, sécurisés ou non, les smartphones et tablettes. Ces matériels, pour faire partie du périmètre de l’ENT, **doivent avoir été configurés ou masterisés à l’aide des images disques ou masters** créés
et déployés par la DTNUM ou par les services SIC locaux.

### Environnements bureautiques fixes
Les ordinateurs fixes ou portables, dits de bureau, et destinés à être **connectés uniquement sur le réseau du MIOM et du Réseau Interministériel de l’État (RIE)** seront configurés exclusivement avec les outils de la DTNUM, en respectant les versions préconisées et maintenues des systèmes d’exploitation et des logiciels.

### Environnements bureautiques nomades
Les ordinateurs portables nomades sécurisés et chiffrés de type **Noemi ou Ubiquity (Gendarmerie Nationale), munis d’un VPN (réseau privé virtuel, tunnel sécurisant l’accès au réseau du MIOM depuis un réseau privé personnel)** seront déployés selon les règles définies par la DTNUM ou le STSI². Le site [Noemi](https://noemi.dnum.minint.fr) rassemble toutes les informations nécessaires (les prérequis, les documentations d’installations, les actualités) pour les techniciens support, mais offre également à tous les utilisateurs des réponses aux interrogations, des documentations, une assistance de type FAQ et fixe les restrictions d’usage.

### Environnements d'administration de services
Les ordinateurs portables sécurisés destinés à l’utilisation du SPAN doivent être configurés selon les règles définies par la DTNUM. **Le SPAN est préconisé pour permettre l’administration à distance de serveurs** par des personnels qualifiés et ne sera déployé que pour cet usage particulier. Le site [SPAN](http://span.dsic.minint.fr/) rassemble les informations nécessaires à son déploiement et au support associé.

### Environnements Passerelles Internet
Les ordinateurs fixes ou portables communément appelés **« PC ADSL » ou « PC Internet »**, s’ils sont destinés à être **utilisés par le biais de Fournisseurs d’Accès Internet (FAI), ne doivent en aucun cas être exposés alternativement sur internet depuis les FAI et connectés sur le réseau du MIOM**. Ces machines seront configurées indépendamment de toute restriction par les directions qui les utiliseront, à l’exception de l’installation de l’antivirus officiel du MIOM version autonome, disponible sur le site de [téléchargement de la DTNUM](http://telechargement.dnum.minint.fr).


### Environnements de developpement et d'administration technique
Les ordinateurs **dédiés aux développeurs et administrateurs techniques seront configurés sous Linux** et seront préparés et maintenus par la DTNUM ou les services SIC locaux. Un dépôt sera créé à la DTNUM et celui ci sera le seul dépôt autorisé (en complément du dépôt géré par la GN pour leurs besoins propres). La mise en place de ce service sera effective dans le courant de l’année 2023.

### Appareils mobiles
Les smartphones et tablettes (Hesperis uniquement) déployés et maintenus par la DTNUM ou par les services SIC locaux permettent l’accès au service Hesperis, CallMI et NEO.

Ils permettent de bénéficier :
- d’une messagerie professionnelle, avec agenda et gestion des contacts
- de la téléphonie (appels, SMS, MMS),
- d’un accès internet via Orion,
- d’un accès intranet,
- d’un accès aux applications mobiles publiques et métiers validées par le C2MI.

Ils ne permettent pas :
- l’utilisation des réseaux sociaux comme Facebook, Twitter, instagram…
- d’utiliser des messageries instantanées (Whatsapp, Télégram).
- de se servir de son téléphone comme point d’accès mobile.

Rappel : l’utilisation du terminal CallMI est **destinée à un usage Diffusion Restreinte exclusivement (la voix, les sms et la Data sont sécurisés)**. En conséquence ce terminal n’est pas la solution à utiliser pour se tenir informé des dernières nouvelles ou autres activités de même nature.

Important : Toute demande de mise à disposition d’une **nouvelle application sur les smartphones et tablettes** devra nécessairement **passer par le Responsable de la Sécurité des Systèmes d’Information (RSSI)** du demandeur qui, une fois la requête analysée et filtrée, adressera la demande de validation au Service du Haut Fonctionnaire de Défense (SHFD), et plus précisément au **Centre de Cyberdéfense du Ministère de l’intérieur (C2MI)**, qui statuera et autorisera ou non le déploiement.


### Systèmes d'exploitation autorisés
Seuls les systèmes d’exploitation **Windows et Linux (versions supportées et correctement sécurisées)** sont autorisés sur le réseau du MIOM et du RIE. Tout autre système d’exploitation sera nécessairement connecté hors réseau. **Android** est le seul système d’exploitation autorisé (version supportée et correctement sécurisée) **sur les smartphones et tablettes** configurés par la DTNUM ou les services SIC locaux.

### Sécurité des postes de travail et des serveurs 
Tout poste de travail ou serveur (Windows ou Linux) doit être équipé des antivirus qualifiés par le ministère à jour de sa base antivirale.
Rien  ne doit entraver le fonctionnement et  la mise à jour de l'anti-virus et/ou de l'anti-espiogiciels et/ou du pare-feu.

### Sécurité des supports de stockage
Le passage à la station blanche de tous les supports amovibles est indispensable lors des transferts de fichiers. La mise en place d’un système d’authentification des supports amovibles au travers de l’antivirus est fortement recommandé.

### Sécurité reseaux
Une fiche pratique SSI relative à la sécurisation de l’accès internet par réseau ADSL (ou fibre) est établie par le SHFD. Celle ci est disponible en annexe réglementaire, il conviendra de s’assurer de la conformité de l’installation et de l’utilisation des PC ADSL ou Internet aux dispositions développées, notamment à la mise en place d’un portail d’authentification de type « Alcasar ».


**Tous ces outils sont supportés par la DTNUM et peuvent faire l’objet d’une demande d’assistance uniquement s’ils ont été configurés et déployés par les services SIC locaux dépendant de la Direction de la Transformation Numérique.**
**Il convient de respecter les préconisations établies dans ce document pour l'ensemble de l’ENT dépendant du périmètre du MIOM et des Directions Départementales Interministérielles sous responsabilité numérique du MIOM.**

## Les produits de l'ENT

### Materiel
On considère que les produits matériels qui composent l’Environnement Numérique de Travail sont distingués en 4 parties :
- Les PC sécurisés, fixes ou portables : Solutions Noémi, SPAN, Ubiquity (GN) et Gendbuntu (GN)
- Les PC dits ADSL ou Internet : Machines exclusivement dédiées et connectées sur Internet
- Les ordinateurs pour les développeurs et administrateurs techniques : Machines disposant de composants particuliers dédiés aux développeurs et administrateurs techniques
- Smartphones et tablettes sécurisées : Solutions Hesperis, Call-MI et Neo
    - Modèles qualifiés Hesperis 2 disponibles sur le site intranet dédié : Ne sont autorisés que les téléphones de marque SAMSUNG, qui comportent une couche de sécurité optimisée avec le module KNOX et sont dotés d’un client adapté à nos usages Samsung Mail, le tout sur une version android supportée.
    - Modèles qualifiés Call-MI (solution DR) disponibles sur le site intranet dédié : Ne sont autorisés que les téléphones de marque SAMSUNG, qui comportent une couche de sécurité optimisée avec le module KNOX et sont dotés d’un client adapté à nos usages Samsung Mail, le tout sur une version android supportée.
    - Modèles qualifiés NEO pour les forces de sécurité intérieure

### Logiciels / Services de l'Environnement numérique de Travail

#### Contexte réglementaire :

Le présent document s’appuie sur les textes référencés ci-après définissant la stratégie de l’État au niveau des systèmes d’information.
Ainsi les critères de sélection des outils/services reprennent ces priorisations pour définir ceux dont l’usage sera autorisé au sein du ministère de l’Intérieur.
- La [loi 2016-1321 du 7 octobre 2016 (article 16)](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000033203039) encourageant l’utilisation des logiciels libres et les formats ouverts ;
- Le Référentiel Général d’Interopérabilité, [RGI v1](https://www.numerique.gouv.fr/uploads/Referentiel_General_Interoperabilite_V1.pdf) - [ordonnance n° 2005-1516 du 8 décembre 2005](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000636232), [RGI v2](https://www.numerique.gouv.fr/uploads/Referentiel_General_Interoperabilite_V2.pdf) - [arrêté en date du 20 avril 2016](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000032438896);
- Le [Référentiel Général de l’Amélioration de l’Accessibilité](https://accessibilite.numerique.gouv.fr/doc/RGAA-v4.1.pdf), [arrêté du 20 septembre 2019](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000039120412) ;
- La [circulaire Ayrault du 19 septembre 2012 relative aux orientations pour l’usage des logiciels libres dans l’Administration](https://www.legifrance.gouv.fr/circulaire/id/35837) ;
- La [circulaire n° 6282-SG du 5 juillet 2021 relative à la doctrine d’utilisation de l’informatique en nuage par l’État](https://www.legifrance.gouv.fr/circulaire/id/45205) ;
- Le [guide d’hygiène informatique de l’Agence Nationale de Sécurité des Systèmes d’Information](https://www.ssi.gouv.fr/guide/guide-dhygiene-informatique/),
- La [Politique de Sécurité des Systèmes d’Information du Ministère de l’Intérieur et des Outre-Mer](http://ssi.minint.fr/index.php/politique-de-securite/pgsn-mi/1820-publication-de-la-pgsn-mi).
- [La note de la Dinum sur la non conformité de Microsoft Office 365 à la doctrine "Cloud au centre"](https://acteurspublics.fr/upload/media/default/0001/36/acf32455f9b92bab52878ee1c8d83882684df1cc.pdf).
- La [fiche pratique SSI du Service du Haut Fonctionnaire de Défense relative à la sécurisation de l’accès internet par réseau ADSL (ou fibre).](http://ssi.minint.fr/attachments/article/1691/fiche%20g%C3%A9n%C3%A9rale%20s%C3%A9curisation%20internet%20par%20r%C3%A9seau%20ADSL%20V2.pdf)

#### Critères retenus pour la sélection des logiciels, outils ou services :

|Critères|Attentes|
|--------|--------|
|Type de logiciel – Libre / Gratuiciel / Payant | Ré-utilisabilité, scalabilité, flexibilité, sécurité (transparence du code source), évolutivité (mutualisation possible des améliorations), pérennité, interopérabilité (usage des formats ouverts), potentiel encadrement des usage ou coût de licence pour un logiciel commercial. |
|Existence d’un support correctif O/N | Garantie d'assistance continue, mises à jour régulières aux fins d'amélioration de fonctionnalités et de corrections de bugs, permettant ainsi une stabilité d’usage sur le long terme. Un logiciel non supporté n’a plus vocation à être utilisé sur les postes du MIOM du fait de la non couverture de ses failles de sécurité. |
|Outil utilisé en Interministériel O/N | Facilité d’usage entre les systèmes utilisés dans d'autres administrations, possibilité de mutualisation en termes de support et de maintenance, partage des bonnes pratiques.|
|Version LTS ou ESR disponible O/N | Stabilité, disponibilité et maintien des correctifs sur le long terme, mises à jour de sécurité.| 
|Version SSI validée O/N | Logiciels évalués et validés par l’ANSSI.<br> Certification de conformité aux normes de sécurité.|
|Outil multi plateforme Windows/Linux/Android/Mac | Mutualisation, rationalisation, compatibilité matérielle, simplification d’appropriation de l’usage et continuité de travail dans un même outil.|
|Limitation d’usage dans le contexte ministériel | Définition de l’usage exclusif fixé pour le logiciel sur l’Environnement Numérique de Travail du MIOM. |
|Niveau d'accessibilité actuel <br> (Pris en charge/Partiellement pris en charge/Non pris en charge)| Définition du niveau d'accessibilité du logiciel ou service, afin de valoriser les outils potentiellement adaptés aux agents porteurs de handicaps.|
|Conformité aux normes et standards O/N | Interopérabilité, meilleure expérience utilisateur (fiabilité des restitutions), non adhérence applicative, conformité réglementaire.|
|Licence open source reconnue par OSI (Open Source Initiative - organisation dévouée à la promotion des logiciels open source) | Transparence et confiance, les logiciels reconnus sont évalués pour leur conformité,leur flexibilité de modification et de distribution du code source, leur coopération communautaire et leur stabilité.|
|Type de licence si logiciel propriétaire (libératoire/par poste/par agent/sur volume)| Vise à limiter l’impact financier et en termes de gestion des dites licences, afin de faciliter la scalabilité de l’usage du logiciel et son coût à la cible.|
|Porteur de logiciel ou service | Détenteur de la solution (mono-acteur, taille, origine, ….) permettant de s’assurer de la pérennité de la solution dans la durée et couverture possible du risque.|
|Droit soumis à une licence UE O/N | Conformité réglementaire stricte en matière de protection des données, équité et transparence, garantie de la protection intellectuelle, soumis au droit européen.|
|Taille indicative du paquet | Taille du fichier à mettre en dépôt sur la plateforme de téléchargement. Information donnée à titre indicatif, à prendre toutefois en compte pour un large déploiement sur les systèmes d’information du MIOM.|



**A noter :** Certains logiciels pourront être retenus malgré la « non conformité » à un ou plusieurs critères sur raison particulière et justifiée, sans toutefois être en opposition avec la Politique de Sécurité des Systèmes d’Information du MIOM et les principes de base pré-cités. La situation pourra ainsi être réévaluée au regard des nouvelles solutions qui pourraient voir le jour et apporteraient la couverture fonctionnelle attendue tout en répondant aux critères.


Tous les logiciels du poste de travail seront mis à disposition sur le [site de téléchargement](http://telechargement.dnum.minint.fr/), à raison de 3 versions au maximum. Les logiciels installés sur l’ENT ne seront téléchargeables que depuis [les plateformes officielles du MIOM](http://telechargement.dnum.minint.fr/) ou à terme un outil de gestion centralisé, ou un dépôt Linux DTNUM ou GN.

Tout logiciel ne bénéficiant plus de mise à jour sera remplacé par une autre solution logicielle remplissant le même usage ; le support de la solution doit être assuré par la communauté ou l'éditeur.


**Usages :**
La couverture fonctionnelle de la solution (logiciel ou service) sera par définition totale ou partielle, en fonction des besoins exprimés par les services demandeurs.
La solution retenue devra néanmoins couvrir le spectre le plus large possible de l’usage qui lui est associé.
Le choix des logiciels, outils et services sera basé sur les usages et les bonnes pratiques.
L’objectif est de parvenir à proposer un seul outil/logiciel pour un usage.
L’usage final non couvert par l’offre, correctement défini par le service demandeur, permettra de proposer de nouvelles solutions au CCT, par le biais d’un [formulaire d’expression de besoin (FEB) dûment renseigné.](../7-Annexes/FEB_Nouvel_Outil_BENT.pdf) 

**Politique de versions des logiciels, outils ou services :**

Est appliquée l’ensemble des mises à jour de sécurité (au fil de l’eau), sauf en cas d’impact sur le fonctionnel du logiciel. Dans ce cas une analyse d’impact est pratiquée, au regard du risque couvert et une décision est prise concernant l’installation du dit correctif ou son ajournement.

Pour les logiciels majeurs du poste de travail des agents du ministère (navigateur, suite bureautique,..) le cycle de mises à jour prévisionnel est de 6 mois (avril et octobre).

S’appuyant sur la feuille de route du produit à déployer lorsque cette dernière est connue (une variation de quelques semaines peut être nécessaire, le temps de valider la version et selon la présence ou non de correctif suite à la découverte de problèmes dans la version proposée au téléchargement).

Pour les autres logiciels du poste de travail, une montée de version annuelle est prévue (avril ou octobre) sur la base des avancées fonctionnelles notables.

Les logiciels du poste de travail sont testés par un panel de testeurs sur les domaines AC, AT, ATE et PN durant 2 semaines avant mise en production.

**Déploiement des logiciels :**

Le poste de travail de type ordinateur de bureau, chiffré ou non, et destiné à être connecté au réseau du MIOM est fourni à l’agent avec un bouquet logiciel de base.

Les sections support locales chargées du déploiement et de l’installation auprès des agents installeront les outils complémentaires nécessaires à l’agent en fonction de son périmètre d’activité et de ses besoins.

Pour les machines dont le système d’exploitation est de type Microsoft Windows, les services locaux ont à leur disposition sur l’Active Directory, un groupe WPP présent dans chaque OU (Unité d’Organisation) permettant aux machines intégrées à ce groupe WPP (pc_standards) d’obtenir automatiquement et systématiquement la dernière
version du socle logiciel de base du poste de travail (navigateur, suite bureautique, lecteur PDF, lecteur multimédia, éditeur de texte, retouche d’image, navigateur de visioconférences et client de messagerie). Ce socle sera étendu autant que faire se peut avec des outils qui seront définis comme faisant partie du bouquet logiciel de base fourni à l’agent.

La diffusion automatique des mises à jour du socle logiciel par WPP pourra être remplacée à l’avenir par un outil de gestion et de déploiement centralisé.

A terme, l’agent pourra par lui-même piocher dans un magasin d’application les outils disponibles et les installer sans génération de ticket de support ni besoin de compte administrateur.

Les logiciels ou applications pour les smartphones sont disponibles depuis le magasin accessible depuis chaque terminal ; leurs mises à jour est automatique ou manuel, paramétrable par chaque utilisateur (documentations disponibles sur les sites [Hesperis2](https://hesperis2.dnum.minint.fr) et [Call-MI](http://call-mi.dsic.minint.fr))


#### Logiciels, outils et services retenus

Se référer au chapitre dédié dans le [référentiel des produits](../../referentiel-des-produits/cct_pro)

La [feuille de route sur les produits de l'ENT](../7-Annexes/Feuille_de_route_des_produits_de_l_ENT_2023.pdf) est disponible au travers de ce lien.

Le [tableau des critères utilisé par les services de l'ENT pour qualifier les produits.](../7-Annexes/Classement_offre_ENT_CCT_2023.ods)

Les usages les plus représentatifs de l’ENT sont distingués comme suit :

![big picture ENT](/img/ent/ENT_big_picture.jpg)
