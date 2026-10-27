const boutons = document.querySelectorAll(".miniTitreEtiquettePrenom");
const textes = document.querySelectorAll(".texteEtiquettePrenom");

boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        const idTexte = bouton.dataset.avis;

        boutons.forEach(b => b.classList.remove('actif'));
        textes.forEach(t => t.classList.remove('actif'));

        bouton.classList.add('actif');
        document.getElementById(idTexte).classList.add('actif');
    });
});

boutons[0].click();
