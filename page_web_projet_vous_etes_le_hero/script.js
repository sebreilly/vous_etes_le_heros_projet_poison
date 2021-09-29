let chapitre1 = {
subtitle: "La porte",
text: "Vous vous rendez compte que la porte de de votre cellule est vérouiller. Que faîtes-vous?",
img: "barreaux.jpg",
option: [ fenetre = {
    text: "Examiner la fenetre. Vous remarquer un petit cailloux qui s'y trouve. Vous décidez d'utiliser le cailloux pour forcer l'ouverture de la porte, cependant vous déclanché une alarme.",
    action: 'goToChapter(corridor)'
}, faille = {
    text: "Examiner la faille dans le mur. Vous remarquer un petit objet qui brille. Vous le ramasser et vous rendez compte que c'est un trombone avec une étrange forme. Vous éssayez d'ouvrir la porte avec le trombone. Ça fonctionne.",
    action: 'goToChapter(corridor)'
}]
};

let chapitre2 = {
subtitle: "Le corridor",
text: "Vous vous retrouver au millieu d'un corridor, vous ne savez pas quelle direction prendre. Que se passe t'il?",
img: "corridor.jpg",
option: [ oui = {
    text: "le corridor se remplit d'eau.",
    action: 'goToChapter(eau)'
}, non = {
    text: "Vous n'avez pas déclancher l'alarme et donc les écluves ne se sont pas ouvertes.",
    action: 'goToChapter(allée)'
}] 
}

let chapitre3 = {
subtitle: "L'eau",
text: "Vous vous rendez compte que le corridor se remplit d'eau. Vous devez agir rapidement. Que faîtes-vous?",
img: "eau.jpg",
option: [ droite = {
    text: "Vous allez à droite, mais vous vous rendez compte très vite que la direction que vous avez pris n'a pas d'issus. On vous attrape par dérière et on vous tu.",
    action: 'goToChapter(porte)'
}, gauche = {
    text: "Vous allez à gauche, mais vous vous rendez compte très vite que la direction que vous avez pris n'a pas d'issus. On vous attrape par dérière et on vous tu.",
    action: 'goToChapter(porte)'
}, monter = {
    text: "Vous remarquez une trappe au plafond. Vous vous laissez floter jusqu'à la trappe et vous l'ouvrez.",
    action: 'goToChapter(téléphone)'
}]
}

let chapitre4 ={
subtitle: "Le corridor 2.0",
text: "Vous devez trouver une sortie. Il est temps de prendre une décition. Quel direction prenez-vous?",
img: "corridor.jpg",
option: [ droite = {
    text: "Vous allez à droite, mais vous vous rendez compte très vite que la direction que vous avez pris n'a pas d'issus. On vous attrape par dérière et on vous tu.",
    action: 'goToChapter(porte)'
}, gauche = {
    text: "Vous allez à gauche, mais vous vous rendez compte très vite que la direction que vous avez pris n'a pas d'issus. On vous attrape par dérière et on vous tu.",
    action: 'goToChapter(porte)'
}]
}

let chapitre5 = {
subtitle: "La figure",
text: "Un téléphone se met à sonner. Vous décrocher l'apreile et prenez la ligne. Au bout du fil quelqu'un vous parle: « Vous êtes la cible d'une expérience humaine. Si vous voulez survivre, je vous conseil vivement de vous trouver une arme. Nous nous reverons, à vous de décider dans quelle circonstance. Bonne chance.» Vous trouvez ça étrange. Que faîtes-vous?",
img: "telephone.jpg",
option: [ raccroché = {
    text: "Vous décidez de raccroché la ligne au nez. Vous vous dirigé vers une porte, mais elle est vérouillé. Vous vous retournez et au même moment, quelqu'un vous tire dessus. Vous mourez rapidement.",
    action: 'goToChapter(téléphone)'
}, écouter = {
    text: "Vous décider de l'écouter et de prendre un couteau à proximité. Vous vous retourner et au même monment un homme rentre dans la pièce munit d'une arme à feu. Vous décidez de poignardé l'homme. Vous arrivé à le blesser assez pour qu'il tombe par terre.",
    action: 'goToChapter(couteau)'
}]
}

let chapitre6 = {
subtitle: "L'éthique",
text: "Après avoir blessé l'homme qui a éssayer de vous tuer, vous lui prenez son arme. Vous devez prendre une décition crucial. Que faîtes-vous?",
img: "couteau.jpg",
option: [ assomer = {
    text: "Vous décider de lui épargner la vie en l'assomant. Vous remarquer un objet dépassant de sa poche. Vous fouillez l'homme et dévrez un tournevis. Vous décidez de l'utiliser pour dévisser la poignée de porte. Vous y arrivez et sortez de la pièce. Vous vous retrouvez dans une chambre froide. Une télé catodique s'allume. Vous reconnaisser immédiatement le maniac au téléphone. Il vous parle:« Bravo continu comme ça et tu aura même le droit de m'affronté. Pour l'instant trouve la sortie ma belle petite souris».",
    action: 'goToChapter(pièce)'
}, tuer = {
    text: "Vous décider qu'il est trop dangereux pour votre survie et vous le poignardé à mort.Vous remarquer un objet dépassant de sa poche. Vous fouillez l'homme et dévrez un tournevis. Vous décidez de l'utiliser pour dévisser la poignée de porte. Vous y arrivez et sortez de la pièce. Vous vous retrouvez dans une chambre froide. Une télé catodique s'allume. Vous reconnaisser immédiatement le maniac au téléphone. Il vous parle:« Bravo continu comme ça et tu aura même le droit de m'affronté. Pour l'instant trouve la sortie ma belle petite souris».",
    action: 'goToChapter(pièce)'
}, ouvrire_la_porte = {
    text: "Vous essayer d'ouvrir une porte et vous déboucher dans une salle à manger. Vous regarder autour de vous et vous ne voyez rien de suspect.",
    action: 'goToChapter(cachette)'
}]
}

let chapitre7 = {
subtitle: "cache-cache",
text: "Vous devez trouver un endroit pour vous cacher et vite. Où vous cachez-vous",
img: "cachette.jpg",
option: [ bar = {
    text: "Vous décider de vous cacher dérière le bar. Maleureusement pour vous, le tueur débarque dans la pièce. Il vous voit et vous tu.",
    action: 'goToChapter(couteau)'
}, table = {
    text: "Vous décider de vous cacher sous la table.Maleureusement pour vous, le tueur débarque dans la pièce. Il vous voit et vous tu.",
    action: 'goToChapter(couteau)'
}]
}

let chapitre8 = {
subtitle: "Le retour",
text: "Vous devez devez trouver un moyen de vous échaper, mais comment? La pièce n'a pas d'issu. Que faîtes-vous?",
img: "mur.jpg",
option: [ rebrousser_chemin = {
    text: "Vous décider de revenir sur vos pas, mais à la seconde où vous franchissez la porte, toutes les pièces prennent en feu et vous aussi par le fait même. Vous mourez dans d'atroces souffrances.",
    action: 'goToChapter(pièce)'
}, cadavre = {
    text: "Vous remarquer un cadavre allonger au sol. Vous décidez de le fouiller et vous tomber sur une enveloppe. Vous vous dîtes que l'enveloppe ne vous était pas destiner et vous ne l'ouvrez pas.Vous remarquer que vos mains sont couvert de sang. Au même monent vous appercevez un évier. Vous décider d'ouvrir le robinet pour faire couller l'eau. Au même moment un des murs s'ouvre permettant l'accès à un excalier. Vous décider de l'emprunter et vous vous retrouver dans un sanctuaire. Au bout de ce sanctuaire se dresse une immense porte, mais essayant de l'ouvrir vous vous rendez compte qu'elle est scellée.",
    action: 'goToChapter(sanctuaire)'
}, évier = {
    text: "Vous remarquer que vos mains sont couvert de sang. Au même monent vous appercevez un évier. Vous décider d'ouvrir le robinet pour faire couller l'eau. Au même moment un des murs s'ouvre permettant l'accès à un excalier. Vous décider de l'emprunter et vous vous retrouver dans un sanctuaire. Au bout de ce sanctuaire se dresse une immense porte, mais essayant de l'ouvrir vous vous rendez compte qu'elle est scellée.",
    action: 'goToChapter(sanctuaire)'
}]
}

let chapitre9 = {
subtitle: "Danger",
text: "Soudain, vous entendez un bruit provenant de l'escalier. Vous entendez une voix. C'est celle du maniac de la télé. Que faîtes-vous?",
img: "maniac.jpg",
option: [ attaquer = {
    text: "Vous décider qu'il vaut mieux l'attaquer et en finir avec lui.",
    action: 'goToChapter(attaque)'
}, cacher = {
    text: "Vous décider qu'il vaut mieux se cacher, car il vous semble trop imprévisible.",
    action: 'goToChapter(colonne)'
}]
}

let chapitre10 = {
subtitle: "À l'attaque!",
text: "Le maniac voit que vous foncez sur lui. Vous devez choisir judicieusement votre arme. Quelle arme choisissez-vous?",
img: "armes.jpg",
option: [ couteau = {
    text: "Vous choisiez de l'attaquer avec le couteau, mais il vous désarme et vous tu avec votre propre arme",
    action: 'goToChapter(sanctuaire)'
}, tournevis = {
    text: "Vous choisiez de l'attaquer avec le tournevis, mais il vous désarme et vous tu avec votre propre arme",
    action: 'goToChapter(sanctuaire)'
}, fusil = {
    text: "Vous choisiez de l'attaquer avec votre arme à feu, mais il vous désarme et vous tu avec votre propre arme",
    action: 'goToChapter(sanctuaire)'
}]
}

let chapitre11 = {
subtitle: "Piéger",
text: "Vous êtes caché et le maniac ne vous a pas vu. Cependant vous savez que vous ne pouvez pas rester au même endroit très longtemps. Que faîtes-vous?",
img: "colonne.jpg",
option: [ cailloux = {
    text: "Vous vous rappeler que vous avez un cailloux sur vous. Vous décidez de le lancer pour créer une diversion. Pendant que son attention est ailleurs, vous décider de courir vers l'escalier d'où vous venez, mais vous vous rendez compte très vite que le passage s'est refermer. Vous vous retourner et au même moment le maniac se tiens devant vous. Vous vous faîtes poignarder jusqu'à temps que vous perdez connaissance et vous mourez.",
    action: 'goToChapter(sanctuaire)'
}, réfléchir = {
    text: "Vous savez que le maniac ne tardera pas à vous trouver, mais vous prenez quand même un temps pour réfléchir.",
    action: 'goToCahpter(indice)'
}]
}

let chapitre12 = {
subtitle: "L'indice?",
text: "Vous cherhez un moyen de vous tirer d'affaire. Avez-vous trouvez?",
img: "indice.jpg",
option: [ non = {
    text: "Vous n'avez rien sur vous vous permettant d'avoir l'avantage sur lui. Vous prenez trop de temps à réfléchir et par conséquent il vous trouve. Vous vous faîtes poignarder jusqu'à temps que vous perdez connaissance et vous mourez.",
    action: 'goToChapter(sanctuaire)'
}, oui = {
    text: "Vous vous rappeler l'enveloppe que vous aviez prise. Vous n'avez aucune autre solution, donc vous ouvrez l'enveloppe et remarquer un mot ainsi qu'une seringue remplit d'un certain composé. Vous lisez le mot: « Il m'a trouver. Je ne sais pas combien de temps il me reste à vivre. J'ai mis dans cette enveloppe une seringue remplit d'un poison assez puissant pour le tuer. J'espère que ceci aidera de futurs victimes de cet homme. Il ne doit pas s'en sortir.» Vous maintenant avez l'avantage sur lui. Vous décider d'attaquer le maniac avec le poison.",
    action: 'goToChapter(aide)'
}]
}

let chapitre13 = {
subtitle: "À l'aide!",
text: "Le poison l'a affaiblit mais il est toujours debout. Le maniac vous parle:«Hahaha! Tu pensais vraiment me tuer avec ça, ah! Le poison que tu m'a injecter à atteint sa dâte de péremption. Et bien, on dirais bien que tu vas mourir à présent.» Vous essayer de trouver une échapatoire, mais rien ne vous vient en tête. Vous vous rappeler le tueur dans la cuisine. L'aviez-vous tuer?",
img: "tueur.jpg",
option: [ oui = {
    text: "Maleureusemant pour vous, vous avez tuer le seul homme capable de mettre fin au jour du maniac. Vous vous faîtes poignarder jusqu'à temps que vous perdez connaissance et vous mourez.",
    action: 'goToChapter(porte)'
}, non = {
    text: "Le tueur de la cuisine sors des ombres et poignarde le maniac avec une lamme empoisonée. Il vous demande pardon et vous remerci de l'avaoir épargner. Il croyait que vous étiez le maniac. Vous sortez tous les deux sains et saufs",
    action: 'goToChapter(porte)'
}]
}

let chapterObj = {
porte: chapitre1,
corridor: chapitre2,
eau: chapitre3,
allée: chapitre4,
téléphone: chapitre5,
couteau: chapitre6,
cachette: chapitre7,
pièce: chapitre8,
sanctuaire: chapitre9,
attaque: chapitre10,
colonne: chapitre11,
indice: chapitre12,
aide: chapitre13
};
    

function goToChapter(chapterName) {
const chapitre = chapterName;
console.log(chapitre.subtitle);
console.log(chapitre.text);
}



