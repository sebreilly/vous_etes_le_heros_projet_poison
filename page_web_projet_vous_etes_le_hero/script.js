let rocheTrouver = false; // Roche non trouvé par défaut (false)
if (localStorage.getItem("roche") != undefined) { // Est-ce que roche est sauvegardé dans localStorage?
  rocheTrouver = localStorage.getItem("roche") == true; // Si oui, donnons la valeur à rocheTrouver de ce qu'il y a de sauvegardé.
}

function statRoche() {
  rocheTrouver = true;
  localStorage.setItem("roche", rocheTrouver); // rocheTrouver vient de changer de valeur, il faut sauvegarde le tout
  goToChapter("chapitre7");
}

let tuer = false;
if (localStorage.getItem("tuer") != undefined) { // Est-ce que tuer est sauvegardé dans localStorage?
  tuer = localStorage.getItem("tuer") == true; // Si oui, donnons la valeur à tuer de ce qu'il y a de sauvegardé.
}

function statTuer() {
  tuer = true;
  localStorage.setItem("tuer", tuer); // tuer vient de changer de valeur, il faut sauvegarde le tout
  goToChapter("chapitre26");
}

let indice = false;
if (localStorage.getItem("indice") != undefined) { // Est-ce que indice est sauvegardé dans localStorage?
  indice = localStorage.getItem("indice") == true; // Si oui, donnons la valeur à indice de ce qu'il y a de sauvegardé.
}

function statIndice() {
  indice = true;
  localStorage.setItem("indice", indice); // indice vient de changer de valeur, il faut sauvegarde le tout
  goToChapter("chapitre31");
}

function shifterTuer() {
  if (tuer === true) {
    goToChapter("chapitre46");
  } else {
    goToChapter("chapitre47");
  }
}

function shifterIndice() {
  if (indice === true) {
    goToChapter("chapitre43");
  } else {
    goToChapter("chapitre41");
  }
}

function reset() {
  // On change la variable et ensuite on la sauvegarde et non l'inverse, sinon on sauvegarde l'ancienne valeur.
  localStorage.clear();
  rocheTrouver = false;
  localStorage.setItem("roche", rocheTrouver);
  tuer = false;
  localStorage.setItem("tuer", tuer);
  indice = false;
  localStorage.setItem("indice", indice);
  
  goToChapter("chapitre1");
}

let chaptersObj = {
  chapitre1: {
    subtitle: "Le réveil",
    text: "Vous vous réveillez dans une cellule. Vous êtes confus et vous vous demandez comment vous êtes arrivé là. Vous vous levez et vous vous dirigez vers la porte de la cellule.",
    img: "assets/img/reveil.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre2')",
      },
    ],
  },
  chapitre2: {
    subtitle: "Le vérou",
    text: "Vous remarquez que la porte de votre cellule est vérouillée. Vous devez réfléchir rapidement, que faîtes-vous?",
    img: "assets/img/barreaux.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Examiner la faille dans le mur",
        action: "goToChapter('chapitre9')",
      },
      {
        text: "Examiner la fenêtre",
        action: "goToChapter('chapitre3')",
      },
    ],
  },
  chapitre3: {
    subtitle: "Le caillou",
    text: "Vous décidez d'examiner la fenêtre en haut de votre lit. Vous y trouvé un caillou.",
    img: "assets/img/roche.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre4')",
      },
    ],
  },
  chapitre4: {
    subtitle: "L'échapée",
    text: "Vous retournez à la porte de votre cellule et vous brisez le vérou de la porte.",
    img: "assets/img/cellule.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre5')",
      },
    ],
  },
  chapitre5: {
    subtitle: "Le corridor",
    text: "Vous sortez de votre cellule. Vous vous retrouvez dans un corridor.",
    img: "assets/img/corridor.jpg",
    audio: "assets/audio/porte_ouvre.mp3",
    option: [
      {
        text: "Continuer",
        action: "statRoche()",
      },
    ],
  },
  chapitre6: {
    subtitle: "Quel chemin?",
    text: "Vous décidez de rejoindre le centre du corridor. Vous ne pouvez pas rester une minute de plus dans cet endroit.",
    img: "assets/img/corridor.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre11')",
      },
    ],
  },
  chapitre7: {
    subtitle: "Vite de l'eau",
    text: "Tout d'un coup, une alarme se déclenche. Vous vous rendez compte que le corridor commence à se remplir d'eau. Vite! Prenez une direction.",
    img: "assets/img/eau.jpg",
    video: "assets/video/eau.mp4",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Gauche",
        action: "goToChapter('chapitre8')",
      },
      {
        text: "Droite",
        action: "goToChapter('chapitre8')",
      },
      {
        text: "Monter vers le plafond",
        action: "goToChapter('chapitre12')",
      },
    ],
  },
  chapitre8: {
    subtitle: "Cul de sac",
    text: "Vous arrivez au bout du corridor. Vous tournez le coin et vous vous rendez compte de votre erreur. Trop tard on vous poignarde à mort dans votre dos.",
    img: "assets/img/poignard.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Recommencer",
        action: "goToChapter('chapitre1')",
      },
    ],
  },
  chapitre9: {
    subtitle: "La faille",
    text: "Vous remarquez une faille dans le mur longeant votre cellule. Vous vous rapprochez de celle-ci et vous y remarquez un petit objet. En le ramassant, vous découvrez qu'il s'agit d'un trombone.",
    img: "assets/img/trombone.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre10')",
      },
    ],
  },
  chapitre10: {
    subtitle: "Une étrange clé",
    text: "Vous remarquez que le trombone a une étrange forme. Vous décidez de retourner à la porte de votre cellule. Vous insérez le trombone dans la serrure de la porte. Miracle! C'est dévérouillé!",
    img: "assets/img/cellule.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre6')",
      },
    ],
  },
  chapitre11: {
    subtitle: "Pour vrai! Quel chemin?",
    text: "Quel chemin allez-vous prendre?",
    img: "assets/img/corridor.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Gauche",
        action: "goToChapter('chapitre8')",
      },
      {
        text: "Droite",
        action: "goToChapter('chapitre8')",
      },
    ],
  },
  chapitre12: {
    subtitle: "La trappe",
    text: "Vous remarquez de la lumière venant du plafond. En vous situant en-dessous de la source lumineuse, vous remarquez une trappe au plafond. Vous décidez de vous laissez floter jusqu'à pouvoir l'ateindre.",
    img: "assets/img/trappe.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre13')",
      },
    ],
  },
  chapitre13: {
    subtitle: "Sorti?",
    text: "Vous ouvrez la trappe au plafond. Vous vous retrouvez dans une étrange cuisine.",
    img: "assets/img/cuisine.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre14')",
      },
    ],
  },
  chapitre14: {
    subtitle: "Le téléphone",
    text: "Tout à coup, un téléphone se met à sonner. Vous trouvez ça louche, mais vous décidez quand même de décrocher la ligne.",
    img: "assets/img/telephone.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre15')",
      },
    ],
  },
  chapitre15: {
    subtitle: "Qui à l'appareil?",
    text: "Une voix masculine se met à vous parlez. « Félicitation, tu as passé la première épreuve, mais gare à toi car la prochaine fois je ne serai peut-être pas d'aussi bonne humeur. Puisque c'est ta première fois, je vais te donner un indice. Prend le couteau.» Que faîtes-vous?",
    img: "assets/img/telephone.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Raccrocher",
        action: "goToChapter('chapitre16')",
      },
      {
        text: "Écouter",
        action: "goToChapter('chapitre19')",
      },
    ],
  },
  chapitre16: {
    subtitle: "Un fou",
    text: "Vous décidez de ne pas lui faire confiance et vous lui raccrochez au nez.",
    img: "assets/img/telephone.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre17')",
      },
    ],
  },
  chapitre17: {
    subtitle: "Une issue?",
    text: "Vous remarquez une porte à votre droite. Vous vous précipitez vers elle, mais elle est barricadée.",
    img: "assets/img/porte.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre18')",
      },
    ],
  },
  chapitre18: {
    subtitle: "Le jour de la marmotte",
    text: "Vous vous retournez et vous tombez nez à nez avec un individu masqué. Vous remarquez qu'il vous pointe avec une arme à feu. Avant même que vous ayez le temps de comprendre, vous vous faîtes tirer dessus à plusieurs reprises jusqu'à ce que vous sucombez à vos blessures.",
    img: "assets/img/gun.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Recommencer",
        action: "goToChapter('chapitre13')",
      },
    ],
  },
  chapitre19: {
    subtitle: "Un conseil",
    text: "Vous décidez d'écouter cet homme étrange et vous attrapez le premier couteau que vous voyez.",
    img: "assets/img/couteau.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre20')",
      },
    ],
  },
  chapitre20: {
    subtitle: "Le jour de la marm...Quoi?",
    text: "Vous vous retournez et vous tombez nez à nez avec un individu masqué. Vous remarquez qu'il vous pointe avec une arme à feu. Avant même qu'il puisse faire quoi que se soit, vous le poignardez dans la cuisse et  vous évitez de justesse de vous faire tirer dessus.",
    img: "assets/img/gun.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre21')",
      },
    ],
  },
  chapitre21: {
    subtitle: "Un choix difficile",
    text: "Pendant que l'individu est à terre, vous en profitez pour lui prendre son arme. Q'allez-vous faire?",
    img: "assets/img/fusil.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Ouvrir une porte",
        action: "goToChapter('chapitre22')",
      },
      {
        text: "Le tuer",
        action: "statTuer()",
      },
      {
        text: "Le sonner",
        action: "goToChapter('chapitre25')",
      },
    ],
  },
  chapitre22: {
    subtitle: "Trop difficile",
    text: "Vous n'arrivez pas à prendre une décision. Vous décidez donc de fuire en direction d'une porte à votre gauche. Vous vous retrouvez dans une salle à manger.",
    img: "assets/img/resto.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre23')",
      },
    ],
  },
  chapitre23: {
    subtitle: "Cache-cache",
    text: "Vous regardez rapidement autours de vous. Vous devez trouver un endroit où vous cachez avant que l'individu ne vous rattrappe.",
    img: "assets/img/cachette.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Derière le bar",
        action: "goToChapter('chapitre24')",
      },
      {
        text: "Sous une table",
        action: "goToChapter('chapitre24')",
      },
    ],
  },
  chapitre24: {
    subtitle: "Trouvé!",
    text: "Vous avez mal choisi votre cachette. L'agresseur vous rattrappe et sous le coup de la peur vous figez et il vous tu violemment à coups de poings.",
    img: "assets/img/poing.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Recommencer",
        action: "goToChapter('chapitre13')",
      },
    ],
  },
  chapitre25: {
    subtitle: "La moral",
    text: "Malgré qu'il a éssayé de vous tuer, vous avez pitié de lui et vous décidez de l'assommer. Votre agresseur tombe dans les pommes. Vous remarquez qu'il trainait un tournevis avec lui. Vous décidez de l'emprunter.",
    img: "assets/img/poing2.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre27')",
      },
    ],
  },
  chapitre26: {
    subtitle: "Neutralisé",
    text: "Vous prenez la décision de le tuer avec sa propre arme. De toute façon c'était lui ou vous. Vous remarquez qu'il trainait un tournevis avec lui. Vous décidez de l'emprunter. ",
    img: "assets/img/suprime.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre27')",
      },
    ],
  },
  chapitre27: {
    subtitle: "Un outil merveilleux",
    text: "Vous arrivez à une porte barricadée, pas de soucis! À l'aide du tournevis, vous dévissez la poignée de porte et vous voilà passé.",
    img: "assets/img/porte.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre28')",
      },
    ],
  },
  chapitre28: {
    subtitle: "Chambre froide",
    text: "Vous vous retrouvez dans une pièce s'apparentant à une chambre froide. S'est alors qu'une vielle télévision s'allume. Une silouhette apparaît dans l'écran. C'est l'homme qui vous a parlé plus tôt. « Je vois que tu as suivis mon conseil. Très bien ! Cependant j'ai bien peur que le jeu doit s'arrêter ici. Pas d'issu cette fois. Hahaha hahaha ah ! Je vais m'occuper de toi convenablement. En attendant, éssais de trouver une sortie. Ça n'en sera que plus excitant quand nous nous rencontrerons! À très bientôt. Hahaha hahaha hahaha...»",
    img: "assets/img/tv.jpg",
    video: "assets/video/tv.mp4",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre29')",
      },
    ],
  },
  chapitre29: {
    subtitle: "Cerné",
    text: "Quel sadique ! Vous décidez toute fois de l'écouter et de chercher une issue.",
    img: "assets/img/mur.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Rebrousser chemin",
        action: "goToChapter('chapitre30')",
      },
      {
        text: "Fouiller le lavabot",
        action: "goToChapter('chapitre32')",
      },
      {
        text: "Fouiller le cadavre",
        action: "statIndice()",
      },
    ],
  },
  chapitre30: {
    subtitle: "Retour en arrière",
    text: "Ne voyant rien d'intéressant dans cette pièce et ne savant pas quoi faire, vous décidez de rebrousser chemin. Quelle erreur de votre part car une énorme explosion se déclenche et met feu à toute la pièce. Vous mourez dans d'atroces souffrances.",
    img: "assets/img/feu.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Recommencer",
        action: "goToChapter('chapitre28')",
      },
    ],
  },
  chapitre31: {
    subtitle: "Un indice mortel",
    text: "En examinant bien la pièce, vous remarquez les restes d'un cadavre couchés sur le sol. En vous approchant de lui, vous remarquez qu'il détient une enveloppe dans sa main. Vous la prenez",
    img: "assets/img/os.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre32')",
      },
    ],
  },
  chapitre32: {
    subtitle: "Le robinet",
    text: "Vous remarquez un évier dans le coin de la pièce. Ça tombe assez bien car vous avez soif. Vous ouvrez le robinet et vous vous abreuvez.",
    img: "assets/img/boire.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre33')",
      },
    ],
  },
  chapitre33: {
    subtitle: "Passage secret",
    text: "Au même moment, un passage s'ouvre sur votre gauche donnant accès à un escalier. Vous ne perdez pas une minute de plus et vous descendez l'escalier.",
    img: "assets/img/escalier.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre34')",
      },
    ],
  },
  chapitre34: {
    subtitle: "Le sanctuaire",
    text: "Vous vous retrouvez dans une sorte de sanctuaire sacrificiel. En regardant devant vous, vous remarquez une immense porte.",
    img: "assets/img/royal.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre35')",
      },
    ],
  },
  chapitre35: {
    subtitle: "Ouvre toi!",
    text: "Vous essayez de l'ouvrir, mais c'est peine perdu. Celle-ci semble fermée depuis plusieurs années.",
    img: "assets/img/royal.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre36')",
      },
    ],
  },
  chapitre36: {
    subtitle: "Le maniac",
    text: "Tout à coups, vous entendez des murmurs venant de l'escalier. C'est lui, c'est le fou de la télé.",
    img: "assets/img/maniac.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Lancer votre attaque",
        action: "goToChapter('chapitre37')",
      },
      {
        text: "Se cacher derière une colonne",
        action: "goToChapter('chapitre39')",
      },
    ],
  },
  chapitre37: {
    subtitle: "À l'attaque!",
    text: "Vous ne réfléchissez plus! Vous foncez tête première sur lui. Cependant avec quoi l'attaquer?",
    img: "assets/img/armes.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Le fusil",
        action: "goToChapter('chapitre38')",
      },
      {
        text: "Le tournevis",
        action: "goToChapter('chapitre38')",
      },
      {
        text: "Le couteau",
        action: "goToChapter('chapitre38')",
      },
    ],
  },
  chapitre38: {
    subtitle: "Mauvaise idée",
    text: "C'était une très mauvaise idée de l'attaquer tête baissée. Il vous désarme facillement et vous tu avec votre propre arme.",
    img: "assets/img/crane.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Recommencer",
        action: "goToChapter('chapitre33')",
      },
    ],
  },
  chapitre39: {
    subtitle: "Aux abris!",
    text: "Vous vous cachez derière une colonne dans l'espoire qu'il ne vous remarque pas. Vous réfléchissez à une façon de vous sortir de là.",
    img: "assets/img/colonne.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Lancer la roche",
        action: "goToChapter('chapitre40')",
      },
      {
        text: "Réfléchir",
        action: "goToChapter('chapitre42')",
      },
    ],
  },
  chapitre40: {
    subtitle: "La roche",
    text: "Vous retrouvez la roche qui vous a servit plus tôt. Vous décidez de la lancer pour créer une diversion.",
    img: "assets/img/roche.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre41')",
      },
    ],
  },
  chapitre41: {
    subtitle: "Remonter",
    text: "Vous courez en direction de l'escalier dans l'espoire de vous échappez. En arrivant en haut de l'escalier, vous remarquez que le passage est refermé. Vous vous retournez et il est là, juste devant vous. Il vous prend et vous pousse dans l'escalier. Vous faites une descente mortelle et vous vous brisez la nuque.",
    img: "assets/img/escalier2.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Recommencer",
        action: "goToChapter('chapitre29')",
      },
    ],
  },
  chapitre42: {
    subtitle: "Remus méninge",
    text: "Vous éssayez tant bien que mal de trouver une solution, mais rien n'y fait.",
    img: "assets/img/oeil.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "shifterIndice()",
      },
    ],
  },
  chapitre43: {
    subtitle: "L'indice",
    text: "Vous sortez l'indice que vous avez préalablement obtenu sur le cadavre. Vous le lisez:«Si vous lisez ceci c'est que je ne suis déjà plus de ce monde. Cependant j'ai trouvé le point faible de ce psychopate. Prenez la seringue ci-jointe à ce message. Elle contient juste assez d'un poison pour pouvoir le neutraliser. Je vous en conjure, éléminez le ! Il ne doit pas s'en sortir.»",
    img: "assets/img/poison.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre44')",
      },
    ],
  },
  chapitre44: {
    subtitle: "Confrontation",
    text: "Vous sortez de votre cachete et vous vous dirigez vers lui. Il vous remarque, mais il est trop tard! La seringue est déjà insérée dans son torse.",
    img: "assets/img/globule.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "goToChapter('chapitre45')",
      },
    ],
  },
  chapitre45: {
    subtitle: "Contre-attaque",
    text: "Vous vous rendez compte que le poison ne fonctionne pas. «Tu croyais me vaincre avec ça? Hahaha hahaha hahaha ! Le contenu de cette seringue n'est plus très éfficace on dirait! Oh oh ! Maintenant, fais moi plaisir et meurt!»",
    img: "assets/img/mechant.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Continuer",
        action: "shifterTuer()",
      },
    ],
  },
  chapitre46: {
    subtitle: "Mort",
    text: "Il vous injecte du poison directement dans le visage. Votre chaire brûle et vos organes lâchent un par un. C'est la fin pour vous.",
    img: "assets/img/acide.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Recommencer",
        action: "reset()",
      },
    ],
  },
  chapitre47: {
    subtitle: "Un héro innatendu",
    text: "L'individu qui a éssayé de vous tuer plus tôt dans la cuisine surgit de nul part et injecte une autre dose de poison. Cette fois-ci elle est plus récente et donc plus éfficace. Le maniac meurt tranquillement, en silence, tout en souriant et en lâchant ses dernières paroles: « Le bien n'est rien d'autres que le mal déguisé». L'individu vient vous voir. « Désolé d'avoir essayé de te tuer plus tôt. J'ai cru que tu étais lui. Tu m'as épargné alors je t'épargne aujourd'hui. Va t'en maintenant et ne reviens jamais.» Vous sortez sain et sauf. Un vieux sage a dit un jour: «Le bien et le mal est la plus grandes élusion que l'homme n'est jamais inventé. Gare à ceux qui croient faire le bien car... le bien n'est rien d'autres que le mal déguisé.»",
    img: "assets/img/masque.jpg",
    audio: "assets/audio/whoosh.mp3",
    option: [
      {
        text: "Recommencer",
        action: "reset()",
      },
    ],
  },
};
let audio = new Audio("assets/audio/whoosh.mp3");

function goToChapter(chapterName) {
  console.clear();
  let boutonText = "";
  document.querySelector(".nom").innerText = chaptersObj[chapterName].subtitle;
  document.querySelector(".texte").innerText = chaptersObj[chapterName].text;
  

  for (let index = 0; index < chaptersObj[chapterName].option.length; index++) {
      const option = chaptersObj[chapterName].option[index];
      boutonText += `<button class="bouton" onclick="${option.action}">${option.text}</button>`;
  }
  document.querySelector(".option").innerHTML = boutonText;
  audio.currentTime = 0;
  audio.play();

  const videoSrc = chaptersObj[chapterName].video;
  if(videoSrc != undefined){
    document.querySelector(".image").innerHTML = `<video src="${chaptersObj[chapterName].video}" autoplay muted loop></video>`;
  }else{
    document.querySelector(".image").innerHTML = `<img src="${chaptersObj[chapterName].img}"/>`;
  }

  localStorage.setItem("chapitre", chapterName);
}

if (localStorage.getItem("chapitre") != undefined){
  goToChapter(localStorage.getItem("chapitre"));
} else {
  goToChapter("chapitre1");
}

