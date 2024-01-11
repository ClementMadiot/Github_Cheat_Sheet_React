export const LocalVersionData = [
  {
    id: 'a67ab8a7',
    title: 'Versionner en local',
    style: 'green-box',
    defenition: {
      bold: ['git init', 'git add .', 'git commit -m '],
      noBold: ['', '', '"explication"'],
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
      style: 'git_bash_list',
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
      style: 'git_config_list',
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
      style: 'git_config_list',
      explication: [
        'état du fichier',
        'affiche les modifications avant commit'
      ],
    },
  },
]