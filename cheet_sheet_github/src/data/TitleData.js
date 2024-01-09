export const HomeTitle = [
  {
    id: 'pS6QTXq7',
    title: 'Versionner en local',
    style: 'green-box',
  },
  {
    id: 'b3dtBEfB',
    title: 'Gérer les commits',
    style: 'gray-box',
  },
  {
    id: 'J5XS9vUy',
    title: 'Versionner sur un dépot distant',
    style: 'green-box',
  },
  {
    id: 'VdQR97Qn',
    title: 'Naviguer dans Git Bash',
    style: 'gray-box',
  },
  {
    id: 'VJQa8rnr',
    title: 'Initialisation de Git',
    style: 'gray-box',
  },
  {
    id: 'HbPx8Vjp',
    title: 'Autre commandes',
    style: 'gray-box',
  },
]
export const TeamWorkTitle = [
  {
    id: 'N7AxCfh3',
    title: 'Travailler avec un dépot distant',
    style: 'green-box',
    postion: 'right-part',
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
    postion: 'right-part',
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
    postion: 'right-part',
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
export const TeamWorkTitleLeft = [
  {
    id: 'r4hG88px',
    title: 'Fichiers indispensables',
    style: 'gray-box',
    postion: 'left-part',
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
    postion: 'left-part',
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
