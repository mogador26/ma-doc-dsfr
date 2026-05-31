import { defineConfig } from "vitepress";

export default defineConfig({
  ignoreDeadLinks: true,
  outDir: '../dist-site',
  lang: "fr-FR",
  title: "Cadre de cohérence technique",
  description: "Référentiel normatif : intégration, API, données, hébergement, socle de référence.",
  cleanUrls: true,
  appearance: false,
  themeConfig: {
    siteTitle: false,
    logo: "/img/accueil/logo-marianne-gouvernement.png",
    docFooter: {
      next: 'Page suivante',
      prev: 'Page précédente',
    },
    darkModeSwitchLabel: 'Apparence',
    darkModeSwitchTitle: 'Passer en mode sombre',
    lightModeSwitchTitle: 'Passer en mode clair',
    nav: [
      { text: "Accueil", link: "/accueil/" },
      { text: "Passation de marché", link: "/guide-cct-dans-la-commande-publique/" }
    ],
    socialLinks: [
      { icon: 'gitlab', link: 'https://https://gitlab.forge-dc.cloudmi.minint.fr/cct/cct-mi' }
    ],
    sidebar: [
      {
        text: "Fondation et gouvernance",
        collapsed: false,
        items: [
         { text: "finalité", link: "/presentation-generale/"},
         { text: "positionnement", link: "/presentation-generale/cct-postionnement"},
         { text: "périmètre", link: "/presentation-generale/cct-perimetre" },
         { text: "pour qui ?", link: "/presentation-generale/cct-pour-qui" },
         { text: "gouvernance", link: "/presentation-generale/cct-gouvernance"}
         ]
      },
      {
        text: "Guide d’intégration",
        collapsed: false,
        items: [
          {text: "🔭 Vue d’ensemble", link: "/guide-integration/"}         ]
      },
      {
        text: "👤 Utilisateurs",
        collapsed: true,
        items: [
          {text: "introduction",link:"/guide-integration/1-Pilier_utilisateur/"},
          {text: "Identité des usagers",link:"/guide-integration/1-Pilier_utilisateur/1-gestion_identite_usager"},
          {text: "Identité des agents",link:"/guide-integration/1-Pilier_utilisateur/2-gestion_identite_agent"},
          {text: "Identité des personnes morales",link:"/guide-integration/1-Pilier_utilisateur/3-gestion_identite_personne_morale"},
          {text: "ENT",link:"/guide-integration/1-Pilier_utilisateur/4-utilisateur_ENTA"},
          {text: "qualité & parcours",link:"/guide-integration/1-Pilier_utilisateur/6-qualite_parcours_utilisateur"}
        ]
      },
      {
      text: "🔌 Données et échanges",
      collapsed: true,
      items: [
        {text: "introduction",link:"/guide-integration/2-Pilier_donnees_et_API/"},
        {text: "Données et services",link:"/guide-integration/2-Pilier_donnees_et_API/1-Donnees_et_API_Donnees_et_services"},
        {text: "Gestion des échanges",link:"/guide-integration/2-Pilier_donnees_et_API/2-Donnees_et_API_Gestion_des_echanges"},
        {text: "Valorsiation de la donnée",link:"/guide-integration/2-Pilier_donnees_et_API/3-Donnees_et_API_Analyser_et_valoriser_les_donnees"},
        {text: "Données personnelles",link:"/guide-integration/2-Pilier_donnees_et_API/4-Donnees_et_API_Donnees_personnelles"},
        {text: "Cycle de vie",link:"/guide-integration/2-Pilier_donnees_et_API/5-Donnees_et_API_Cycle_de_vie"}, 
        {text: "Stratégie API",link:"/strategie-api"}
      ]
      },
      {
        text: "🛡️ Sécurité",
        collapsed: true,
        items: [
          {text: "SSI et Homologation",link:"/guide-integration/3-Pilier_securite/"}
        ]
      },
      {
        text: "💻⚙️ Fabrique de code",
        collapsed: true,
        items: [
          {text: "introduction",link:"/guide-integration/4-Pilier_fabrique_de_code/"}
        ]
      },
      {
        text: "🏢 Hébergement",
        collapsed: true,
        items: [
          {text: "Hébergement",link:"/guide-integration/5-pilier_hebergement/"},
          {text: "Supervision",link:"/guide-integration/5-pilier_hebergement/2-Pilier_hebergement_service_supervision"}
        ]
      },
      {
      text: "🎖️ Services transverses",
      collapsed: true,
      items: [
        {text: "introduction",link:"/guide-integration/6-Pilier_services_transverses/"}
       ]
      },
      ,
      {
      text: "🏛️ Architecture",
      collapsed: true,
      items: [
        {text: "🔭 vue d'ensemble",link:"/socle-architecture/"}
       ]
      },
      {
      text: "referentiel des OID",
      collapsed: true,
      items:[
        {text: "🔭 vue d'ensemble",link:"/referentiel-des-id"}
      ]
      },
      {
      text: "Produits de référence",
      collapsed: true,
      items:[
        {text: "🔭 vue d'ensemble",link:"/referentiel-des-produits"},
        {text: "📦 produits",link:"/referentiel-des-produits/cct_pro"}
      ]
      },
      {
      text: "Comment contribuer ?",
      collapsed: true,
      items: [
          { text: "Contribuer", link: "/_meta/contributions" },
          { text: "Equipe", link: "/_meta/team"}
        ]
      },
      {
      text: "Versions",
      collapsed: true,
      items: [
        { text: "Versions", link: "/_meta/versions"},
        { text: "Changelog", link: "/_meta/changelog"}
      ]
      },
    ],
    outline:{
     level: [2,3],
     label: "Sur cette page"  
    },
    lastUpdated:{
      text: 'derniere mise à jour',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'   
      }
    },
    footer: {
      "message" : 'CCT - 2026',
      "copyright": "MININT/SG/DTNUM"
    },
    search: { 
      provider: "local", 
      options: {
        translations: {
          button: {
            buttonText: 'Rechercher...',
            buttonAriaLabel: 'Rechercher',
          },
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 }
          },
          modal: {
            backButtonTitle: 'effacer la recherche',
            displayDetails: 'afficher les détails',
            noResultsText: 'Aucun résultat pour ',
            resetButtonTitle: 'resetButtonTitle',
            footer: {
              selectText: 'aller à ce texte',
              navigateText: 'naviguer dans les résultats',
              closeText: 'fermer',
            },
          },
        },
      },
    },
  }
});
