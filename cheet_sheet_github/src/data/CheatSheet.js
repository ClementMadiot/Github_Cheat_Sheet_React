export const LocalVersionData = [
  {
    id: 'a67ab8a7',
    description: {
      bold: 'git init',
      noBold: ''
    },
    explication: 'initialise le dépot (se mettre sur le bon dossier), mieux à faire depuis Github.com'
  },
  {
    id: 'b67ab8a7',
    description: {
      bold: 'git add .',
      noBold: ''
    },
    explication: 'ajoute toutes les modifications ( le . symbolise tout )'
  },
  {
    id: 'c67ab8a7',
    description: {
      bold: 'git commit -m ',
      noBold: '"explication"'
    },
    explication: "créer un nouveau commit git add  pousse les fichiers en zone d'index, git commitles sauvegarde réellement dans un nouveau commit"
  }
]
export const ManageCommitData = [
  {
    id: '3VShdnnB',
    description: {
      bold: 'git log',
      noBold: ''
    },
    explication: 'liste des commits'
  },
  {
    id: 'jT5yGf7D',
    description: {
      bold: 'git log -n2',
      noBold: ''
    },
    explication: 'affiche les 2 derniers commits'
  },
  {
    id: 'PWfV7yRP',
    description: {
      bold: 'git show ',
      noBold: 'sha-1'
    },
    explication: 'voir un commit spécifique (cliquer molette souris pour copier)'
  },
  {
    id: 'aySvsz7A',
    description: {
      bold: 'git checkout',
      noBold: 'sha-1'
    },
    explication: 'remettre la version du sha-1'
  },
  {
    id: '3r6EkPDR',
    description: {
      bold: 'git checkout main',
      noBold: ''
    },
    explication: 'remettre la version la plus récent'
  }
]
export const OnlineVersionData = [
  {
    id: 'Euf8gjKE',
    description: {
      bold: 'git clone',
      noBold: 'lien Github'
    },
    explication: 'récupérer le travail depuis le dépôt distant'
  },
  {
    id: 'K2LHfutP',
    description: {
      bold: 'git push -u origin main',
      noBold: ''
    },
    explication: 'pousse les modifications vers le serveur'
  },
  {
    id: 'FPYo5g8x',
    description: {
      bold: 'git push -f origin main',
      noBold: ''
    },
    explication: 'pousse de force les modifications (manipuler avec précaution)'
  },
]
export const GitBashData = [
  {
    id: 'zCFoEK68',
    description: {
      bold: 'pwd',
      noBold: ''
    },
    explication: 'savoir dans quel dossier je suis'
  },
  {
    id: '7qVsMuTP',
    description: {
      bold: 'mkdir',
      noBold: '"dossier"'
    },
    explication: 'créer un dossier (Make Directory)'
  },
  {
    id: '4j4Dw2EH',
    description: {
      bold: 'touch',
      noBold: '"file"'
    },
    explication: 'créer un fichier'
  },
  {
    id: 'pMqumV5Z',
    description: {
      bold: 'ls',
      noBold: ''
    },
    explication: 'liste le dossier courant'
  },
  {
    id: 'fn8Fz7UA',
    description: {
      bold: 'ls -la',
      noBold: ''
    },
    explication: 'liste tout plus précisément que ls'
  },
  {
    id: 'UkQ8JRkt',
    description: {
      bold: 'cd',
      noBold: 'dossier'
    },
    explication: 'aller dans le dossier (Change Directory)'
  },
  {
    id: 'QUKh9jWj',
    description: {
      bold: 'cd ..',
      noBold: ''
    },
    explication: "Remonter d'un dossier"
  },
]
export const GitConfigData = [
  {
    id: 'L5EJ2fEw',
    description: {
      bold: 'git config --global user.name',
      noBold: ''
    },
    explication: '"Mon Nom"'
  },
  {
    id: 'f4we9TKP',
    description: {
      bold: 'git config --global user.email',
      noBold: ''
    },
    explication: 'mon email'
  },
  {
    id: 'oJv2iNf9',
    description: {
      bold: 'git config --global --list',
      noBold: ''
    },
    explication: 'Affiche nom et email'
  },
]
export const GitStatusData = [
  {
    id: 'zuK4ehKV',
    description: {
      bold: 'git status',
      noBold: ''
    },
    explication: 'état du fichier'
  },
  {
    id: 'qYGuMvy7',
    description: {
      bold: 'git diff',
      noBold: ''
    },
    explication: 'affiche les modifications avant commit'
  },
]
// {
//   id: '',
//   description: {
//     bold: '',
//     noBold: ''
//   },
//   explication: ''
// },