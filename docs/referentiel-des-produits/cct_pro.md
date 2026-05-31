---
layout: doc
editLink: false
----

<h2>
<a name="EX"> Partie 1 : Exploitation &amp; H&eacute;bergement - [ EX ]</a>
</h2>

<p class="comm_italic">Pour les logiciels pris en charge au march&eacute; de support logiciels libres, il est indiqu&eacute; "Oui" dans la colonne "Supp. LL"</p>

**Convention de typographie**:

- Les **logiciels libres** sont en **caractères gras**.
- Les **produits modifiés** par rapport à la précédente version du CCT sont en **couleur bleue**.
- Les nouveaux produits sont en **couleur verte**.

La 6ème colonne ("Supp. LL") indique les logiciels libres supportés par le marché SLL.
Voir le commentaire pour d'éventuelles indications complémentaires sur les versions supportées.


<hr>
<h3>
<a name="EXHD"> Chapitre 1 : Haute disponibilit&eacute; / R&eacute;partition de charge (PCA) - [ HD ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">EX-1110</td><td class="inc_open">Keepalived</td><td class="inc_open">keepalived.org</td><td>1.x</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Basculement et partage de charge</td>
</tr>
<tr>
<td class="inc_open">EX-1416</td><td class="inc_open">HAProxy</td><td class="inc_open">haproxy.com</td><td>Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Basculement et partage de charge</td>
</tr>
<tr>
<td class="inc_open">EX-1487</td><td class="inc_open">Corosync Cluster Engine</td><td class="inc_open">Corosync.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Brique de mise en œuvre d&rsquo;un cluster de N nœuds</td>
</tr>
<tr>
<td class="inc_open">EX-1488</td><td class="inc_open">Pacemaker</td><td class="inc_open">clusterlabs.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Outil de gestion de ressource sur un cluster N nœuds &ndash; Associ&eacute; &agrave; Corosync</td>
</tr>
</tbody>
</table>
<h3>
<a name="EXPS"> Chapitre 2 : Plan de secours (PRA) - [ PS ]</a>
</h3>
<p class="comm_italic"></p>
<h3>
<a name="EXSV"> Chapitre 3 : Sauvegardes - [ SV ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">EX-1069</td><td class="inc_open">BACULA</td><td class="inc_open">bacula.org</td><td>Version distrib</td><td class="statut_M">M</td><td>Oui</td><td class="comm_italic">Outil de sauvegarde. La version est celle nativement incluse dans la distribution Linux. BACULA tend a &ecirc;tre remplac&eacute; par son fork BAREOS qui, lui, est inscrit dans le SILL.</td>
</tr>
<tr>
<td class="inc_open">EX-1569</td><td class="inc_open">BAREOS</td><td class="inc_open">bareos.org</td><td>Version SILL</td><td class="statut_R">R</td><td>Non</td><td class="comm_italic">Inscrit au SILL. Outil de sauvegarde et de restauration de fichier en mode client-serveur dans un r&eacute;seau. Fork de BACULA.</td>
</tr>
<tr>
<td class="maj_nonopen">EX-1420</td><td class="maj_nonopen">NetBackup</td><td class="maj_nonopen">VERITAS</td><td>10.0</td><td class="statut_R">R</td><td></td><td class="comm_italic">Contexte d'emploi : h&eacute;bergement DTNUM</td>
</tr>
<tr>
<td class="inc_nonopen">EX-1114</td><td class="inc_nonopen">Time navigator</td><td class="inc_nonopen">Atempo</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Contexte d'emploi h&eacute;bergement ANFSI/STIG</td>
</tr>
<tr>
<td class="new_nonopen">EX-1615</td><td class="new_nonopen">Veeam Backup &amp; Replication </td><td class="new_nonopen">veeam.com</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Outil de sauvegarde &agrave;&nbsp;destination des diff&eacute;rents services du MI. Accompagnement sur la solution assur&eacute;e par le SGAMI Ouest</td>
</tr>
</tbody>
</table>
<h3>
<a name="EXIN"> Chapitre 4 : Industrialisation - [ IN ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_nonopen">EX-1391</td><td class="inc_nonopen">HPOO</td><td class="inc_nonopen">HP</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">OO = Operation Orchestrator. Portail d'orchestration pour la creation automatis&eacute;e de VM.</td>
</tr>
<tr>
<td class="maj_nonopen">EX-1117</td><td class="maj_nonopen">Visual TOM (VTOM)</td><td class="maj_nonopen">Absyss</td><td>6.3.3m</td><td class="statut_R">R</td><td></td><td class="comm_italic">Ordonnanceur (Scheduler)- Contexte d'emploi h&eacute;bergement DNUM</td>
</tr>
</tbody>
</table>
<h3>
<a name="EXSU"> Chapitre 5 : Supervision - [ SU ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_nonopen">EX-1360</td><td class="inc_nonopen">Proactivenet</td><td class="inc_nonopen">BMC Software</td><td>8.6.4</td><td class="statut_A">A</td><td></td><td class="comm_italic">Hypervision des datacenters.</td>
</tr>
<tr>
<td class="inc_open">EX-1568</td><td class="inc_open">PROMETHEUS</td><td class="inc_open">Prometheus.io</td><td>Version SILL</td><td class="statut_R">R</td><td>Non</td><td class="comm_italic">Inscrit au SILL. Outil de supervision des infrastructures et des composants, de surveillance informatique et de g&eacute;n&eacute;ration d&rsquo;alertes. Solution Cloud native. En alternative a KIBANA / ELASTICSEARCH.</td>
</tr>
<tr>
<td class="new_nonopen">EX-1621</td><td class="new_nonopen">Veeam ONE</td><td class="new_nonopen">veeam.com</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">
Outil de supervision et de reporting des architectures de sauvegardes &agrave;&nbsp; destination des diff&eacute;rents services du MI. Accompagnement sur la solution assur&eacute; par le SGAMI Ouest.


</td>
</tr>
<tr>
<td class="inc_open">EX-1572</td><td class="inc_open">ZABBIX</td><td class="inc_open">www.zabbix.com</td><td></td><td class="statut_R">R</td><td>Non</td><td class="comm_italic">Outil de supervision mis en œuvre dans les environnements Cloud du Minist&egrave;re de l&rsquo;Int&eacute;rieur pour superviser les infrastructures r&eacute;seau, en compl&eacute;ment de Centreon/Prometheus.</td>
</tr>
<tr>
<td class="inc_open">EX-1123</td><td class="inc_open">Nagios</td><td class="inc_open">nagios.org</td><td>3.5</td><td class="statut_M">M</td><td>Oui</td><td class="comm_italic">Supervision infrastructure &ndash; Remplac&eacute; par Centreon Engine</td>
</tr>
<tr>
<td class="inc_open">EX-1285</td><td class="inc_open">Centreon</td><td class="inc_open">Centreon</td><td>2.3.x</td><td class="statut_M">M</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Solution de supervision bas&eacute;e sur Nagios. La nouvelle version de Centreon (Engine) remplace le moteur nagios.</td>
</tr>
<tr>
<td class="inc_open">EX-1287</td><td class="inc_open">Fully Automated Nagios</td><td class="inc_open">sourceforge</td><td>2.1</td><td class="statut_M">M</td><td>Oui</td><td class="comm_italic">Solution packag&eacute;e sur une base Nagios pour la supervision des LAN en datacenters zonaux.<br/>Produits contenus:<br/>- Nagios 3.2.3<br/>- Centreon 2.1.13<br/>- NagVis 1.58<br/>- Nagios Plugins 1.4.15</td>
</tr>
<tr>
<td class="inc_open">EX-1489</td><td class="inc_open">Centreon (Engine, Broker,Web)</td><td class="inc_open">centreon.com</td><td>&gt; = 2.8</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Plateforme de supervision (remplacement de Nagios)</td>
</tr>
<tr>
<td class="inc_nonopen">EX-1124</td><td class="inc_nonopen">ITSM (Information Technology Service Management)</td><td class="inc_nonopen">BMC Software</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Gestion de service ITIL</td>
</tr>
<tr>
<td class="maj_open">EX-1406</td><td class="maj_open">itop</td><td class="maj_open">Combodo</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Gestion de service ITIL - P&eacute;rim&egrave;tre restreint &agrave; l&rsquo;ANFSI et &agrave; la DTNUM</td>
</tr>
<tr>
<td class="inc_open">EX-1120</td><td class="inc_open">Cacti</td><td class="inc_open">Cacti.net</td><td></td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Logiciel libre de mesure de performances r&eacute;seau et serveur</td>
</tr>
<tr>
<td class="inc_open">EX-1415</td><td class="inc_open">puppet</td><td class="inc_open">PuppetLabs</td><td>3.5</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Outil de gestion de configuration</td>
</tr>
<tr>
<td class="inc_open">EX-1533</td><td class="inc_open">Ansible</td><td class="inc_open">Ansible.com</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Outil de gestion de configuration</td>
</tr>
<tr>
<td class="inc_open">EX-1290</td><td class="inc_open">TELEMETROBOX</td><td class="inc_open">MIOMCTI</td><td></td><td class="statut_M">M</td><td>Oui</td><td class="comm_italic">Solution de supervision des r&eacute;seaux dans les services zonaux (d&eacute;veloppement SZSIC Rennes)</td>
</tr>
<tr>
<td class="inc_open">EX-1492</td><td class="inc_open">Telemetrobox-ng</td><td class="inc_open">MI &ndash; SGAMI Ouest</td><td>7</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Sonde de supervision</td>
</tr>
<tr>
<td class="inc_nonopen">EX-1490</td><td class="inc_nonopen">IMC &ndash; PLAT </td><td class="inc_nonopen">HPE</td><td>7.1</td><td class="statut_R">R</td><td></td><td class="comm_italic">Plateforme IMC de HPE (Intelligent Management Center) </td>
</tr>
<tr>
<td class="inc_nonopen">EX-1491</td><td class="inc_nonopen">SteelCentral AppResponse (Sonde riverbed)</td><td class="inc_nonopen">Riverbed</td><td>9.5.x</td><td class="statut_R">R</td><td></td><td class="comm_italic">Sonde APM (gestion de performance applicative)</td>
</tr>
</tbody>
</table>
<h3>
<a name="EXJT"> Chapitre 6 : Journalisation technique - [ JT ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">EX-1125</td><td class="inc_open">
Apache Log4j</td><td class="inc_open">Apache Software Foundation</td><td>2</td><td class="statut_R">R</td><td></td><td class="comm_italic">Framework de logging pour java</td>
</tr>
</tbody>
</table>
<h3>
<a name="EXVR"> Chapitre 7 : Virtualisation - [ VR ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_nonopen">EX-1551</td><td class="inc_nonopen">Hyper-V</td><td class="inc_nonopen">Microsoft</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Restriction aux serveurs d'applications bureautiques et locales</td>
</tr>
<tr>
<td class="maj_open">EX-1561</td><td class="maj_open">Kubernetes</td><td class="maj_open">CNCF (Cloud Native Computing Foundation)</td><td>Version SILL</td><td class="statut_R">R</td><td>Non</td><td class="comm_italic">Inscrit au SILL. Kubernetes est la principale plateforme d&rsquo;orchestration de conteneurs du march&eacute;. Elle est int&eacute;gr&eacute;e dans l&rsquo;offre Cloud Pi Native propos&eacute;e au MIOM.</td>
</tr>
<tr>
<td class="inc_open">EX-1132</td><td class="inc_open">KVM</td><td class="inc_open"></td><td>Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Utilisation de la version native de la distribution Linux</td>
</tr>
<tr>
<td class="inc_nonopen">EX-1506</td><td class="inc_nonopen">Vmware Vsphere</td><td class="inc_nonopen">Vmware</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Environnement d&rsquo;ex&eacute;cution de machine virtuelle &ndash; Pour une primoinstallation, utiliser la derni&egrave;re version stable de l&rsquo;&eacute;diteur.</td>
</tr>
<tr>
<td class="inc_nonopen">EX-1421</td><td class="inc_nonopen">Vmware vCenter Server</td><td class="inc_nonopen">VMware</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Gestion centralis&eacute;e de la supervision</td>
</tr>
<tr>
<td class="inc_open">EX-1529</td><td class="inc_open">Openstack</td><td class="inc_open">openstack.org</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Plateforme ouverte de cloud computing.</td>
</tr>
<tr>
<td class="maj_open">EX-1540</td><td class="maj_open">Docker</td><td class="maj_open">docker.com</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Plateforme de conteneurisation.</td>
</tr>
</tbody>
</table>
<h3>
<a name="EXST"> Chapitre 8 : Stockage - [ ST ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">EX-1571</td><td class="inc_open">CEPH</td><td class="inc_open">ceph.io</td><td>Version SILL</td><td class="statut_R">R</td><td>Non</td><td class="comm_italic">Solution de stockage distribu&eacute; impl&eacute;ment&eacute; dans les environnements Cloud du Minist&egrave;re de l&rsquo;Int&eacute;rieur. Il propose trois protocoles : Bloc, Fichiers &amp; Objet (S3).</td>
</tr>
<tr>
<td class="inc_open">EX-1570</td><td class="inc_open">STARWIND VIRTUAL SAN</td><td class="inc_open">www.starwindsoftware.com</td><td></td><td class="statut_R">R</td><td>Non</td><td class="comm_italic">Outil de stockage de machines virtuelles. Il cr&eacute;e un pool de stockage a faible co&ucirc;t. Il pallie le besoin de SAN ou de NAS. Il est compl&egrave;tement int&eacute;gr&eacute; &agrave; l&rsquo;hyperviseur.
</td>
</tr>
</tbody>
</table>
<hr>
<h2>
<a name="AT"> Partie 2 : Architecture Technique - [ AT ]</a>
</h2>
<p class="comm_italic">Pour les logiciels pris en charge au march&eacute; de support logiciels libres, il est indiqu&eacute; "Oui" dans la colonne "Supp. LL"</p>
<hr>
<h3>
<a name="ATMA"> Chapitre 1 : Mod&egrave;les d'architecture - [ MA ]</a>
</h3>
<p class="comm_italic"></p>
<h3>
<a name="ATLS"> Chapitre 2 : Logiciels Syst&egrave;mes - [ LS ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">AT-1368</td><td class="inc_open">CentOS</td><td class="inc_open">CentOS</td><td>6</td><td class="statut_M">M</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Distribution utilis&eacute;e (tiers 2 ou tiers 3) en l'absence de n&eacute;cessit&eacute; de certification pour le projet. Non utilis&eacute; en s&eacute;curit&eacute; int&eacute;rieure.</td>
</tr>
<tr>
<td class="inc_open">AT-1410</td><td class="inc_open">CentOS</td><td class="inc_open">CentOS</td><td>7</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Distribution utilis&eacute;e (tiers 2 ou tiers 3) en l'absence de n&eacute;cessit&eacute; de certification pour le projet. <br/>Non utilis&eacute; en s&eacute;curit&eacute; int&eacute;rieure.</td>
</tr>
<tr>
<td class="inc_open">AT-1409</td><td class="inc_open">Debian GNU Linux</td><td class="inc_open">debian.org</td><td>Version &laquo;&nbsp;stable&nbsp;&raquo; de l&rsquo;&eacute;diteur</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. L&rsquo;&eacute;diteur recommande d&rsquo;utiliser pour la production sa distribution dite &laquo;&nbsp;stable&nbsp;&raquo;.  Le CCT s&rsquo;aligne sur cette recommandation. Les mises &agrave; jours de la distribution stable (num&eacute;ro de version mineur) se limitent &agrave; des correctifs de s&eacute;curit&eacute;. <br/>Le CCT conseille la migration des serveurs utilisant la distribution &laquo;&nbsp;Oldstable&nbsp;&raquo; (N-1).<br/>Cf https://www.debian.org/releases/index.fr.html</td>
</tr>
<tr>
<td class="inc_nonopen">AT-1380</td><td class="inc_nonopen">UNIX AIX</td><td class="inc_nonopen">BULL</td><td></td><td class="statut_M">M</td><td></td><td class="comm_italic">DTNUM : Contexte d'emploi limit&eacute; au tiers 3</td>
</tr>
<tr>
<td class="inc_nonopen">AT-1457</td><td class="inc_nonopen">Unix AIX</td><td class="inc_nonopen">BULL</td><td>7.2</td><td class="statut_R">R</td><td></td><td class="comm_italic">Usage restreint aux serveurs BULL Escala &agrave; base de processeurs Power8 dans un premier temps.</td>
</tr>
<tr>
<td class="inc_nonopen">AT-1507</td><td class="inc_nonopen">UNIX Solaris</td><td class="inc_nonopen">Oracle</td><td>Solaris 11</td><td class="statut_A">A</td><td></td><td class="comm_italic">Contexte d'emploi limit&eacute; au tiers 3 (IPMS GN) et uniquement pour les bases de donn&eacute;es Oracle.</td>
</tr>
<tr>
<td class="inc_open">AT-1137</td><td class="inc_open">Red Hat Enterprise Linux</td><td class="inc_open">Red Hat</td><td>RHEL 5</td><td class="statut_A">A</td><td></td><td class="comm_italic">Hors p&eacute;rim&egrave;tre datacentres de la S&eacute;curit&eacute; Int&eacute;rieure.</td>
</tr>
<tr>
<td class="inc_open">AT-1364</td><td class="inc_open">Red Hat Enterprise Linux</td><td class="inc_open">Red Hat</td><td>RHEL 6</td><td class="statut_A">A</td><td></td><td class="comm_italic">Hors p&eacute;rim&egrave;tre datacentres de la S&eacute;curit&eacute; Int&eacute;rieure.</td>
</tr>
<tr>
<td class="inc_open">AT-1411</td><td class="inc_open">Red Hat Enterprise Linux</td><td class="inc_open">Red Hat</td><td>RHEL 7</td><td class="statut_A">A</td><td></td><td class="comm_italic">Hors p&eacute;rim&egrave;tre datacentres de la S&eacute;curit&eacute; Int&eacute;rieure.</td>
</tr>
<tr>
<td class="inc_open">AT-1508</td><td class="inc_open">SUSE Linux Enterprise Server</td><td class="inc_open">Suse.com</td><td>12 SP1</td><td class="statut_A">A</td><td></td><td class="comm_italic">P&eacute;rim&egrave;tre ANFSI, OS r&eacute;serv&eacute; pour les applications n&eacute;cessitant une distribution Linux support&eacute;e.</td>
</tr>
<tr>
<td class="inc_nonopen">AT-1146</td><td class="inc_nonopen">Windows Server</td><td class="inc_nonopen">Microsoft</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic"></td>
</tr>
</tbody>
</table>
<h3>
<a name="ATT1"> Chapitre 3 : Tiers Pr&eacute;sentation - [ T1 ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">AT-1148</td><td class="inc_open">Apache</td><td class="inc_open">Apache Software Foundation</td><td>2.2</td><td class="statut_M">M</td><td>Oui</td><td class="comm_italic"></td>
</tr>
<tr>
<td class="inc_open">AT-1412</td><td class="inc_open">Apache</td><td class="inc_open">Apache Software Foundation</td><td>2.4</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic"></td>
</tr>
<tr>
<td class="inc_open">AT-1379</td><td class="inc_open">Nginx</td><td class="inc_open">nginx.org</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Version native de la distribution concern&eacute;e.<br/>Frontal web pour des cas d'usage limitatifs :<br/>- ANFSI : serveur web &agrave; forte charge ponctuelle<br/>- DTNUM : reverse proxy pour sites ouverts sur Internet</td>
</tr>
</tbody>
</table>
<h3>
<a name="ATT2"> Chapitre 4 : Tiers application/m&eacute;tier - [ T2 ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">AT-1484</td><td class="inc_open">Tomcat</td><td class="inc_open">Apache Software Foundation</td><td>7</td><td class="statut_M">M</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Serveur d'application Java EE, conteneur de servlet. La version 4 de tomcat supporte les versions de java &gt;=6. La version native de la distribution est &agrave; privil&eacute;gier.</td>
</tr>
<tr>
<td class="inc_open">AT-1485</td><td class="inc_open">Tomcat</td><td class="inc_open">Apache Software Foundation</td><td>8</td><td class="statut_M">M</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Serveur d'application JavaEE, conteneur de servlet. Version incluse &agrave; la version 9 de la distribution Debian.</td>
</tr>
<tr>
<td class="inc_open">AT-1486</td><td class="inc_open">Tomcat</td><td class="inc_open">Apache Software Foundation</td><td>9 &ndash; Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Serveur d'application JavaEE, conteneur de servlet. Version incluse &agrave; la version 9 de la distribution Debian. Supporte Java 8 ou plus.</td>
</tr>
<tr>
<td class="inc_open">AT-1448</td><td class="inc_open">Wildfly (Jboss AS)</td><td class="inc_open">RedHat</td><td></td><td class="statut_A">A</td><td>Oui</td><td class="comm_italic">Wildfly (anciennement Jboss AS (Application Server)) est la version communautaire de Jboss EAP (Enterprise Application Platform). C&rsquo;est un framework Java EE complet qui peut &ecirc;tre utilis&eacute;, sur autorisation, par exemple pour des parties de la sp&eacute;cification java EE non couverte par Tomcat.</td>
</tr>
<tr>
<td class="inc_nonopen">AT-1424</td><td class="inc_nonopen">Weblogic</td><td class="inc_nonopen">Oracle</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Serveur d'application java EE et java SE</td>
</tr>
<tr>
<td class="inc_open">AT-1447</td><td class="inc_open">JOnAS</td><td class="inc_open">OW2</td><td>5</td><td class="statut_M">M</td><td>Oui</td><td class="comm_italic"></td>
</tr>
<tr>
<td class="inc_open">AT-1156</td><td class="inc_open">Jetty</td><td class="inc_open">Fondation Eclipse</td><td></td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Serveur HTTP et moteur de servlet java</td>
</tr>
<tr>
<td class="inc_open">AT-1339</td><td class="inc_open">CXF</td><td class="inc_open">Apache Software Foundation</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Framework java de d&eacute;veloppement de services WEB. A utiliser pour les Webservices SOAP (inter-applicatif)</td>
</tr>
<tr>
<td class="inc_open">AT-1338</td><td class="inc_open">mod_proxy</td><td class="inc_open">Apache software Foundation</td><td></td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Serveur mandataire - passerelle multi-protocoleUtilisation de la version nativement incluse dans la distribution linux concern&eacute;e.</td>
</tr>
<tr>
<td class="inc_open">AT-1159</td><td class="inc_open">Axis 2</td><td class="inc_open">Apache Software Foundation</td><td>1.x</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Framework de d&eacute;veloppement de service web. A utiliser pour les services web SOAP (inter-applicatifs)</td>
</tr>
<tr>
<td class="inc_open">AT-1153</td><td class="inc_open">mod_jk (connecteur AJP13)</td><td class="inc_open">Apache Software Foundation</td><td></td><td class="statut_A">A</td><td>Oui</td><td class="comm_italic">
Mod_jk est un module Apache qui g&egrave;re la communication et la r&eacute;partition de charge entre les serveurs Apache et Tomcat. Utilisation sur d&eacute;rogation. Le projet devra fournir le composant et ses d&eacute;pendances au format "rpm" s'il doit &ecirc;tre install&eacute; sur CentOS ou RedHat. Si la d&eacute;rogation porte sur une distribution Debian, utiliser le paquet nativement disponible sous cette distribution.</td>
</tr>
<tr>
<td class="inc_nonopen">AT-1423</td><td class="inc_nonopen">Tuxedo</td><td class="inc_nonopen">Oracle</td><td>12c</td><td class="statut_A">A</td><td></td><td class="comm_italic">Serveur transactionnel. Transaction for UniX, Extended for Distributed Operation.</td>
</tr>
<tr>
<td class="inc_open">AT-1434</td><td class="inc_open">PHP FPM</td><td class="inc_open"></td><td>Version distrib</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. P&eacute;rim&egrave;tre restreint &agrave; l&rsquo;ANFSI. Version de la distribution.Module d'interface SAPI pour l'int&eacute;gration de PHP sur un serveur web</td>
</tr>
<tr>
<td class="inc_nonopen">AT-1435</td><td class="inc_nonopen">Zend Server</td><td class="inc_nonopen">Zend</td><td>5</td><td class="statut_M">M</td><td></td><td class="comm_italic">P&eacute;rim&egrave;tre restreint &agrave;&rsquo; l&rsquo;ANFSI</td>
</tr>
<tr>
<td class="inc_open">AT-1453</td><td class="inc_open">Node.js</td><td class="inc_open">Nodejs.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL.Serveur d'application et serveur web en javascript, reposant sur la machine virtuelle javascript V8.</td>
</tr>
<tr>
<td class="inc_open">AT-1555</td><td class="inc_open">Npm</td><td class="inc_open">Nodejs.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Gestionnaire de paquet pour Node.JS</td>
</tr>
</tbody>
</table>
<h3>
<a name="ATIN"> Chapitre 5 : Intergiciel - [ IN ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="new_open">AT-1618</td><td class="new_open">Talaxie</td><td class="new_open">delink</td><td>8.x</td><td class="statut_O">O</td><td></td><td class="comm_italic">Fork de la solution Talend OpenStudio car depuis f&eacute;vrier 2024, aucun support communautaire n&rsquo;est disponible. Le produit Talend OpenStudio est utilisable mais n&rsquo;&eacute;volue plus (&eacute;volution et s&eacute;curit&eacute;)

https://deilink.fr/#/download

</td>
</tr>
<tr>
<td class="inc_open">AT-1514</td><td class="inc_open">Talend Data Integration (ETL)</td><td class="inc_open">Talend</td><td>6</td><td class="statut_A">A</td><td></td><td class="comm_italic">Version soumise &agrave; souscription. </td>
</tr>
<tr>
<td class="inc_open">AT-1516</td><td class="inc_open">Talend Application Integration (ESB)</td><td class="inc_open">Talend</td><td>6</td><td class="statut_A">A</td><td></td><td class="comm_italic">Version soumise &agrave; souscription. Version communautaire&nbsp;: Talend Open Studio for ESB</td>
</tr>
<tr>
<td class="inc_nonopen">AT-1305</td><td class="inc_nonopen">Axway Transfer CFT</td><td class="inc_nonopen">AXWAY</td><td>3</td><td class="statut_A">A</td><td></td><td class="comm_italic">Transfert de fichiers</td>
</tr>
<tr>
<td class="inc_nonopen">AT-1249</td><td class="inc_nonopen">TM1</td><td class="inc_nonopen">IBM</td><td></td><td class="statut_M">M</td><td></td><td class="comm_italic">
D&eacute;claration d&rsquo;activit&eacute;. Outil d&eacute;cisionnel (p&eacute;rim&egrave;tre Pr&eacute;fecture de Police)</td>
</tr>
<tr>
<td class="inc_nonopen">AT-1000</td><td class="inc_nonopen">Bus de service TIBCO</td><td class="inc_nonopen">TiBCO Software</td><td>6.x</td><td class="statut_A">A</td><td></td><td class="comm_italic">Int&eacute;gration d'application via une fonction de bus de service (ESB). Les produits TIBCO sont mis en œuvre dans l&rsquo;offre de service INES, ainsi que la plate forme en cours de retrait SE DSIC.</td>
</tr>
<tr>
<td class="inc_nonopen">AT-1014</td><td class="inc_nonopen">Axway Gateway</td><td class="inc_nonopen">AXWAY</td><td>6</td><td class="statut_A">A</td><td></td><td class="comm_italic">Transfert de fichiers multi protocoles. Produit mis en œuvre dans l&rsquo;offre de service INES dans la brique SAS.</td>
</tr>
<tr>
<td class="inc_nonopen">AT-1529</td><td class="inc_nonopen">Axway API Gateway</td><td class="inc_nonopen">AXWAY</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Produit d&rsquo;API management, int&eacute;gr&eacute; &agrave; la plateforme d&rsquo;&eacute;change INES</td>
</tr>
</tbody>
</table>
<h3>
<a name="ATT3"> Chapitre 6 : Tiers Donn&eacute;es - [ T3 ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">AT-1541</td><td class="inc_open">PostgreSQL</td><td class="inc_open">PostgreSQL.org</td><td></td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Crit&egrave;re de choix de la version&nbsp;: <br/>- version par d&eacute;faut de la version de l&rsquo;OS (exemple, PostGreSQL v11 pour debian v10)<br/>- politique de l&rsquo;&eacute;diteur&nbsp;:  https://www.postgresql.org/support/versioning/<br/>Pr&eacute;f&eacute;rer les offres de service interne&nbsp;: notamment offre PostGreSQL-HA (r&eacute;siliente) de la DTNUM pour le cloud PI, bas&eacute;e sur PgPoolLa documentation MI associ&eacute;e se trouve sur le git&nbsp;: https://gitlab.forge-dc.cloudmi.minint.fr/communautes/bdd/sgbd-postgresql-ha
</td>
</tr>
<tr>
<td class="inc_open">AT-1358</td><td class="inc_open">Pgpool</td><td class="inc_open">pgpool.net</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Fournit des services de pooling de connexion,  de r&eacute;partition de charge sur plusieurs serveurs postgreSQL de type Master/Slave, de gestion de la haute disponibilit&eacute; de postgreSQL, de recovery (reconstruction automatique d&rsquo;un nœud postgreSQL apr&egrave;s un crash), de supervision de postgreSQL. <br/>Pr&eacute;f&eacute;rer les offres de service interne : notamment offre PostGreSQL-HA (r&eacute;siliente) de la DTNUM pour le cloud PI.</td>
</tr>
<tr>
<td class="inc_open">AT-1536</td><td class="inc_open">SQLite</td><td class="inc_open">SQLite.org</td><td>3.x</td><td class="statut_R">R</td><td></td><td class="comm_italic">Base de donn&eacute;e embarqu&eacute;e&nbsp;: biblioth&egrave;que &eacute;crite en C proposant un moteur de base de donn&eacute;es relationnelle accessible en langage SQL.</td>
</tr>
<tr>
<td class="inc_open">AT-1413</td><td class="inc_open">MariaDB</td><td class="inc_open">MariaDB Foundation</td><td>Version SILL</td><td class="statut_A">A</td><td></td><td class="comm_italic">Inscrit au SILL. </td>
</tr>
<tr>
<td class="inc_open">AT-1472</td><td class="inc_open">MySQL</td><td class="inc_open">Oracle</td><td>&lt;5.5</td><td class="statut_M">M</td><td>Oui</td><td class="comm_italic">Privil&eacute;gier l&rsquo;usage de PostgreSQL ou &agrave; d&eacute;faut MariaDB</td>
</tr>
<tr>
<td class="inc_open">AT-1473</td><td class="inc_open">MySQL</td><td class="inc_open">Oracle</td><td>&gt;5.5</td><td class="statut_A">A</td><td>Oui</td><td class="comm_italic">Privil&eacute;gier l&rsquo;usage de PostgreSQL ou &agrave; d&eacute;faut MariaDB</td>
</tr>
<tr>
<td class="inc_open">AT-1502</td><td class="inc_open">PostGIS</td><td class="inc_open">Postgis.org</td><td>Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Module spatial pour PostgreSQL</td>
</tr>
<tr>
<td class="inc_nonopen">AT-1475</td><td class="inc_nonopen">Oracle</td><td class="inc_nonopen">Oracle</td><td>&lt;12</td><td class="statut_M">M</td><td></td><td class="comm_italic"></td>
</tr>
<tr>
<td class="inc_nonopen">AT-1474</td><td class="inc_nonopen">Oracle</td><td class="inc_nonopen">Oracle</td><td>12</td><td class="statut_A">A</td><td></td><td class="comm_italic"></td>
</tr>
<tr>
<td class="inc_open">AT-1505</td><td class="inc_open">MongoDB</td><td class="inc_open">MongoDB.com</td><td>Version SILL </td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Base de la famille NoSQL. Syst&egrave;me de gestion de base de donn&eacute;e orient&eacute;e document et ais&eacute;ment parall&eacute;lisable.</td>
</tr>
<tr>
<td class="inc_open">AT-1532</td><td class="inc_open">Redis</td><td class="inc_open">RedisLabs.com</td><td></td><td class="statut_A">A</td><td>Non</td><td class="comm_italic">Base de la famille NoSQL. InMemory (toutes les donn&eacute;es sont stock&eacute;e en RAM). syst&egrave;me de gestion de base de donn&eacute;es clef-valeur scalable. Fonction de broker de message.</td>
</tr>
<tr>
<td class="inc_open">AT-1534</td><td class="inc_open">Cassandra</td><td class="inc_open">Cassandra.apache.org</td><td></td><td class="statut_A">A</td><td>Non</td><td class="comm_italic">Base de la famille NoSQL, con&ccedil;ue pour g&eacute;rer des quantit&eacute;s massives de donn&eacute;es sur un grand nombre de serveurs. Usage restreint &agrave; l&rsquo;ANFSI</td>
</tr>
<tr>
<td class="inc_open">AT-1535</td><td class="inc_open">OrientDB</td><td class="inc_open">OrientDB.com</td><td></td><td class="statut_A">A</td><td>Non</td><td class="comm_italic">Base de la famille NoSQL, multi-mod&egrave;le&nbsp;: graphe, document, cl&eacute;/valeur, objet. Usage restreint &agrave; l&rsquo;ANFSI</td>
</tr>
<tr>
<td class="inc_nonopen">AT-1548</td><td class="inc_nonopen">Vertica</td><td class="inc_nonopen">HPE (Hewlett Packard Enterprise)</td><td></td><td class="statut_A">A</td><td>Non</td><td class="comm_italic">Base de donn&eacute;e analytique, orient&eacute;e colonne. Datamining sur donn&eacute;es de masse (100 millions &agrave; 1 milliard).</td>
</tr>
</tbody>
</table>
<h3>
<a name="ATT0"> Chapitre 7 : Client WEB (pr&eacute;sentation et donn&eacute;es) - [ T0 ]</a>
</h3>
<p class="comm_italic">Les produits list&eacute;s dans ce chapitre d&eacute;notent l&rsquo;&eacute;volution des technologies et de l&rsquo;&eacute;tat de l&rsquo;art vers un r&eacute;enrichissement de la couche client. Avec en particulier toutes les possibilit&eacute;s offertes HTML 5, CSS 3 et javascript. La conception adaptative des interfaces (&laquo;&nbsp;responsive design) est obligatoire.</p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">AT-1441</td><td class="inc_open">Bootstrap</td><td class="inc_open">Twitter</td><td>4</td><td class="statut_R">R</td><td></td><td class="comm_italic">Framework d'interface HTML/CSS/javascript.</td>
</tr>
<tr>
<td class="inc_open">AT-1444</td><td class="inc_open">Leaflet</td><td class="inc_open">leafletjs.com</td><td>I.x</td><td class="statut_R">R</td><td></td><td class="comm_italic">Biblioth&egrave;que javascript pour cartes interactives. Recommand&eacute;e pour la pr&eacute;sentation de cartes, notamment dans les applications mobiles.</td>
</tr>
<tr>
<td class="inc_open">AT-1438</td><td class="inc_open">AngularJS</td><td class="inc_open">Google</td><td>1.4</td><td class="statut_R">R</td><td></td><td class="comm_italic">Biblioth&egrave;que Javascript</td>
</tr>
<tr>
<td class="inc_open">AT-1439</td><td class="inc_open">AngularJS</td><td class="inc_open">Google</td><td>8</td><td class="statut_A">A</td><td></td><td class="comm_italic">AngularJS V2 &eacute;tant une compl&egrave;te r&eacute;&eacute;criture par rapport &agrave; la premi&egrave;re version, l&rsquo;ANFSI a d&eacute;cid&eacute; de le remplacer par la biblioth&egrave;que ReactJS.</td>
</tr>
<tr>
<td class="inc_open">AT-1537</td><td class="inc_open">ReactJS</td><td class="inc_open">Facebook</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Biblioth&egrave;que Javascript &ndash; Alternative &agrave; AngularJS V2</td>
</tr>
<tr>
<td class="inc_open">AT-1544</td><td class="inc_open">Redux</td><td class="inc_open">Redux.js.org</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Conteneur d&rsquo;&eacute;tat pour les applications javascript &ndash; Souvent utilis&eacute; en association avec ReactJS.</td>
</tr>
<tr>
<td class="maj_open">AT-1550</td><td class="maj_open">VueJS</td><td class="maj_open">VueJS.org</td><td></td><td class="statut_R">R</td><td>Non</td><td class="comm_italic">Biblioth&egrave;que Javascript &ndash; Alternative &agrave; AngularJS et ReactJS.Inscrit au SILL</td>
</tr>
<tr>
<td class="inc_open">AT-1442</td><td class="inc_open">OpenLayers</td><td class="inc_open">OpenLayers.org</td><td>2.13</td><td class="statut_M">M</td><td></td><td class="comm_italic">Bilioth&egrave;que javascript pour les applications cartographiques.</td>
</tr>
<tr>
<td class="inc_open">AT-1443</td><td class="inc_open">OpenLayers</td><td class="inc_open">OpenLayers.org</td><td>3</td><td class="statut_R">R</td><td></td><td class="comm_italic">Bilioth&egrave;que javascript pour les applications cartographiques.</td>
</tr>
<tr>
<td class="maj_open">AT-1361</td><td class="maj_open">JQuery</td><td class="maj_open">Jquery.com</td><td>1.X</td><td class="statut_M">M</td><td></td><td class="comm_italic">Framework/librairie Javascript. Licence MIT</td>
</tr>
<tr>
<td class="maj_open">AT-1440</td><td class="maj_open">Jquery</td><td class="maj_open">Jquery.com</td><td>2.X</td><td class="statut_M">M</td><td></td><td class="comm_italic">Framework/librairie Javascript. Licence MIT</td>
</tr>
</tbody>
</table>
<hr>
<h2>
<a name="RT"> Partie 3 : R&eacute;seau de transport - [ RT ]</a>
</h2>
<p class="comm_italic">Note importante :Conform&eacute;ment &agrave; la circulaire interminist&eacute;rielle NOR : INDI1127026C du 08/12/2011, les cahiers des charges des march&eacute;s publics r&eacute;dig&eacute;s dans le cadre de projets informatiques relevant du protocole IP au profit du minist&egrave;re de l'int&eacute;rieur  doivent int&eacute;grer l'obligation de compatibilit&eacute; avec le protocole IpV6.</p>
<hr>
<h3>
<a name="RTSV"> Chapitre 1 : Services - [ SV ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">RT-1085</td><td class="inc_open">Squid</td><td class="inc_open"></td><td>Version distrib</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. </td>
</tr>
</tbody>
</table>
<h3>
<a name="RTPF"> Chapitre 2 : Performances - [ PF ]</a>
</h3>
<p class="comm_italic"></p>
<h3>
<a name="RTTO"> Chapitre 3 : Topologie - [ TO ]</a>
</h3>
<p class="comm_italic"></p>
<h3>
<a name="RTSI"> Chapitre 4 : S&eacute;curit&eacute; - [ SI ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_nonopen">RT-1580</td><td class="inc_nonopen">VPN TheGreenBow</td><td class="inc_nonopen">TheGreenBow</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">VPN. Sous licence.</td>
</tr>
<tr>
<td class="inc_open">RT-1086</td><td class="inc_open">FreeRADIUS</td><td class="inc_open">Freeradius</td><td>Version distrib</td><td class="statut_R">R</td><td></td><td class="comm_italic">Version distribution Debian</td>
</tr>
<tr>
<td class="inc_open">RT-1090</td><td class="inc_open">OPENVPN</td><td class="inc_open"></td><td>Version distrib</td><td class="statut_A">A</td><td></td><td class="comm_italic">Version distribution Debian</td>
</tr>
<tr>
<td class="inc_open">RT-1091</td><td class="inc_open">strongSwan</td><td class="inc_open">strongswan.org</td><td>Version distrib</td><td class="statut_A">A</td><td></td><td class="comm_italic">VPN IPsec - Version distribution Debian</td>
</tr>
<tr>
<td class="inc_open">RT-1087</td><td class="inc_open">RANCID</td><td class="inc_open">shrubbery.net</td><td>3</td><td class="statut_A">A</td><td></td><td class="comm_italic">Gestion des configurations des routeurs. (Really Awesome New Cisco confIg Differ). Rancid est bas&eacute; sur cvs (gestion de version).
</td>
</tr>
</tbody>
</table>
<h3>
<a name="RTRL"> Chapitre 5 : R&eacute;seau local - [ RL ]</a>
</h3>
<p class="comm_italic"></p>
<h3>
<a name="RTVR"> Chapitre 6 : Virtualisation - [ VR ]</a>
</h3>
<p class="comm_italic"></p>
<hr>
<h2>
<a name="SI"> Partie 4 : S&eacute;curit&eacute; &amp; interop&eacute;rabilit&eacute; - [ SI ]</a>
</h2>
<p class="comm_italic">Pour les logiciels pris en charge au march&eacute; de support logiciels libres, il est indiqu&eacute; "Oui" dans la colonne "Supp. LL"</p>
<hr>
<h3>
<a name="SIAP"> Chapitre 1 : Appliance - [ AP ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">SI-1291</td><td class="inc_open">Apache mod_security</td><td class="inc_open">Apache Software Foundation</td><td></td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Filtrage des flux HTTP et HTTPS et correction des URL mal form&eacute;s.</td>
</tr>
<tr>
<td class="inc_open">SI-1301</td><td class="inc_open">DansGuardian</td><td class="inc_open">dansguardian.org</td><td>2.x</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Filtrage de contenu</td>
</tr>
</tbody>
</table>
<h3>
<a name="SIAV"> Chapitre 2 : Antivirus - [ AV ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">SI-1028</td><td class="inc_open">ClamAV</td><td class="inc_open">clamav.net</td><td>Version distrib</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Pour OS Linux / Unix. </td>
</tr>
<tr>
<td class="inc_nonopen">SI-1398</td><td class="inc_nonopen">ePolicy Orchestrator Agent</td><td class="inc_nonopen">McAfee</td><td>5.1</td><td class="statut_R">R</td><td></td><td class="comm_italic">Logiciel de distribution et de mise &agrave; jour de l'antivirus (infrastructure nationale)</td>
</tr>
<tr>
<td class="inc_nonopen">SI-1399</td><td class="inc_nonopen">Server Security - Linux</td><td class="inc_nonopen">SOPHOS</td><td>9.6</td><td class="statut_R">R</td><td></td><td class="comm_italic">Anti-virus serveur linux</td>
</tr>
<tr>
<td class="inc_nonopen">SI-1400</td><td class="inc_nonopen">Server Security - Windows</td><td class="inc_nonopen">SOPHOS</td><td>10.3</td><td class="statut_R">R</td><td></td><td class="comm_italic">Antivirus serveur Windows</td>
</tr>
<tr>
<td class="inc_nonopen">SI-1430</td><td class="inc_nonopen">VirusScan &ndash; Linux</td><td class="inc_nonopen">McAfee</td><td>2.0.2</td><td class="statut_R">R</td><td></td><td class="comm_italic">Pour poste de travail Linux - 64 bits uniquement</td>
</tr>
</tbody>
</table>
<h3>
<a name="SICH"> Chapitre 3 : Chiffrement - [ CH ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">SI-1347</td><td class="inc_open">Keepass</td><td class="inc_open">Dominique Reichl</td><td>2.10</td><td class="statut_A">A</td><td></td><td class="comm_italic">Inscrit au SILL. Version 2.10 test&eacute;e et valid&eacute;e par l'ANSSI - GNU v2.Arbitrage SHFD et ANSSI attendu.</td>
</tr>
<tr>
<td class="inc_open">SI-1428</td><td class="inc_open">Keepass</td><td class="inc_open">Dominique Reichl</td><td>2.29</td><td class="statut_A">A</td><td></td><td class="comm_italic">Inscrit au SILL. Version non valid&eacute;e par l'ANSSI. Arbitrage SHFD et ANSSI attendu.</td>
</tr>
<tr>
<td class="inc_open">SI-1251</td><td class="inc_open">TrueCrypt</td><td class="inc_open">truecrypt.org</td><td></td><td class="statut_M">M</td><td></td><td class="comm_italic">Incompatible avec Windows 10. Client de chiffrement dans la version 7.1a certifi&eacute;e par l'ANSSI. </td>
</tr>
<tr>
<td class="inc_nonopen">SI-1493</td><td class="inc_nonopen">Prim&rsquo;X Cryhod</td><td class="inc_nonopen">Prim&rsquo;X Technologies (primx.eu)</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Outil de chiffrement physique (disque dur..).Remplacement de TrueCrypt.</td>
</tr>
<tr>
<td class="inc_nonopen">SI-1494</td><td class="inc_nonopen">Prim&rsquo;X Zone Central</td><td class="inc_nonopen">Prim&rsquo;X Technologies (primx.eu)</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Outil de chiffrement de zone. Associ&eacute; &agrave; l&rsquo;AD.</td>
</tr>
<tr>
<td class="inc_nonopen">SI-1495</td><td class="inc_nonopen">Prim&rsquo;X Zed</td><td class="inc_nonopen">Prim&rsquo;X Technologies (primx.eu)</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Conteneurs chiffr&eacute;s pour l'&eacute;change ou la sauvegarde.</td>
</tr>
<tr>
<td class="new_open">SI-1613</td><td class="new_open">Passbolt Community Edition</td><td class="new_open">Passbolt</td><td>Version SILL</td><td class="statut_R">R</td><td>oui</td><td class="comm_italic">inscrit au SILL</td>
</tr>
</tbody>
</table>
<h3>
<a name="SISG"> Chapitre 4 : Signature - [ SG ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_nonopen">SI-1352</td><td class="inc_nonopen">Signature Server (D2S)</td><td class="inc_nonopen">Dictao</td><td>4.11</td><td class="statut_A">A</td><td></td><td class="comm_italic">Composant proposant des services de signatures, horodatage, v&eacute;rification d'habilitation &agrave; signer, conservation des signatures.</td>
</tr>
<tr>
<td class="inc_open">SI-1602</td><td class="inc_open">AdSigner Standalone </td><td class="inc_open">AdSigner</td><td>4.5.8.0</td><td class="statut_R">R</td><td></td><td class="comm_italic">client lourd de signature personnelle de document Pdf avec visuel fixe ou sans visuel. Attention&nbsp;: la version java web start Signature en mode "Java web start" est interdite pour tout usage.</td>
</tr>
<tr>
<td class="maj_open">SI-1445</td><td class="maj_open">
DSS  e-Signature
</td><td class="maj_open">Communaut&eacute; europ&eacute;enne</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">
DSS (Digital Signature Service) framework de cr&eacute;ation et de validation de signature &eacute;lectronique. Port&eacute; par la communaut&eacute; europ&eacute;enne.  Developpement d&rsquo;une API r&eacute;alis&eacute;e au sein de la DTNUM, permettant  l&rsquo;appel aux services horodatage-mi et SIGNHOR-DVS)
</td>
</tr>
</tbody>
</table>
<h3>
<a name="SIIG"> Chapitre 5 : IGC - [ IG ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_nonopen">SI-1292</td><td class="inc_nonopen">Trustykey</td><td class="inc_nonopen">CS</td><td>6.0.14</td><td class="statut_R">R</td><td></td><td class="comm_italic">TrustyKey CA version 6.0.14 certifi&eacute; CC par l&rsquo;ANSSI</td>
</tr>
<tr>
<td class="inc_nonopen">SI-1293</td><td class="inc_nonopen">TrustyServer</td><td class="inc_nonopen">CS</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Serveur de validation des certificats
</td>
</tr>
<tr>
<td class="inc_open">SI-1253</td><td class="inc_open">EJBCA</td><td class="inc_open">ejbca.org</td><td></td><td class="statut_A">A</td><td>Oui</td><td class="comm_italic">Enterprise JavaBeans Certificate Authority &ndash; application de PKI &ndash; ou IGC </td>
</tr>
</tbody>
</table>
<h3>
<a name="SIHO"> Chapitre 6 : Horodatage - [ HO ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_nonopen">SI-1353</td><td class="inc_nonopen">TimeStamp Server (DTSS)</td><td class="inc_nonopen">Dictao</td><td>4.11</td><td class="statut_A">A</td><td></td><td class="comm_italic">Composant proposant des services d'horodatage (g&eacute;n&eacute;ration de jetons, compl&eacute;tion de signature avec horodatage, v&eacute;rification d'habilitation &agrave; signer, conservation des jetons d'horodatage).</td>
</tr>
<tr>
<td class="inc_nonopen">SI-1451</td><td class="inc_nonopen">Trusty Time</td><td class="inc_nonopen">CS</td><td>3.1.3</td><td class="statut_R">R</td><td></td><td class="comm_italic">Composant d'horodatage utilis&eacute; dans l'offre SAAS minist&eacute;rielle.</td>
</tr>
</tbody>
</table>
<h3>
<a name="SIAL"> Chapitre 7 : Archivage l&eacute;gal - [ AL ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">SI-1490</td><td class="inc_open">Maarch RM</td><td class="inc_open">Maarch</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Solution d&rsquo;archivage. Peut &ecirc;tre associ&eacute;e &agrave; VITAM.</td>
</tr>
</tbody>
</table>
<hr>
<h2>
<a name="PT"> Partie 5 : Poste de travail (Fixe &amp; mobile) - [ PT ]</a>
</h2>
<p class="comm_italic">Pour les logiciels pris en charge au march&eacute; de support logiciels libres, il est indiqu&eacute; "Oui" dans la colonne "Supp. LL"Les versions de composants indiqu&eacute;es sont celles en vigueur &agrave; la date de publication du CCT.<br/>Les alertes de s&eacute;curit&eacute; et les proc&eacute;dures de mise &agrave; jour (ou de contournement) sont disponibles sur le portail de la s&eacute;curit&eacute; des syst&egrave;mes d'information (http://ssi.minint.fr/index.php/les-alertes).<br/></p>
<hr>
<h3>
<a name="PTSE"> Chapitre 1 : Syst&egrave;me d'exploitation - [ SE ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="new_open">PT-1616</td><td class="new_open">Debian GNU</td><td class="new_open">debian.org</td><td>12.x</td><td class="statut_R">R</td><td>oui</td><td class="comm_italic"></td>
</tr>
<tr>
<td class="inc_open">PT-1387</td><td class="inc_open">Linux Ubuntu</td><td class="inc_open">ubuntu.com</td><td>LTS</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Version LTS en cours - Support&eacute;e par Canonical</td>
</tr>
<tr>
<td class="inc_nonopen">PT-1042</td><td class="inc_nonopen">Windows</td><td class="inc_nonopen">Microsoft</td><td>Windows 7 SP1</td><td class="statut_M">M</td><td></td><td class="comm_italic"></td>
</tr>
<tr>
<td class="inc_nonopen">PT-1487</td><td class="inc_nonopen">Windows</td><td class="inc_nonopen">Microsoft</td><td>10 Enterprise</td><td class="statut_R">R</td><td></td><td class="comm_italic">La version entreprise est requise dans le cadre d&rsquo;un SI homologu&eacute; DR</td>
</tr>
<tr>
<td class="inc_open">PT-1497</td><td class="inc_open">Android</td><td class="inc_open">Google</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Syst&egrave;me d&rsquo;exploitation d&rsquo;&eacute;quipements mobiles (smartphone, tablette)</td>
</tr>
<tr>
<td class="inc_nonopen">PT-1498</td><td class="inc_nonopen">SECdroid</td><td class="inc_nonopen">ANSSI</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Couche de s&eacute;curisation pour le syst&egrave;me d&rsquo;exploitation Android</td>
</tr>
</tbody>
</table>
<h3>
<a name="PTSA"> Chapitre 2 : Socle applicatif - [ SA ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">PT-1596</td><td class="inc_open">Avidemux</td><td class="inc_open">avidemux.org </td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Logiciel libre de Montage vid&eacute;o</td>
</tr>
<tr>
<td class="inc_open">PT-1597</td><td class="inc_open">Calibre</td><td class="inc_open">Calibre-ebook</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Gestionnaire de biblioth&egrave;que num&eacute;rique</td>
</tr>
<tr>
<td class="inc_open">PT-1601</td><td class="inc_open">Evince (pour les postes Linux)</td><td class="inc_open">gnome.org</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Visionneuse de documents sous Linux. Produit libre.</td>
</tr>
<tr>
<td class="inc_open">PT-1600</td><td class="inc_open">FreeFileSync</td><td class="inc_open">freefilesync.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Logiciel libre de Synchronisation, sauvegarde de donn&eacute;es</td>
</tr>
<tr>
<td class="inc_open">PT-1589</td><td class="inc_open">GreenShot</td><td class="inc_open">GreenShot</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Logiciel de Capture d&rsquo;&eacute;cran</td>
</tr>
<tr>
<td class="inc_open">PT-1591</td><td class="inc_open">Inkscape</td><td class="inc_open">Porojet Inkscape</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Logiciel de cr&eacute;ation de dessins vectoriels. </td>
</tr>
<tr>
<td class="inc_open">PT-1590</td><td class="inc_open">Obs Studio</td><td class="inc_open">Open Broadcaster Software</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">R&eacute;gie video pour enregistrement et/ou streaming. https://obsproject.com/
</td>
</tr>
<tr>
<td class="inc_open">PT-1573</td><td class="inc_open">ONLYOFFICE</td><td class="inc_open">
www.onlyoffice.com
</td><td></td><td class="statut_A">A</td><td>Non</td><td class="comm_italic">OnlyOffice est une suite bureautique en ligne libre d&eacute;velopp&eacute;e par la soci&eacute;t&eacute; lettone Ascensio System SIA, incluant un traitement de texte, un tableur et un outil de pr&eacute;sentation.
La solution est impl&eacute;ment&eacute;e &agrave; la DNUM en acc&egrave;s libre, mais aussi int&eacute;gr&eacute;e a des solutions collaboratives ou de gestion documentaire en construction, notamment sur NextCloud. 

L&rsquo;url d&rsquo;acc&egrave;s au service en acc&egrave;s libre est le suivant: https://sdit-dnum.onlyoffice.interieur.rie.gouv.fr
</td>
</tr>
<tr>
<td class="inc_open">PT-1579</td><td class="inc_open">PDF Sam Basic (PDF Split and Merge)</td><td class="inc_open">pdfsam.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Logiciel de Traitement PDF</td>
</tr>
<tr>
<td class="inc_nonopen">PT-1592</td><td class="inc_nonopen">XN View</td><td class="inc_nonopen">XN View</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Visualisation retouche d'images. Produit sous licence.</td>
</tr>
<tr>
<td class="maj_nonopen">PT-1325</td><td class="maj_nonopen">MS Office</td><td class="maj_nonopen">Microsoft</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">&agrave; jour des Services Packs et des correctifs de s&eacute;curit&eacute;.Configurer par d&eacute;faut sur les formats ODF. Produit sous licence.</td>
</tr>
<tr>
<td class="inc_open">PT-1577</td><td class="inc_open">Collabora Office (service web)</td><td class="inc_open">Collabora</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Suite bureautique en ligne.</td>
</tr>
<tr>
<td class="inc_open">PT-1349</td><td class="inc_open">LibreOffice</td><td class="inc_open">The Document Foundation / MimO</td><td>Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL.  La version en cours est la version interminist&eacute;rielle de r&eacute;f&eacute;rence. cf. site MIMO : http://www.journal-officiel.gouv.fr/mimo/et site DTNUM http://telechargement.dsic.mi pour le t&eacute;l&eacute;chargement.</td>
</tr>
<tr>
<td class="inc_nonopen">PT-1488</td><td class="inc_nonopen">MS Office</td><td class="inc_nonopen">Microsoft</td><td>2016</td><td class="statut_A">A</td><td></td><td class="comm_italic">Version d&rsquo;office associ&eacute;e &agrave; Windows 10</td>
</tr>
<tr>
<td class="inc_open">PT-1578</td><td class="inc_open">M&eacute;lanie</td><td class="inc_open"></td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Client de messagerie</td>
</tr>
<tr>
<td class="inc_open">PT-1262</td><td class="inc_open">OCS-inventory</td><td class="inc_open">ocsinventory-ng.org</td><td>Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. 
</td>
</tr>
<tr>
<td class="inc_open">PT-1575</td><td class="inc_open">Chromium</td><td class="inc_open"></td><td>Version LTS ou ESR disponible</td><td class="statut_R">R</td><td></td><td class="comm_italic">Navigateur d&eacute;di&eacute; aux solutions de Visioconf&eacute;rences</td>
</tr>
<tr>
<td class="inc_open">PT-1427</td><td class="inc_open">Firefox</td><td class="inc_open">Mozilla</td><td>Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. La version de Firefox est la version ESR (Extended Support Release) int&eacute;gr&eacute;e au poste de travail.</td>
</tr>
<tr>
<td class="inc_nonopen">PT-1576</td><td class="inc_nonopen">Microsoft Edge</td><td class="inc_nonopen">Microsoft</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Navigateur sur la souche Windows</td>
</tr>
<tr>
<td class="inc_nonopen">PT-1330</td><td class="inc_nonopen">Internet Explorer</td><td class="inc_nonopen">Microsoft</td><td>&gt;=9</td><td class="statut_A">A</td><td></td><td class="comm_italic">Toutes versions d'IE &gt;= 9 sont assujetties</td>
</tr>
<tr>
<td class="inc_open">PT-1458</td><td class="inc_open">Navigateur AOSP</td><td class="inc_open">Google</td><td>Version ANSSI</td><td class="statut_R">R</td><td></td><td class="comm_italic">Navigateur fourni dans la version d'AOSP int&eacute;gr&eacute;e aux p&eacute;riph&eacute;riques mobiles. Derni&egrave;re version valid&eacute;e par l'ANSSI.</td>
</tr>
<tr>
<td class="maj_open">PT-1061</td><td class="maj_open">Thunderbird &ndash; Pablo</td><td class="maj_open">Mozilla.org</td><td></td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Client de messagerie</td>
</tr>
<tr>
<td class="inc_nonopen">PT-1062</td><td class="inc_nonopen">Messagerie tactique (gendarmerie)</td><td class="inc_nonopen"></td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">La messagerie tactique est un client applicatif embarqu&eacute; sur des solutions mobiles (TIE, Neo&hellip;) permettant l&rsquo;interrogation des fichiers de police tels que AGDREF, FPR, NSIS &hellip; Con&ccedil;ue &agrave; l&rsquo;origine pour des r&eacute;seaux bas d&eacute;bits, elle utilise le protocole SMTP. </td>
</tr>
<tr>
<td class="inc_open">PT-1047</td><td class="inc_open">Gnome</td><td class="inc_open">gnome.org</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Environnement de bureau privil&eacute;gi&eacute; pour les distributions linux Ubuntu</td>
</tr>
<tr>
<td class="inc_open">PT-1055</td><td class="inc_open">OCS &ndash; Agent</td><td class="inc_open">ocsinventory-ng.org</td><td>2.0.x</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Agent OCS d'inventaire logiciel et mat&eacute;riel pour le poste de travail Windows, Linux ou MAC.</td>
</tr>
<tr>
<td class="inc_open">PT-1331</td><td class="inc_open">Foxit</td><td class="inc_open">foxitsoftware.com</td><td>7</td><td class="statut_R">R</td><td></td><td class="comm_italic">Lecteur PDF non libre, largement d&eacute;ploy&eacute; au minist&egrave;re via mastersation. Lecteurs pdf libres r&eacute;f&eacute;renc&eacute;s au SILL : Evince pour Linux</td>
</tr>
<tr>
<td class="inc_nonopen">PT-1382</td><td class="inc_nonopen">JRE Java 7</td><td class="inc_nonopen">Oracle</td><td>1.7.x</td><td class="statut_M">M</td><td></td><td class="comm_italic">Machine virtuelle java. ATTENTION&nbsp;: &agrave; partir de Java 11, la JRE n&rsquo;existe plus et chaque application doit embarquer son propre environnement runtime java. Toutefois, la version 7 peut rester n&eacute;cessaire pour le support de certaines applications anciennes.</td>
</tr>
<tr>
<td class="inc_nonopen">PT-1419</td><td class="inc_nonopen">JRE Java 8</td><td class="inc_nonopen">Oracle</td><td>1.8</td><td class="statut_M">M</td><td>Oui</td><td class="comm_italic">Machine virtuelle java. ATTENTION&nbsp;: &agrave; partir de Java 11, la JRE n&rsquo;existe plus et chaque application doit embarquer son propre environnement runtime java. Toutefois, la version 8 peut rester n&eacute;cessaire pour le support de certaines applications anciennes.</td>
</tr>
<tr>
<td class="inc_nonopen">PT-1327</td><td class="inc_nonopen">Adobe Reader X</td><td class="inc_nonopen">Adobe</td><td></td><td class="statut_M">M</td><td></td><td class="comm_italic">Lecteur PDF. Branche 10 support&eacute;e jusqu'au 18 novembre 2015.</td>
</tr>
<tr>
<td class="inc_nonopen">PT-1365</td><td class="inc_nonopen">Adobe Reader XI</td><td class="inc_nonopen">Adobe</td><td></td><td class="statut_M">M</td><td></td><td class="comm_italic">Lecteur PDF. Par rapport &agrave; la version 10.1.x, &agrave; choisir en regard des besoins fonctionnels. Branche 11 support&eacute;e jusqu'au 15 octobre 2017.</td>
</tr>
<tr>
<td class="inc_nonopen">PT-1431</td><td class="inc_nonopen">Adobe Flash Player</td><td class="inc_nonopen">Adobe</td><td></td><td class="statut_M">M</td><td></td><td class="comm_italic">Plugin animation flash pour firefox et IE - Phase d&rsquo;obsolescence.</td>
</tr>
<tr>
<td class="inc_nonopen">PT-1328</td><td class="inc_nonopen">Adobe Shockwave Player</td><td class="inc_nonopen">Adobe</td><td></td><td class="statut_M">M</td><td></td><td class="comm_italic">Adobe a annonc&eacute; la fin de vie de Shockwave pour obsolescence.</td>
</tr>
<tr>
<td class="inc_nonopen">PT-1298</td><td class="inc_nonopen">Jaws</td><td class="inc_nonopen">Freedom Scientific</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">JAWS est un logiciel de revue d'&eacute;cran pour les personnes mal ou non voyantes pour le syst&egrave;me d'exploitation Microsoft Windows.</td>
</tr>
<tr>
<td class="inc_open">PT-1519</td><td class="inc_open">NVDA</td><td class="inc_open">nvda-fr.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. NonVisual desktop Access (NVDA) est un logiciel de revue d'&eacute;cran pour les personnes mal ou non voyantes, gratuit et &agrave; source ouverte pour le syst&egrave;me d'exploitation Microsoft Windows.</td>
</tr>
<tr>
<td class="inc_open">PT-1401</td><td class="inc_open">7-Zip</td><td class="inc_open"></td><td>Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. 
</td>
</tr>
<tr>
<td class="inc_open">PT-1504</td><td class="inc_open">OwnCloud</td><td class="inc_open">ownCloud.org</td><td>9.x</td><td class="statut_R">R</td><td></td><td class="comm_italic">Serveur de partage et de synchronisation de fichier. Consid&eacute;r&eacute; comme une alternative &agrave; DropBox.</td>
</tr>
<tr>
<td class="inc_open">PT-1520</td><td class="inc_open">Notepad++</td><td class="inc_open">notepad-plus-plus.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Editeur de code source prenant en charge plusieurs langages.</td>
</tr>
<tr>
<td class="inc_open">PT-1521</td><td class="inc_open">BlueGriffon</td><td class="inc_open">bluegriffon.org</td><td>Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Editeur web bas&eacute; sur le moteur de rendu de firefox.</td>
</tr>
<tr>
<td class="inc_open">PT-1522</td><td class="inc_open">Scribus</td><td class="inc_open">scribus.net</td><td>Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Outil de publication.</td>
</tr>
<tr>
<td class="inc_open">PT-1523</td><td class="inc_open">VLC</td><td class="inc_open">videolan.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Lecteur multim&eacute;dia gratuit et libre, capable de lire la plupart des fichiers multim&eacute;dias ainsi que des DVD, des CD Audio, des VCD, et divers protocoles de diffusion. </td>
</tr>
<tr>
<td class="inc_open">PT-1524</td><td class="inc_open">Avidemux</td><td class="inc_open">avidemux.org </td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Logiciel de montage et d&rsquo;encodage vid&eacute;o.</td>
</tr>
<tr>
<td class="inc_open">PT-1525</td><td class="inc_open">Audacity</td><td class="inc_open">audacity.fr</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Enregistreur et &eacute;diteur de montage audio</td>
</tr>
<tr>
<td class="inc_open">PT-1526</td><td class="inc_open">The Gimp</td><td class="inc_open">gimp.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Logiciel de manipulation d&rsquo;image.</td>
</tr>
<tr>
<td class="inc_open">PT-1527</td><td class="inc_open">Filezilla</td><td class="inc_open">filezilla-project.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Solution de copie ftp.</td>
</tr>
<tr>
<td class="inc_open">PT-1528</td><td class="inc_open">Clonezilla</td><td class="inc_open">clonezilla.org </td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Outil de partitionnement et de clonage de disque.</td>
</tr>
</tbody>
</table>
<h3>
<a name="PTPR"> Chapitre 3 : P&eacute;riph&eacute;riques - [ PR ]</a>
</h3>
<p class="comm_italic"></p>
<h3>
<a name="PTSS"> Chapitre 4 : Stockage / sauvegardes - [ SS ]</a>
</h3>
<p class="comm_italic"></p>
<h3>
<a name="PTVR"> Chapitre 5 : Virtualisation - [ VR ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_nonopen">PT-1552</td><td class="inc_nonopen">Hyper-V</td><td class="inc_nonopen">Microsoft</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Restriction &agrave; des postes de travail Windows 10 faisant office de serveur local sur les petits sites (moins de 20 postes)</td>
</tr>
<tr>
<td class="inc_open">PT-1072</td><td class="inc_open">VirtualBox</td><td class="inc_open">Oracle</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic"></td>
</tr>
<tr>
<td class="inc_nonopen">PT-1070</td><td class="inc_nonopen">VMware Workstation Player</td><td class="inc_nonopen">Vmware</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Environnement d&rsquo;ex&eacute;cution de machine virtuelle</td>
</tr>
<tr>
<td class="inc_nonopen">PT-1071</td><td class="inc_nonopen">Vmware Workstation Pro</td><td class="inc_nonopen">Vmware</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Environnement d&rsquo;ex&eacute;cution de machine virtuelle</td>
</tr>
</tbody>
</table>
<h3>
<a name="PTNO"> Chapitre 6 : Nomadisme - [ NO ]</a>
</h3>
<p class="comm_italic">Toute installation de logiciel sur un terminal mobile doit se conformer &agrave; la r&egrave;gle PT-1096.<br/>En particulier, l'installation d'une suite bureautique et du client de messagerie Thunderbird n'est pas autoris&eacute;e sur les terminaux TIE/TDG.</p>
<hr>
<h2>
<a name="DV"> Partie 6 : D&eacute;veloppements - [ DV ]</a>
</h2>
<p class="comm_italic">Pour les logiciels pris en charge au march&eacute; de support logiciels libres, il est indiqu&eacute; "Oui" dans la colonne "Supp. LL"</p>
<hr>
<h3>
<a name="DVCO"> Chapitre 1 : Conception - [ CO ]</a>
</h3>
<p class="comm_italic"></p>
<h3>
<a name="DVRE"> Chapitre 2 : R&eacute;alisation - [ RE ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="new_open">DV-1612</td><td class="new_open">VSCode</td><td class="new_open">Microsoft</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Sous licence MIT (https://github.com/microsoft/vscode)Il est conseill&eacute; de d&eacute;sactiver les options de t&eacute;l&eacute;metrie
https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting
</td>
</tr>
<tr>
<td class="new_open">DV-1611</td><td class="new_open">VSCodium</td><td class="new_open">VSCodium</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL (https://code.gouv.fr/sill/detail?name=VSCodium)Une distribution binaire sous licence gratuite de l'&eacute;diteur Microsoft VS Codeun &eacute;diteur de code source multiplateforme et multi langage.</td>
</tr>
<tr>
<td class="inc_open">DV-1477</td><td class="inc_open">Oracle OpenJDK</td><td class="inc_open">Oracle</td><td>7</td><td class="statut_M">M</td><td></td><td class="comm_italic">Version open source obsol&egrave;te du standard Java SE, tel que d&eacute;fini par le Java Community Process.</td>
</tr>
<tr>
<td class="inc_open">DV-1476</td><td class="inc_open">Oracle OpenJDK</td><td class="inc_open">Oracle</td><td>8</td><td class="statut_M">M</td><td></td><td class="comm_italic">Version open source du standard Java SE, tel que d&eacute;fini par le Java Community Process. Derni&egrave;re version supportant les applets et Java Web Start (JWS).</td>
</tr>
<tr>
<td class="inc_open">DV-1554</td><td class="inc_open">Oracle OpenJDK</td><td class="inc_open">Oracle</td><td>11</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit et recommand&eacute; au SILL. Version open source du standard Java SE, tel que d&eacute;fini par le Java Community Process. La version 11 est une version LTS (Long Term Support). Java Web start n&rsquo;est plus support&eacute; dans cette version. Chaque application doit embarquer son Java runtime d&eacute;di&eacute;.</td>
</tr>
<tr>
<td class="inc_nonopen">DV-1479</td><td class="inc_nonopen">Oracle JDK</td><td class="inc_nonopen">Oracle</td><td>7</td><td class="statut_M">M</td><td></td><td class="comm_italic">Java SE Development Kit &ndash; Pr&eacute;f&eacute;rer OpenJDK si un support &eacute;diteur n&rsquo;est pas n&eacute;cessaire</td>
</tr>
<tr>
<td class="inc_nonopen">DV-1478</td><td class="inc_nonopen">Oracle JDK</td><td class="inc_nonopen">Oracle</td><td>8</td><td class="statut_A">A</td><td></td><td class="comm_italic">Java SE Development Kit &ndash; Pr&eacute;f&eacute;rer OpenJDK si un support &eacute;diteur n&rsquo;est pas n&eacute;cessaire</td>
</tr>
<tr>
<td class="inc_nonopen">DV-1553</td><td class="inc_nonopen">Oracle JDK</td><td class="inc_nonopen">Oracle</td><td>11</td><td class="statut_A">A</td><td></td><td class="comm_italic">Java SE Development Kit &ndash; Pr&eacute;f&eacute;rer OpenJDK si un support &eacute;diteur n&rsquo;est pas n&eacute;cessaire</td>
</tr>
<tr>
<td class="inc_open">DV-1464</td><td class="inc_open">Android Studio</td><td class="inc_open">Google</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">D&eacute;veloppement natif d'application mobile.</td>
</tr>
<tr>
<td class="inc_open">DV-1460</td><td class="inc_open">Apache Cordova</td><td class="inc_open">Apache</td><td>19</td><td class="statut_R">R</td><td></td><td class="comm_italic">Pour le d&eacute;veloppement d'application hybrides. Code HTML / CSS / javascript peu adh&eacute;rent &agrave; l'OS.</td>
</tr>
<tr>
<td class="inc_open">DV-1459</td><td class="inc_open">SDK Android</td><td class="inc_open">Google</td><td>19</td><td class="statut_R">R</td><td></td><td class="comm_italic">Pour KitKat (4.4)</td>
</tr>
<tr>
<td class="inc_open">DV-1471</td><td class="inc_open">Git</td><td class="inc_open">git-scm.com</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Syst&egrave;me de gestion de versions d&eacute;centralis&eacute;, cr&eacute;&eacute; par Linus Torvalds. Pour les nouveaux projets, Git est pr&eacute;f&eacute;r&eacute; &agrave; SVN (Subversion).</td>
</tr>
<tr>
<td class="inc_open">DV-1538</td><td class="inc_open">Gitlab CE</td><td class="inc_open">GitLab Inc. </td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Forge permettant de g&eacute;rer des d&eacute;pots git</td>
</tr>
<tr>
<td class="maj_open">DV-1181</td><td class="maj_open">SubVersion</td><td class="maj_open">Apache software Foundation</td><td></td><td class="statut_M">M</td><td>Oui</td><td class="comm_italic">Apache Subversion(ou svn) est un syst&egrave;me de gestion de version. Utiliser la version de la distribution Linux. Privil&eacute;gier GIT (qui poss&egrave;de une passerelle vers subversion).</td>
</tr>
<tr>
<td class="inc_open">DV-1182</td><td class="inc_open">Client Subversion - Tortoise</td><td class="inc_open">tortoisesvn.net
</td><td></td><td class="statut_M">M</td><td></td><td class="comm_italic">Gestion de versions.</td>
</tr>
<tr>
<td class="inc_open">DV-1375</td><td class="inc_open">Eclipse</td><td class="inc_open">eclipse.org</td><td>3.5 et +</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Environnement de d&eacute;veloppement</td>
</tr>
<tr>
<td class="inc_open">DV-1404</td><td class="inc_open">Zend studio for Eclipse</td><td class="inc_open">Zend Technologies</td><td>6.1</td><td class="statut_R">R</td><td></td><td class="comm_italic">Environnement de d&eacute;veloppement PHP</td>
</tr>
<tr>
<td class="inc_open">DV-1542</td><td class="inc_open">Symfony</td><td class="inc_open">SensioLabs</td><td>3</td><td class="statut_M">M</td><td></td><td class="comm_italic">Environnement de d&eacute;veloppement PHP. Version 3.4 en Long Term Support, jusqu&rsquo;&agrave; 2020</td>
</tr>
<tr>
<td class="maj_open">DV-1565</td><td class="maj_open">Symfony</td><td class="maj_open">SensioLabs</td><td>6.4.23 LTS</td><td class="statut_R">R</td><td></td><td class="comm_italic">Environnement de d&eacute;veloppement PHP. Version 6.4.24 en Long Term Support. Fin des corrections de bug en novembre 2026, fin des corrections de s&eacute;curit&eacute; en novembre 2027.</td>
</tr>
<tr>
<td class="inc_open">DV-1183</td><td class="inc_open">PgAdmin</td><td class="inc_open">Pgadmin.org</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Outil graphique de gestion de base de donn&eacute;es PostgreSQL.</td>
</tr>
<tr>
<td class="inc_open">DV-1106</td><td class="inc_open">Hibernate</td><td class="inc_open">Hibernate</td><td>4</td><td class="statut_M">M</td><td>Oui</td><td class="comm_italic">Framework java g&eacute;rant la persistance des objets en base de donn&eacute;es relationnelle. La version 4 n&rsquo;est pas compatible avec la version LTS de java JDK 11.</td>
</tr>
<tr>
<td class="inc_open">DV-1437</td><td class="inc_open">Jersey</td><td class="inc_open">Oracle</td><td>2.13</td><td class="statut_R">R</td><td></td><td class="comm_italic">P&eacute;rim&egrave;tre restreint &agrave; l&rsquo;ANFSI. <br/>Framework de d&eacute;veloppement de web services REST suivant les sp&eacute;cifications JAX-RS.</td>
</tr>
<tr>
<td class="inc_open">DV-1563</td><td class="inc_open">Hibernate</td><td class="inc_open">Hibernate.org</td><td>5.4</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Framework java g&eacute;rant la persistance des objets en base de donn&eacute;es relationnelle. La version stable 5.4 supporte java JDK 8 et 11 (version Long Term Support)</td>
</tr>
<tr>
<td class="inc_open">DV-1482</td><td class="inc_open">Spring</td><td class="inc_open">Pivotal Software</td><td>4</td><td class="statut_M">M</td><td></td><td class="comm_italic">Framework de d&eacute;veloppement d&rsquo;application web Java EE (Java Enterprise Edition)</td>
</tr>
<tr>
<td class="inc_open">DV-1562</td><td class="inc_open">Spring</td><td class="inc_open">Vmware</td><td>&ge; 5.1</td><td class="statut_R">R</td><td></td><td class="comm_italic">Framework de d&eacute;veloppement d&rsquo;application web Java EE (Java Enterprise Edition). Java LTS 11 est support&eacute;e &agrave; partir de la version 5.1 de SPRING.</td>
</tr>
<tr>
<td class="inc_open">DV-1109</td><td class="inc_open">Struts 2</td><td class="inc_open">Apache Software Foundation</td><td>2.3.x</td><td class="statut_M">M</td><td></td><td class="comm_italic">Framework pour le d&eacute;veloppement d'applications Web J2EE (Java).</td>
</tr>
<tr>
<td class="inc_open">DV-1564</td><td class="inc_open">Struts 2</td><td class="inc_open">Apache Software Foundation</td><td>&gt;2.5.20</td><td class="statut_R">R</td><td></td><td class="comm_italic">Framework pour le d&eacute;veloppement d'applications Web J2EE (Java). Support de java 11 &agrave; partir de la version 2.5.20</td>
</tr>
<tr>
<td class="inc_open">DV-1599</td><td class="inc_open">Temurin</td><td class="inc_open">Adoptium Working Group</td><td>Version LTS </td><td class="statut_R">R</td><td></td><td class="comm_italic">Java runtime</td>
</tr>
<tr>
<td class="inc_open">DV-1169</td><td class="inc_open">JSP (JavaServer Pages)
</td><td class="inc_open">Oracle</td><td>2.0</td><td class="statut_R">R</td><td></td><td class="comm_italic">Technique java pour g&eacute;n&eacute;ration de pages web.</td>
</tr>
<tr>
<td class="inc_open">DV-1170</td><td class="inc_open">JSP (JavaServer Pages)
</td><td class="inc_open">Oracle</td><td>2.1</td><td class="statut_R">R</td><td></td><td class="comm_italic">Technique java pour g&eacute;n&eacute;ration de pages web.</td>
</tr>
<tr>
<td class="inc_open">DV-1465</td><td class="inc_open">PHP Composer</td><td class="inc_open">getcomposer.org</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">P&eacute;rim&egrave;tre restreint &agrave; l&rsquo;ANFSI. Gestion des d&eacute;pendances pour PHP (t&eacute;l&eacute;chargement des librairies requises), en interface avec un d&eacute;p&ocirc;t Git.</td>
</tr>
<tr>
<td class="inc_open">DV-1134</td><td class="inc_open">NUSOAP</td><td class="inc_open">NuSphere Corporation</td><td></td><td class="statut_M">M</td><td></td><td class="comm_italic">Librairie PHP pour cr&eacute;ation de web services SOAP. Les composants SOAP natifs de PHP (&agrave; partir de la 5.3) sont &agrave; privil&eacute;gier.</td>
</tr>
<tr>
<td class="inc_open">DV-1256</td><td class="inc_open">Maven</td><td class="inc_open">Apache Software Foundation</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Int&eacute;gration continue, gestion et automatisation de production des projets logiciels Java</td>
</tr>
<tr>
<td class="inc_open">DV-1462</td><td class="inc_open">Redmine</td><td class="inc_open">redmine.org</td><td>Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Gestion de projet collaborative</td>
</tr>
<tr>
<td class="inc_open">DV-1180</td><td class="inc_open">MantisBT
</td><td class="inc_open">mantisbt.org</td><td>Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Bug tracker &ndash; Suivi de bugs.</td>
</tr>
<tr>
<td class="inc_open">DV-1107</td><td class="inc_open">NetBeans</td><td class="inc_open">Apache</td><td>6 et sup.</td><td class="statut_A">A</td><td></td><td class="comm_italic">Environnement de d&eacute;veloppement int&eacute;gr&eacute; (EDI)</td>
</tr>
<tr>
<td class="inc_open">DV-1355</td><td class="inc_open">Play Framework</td><td class="inc_open">playframework.com</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Framework de d&eacute;veloppement Java et scala.<br/>Licence Apache 2.<br/>Porteur du produit au minist&egrave;re : ANFSI.</td>
</tr>
<tr>
<td class="inc_nonopen">DV-1176</td><td class="inc_nonopen">Visual Studio</td><td class="inc_nonopen">Microsoft</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">IDE de Microsoft</td>
</tr>
<tr>
<td class="inc_nonopen">DV-1177</td><td class="inc_nonopen">Zend Studio</td><td class="inc_nonopen">Zend Technologies</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Environnement de d&eacute;veloppement pour PHP</td>
</tr>
<tr>
<td class="inc_nonopen">DV-1103</td><td class="inc_nonopen">DotNet</td><td class="inc_nonopen">Microsoft</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Environnement de d&eacute;veloppement Microsoft</td>
</tr>
<tr>
<td class="inc_open">DV-1369</td><td class="inc_open">Ext JS</td><td class="inc_open">Sencha inc.</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Framework Javascript.Licence GPLv3</td>
</tr>
<tr>
<td class="inc_open">DV-1362</td><td class="inc_open">YahooUI</td><td class="inc_open">Yahoo</td><td>3.5.x</td><td class="statut_A">A</td><td></td><td class="comm_italic">Framework/librairie Javascript. Licence BSD. Utilisation dans le p&eacute;rim&egrave;tre PP.</td>
</tr>
<tr>
<td class="inc_open">DV-1257</td><td class="inc_open">XAMPP</td><td class="inc_open">apachefriends.org</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Environnement d'ex&eacute;cution Apache-Mysql-Php pour Linux.L'utilisation de ce composant est limit&eacute;e aux contextes de d&eacute;veloppement locaux et n'est pas autoris&eacute;e pour l'h&eacute;bergement de sites web. Les versions utilis&eacute;es doivent tenir compte des versions PHP, Perl et MySQL r&eacute;f&eacute;renc&eacute;es dans les piles logicielles.</td>
</tr>
<tr>
<td class="inc_open">DV-1258</td><td class="inc_open">WAMP</td><td class="inc_open">wampserver.com</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Environnement d'ex&eacute;cution Apache-Mysql-Php pour Windows.L'utilisation de ce composant est limit&eacute;e aux contextes de d&eacute;veloppement locaux et n'est pas autoris&eacute;e pour l'h&eacute;bergement de sites web. Les versions utilis&eacute;es doivent tenir compte des versions PHP et MySQL r&eacute;f&eacute;renc&eacute;es dans les piles logicielles.</td>
</tr>
<tr>
<td class="inc_nonopen">DV-1450</td><td class="inc_nonopen">Zend framework</td><td class="inc_nonopen">Zend Technologies</td><td>1</td><td class="statut_M">M</td><td></td><td class="comm_italic">Framework de d&eacute;veloppement PHP</td>
</tr>
<tr>
<td class="inc_nonopen">DV-1449</td><td class="inc_nonopen">Zend framework</td><td class="inc_nonopen">Zend Technologies</td><td>2</td><td class="statut_A">A</td><td></td><td class="comm_italic">Framework de d&eacute;veloppement PHP</td>
</tr>
<tr>
<td class="inc_open">DV-1452</td><td class="inc_open">Doctrine</td><td class="inc_open">doctrine-project.org</td><td>2</td><td class="statut_R">R</td><td></td><td class="comm_italic">P&eacute;rim&egrave;tre restreint &agrave; l&rsquo;ANFSI.Framework de d&eacute;veloppement pour la couche d'acc&egrave;s aux donn&eacute;es de type ORM (Mapping Objet Relationnel) int&eacute;gr&eacute; &agrave; Zend Framework 2 et Symfony 2 mais pouvant &ecirc;tre utilis&eacute; seul.</td>
</tr>
<tr>
<td class="inc_open">DV-1461</td><td class="inc_open">Ionic</td><td class="inc_open"></td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">D&eacute;veloppement d'applications hybrides.</td>
</tr>
<tr>
<td class="inc_open">DV-1543</td><td class="inc_open">PHP</td><td class="inc_open">PHP.net</td><td></td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Privil&eacute;gier la version de la distribution de l&rsquo;OS. Sinon la version support&eacute;e par le framework Symfony, ou la version &laquo;&nbsp;Current Stable&nbsp;&raquo; de PHP (php.net)</td>
</tr>
<tr>
<td class="inc_nonopen">DV-1093</td><td class="inc_nonopen">C#</td><td class="inc_nonopen">Microsoft</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Langage de d&eacute;veloppement.</td>
</tr>
<tr>
<td class="inc_nonopen">DV-1094</td><td class="inc_nonopen">C++</td><td class="inc_nonopen">Microsoft</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Langage de d&eacute;veloppement.</td>
</tr>
<tr>
<td class="inc_open">DV-1097</td><td class="inc_open">PERL</td><td class="inc_open">Perl.org</td><td></td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Langage de d&eacute;veloppement orient&eacute; scripts/reporting. Version native de la distribution Linux.</td>
</tr>
<tr>
<td class="inc_open">DV-1099</td><td class="inc_open">Python</td><td class="inc_open">python.org</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Langage de d&eacute;veloppement.</td>
</tr>
<tr>
<td class="inc_open">DV-1540</td><td class="inc_open">SCALA</td><td class="inc_open">scala-lang.org</td><td></td><td class="statut_O">O</td><td></td><td class="comm_italic">Langage de programmation multi-paradigme con&ccedil;u &agrave; l'&Eacute;cole polytechnique f&eacute;d&eacute;rale de Lausanne (EPFL).</td>
</tr>
<tr>
<td class="inc_open">DV-1545</td><td class="inc_open">EcmaScript (javascript)</td><td class="inc_open">ECMA</td><td>6</td><td class="statut_R">R</td><td></td><td class="comm_italic">Sp&eacute;cification ECMA du langage javascript</td>
</tr>
</tbody>
</table>
<h3>
<a name="DVEX"> Chapitre 3 : Exploitabilit&eacute; - [ EX ]</a>
</h3>
<p class="comm_italic"></p>
<h3>
<a name="DVTS"> Chapitre 4 : Tests - [ TS ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="new_open">DV-1617</td><td class="new_open">Cypress</td><td class="new_open">cypress</td><td>Version SILL</td><td class="statut_R">R</td><td>oui</td><td class="comm_italic">Inscrit au SILL. Solution d&rsquo;automatisation de test &laquo;&nbsp;end 2 end&nbsp;&raquo;
https://www.cypress.io/ . La tendance des solutions &laquo;&nbsp;end 2 end&nbsp;&raquo; est d&rsquo;aller vers Playwright.</td>
</tr>
<tr>
<td class="inc_open">DV-1539</td><td class="inc_open">Jasmine</td><td class="inc_open">Jasmine.github.io</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Framework de test javascript pour navigateur et node.js</td>
</tr>
<tr>
<td class="inc_open">DV-1466</td><td class="inc_open">JUnit</td><td class="inc_open">JUnit.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Junit est un framework de test unitaire pour le langage de programmation Java.</td>
</tr>
<tr>
<td class="inc_open">DV-1467</td><td class="inc_open">PHPUnit</td><td class="inc_open">PHPUnit.de</td><td>4</td><td class="statut_R">R</td><td></td><td class="comm_italic">PHPUnit est un framework open source de tests unitaires d&eacute;di&eacute; au langage de programmation PHP.</td>
</tr>
<tr>
<td class="new_open">DV-1620</td><td class="new_open">PlayWright</td><td class="new_open">Microsoft</td><td>1.x</td><td class="statut_R">R</td><td></td><td class="comm_italic">Solution d&rsquo;automatisation de test &laquo;&nbsp;end 2 end&nbsp;&raquo; en opensource (Licence Apache-2.0) https://playwright.dev/community/welcome , https://github.com/microsoft/playwright
</td>
</tr>
<tr>
<td class="inc_open">DV-1468</td><td class="inc_open">SonarQube</td><td class="inc_open">Sonarsource</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Outil d'analyse de la qualit&eacute; du code multi-langages. Utilise notamment des outils d'analyse tels que findbugs, checkstyle, PMD ...</td>
</tr>
<tr>
<td class="inc_open">DV-1186</td><td class="inc_open">Jmeter</td><td class="inc_open">Apache Software Foundation</td><td>Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Jmeter permet la programmation de sc&eacute;narios de tests de mont&eacute;e en charge automatis&eacute;s des serveurs par injection de requ&ecirc;tes HTTP.</td>
</tr>
<tr>
<td class="inc_open">DV-1282</td><td class="inc_open">Selenium Server</td><td class="inc_open">seleniumhq.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Automatisation de tests fonctionnels.</td>
</tr>
<tr>
<td class="inc_open">DV-1299</td><td class="inc_open">soapUI</td><td class="inc_open">soapui.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Outil de test de Web Services (client Windows en version gratuite ou plugin eclipse)</td>
</tr>
<tr>
<td class="inc_open">DV-1049</td><td class="inc_open">JXPLORER</td><td class="inc_open">jxplorer.org</td><td>3.3</td><td class="statut_A">A</td><td></td><td class="comm_italic">Client &eacute;diteur / explorateur LDAP</td>
</tr>
<tr>
<td class="inc_nonopen">DV-1188</td><td class="inc_nonopen">QALOAD</td><td class="inc_nonopen">MicroFocus</td><td>5.9</td><td class="statut_A">A</td><td></td><td class="comm_italic">Tests de charge.</td>
</tr>
</tbody>
</table>
<h3>
<a name="DVDE"> Chapitre 5 : D&eacute;ploiement - [ DE ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">DV-1469</td><td class="inc_open">Jenkins</td><td class="inc_open">jenkins-ci.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Jenkins est un outil open source d'int&eacute;gration continue.</td>
</tr>
<tr>
<td class="inc_open">DV-1470</td><td class="inc_open">Nexus</td><td class="inc_open">Sonatype.org</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. </td>
</tr>
</tbody>
</table>
<hr>
<h2>
<a name="MT"> Partie 7 : M&eacute;thodologie - [ MT ]</a>
</h2>
<p class="comm_italic">Pour les logiciels pris en charge au march&eacute; de support logiciels libres, il est indiqu&eacute; "Oui" dans la colonne "Supp. LL"</p>
<hr>
<h3>
<a name="MTGP"> Chapitre 1 : Conduite &amp; gestion de projet - [ GP ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">MT-1588</td><td class="inc_open">Joplin</td><td class="inc_open">Joplin</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Logiciel multiplateforme de prise de notes synchronisables</td>
</tr>
<tr>
<td class="inc_nonopen">MT-1584</td><td class="inc_nonopen">Microsoft Project</td><td class="inc_nonopen"></td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Gestion de projets. Produit sous licence.</td>
</tr>
<tr>
<td class="inc_open">MT-1499</td><td class="inc_open">ProjectLibre</td><td class="inc_open">projectlibre.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Outil de gestion de projet &ndash; Inscrit au SILL</td>
</tr>
<tr>
<td class="inc_open">MT-1585</td><td class="inc_open">ProjeQtor (service web)</td><td class="inc_open">Projeqtor.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Gestion de projets. https://www.projeqtor.org
</td>
</tr>
<tr>
<td class="inc_open">MT-1583</td><td class="inc_open">Wekan (service web)</td><td class="inc_open">wekan.github.io</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Gestion de t&acirc;ches (outil de Kanban open source)</td>
</tr>
</tbody>
</table>
<h3>
<a name="MTAC"> Chapitre 2 : Aide au choix solutions Open Source - [ AC ]</a>
</h3>
<p class="comm_italic"></p>
<h3>
<a name="MTMO"> Chapitre 3 : Mod&eacute;lisation - [ MO ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_nonopen">MT-1078</td><td class="inc_nonopen">Magic Draw</td><td class="inc_nonopen">Netfective Technology</td><td>16.6</td><td class="statut_A">A</td><td></td><td class="comm_italic">Version obsol&egrave;te</td>
</tr>
<tr>
<td class="inc_open">MT-1587</td><td class="inc_open">Drawio</td><td class="inc_open">JGraph Ltd</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Outil de Dessin et diagrammes. Version Desktop inscrite au SILL</td>
</tr>
<tr>
<td class="inc_open">MT-1463</td><td class="inc_open">Modelio</td><td class="inc_open">Modelio.org</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Outil de mod&eacute;lisation UML / BPMN. Anciennement objecteering de Softeam.</td>
</tr>
<tr>
<td class="inc_open">MT-1593</td><td class="inc_open">Freeplane</td><td class="inc_open">freeplane.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Cartes heuristiques</td>
</tr>
<tr>
<td class="inc_nonopen">MT-1594</td><td class="inc_nonopen">Autocad</td><td class="inc_nonopen">Autodesk</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Logiciel de Dessin Assist&eacute; par Ordinateur. Sous Licence.</td>
</tr>
<tr>
<td class="inc_open">MT-1595</td><td class="inc_open">Sweet Home 3D </td><td class="inc_open">Eteks</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Logiciel libre de Dessin Assist&eacute; par Ordinateur</td>
</tr>
</tbody>
</table>
<h3>
<a name="MTSI"> Chapitre 4 : S&eacute;curit&eacute; - [ SI ]</a>
</h3>
<p class="comm_italic"></p>
<h3>
<a name="MTRF"> Chapitre 5 : R&eacute;f&eacute;rentiels - [ RF ]</a>
</h3>
<p class="comm_italic"></p>
<hr>
<h2>
<a name="SG"> Partie 8 : Composants &amp; services g&eacute;n&eacute;riques - [ SG ]</a>
</h2>
<p class="comm_italic"></p>
<hr>
<h3>
<a name="SGDN"> Chapitre 1 : DNS - [ DN ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">SG-1265</td><td class="inc_open">Bind</td><td class="inc_open">Internet Systems Consortium</td><td>9</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">
BIND (Berkeley Internet Name Daemon) est l&rsquo;impl&eacute;mentation la plus r&eacute;pandue du service de nom DNS (Domain Name System). Bind est embarqu&eacute; dans toutes les distributions Linux. Version mineure en fonction de la distribution Linux concern&eacute;e.</td>
</tr>
</tbody>
</table>
<h3>
<a name="SGOC"> Chapitre 2 : Outils de communication - [ OC ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_nonopen">SG-1496</td><td class="inc_nonopen">Cryptosmart</td><td class="inc_nonopen">Ercom (Ercom.fr)</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Solution de t&eacute;l&eacute;phonie chiffr&eacute;e, qualifi&eacute;e par l&rsquo;ANSSI, et int&eacute;gr&eacute;e &agrave; l&rsquo;offre de service Hesperis-NG</td>
</tr>
<tr>
<td class="inc_open">SG-1308</td><td class="inc_open">Postfix</td><td class="inc_open">postfix.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Serveur de livraison de courrier.</td>
</tr>
<tr>
<td class="inc_open">SG-1374</td><td class="inc_open">Postfix</td><td class="inc_open">postfix.org</td><td>2.9</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Serveur de livraison de courrier.<br/>Version native de Debian 7</td>
</tr>
<tr>
<td class="inc_open">SG-1190</td><td class="inc_open">Cyrus-IMAP</td><td class="inc_open"></td><td>Version distrib</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Serveur de messagerie multiprotocole.</td>
</tr>
<tr>
<td class="inc_open">SG-1370</td><td class="inc_open">Icasso</td><td class="inc_open">Aliasource</td><td></td><td class="statut_M">M</td><td></td><td class="comm_italic">Personnalisation d'OBM (Linagora).</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1191</td><td class="inc_nonopen">Microsoft Exchange</td><td class="inc_nonopen">Microsoft</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Syst&egrave;me de messagerie de Microsoft.</td>
</tr>
<tr>
<td class="inc_open">SG-1345</td><td class="inc_open">OBM</td><td class="inc_open">obm.org</td><td></td><td class="statut_M">M</td><td>Oui</td><td class="comm_italic">Solution de messagerie collaborative</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1266</td><td class="inc_nonopen">
Exchange ActiveSync (EAS)
</td><td class="inc_nonopen">Microsoft</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">EAS est un protocole propri&eacute;taire de synchronisation de mail, agendas, contacts, t&acirc;ches, con&ccedil;u &agrave; l&rsquo;origine pour les &eacute;changes entre outlook et un serveur Exchange. Standard de fait sur les &eacute;quipements mobiles. A la diff&eacute;rence d&rsquo;un standard IETF tel que calDAV ou cardDAV, EAS poss&egrave;de une fonction de &laquo;&nbsp;push&nbsp;&raquo;&nbsp;: le serveur a la possibilit&eacute; de notifier ses clients de tout &eacute;v&egrave;nement. Il existe des impl&eacute;mentations opensource d&rsquo;EAS, telles que Z-Push.</td>
</tr>
<tr>
<td class="inc_open">SG-1279</td><td class="inc_open">Roundcube</td><td class="inc_open">roundcube.net</td><td>Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Client webmail libre utilisant AJAX.<br/>Webmail - p&eacute;rim&egrave;tre DTNUM</td>
</tr>
<tr>
<td class="inc_open">SG-1586</td><td class="inc_open">Lime Survey (service web)</td><td class="inc_open">Limesurvey.org</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Outils de sondages (enqu&ecirc;te en ligne).  Des instances mise en ligne en interne MIOM  sont disponibles (ex: https://questionnaires-en-ligne.sgami-ouest.interieur.rie.gouv.fr/index.php/)</td>
</tr>
<tr>
<td class="inc_open">SG-1197</td><td class="inc_open">Sympa</td><td class="inc_open"></td><td></td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Gestion de liste de diffusion.</td>
</tr>
<tr>
<td class="inc_open">SG-1556</td><td class="inc_open">RocketChat</td><td class="inc_open">https://rocket.chat/</td><td>Version SILL</td><td class="statut_R">R</td><td>Non</td><td class="comm_italic">Outil de communication en &eacute;quipe (chat).</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1606</td><td class="inc_nonopen">Tchap</td><td class="inc_nonopen">Services interminist&eacute;riels</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">
Solution interminist&eacute;rielle de messagerie instantan&eacute;e. 

https://www.numerique.gouv.fr/outils-agents/tchap-messagerie-instantanee-etat/

</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1607</td><td class="inc_nonopen">Osmose</td><td class="inc_nonopen">Services interminist&eacute;riels</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">plateforme collaborative interminist&eacute;rielle. https://osmose.numerique.gouv.fr/. La solution existe, mais Resana est la solution pr&eacute;conis&eacute;e pour le m&ecirc;me usage.</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1605</td><td class="inc_nonopen">Resana</td><td class="inc_nonopen">Services interminist&eacute;riels</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">plateforme collaborative interminist&eacute;rielle. https://resana.numerique.gouv.fr
</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1610</td><td class="inc_nonopen">Audio conf&eacute;rence de l'Etat</td><td class="inc_nonopen">Services interminist&eacute;riels</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Solution interminist&eacute;rielle d&rsquo;audioconf&eacute;rence. https://audioconf.numerique.gouv.fr/
</td>
</tr>
<tr>
<td class="maj_nonopen">SG-1549</td><td class="maj_nonopen">ComU</td><td class="maj_nonopen">Cisco</td><td></td><td class="statut_R">R</td><td>Non</td><td class="comm_italic">Solution de Web conf&eacute;rence d&eacute;ploy&eacute;e par la DTNUM</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1608</td><td class="inc_nonopen">Web conf&eacute;rence de l'Etat</td><td class="inc_nonopen">Services interminist&eacute;riels</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Solution interminist&eacute;ielle de Web conf&eacute;rence.  https://webconf.numerique.gouv.fr/
</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1609</td><td class="inc_nonopen">W&eacute;binaire de l'Etat</td><td class="inc_nonopen">Services interminist&eacute;riels</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Solution interminist&eacute;rielle de Web inaire. https://webinaire.numerique.gouv.fr/
</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1604</td><td class="inc_nonopen">Envol</td><td class="inc_nonopen">Services interminist&eacute;riels</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Service de transfert de fichiers volumineux de la DTNUM. La solution est accessible via https://envol2.si.minint.fr/ ou au travers de la messagerie.</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1603</td><td class="inc_nonopen">France Transfert</td><td class="inc_nonopen">Services interminist&eacute;riels</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Service interminist&eacute;riel de transfert de fichiers volumineux. https://francetransfert.numerique.gouv.fr/  Le service est non DR. Utiliser Envol dans ce cas de figure.</td>
</tr>
</tbody>
</table>
<h3>
<a name="SGAN"> Chapitre 3 : Annuaire - [ AN ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">SG-1307</td><td class="inc_open">OpenLDAP</td><td class="inc_open">openldap.org</td><td>Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Impl&eacute;mentation open-source de LDAP (Lightweight Directory Access Protocol)</td>
</tr>
<tr>
<td class="inc_open">SG-1357</td><td class="inc_open">Apache Directory Studio</td><td class="inc_open">directory.apache.org</td><td>1.5.x</td><td class="statut_R">R</td><td></td><td class="comm_italic">Administration LDAP bas&eacute;e sur Eclipse.Navigateur LDAP bas&eacute; sur le studio Eclipse.</td>
</tr>
<tr>
<td class="inc_open">SG-1274</td><td class="inc_open">phpLDAPadmin (PLA)
</td><td class="inc_open"></td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Client web d'administration LDAP. Derni&egrave;re version&nbsp;: 1.2.3, de 2012. Est ce un projet suivi&nbsp;?</td>
</tr>
</tbody>
</table>
<h3>
<a name="SGSC"> Chapitre 4 : SIG/Cartographie - [ SC ]</a>
</h3>
<p class="comm_italic">Les produits de SIG et cartographie ont &eacute;t&eacute; regroup&eacute;s selon la classification suivante:- serveurs cartographiques- outils desktop (y compris les API)- outils Web (y compris les APIs)Les extensions pour les SGBD sont r&eacute;f&eacute;renc&eacute;es dans le domaine Architecture Technique - Tiers 3 (AT/T3).</p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_nonopen">SG-1203</td><td class="inc_nonopen">ArcGis &ndash; Suite ESRI</td><td class="inc_nonopen">ESRI</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">SIG &ndash; Suite logicielles de gestion de donn&eacute;es cartographiques.</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1582</td><td class="inc_nonopen">IGN (service web)</td><td class="inc_nonopen">IGN</td><td>Version LTS ou ESR disponible</td><td class="statut_A">A</td><td></td><td class="comm_italic">Services web de visualisation de donn&eacute;es g&eacute;ographiques en acc&egrave;s libre. https://geoservices.ign.fr/services-web</td>
</tr>
<tr>
<td class="inc_open">SG-1581</td><td class="inc_open">OpenStreetMap (service web)</td><td class="inc_open">OpenStreetmap</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Base de donn&eacute;es g&eacute;ogrpahique libre et outils de cartographie.  https://www.openstreetmap.fr/
</td>
</tr>
<tr>
<td class="inc_open">SG-1225</td><td class="inc_open">QGIS</td><td class="inc_open">qgis.org</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">SIG - Inscrit au SILL. Quantum GIS &ndash; Logiciel libre de SIG de type "Desktop"</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1212</td><td class="inc_nonopen">GeoConcept</td><td class="inc_nonopen">GeoConcept</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">SIG &ndash; Application permettant de lire et cr&eacute;er de la donn&eacute;e VECTEURS, RASTERS et ATTRIBUTAIRES, compatible avec les bases de donn&eacute;es spatiales (Oracle ou PostGIS) &agrave; l'exception de MapInfo.</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1210</td><td class="inc_nonopen">GCIS (GeoConcept Internet Server) </td><td class="inc_nonopen">GeoConcept</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Geoconcept Internet Server. Serveur cartographique. GeoConcept Internet Server</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1217</td><td class="inc_nonopen">MapInfo</td><td class="inc_nonopen">Pitney Bowes MapInfo</td><td>17</td><td class="statut_A">A</td><td></td><td class="comm_italic">SIG &ndash; Conception de cartes, g&eacute;ocodage, analyse.</td>
</tr>
<tr>
<td class="inc_open">SG-1219</td><td class="inc_open">MapServer</td><td class="inc_open">Universit&eacute; du Minnesota et NASA</td><td></td><td class="statut_M">M</td><td></td><td class="comm_italic">Serveur cartographique. Solution en perte de vitesse.</td>
</tr>
<tr>
<td class="inc_open">SG-1311</td><td class="inc_open">TileCache</td><td class="inc_open">tilecache.org</td><td></td><td class="statut_M">M</td><td></td><td class="comm_italic">Application Python de cache pour la fourniture de tuiles cartographiques. Serveur de cache en utilisation avec MapServer</td>
</tr>
<tr>
<td class="inc_open">SG-1296</td><td class="inc_open">GeoServer</td><td class="inc_open"></td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Serveur de donn&eacute;es cartographique (Java)</td>
</tr>
<tr>
<td class="inc_open">SG-1312</td><td class="inc_open">GeoWebCache</td><td class="inc_open">geowebcache.org</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Application Java de cache pour la fourniture de tuiles cartographiques. Serveur de cache en utilisation avec GeoServer</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1297</td><td class="inc_nonopen">DynMap / Geo</td><td class="inc_nonopen">Business-Geografic.com</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Serveur cartographique. Contexte d'emploi limit&eacute; &agrave; la pr&eacute;fecture de police de Paris. Solution reprise en 2012 par Business-Geografic.</td>
</tr>
<tr>
<td class="inc_open">SG-1211</td><td class="inc_open">G&eacute;oSource</td><td class="inc_open">BRGM</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">
Outil simple de catalogage de donn&eacute;es et services &agrave; r&eacute;f&eacute;rences spatiales - compatible ISO 19118 &amp; 19139 &ndash; Cf http://www.geosource.fr
</td>
</tr>
<tr>
<td class="inc_open">SG-1558</td><td class="inc_open">MapProxy</td><td class="inc_open">Omniscale</td><td></td><td class="statut_O">O</td><td>Non</td><td class="comm_italic">Proxy avec des fonctions de cache, d&rsquo;acc&eacute;l&eacute;ration et de transformation de donn&eacute;es g&eacute;ographiques. Produit &eacute;diteur avec version communautaire. Utilis&eacute; &agrave; l&rsquo;ANFSI.</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1559</td><td class="inc_nonopen">FME Desktop</td><td class="inc_nonopen">Safe software (safe.com)</td><td></td><td class="statut_A">A</td><td>Non</td><td class="comm_italic">ETL d&eacute;di&eacute; au traitement des donn&eacute;es g&eacute;ographiques &ndash; Utilis&eacute; &agrave; l&rsquo;ANFSI et &agrave; la PP.</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1560</td><td class="inc_nonopen">FME Server</td><td class="inc_nonopen">Safe software (safe.com)</td><td></td><td class="statut_A">A</td><td>Non</td><td class="comm_italic">FME Server permet d&rsquo;automatiser et de planifier des traitements r&eacute;alis&eacute;s avec FME Desktop.</td>
</tr>
<tr>
<td class="inc_open">SG-1557</td><td class="inc_open">ADDOK</td><td class="inc_open">Etalab.gouv.fr</td><td></td><td class="statut_R">R</td><td>Non</td><td class="comm_italic">G&eacute;ocodeur et moteur de recherche d&eacute;di&eacute; aux adresses. Mis en œuvre par &eacute;talab sur la BAN (Base adresse nationale) et par l&rsquo;ANFSI sur des donn&eacute;es d&rsquo;adresse enrichies. Le code est publi&eacute; sur Github.</td>
</tr>
</tbody>
</table>
<h3>
<a name="SGSA"> Chapitre 5 : Services d'acc&egrave;s - [ SA ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_nonopen">SG-1503</td><td class="inc_nonopen">DatAdvantage</td><td class="inc_nonopen">Varonis</td><td>6</td><td class="statut_A">A</td><td></td><td class="comm_italic">Audit et protection des donn&eacute;es. P&eacute;rim&egrave;tre r&eacute;duit &agrave; l&rsquo;administration centrale sous contr&ocirc;le DTNUM.</td>
</tr>
<tr>
<td class="inc_open">SG-1574</td><td class="inc_open">KEYCLOAK</td><td class="inc_open">www.keycloak.org</td><td>Version SILL</td><td class="statut_A">A</td><td>Non</td><td class="comm_italic">Keycloak est un logiciel &agrave; code source ouvert permettant d'instaurer une m&eacute;thode d'authentification unique au travers la gestion par identit&eacute; et par acc&egrave;s. C&rsquo;est une solution IAM compl&egrave;te. Le produit est inscrit au SILL mais a &eacute;t&eacute; plac&eacute; en Assujetti car au sein du Minist&egrave;re de l&rsquo;Int&eacute;rieur nous devons utiliser / pr&eacute;coniser en premier lieu LEMONLDAP-NG qui est une solution mise en œuvre au sein de notre administration.</td>
</tr>
<tr>
<td class="inc_open">SG-1402</td><td class="inc_open">LemonLDAP::NG</td><td class="inc_open">OW2</td><td>1.19</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Composant SSO (SAML, OpenID Connect ..) embarqu&eacute; dans les SSO minist&eacute;riels&nbsp;: PASSAGE 2, CHEOPS NG, PROXIMA, PASSAGE PP</td>
</tr>
<tr>
<td class="inc_open">SG-1201</td><td class="inc_open">MIT Kerberos</td><td class="inc_open">mit.edu</td><td></td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">
Kerberos est un 
protocole
 mis en œuvre dans plusieurs distributions&nbsp;: propri&eacute;taire (Microsoft), ou libres&nbsp;: MIT, Heimdal. Cf 

http://web.mit.edu/kerberos/

</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1354</td><td class="inc_nonopen">Validation Server (DVS)</td><td class="inc_nonopen">Dictao</td><td>4.11</td><td class="statut_A">A</td><td></td><td class="comm_italic">Composant proposant des services de validation de signatures, jetons, et certificats.</td>
</tr>
</tbody>
</table>
<h3>
<a name="SGGP"> Chapitre 6 : Gestion de parc &ndash; T&eacute;l&eacute;-d&eacute;ploiement/T&eacute;l&eacute;distribution - [ GP ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">SG-1233</td><td class="inc_open">GLPI</td><td class="inc_open">glpi-project.org</td><td>Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. 
</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1333</td><td class="inc_nonopen">Kace</td><td class="inc_nonopen">Quest software</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">
Appliance de gestion de syst&egrave;me.
Contexte d'emploi  limit&eacute; &agrave; l'exp&eacute;rimentation par la Pr&eacute;fecture de Police</td>
</tr>
</tbody>
</table>
<h3>
<a name="SGRF"> Chapitre 7 : R&eacute;f&eacute;rentiels transverses - [ RF ]</a>
</h3>
<p class="comm_italic"></p>
<h3>
<a name="SGQD"> Chapitre 8 : Qualit&eacute; des donn&eacute;es - [ QD ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_nonopen">SG-1236</td><td class="inc_nonopen">DataMasker</td><td class="inc_nonopen">Cortina</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Outil d'anonymisation uniquement compatible avec le SGBD Oracle.</td>
</tr>
</tbody>
</table>
<h3>
<a name="SGGC"> Chapitre 9 : Gestion de contenu (ECM/GED) - [ GC ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">SG-1237</td><td class="inc_open">Alfresco</td><td class="inc_open">Communaut&eacute; Alfresco</td><td>4.x</td><td class="statut_M">M</td><td>Oui</td><td class="comm_italic">Suite d'outils pour le collaboratif via portail Web.</td>
</tr>
<tr>
<td class="inc_open">SG-1489</td><td class="inc_open">Alfresco</td><td class="inc_open">Communaut&eacute; Alfresco</td><td>5.x</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Suite d'outils pour le collaboratif via portail Web.</td>
</tr>
<tr>
<td class="inc_open">SG-1395</td><td class="inc_open">eZ Publish</td><td class="inc_open">ez.no</td><td>5.1</td><td class="statut_A">A</td><td>Oui</td><td class="comm_italic">Version 5.1 r&eacute;serv&eacute;e &agrave; la migration des sites existants. En raison d'une incertitude sur le maintien de la version communautaire, le produit est plac&eacute; en observation (assujetti).</td>
</tr>
<tr>
<td class="inc_open">SG-1598</td><td class="inc_open">BlueGriffon</td><td class="inc_open">Disruptive Innovations </td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Editeur de pages HTML</td>
</tr>
<tr>
<td class="maj_open">SG-1614</td><td class="maj_open">Joomla</td><td class="maj_open">Joomla.org</td><td>5.X</td><td class="statut_R">R</td><td></td><td class="comm_italic">Cr&eacute;ation de sites Intranet institutionnels.</td>
</tr>
<tr>
<td class="maj_open">SG-1394</td><td class="maj_open">Joomla&nbsp;!</td><td class="maj_open">Joomla.org</td><td>4.x</td><td class="statut_M">M</td><td></td><td class="comm_italic">Cr&eacute;ation de sites Intranet institutionnels.</td>
</tr>
<tr>
<td class="inc_open">SG-1238</td><td class="inc_open">Dokuwiki</td><td class="inc_open">dokuwiki.org</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">
Wiki simple et ne n&eacute;cessitant pas de base de donn&eacute;e. Licence GNU GPL V2.
Utilisation des plugins inclus dans le package distribu&eacute; par le fournisseur</td>
</tr>
<tr>
<td class="inc_open">SG-1239</td><td class="inc_open">Mediawiki</td><td class="inc_open"></td><td>Version SILL</td><td class="statut_A">A</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. </td>
</tr>
<tr>
<td class="inc_open">SG-1403</td><td class="inc_open">Drupal</td><td class="inc_open">Drupal.org</td><td>8.x</td><td class="statut_R">R</td><td></td><td class="comm_italic">CMS autoris&eacute; sur le p&eacute;rim&egrave;tre ANFSI</td>
</tr>
</tbody>
</table>
<h3>
<a name="SGCM"> Chapitre 10 : Composants m&eacute;tiers - [ CM ]</a>
</h3>
<p class="comm_italic"></p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">SG-1501</td><td class="inc_open">Maarch</td><td class="inc_open">Maarch</td><td></td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Solution mise en oeuvre dans l'offre minist&eacute;rielle de GEC (Gestion &eacute;lectronique de courrier).</td>
</tr>
<tr>
<td class="inc_open">SG-1455</td><td class="inc_open">OSS</td><td class="inc_open">opensearchserver.com</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">P&eacute;rim&egrave;tre restreint &agrave; l&rsquo;ANFSI. OSS(Open Search Server), &agrave; privil&eacute;gier en moteur de recherche vertical et pour les besoins d'ordonnancement de t&acirc;ches de crawl.</td>
</tr>
<tr>
<td class="inc_open">SG-1250</td><td class="inc_open">Jdonref</td><td class="inc_open">Pr&eacute;fecture de Police</td><td>V3</td><td class="statut_R">R</td><td></td><td class="comm_italic">Normalisation et g&eacute;olocalisation des adresses postales.</td>
</tr>
<tr>
<td class="inc_open">SG-1346</td><td class="inc_open">LimeSurvey CE</td><td class="inc_open">limesurvey.org</td><td>Derni&egrave;re version stable</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Composant de gestion de sondages et d'enqu&ecirc;tes en ligne</td>
</tr>
<tr>
<td class="inc_open">SG-1500</td><td class="inc_open">Moodle</td><td class="inc_open">moodle.org</td><td>3.x</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Apprentissage en ligne (e-learning)</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1245</td><td class="inc_nonopen">TDI</td><td class="inc_nonopen">Minist&egrave;re</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Traitement des identit&eacute;s (recherche sur la base de la phon&eacute;tisation des noms et pr&eacute;noms). Ce composant a &eacute;t&eacute; utilis&eacute;, sous diff&eacute;rentes versions, dans plusieurs applications&nbsp;notamment  FAED, SIV, FNAEG, FPR, Schengen&nbsp;&hellip;
</td>
</tr>
</tbody>
</table>
<h3>
<a name="SGAD"> Chapitre 11 : Analyse de donn&eacute;es - [ AD ]</a>
</h3>
<p class="comm_italic">Outils de collecte, de stockage, et d&rsquo;analyse de donn&eacute;es</p>
<table>
<thead>
<tr>
<th>R&eacute;f.</th><th>Composant</th><th>Fournisseur</th><th>Version</th><th>Statut</th><th>Supp. LL</th><th>Commentaires</th>
</tr>
</thead>
<tbody>
<tr>
<td class="inc_open">SG-1567</td><td class="inc_open">GRAFANA</td><td class="inc_open">Grafana Labs</td><td>Version SILL</td><td class="statut_R">R</td><td>Non</td><td class="comm_italic">Inscrit au SILL. Outil de visualisation de donn&eacute;es, de g&eacute;n&eacute;ration de tableaux de bord. Souvent utilis&eacute; pour r&eacute;aliser de la supervision des infrastructure et des composants (en compl&eacute;ment de PROMETHEUS). Peut &ecirc;tre une alternative a KIBANA /ELASTICSEARCH.</td>
</tr>
<tr>
<td class="inc_open">SG-1566</td><td class="inc_open">MATOMO</td><td class="inc_open">matomo.org</td><td>Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. Outil d&rsquo;analyse d&rsquo;audience, de statistique de fr&eacute;quentation de site web.</td>
</tr>
<tr>
<td class="new_open">SG-1619</td><td class="new_open">Superset</td><td class="new_open">Apache</td><td>Version SILL</td><td class="statut_R">R</td><td>oui</td><td class="comm_italic">inscrit au SILL</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1167</td><td class="inc_nonopen">BO</td><td class="inc_nonopen">SAP</td><td>XI-R3.1</td><td class="statut_A">A</td><td></td><td class="comm_italic">D&eacute;cisionnel. Le minist&egrave;re est signataire de l'Accord Cadre Interminist&eacute;riel (ACIM) relatif &agrave; l'acquisition de produits SAP-BO. Voir l'ACIM et contacter imp&eacute;rativement cct@interieur.gouv.fr pour conna&icirc;tre la liste des produits retenus.</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1425</td><td class="inc_nonopen">BO</td><td class="inc_nonopen">SAP</td><td>XI R4.1</td><td class="statut_A">A</td><td></td><td class="comm_italic">D&eacute;cisionnel.</td>
</tr>
<tr>
<td class="inc_open">SG-1417</td><td class="inc_open">PENTAHO CE</td><td class="inc_open">Pentaho, Hitachi Data Systems company</td><td></td><td class="statut_A">A</td><td>Oui</td><td class="comm_italic">Portail d&eacute;cisionnel. Produit retir&eacute; du SILL en raison de doutes sur la p&eacute;rennit&eacute; de son offre communautaire.</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1518</td><td class="inc_nonopen">Splunk</td><td class="inc_nonopen">Splunk</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Plateforme d&rsquo;intelligence op&eacute;rationnelle en temps r&eacute;el (collecte et analyse de donn&eacute;es machine)</td>
</tr>
<tr>
<td class="inc_open">SG-1512</td><td class="inc_open">Talend Big Data Integration</td><td class="inc_open">Talend</td><td>6</td><td class="statut_A">A</td><td></td><td class="comm_italic">Version soumise &agrave; souscription.</td>
</tr>
<tr>
<td class="inc_open">SG-1513</td><td class="inc_open">Talend Data Preparation</td><td class="inc_open">Talend</td><td>6</td><td class="statut_A">A</td><td></td><td class="comm_italic">Version commerciale (souscription) du composant pr&eacute;sent dans Talend Data Preparation Free Desktop</td>
</tr>
<tr>
<td class="inc_open">SG-1515</td><td class="inc_open">Talend Data Quality</td><td class="inc_open">Talend</td><td>6</td><td class="statut_A">A</td><td></td><td class="comm_italic">Version soumise &agrave; souscription. </td>
</tr>
<tr>
<td class="inc_open">SG-1517</td><td class="inc_open">Talend Master Data Management (MDM)</td><td class="inc_open">Talend</td><td>6</td><td class="statut_A">A</td><td></td><td class="comm_italic">Version soumise &agrave; souscription. Version communautaire&nbsp;: Talend Open Studio for MDM</td>
</tr>
<tr>
<td class="inc_open">SG-1377</td><td class="inc_open">Lucene</td><td class="inc_open">apache.org</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Moteur d'indexation &agrave; la base de diverses impl&eacute;mentations de moteurs de recherches (Solr, Elastic Search, OpenSearchServer...)</td>
</tr>
<tr>
<td class="inc_open">SG-1454</td><td class="inc_open">SolR</td><td class="inc_open">Apache.org</td><td>Version SILL</td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Inscrit au SILL. SolR est &eacute;crit en java et repose sur Lucene. Il doit &ecirc;tre mis en oeuvre comme une brique de service autonome (interface HTTP, format XML ou JSON)</td>
</tr>
<tr>
<td class="inc_open">SG-1456</td><td class="inc_open">ElasticSearch</td><td class="inc_open">elastic.co</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. </td>
</tr>
<tr>
<td class="inc_open">SG-1530</td><td class="inc_open">Logstash</td><td class="inc_open">elastic.co</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Collecte, traitement, transformation de donn&eacute;es provenant d'une multitude de sources. Souvent associ&eacute; &agrave; Elasticsearch/Logstash/Kibana (ELK).</td>
</tr>
<tr>
<td class="inc_open">SG-1531</td><td class="inc_open">Kibana</td><td class="inc_open">elastic.co</td><td>Version SILL</td><td class="statut_R">R</td><td></td><td class="comm_italic">Inscrit au SILL. Visualisation de donn&eacute;es. Souvent associ&eacute; &agrave; Elasticsearch/Logstash/Kibana (ELK).</td>
</tr>
<tr>
<td class="inc_open">SG-1483</td><td class="inc_open">Hibernate Search</td><td class="inc_open">Hibernate</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Moteur d&rsquo;indexation et de recherche int&eacute;gr&eacute; &agrave; un applicatif d&eacute;velopp&eacute; en java.Hibernate search repose sur lucene. A chaque fois que cela est possible, afin de respecter les principes de modularit&eacute;, il faudra pr&eacute;f&eacute;rer la mise en place de services de recherche autonomes (Voir SolR, OpenSearchServer ou ElasticSearch). P&eacute;rim&egrave;tre restreint &agrave; l&rsquo;ANFSI
</td>
</tr>
<tr>
<td class="inc_open">SG-1163</td><td class="inc_open">Eclipse BIRT</td><td class="inc_open">eclipse.org</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Solution ouverte de data visualisation</td>
</tr>
<tr>
<td class="inc_open">SG-1164</td><td class="inc_open">JasperSoft / JasperReports
</td><td class="inc_open">TIBCO</td><td></td><td class="statut_R">R</td><td>Oui</td><td class="comm_italic">Reporting. Version communautaire.</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1162</td><td class="inc_nonopen">
SAP BW (Business Warehouse)
</td><td class="inc_nonopen">SAP</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Outil d&eacute;cisionnel de SAP &agrave; des fins d&rsquo; analyse et de reporting.</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1300</td><td class="inc_nonopen">PowerCenter</td><td class="inc_nonopen">Informatica</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Int&eacute;gration de donn&eacute;es - contexte d'emploi Projet AGDREF2</td>
</tr>
<tr>
<td class="inc_open">SG-1509</td><td class="inc_open">HADOOP</td><td class="inc_open">Cloudera</td><td></td><td class="statut_R">R</td><td></td><td class="comm_italic">Distribution Cloudera de la pile d&rsquo;outils bigdata HADOOP</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1546</td><td class="inc_nonopen">DSS (Data Science Studio)</td><td class="inc_nonopen">Dataiku (Dataiku.com)</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Plateforme collaborative de data science avec des fonctions de pr&eacute;paration et qualit&eacute; de donn&eacute;es et d&rsquo;analyse pr&eacute;dictive.</td>
</tr>
<tr>
<td class="inc_nonopen">SG-1547</td><td class="inc_nonopen">Tableau</td><td class="inc_nonopen">Tableau software (tableau.com).</td><td></td><td class="statut_A">A</td><td></td><td class="comm_italic">Outil de visualisation et d&rsquo;analyse de donn&eacute;es &agrave; destination des statisticiens et des m&eacute;tiers.</td>
</tr>
</tbody>
</table>