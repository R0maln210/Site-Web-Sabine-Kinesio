// BOUTON THÈME CLAIR ET THÈME SOMBRE

const bouton = document.querySelector(".boutonClairSombre");

bouton.addEventListener("click", () => {
  const html = document.documentElement;
  const nouveauTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", nouveauTheme);
  localStorage.setItem("theme", nouveauTheme);
});

// ANNÉE QUI CHANGE

const debut = new Date(2023, 8);
const aujourdhui = new Date();

let nombreAnnee = aujourdhui.getFullYear() - debut.getFullYear();

if (aujourdhui.getMonth() < debut.getMonth()) {
  nombreAnnee--;
}

document.getElementById("nombreAnnee").textContent = nombreAnnee;

// BOITE DIALOG

const boutonProjet = document.querySelectorAll("[data-dialog]");

boutonProjet.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    const dialog = document.getElementById(bouton.dataset.dialog);
    dialog.showModal();
  });
});

document.querySelectorAll(".fermerDialog").forEach((bouton) => {
  bouton.addEventListener("click", () => {
    bouton.closest("dialog").close();
  });
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});
