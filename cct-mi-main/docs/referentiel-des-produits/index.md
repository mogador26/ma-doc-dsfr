---
layout: doc
editLink: false
lastUpdated: true
---

## <a name="Orga">Organisation du référentiel</a>

Le référentiel des produits est l’une des composantes, historique, du CCT ministériel. Il concourt à la finalité du CCT en préconisant, pour chaque fonction logicielle des composants maitrisés par le ministère, avec une parité volontariste entre solution éditeur et solution libre. Les composants sont classés dans 8 parties :
- Exploitation et hébergement
- Architecture technique
- Réseaux de transport
- Sécurité et interopérabilité
- Poste de travail
- Développements
- Méthodologie
- Composants et services génériques

Il peut arriver que sur certaines fonctions les différentes DSI du ministère fassent des choix différents: dans ce cas, la divergence est signalée.

## <a name="CritEli">Critères d'éligibilité pour l'inscription d'un produit au CCT</a>
Tous les logiciels utilisés au sein du ministère n’ont pas vocation a être référencés dans le cadre de cohérence technique ministériel. Le tableau ci-dessous en propose une classification et précise les classes de logiciels qui relèvent du CCT.

![Criteres](/img/CCT_schema_perimetre.png)


Les logiciels qui relèvent du CCT : 
- Les **composants de base** : ce sont les  briques de base d'un système d'information. Ils n'ont pas vocation à fonctionner seul et ne fournissent pas de services finaux aux utilisateurs métiers, mais sont très structurants pour le SI. Leur  rôle est de fournir des services à d'autres composants ou applications.
- Les **outils métier informatiques**, qui permettent à la fois de créer le service (outils de génie logiciel) et de maintenir ce service (outils de sauvegarde, de supervision, de déploiement...etc)
- Les **services applicatifs transverses**. Ceux-ci font souvent l’objet d’une offre de service, comme l’offre de gestion électronique de courrier (GEC) bâtie sur le produit Maarch, les offres de signature électronique et d'horodatage, les offres de SSO bâties sur le composant LemonLDAP::NG. 

Les logiciels ne relevant pas du CCT : 
- Les **applications métiers**. Une application métier est un logiciel formé de plusieurs composants avec des paramétrages et/ou des adaptations ou développements spécifiques pour satisfaire les exigences particulières d'un métier (Sécurité intérieure, administration territoriale, sécurité civile, outre-mer...). 
Une application métier n’est pas inscrite au CCT, mais elles doivent utiliser des composants référencés au CCT et être inscrites dans le [référentiel du ministère](https://referentiel-applications.interieur.rie.gouv.fr/). 
- Les **logiciels dits «de niche»**. Il s’agit en général d’outils destinés au poste de travail, de diffusion limitée et d’usage réduit, non structurants pour le SI.
Mais ATTENTION, leur caractère marginal n’implique pas qu’ils soient sans danger pour le SI. Si leur utilisation ne relève pas d’une inscription au CCT, un accord de la chaîne SSI reste nécessaire.
- **Les logiciels "embarqués"**. On entend par logiciel « embarqué » dans une application métier un logiciel qui ne nécessite aucune intervention ni aucune compétence spécifique de la part des exploitants (dont les intégrateurs, architectes ....) . Notamment
 - l'installation et la mise à jour de ces logiciels embarqués sont pleinement intégrées à celles de l'application métier qui les utilise
 - ces composants ne nécessitent pas de TMA ni de MCO spécifique 
 - ces composants ne doivent pas impacter un changement de marché de maintenance
 - *Remarque importante* : un logiciel ne pourra appartenir à cette catégorie que si les conditions ci-dessus ont été clairement explicitées au fournisseur de l’application dans le cadre du marché initial.

## <a name="CritAdo">Critère d’adoption d’un produit</a>

Dans le choix de produits, le besoin opérationnel est un des aspects fondamentaux. Toutefois, la rationalisation du SI du ministère, sa sécurité, son agilité, la réduction des socles logiciels, la recherche d'efficience sont une nécessité qui doit être prise en compte dès le début des projets. A ce titre, le référentiel des produits n'est pas un outil d'exclusion des solutions qui ne seraient pas inscrites mais il s'agit d'un recueil synthétisant les produits qui ont fait leurs preuves au niveau ministériel ou interministériel et qui doivent donc être prioritairement utilisés.

Lorsqu’un besoin logiciel non couvert par le référentiel est constaté, les produits candidats à l'entrée au CCT doivent impérativement satisfaire à des exigences et fournir des garanties notamment en termes de :
- sécurité des systèmes d'information;
- modération du coût financier;
- généralisation à plusieurs acteurs SIC du ministère ;
- qualification selon les processus du ministère et bonne intégration dans le SI de l’État;
- couverture fonctionnelle;
- simplicité d'emploi pour le public visé;
- support;
- respect des normes et formats, interopérabilité;
- modularité, réutilisabilité, pérennité, fiabilité;
- un engagement à acquérir puis maintenir les compétences nécessaires à son utilisation (mise en place d’un plan de formation ..etc).

Actuellement, les inscriptions au CCT doivent logiquement favoriser la complétion du socle fonctionnel défini à sa création. En effet, certains chapitres existants ne proposent pas encore de produit. Pour les autres chapitres, le retrait de produits obsolètes doit dans la mesure du possible compenser les entrées afin de ne pas élargir le socle technique, voire de favoriser sa réduction.

Un référencement au CCT peut prévoir des limitations à un périmètre particulier (ex : "périmètre ANFSI", "périmètre PP") ou une exclusion d'un périmètre (ex : "hors périmètre DTNUM"...). Toutefois, dans le but de rationaliser et rapprocher les usages des quatre entités SIC du ministère, cette pratique doit rester exceptionnelle.

Un refus d'entrée au CCT peut être assorti ou non d'une dérogation temporaire à utiliser le produit. Toutefois, les dérogations doivent également garder un caractère exceptionnel. Elles sont gérées par chaque acteur SIC dans son périmètre.

## <a name="Sill">Référentiel des produits du CCT ministériel et SILL interministériel</a>

Le Socle Interministériel de Logiciels Libres [SILL](https://code.gouv.fr/sill/), édité chaque année, est l’une des sources du référentiel de produits du ministère en ce qui concerne les logiciels libre. Chaque nouvelle édition du SILL interministériel entraine une révision du référentiel des produits du CCT ministériel. 

Tous les produits référencés au SILL n’ont pas nécessairement vocation à être utilisés au ministère : **le référentiel des produits du CCT a la priorité sur le SILL**. 

En conséquence, les règles suivantes s'appliquent :
- le référencement SILL est explicitement signalé par le commentaire « Inscrit au SILL».
- quand la version préconisée est celle du SILL, cela est également indiqué explicitement par la mention « Version SILL ».
- l'usage d'un produit du SILL non inscrit au CCT doit faire l'objet d'un signalement auprès du référent CCT de l'acteur SIC dont vous relevez. Voir chapitre gouvernance dans la présentation générale.

## <a name="Cycle">Gestion du cycle de vie des produits</a>

Chaque produit est porté par un ou plusieurs services ou acteurs SIC qui participent à la formalisation du cycle de vie du produit dans le CCT. Le maintien d'un produit au CCT doit être reconsidéré tous les trois ans au maximum. A cette occasion, le constat de la difficulté d'un produit à se diffuser ou se maintenir sur le SI du ministère doit initier un processus de retrait du CCT. Ainsi, la sortie d'un produit du CCT doit notamment être envisagée dans les cas suivants :
- stagnation ou diminution significative du nombre de projet employant le produit depuis son inscription ;
- emploi du produit chez un seul acteur SIC sans preuve de projet d'adoption par les autres ;
- impossibilité pour les membres du comité CCT d'identifier un porteur du produit ;
- obsolescence du produit.

## <a name="Statuts">Gestion des statuts et des versions</a>

Durant leur cycle de vie, le statut des produits référencés au CCT peut être O (Observation), R (Recommandé), A (Assujetti) ou M (Migration). 
S'il existe une version recommandée (R) pour un produit, elle doit être utilisée pour les nouvelles installations. Les versions de produits en migration (M) ne doivent plus servir pour de nouvelles installations. Une version de produit placée en migration (M) doit être migrée dans la version recommandée (R) si elle existe, dans les meilleurs délais.
Un produit inscrit au CCT mais obsolète au niveau sécurité (plus de support éditeur ou communautaire), doit être retiré et remplacé par une version supérieure stable, sécurisée et supportée, dans les plus brefs délais. Les délais de mise à jour du CCT n'entravent pas la migration effective sur le terrain.

### Statut observation
Le statut « En observation » a été introduit pour les produits comme pour les règles. Il permet d'inscrire des composants dont on ne sait pas encore s'ils seront pérennes. Après une phase d'observation, le composant peut être pérennisé avec le statut recommandé ou être progressivement retiré du CCT. Ce statut a également été introduit dans le SILL et dans le RGI.

### Statut recommandé
Un produit peut être placé en position « Recommandé » lorsque l'ensemble des conditions suivantes sont remplies :
il est utilisé pour tout nouveau projet ou toute nouvelle installation ou en remplacement d'un produit équivalent ou d'une ancienne version du même produit ;
il est d'un emploi facile ou un support adéquat interne ou externe est à disposition de tous les utilisateurs potentiels ;
il est utilisé ou en voie de l'être (qualification) dans au moins deux entités SIC ;
il est libre ou son acquisition fait l'objet d'un marché permettant de limiter fortement le coût par utilisateur (licences) ou les coûts d'acquisition sont financés par l'administration centrale.

### Statut assujetti
Le statut « A » « Assujetti » implique une autorisation du référent CCT de l'entité dont dépend le demandeur avant toute utilisation.
Un produit doit être placé en position « Assujetti » lorsqu’une au moins des situations suivantes est constatée :
son coût financier d'acquisition (ex : licences) est conséquent pour le service utilisateur ou le projet ;
son emploi est complexe et le support est limité en matière de ressources internes ou externes ;
il est utilisé dans une seule des quatre entités SIC et n'est pas en voie de l'être dans les autres entités.

### Statut migration
Une version de produit est placée en position « Migration » lorsqu'une au moins des situations suivantes est constatée :
- le produit n'est plus maintenu (sécurité, évolution) ;
- une version supérieure qualifiée par deux entités SIC au moins est au CCT en position recommandée.

## <a name="Inscrip">Demander l’inscription d’un produit au CCT</a>

Le traitement d’une demande d’inscription de produit au CCT fait intervenir plusieurs types d’acteurs :


| Acteurs | Actions |
| ------ | ------ |
| Demandeur | - Il adresse sa demande d’inscription au référent CCT dont il relève. (Par exemple le référent de l'ANFSI pour les services de police).<br/> - Si sa demande relève d’une inscription au CCT (son référent pourra arbitrer en la matière), il rédige une fiche de demande d’inscription|
| Référent CCT | - Il réceptionne la demande d’inscription<br/>- Il décide de sa recevabilité :<br/> - si le produit ne relève pas du CCT ministériel, ses conditions d’usage seront traitées localement, avec implication de la chaîne SSI locale.<br/> - Si le produit relève du CCT ministériel, il porte la demande devant le comité d’architecture.<br/> - En cas de refus d’inscription, il peut accorder une dérogation temporaire. <br/><br/> **Dans le cas d'un produit lié à l'environnement de travail, se reporter à la fiche et le mode opératoire du service en charge**|
|Comité d’architecture| Il instruit la demande portée par le référent, et lui apporte une réponse. Cette réponse peut être l’une des suivantes :<br/> - Inscription du produit, avec le statut approprié (Observation, Assujetti, Recommandé …)<br/> - L’inscription peut être assortie d’une restriction d’usage <br/> - Refus d’inscription – Dans ce dernier cas, le référent peut encore accorder une dérogation temporaire.|
| Equipe DTNUM liée au CCT | Elle inscrit le composant au référentiel et publie celui-ci.|

## 📦 <a name="Intro">[Le référentiel de produits](./cct_pro)</a>

Ce document liste les composants et environnements de référence (versions et états techniques des composants qualifiés, fournisseurs,
contextes d'emploi éventuels).

Remarque :
Pour chaque choix effectué, un statut est associé pour préciser le cadre d'utilisation du produit
- **Recommandé** : **Lettre "R" sur fond vert**. Le produit peut être utilisé librement aussi bien pour un nouveau système que pour une intégration ou un portage d'un système existant.
- **Migration** : **Lettre "M" sur fond jaune**. Le produit ne peut être utilisé que pour faciliter la migration ou le portage d'un système existant.
- **Assujetti** : **Lettre "A" sur fond mauve**. L'utilisation du produit est soumise à autorisation des référents CCT du ministère. Il peut s'agir d'un produit soumis à licence, ou d'un produit dont on ne souhaite la diffusion au sein du ministère [cct@interieur.gouv.fr]
- **Observation : lettre "O" sur fond rose**. Le produit est prometteur mais pas nécessairement pérenne. Son utilisation du produit est soumise à autorisation des référents CCT du ministère. Ce statut est temporaire, selon le résultat des premières expérimentations, le produit pourra être passé en recommandé, ou en migration avant d'être retiré.

*Les combinatoires de composants sont décrites dans l'annexe piles logicielles*.

