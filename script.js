
const projects = [
  {
    id: 1,
    title: "SportShield",
    tech: "Algosup",
    description: "Création d'un software pour un anti-vol de ski. Projet réalisé à Algosup.",
    imgSrc: "sportshield.jpg",
    imgAlt: "Aperçu du projet SportShield",
    tags: [],
    github: "https://github.com/Manech-Laguens/2023-2024-project-4-sportshield-team-7"
  },
  {
    id: 2,
    title: "Adopte Un Candidat",
    tech: "Algosup",
    description: "Projet de gestion de candidatures. Réalisé à Algosup.",
    imgSrc: "adopte-candidat.jpg",
    imgAlt: "Aperçu du projet Adopte Un Candidat",
    tags: [],
    github: "https://github.com/Manech-Laguens/2023-2024-project-5-flutter-team-7"
  }
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
  const article = document.createElement("article");
  article.className = "project-card card";
  article.tabIndex = 0;

  article.innerHTML = `
    <div class="project-hero">
      <img src="assets/images/projets/${project.imgSrc}" alt="${project.imgAlt}" loading="lazy" />
    </div>

    <div class="header">
      <div class="title">${project.title}</div>
      <div class="muted">${project.tech}</div>
    </div>

    <p class="muted">${project.description}</p>

    <div class="footer">
      <div class="tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      ${project.github ? `<button class="btn-view-code">Voir le code</button>` : ''}
    </div>
  `;

  if (project.github) {
    const btn = article.querySelector(".btn-view-code");
    btn.addEventListener("click", () => {
      window.open(project.github, "_blank");
    });
  }

  container.appendChild(article);
});

// Gestion des stacks
const stacks = [
  {
    name: "HTML5",
    imgSrc: "assets/images/stacks/language80x80Html.png",
    alt: "HTML5"
  },
  {
    name: "CSS3",
    imgSrc: "assets/images/stacks/language80x80Css.png",
    alt: "CSS3"
  },
  {
    name: "JavaScript",
    imgSrc: "assets/images/stacks/language80x80_js.jpg",
    alt: "JavaScript"
  },
  {
    name: "Java",
    imgSrc: "assets/images/stacks/language80x80Java.png",
    alt: "Java"
  },
  {
    name: "Python",
    imgSrc: "assets/images/stacks/language80x80Python.png",
    alt: "Python"
  },
  {
    name: "PostgreSQL",
    imgSrc: "assets/images/stacks/language80x80PostgreSQL.png",
    alt: "PostgreSQL"
  }
];

const stackContainer = document.querySelector(".stack-grid");

stacks.forEach(stack => {
  const div = document.createElement("div");
  div.className = "stack-item card";

  div.innerHTML = `
    <div class="stackIcon">
      <img src="${stack.imgSrc}" alt="${stack.alt}" />
    </div>
    <div class="skill">
      <div style="font-weight:700;text-align:center">${stack.name}</div>
    </div>
  `;

  stackContainer.appendChild(div);
});

// Gestion Parcours
const parcours = [
  {
    title: "Epitech Montpellier",
    period: "2025 — 2028",
    description: "Master Architecte de Systèmes d'Information"
  },
  {
    title: "Algosup Vierzon",
    period: "2023 — 2025",
    description: "International Software Development School - Cursus 100% en anglais"
  },
  {
    title: "École de Cinéma Montpellier",
    period: "2022 — 2023",
    description: "BTS Métiers de l'Audiovisuel, Option Image"
  }
];

const parcoursContainer = document.querySelector("#parcours .timeline .grid");

parcours.forEach(item => {
  const eventDiv = document.createElement("div");
  eventDiv.className = "event";

  eventDiv.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center">
      <div style="font-weight:700">${item.title}</div>
      <div class="muted">${item.period}</div>
    </div>
    <div class="muted">${item.description}</div>
  `;

  parcoursContainer.appendChild(eventDiv);
});
