let chapitre1 = {
subtitle: "La porte",
text: "Vous vous rendez compte que la porte de de votre cellule est vérouiller. Que faîtes-vous?",
img: "barreaux.jpg",
option: []
};

let chapitre2 = {
subtitle: "Le corridor",
text: "Vous vous retrouver au millieu d'un corridor, vous ne savez pas quelle direction prendre. Que se passe t'il?",
img: "corridor.jpg",
option: [] 
}

let chapitre3 = {
subtitle: "L'eau",
text: "Vous vous rendez compte que le corridor se remplit d'eau. Vous devez agir rapidement. Que faîtes-vous?",
img: "eau.jpg",
option: []
}

let chapitre4 ={
subtitle: "Le corridor 2.0",
text: "Vous devez trouver une sortie. Il est temps de prendre une décition. Quel direction prenez-vous?",
img: "corridor.jpg",
option: []
}

let chapitre5 = {
subtitle: "La figure",
text: "Un téléphone se met à sonner. Vous décrocher l'apreile et prenez la ligne. Au bout du fil quelqu'un vous parle: « Vous êtes la cible d'une expérience humaine. Si vous voulez survivre, je vous conseil vivement de vous trouver une arme. Nous nous reverons, à vous de décider dans quelle circonstance. Bonne chance.» Vous trouvez ça étrange. Que faîtes-vous?",
img: "telephone.jpg",
option: []
}

let chapitre6 = {
subtitle: "L'éthique",
text: "Après avoir assomer l'homme qui a éssayer de vous tuer, vous lui prenez son arme. Vous devez prendre une décition crucial. Que faîtes-vous?",
img: "couteau.jpg",
option: []
}

let chapitre7 = {
subtitle: "cache-cache",
text: "Vous devez trouver un endroit pour vous cacher et vite. Où vous cachez-vous",
img: "cachette.jpg",
option: []
}

let chapitre8 = {
subtitle: "Le retour",
text: "Vous devez devez trouver un moyen de vous échaper, mais comment? La pièce n'a pas d'issu. Que faîtes-vous?",
img: "mur.jpg",
option: []
}

let chapitre9 = {
subtitle: "Danger",
text: "Soudain, vous entendez un bruit provenant de l'escalier. Vous entendez une voix. C'est celle du maniac de la télé. Que faîtes-vous?",
img: "maniac.jpg",
option: []
}

let chapite10 = {
subtitle: "À l'attaque!",
text: "Le maniac voit que vous foncez sur lui. Vous devez choisir judicieusement votre arme. Quelle arme choisissez-vous?",
img: "armes.jpg",
option: []
}

let chapitre11 = {
subtitle: "Piéger",
text: "Vous êtes cacher et le maniac ne vous a pas vu. Cependant vous savez que vous ne pouvez pas rester au même endroit très longtemps. Que faîtes-vous?",
img: "colonne.jpg",
option: []
}

let chapitre12 = {
subtitle: "L'indice?",
text: "Vous cherhez un moyen de vous tirer d'affaire. Avez-vous trouvez?",
img: "indice.jpg",
option: []
}

let chapitre13 = {
subtitle: "À l'aide!",
text: "Le poison l'a affaiblit mais il est toujours debout. Le maniac vous parle:«Hahaha! Tu pensais vraiment me tuer avec ça, ah! Le poison que tu m'a injecter à atteint sa dâte de péremption. Et bien, on dirais bien que tu vas mourir à présent.» Vous essayer de trouver une échapatoire, mais rien ne vous vient en tête. Vous vous rappeler le tueur dans la cuisine. L'aviez-vous tuer?",
img: "tueur.jpg",
option: []
}


let chapterObj = {
porte: chapitre1,
};

function goToChapter(chapterName) {
let chapitre = chapterObj.slug;
console.log(chapitre);
}
