// PARTIE DONC C'EST QUOI ?

const boutonsDoncCestQuoi = document.querySelectorAll(".fleche");
const textesDoncCestQuoi = document.querySelectorAll(".texteFlecheDoncCestQuoi");

boutonsDoncCestQuoi.forEach(boutonDoncCestQuoi => {
    boutonDoncCestQuoi.addEventListener('click', () => {
        const idTexte = boutonDoncCestQuoi.dataset.avis;

        boutonsDoncCestQuoi.forEach(b => b.classList.remove('actif'));
        textesDoncCestQuoi.forEach(t => t.classList.remove('actif'));

        boutonDoncCestQuoi.classList.add('actif');
        document.getElementById(idTexte).classList.add('actif');
    });
});

boutonsDoncCestQuoi[0].click();

// PARTIE PENSÉE DU MOMENT

let citationsList = [];
let currentIndex = 0;

// Fonction pour afficher une citation selon son index dans le tableau
function afficherCitation(index) {
    const bloc = document.getElementById('blocPensee');
    const citation = citationsList[index];

    if (!citation) return;

    // Découpe le titre si le JSON contient des sauts de ligne (\n)
    const lignes = citation.title.split('\n').filter(l => l.trim() !== '');

    // Génère les paragraphes avec tes classes CSS
    let htmlContent = lignes.map(ligne =>`<p class="textePenseeDuMoment"><b>${ligne}</b></p>`).join('');

    // Ajoute l'auteur si présent
    if (citation.author && citation.author.trim() !== '') {
        htmlContent += `<p class="textePenseeDuMoment"><em>— ${citation.author}</em></p>`;
    }

    bloc.innerHTML = htmlContent;
}

// Chargement du JSON et initialisation du timer
fetch('citations.json')
    .then(response => response.json())
    .then(data => {
        citationsList = data.citation;

        if (citationsList.length > 0) {
            // Affichage immédiat de la première citation (index 0)
            afficherCitation(currentIndex);

            // Changement de citation toutes les 10 secondes (10000 ms)
            setInterval(() => {
                currentIndex = (currentIndex + 1) % citationsList.length; // Boucle de 0 à la fin
                afficherCitation(currentIndex);
            }, 10000);
        }
    })
    .catch(err => console.error("Erreur chargement citations.json :", err));



// PARTIE PARCE QUE LEUR AVIS COMPTE

const boutonsParceQueLeurAvisCompte = document.querySelectorAll(".miniTitreEtiquettePrenom");
const textesParceQueLeurAvisCompte = document.querySelectorAll(".texteEtiquettePrenom");

boutonsParceQueLeurAvisCompte.forEach(boutonParceQueLeurAvisCompte => {
    boutonParceQueLeurAvisCompte.addEventListener('click', () => {
        const idTexte = boutonParceQueLeurAvisCompte.dataset.avis;

        boutonsParceQueLeurAvisCompte.forEach(b => b.classList.remove('actif'));
        textesParceQueLeurAvisCompte.forEach(t => t.classList.remove('actif'));

        boutonParceQueLeurAvisCompte.classList.add('actif');
        document.getElementById(idTexte).classList.add('actif');
    });
});

boutonsParceQueLeurAvisCompte[0].click();
