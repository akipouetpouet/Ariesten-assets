// Liste de rumeurs et légendes
const rumeurs = [
    "On raconte qu'un barde salace se trimballe à travers la Terre. Pire encore, la rumeur veut que ce soit un connard d'Ariesten.... Pourquoi personne ne l'a attaqué ? Par Akull, qui oserait ? Il sait tout. On ne sait rien. Ni comment il obtient les informations, ni comment il les colporte d'un bout à l'autre du continent. Et surtout, il a un chien de garde particulièrement déplaisant. Non, croyez-moi, vaut mieux pas toucher à ce gars.",
    
    "Le culte de Yang ? Un peu que j'le connais. Plus jamais j'y remets les pieds. Loué soit Yang et ses Apôtres mais eux... Eux, ce sont des barbares. Ils sont là pour faire couler le sang et prétendent le faire en Son nom. Leur gourou, particulièrement, est un type sanguinolent et je suis persuadée qu'il collectionne le crâne de ses victimes... Non, vraiment, peut-être ce qu'ils t'ont dit, fuis-les. Yang ne te souhaiterait pas ça.",
    
    "Oui, c'est vrai, les damnés se regroupent en petite communauté à l'abri des regards. Comment je sais ? Ah, comme si j'allais donner mes sources aussi facilement ! Faut dire, c'est pas plus mal. S'ils sont tous au même endroit, on pourrait s'en débarrasser sans problèmes ! Un petit feu de joie avec les pestiférés, pas mal, non ? Personne ne sait d'où ils viennent ni où ils vont, crois-moi, on a bien assez à faire avec les terriens à nos trousses. On serait tous plus sereins s'ils disparaissaient.",
    
    "Je te dis que c'est louche. Mille ans qu'on nous rabache qu'ils sont les ennemis, tout ça pour quoi ? Parce qu'ils ont la chance de pas avoir fini sur ces terres de mort ? Non, je pense qu'il y a autre chose. Plus haut. Un truc qui nous dépasse... J'ai trop bu, tu dis ? Tu ne réfléchis juste pas assez, tu ne vois même pas au-delà du bout de ton nez ! Bah, je perds mon temps. Peu importe ce qui sépare nos peuples, moi, je suis d'avis que ce n'est pas eux contre nous. C'est les humains contre... Ouais, ouais, je me tais. Je me tais.",
    
    "Mais si les Dieux communiquent avec nous... N'y aurait-il pas un monde où l'on pourrait les séduire ? Je dis ça comme ça, hein, je connais ma place. MAIS. Mais as-tu songé à cette éventualité ? Imagine, Nonmen qui jette son dévolu sur toi, te chouchoute. Peut-être devrais-je devenir prêtre... Pourquoi Nonmen ? Par pitié, tu as déjà vu les tableaux qu'on peint de lui ? Je crèverai pour une chance avec lui.",
    
    "Ne répète rien de ce que je vais dire... C'est un secret terrible. Tu crois les Gardiens immortels ? Tu penses qu'ils pourront nous protéger de toutes les horreurs de ces terres ? Eh bien, tu as tort. Mon arrière-arrière-grand-mère a vu un Gardien mourir de la maladie. Ce n'est qu'une question de temps avant que les miasmes ne les foudroient, je te dis. On n'est en sécurité nulle part, et certainement pas sous eux. Peut-être... Peut-être devrais-je me faire passer pour un terrien et rejoindre leur camp..."
];

// Fonction pour afficher une rumeur aléatoire
function afficherRumeurAleatoire() {
    const bloc = document.getElementById('anecdote');
    
    if (!bloc) {
        console.error("Élément 'anecdote' introuvable");
        return;
    }
    
    // Sélectionner une rumeur au hasard
    const rumeurAleatoire = rumeurs[Math.floor(Math.random() * rumeurs.length)];
    
    // Afficher le texte
    bloc.innerHTML = `<p>${rumeurAleatoire}</p>`;
}

// Charger une rumeur au chargement de la page
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', afficherRumeurAleatoire);
} else {
    afficherRumeurAleatoire();
}
