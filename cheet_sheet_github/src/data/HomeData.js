export const LocalVersionData = [
  {
    id: 'a67ab8a7',
    title: 'Versionner en local',
    style: 'green-box',
    defenition: {
      bold: ['git init', 'git add .', 'git commit -m '],
      noBold: ['', '', '"explication"'],
      defId: ['4eGHngD95QGA','5eGskvgD95QGA', '5eG39fgD95QGA'],
      explication: [
        'initialise le dépot (se mettre sur le bon dossier), mieux à faire depuis Github.com',
        'ajoute toutes les modifications ( le . symbolise tout )',
        "créer un nouveau commit git add  pousse les fichiers en zone d'index, git commitles sauvegarde réellement dans un nouveau commit",
      ],
    },
  },
  {
    id: 'b67ab8a7',
    title: 'Gérer les commits',
    style: 'gray-box',
    defenition: {
      bold: ['git log', 'git log -n2', 'git show ', 'git checkout', 'git checkout main' ],
      noBold: ['','git log -n2', 'sha-1','sha-1',''],
      defId: ['oniLn6F8VqVZ','5eGskv40595QGA', '5eG39fgD9Ks3GA', '3u5Qe95p3DtT', '45WQe95p3DtT'],
      explication: [
        'liste des commits',
        'affiche les 2 derniers commits',
        'voir un commit spécifique (cliquer molette souris pour copier)',
        'remettre la version du sha-1',
        'remettre la version la plus récent'
      ],
    },
  },
  {
    id: 'c67ab8a7',
    title: 'Versionner sur un dépot distant',
    style: 'green-box',
    defenition: {
      bold: ['git clone', 'git push -u origin main', 'git push -f origin main'],
      noBold: ['lien Github', '', ''],
      defId: ['5BwTDSD68dKj','5eG6PvgD95QGA', '5eG39fT595QGA'],
      explication: [
        'récupérer le travail depuis le dépôt distant',
        'pousse les modifications vers le serveur',
        'pousse de force les modifications (manipuler avec précaution)'
      ],
    },
  }
]
export const GitBashData = [
  {
    id: '3VShdnnB',
    title: 'Naviguer dans Git Bash',
    style: 'gray-box',
    defenition: {
      bold: ['pwd', 'mkdir', 'touch', 'ls', 'ls -la', 'cd', 'cd ..'],
      noBold: ['','"dossier"', '"file"','', '', 'dossier',''],
      defId: ['b6oMHXXez2y9','b6oMHXXez2y9', 'i9oMHXXez2y9', '01oMHXXez2y9', '92oMHXXez2y9'],
      explication: [
        'savoir dans quel dossier je suis',
        'créer un dossier (Make Directory)',
        'créer un fichier',
        'liste le dossier courant',
        'liste tout plus précisément que ls',
        'aller dans le dossier (Change Directory)',
        "Remonter d'un dossier"
      ],
    },
  },
  {
    id: 'jT5yGf7D',
    title: 'Initialisation de Git',
    style: 'gray-box',
    defenition: {
      bold: ['git config --global user.name', 'git config --global user.email', 'git config --global --list'],
      noBold: ['', '', ''],
      defId: ['eZtpMFphea2i','h8WuFZn9gaXx', 'Gi85YeuQVhZC'],
      explication: [
        '"Mon Nom"',
        '"mon email"',
        'Affiche nom et email'
      ],
    },
  },
  {
    id: 'PWfV7yRP',
    title: 'Autre commandes',
    style: 'gray-box',
    defenition: {
      bold: ['git status', 'git diff'],
      noBold: ['', ''],
      defId: ['67tpMFphea2i','7685YeuQVhZC'],
      explication: [
        'état du fichier',
        'affiche les modifications avant commit'
      ],
    },
  },
]

export const TeamWorkRight = [
  {
    id: 'N7AxCfh3',
    title: 'Travailler avec un dépot distant',
    style: 'green-box',
    defenition: {
      bold: ['git pull', 'git pull --rebase .', 'git merge '],
      noBold: ['', '', '"non_branche"'],
      explication: [
        'récupérer MAJ sur dépot distant',
        'fusionner les branches',
        'fusionner la branche',
      ],
    },
  },
  {
    id: 'VRsg2NfY',
    title: 'Gérer les branches',
    style: 'gray-box',
    defenition: {
      bold: ['git branch', 'git branch .', 'git checkout', 'git branch -d'],
      noBold: ['"non_branche"', '', '"non_branche"', '"non_branche"'],
      explication: [
        'créer branche',
        'afficher les branches',
        'positionne sur la branches',
        'supprimer branche en local (ne pas se mettre sur la branche à supprimer)',
      ],
    },
  },
  {
    id: '6zGdryoK',
    title: 'Gérer les branches sur un dépôt distant',
    style: 'green-box',
    defenition: {
      bold: ['git push --set-upstream origin', 'git branch -a', 'git push origin --delete'],
      noBold: ['"nom_branche"', '', '"nom_branche"'],
      explication: [
        "créer la branche en dépôt distant (il faut d'abord faire un 'git branche nom_branche' pour la créer en local)",
        "voir la liste des branches sur le dépôt distant",
        "supprimer la branche sur le dépôt distant"
    ],
    },
  },
  
]
export const TeamWorkLeft = [
  {
    id: 'r4hG88px',
    title: 'Fichiers indispensables',
    style: 'gray-box',
    defenition: {
      bold: ['.gitignore','','','README.md'],
      noBold: ['','',],
      explication: ["renseigner le chemin de chaque fichierque l'on veur commit.","ex: dossier/fichier.txt (ignore le fichier.txt)",
      "ex: dossier/* (ignore tous les fichiers à l'intérieur du dossier)",
      "Renseigner toutes les informations utiles au projet"
      ],
    },
  },
  {
    id: '9qE3Rxu3',
    title: 'Trouver qui a fait quoi',
    style: 'gray-box',
    defenition: {
      bold: ['git blame', 'git blame -L 10,20', ""],
      noBold: ['index.html','index.html'],
      explication: [
        "affiche les modifs du fichier 'index.html' ligne par ligne",
"afiche les modifs de la ligne 10 à 20",
"(appuyer sur 'q' pour quitter l'affichage)"
      
      
      ],
    },
  },
]
